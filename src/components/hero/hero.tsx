import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      // 文字分割方式，这里是分割成字符和单词
      type: "chars,words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      // 段落分割方式，这里是分割成行
      type: "lines",
    });
    // 遍历所有字符，添加渐变类名
    heroSplit.chars.forEach(char => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      // 从底部开始动画
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      // 它将在上一个动画完成后延迟 1 秒开始
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      // 通过to方法控制hero区域内的两个叶子的位置
      // 第一个参数是要控制的元素，第二个参数是要控制的属性，第三个参数是动画开始的时间点
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="一片绿色的叶子在窗口的左下方"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="一片绿色的叶子在窗口的右下方"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>清爽 · 经典 · 回味无穷</p>
              <p className="subtitle">
                {/* Sip the Spirit <br /> of Summer */}
                一口，便是盛夏
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                我们菜单上的每一款鸡尾酒都是优质
                <br />
                原料、创意、风采和永恒配方的完美
                <br />
                融合——旨在愉悦您的味蕾。
              </p>
              <a href="#cocktails">查看菜单</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
