from flask import Flask

app = Flask(__name__)
from mongoengine import *
connect(
   'janeluong',
   username = 'admin',
   password = 'admin',
   host = 'ds133388.mlab.com:33388',
   port = 33388
)
@app.route('/')
def hello_world():
    return 'Hello World!'


class User(Document):
    name = StringField()
    desc = StringField()
    img = StringField()
user=User.objects()
for n in user:
    print(n["name"],"=" ,"desc",n["desc"],"img",n["img"])





if __name__ == '__main__':
    app.run()
