// Get the date from the input field
function getDate() {
    const inputDate = document.getElementById("birthday").value;
    return new Date(inputDate);
}

// Start the countdown
function start() {
    const countdownDate = getDate();
    const countdownElement = document.getElementById('demo');

    if (!countdownDate || countdownDate <= new Date()) {
        alert("Date is expired");
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const dicses = Math.floor((distance % (1000)));

        countdownElement.innerHTML = `${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes} <sub>mins</sub> ${seconds} <sub>secs</sub> ${dicses} <sub>dicses</sub>`;
    }

    const interval = setInterval(updateCountdown, 1000);

     // Set the date we're counting down to

    // Update the count down every 1 second

        // Get today's date and time

        // Find the distance between now and the count down date

        // Time calculations for days, hours, minutes and seconds

        // Output the result in an element with id="demo"

        // If the count down is over, write some text 
}



   
        





