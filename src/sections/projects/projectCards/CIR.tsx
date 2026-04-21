import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function CIR() {
       const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            "cognitive",
            // "leadership",
            "innovation",
            "systemThinking",
            // "behavioural",
            // "systemEngineering",
            "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.cirCardTitle"}
            description={"caseStudy.cirCardDescription"}
            skills={[
                "caseStudy.cirSkill_1",
                "caseStudy.cirSkill_2",
                "caseStudy.cirSkill_3",
                "caseStudy.cirSkill_4",
                "caseStudy.cirSkill_5",
                "caseStudy.cirSkill_6",
                // "caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "Copilot", "SPINE", "FEDRI", "CIR",
            ]}
            links={[]}
        />
    )
}