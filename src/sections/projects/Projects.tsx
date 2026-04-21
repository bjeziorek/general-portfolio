import { Grid, Container, Text, Heading, Flex, Box } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { Atom, Boxes, Brain, BrainCircuit, Building2, ChartNoAxesCombined, Code, Drama, LucideGamepad2, MessageCircleCheck } from "lucide-react";
import { useTheme } from "../../providers/ThemeContext";
import { Crow } from "./projectCards/Crow";
import { Origin } from "./projectCards/Origin";
import { MAKO } from "./projectCards/MAKO";
import { Labyrinth } from "./projectCards/Labyrinth";
import { Chaperone } from "./projectCards/Chaperone";
import { Sudoku } from "./projectCards/Sudoku";
import { BOK } from "./projectCards/BOK";
import { Werehouse } from "./projectCards/Werehouse";
import { MLOps } from "./projectCards/MLOps";
import { PAT } from "./projectCards/PAT";
import { Print } from "./projectCards/Print";
import { RODO } from "./projectCards/RODO";
import { CRM } from "./projectCards/CRM";
import { Krystalik } from "./projectCards/Krystalik";
import { Misalignment } from "./projectCards/Misalignment";
import { Kitchen } from "./projectCards/Kitchen";
import { BehaviouralForensics } from "./projectCards/BehaviouralForensics";
import { CIR } from "./projectCards/CIR";
import { Publishing } from "./projectCards/Publishing";


export function Projects() {
    const { t } = useTranslation()
    const { color } = useTheme()

    return (
        <Container>
            <Heading color={color}>{t('menu.projects')}</Heading>
            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Code />
                        {/* <Text ml="2">{t('caseStudy.reactCore')}</Text> */}
                        <Text ml="2">{t('caseStudy.architecture')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.architectureDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <PAT />
                <Krystalik />
            </Grid>


            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Boxes />
                        <Text ml="2">{t('caseStudy.reactCommercial')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.reactCommercialDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <Werehouse />
                <BOK />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Building2 />
                        <Text ml="2">{t('caseStudy.enterprise')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.enterpriseDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <CRM />
            </Grid>


            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <MessageCircleCheck />
                        <Text ml="2">{t('caseStudy.businessAnalysis')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.businessAnalysisDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <Print />
                <RODO />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Atom />
                        <Text ml="2">{t('caseStudy.strategicOperations')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.strategicOperationsDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <CIR />
                <Publishing />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Brain />
                        <Text ml="2">{t('caseStudy.problemSolving')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.problemSolvingDescription")}</Text>
            </Box>

            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <Sudoku />
                <Chaperone />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <ChartNoAxesCombined />
                        <Text ml="2">{t('caseStudy.end2endSolutions')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.end2endSolutionsDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <MAKO />
                <Labyrinth />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <BrainCircuit />
                        <Text ml="2">{t('caseStudy.ai')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.aiDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <MLOps />
                <Misalignment />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <Drama />
                        <Text ml="2">{t('caseStudy.cognitive')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.cognitiveDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <Kitchen />
                <BehaviouralForensics />
            </Grid>

            <Box mb="4">
                <Heading size="4" color={color}>
                    <Flex align="center" justify="center" mb="-4">
                        <LucideGamepad2 />
                        <Text ml="2">{t('caseStudy.gameDev')}</Text>
                    </Flex>
                </Heading>
                <Text>{t("caseStudy.gameDevDescription")}</Text>
            </Box>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                <Origin />
                <Crow />
            </Grid>
        </Container>
    )
}