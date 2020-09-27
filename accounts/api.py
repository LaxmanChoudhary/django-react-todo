# Views/controllers for serializers
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken

from accounts.serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
# For new registration purpose
# saves data through serializer
class RegisterAPI(generics.GenericAPIView):
	serializer_class = RegisterSerializer

	def post(self, request, *args, **kwargs):
		serializer  = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()

		# return user and a token after a user registers
		return Response({
			"user":UserSerializer(user, context=self.get_serializer_context()).data,
			"token": AuthToken.objects.create(user)[1]
		})

# Login API
# for login of registered purpose
class LoginAPI(generics.GenericAPIView):
	serializer_class = LoginSerializer

	def post(self, request, *args, **kwargs):
		serializer  = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.validated_data
		_, token = AuthToken.objects.create(user)

		# return a (user and a token) after user registers
		return Response({
			"user":UserSerializer(user, context=self.get_serializer_context()).data,
			"token": token
		})

# Get User API
# receives request along with Token via Headers and returns returns user object
class UserAPI(generics.RetrieveAPIView):
	permission_classes = [
		permissions.IsAuthenticated,
	]

	serializer_class = UserSerializer

	def get_object(self):
		return self.request.user