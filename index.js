const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const goals = document.querySelectorAll('li'); // gets all existing goal list items
    
    for (let i = 0; i< goals.length; i++) {  // for loop iterates over each existing goal (goals[i]) 
        const currentGoalList = goals[i].textContent.toLowerCase().trim().replace(/[ !@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?]+/g, ''); // converts text content of goals to lowercase, removes white space, and removes special characters
        
        if (currentGoalList === goalInput.toLowerCase().trim().replace(/[ !@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?]+/g, '')) {  // checks if content of existingGoalList is the same as goalInput text content
        alert('Goal already added!');  // if duplicate is found, an alert pops up
        return; // exits function, preventing goal from being added
        }
    }
    // if no duplicate is found, the item will be added to the goal list:
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    newGoal.addEventListener('click', () => {      // added this event listener to allow the added item to be removed
        goalList.removeChild(newGoal);
    });
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
