import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const About = () => {
  useGSAP(() => {
    const titleSplitText = SplitText.create("#about h2", {
      type: "words",
    });
    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeLine
      .from(titleSplitText.words, {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        yPercent: 100,
        stagger: 0.02,
      })
      .from(
        ".top-grid div,.bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        // 设置动画开始的时间，默认情况下，时间轴中的动画会等前一个动画完成后再开始执行，这里我们设置-0.5，
        // 表示让这个动画提前0.5秒开始执行,这样会让两个动画出现交叉，让用户体验更好
        "-=0.5"
      );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">最好的鸡尾酒</p>
            <h2>
              每个细节都至关重要<span className="text-white">-</span>
              从调制到点缀
            </h2>
          </div>
          <div className="sub-content">
            <p>
              我们奉上的每一杯鸡尾酒，都是对细节的固执追求——
              从第一下唤醒香气的调制，到最后一抹点缀落下。
              正是这份讲究，让简单的酒，成为难忘的瞬间。
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                超过 12,000 位顾客的信赖之选
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="一个调酒师正在调制鸡尾酒" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="一群人正在酒吧里聊天，喝酒" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="一个调酒师正在调制鸡尾酒" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img
            src="/images/abt3.png"
            alt="五杯不同的鸡尾酒摆放在桌子上，在鸡尾酒的前面还有一些水果在上面"
          />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img
            src="/images/abt4.png"
            alt="一杯好喝的鸡尾酒展示在桌子上，在其周围是一些水果"
          />
        </div>
      </div>
    </div>
  );
};
