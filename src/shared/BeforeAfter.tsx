import { Box, Card, Tabs } from "@radix-ui/themes";
// import { CodeBlock } from "./CodeBlock";
import { useTranslation } from "react-i18next";
import React from "react";

interface BeforeAfterProps {
    before: string,
    after: string,
    commentBefore?: React.ReactNode
    commentAfter?: React.ReactNode
    runInWorker?:boolean
}

const LazyCodeBlock = React.lazy(() =>
    import('./CodeBlock').then(m => ({ default: m.CodeBlock }))
)

// const MemoLazyCodeBlock = React.memo(LazyCodeBlock)

export function BeforeAfter(props: BeforeAfterProps) {
    const { before, after, commentBefore = null, commentAfter = null, runInWorker=true } = props;
    const { t } = useTranslation();


    return (
        <Card my='4'>
            <Tabs.Root defaultValue="before">
                <Tabs.List>
                    <Tabs.Trigger value="before">{t('universal.before')}</Tabs.Trigger>
                    <Tabs.Trigger value="after">{t('universal.after')}</Tabs.Trigger>

                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="before">
                        <React.Suspense fallback={<div>Loading...</div> }>
                            <LazyCodeBlock code={before} runInWorker={runInWorker} />
                        </React.Suspense>
                        <Box>{commentBefore}</Box>
                    </Tabs.Content>

                    <Tabs.Content value="after">
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <LazyCodeBlock code={after} runInWorker={runInWorker} />
                        </React.Suspense>
                        <Box>{commentAfter}</Box>
                    </Tabs.Content>

                </Box>
            </Tabs.Root>
        </Card>
    )

}