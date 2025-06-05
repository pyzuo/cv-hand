    # 深度学习手势识别系统

## 项目简介

本项目为端到端的手势识别系统，分为前端与后端，支持图片上传、摄像头实时识别。

## 技术栈

- 后端：Flask, TensorFlow/Keras
- 前端：React, Axios

## 快速开始

### 1. 训练模型

准备手势图片数据集，放于 `backend/data/`，结构如下：

```
data/
├── rock/
├── paper/
├── scissors/
├── ok/
├── thumbs_up/
└── stop/
```

每个类别文件夹内放若干图片。  
进入`backend/`目录，安装依赖并训练模型：

```bash
cd backend
pip install -r requirements.txt
python train.py
```

训练后，模型会保存在`backend/model/gesture_model.h5`。

### 2. 启动后端

```bash
python app.py
```

### 3. 启动前端

```bash
cd frontend
npm install
npm start
```

前端默认访问`http://localhost:5000`的API接口。

### 4. 使用方式

浏览器访问 http://localhost:3000 ，上传图片或使用摄像头识别手势。

---

如需扩展数据集、识别类别、API、性能优化等，欢迎继续提需求！