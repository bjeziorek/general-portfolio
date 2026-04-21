import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Print() {
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
            title={"caseStudy.printCardTitle"}
            description={"caseStudy.printCardDescription"}
            skills={[
                "caseStudy.printSkill_1", 
                "caseStudy.printSkill_2", 
                "caseStudy.printSkill_3", 
                "caseStudy.printSkill_4", 
                "caseStudy.printSkill_5", 
                "caseStudy.printSkill_6", 
                "caseStudy.printSkill_7", 
                // caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "React 17", "TypeScript", "JavaScript (legacy)", "Webpack", "Docker / Docker Compose"
            ]}
            links={[]}
        />
    )
}