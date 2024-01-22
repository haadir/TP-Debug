import flask
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Route to serve the homepage
@app.route('/')
def home():
    # Render 'test.html' when the root URL is accessed
    return render_template('test.html')

# API endpoint to handle POST requests for courses
@app.route('/post_courses', methods=['POST'])
def post_courses():
    # Here you would retrieve the JSON data sent by the fetchCourses.js script
    data = request.json

    # Process the data (this is where you'd add your logic to handle the course data)
    # For this example, we'll just print it to the console
    print(data)

    # Respond with a success message
    return jsonify({'status': 'success', 'message': 'Courses data received'})

if __name__ == '__main__':
    app.run(debug=True)