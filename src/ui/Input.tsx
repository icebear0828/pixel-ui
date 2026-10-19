import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface FieldBaseProps {
  /** 字段标签 */
  label?: ReactNode;
  /** 辅助说明文字 */
  hint?: ReactNode;
  /** 错误信息，传入后字段进入错误态 */
  error?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldBaseProps {}

/**
 * 像素文本输入框，支持标签、提示和错误态。
 */
export function Input({ label, hint, error, id, className, ...rest }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const message = error ?? hint;
  return (
    <div className={cn("px-field", error && "px-field--error")}>
      {label && (
        <label className="px-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn("px-input", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {message && (
        <p id={`${inputId}-hint`} className="px-field__hint">
          {message}
        </p>
      )}
    </div>
  );
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FieldBaseProps {}

/**
 * 像素多行文本框，与 Input 共享标签、提示和错误态。
 */
export function Textarea({ label, hint, error, id, className, ...rest }: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const message = error ?? hint;
  return (
    <div className={cn("px-field", error && "px-field--error")}>
      {label && (
        <label className="px-field__label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn("px-input px-input--textarea", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? `${textareaId}-hint` : undefined}
        {...rest}
      />
      {message && (
        <p id={`${textareaId}-hint`} className="px-field__hint">
          {message}
        </p>
      )}
    </div>
  );
}
