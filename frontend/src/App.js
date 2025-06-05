import React, { useState } from "react";
import Upload from "./components/Upload";
import WebcamCapture from "./components/WebcamCapture";
import Result from "./components/Result";
import "./style.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="main-container">
      <h1>深度学习手势识别系统</h1>
      <Upload setResult={setResult} />
      <WebcamCapture setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;