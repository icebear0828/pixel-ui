import { useEffect, useState } from "react";
import { DOC_GROUPS } from "./showcase/registry";
import { Sidebar } from "./showcase/Sidebar";
import { Hero } from "./showcase/Hero";
import { DocSection } from "./showcase/DocSection";
import "./showcase/showcase.css";
import { PixelIcon } from "@/ui";

const ALL_ENTRIES = DOC_GROUPS.flatMap((group) => group.entries);

export default function App() {
  const [activeId, setActiveId] = useState(ALL_ENTRIES[0]?.id ?? "");

  // 监听滚动位置，同步侧边栏高亮
  useEffect(() => {
    const elements = ALL_ENTRIES.map((entry) => document.getElementById(entry.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sc-app">
      <Sidebar groups={DOC_GROUPS} activeId={activeId} />

      <main className="sc-main">
        <Hero componentCount={ALL_ENTRIES.length} />

        {DOC_GROUPS.map((group) => (
          <section key={group.id} className="sc-group" aria-labelledby={`group-${group.id}`}>
            <header className="sc-group__head">
              <PixelIcon name={group.icon} size={24} />
              <h2 id={`group-${group.id}`}>{group.title}</h2>
              <span>{group.entries.length} 个组件</span>
            </header>
            {group.entries.map((entry) => (
              <DocSection key={entry.id} entry={entry} />
            ))}
          </section>
        ))}

        <footer className="sc-footer">
          <p>Pixel UI · 像素风格公共组件库 · 基于 React 19、TypeScript 与纯 CSS 实现。</p>
          <p>
            交互式组件文档请运行 <code>npx storybook dev -p 6006</code>，组件源码位于 <code>src/ui/</code>，
            每个组件的 Story 位于 <code>src/ui/stories/</code>。
          </p>
        </footer>
      </main>
    </div>
  );
}
