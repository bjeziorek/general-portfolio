import { Badge } from "@radix-ui/themes";
import type { TagName } from "../types/TagNames";
import { TagIcon } from "lucide-react";
import type { Color } from "../types/Color";

interface TagProps {
    tagName: TagName
}

export function Tag(props:TagProps) {
    const {tagName} = props

   const tagColor = (tag: TagName):Color => {
        switch(tag){
            case "rnd": return "cyan"
            case "architecture": return "blue"
            case "cognitive": return "green"
            case "leadership": return "orange"
            case "innovation": return "crimson"
            case "systemThinking": return "amber"
            case "behavioural": return "purple"
            case "systemEngineering": return "teal"
            case "stakeholders": return "brown"
            case "compliance": return "tomato"
            default: return "gray"
        }
    };

    return (
        <Badge
            key={tagName}
            variant="soft"
            radius="full"
            color={tagColor(tagName)}
        >
            <TagIcon size={12} />
            {tagName}
        </Badge>
    )
}