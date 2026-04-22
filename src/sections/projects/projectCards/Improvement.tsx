import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Improvement() {
    const tags: TagName[] =
        [
            // "rnd",
            // "architecture",
            "cognitive",
            "leadership",
            // "innovation",
            "systemThinking",
            "behavioural",
            // "systemEngineering",
            // "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.improve"}
            description={"caseStudy.improveDescription"}
            skills={[
                "caseStudy.improveSkill_1",
                "caseStudy.improveSkill_2",
                "caseStudy.improveSkill_3",
                "caseStudy.improveSkill_4",
                "caseStudy.improveSkill_5",

            ]}
            techStack={[
                // "Redmine", "Scrum"
            ]}
            links={[

            ]}
        />
    )
}