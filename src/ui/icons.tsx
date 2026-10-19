import type { CSSProperties } from "react";
import { cn } from "@/utils/cn";

/** 像素调色板：字符 -> 颜色 */
export const PIXEL_PALETTE: Record<string, string> = {
  k: "#3b2a1a", // 描边
  w: "#ffffff", // 高光
  r: "#ff6b7a", // 红
  y: "#ffd55a", // 黄
  o: "#e0a526", // 黄色阴影
  g: "#5cc47a", // 绿
  d: "#2c8a4e", // 深绿
  b: "#5ab8f0", // 蓝
  e: "#2f7fc2", // 深蓝
};

/**
 * 像素图标数据：每个字符代表一个像素，"." 为透明。
 * 每个图标为 8x8 网格。
 */
export const PIXEL_ICONS = {
  heart: [
    ".kk..kk.",
    "kwrkkrrk",
    "krrrrrrk",
    "krrrrrrk",
    ".krrrrk.",
    "..krrk..",
    "...kk...",
    "........",
  ],
  star: [
    "...yy...",
    "...yy...",
    "yyyyyyyy",
    ".yyyyyy.",
    "..yyyy..",
    ".yy..yy.",
    ".oo..oo.",
    "........",
  ],
  coin: [
    "..kkkk..",
    ".kwyyyok",
    "kwyyyyok",
    "kyyyyyok",
    "kyyyyyok",
    "kyyyyyok",
    "kooooook",
    "..kkkk..",
  ],
  leaf: [
    "......kk",
    ".....kgk",
    "....kggk",
    "...kggdk",
    "..kggdk.",
    ".kggdk..",
    "kgdk....",
    "kk......",
  ],
  bell: [
    "...kk...",
    "..kwyk..",
    ".kwyyyok",
    ".kyyyyok",
    "kyyyyyok",
    "kooooook",
    "kkkkkkkk",
    "...kk...",
  ],
  drop: [
    "...kk...",
    "..kwbk..",
    ".kwbbbk.",
    ".kbbbbk.",
    "kbbbbbbk",
    "kbbbbbek",
    ".kbbbbk.",
    "..kkkk..",
  ],
} as const;

export type PixelIconName = keyof typeof PIXEL_ICONS;

export const PIXEL_ICON_NAMES = Object.keys(PIXEL_ICONS) as PixelIconName[];

/** 对勾图标（用于 Checkbox 选中态），"#" 使用 currentColor 填充 */
const CHECK_ROWS = ["....##", "...##.", "#.##..", "##....", ".#...."] as const;

export interface PixelSpriteProps {
  /** 像素网格，每个字符代表一个像素 */
  rows: readonly string[];
  /** 字符到颜色的映射，默认使用 PIXEL_PALETTE */
  palette?: Record<string, string>;
  /** 渲染宽度（px），高度按比例计算 */
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** 传入后作为无障碍名称，否则视为装饰图形 */
  label?: string;
}

/** 通用像素精灵渲染器：用 SVG 矩形拼出像素画 */
export function PixelSprite({
  rows,
  palette = PIXEL_PALETTE,
  size = 32,
  className,
  style,
  label,
}: PixelSpriteProps) {
  const cols = Math.max(...rows.map((row) => row.length));
  const height = (size * rows.length) / cols;

  const cells = rows.flatMap((row, y) =>
    row.split("").map((ch, x) => {
      const fill = palette[ch];
      if (ch === "." || !fill) return null;
      return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />;
    }),
  );

  return (
    <svg
      className={cn("px-icon", className)}
      style={style}
      width={size}
      height={height}
      viewBox={`0 0 ${cols} ${rows.length}`}
      shapeRendering="crispEdges"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {cells}
    </svg>
  );
}

export interface PixelIconProps {
  name: PixelIconName;
  size?: number;
  className?: string;
  label?: string;
}

/** 内置像素图标 */
export function PixelIcon({ name, size = 32, className, label }: PixelIconProps) {
  return <PixelSprite rows={PIXEL_ICONS[name]} size={size} className={className} label={label ?? name} />;
}

/** 像素对勾，颜色跟随 currentColor */
export function PixelCheck({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <PixelSprite
      rows={CHECK_ROWS}
      palette={{ "#": "currentColor" }}
      size={size}
      className={className}
    />
  );
}
