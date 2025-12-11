"use client";

import { useState } from "react";

const items = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Django",
  "Laravel",
  "Flutter",
  "Swift",
  "Kotlin",
];

export default function App() {
  const [keyword, setKeyword] = useState("");

  // 入力された文字でリアルタイム絞り込み
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #eee",
        fontFamily: "sans-serif",
        background: "#ffffff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        🔍 技術検索
      </h2>

      {/* 検索入力 */}
      <input
        type="text"
        placeholder="技術名を入力…"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "16px",
          fontSize: "14px",
        }}
      />

      {/* 検索結果 */}
      <ul style={{ padding: 0, listStyle: "none" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li
              key={item}
              style={{
                padding: "10px 12px",
                borderRadius: "6px",
                background: "#f7f7f7",
                marginBottom: "8px",
                fontSize: "14px",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <p style={{ color: "#888", fontSize: "14px" }}>
            該当する技術はありません
          </p>
        )}
      </ul>
    </div>
  );
}