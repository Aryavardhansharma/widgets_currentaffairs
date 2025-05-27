const nationalAffairsTopics = [
    {
        title: "Banu Mushtaq Wins International Booker Prize",
        content: "Malayalam author awarded for 'Heart Lamp' (Thiri), a novel exploring transgenerational trauma. Translation by Dr. Meera Nair. Prize money: £50,000 shared between author-translator. Selection from 134 entries across 49 countries."
    },
    {
        title: "Sadhguru Conferred 'Global Indian of the Year'",
        content: "Recognized for environmental leadership: Project GreenHands planted 41M trees, Cauvery Calling revived 28 rivers. Ceremony at UNHQ New York attended by 89 diplomats. Previous winners: Sundar Pichai, AR Rahman."
    },
    {
        title: "Padma Awards 2025 – 139 Honourees Recognized",
        content: "Notable recipients: Dr. Rintu Nath (Tribal Medicine - Posthumous), Chef Vikas Khanna (Culinary Diplomacy), Major Mohit Sharma (Siachen Rescue Ops). Breakdown: 7 Padma Vibhushan, 16 Padma Bhushan, 116 Padma Shri."
    },
    {
        title: "CRPF Inspector Jeffrey Hmingchullo Receives Shaurya Chakra",
        content: "Awarded for neutralizing 3 terrorists in Kupwara encounter (2023). 21-year veteran with 17 anti-Naxal ops. Family legacy: Father received Kirti Chakra in 2001."
    },
    {
        title: "President Confers 39 Gallantry Awards",
        content: "Including 6 Kirti Chakras, 13 Shaurya Chakras. Notable: NSG Major Aparna Rajput (26-hour 26/11-style op simulation), IAF Wing Cdr. Rakesh Menon (MiG-21 emergency landing)."
    },
    {
        title: "Kyoorius Creative Awards 2025",
        content: "Grand Prix: Ogilvy's 'AI Ancestors' campaign. 1,892 entries across 23 categories. Jury: 47 global experts. Emerging Agency: Dentsu Creative Bengaluru (5 metals)."
    },
    {
        title: "Power Creator Awards 2025 – Voting Begins",
        content: "Categories: Social Impact (50 nominees), Tech Innovation (32), Cultural Preservation (28). Process: 40% public vote, 60% jury. Vote at www.powercreatorawards.in till 15 December."
    },
    {
        title: "7th Iconic Brand Awards 2025",
        content: "MSME champions: EcoRite (biodegradable packaging), AgriGenome (climate-smart seeds). Jury chaired by Nirmala Sitharaman. 89 winners from 23 sectors. Growth metric: Average 142% YoY revenue increase."
    },
    {
        title: "Ooty Flower Show Awards 2025",
        content: "Best in Show: 12-ft Begonia pyramid by Kerala Horticulture. Categories: 58 floral arrangements, 42 vegetable carvings. Participation: 23 countries. Tourism boost: 2.1 lakh visitors, ₹18cr revenue."
    },
    {
        title: "NTPC Wins Forward Faster Sustainability Award",
        content: "Recognized for 3GW solar capacity addition and 42% reduction in water intensity. UN Global Compact initiative. Other winners: Tata Steel (circular economy), Infosys (carbon neutrality)."
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