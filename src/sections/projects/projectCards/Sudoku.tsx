import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Sudoku() {
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
                    title={"caseStudy.sudokuCardTitle"}
                    description={"caseStudy.sudokuCardDescription"}
                    skills={["caseStudy.JSDocs", "caseStudy.tdd", "caseStudy.jiraEstimations", "caseStudy.fromScratch"]}
                    techStack={["React 19", "Radix", "Vitest"]}
                    links={[
                        {
                            isExternal: false,
                            name: "caseStudy.seeCaseStudy",
                            linkURL: "/video",
                            buttonVariant: "solid"
                        },
                        {
                            isExternal: true,
                            name: "universal.github",
                            linkURL: "https://github.com/bjeziorek/sudoku",
                            buttonVariant: "outline",
                            isIconBehind: true
                        }
                    ]}
                />
    )
}