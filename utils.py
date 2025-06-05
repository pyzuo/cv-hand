import numpy as np
from tensorflow.keras.models import load_model as keras_load_model
from tensorflow.keras.preprocessing import image

GESTURE_CLASSES = ['rock', 'paper', 'scissors', 'ok', 'thumbs_up']

def load_model(model_path):
    model = keras_load_model(model_path)
    return model

def predict_gesture(model, img_path):
    img = image.load_img(img_path, target_size=(64, 64))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = x / 255.0
    preds = model.predict(x)
    pred_label = GESTURE_CLASSES[np.argmax(preds)]
    return pred_label
