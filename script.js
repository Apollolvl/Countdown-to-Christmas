// Function to update countdown values and trigger animation
function updateCountdown() {
    const currentDate = new Date().getTime();
    const targetDate = new Date(new Date().getFullYear(), 11, 25).getTime(); // Christmas Day

    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Function to update a value and trigger the animation
    function updateValue(element, newValue) {
        const currentValue = element.innerText;
        if (currentValue !== newValue) {
            element.classList.add('animate-change');
            element.innerText = newValue;
            setTimeout(() => {
                element.classList.remove('animate-change');
            }, 500); // Duration of animation (0.5s)
        }
    }

    updateValue(document.getElementById('days'), days);
    updateValue(document.getElementById('hours'), hours);
    updateValue(document.getElementById('minutes'), minutes);
    updateValue(document.getElementById('seconds'), seconds);
}

// Call the updateCountdown function when the page loads and then every second
window.onload = updateCountdown;
setInterval(updateCountdown, 1000);


