import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function PAT() {
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
            title={"caseStudy.patCardTitle"}
            description={"caseStudy.patCardDescription"}
            skills={["caseStudy.typeGenerics", "caseStudy.refactor", "caseStudy.tests", "caseStudy.npmBundling",]}
            techStack={["React 19", "tsup", "Vite", "Vitest", "RTL", "Radix"]}
            links={[
                {
                    isExternal: false,
                    name: "caseStudy.seeCaseStudy",
                    linkURL: "/pat",
                    buttonVariant: "solid"
                },
                {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/04/when-react-dev-procrastinates-writing.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
                {
                    isExternal: true,
                    name: "universal.github",
                    linkURL: "https://github.com/bjeziorek/probably-a-table",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
                {
                    isExternal: true,
                    name: "universal.npm",
                    linkURL: "https://www.npmjs.com/package/probably-a-table",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}