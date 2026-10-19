/**
 * 像素组件色调。对应 pixel.css 中的 `px-tone--*` 类，
 * 每个色调都会注入 --tone-bg / --tone-dk / --tone-soft / --tone-line / --tone-fg 变量。
 */
export type Tone = "green" | "blue" | "yellow" | "pink" | "cream";

export const TONES: Tone[] = ["green", "blue", "yellow", "pink", "cream"];
