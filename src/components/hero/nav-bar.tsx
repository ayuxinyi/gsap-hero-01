import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "../../constants";
import gsap from "gsap";

export const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        // 第一个参数指的是元素的位置，第二个参数指的是视口的位置，当元素的底部到达视口顶部时，就会触发动画
        // 意思就是，滚动时，如果元素的底部到达窗口顶部了，就会触发动画
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav>
      <div className="lg:px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="一张鸡尾酒的logo图片" />
          <h1>Velvet Pour</h1>
        </a>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
