import React from "react";

function CaseConverter({ content, onChange }) {
  return (
    <div className="textarea-container">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or paste your content here."
      />
    </div>
  );
}

export default CaseConverter;
