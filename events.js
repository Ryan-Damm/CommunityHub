document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("allEventsContainer");
    const calendarDiv = document.getElementById("calendar");
    const typeFilter = document.getElementById("typeFilter");

    if (!container || !calendarDiv || typeof events === "undefined") return;

    // Function to render event cards
    function renderEvents(filterType = "all") {
        container.innerHTML = "";
        const filtered = events.filter(e => filterType === "all" || e.type === filterType)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        filtered.forEach((event, index) => {
            container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100" id="event-${index}">
            <div class="card-body">
              <h5 class="card-title">${event.title}</h5>
              <p class="card-text">
                ${new Date(event.date + " 00:00:00").toLocaleDateString()} – ${event.location}
              </p>
              <p class="text-muted">${event.type}</p>
            </div>
          </div>
        </div>
      `;
        });

        // After rendering, attach click handlers if needed later
    }

    // Initial render
    renderEvents();

    // Filter change
    typeFilter.addEventListener("change", () => {
        renderEvents(typeFilter.value);
    });

    // Generate calendar
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = '<table class="table table-bordered text-center"><thead><tr>';
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => calendarHTML += `<th>${d}</th>`);
    calendarHTML += '</tr></thead><tbody><tr>';

    for (let i = 0; i < firstDay; i++) calendarHTML += '<td></td>';

    for (let day = 1; day <= daysInMonth; day++) {
        const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const eventIndex = events.findIndex(e => e.date === currentDateStr);

        if (eventIndex !== -1) {
            calendarHTML += `<td class="bg-warning" style="cursor:pointer" data-index="${eventIndex}">${day}</td>`;
        } else {
            calendarHTML += `<td>${day}</td>`;
        }

        if ((day + firstDay) % 7 === 0) calendarHTML += '</tr><tr>';
    }

    calendarHTML += '</tr></tbody></table>';
    calendarDiv.innerHTML = calendarHTML;

    // Click on calendar date scrolls to event
    calendarDiv.querySelectorAll('td[data-index]').forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            const target = document.getElementById(`event-${index}`);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

});

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth(); // 0 = Jan

const calendarDiv = document.getElementById("calendar");
const calendarMonthYear = document.getElementById("calendarMonthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

function renderCalendar(year, month) {
    calendarMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '<table class="table table-bordered text-center"><thead><tr>';
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => html += `<th>${d}</th>`);
    html += '</tr></thead><tbody><tr>';

    for (let i = 0; i < firstDay; i++) html += '<td></td>';

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const eventIndex = events.findIndex(e => e.date === dateStr);

        if (eventIndex !== -1) {
            html += `<td class="bg-warning" style="cursor:pointer" data-index="${eventIndex}">${day}</td>`;
        } else {
            html += `<td>${day}</td>`;
        }

        if ((day + firstDay) % 7 === 0) html += '</tr><tr>';
    }

    html += '</tr></tbody></table>';
    calendarDiv.innerHTML = html;

    // Click on date scrolls to event
    calendarDiv.querySelectorAll('td[data-index]').forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            const target = document.getElementById(`event-${index}`);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Initial render
renderCalendar(currentYear, currentMonth);

// Month navigation
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
});
