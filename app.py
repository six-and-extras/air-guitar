from flask import Flask, request
app = Flask(__name__)


@app.route('/test', methods = ['GET', 'POST'])
def result():
    if request.method == 'GET':
        place = request.args.get('place', None)
        if place:
            print(place)
            return place
        return "no place information is given"

if __name__ == '__main__':
    app.run(debug = True)
