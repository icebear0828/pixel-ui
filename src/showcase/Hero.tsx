import { Button, PixelIcon, Tag } from "@/ui";

interface HeroProps {
  componentCount: number;
}

/** 首屏：像素天空背景 + 漂浮图标 + 快速开始 */
export function Hero({ componentCount }: HeroProps) {
  const scrollToFirst = () => {
    document.getElementById("button")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="sc-hero">
      <span className="sc-hero__cloud sc-hero__cloud--1" aria-hidden="true" />
      <span className="sc-hero__cloud sc-hero__cloud--2" aria-hidden="true" />
      <div className="sc-hero__float sc-hero__float--1" aria-hidden="true">
        <PixelIcon name="star" size={40} />
      </div>
      <div className="sc-hero__float sc-hero__float--2" aria-hidden="true">
        <PixelIcon name="leaf" size={48} />
      </div>
      <div className="sc-hero__float sc-hero__float--3" aria-hidden="true">
        <PixelIcon name="coin" size={32} />
      </div>

      <div className="sc-hero__content">
        <p className="sc-hero__eyebrow">PIXEL COMPONENT LIBRARY</p>
        <h1 className="sc-hero__title">Pixel UI</h1>
        <p className="sc-hero__lead">
          一套像素风格的 React 公共组件库。纯 CSS 实现描边与阴影，与具体业务解耦，
          适合用于小游戏、活动页与工具类界面的快速搭建。
        </p>
        <div className="sc-hero__stats">
          <Tag tone="green">{componentCount} 个组件</Tag>
          <Tag tone="blue">5 种色调</Tag>
          <Tag tone="yellow">Storybook 交互文档</Tag>
        </div>
        <div className="sc-hero__actions">
          <Button tone="green" size="lg" onClick={scrollToFirst}>
            开始浏览
          </Button>
        </div>
        <div className="sc-hero__cmd">
          <code>npx storybook dev -p 6006</code>
        </div>
      </div>
    </section>
  );
}
