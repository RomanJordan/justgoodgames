# justgoodgames
##### Just Good Games is a minimalistic website for video game recommendations. The site is built with Django as a backend, with each "recommendation" being a model. A model an abstraction of more complex data, and it maps to a single database table. Each "recommendation" is merely an entry within that table. Django is then used to create a RESTful API. Django normally is used to render simple HTML templates, but we can also use Django to render a blank HTML file, then let React take control of that page and handle all of our frontend styling.

##### Webpack is used to bundle our Javascript files. As said before, Django only statically renders HTML files, but we can use that functionality to use React. Webpack compiles all Javascript code, and other files associated with our React project into a single file, which we can then include in our static HTML file served by django.

##### Once react has control of the HTML, the app then makes a fetch call to the backend API where it gets all of the "recommendations", maps them to an array, and finally divs created for each element of the array. 

##### The core model of this website lies with the Django backend, which we have used to create our "recommendation" model. The model has attributes such as a title, release date, developer, body text, and associated boxart image. Django allows us to easily create a RESTful API & serializer. The Django serializer allows us to take our complex recommendation model, and convert it to Python, which can then be rendered as JSON. This can also work in reverse, as with the contact page. The contact page allows any user to make their own recommenation in a form, with the same fields we used in our recommendation model. This user generated recommendation is then inserted into another table in the database, where it can be reviewed, and either accepted or denied. All this data is being stored in a PostgreSQL database.

### Trello board - https://trello.com/b/wUy0U2rC/just-good-games

### Front Page
![Alt text](https://raw.githubusercontent.com/RomanJordan/justgoodgames/main/backend/images/frontpage.png?token=AHYFX6AKRIPEQB4WKLID36C74QDUM "Front Page")

### Front Page with items expanded
![Alt text](https://raw.githubusercontent.com/RomanJordan/justgoodgames/main/backend/images/frontpage_opened.png?token=AHYFX6DUAU5BHWRTMFJA4X274QEG6 "Front Page with items expanded")

### Mobile responsive front page
![Alt text](https://raw.githubusercontent.com/RomanJordan/justgoodgames/main/backend/images/6.png?token=AHYFX6GMEONROF6EKT7OWS274QEOS "Mobile front page with items expanded")

### Contact page
![Alt text](https://raw.githubusercontent.com/RomanJordan/justgoodgames/main/backend/images/contact.png?token=AHYFX6CLPM2LD6DF35KR3IK74QEQG "Contact")

### Mobile responsive contact page
![Alt text](https://raw.githubusercontent.com/RomanJordan/justgoodgames/main/backend/images/contact_mobile.png?token=AHYFX6E7B6YLQZ2QHRVSRO274QE2Y "Mobile responsive contact page")