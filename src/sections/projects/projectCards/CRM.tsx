import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function CRM() {
       const tags: TagName[] =
        [
            // "rnd",
            "architecture",
            // "cognitive",
            // "leadership",
            // "innovation",
            // "systemThinking",
            // "behavioural",
            "systemEngineering",
            // "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.crmCardTitle"}
            description={"caseStudy.crmCardDescription"}
            skills={[
                "caseStudy.crmSkill_1", 
                "caseStudy.crmSkill_2", 
                // "caseStudy.crmSkill_3", 
                // "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Angular", 
                "Groovy SSR", 
                "Docker / Docker Compose",
                "bash scripting"
            ]}
            links={[]}
        />
    )
}