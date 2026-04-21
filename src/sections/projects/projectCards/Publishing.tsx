import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Publishing() {
       const tags: TagName[] =
        [
            // "rnd",
            // "architecture",
            // "cognitive",
            "leadership",
            // "innovation",
            "systemThinking",
            // "behavioural",
            // "systemEngineering",
            // "stakeholders",
            "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.publishingCardTitle"}
            description={"caseStudy.publishingCardDescription"}
            skills={[
                "caseStudy.publishingSkill_1",
                "caseStudy.publishingSkill_2",
                "caseStudy.publishingSkill_3",
                "caseStudy.publishingSkill_4",
                "caseStudy.publishingSkill_5",
                "caseStudy.publishingSkill_6",
                // "caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "Copilot", "SPINE", "FEDRI", "CIR",
            ]}
            links={[
                  {
                    isExternal: true,
                    name: "universal.productPage",
                    linkURL: "https://www.insurreart.com/",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}