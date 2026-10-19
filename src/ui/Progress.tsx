import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** 当前值 */
  value: number;
  /** 最大值，默认 100 */
  max?: number;
  /** 色调，默认 green */
  tone?: Tone;
  /** 左上角标签文字 */
  label?: ReactNode;
  /** 是否显示百分比，默认 true */
  showValue?: boolean;
}

/**
 * 像素进度条：填充区域带有分段纹理，类似游戏里的血条/经验条。
 */
export function Progress({
  value,
  max = 100,
  tone = "green",
  label,
  showValue = true,
  className,
  ...rest
}: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("px-progress-wrap", className)}>
      {(label || showValue) && (
        <div className="px-progress__meta">
          <span>{label}</span>
          {showValue && <span>{Math.round(percent)}%</span>}
        </div>
      )}
      <div
        className={cn("px-progress", `px-tone--${tone}`)}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        {...rest}
      >
        <div className="px-progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
