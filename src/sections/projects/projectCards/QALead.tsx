import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function QALead() {
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
            title={"caseStudy.qaLeadCardTitle"}
            description={"caseStudy.qaLeadCardDescription"}
            skills={[
                // "caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Sony Technical Requirements Checklist"
                // "Redmine", "Scrum"
            ]}
            links={[]}
        />
    )
}