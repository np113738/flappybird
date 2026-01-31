from flask import Flask, request, jsonify

app = Flask(__name__)
high_score = 0

@app.route("/score", methods=["POST"])
def score():
    global high_score
    data = request.json or {}
    score = data.get("score", 0)
    if score > high_score:
        high_score = score
    return jsonify({"high_score": high_score})

@app.route("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
