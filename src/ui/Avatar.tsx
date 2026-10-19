import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** 图片地址，传入后优先显示图片 */
  src?: string;
  /** 图片替代文本 */
  alt?: string;
  /** 名称，无图片时取前两个字符作为头像文字 */
  name?: string;
  /** 色调，默认 blue */
  tone?: Tone;
  /** 尺寸 */
  size?: "sm" | "md" | "lg";
}

/**
 * 像素头像：方形头像框，支持图片或文字。
 */
export function Avatar({ src, alt, name = "", tone = "blue", size = "md", className, ...rest }: AvatarProps) {
  const text = name.trim().slice(0, 2).toUpperCase();
  return (
    <span
      className={cn("px-avatar", `px-tone--${tone}`, size !== "md" && `px-avatar--${size}`, className)}
      {...rest}
    >
      {src ? <img src={src} alt={alt ?? name} /> : text}
    </span>
  );
}
