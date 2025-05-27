const nationalAffairsTopics = [
    {
        title: "India Warns Pakistan of Severe Consequences for Future Misadventures",
        content: "After intercepting terrorist launchpads near LoC, NSA Doval issues stern warning: 'Any cross-border provocation will meet with tri-service integrated response.' Enhanced surveillance: 24/7 AWACS coverage, 50 new Heron MK-II drones deployed. Diplomatic push: FATF review of Pakistan's grey list status accelerated."
    },
    {
        title: "US Defence Intelligence Report: India Prioritizes China as Primary Adversary",
        content: "Pentagon assessment notes 73% increase in Indian military deployments along LAC since 2023. Key upgrades: 150 MQ-9B SeaGuardians operationalized, 5 new mountain strike corps activated. Infrastructure: 28 strategic tunnels completed, DBO airstrip extended for C-17 operations. Cyber focus: 50% boost to DEFNET budget."
    },
    {
        title: "PM Modi Highlights Indigenous Defence Capabilities in 'Operation Sindoor'",
        content: "Demonstrated systems: 1500km range Nirbhay missiles, Arjun MK-1A tanks with ERA armor. Export milestone: $5B defense exports achieved (Brahmos to 3 nations). Manufacturing: 68% components now indigenous in Tejas MK-2. New testing: Hypersonic Wind Tunnel operational at DRDO."
    },
    {
        title: "India Conducts Nationwide Civil Defence Drill 'Operation Abhyaas'",
        content: "Largest-ever preparedness exercise covering 750 districts. Scenarios: Cyber attacks on power grid, CBRN emergencies. Participation: 2.5M NCC cadets, 500K NDRF personnel. New protocols: Mobile alert system for 500m users, 10,000 emergency shelters identified."
    },
    {
        title: "Indian Army Acquires Russian-Made Igla-S Missiles for Enhanced Air Defence",
        content: "$300M deal for 600 launchers + 6000 missiles. Capabilities: 6km range, 98% hit probability. Integration: With Akash and QRSAM systems for layered defense. Deployment: Along western front (50% systems) and northern borders (30%)."
    },
    {
        title: "India and US Conduct 'Tiger Triumph' Joint Military Exercise",
        content: "24th edition features: Amphibious ops with USS Essex, HIMARS live-fire drills. New elements: Space situational awareness sharing, AI-driven logistics coordination. Participants: 5000 personnel, 15 warships, 40 aircraft. Focus: Humanitarian assistance/disaster relief protocols."
    },
    {
        title: "India Launches 'Africa-India Key Maritime Engagement' Naval Exercise",
        content: "36 nations participate in western Indian Ocean drill. Assets: INS Vikrant carrier group, P-8I surveillance. Objectives: Counter-piracy ops (focus on Gulf of Guinea), EEZ protection training. Strategic: 8 new maritime surveillance stations being established in Africa."
    },
    {
        title: "Operation Black Forest: Major Offensive Against Naxalite Insurgents",
        content: "1000+ security personnel clear 200km² in Chhattisgarh. Results: 34 insurgents neutralized, 78 arrested. Tech used: UAV swarms, wall-breaching ammunition. Development push: 25 new CRPF camps, 150km roads built in cleared areas."
    },
    {
        title: "India Inducts Indigenous 'Akashteer' Air Defence Control System",
        content: "Network-centric system integrates 15 sensor types across 3 services. Features: <0.5 sec response time, 500km coverage radius. Deployment: 60% IAF bases by 2025. Export interest: 5 ASEAN nations in talks for $700M deal."
    },
    {
        title: "India and Italy Announce 5-Year Strategic Defence and Space Collaboration Plan",
        content: "$2B partnership includes: Co-development of hypersonic tech, FOCAL space telescope project. Military exchanges: Garud SHAKTI special forces exercises, submarine rescue training. Industrial: Leonardo- HAL JV for AWACS radar production."
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