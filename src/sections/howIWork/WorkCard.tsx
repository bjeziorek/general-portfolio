import { Box, Text, Card, Flex, Heading } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../providers/ThemeContext";


interface WorkCardProps {
    title: string,
    things: string[]
}

export function WorkCard(props: WorkCardProps) {
    const { t } = useTranslation();
    const { title, things } = props;
    const { color } = useTheme()

    return (
        <Card>
            <Flex justify="between" direction="column" height="100%">
                <Box mx="4">
                    <Heading size="4" color={color}>{t(title)}</Heading>
                    <ul>
                    {things.map(thing=>(
                       <li><Text>{t(thing)}</Text> </li>
                    ))}
                    </ul>
                </Box>
            </Flex>
        </Card>
    )
}