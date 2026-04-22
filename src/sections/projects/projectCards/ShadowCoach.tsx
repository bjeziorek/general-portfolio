import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function ShadowCoach() {
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
            title={"caseStudy.shadowCoachTile"}
            description={"caseStudy.shadowCoachDescription"}
            skills={[
                "caseStudy.shadowCoachSkill_1",
                "caseStudy.shadowCoachSkill_2",
                "caseStudy.shadowCoachSkill_3",
                "caseStudy.shadowCoachSkill_4",
                "caseStudy.shadowCoachSkill_5",
                "caseStudy.shadowCoachSkill_6",
                "caseStudy.shadowCoachSkill_7",
            ]}
            techStack={[
                // "Redmine", "Scrum"
            ]}
            links={[]}
        />
    )
}