import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import FAQ from "./sections/FAQ";
import { SudokuVideoCaseStudy } from "./sections/caseStudies/SudokuVideoCaseStudy";
import { Projects } from "./sections/projects/Projects";
import { PAT } from "./sections/caseStudies/pat/PAT";
import { Intro } from "./sections/Intro";
import { CaseStudies } from "./sections/caseStudies/CaseStudies";
import { Frameworks } from "./sections/frameworks/Frameworks";
import { Skills } from "./sections/Skills";
import { HowIWork } from "./sections/howIWork/HowIWork";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<Intro />} />
                <Route path="pat" element={<PAT />} />
                <Route path="video" element={<SudokuVideoCaseStudy />} />
                <Route path="caseStudies" element={<CaseStudies />} />
                <Route path="projects" element={<Projects />} />
                <Route path="frameworks" element={<Frameworks />} />
                <Route path="skills" element={<Skills />} />
                <Route path="work" element={<HowIWork />} />
                <Route path="faq" element={<FAQ />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
