import { useId, type SelectHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface SelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  /** 字段标签 */
  label?: ReactNode;
  /** 辅助说明文字 */
  hint?: ReactNode;
  /** 错误信息 */
  error?: string;
  /** 选项列表 */
  options: SelectOption[];
  /** 占位文字（未选择时显示，选中后不可再选回） */
  placeholder?: string;
}

/**
 * 像素下拉选择框，右侧带像素箭头。
 */
export function Select({ label, hint, error, options, placeholder, id, className, value, defaultValue, ...rest }: SelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const message = error ?? hint;
  // 只有提供 placeholder 时才需要占位项；受控时 value 为空字符串即显示占位
  const controlledProps = value !== undefined ? { value } : { defaultValue: defaultValue ?? (placeholder ? "" : undefined) };
  return (
    <div className={cn("px-field", error && "px-field--error")}>
      {label && (
        <label className="px-field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="px-select">
        <select id={selectId} className={cn("px-input", className)} aria-invalid={error ? true : undefined} {...controlledProps} {...rest}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="px-select__arrow" aria-hidden="true" />
      </div>
      {message && <p className="px-field__hint">{message}</p>}
    </div>
  );
}
