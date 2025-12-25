import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Navbar } from "./components/hero/nav-bar";
import { Hero } from "./components/hero/hero";
import { CockTails } from "./components/hero/cock-tails";

// 注册滚动触发器插件以及文本分割插件，使它们在全局范围内可用，我们只需要在应用程序的入口文件中注册一次即可。
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
    </main>
  );
};
export default App;
