import React, { useState } from "react";
import "./App.css";
import CaseConverter from "./components/CaseConverter";
import ActionButtons from "./components/ActionButtons";
import Counts from "./components/Counts";

function App() {
  const [content, setContent] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(1);

  // Update text area content and counts
  const updateContent = (newContent) => {
    setContent(newContent);
    setCharCount(newContent.length);
    setWordCount(newContent.trim().split(/\s+/).length);
    setLineCount(newContent.split("\n").length);
  };

  return (
    <div className="container">
      <h1>Case Converter</h1>
      <h2>A Smart Case Capitalization Tool</h2>
      <CaseConverter content={content} onChange={updateContent} />
      <Counts charCount={charCount} wordCount={wordCount} lineCount={lineCount} />
      <ActionButtons
        onSentenceCase={() => updateContent(content.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase()))}
        onLowerCase={() => updateContent(content.toLowerCase())}
        onUpperCase={() => updateContent(content.toUpperCase())}
        onTitleCase={() => {
          const titleCase = content
            .toLowerCase()
            .split("\n")
            .map((line) =>
              line
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            )
            .join("\n");
          updateContent(titleCase);
        }}
        onClear={() => updateContent("")}
        onCopy={() => {
          navigator.clipboard.writeText(content);
        }}
      />
    </div>
  );
}

export default App;