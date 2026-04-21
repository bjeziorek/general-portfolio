import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function BOK() {
       const tags: TagName[] =
        [
            // "rnd",
            "architecture",
            // "cognitive",
            // "leadership",
            // "innovation",
            "systemThinking",
            // "behavioural",
            "systemEngineering",
            // "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.comfortelCardTitle"}
            description={"caseStudy.comfortelCardDescription"}
            skills={["caseStudy.migration", "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"]}
            techStack={["React 17", "TypeScript", "JavaScript (legacy)", "Webpack", "Docker / Docker Compose"]}
            links={[]}
        />
    )
}