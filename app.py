from flask import Flask, request
from flask import render_template
app = Flask(__name__)

@app.route('/')
@app.route('/result', methods = ['GET', 'POST'])
def result():
    if request.method == 'GET':
        return "test"

if __name__ == '__main__':
    app.run(debug = True)
