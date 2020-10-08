# Quick guide

# `download`
Download the project using zip **Download zip** or maybe you love command line, then go for <br>
`git clone https://github.com/LaxmanChoudhary/django-react-todo.git`

# `installations`
## **pre-requisits**
- `python` 3.6 or higher <br>
- `nodeJs` latest stable or somewhere around <br>

## `python dependancies` for Django

Repository contains a **requirements.txt** file, so you can either use a **virtualenv** or **pipenv**. <br>

Shoot the following command on `terminal` in the root folder <br>

If *virtualenv*, after creating a virtual environment, activate the environment and use `python -m pip install -r requirements.txt` or `pip install -r requirements.txt`. <br>

If *pipenv*, in the root folder where requirements.txt is contained `pipenv install`. <br>

## `npm dependancies` for ReactJs

Move to `django-react-todo/frontend` where you can see package.json. <br>
`npm install`

# To run the project
- Create build files <br>
in *django-react-todo/frontend* `npm run dev`

- Run Django server <br>
in root folder `python manage.py runserver`
