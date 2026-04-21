import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Labyrinth() {
       const tags: TagName[] =
        [
            "rnd",
            "architecture",
            // "cognitive",
            // "leadership",
            // "innovation",
            "systemThinking",
            // "behavioural",
            "systemEngineering",
            // "stakeholders",
            "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.labirynthCardTitle"}
            description={"caseStudy.labirynthCardDescription"}
            skills={["caseStudy.deployment", "caseStudy.performanceOptimization", "caseStudy.multiskill", "caseStudy.publishingProcess"]}
            techStack={["Unity3D", "C#", "Android Studio"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.youtube",
                    linkURL: "https://youtu.be/3N3xMPoE7XA",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}