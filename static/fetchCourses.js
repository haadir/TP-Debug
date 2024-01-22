// Instead of using require, use dynamic import
import('node-fetch').then(({ default: fetch }) => {
  const trojanCourseApi = require('trojan-course-api');
  const departmentAbbreviation = 'CSCI';

  function fetchCourses() {
    trojanCourseApi.dept(departmentAbbreviation)
      .then((response) => {
        if (response && response.department && response.department.courses) {
          const courses = response.department.courses;
          const courseIds = Object.keys(courses);
          console.log('Course IDs:');
          console.log(courseIds.join(', '));

          // Prepare the course data to be sent
          const coursesData = courseIds.map(courseId => {
            return { id: courseId, title: courses[courseId].title };
          });

          // Send a POST request to the /post_courses endpoint in your app.py file
          fetch('http://localhost:5000/post_courses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(coursesData)  // Pass the coursesData array
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);  // Log the response from the server
          })
          .catch(error => {
            console.error('Error:', error);
          });
        } else {
          console.error('No courses data found in response.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  fetchCourses();
});
