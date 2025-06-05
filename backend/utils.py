import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model as keras_load_model

GESTURE_CLASSES = ['1', 'c', 'down', 'fist', 'fist_moved', 'index', 'ok', 'palm', 'palm_moved', 'thumb']

def load_model(model_path):
    return keras_load_model(model_path)

def predict_gesture(model, img_path):
    img = image.load_img(img_path, target_size=(64, 64))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0) / 255.0
    preds = model.predict(x)[0]
    pred_label = GESTURE_CLASSES[np.argmax(preds)]
    prob = np.max(preds)
    return pred_label, prob