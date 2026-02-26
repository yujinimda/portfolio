import Skills from "../widgets/Skills/Skills";
import Career from "../widgets/Career/Career";
import Blog from "../widgets/Blog/Blog";
import Project from "../widgets/Project/Project";
import Hero from "@/widgets/Hero/Hero";
import QuickMenuDock from "@/shared/ui/QuickMenu/QuickMenuDock";
import Education from "@/widgets/Education/Education";
import Thanks from "@/widgets/Thanks/Thanks";

function App() {
  return (
    <>
      <Hero />
      <QuickMenuDock />
      <Skills />
      <Project />
      <Career />
      <Blog />
      <Education />
      <Thanks />
    </>
  );
}

export default App;
