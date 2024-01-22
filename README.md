Added this in case you have to set up the venv manually

API LINK: https://www.npmjs.com/package/trojan-course-api/v/2.2.2

Install API: npm i trojan-course-api

1. First set up virtual env, im assuming u have python installed:
python3 -m venv venv
source venv/bin/activate

2. Flask setup
pip install Flask

3. CORS setup
pip install flask-cors

4. fetch
npm install node-fetch

ISSUE: 
In the makefile I included commands for you, make run just displays the html, make fetch is just for the API call, which so far isn't showing up in the HTTP request, but I am able to console.log all the CS courses. The error I am getting is that it is saying Error: SyntaxError: Unexpected end of JSON input when I run "make fetch". Ik this may seem like a trivial error, but I've been stuck on it for a bit and couldn't find a solution on stackOverflow but maybe im being sped. For this debug version of my code, I am trying to take the api data from fetchCourses, and use app.py to send them over to the test.html file and just display it on the screen. Later on, I will have a drop down menu which will display all the USC courses, but for now I am just trying to get something on the html file.

