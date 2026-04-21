import { Flex } from "@radix-ui/themes";
import { Chaperone } from "../../sections/projects/projectCards/Chaperone";
import { PM } from "../../sections/projects/projectCards/PM";
import { Print } from "../../sections/projects/projectCards/Print";
import { QALead } from "../../sections/projects/projectCards/QALead";
import { RODO } from "../../sections/projects/projectCards/RODO";
import { Showcase } from "../Showcase";
import { PAT } from "../../sections/projects/projectCards/PAT";
import { Sudoku } from "../../sections/projects/projectCards/Sudoku";


export function AutShowcase() {

    return (
        <Flex direction="column" gap="4">
            <Showcase
                project={<RODO />}
                why={"autShowcase.rodo"}
            />

            <Showcase
                project={<Print />}
                why={"autShowcase.print"}
            />

            <Showcase
                project={<QALead />}
                why={"autShowcase.qa"}
            />

            <Showcase
                project={<PM />}
                why={"autShowcase.pm"}
            />

            <Showcase
                project={<Chaperone />}
                why={"autShowcase.chaperone"}
            />

            <Showcase
                project={<PAT />}
                why={"autShowcase.pat"}
            />

            <Showcase
                project={<Sudoku />}
                why={"autShowcase.sudoku"}
            />
        </Flex>
    )
}