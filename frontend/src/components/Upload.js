import React, { useRef } from "react";
import axios from "axios";

function Upload({ setResult }) {
  const fileInput = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (fileInput.current.files.length === 0) return;
    const formData = new FormData();
    formData.append("file", fileInput.current.files[0]);
    setResult("识别中...");
    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setResult(`识别结果: ${res.data.result} (置信度: ${(res.data.probability * 100).toFixed(2)}%)`);
    } catch (error) {
      setResult("上传或识别出错");
    }
  };

  return (
    <form onSubmit={handleUpload} className="upload-form">
      <label>上传图片进行识别:</label>
      <input type="file" accept="image/*" ref={fileInput} />
      <button type="submit">上传并识别</button>
    </form>
  );
}

export default Upload;