import { Home,  Hammer, DraftingCompass, BriefcaseBusiness } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { SidebarNavItem } from "./SidebarNavItem";
import { useTheme } from "../providers/ThemeContext";

export default function Sidebar() {
    const { color } = useTheme();

    const { t } = useTranslation();

    return (
        <Box
            className="hidden md:flex"
            width="280px"
            p="4"
            m="4"
            style={{
                borderRight: "1px solid var(--gray-6)",
                borderRadius: "var(--radius-3)",
                background: "var(--color-panel-solid)",
            }}
        >
            <Flex direction="column" gap="3" width="100%">
                <Heading
                    color={color} size="4" mb="2" weight="medium" trim="both">
                    {t("menu.navigation")}
                </Heading>

                <SidebarNavItem
                    to="/"
                    label={t("menu.main")}
                    icon={<Home size={18} />}
                />

                <SidebarNavItem
                    to="/projects"
                    label={t("menu.projects")}
                    icon={<DraftingCompass size={18} />}
                />

                {/* <SidebarNavItem
                    to="/caseStudies"
                    label={t("menu.caseStudies")}
                    icon={<Presentation size={18} />}
                />

                <SidebarNavItem
                    to="/skills"
                    label={t("menu.skills")}
                    icon={<Brain size={18} />}
                /> */}

                <SidebarNavItem
                    to="/frameworks"
                    label={t("menu.frameworks")}
                    icon={<Hammer size={18} />}
                />

                <SidebarNavItem
                    to="/work"
                    label={t("menu.howIWork")}
                    icon={<BriefcaseBusiness size={18} />}
                />

                {/* <SidebarNavItem
                    to="/faq"
                    label={t("menu.faq")}
                    icon={<Book size={18} />}
                /> */}
            </Flex>
        </Box>
    );
}
