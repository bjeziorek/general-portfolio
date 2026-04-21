import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Krystalik() {
    const tags: TagName[] =
        [
            "rnd",
            "architecture",
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
            title={"caseStudy.krystalikCardTitle"}
            description={"caseStudy.krystalikCardDescription"}
            skills={[
                "caseStudy.krystalikSkill_1",
                "caseStudy.krystalikSkill_2",
                "caseStudy.krystalikSkill_3",
                "caseStudy.krystalikSkill_4",
                "caseStudy.krystalikSkill_5",
                "caseStudy.krystalikSkill_6",
                "caseStudy.krystalikSkill_7",
            ]}
            techStack={[
                "Angular",
                "Node.js",
                "JSON-based custom file format",
                // "Webpack", 
                // "Docker / Docker Compose"
            ]}
            links={[
                {
                    isExternal: true,
                    name: "universal.github",
                    linkURL: "https://github.com/bjeziorek/krystalik",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
            ]}
        />
    )
}