import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Chaperone() {
      const tags: TagName[] =
        [
            "rnd",
            "architecture",
            // "cognitive",
            // "leadership",
            "innovation",
            "systemThinking",
            "behavioural",
            "systemEngineering",
            // "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.chaperoneCardTitle"}
            description={"caseStudy.chaperoneCardDescription"}
            skills={["caseStudy.systemThinking", "caseStudy.workWithLegacy", "caseStudy.dx", "caseStudy.documenting"]}
            techStack={["Angular", "Groovy Angular SSR", "Docker / Docker Compose", "Jenkins", "PrimeNG", "Tailwind"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/01/r-what-happens-when-r-engineer-ends-up.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}