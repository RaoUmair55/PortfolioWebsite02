function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  // Get the current date and time
const currentTime = new Date();
const currentHour = currentTime.getHours();

// Initialize the greeting variable
let greeting;

// Determine the appropriate greeting based on the hour of the day
if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

// Update the DOM with the greeting
document.getElementById('greeting').textContent = greeting;
