from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def base():
  return "Hello World"

if __name__ == '__main__':
  app.run(debug=True)