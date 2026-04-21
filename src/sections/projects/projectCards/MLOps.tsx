import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function MLOps() {
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
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.mlopsCardTitle"}
            description={"caseStudy.mlopsCardDescription"}
            skills={["caseStudy.backendAsync", "caseStudy.uiAnimations", "caseStudy.stateManaging", "caseStudy.backendIntegration"]}
            techStack={["React 19", "Flask microservices", "Node.js API Gateway", "Radix", "Framer Motion", "Machine Learning", "Vitest", "RTL", "i18n"]}
            links={[
                {
                    isExternal: true,
                    name: "universal.github",
                    linkURL: "https://github.com/bjeziorek/stunning-pancake",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
                {
                    isExternal: true,
                    name: "universal.youtube",
                    linkURL: "https://youtu.be/Z6KS_nhfIBY",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}