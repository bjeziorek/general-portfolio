import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Crow() {
     const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            // "cognitive",
            // "leadership",
            "innovation",
            "systemThinking",
            // "behavioural",
            "systemEngineering",
            // "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.crowCardTitle"}
            description={"caseStudy.crowCardDescription"}
            skills={["caseStudy.rnd", "caseStudy.toolsRepurposing", "caseStudy.underConstrains", "caseStudy.designPatterns"]}
            techStack={["MelonJS", "JavaScript"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/01/r-what-happens-when-r-engineer-refuses.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}