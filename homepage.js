document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.getElementById("eventsContainer");

    if (!eventsContainer || typeof events === "undefined") return;

    const upcomingEvents = [...events]
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    upcomingEvents.forEach(event => {
        eventsContainer.innerHTML += `
        <div class="col-md-4">
        <div class="card h-100">
            <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">
                ${new Date(event.date + " 00:00:00").toLocaleDateString()} – ${event.location}
            </p>
            </div>
        </div>
        </div>
    `;
    });
});

upcomingEvents.forEach((event, index) => {
    eventsContainer.innerHTML += `
    <div class="col-md-4">
        <div class="card h-100 event-card" data-index="${index}" style="cursor:pointer;">
        <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">
            ${new Date(event.date + " 00:00:00").toLocaleDateString()} – ${event.location}
            </p>
        </div>
        </div>
    </div>
    `;
});

document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => {
        const index = card.getAttribute("data-index");
        const event = upcomingEvents[index]; // or events[index] on full page

        document.getElementById("eventModalTitle").textContent = event.title;
        document.getElementById("eventModalBody").textContent = event.description;
        document.getElementById("eventModalDateLocation").textContent =
            `${new Date(event.date + " 00:00:00").toLocaleDateString()} – ${event.location}`;

        // Show Bootstrap modal
        $('#eventModal').modal('show');
    });
});