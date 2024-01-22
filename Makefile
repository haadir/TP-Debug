.PHONY: run

run:
	@echo "Starting Flask server..."
	@FLASK_APP=app.py FLASK_ENV=development flask run

.PHONY: fetch
fetch:
	node static/fetchCourses.js

.PHONY: both
both: fetch run