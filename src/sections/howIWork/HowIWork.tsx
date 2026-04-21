import { Container, Grid, Text, Heading, Card, Flex, Box } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../providers/ThemeContext";
import { DontCard } from "./DontCard";
import { WorkCard } from "./WorkCard";
import { SidebarNavItem } from "../../navigation/SidebarNavItem";


export function HowIWork() {
    const { t } = useTranslation()
    const { color } = useTheme()

    return (
        <Container>
            <Heading size="6" color={color}>{t("work.h_work")}</Heading>
            <Box mb="6">
                <Flex direction="column" gap="4">
            <Text>{t("work.intro_1")}</Text>
            <Text>{t("work.intro_2")}</Text>
          </Flex> 
           </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <WorkCard
                    title={t("work.h_how_1")}
                    things={[
                        t("work.list_how_1_1"),
                        t("work.list_how_1_2"),
                        t("work.list_how_1_3"),
                    ]}
                />
                <WorkCard
                    title={t("work.h_how_2")}
                    things={[
                        t("work.list_how_2_1"),
                        t("work.list_how_2_2"),
                        t("work.list_how_2_3"),
                        t("work.list_how_2_4"),
                    ]}
                />
                <WorkCard
                    title={t("work.h_how_3")}
                    things={[
                        t("work.list_how_3_1"),
                        t("work.list_how_3_2"),
                        t("work.list_how_3_3"),
                        t("work.list_how_3_4"),
                    ]}
                />

                <Card>
                    <Flex justify="between" direction="column" height="100%">
                        <Box mx="4">
                            <Heading size="4" color={color}>{t("work.h_how_4")}</Heading>
                            <Flex direction="column" gap="4">
                                <SidebarNavItem
                                    to="/howIDocument"
                                    label={t("work.h_how_4_docs_link")}
                                    buttonVariant="outline" icon={null} />
                                <Text>{t("work.h_how_4_docs")}:</Text>
                            </Flex>
                            <ul>
                                <li>
                                    <Flex gap="2" direction='column'>
                                        <Text>{t("work.list_how_4_2")}:</Text>
                                        <ul>
                                            <li>
                                                <SidebarNavItem
                                                    to="/howIDocument"
                                                    label={t("work.list_how_4_2_link_1")}
                                                    buttonVariant="outline" icon={null} />
                                            </li>
                                            <li>
                                                <SidebarNavItem
                                                    to="/howIDocument"
                                                    label={t("work.list_how_4_2_link_2")}
                                                    buttonVariant="outline" icon={null} />
                                            </li>
                                            <li>
                                                <SidebarNavItem
                                                    to="/howIDocument"
                                                    label={t("work.list_how_4_2_link_3")}
                                                    buttonVariant="outline" icon={null} />
                                                <li>
                                                    <SidebarNavItem
                                                        to="/howIDocument"
                                                        label={t("work.list_how_4_2_link_4")}
                                                        buttonVariant="outline" icon={null} />
                                                </li>
                                            </li>
                                        </ul>
                                    </Flex>
                                </li>
                                <li>
                                    <Text>{t("work.list_how_4_3")}:</Text>
                                    <ul>
                                        <li>
                                            <SidebarNavItem
                                                to="/howIDocument"
                                                label={t("work.imi_link")}
                                                buttonVariant="ghost" icon={null} />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Text>{t("work.list_how_4_4")}:</Text>
                                     <ul>
                                        <li>
                                            <SidebarNavItem
                                                to="/howIDocument"
                                                label={t("work.dishes_link")}
                                                buttonVariant="ghost" icon={null} />
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </Box>
                    </Flex>
                </Card>
            </Grid>

            <Heading size="6" color={color}>{t("work.h_dont")}</Heading>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <DontCard title={t("work.h2_dont_1")} description={"work.dont_1"}></DontCard>
                <DontCard title={t("work.h2_dont_2")} description={"work.dont_2"}></DontCard>
                <DontCard title={t("work.h2_dont_3")} description={"work.dont_3"}></DontCard>
                <DontCard title={t("work.h2_dont_4")} description={"work.dont_4"}></DontCard>
                <DontCard title={t("work.h2_dont_5")} description={"work.dont_5"}></DontCard>
                <DontCard title={t("work.h2_dont_6")} description={"work.dont_6"}></DontCard>
                <DontCard title={t("work.h2_dont_7")} description={"work.dont_7"}></DontCard>
                <DontCard title={t("work.h2_dont_8")} description={"work.dont_8"}></DontCard>
                <DontCard title={t("work.h2_dont_9")} description={"work.dont_9"}></DontCard>
            </Grid>
        </Container>
    )
}