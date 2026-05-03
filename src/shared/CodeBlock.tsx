import { Box, Flex } from "@radix-ui/themes";
import { useEffect, useState, type JSX } from "react";
import { snippetCache } from "../cache/cache";

// function highlight(line: string) {

//     let html = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");


//     // keywords
//     // html = html.replace(/\b(const|let|return|function|if|else)\b/g,
//     //     `<span style="color: var(--accent-9)">$1</span>`);

//     // strings
//     html = html.replace(/(".*?"|'.*?')/g,
//         `<span style="color: var(--green-9)">$1</span>`);

//     // JSX tags
//     html = html.replace(/(&lt;\/?[A-Za-z0-9]+.*?&gt;)/g,
//         `<span style="color: var(--blue-9)">$1</span>`);

//     // comments
//     html = html.replace(/(\/\/.*$)/g,
//         `<span style="color: var(--gray-9)">$1</span>`);

//     return html;
// }

// const cache = new Map<string, JSX.Element[]>();

// function getHighlighted(code: string): JSX.Element[] {
//     const cached = cache.get(code);
//     if (cached) return cached;

//     const result = code.split("\n").map((line, i) => (
//         <Flex key={i}>
//             <Box width="12">{i + 1}{"  "}</Box>
//             <div dangerouslySetInnerHTML={{ __html: highlight(line) }} />
//         </Flex>
//     ));

//     cache.set(code, result);
//     return result;
// }


// export function CodeBlock({ code }: { code: string }) {
//   const [html, setHtml] = useState<JSX.Element[] | null>(null)

//   useEffect(() => {
//     if (snippetCache.has(code)) {
//       setHtml(snippetCache.get(code)!)
//       return
//     }



//     const highlighted = code.split("\n").map((line, i) => (
//       <Flex key={i}>
//         <Box width="12">{i + 1}{"  "}</Box>
//         <div dangerouslySetInnerHTML={{ __html: highlight(line) }} />
//       </Flex>
//     ))

//     snippetCache.set(code, highlighted)
//     setHtml(highlighted)
//   }, [code])

//   if (!html) return <div>Loading…</div>

//   return (
//     <Box maxHeight='420px' overflowY="scroll" mb="4">
//       <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
//         {html}
//       </pre>
//     </Box>
//   )
// }

interface CodeBlockProps {
    code: string,
    runInWorker?: boolean
}

export function CodeBlock(props: CodeBlockProps) {
    const { code, runInWorker = false } = props
    const [html, setHtml] = useState<JSX.Element[] | null>(null)


    function highlight(line:string) {

        let html = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");


        // keywords
        // html = html.replace(/\b(const|let|return|function|if|else)\b/g,
        //     `<span style="color: var(--accent-9)">$1</span>`);

        // strings
        html = html.replace(/(".*?"|'.*?')/g,
            `<span style="color: var(--green-9)">$1</span>`);

        // JSX tags
        html = html.replace(/(&lt;\/?[A-Za-z0-9]+.*?&gt;)/g,
            `<span style="color: var(--blue-9)">$1</span>`);

        // comments
        html = html.replace(/(\/\/.*$)/g,
            `<span style="color: var(--gray-9)">$1</span>`);

        return html;
    }


    useEffect(() => {
        if (snippetCache.has(code)) {
            setHtml(snippetCache.get(code)!)
            return
        }

        if (runInWorker) {

            const worker = new Worker(
                new URL('/workers/code-worker.js', import.meta.url),
                { type: 'module' }
            )
            worker.postMessage(code)

            worker.onmessage = (e) => {
                console.log('on msg')
                const highlighted = e.data.map((line: any) => (
                    <Flex key={line.i}>
                        <Box width="12">{line.i + 1}{"  "}</Box>
                        <div dangerouslySetInnerHTML={{ __html: line.html }} />
                    </Flex>
                ))

                snippetCache.set(code, highlighted)
                setHtml(highlighted)
                worker.terminate()
            }

            return () => worker.terminate()

        } else {
            const prehighlighted = code.split("\n").map((line, i) => ({
                i,
                html: highlight(line)
            }))
      
        const highlighted = prehighlighted.map((line: any) => (
            <Flex key={line.i}>
                <Box width="12">{line.i + 1}{"  "}</Box>
                <div dangerouslySetInnerHTML={{ __html: line.html }} />
            </Flex>
        ))
        setHtml(highlighted)
  }

    }, [code, runInWorker])



    if (!html) return <div>Loading...</div>

    return (
        <Box maxHeight='420px' overflowY="scroll" mb="4">
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
                {html}
            </pre>
        </Box>
    )
}

// export function CodeBlock({ code }: { code: string }) {
//     const [html, setHtml] = useState<JSX.Element[] | null>(null)

//     const highlightedLines = useMemo(() => {
//         return code.split("\n").map((line, i) => (
//             <Flex key={i}>
//                 <Box width="12">{i + 1}{"  "}</Box>
//                 <div dangerouslySetInnerHTML={{ __html: highlight(line) }} />
//             </Flex>
//         ));
//     }, [code]);


//   useEffect(() => {
//     if (snippetCache.has(code)) {
//       setHtml(snippetCache.get(code)!)
//       return
//     }

//     snippetCache.set(code, highlightedLines)
//     setHtml(highlightedLines)
//   }, [code, highlightedLines])

//   if (!html) return <div>Loading…</div>

//     return (
//         <Box maxHeight='420px' overflowY="scroll" mb="4">
//             <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
//                 {html}
//             </pre>
//         </Box>
//     );
// }


// export function CodeBlock({ code }: { code: string }) {
//   const [html, setHtml] = useState<string | null>(null)

//   useEffect(() => {
//     // 1. Jeśli mamy w cache → używamy
//     if (snippetCache.has(code)) {
//       setHtml(snippetCache.get(code)!)
//       return
//     }

//     // 2. Jeśli nie → generujemy HTML
//     const generated = highlight(code) // Twoja funkcja kolorująca
//     snippetCache.set(code, generated)
//     setHtml(generated)
//   }, [code])

//   if (!html) return <div>Loading…</div>

//   return (
//     <pre>
//       <code dangerouslySetInnerHTML={{ __html: html }} />
//     </pre>
//   )
// }