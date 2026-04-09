let events;

// Check if events exist in localStorage, if so load them, otherwise use defaults
if (localStorage.getItem('communityEvents')) {
    events = JSON.parse(localStorage.getItem('communityEvents'));
} else {
    events = [
    {
        title: "Spring Community Town Hall",
        date: "2026-04-10",
        location: "Town Hall",
        type: "Government",
        description: "Residents are invited to discuss upcoming municipal initiatives and local policies."
    },
    {
        title: "Earth Day Volunteer Cleanup",
        date: "2026-04-12",
        location: "Riverside Park",
        type: "Volunteer",
        description: "Join community volunteers to clean and beautify local parks in celebration of Earth Day."
    },
    {
        title: "Local Artisan Market",
        date: "2026-04-15",
        location: "Civic Plaza",
        type: "Community",
        description: "A market featuring handcrafted items from local artists with live demonstrations and workshops."
    },
    {
        title: "Senior Health & Wellness Fair",
        date: "2026-04-17",
        location: "Senior Services Center",
        type: "Health",
        description: "Free health screenings and resources aimed at promoting wellness among seniors."
    },
    {
        title: "Neighborhood Flower Planting",
        date: "2026-04-20",
        location: "Maple Street Gardens",
        type: "Volunteer",
        description: "Help plant spring flowers to enhance the beauty of local green spaces."
    },
    {
        title: "Emergency Preparedness Drill",
        date: "2026-04-22",
        location: "Fire Station #2",
        type: "Community",
        description: "Participate in hands-on drills and learn how to respond effectively to emergencies."
    },
    {
        title: "City Transportation Feedback Meeting",
        date: "2026-04-25",
        location: "Transportation Office",
        type: "Government",
        description: "Provide input and feedback on current public transit services and planned improvements."
    },
    {
        title: "Community Blood Donation Day",
        date: "2026-04-27",
        location: "Recreation Center",
        type: "Health",
        description: "Support local hospitals by donating blood. Appointments and walk-ins welcome."
    },
    {
        title: "Volunteer Recognition Dinner",
        date: "2026-04-30",
        location: "Community Hall",
        type: "Volunteer",
        description: "An evening to honor the dedication and contributions of community volunteers."
    },
    {
        title: "Youth Career Exploration Expo",
        date: "2026-05-02",
        location: "High School Gymnasium",
        type: "Community",
        description: "Students can explore various career paths through hands-on activities and organization booths."
    },
    {
        title: "Public Budget Review Forum",
        date: "2026-05-05",
        location: "Town Hall",
        type: "Government",
        description: "Learn about the city budget and ask questions directly to local officials in an open forum."
    },
    {
        title: "Neighborhood Park Improvement Day",
        date: "2026-05-08",
        location: "Oakwood Park",
        type: "Volunteer",
        description: "Volunteers assist with planting, cleaning, and maintaining local park spaces."
    },
    {
        title: "Mental Health Awareness Seminar",
        date: "2026-05-10",
        location: "Community Center",
        type: "Health",
        description: "Interactive sessions focused on mental wellness, coping strategies, and local resources."
    },
    {
        title: "Local History Lecture",
        date: "2026-05-12",
        location: "Civic Library Auditorium",
        type: "Community",
        description: "A lecture exploring the town’s history, culture, and key historical events."
    },
    {
        title: "First Aid & Emergency Training",
        date: "2026-05-15",
        location: "Fire Station #3",
        type: "Community",
        description: "Learn essential first aid, CPR, and emergency response techniques in hands-on sessions."
    }
];

    // Save the default events to localStorage
    localStorage.setItem('communityEvents', JSON.stringify(events));
}