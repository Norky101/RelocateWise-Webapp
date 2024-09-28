from flask import Flask, request, jsonify

import requests


app = Flask(__name__)

# # Route to handle GET requests
# @app.route('/get', methods=['GET'])
# def handle_get():
#     data = request.args  # Get query parameters from the URL
#     return jsonify({"received": data})

# Route to handle POST requests
@app.route('/post', methods=['POST'])
def handle_post():
    data = request.json  # Expecting JSON data in POST body
    citizenship_status = data['citizenship_status']
    location = data['location']
    more_info = data['more_info']
    university = data['university']
    category = data['category']

    prompt = f"""I am a/an {citizenship_status} planning to live in {location}. I am {more_info}. I plan to attend {university}. Please give me a breakdown of my {category} costs. 
When you give the output, make sure its a json object. Do not add any information to the response, just the json object"""

    return jsonify({"received": prompt})

if __name__ == '__main__':
    app.run(debug=True)


