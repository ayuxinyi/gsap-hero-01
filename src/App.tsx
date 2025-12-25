import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Navbar } from "./components/hero/nav-bar";
import { Hero } from "./components/hero/hero";
import { CockTails } from "./components/hero/cock-tails";
import { About } from "./components/hero/about";
import { Art } from "./components/hero/art";
import { Menu } from "./components/hero/menu";
import { Contact } from "./components/hero/contact";

// 注册滚动触发器插件以及文本分割插件，使它们在全局范围内可用，我们只需要在应用程序的入口文件中注册一次即可。
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};
export default App;
