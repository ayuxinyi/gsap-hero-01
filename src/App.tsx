import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// 注册滚动触发器插件以及文本分割插件，使它们在全局范围内可用，我们只需要在应用程序的入口文件中注册一次即可。
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300 font-bold">欢迎来到GSAP世界</h1>
    </div>
  );
};
export default App;
