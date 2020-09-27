# Form-look-alikes,
# for API's
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
# To obtain user objects based on requests
class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields =('id', 'username', 'email')

# Register Serializer
# saves a new user instance
class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'password')
		extra_kwargs = {'password': {'write_only':True}}

	def create(self, validated_data):
		user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
		return user

# TO CHECK THE REPRESENTATION OF SERIALIZERS
# $ python manage.py shell

# from accounts.serializers import RegisterSerializer
# serializer = RegisterSerializer()
# print(repr(serializer))
"""
 RegisterSerializer():
  id = IntegerField(label='ID', read_only=True)
  username = CharField(help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, validators=[<django.contrib.auth.validators.UnicodeUsernameValidator object>, <UniqueValidator(queryset=User.objects.all())>])
  email = EmailField(allow_blank=True, label='Email address', max_length=254, required=False)
  password = CharField(max_length=128, write_only=True)
"""

# Login Serializer
class LoginSerializer(serializers.Serializer):
	username = serializers.CharField()
	password = serializers.CharField()

	def validate(self, data):
		user = authenticate(**data)
		if user and user.is_active:
			return user
		raise serializers.ValidationError("Incorrect Credentials")