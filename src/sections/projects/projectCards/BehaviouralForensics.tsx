import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function BehaviouralForensics() {
       const tags: TagName[] =
        [
            "rnd",
            // "architecture",
            "cognitive",
            // "leadership",
            // "innovation",
            "systemThinking",
            "behavioural",
            // "systemEngineering",
            // "stakeholders",
            "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.behaviouralForensicsCardTitle"}
            description={"caseStudy.behaviouralForensicsCardDescription"}
            skills={[
                "caseStudy.behaviouralForensicsSkill_1", 
                "caseStudy.behaviouralForensicsSkill_2", 
                "caseStudy.behaviouralForensicsSkill_3", 
                // "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "Redmine", "Scrum"
            ]}
            links={[
                  {
                    isExternal: true,
                    name: "universal.casestudy",
                    linkURL: "file:///C:/Users/barba/Desktop/portfolio/git/bjeziorek-portfolio-rnd/projects/forensics.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
            ]}
        />
    )
}