window.rsvp = rsvp;

// Initialize eventCounts if missing
if (!localStorage.getItem('eventCounts')) {
    const counts = {};
    events.forEach((e, i) => counts[i] = { interested: Math.floor(Math.random()*5), going: Math.floor(Math.random()*5) });
    localStorage.setItem('eventCounts', JSON.stringify(counts));
}

// Initialize userSelections if missing
if (!localStorage.getItem('userSelections')) {
    localStorage.setItem('userSelections', JSON.stringify({}));
}

// ========================
// LOGIN / LOGOUT SYSTEM
// ========================
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const userDisplay = document.getElementById('user-display');
const userContainer = document.getElementById('user-container');

function login() {
    const username = usernameInput.value.trim();
    if (!username) return alert('Please enter a username.');
    localStorage.setItem('username', username);
    updateLoginUI();
    loadUserSelections();
}

function logout() {
    localStorage.removeItem('username');
    updateLoginUI();
    // Optional: remove highlights
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
}

function updateLoginUI() {
    const username = localStorage.getItem('username');
    if (username) {
        loginForm.style.display = 'none';
        userContainer.style.display = 'block';
        userDisplay.textContent = `Logged in as: ${username}`;
        logoutButton.style.display = 'inline';
    } else {
        loginForm.style.display = 'block';
        userDisplay.textContent = '';
        logoutButton.style.display = 'none';
    }
}

loginButton.addEventListener('click', login);
logoutButton.addEventListener('click', logout);

// ========================
// RSVP / COUNTS SYSTEM
// ========================

// Initialize counts in localStorage if missing
if (!localStorage.getItem('eventCounts')) {
    const counts = {};
    events.forEach((e, i) => counts[i] = { interested: 0, going: 0 });
    localStorage.setItem('eventCounts', JSON.stringify(counts));
}

function rsvp(eventIndex, option) {
    const username = localStorage.getItem('username');
    if (!username) return alert('Please log in first.');

    const counts = JSON.parse(localStorage.getItem('eventCounts') || '{}');
    let selections = JSON.parse(localStorage.getItem('userSelections') || '{}');

    if (!selections[username]) selections[username] = {};
    
    const currentSelection = selections[username][eventIndex];

    // Deselect if same button clicked again
    if (currentSelection === option) {
        counts[eventIndex][option]--;
        delete selections[username][eventIndex];
    } else {
        // Remove previous selection
        if (currentSelection) counts[eventIndex][currentSelection]--;
        // Add new selection
        counts[eventIndex][option]++;
        selections[username][eventIndex] = option;
    }

    localStorage.setItem('userSelections', JSON.stringify(selections));
    localStorage.setItem('eventCounts', JSON.stringify(counts));

    updateEventDisplay(eventIndex);
}

// Load all selections for logged-in user
function loadUserSelections() {
    events.forEach((e, i) => updateEventDisplay(i));
}

// Initial login UI setup
window.addEventListener('load', () => {
    updateLoginUI();
});

function updateEventDisplay(eventIndex) {
    const counts = JSON.parse(localStorage.getItem('eventCounts'));
    const selections = JSON.parse(localStorage.getItem('userSelections'));
    const username = localStorage.getItem('username');
    const userSelection = selections[username]?.[eventIndex];

    const card = document.getElementById(`event-${eventIndex}`);
    if (!card) return;

    // Update counts
    card.querySelector('[data-count]').textContent = 
        `Interested: ${counts[eventIndex].interested} | Going: ${counts[eventIndex].going}`;

    // Update button visual feedback
    const buttons = card.querySelectorAll('button[data-rsvp]');
    buttons.forEach(btn => {
        const option = btn.getAttribute('data-rsvp');
        if (option === userSelection) {
            btn.classList.remove(`btn-outline-${option === 'going' ? 'success' : 'primary'}`);
            btn.classList.add(option === 'going' ? 'btn-success' : 'btn-primary');
        } else {
            btn.classList.remove('btn-success', 'btn-primary');
            btn.classList.add(`btn-outline-${option === 'going' ? 'success' : 'primary'}`);
        }
    });
}