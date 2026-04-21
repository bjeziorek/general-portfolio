import { Box, Text, Card, Flex, Heading } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SidebarNavItem, type ButtonVariant } from "../../navigation/SidebarNavItem";
import { useTheme } from "../../providers/ThemeContext";
import type { TagName } from "../../types/TagNames";
import { Tag } from "../../shared/Tag";

interface Link {
    isExternal: boolean,
    name: string,
    linkURL: string,
    buttonVariant: ButtonVariant,
    isIconBehind?: boolean
}

interface ProjectCardProps {
    title: string,
    description: string,
    skills: string[],
    links: Link[],
    techStack: string[],
    tags?: TagName[]
}

export function ProjectCard(props: ProjectCardProps) {
    const { t } = useTranslation();
    const { title, description, skills, links, techStack, tags = [] } = props;
    const { color } = useTheme()

    return (
        <Card>
            <Flex justify="between" direction="column" height="100%">

                <Box mx="4">
                    <Heading size="4" color={color}>{t(title)}</Heading>
                    <Flex gap="5" direction="column" mb="4" >
                        <Text>{t(description)}</Text>
                        <Box>
                            <Text>{t("caseStudy.skillsDemonstrated")}</Text>
                            <ul>
                                {skills.map(skill => (
                                    <li>
                                        <Text>{t(skill)}</Text>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        {techStack.length
                        ?(
                        <Box>
                            <Text>{t('universal.techStack')}</Text>
                            <ul>
                                {techStack.map(tech => (
                                    <li>
                                        <Text>{tech}</Text>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        ):null}
                    </Flex>
                </Box>

                <Box mx="4">
                    <Flex gap="2" wrap="wrap">
                        {tags.map(tag => (<Tag tagName={tag} />))}
                    </Flex>
                </Box>

                <Box m="4">
                    <Flex gap="3" wrap="wrap">
                        {links.map(link => {
                            return link.isExternal
                                ? (
                                    <SidebarNavItem
                                        to={link.linkURL}
                                        label={t(link.name)}
                                        icon={link.isExternal ? <ExternalLink size={18} /> : null}
                                        buttonVariant={link.buttonVariant}
                                        isIconBehind={link.isIconBehind}
                                    />
                                )
                                : (
                                    <SidebarNavItem
                                        to={link.linkURL}
                                        label={t(link.name)}
                                        icon={link.isExternal ? <ExternalLink size={18} /> : null}
                                        buttonVariant={link.buttonVariant}
                                        isIconBehind={link.isIconBehind}
                                    />
                                )
                        })}
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}