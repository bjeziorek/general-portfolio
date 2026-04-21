import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function PM() {
       const tags: TagName[] =
        [
            // "rnd",
            "architecture",
            // "cognitive",
            "leadership",
            // "innovation",
            "systemThinking",
            "behavioural",
            // "systemEngineering",
            "stakeholders",
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.pmTitle"}
            description={"caseStudy.pmDescription"}
            skills={[
                 "caseStudy.pmSkill_1", 
                 "caseStudy.pmSkill_2",
                 "caseStudy.pmSkill_3",
                 "caseStudy.pmSkill_4",
                 "caseStudy.pmSkill_5",
                 "caseStudy.pmSkill_6",
                 "caseStudy.pmSkill_7",
                 "caseStudy.pmSkill_8",
                // "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Redmine", "Scrum"
            ]}
            links={[]}
        />
    )
}