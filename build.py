from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
app.url_map.strict_slashes = False

freezer = Freezer(app)

@app.get("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    freezer.freeze()