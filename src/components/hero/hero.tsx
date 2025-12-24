import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 通过useMediaQuery判断是否是移动端
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // 标题和段落的分割
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
    // 标题和段落的动画
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
    // hero区域的滚动动画
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

    const startValue = isMobile ? "top 50%" : "center 60%";
    // 120% top 指的是元素离开视口的距离超过 120% 时，就会结束动画
    const endValue = isMobile ? "120% top" : "bottom top";
    const videoTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        // 视频会固定在视口内，不会离开视口
        pin: true,
      },
    });
    if (!videoRef.current) return;
    // 视频加载完成后，触发动画
    videoRef.current.onloadedmetadata = () => {
      videoTimeLine.to(videoRef.current, {
        // 这里是在控制video元素的currentTime属性，让视频随着滚动动画的变化而变化
        // 视频的播放位置会从0变化到视频的总时长
        currentTime: videoRef.current!.duration,
      });
    };
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
      {/* video */}
      <div className="video absolute inset-0">
        {/* muted:静音,playsInline:隐藏播放控件 ,preload:预加载*/}
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};
