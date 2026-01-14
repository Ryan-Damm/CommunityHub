document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitEventBtn");
    const formConfirmation = document.getElementById("formConfirmation");

    submitBtn.addEventListener("click", () => {
        const title = document.getElementById("eventName").value.trim();
        const date = document.getElementById("eventDate").value;
        const description = document.getElementById("eventDescription").value.trim();

        if (!title || !date) {
            formConfirmation.textContent = "Please enter both a name and a date.";
            return;
        }

        const newEvent = {
            title: title,
            date: date,
            type: "Community",
            location: "Community Center",
            description: description
        };

        events.push(newEvent);
        // Save updated events to localStorage
        localStorage.setItem('communityEvents', JSON.stringify(events));
        console.log(events);

        formConfirmation.textContent = "Thank you! Your event suggestion has been emailed to the marketing team.";

        document.getElementById("suggestEventForm").reset();

        // Redirect to events page after 2 seconds to show the new event
        setTimeout(() => {
            window.location.href = "events.html";
        }, 2000);
    });
});
