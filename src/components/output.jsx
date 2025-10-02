import React from "react";

const Output = ({ value }) => {
  const copyToClipboard = () => {
    const textToCopy = Array.isArray(value) ? value.join("\n\n") : value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy"));
  };

  return (
    <div className="output Well">
      
      {Array.isArray(value)
        ? value.map((para, index) => <p key={index}>{para}</p>)
        : <p>{value}</p>
      }
      <button onClick={copyToClipboard} >Copy All</button>
    </div>
  );
};

export default Output;