from build import app

app.config["TEMPLATES_AUTO_RELOAD"] = True

if __name__ == "__main__":
    app.run("localhost", 8080)