from flask import Flask, render_template, send_file
from flask_frozen import Freezer
import json

app = Flask(__name__)
app.url_map.strict_slashes = False

freezer = Freezer(app)

@app.get("/favicon.ico")
def favicon():
    return send_file("favicon.ico")

@app.get("/robots.txt")
def robots():
    return send_file("robots.txt")

@app.get("/data/credits.json")
def art_credits():
    return send_file("credits.json")

@app.get("/")
def index():
    return render_template("index.html")

@app.get("/art")
def art():
    with open("credits.json", encoding="utf-8") as f:
        return render_template("art.html", credits=json.load(f))

if __name__ == "__main__":
    freezer.freeze()