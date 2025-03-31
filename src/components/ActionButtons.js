import React from "react";

function ActionButtons({ onSentenceCase, onLowerCase, onUpperCase, onTitleCase, onClear, onCopy }) {
  return (
    <div className="actions">
      <button onClick={onSentenceCase} className="btn">Sentence case</button>
      <button onClick={onLowerCase} className="btn">lower case</button>
      <button onClick={onUpperCase} className="btn">UPPER CASE</button>
      <button onClick={onTitleCase} className="btn">Title Case</button>
      <button onClick={onClear} className="btn">Clear</button>
      <button onClick={onCopy} className="btn">Copy</button>
    </div>
  );
}

export default ActionButtons;