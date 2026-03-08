import { Nav } from "./components/Nav";
import { Cover } from "./components/Cover";
import { ProjectOverview } from "./components/ProjectOverview";
import { ProblemStatement } from "./components/ProblemStatement";
import { UserScenario } from "./components/UserScenario";
import { PainPoints } from "./components/PainPoints";
import { Goals } from "./components/Goals";
import { InformationArchitecture } from "./components/InformationArchitecture";
import { RedesignedScreens } from "./components/RedesignedScreens";
import { PrototypeFlow } from "./components/PrototypeFlow";
import { ConclusionNextSteps } from "./components/ConclusionNextSteps";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Nav />
      <Cover />
      <ProjectOverview />
      <ProblemStatement />
      <UserScenario />
      <PainPoints />
      <Goals />
      <InformationArchitecture />
      <RedesignedScreens />
      <PrototypeFlow />
      <ConclusionNextSteps />
    </div>
  );
}
