import { Box, Text, Card, Flex, Heading } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../providers/ThemeContext";


interface DontCardProps {
    title: string,
    description: string
}

export function DontCard(props: DontCardProps) {
    const { t } = useTranslation();
    const { title, description } = props;
    const { color } = useTheme()

    return (
        <Card>
            <Flex justify="between" direction="column" height="100%">
                <Box m="4" mt="-2">
                    <Heading size="4" color={color}>{t(title)}</Heading>
                    <Text>{t(description)}</Text>
                </Box>
            </Flex>
        </Card>
    )
}