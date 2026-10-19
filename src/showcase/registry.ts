import type { DocGroup } from "./types";
import { basicEntries } from "./sections/basic";
import { layoutEntries } from "./sections/layout";
import { formEntries } from "./sections/forms";
import { feedbackEntries } from "./sections/feedback";

/** 总览页的全部分组与组件文档，新增组件时在此注册即可 */
export const DOC_GROUPS: DocGroup[] = [
  { id: "basic", title: "基础", icon: "star", entries: basicEntries },
  { id: "layout", title: "布局与容器", icon: "leaf", entries: layoutEntries },
  { id: "form", title: "表单", icon: "bell", entries: formEntries },
  { id: "feedback", title: "反馈", icon: "drop", entries: feedbackEntries },
];
