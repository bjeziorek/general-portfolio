import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Werehouse() {
       const tags: TagName[] =
        [
            // "rnd",
            // "architecture",
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
                    title={"caseStudy.visixCardTitle"}
                    description={"caseStudy.visixCardDescription"}
                    skills={["caseStudy.optimalisation", "caseStudy.debug", "caseStudy.legacyReact", "caseStudy.tasks"]}
                    techStack={["React 16", "JavaScript", "REST API", "Redux", "React DevTools"]}
                    links={[]}
                />
    )
}