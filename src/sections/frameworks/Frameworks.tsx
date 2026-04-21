import { Box, Card, Container, Text, Grid, Heading, Flex } from "@radix-ui/themes";
import { FrameworkCard } from "./FrameworkCard";
import { useTheme } from "../../providers/ThemeContext";
import { useTranslation } from "react-i18next";


export function Frameworks() {
    const { color } = useTheme()
    const { t } = useTranslation()

    return (
        <Container>
            <Heading color={color}>{t('menu.frameworks')}</Heading>
            <Box mb="4">

                <Text>{t("frameworks.into_description")}</Text>

                <figure>
                    <img
                        src="archFrameworks.png"
                        alt={t("frameworks.into_description_pic")}
                    />
                    <figcaption>
                        {t("frameworks.into_description_pic")}
                    </figcaption>
                </figure>
            </Box>
            <Box mt="8" mb="6">
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <FrameworkCard
                    name={t("frameworks.spine_name")}
                    title={"frameworks.h2_spine"}
                    description={"frameworks.spine_description"}
                    link={{
                        isExternal: false,
                        name: t("frameworks.spine_name"),
                        linkURL: "https://github.com/bjeziorek/spine-framework",
                        buttonVariant: "solid"
                    }}
                />
                <FrameworkCard
                    name={t("frameworks.fedri_name")}
                    title={"frameworks.h2_fedri"}
                    description={"frameworks.fedri_description"}
                    link={{
                        isExternal: true,
                        name: t("frameworks.fedri_name"),
                        linkURL: "https://github.com/bjeziorek/fedri-framework",
                        buttonVariant: "solid"
                    }}
                />
                <FrameworkCard
                    name={t("frameworks.cir_name")}
                    title={"frameworks.h2_cir"}
                    description={"frameworks.cir_description"}
                    link={{
                        isExternal: true,
                        name: t("frameworks.cir_name"),
                        linkURL: "https://github.com/bjeziorek/cir-framework",
                        buttonVariant: "solid"
                    }}
                />
                <FrameworkCard
                    name={t("frameworks.mako_name")}
                    title={"frameworks.h2_mako"}
                    description={"frameworks.mako_description"}
                    link={
                        {
                        isExternal: true,
                        isIconBehind:true,
                        name: t("frameworks.mako_name"),
                        linkURL: "",
                        buttonVariant: "solid"
                    }
                }
                />
                  <FrameworkCard
                    name={t("frameworks.maze_name")}
                    title={"frameworks.h2_maze"}
                    description={"frameworks.maze_description"}
                    link={{
                        isExternal: true,
                        isIconBehind:true,
                        name: t("frameworks.maze_name"),
                        linkURL: "",
                        buttonVariant: "solid"
                    }}
                />
                <FrameworkCard
                    name={t("frameworks.imi_name")}
                    title={"frameworks.h2_imi"}
                    description={"frameworks.imi_description"}
                    link={{
                        isExternal: true,
                        isIconBehind:true,
                        name: t("frameworks.imi_link"),
                        linkURL: "https://randomindexed.blogspot.com/2026/03/r-what-happens-when-r-engineer-realises.html",
                        buttonVariant: "ghost"
                    }}
                />              
            </Grid>
            </Box>

            <Card mt="4">
                <Box m="4">
                    <Heading size="6">{t("frameworks.h_ip")}</Heading>
                    <Flex direction="column" gap="4">
                        <Text>{t("frameworks.h_ip_intro_1")}</Text>
                        <Text>{t("frameworks.h_ip_intro_2")}</Text>
                        <Text>{t("frameworks.h_ip_intro_3")}</Text>
                        <Box mt="-4">
                            <ul>
                                <li>
                                    <Text>{t("frameworks.list_ip_1")}</Text>
                                </li>
                                <li>
                                    <Text>{t("frameworks.list_ip_2")}</Text>
                                </li>
                            </ul>
                        </Box>
                        <Text>{t("frameworks.h_ip_intro_4")}</Text>
                        <Text>{t("frameworks.h_ip_intro_5")}</Text>
                    </Flex>
                </Box>
            </Card>
        </Container>
    )
}