import { useGSAP } from "@gsap/react";
import { OPENING_HOURS, SOCIALS } from "../../constants";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          x: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="一片绿色的叶子"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="一片绿色的叶子"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>欢迎联系我们</h2>
        <div>
          <h3>访问我们的酒吧</h3>
          <p>中国山东省济南市</p>
        </div>
        <div>
          <h3>联系我们</h3>
          <p>13800000000</p>
          <p>bar@example.com</p>
        </div>
        <div>
          <h3>营业时间</h3>
          {OPENING_HOURS.map(item => (
            <p key={item.day}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>
        <div>
          <h3>社交软件</h3>
          <div className="flex-center gap-5">
            {SOCIALS.map(social => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
