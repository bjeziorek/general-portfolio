import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function QALead() {
       const tags: TagName[] =
        [
            // "rnd",
            // "architecture",
            // "cognitive",
            "leadership",
            // "innovation",
            "systemThinking",
            // "behavioural",
            // "systemEngineering",
            // "stakeholders",
            "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.qaTitle"}
            description={"caseStudy.qaDescription"}
            skills={[
                 "caseStudy.qaSkill_1", 
                 "caseStudy.qaSkill_2", 
                 "caseStudy.qaSkill_3", 
                 "caseStudy.qaSkill_4", 
                 "caseStudy.qaSkill_5", 
                 "caseStudy.qaSkill_6", 
                 "caseStudy.qaSkill_7", 
                 "caseStudy.qaSkill_8", 
                // "caseStudy.typeScript",
                //  "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                "Sony Technical Requirements Checklist",
                "Scrum"
                // "Redmine", "Scrum"
            ]}
            links={[]}
        />
    )
}