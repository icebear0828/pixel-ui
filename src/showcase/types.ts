import type { ReactNode } from "react";
import type { PixelIconName } from "@/ui";

/** API 表格中的一行 */
export interface ApiRow {
  name: string;
  type: string;
  default?: string;
  desc: string;
}

/** 单个组件的文档条目 */
export interface DocEntry {
  /** 锚点 id，同时用于侧边栏导航 */
  id: string;
  /** 组件中文名 */
  title: string;
  /** 组件英文名 / 类名 */
  subtitle: string;
  /** 组件说明 */
  desc: string;
  /** 交互式演示区域 */
  demo: ReactNode;
  /** 用法代码 */
  usage: string;
  /** 属性说明 */
  api: ApiRow[];
}

/** 侧边栏分组 */
export interface DocGroup {
  id: string;
  title: string;
  icon: PixelIconName;
  entries: DocEntry[];
}
