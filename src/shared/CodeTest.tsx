import { Box, Card, Text, Tabs } from "@radix-ui/themes";
import { CodeBlock } from "./CodeBlock";
import { useTranslation } from "react-i18next";
import React from "react";

interface CodeTestProps {
    code: string,
    test: string,
    title1: string,
    title2: string,
    runInWorker?:boolean
}

const MemoCodeBlock = React.memo(CodeBlock)

export function CodeTest(props: CodeTestProps) {
    const { code, test, title1, title2, runInWorker=true } = props;
    const { t } = useTranslation();

    return (
        <Card my='4'>
            <Tabs.Root defaultValue="code">
                <Tabs.List>
                    <Tabs.Trigger value="code">{t('universal.code')}</Tabs.Trigger>
                    <Tabs.Trigger value="test">{t('universal.test')}</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="code">
                        <Text>{title1}</Text>
                        <MemoCodeBlock code={code} runInWorker={runInWorker}/>
                    </Tabs.Content>

                    <Tabs.Content value="test">
                        <Text>{title2}</Text>
                        <MemoCodeBlock code={test} runInWorker={runInWorker} />
                    </Tabs.Content>

                </Box>
            </Tabs.Root>

        </Card>
    )

}