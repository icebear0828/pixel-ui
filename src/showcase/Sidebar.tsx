import { PixelIcon } from "@/ui";
import { cn } from "@/utils/cn";
import type { DocGroup } from "./types";

interface SidebarProps {
  groups: DocGroup[];
  activeId: string;
}

/** 左侧目录，高亮当前滚动到的组件 */
export function Sidebar({ groups, activeId }: SidebarProps) {
  return (
    <aside className="sc-sidebar">
      <a href="#top" className="sc-brand">
        <PixelIcon name="heart" size={32} />
        <span>
          <strong>Pixel UI</strong>
          <small>像素风组件库 · v1.0</small>
        </span>
      </a>

      <nav className="sc-nav" aria-label="组件目录">
        {groups.map((group) => (
          <div key={group.id} className="sc-nav__group">
            <div className="sc-nav__title">
              <PixelIcon name={group.icon} size={16} />
              {group.title}
            </div>
            {group.entries.map((entry) => (
              <a
                key={entry.id}
                href={`#${entry.id}`}
                className={cn("sc-nav__item", activeId === entry.id && "is-active")}
              >
                {entry.title}
                <span>{entry.subtitle}</span>
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
