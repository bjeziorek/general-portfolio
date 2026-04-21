import { Box, Card, Text, Heading, Grid } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { useTheme } from "../providers/ThemeContext";
import { useTranslation } from "react-i18next";

interface ShowcaseProps {
    project: ReactNode,
    why: string
}

export function Showcase(props: ShowcaseProps) {
    const { project, why } = props
    const { color } = useTheme()
    const { t } = useTranslation()

    return (
        <Card>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                {project}
                <Box mx="6">
                    <Heading size="4" color={color}>{t("autShowcase.whyTitle")}</Heading>
                    <Text>{t(why)}</Text>
                </Box>
            </Grid>
        </Card>
    )
}