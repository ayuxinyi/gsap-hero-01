import { useGSAP } from "@gsap/react";
import { COCK_TAIL_LISTS, MOCK_TAIL_LISTS } from "../../constants";
import gsap from "gsap";

export const CockTails = () => {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeLine
      // from 方法指的是从当前位置开始，向指定位置移动
      .from("#c-left-leaf", {
        // 这里设置的是起始位置，指的是元素的位置，也就是说元素一开始的位置是x:-100, y:100,然后
        // 向原先的位置移动。
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="一片绿色的叶子在窗口的左下方"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="一片绿色的叶子在窗口的右下方"
        id="c-right-leaf"
      />
      <div className="list lg:px-4">
        <div className="popular">
          <h2>最受欢迎</h2>
          <ul>
            {COCK_TAIL_LISTS.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>最受喜爱</h2>
          <ul>
            {MOCK_TAIL_LISTS.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
