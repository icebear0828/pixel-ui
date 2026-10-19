import { useState } from "react";
import { Button, Panel } from "@/ui";
import type { DocEntry } from "./types";

interface DocSectionProps {
  entry: DocEntry;
}

/** 单个组件的文档区块：说明、交互预览、用法代码与 API 表 */
export function DocSection({ entry }: DocSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyUsage = async () => {
    try {
      await navigator.clipboard.writeText(entry.usage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article id={entry.id} className="sc-doc">
      <header className="sc-doc__head">
        <h3 className="sc-doc__title">{entry.title}</h3>
        <code className="sc-doc__subtitle">{entry.subtitle}</code>
      </header>
      <p className="sc-doc__desc">{entry.desc}</p>

      <Panel title="效果预览" tone="cream" className="sc-doc__demo">
        {entry.demo}
      </Panel>

      <div className="sc-doc__code-head">
        <h4>用法</h4>
        <Button size="sm" variant="soft" tone="blue" onClick={copyUsage}>
          {copied ? "已复制" : "复制代码"}
        </Button>
      </div>
      <pre className="sc-code">
        <code>{entry.usage}</code>
      </pre>

      <h4 className="sc-doc__api-title">API</h4>
      <div className="sc-api-wrap">
        <table className="sc-api">
          <thead>
            <tr>
              <th>属性</th>
              <th>类型</th>
              <th>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {entry.api.map((row) => (
              <tr key={row.name}>
                <td>
                  <code>{row.name}</code>
                </td>
                <td>
                  <code>{row.type}</code>
                </td>
                <td>{row.default ? <code>{row.default}</code> : "—"}</td>
                <td>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
