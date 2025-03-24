from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/api", methods=["GET"])
def my_service():
    return jsonify({"message": "Hello, from service Andres"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5007)
