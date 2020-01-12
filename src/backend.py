import os, io, base64, operator, random
from flask import Flask, render_template, request, jsonify
from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient


# Initialize the web application

app = Flask(__name__)

# The root route, returns the rendered 'index.html' template page
@app.route('/')
def home():
    page_data = {}
    return render_template('index.html', page_data = page_data)