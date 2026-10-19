# Pixel UI · 像素风格 React 组件库

一套像素风格的 React 公共组件库，附带组件总览站点与 Storybook 交互式文档。
设计参考了 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) 的展示方式，但组件本身是通用的界面组件，不复刻任何游戏素材。

## 目录结构

```
src/
├── ui/                    # 组件库（可整体复制到其他项目）
│   ├── pixel.css          # 全部样式：色调、描边、动画
│   ├── icons.tsx          # PixelIcon / PixelSprite / PixelCheck
│   ├── types.ts           # Tone 色调类型
│   ├── Button.tsx ...     # 16 个组件（见下表）
│   ├── index.ts           # 统一出口（import 时自动加载 pixel.css）
│   └── stories/           # Storybook 故事文件
├── showcase/              # 总览站点（仅用于展示，不属于组件库）
│   ├── registry.ts        # 分组与组件文档注册入口
│   ├── sections/          # 每组组件的演示、用法与 API 描述
│   ├── Sidebar.tsx / Hero.tsx / DocSection.tsx
│   └── showcase.css
└── App.tsx                # 总览站点入口
.storybook/                # Storybook 配置
```

## 组件一览

| 分组 | 组件 |
| --- | --- |
| 基础 | `Button` 按钮、`PixelIcon` 像素图标、`Avatar` 头像、`Tag` 标签 |
| 布局与容器 | `Panel` 面板、`Divider` 分割线、`Tabs` 标签页 |
| 表单 | `Input` / `Textarea` 输入框、`Select` 下拉、`Checkbox` 复选框、`RadioGroup` 单选组、`Switch` 开关 |
| 反馈 | `Alert` 提示条、`Progress` 进度条、`Tooltip` 气泡提示、`Modal` 弹窗 |

## 使用方式

```tsx
import { Button, Panel, Tag } from "@/ui";   // 自动加载 pixel.css

export function Demo() {
  return (
    <Panel title="我的岛屿" tone="green" extra={<Tag tone="green">Lv.3</Tag>}>
      <Button tone="pink" size="lg">出发</Button>
    </Panel>
  );
}
```

色调统一为 `green | blue | yellow | pink | cream`，通过 `px-tone--*` 类注入 CSS 变量，可在 `pixel.css` 中自行扩展。

## 命令

```bash
npm install
npm run dev                  # 启动总览站点
npm run build                # 构建总览站点（生成单文件 dist/index.html）
npx storybook dev -p 6006    # 启动 Storybook 交互式文档
npx storybook build          # 构建静态 Storybook（输出到 storybook-static/）
```

## 设计要点

- **像素描边**：使用 4px 步进的 `box-shadow` 代替 `border`，四角留空形成像素台阶。
- **按键反馈**：按钮按下时向下位移 4px，并压缩底部阴影。
- **步进动画**：过渡和动画统一使用 `steps()` 函数，保持像素感。
- **零样式框架依赖**：组件样式仅依赖 `pixel.css`，不依赖 Tailwind。
- **无障碍**：开关使用 `role="switch"`，单选、复选基于原生 input，弹窗支持 Esc 关闭与焦点语义。
