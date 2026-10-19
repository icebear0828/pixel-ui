import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface ModalProps {
  /** 是否显示 */
  open: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 关闭回调（点击关闭按钮、遮罩或按下 Esc 时触发） */
  onClose?: () => void;
  /** 底部操作区 */
  footer?: ReactNode;
  /** 标题栏色调，默认 blue */
  tone?: Tone;
  /** 点击遮罩是否关闭，默认 true */
  closeOnMask?: boolean;
  children?: ReactNode;
}

/**
 * 像素弹窗：通过 Portal 渲染到 body，打开时锁定页面滚动，支持 Esc 关闭。
 */
export function Modal({
  open,
  title,
  onClose,
  footer,
  tone = "blue",
  closeOnMask = true,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="px-modal-mask"
      onMouseDown={(e) => {
        if (closeOnMask && e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        className={cn("px-modal", `px-tone--${tone}`)}
      >
        <header className="px-modal__head">
          <span>{title}</span>
          <button type="button" className="px-modal__close" aria-label="关闭" onClick={onClose}>
            X
          </button>
        </header>
        <div className="px-modal__body">{children}</div>
        {footer && <footer className="px-modal__foot">{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
