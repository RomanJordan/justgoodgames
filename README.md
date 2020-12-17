# justgoodgames
##### Just Good Games is a minimalistic website for video game recommendations. The site is built with Django as a backend, with each "recommendation" having a title, developer, release date, genre, as well as an associated boxart. Django is then used to create a RESTful API. Django normally is used to render HTML templates, but we can also use Django to render a blank HTML file, then use webpack to let React take control of that page and handle all of our frontend styling. 

##### Once react has control of the HTML, the app then makes a fetch call to the backend API where it gets all of the "recommendations", and maps them to an array, and divs created for each element of the array. 
