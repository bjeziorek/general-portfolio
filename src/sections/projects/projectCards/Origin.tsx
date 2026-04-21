import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Origin() {
       const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            // "cognitive",
            "leadership",
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
            title={"caseStudy.originCardTitle"}
            description={"caseStudy.originCardDescription"}
            skills={["caseStudy.underPressure", "caseStudy.quickLearning", "caseStudy.leadership", "caseStudy.ownership"]}
            techStack={["LOVE", "Lua"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/01/r-what-happens-when-r-engineer-ends-up_26.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}