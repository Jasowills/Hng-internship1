document.addEventListener("DOMContentLoaded", function () {
    // Get the current date and time
    const currentDate = new Date();
    
    // Get the current day of the week (e.g., Monday, Tuesday)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Format the UTC time as "HH:mm"
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const formattedUTCTime = `${hours}:${minutes}`;

    // Update the elements with the specified data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${currentDayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${formattedUTCTime}`;
});
