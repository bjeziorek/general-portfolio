import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function MAKO() {
       const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            "cognitive",
            // "leadership",
            "innovation",
            "systemThinking",
            "behavioural",
            "systemEngineering",
            "stakeholders",
            "compliance"
        ]
    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.makoCardTitle"}
            description={"caseStudy.makoCardDescription"}
            skills={["caseStudy.rndFrameworks", "caseStudy.end2end", "caseStudy.grant", "caseStudy.highImpact"]}
            techStack={["jQuery", "PHP", "fullstack hosting", "SPINE", "FEDRI", "CIR"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/03/r-what-happens-when-r-engineer-hacks.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}