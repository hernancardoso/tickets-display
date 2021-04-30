import flask
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

tickets = [
    {
        "ticketId": "xk3d03",
        "subject": "Hola, mi item esta roto",
        "date": "2020-03-01 01:30:00Z",
        "from": "Joaquin Perez",
        "status": "SOLVED",
        "body": "Mi producto llego roto, no funciona como debería"
    },
    {
        "ticketId": "xx35",
        "subject": "Hola, mi item no llego",
        "date": "2020-03-02 05:30:00Z",
        "from": "Romina Esperanto",
        "status": "NEW",
        "body": "Mi producto no llegó, cuando debería llegar?"
    },

]


@app.route('/getTickets', methods=['GET'])
@cross_origin()
def api_all():
    return flask.jsonify(tickets)


app.run()
