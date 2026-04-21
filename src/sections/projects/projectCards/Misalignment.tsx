import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Misalignment() {
       const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            "cognitive",
            // "leadership",
            "innovation",
            "systemThinking",
            "behavioural",
            // "systemEngineering",
            // "stakeholders",
            "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.misalignmentCardTitle"}
            description={"caseStudy.misalignmentCardDescription"}
            skills={[
                "caseStudy.misalignmentSkill_1",
                "caseStudy.misalignmentSkill_2",
                "caseStudy.misalignmentSkill_3",
                "caseStudy.misalignmentSkill_4"
                // "caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Copilot", "SPINE", "FEDRI", "CIR",
            ]}
            links={[
                 {
                    isExternal: true,
                    name: "universal.casestudy",
                    linkURL: "file:///C:/Users/barba/Desktop/portfolio/git/bjeziorek-portfolio-rnd/projects/llm.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
            ]}
        />
    )
}