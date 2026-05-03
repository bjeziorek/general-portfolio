import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { BeforeAfter } from "../../../shared/BeforeAfter";
// import { PATUntanglingHooks } from "./sections/PATUntanglingHooks";
// import { PATSubcomponentCut } from "./sections/PATSubcomponentCut";
// import { PATTyping } from "./sections/PATTyping";
// import { PATTests } from "./sections/PATTests";
// import { PATSkills } from "./sections/PATSkills";
// import { PATLib } from "./sections/PATLib";
import { useTranslation } from "react-i18next";
import { after1, before1 } from "./code";
import { useTheme } from "../../../providers/ThemeContext";
import React from "react";


const LazyPATUntanglingHooks = React.lazy(() => import('./sections/PATUntanglingHooks').then(m => ({ default: m.PATUntanglingHooks })))
const LazyPATSubcomponentCut = React.lazy(() => import('./sections/PATSubcomponentCut').then(m => ({ default: m.PATSubcomponentCut })))
const LazyPATTyping = React.lazy(() => import('./sections/PATTyping').then(m => ({ default: m.PATTyping })))
const LazyPATTests = React.lazy(() => import('./sections/PATTests').then(m => ({ default: m.PATTests })))
const LazyPATLib = React.lazy(() => import('./sections/PATLib').then(m => ({ default: m.PATLib })))
const LazyPATSkills = React.lazy(() => import('./sections/PATSkills').then(m => ({ default: m.PATSkills })))

             
export function PAT() {
    const { t } = useTranslation()
    const { color } = useTheme()

    return (
        <Card>
            <Box m="4">
                <Flex direction="column">
                    <Heading color={color}>
                        {t("pat.title")}
                    </Heading>

                    <Text>
                        {t("pat.intro1")}
                    </Text>

                    <Heading size="4" mb="2" color={color}> {t("pat.h_context")}</Heading>

                    <Text>{t("pat.constext1")}</Text>
                    <Text>{t("pat.constext2")}</Text>
                    <Text>{t("pat.constext3")}</Text>
                    <Text>{t("pat.constext4")}</Text>

                    <Heading size="6" mb="-3" color={color}>
                        {t("pat.h_refactor")}
                    </Heading>

                    <Heading size="4" mb="2" color={color}> {t("pat.h2_refactor")}</Heading>
                    <Text>{t("pat.refactor1")}</Text>
                    <Text>{t("pat.refactor2")}</Text>
                    <ul>
                        <li> {t("pat.list1_refactor")}</li>
                        <li> {t("pat.list2_refactor")}</li>
                        <li> {t("pat.list3_refactor")}</li>
                        <li> {t("pat.list4_refactor")}</li>
                        <li> {t("pat.list5_refactor")}</li>
                        <li> {t("pat.list6_refactor")}</li>
                        <li> {t("pat.list7_refactor")}</li>
                    </ul>
                    <Text>{t("pat.refactor3")}</Text>
                    <Text>{t("pat.refactor4")}</Text>
                    <ul>
                        <li> {t("pat.list8_refactor")}</li>
                        <li> {t("pat.list9_refactor")}</li>
                        <li> {t("pat.list10_refactor")}</li>
                        <li> {t("pat.list11_refactor")}</li>
                        <li> {t("pat.list12_refactor")}</li>
                        <li> {t("pat.list13_refactor")}</li>
                    </ul>
                    <Text>{t("pat.refactor5")}</Text>

                    <BeforeAfter
                        before={before1}
                        after={after1}
                        commentAfter={t('pat.recaftor_after')}
                        commentBefore={t('pat.recaftor_before')}
                        runInWorker={true}
                    />
                </Flex>

                <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATUntanglingHooks />
                </React.Suspense>

  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATSubcomponentCut />
                </React.Suspense>

                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATTyping />
                </React.Suspense>

                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATTests />
                </React.Suspense>

                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATLib />
                </React.Suspense>

                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyPATSkills />
                </React.Suspense>

               
            </Box>
        </Card>
    );
}
