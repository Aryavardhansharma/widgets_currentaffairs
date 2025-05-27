const nationalAffairsTopics = [
    {
        title: "One Nation, One Election Gains Momentum",
        content: "The Central government is pushing for synchronized elections across all states and Lok Sabha. A high-level committee has been formed to examine the feasibility of this major electoral reform aimed at reducing expenditure and policy paralysis."
    },
    {
        title: "India Suspends Indus Waters Treaty with Pakistan",
        content: "In response to cross-border terrorism concerns, India has temporarily suspended the Indus Waters Treaty. This strategic move allows for a comprehensive review of water-sharing arrangements under the 1960 World Bank-mediated agreement."
    },
    {
        title: "PM Modi Advocates 'Team India' Approach",
        content: "Prime Minister Modi emphasized collaborative federalism during the NITI Aayog meeting, urging states to work together on national priorities like economic growth and digital infrastructure development."
    },
    {
        title: "National Metro Task Force Proposal",
        content: "Telangana CM proposes a centralized task force to streamline metro rail development across Indian cities, aiming to standardize implementation and reduce costs through bulk procurement."
    },
    {
        title: "Foreign University Campuses Approved",
        content: "UGC grants initial approval to five global universities to establish Indian campuses, including institutions from the US, UK, and Australia, marking a major shift in higher education policy."
    },
    {
        title: "Top Maoist Leader Neutralized",
        content: "Security forces eliminate senior Maoist commander in Chhattisgarh operation, dealing a significant blow to left-wing extremism in the region."
    },
    {
        title: "NITI Aayog Meeting Absence",
        content: "Bihar CM's continued boycott of NITI Aayog meetings sparks debate about cooperative federalism, with opposition leaders criticizing the move as counterproductive."
    },
    {
        title: "Mission LiFE-National Action Plan Merger",
        content: "Environment Ministry announces integration of Mission Lifestyle for Environment with National Action Plan on Climate Change to streamline sustainability initiatives."
    },
    {
        title: "e-Zero FIR System Launched",
        content: "MHA introduces digital First Information Report system to combat cyber financial crimes, enabling pan-India reporting and real-time coordination between agencies."
    },
    {
        title: "Northeast Investors Summit",
        content: "Guwahati hosts 3-day summit showcasing ₹1.2 lakh crore investment opportunities in Northeast's infrastructure, tourism, and agro-processing sectors."
    }
];

function initializeTopics() {
    const grid = document.getElementById('topicsGrid');
    const popup = document.getElementById('popup');
    const blurOverlay = document.getElementById('blurOverlay');
    const closeBtn = document.querySelector('.close-btn');

    // Create topic cards
    nationalAffairsTopics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3 class="topic-title">${topic.title}</h3>
            <p class="topic-content">${topic.content.substring(0, 80)}...</p>
        `;
        
        // Click event for cards
        card.addEventListener('click', () => {
            blurOverlay.classList.add('blur-active');
            popup.classList.add('visible');
            document.getElementById('popupTitle').textContent = topic.title;
            document.getElementById('popupContent').textContent = topic.content;
        });

        grid.appendChild(card);
    });

    // Close popup events
    const closePopup = () => {
        blurOverlay.classList.remove('blur-active');
        popup.classList.remove('visible');
    };
    // Close when clicking blur overlay
    blurOverlay.addEventListener('click', closePopup);

    closeBtn.addEventListener('click', closePopup);
    

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePopup();
    });

    // Prevent closing when clicking inside popup
    popup.addEventListener('click', (e) => e.stopPropagation());
}


// Initialize
document.addEventListener('DOMContentLoaded', initializeTopics);