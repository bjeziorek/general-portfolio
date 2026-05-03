self.onmessage = (event) => {
  const code = event.data
console.log('in worker')
  const highlighted = code.split("\n").map((line, i) => ({
    i,
    html: highlight(line)
  }))

  postMessage(highlighted)
}


function highlight(line) {

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
