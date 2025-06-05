import React from "react";
function Result({ result }) {
  return (
    <div className="result-area">
      <h3>识别结果：</h3>
      <p>{result}</p>
    </div>
  );
}
export default Result;