from flask import Flask, render_template, send_file
from flask_frozen import Freezer

app = Flask(__name__)
app.url_map.strict_slashes = False

freezer = Freezer(app)

@app.get("/favicon.ico")
def favicon():
    return send_file("favicon.ico")

@app.get("/robots.txt")
def robots():
    return send_file("robots.txt")

@app.get("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    freezer.freeze()