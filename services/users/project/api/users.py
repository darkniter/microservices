<<<<<<< HEAD
# services/users/project/api/users.py


=======
>>>>>>> 13c148538f8155c5b77a12ca930b98675a080cc6
from flask import Blueprint
from flask_restful import Resource, Api


users_blueprint = Blueprint('users', __name__)
api = Api(users_blueprint)


class UsersPing(Resource):
    def get(self):
        return {
                'status': 'success',
                'message': 'pong!'
                }


api.add_resource(UsersPing, '/users/ping')
