# TaskFlow
An AI-powered task management assistant that prioritizes tasks based on urgency, deadlines, and user habits.

## Task Prioritization Assistant (AI-powered To-Do List)

### Overview
This smart task management app helps users organize their tasks, but unlike traditional to-do lists, it uses AI to suggest which tasks should take priority based on factors like urgency, estimated effort, and the user’s past behavior. This project showcases the ability to work with AI/ML algorithms, backend APIs, and frontend frameworks.

## Key Features

### Task Input and Management
- Users can input tasks along with key details like due dates, estimated effort (e.g., time required), priority level (e.g., low, medium, high), and categories (e.g., work, personal, school).
- Tasks can be organized into lists, and users can view tasks by day, week, or month.
- Implement CRUD functionality (Create, Read, Update, Delete) with RESTful endpoints to manage tasks.

### AI-Powered Task Prioritization
#### Machine Learning Model
- Ranks tasks based on urgency, importance, and deadlines.
- Train the model to learn user behavior over time (e.g., how long they take to complete tasks, tasks they frequently delay, etc.).
- Optionally, build a more complex recommendation system using TensorFlow or Scikit-learn to predict task urgency or suggest optimal task sequences.

### Task History and Habit Analysis
- Store user’s completed tasks and track patterns over time (e.g., do they procrastinate on certain categories of tasks?).
- Use this data to adjust the AI model and give better prioritization suggestions in the future.
- Visualize this analysis with a dashboard of productivity metrics (e.g., tasks completed per day/week, average task completion time).

### Calendar Integration
- Integrate with Google Calendar or Apple Calendar so tasks with deadlines automatically sync to the user’s calendar.
- This would require learning how to interact with external APIs like the Google Calendar API.

### Push Notifications and Reminders
- High-priority tasks or approaching deadlines should be notified to the user.
- Notifications should be customizable (e.g., 1 day before deadline, 1 hour before deadline).

### Mobile App Sync
- Optionally create a cross-platform mobile app (using React Native or Flutter) to sync tasks between mobile devices and the web platform.
- Allow users to manage tasks from either their computer or mobile phone.

## Technologies
- **Frontend**: React for the web app (or React Native for mobile).
- **Backend**: Django REST framework for API development.
- **Database**: Stack-Auth for storing tasks, user data, and historical information.
- **AI/ML**: TensorFlow/Scikit-learn for implementing the machine learning model.
- **Third-party APIs**: Google Calendar API for syncing tasks and time, and optionally Firebase for push notifications and user authentication.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AlexanderO07/TaskFlow.git
   ```
2. Navigate to project directory:
   ```bash
   cd TaskFlow
   ```
3. Set up a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # For MacOS/Linux
   .\venv\Scripts\activate   # For Windows
   ```
4. Install dependencies for the frontend and backend:
   ```bash
   pip install -r requirements.txt
   ```


## Usage
1. Start the backend server:
   ```bash
   python manage.py runserver
   ```
2. Start the frontend development server:
   ```bash
   npm start  # or yarn start
   ```
3. Open your web browser and navigate to [local host](http://localhost:3000) to view the app. 

## Future Intentions
- Develop and integrate a more advanced machine learning model to accurately predict task completion times and deliver personalized recommendations tailored to individual user behavior.
- Deploy the application on a registered website domain to enhance accessibility and provide a professional online presence.

## Contributions 
Contributions, while not currently accepting, will be welcome in the future.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/AlexanderO07/TaskFlow/blob/main/LICENSE) file for more details.