import React, { useRef, useState } from "react";
import axios from "axios";

function WebcamCapture({ setResult }) {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    setStreaming(true);
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    stream.getTracks().forEach((track) => track.stop());
    setStreaming(false);
  };

  const captureAndSend = async () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 224, 224);
    canvasRef.current.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("file", blob, "capture.png");
      setResult("识别中...");
      try {
        const res = await axios.post("http://localhost:5000/predict", formData);
        setResult(`识别结果: ${res.data.result} (置信度: ${(res.data.probability * 100).toFixed(2)}%)`);
      } catch {
        setResult("上传或识别出错");
      }
    }, "image/png");
  };

  return (
    <div className="webcam-container">
      <label>摄像头实时识别:</label>
      <div>
        <video ref={videoRef} width="224" height="224" autoPlay muted />
        <canvas ref={canvasRef} width="224" height="224" style={{ display: "none" }} />
      </div>
      {!streaming ? (
        <button onClick={startCamera}>启动摄像头</button>
      ) : (
        <>
          <button onClick={captureAndSend}>拍照识别</button>
          <button onClick={stopCamera}>关闭摄像头</button>
        </>
      )}
    </div>
  );
}

export default WebcamCapture;