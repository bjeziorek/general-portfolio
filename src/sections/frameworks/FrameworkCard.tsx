import { Box, Text, Card, Flex, Heading } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SidebarNavItem, type ButtonVariant } from "../../navigation/SidebarNavItem";
import { useTheme } from "../../providers/ThemeContext";

interface Link {
    isExternal: boolean,
    name: string,
    linkURL: string,
    buttonVariant: ButtonVariant,
    isIconBehind?: boolean
}

interface FrameworkCardProps {
    name: string,
    title: string,
    description: string,
    link: Link,
}

export function FrameworkCard(props: FrameworkCardProps) {
    const { t } = useTranslation();
    const { name, title, description, link } = props;
    const { color } = useTheme()

    return (
        <Card>
            <Flex justify="between" direction="column" height="100%">
                <Box m="4" mt="-2">
                    <Heading size="5" color={color}>{t(name)}</Heading>
                    <Heading size="4" color={color}>{t(title)}</Heading>
                    <Text>{t(description)}</Text>
                </Box>
                {link.linkURL?
                (
                <Box m="4">
                    <Flex gap="3" wrap="wrap">
                        <SidebarNavItem
                            to={link.linkURL}
                            label={t(link.name)}
                            icon={link.isExternal ? <ExternalLink size={18} /> : null}
                            buttonVariant={link.buttonVariant}
                            isIconBehind={link.isIconBehind}
                        />
                    </Flex>
                </Box>
                ):null
                }
            </Flex>
        </Card>
    )
}