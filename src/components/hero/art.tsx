import { useGSAP } from "@gsap/react";
import { FEATURE_LISTS, GOOD_LISTS } from "../../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">调酒之道</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {GOOD_LISTS.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="一个对号" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="调酒师专注调制鸡尾酒的瞬间"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {FEATURE_LISTS.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="一个对号" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">值得细酌的完美</h2>
          <div id="masked-content">
            <h3>技艺为基，热爱为魂</h3>
            <p>这不是一杯普通的饮料，它是一个精心制作的瞬间，只为你而设。</p>
          </div>
        </div>
      </div>
    </section>
  );
};
