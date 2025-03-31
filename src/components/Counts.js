import React from "react";

function Counts({ charCount, wordCount, lineCount }) {
  return (
    <div className="counts">
      <span>{charCount}</span> characters •
      <span>{wordCount}</span> words •
      <span>{lineCount}</span> lines
    </div>
  );
}

export default Counts;