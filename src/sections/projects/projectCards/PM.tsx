import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function PM() {
       const tags: TagName[] =
        [
            // "rnd",
            "architecture",
            // "cognitive",
            "leadership",
            // "innovation",
            "systemThinking",
            "behavioural",
            // "systemEngineering",
            "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.pmCardTitle"}
            description={"caseStudy.pmCardDescription"}
            skills={[
                // "caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Redmine", "Scrum"
            ]}
            links={[]}
        />
    )
}