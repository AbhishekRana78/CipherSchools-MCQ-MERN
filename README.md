# CipherSchools-MCQ-MERN

# Follow the steps tu run the project


step 1 : cd backend (install all the packages)

:  npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser cors --save-dev nodemon

:  node index.js (to run the server)



step 2: cd frontend (install all the packages)
:  npm install
:  npm start (run the app)




# Features

●User Authentication:

●Test Environment:
○After login, the user should start the test, which will ask for permissions to access the camera and microphone.
○Display a preview of the camera feed once permissions are granted.
○If any permission is missing, show an appropriate error message.

●MCQ Test Interface:
○Users should be able to see each question and its options.
○Allow users to select and change their answers.
○Users should be able to navigate between questions freely.
○Include a camera window in the test interface.

●Test Submission:
○On completion, users can submit their test. Redirect them to a "Finish Test" page.
○Implement a cron job that runs every hour to evaluate submitted tests.
●Score and Evaluation:
