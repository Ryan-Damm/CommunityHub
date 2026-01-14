let events;

// Check if events exist in localStorage, if so load them, otherwise use defaults
if (localStorage.getItem('communityEvents')) {
    events = JSON.parse(localStorage.getItem('communityEvents'));
} else {
    events = [
        {
            title: "City Council Meeting",
            date: "2026-03-15",
            location: "Town Hall",
            type: "Government",
            description: "City council meets to discuss new ordinances, budget proposals, and community concerns."
        },
        {
            title: "Community Clean-Up",
            date: "2026-03-22",
            location: "River Park",
            type: "Volunteer",
            description: "Join neighbors to help clean and maintain the river park. Supplies provided."
        },
        {
            title: "Local Resource Fair",
            date: "2026-04-02",
            location: "Community Center",
            type: "Community",
            description: "Discover local non-profits, services, and programs available in the area."
        },
        {
            title: "Health Awareness Workshop",
            date: "2026-04-10",
            location: "Library",
            type: "Health",
            description: "Free workshop on nutrition, mental health, and wellness for all ages."
        }
    ];
    // Save the default events to localStorage
    localStorage.setItem('communityEvents', JSON.stringify(events));
}