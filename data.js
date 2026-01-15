let events;

// Check if events exist in localStorage, if so load them, otherwise use defaults
if (localStorage.getItem('communityEvents')) {
    events = JSON.parse(localStorage.getItem('communityEvents'));
} else {
    events = [
        {
            title: "Community Town Hall Q&A",
            date: "2026-02-03",
            location: "Town Hall",
            type: "Government",
            description: "Residents are invited to ask questions and discuss local issues with town officials."
        },
        {
            title: "Winter Clothing Donation Drive",
            date: "2026-02-07",
            location: "Community Center",
            type: "Volunteer",
            description: "Donate gently used winter coats, hats, and gloves to support families in need."
        },
        {
            title: "Local Arts & Crafts Expo",
            date: "2026-02-11",
            location: "Civic Plaza",
            type: "Community",
            description: "A showcase of local artists and craft makers with interactive demonstrations."
        },
        {
            title: "Senior Wellness Check Day",
            date: "2026-02-14",
            location: "Senior Services Building",
            type: "Health",
            description: "Free wellness checks and informational sessions focused on senior health resources."
        },
        {
            title: "Neighborhood Tree Planting",
            date: "2026-02-17",
            location: "Maple Street Park",
            type: "Volunteer",
            description: "Volunteers help plant new trees to improve green spaces throughout the neighborhood."
        },
        {
            title: "Emergency Preparedness Workshop",
            date: "2026-02-20",
            location: "Fire Station #2",
            type: "Community",
            description: "Learn how to prepare for emergencies, including weather events and power outages."
        },
        {
            title: "Public Transit Feedback Session",
            date: "2026-02-23",
            location: "Transportation Office",
            type: "Government",
            description: "A discussion session for residents to share feedback on local transit services."
        },
        {
            title: "Community Blood Drive",
            date: "2026-02-26",
            location: "Recreation Center",
            type: "Health",
            description: "A local blood drive supporting regional hospitals. Appointments and walk-ins welcome."
        },
        {
            title: "Volunteer Appreciation Night",
            date: "2026-03-01",
            location: "Community Hall",
            type: "Volunteer",
            description: "An evening event recognizing the contributions of community volunteers."
        },
        {
            title: "Youth Career Exploration Fair",
            date: "2026-03-05",
            location: "High School Gymnasium",
            type: "Community",
            description: "Students explore career paths through hands-on activities and local organization booths."
        }
    ];
    // Save the default events to localStorage
    localStorage.setItem('communityEvents', JSON.stringify(events));
}