import type { TagName } from "../../../types/TagNames";
import { ProjectCard } from "../ProjectCard";


export function Kitchen() {
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
            // "compliance"
        ]

    return (
        <ProjectCard
            tags={tags}
            title={"caseStudy.kitchenCardTitle"}
            description={"caseStudy.kitchenCardDescription"}
            skills={[
                "caseStudy.kitchenSkill_1", 
                "caseStudy.kitchenSkill_2", 
                "caseStudy.kitchenSkill_3", 
                // "caseStudy.typeScript", "caseStudy.logicSeparation", "caseStudy.complexCode"
            ]}
            techStack={[
                // "Redmine", "Scrum"
            ]}
            links={[
                  {
                    isExternal: true,
                    name: "universal.blog",
                    linkURL: "https://randomindexed.blogspot.com/2026/03/r-what-happens-when-r-engineer-avoids.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                },
                  {
                    isExternal: true,
                    name: "universal.casestudy",
                    linkURL: "file:///C:/Users/barba/Desktop/portfolio/git/bjeziorek-portfolio-rnd/projects/dishes.html",
                    buttonVariant: "outline",
                    isIconBehind: true
                }
            ]}
        />
    )
}