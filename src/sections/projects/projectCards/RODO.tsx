import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function RODO() {
       const tags: TagName[] =
        [
            "rnd",
            "architecture",
            // "cognitive",
            // "leadership",
            // "innovation",
            "systemThinking",
            // "behavioural",
            // "systemEngineering",
            "stakeholders",
            "compliance"

        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.rodoCardTitle"}
            description={"caseStudy.rodoCardDescription"}
            skills={[
                "caseStudy.rodoSkill_1", 
                "caseStudy.rodoSkill_2", 
                "caseStudy.rodoSkill_3", 
                "caseStudy.rodoSkill_4", 
                "caseStudy.rodoSkill_5", 
                "caseStudy.rodoSkill_6", 
                "caseStudy.rodoSkill_7", 
                "caseStudy.rodoSkill_8", 
                "caseStudy.rodoSkill_9", 
                // "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "React 17", "TypeScript", "JavaScript (legacy)", "Webpack", "Docker / Docker Compose"
            ]}
            links={[]}
        />
    )
}