const nationalAffairsTopics = [
    {
        title: "Heatwave Intensification and Regional Vulnerability",
        content: "IMD data shows 53% increase in heatwave days (March-May 2024) vs 2015-2020 average. High-risk zones: NW India (52°C max), Eastern Coast (humidity >70%). Health impact: 3,400 heatstroke cases reported. Mitigation: 23 cool roof cities identified, 500 'climate shelters' operational."
    },
    {
        title: "Corporate Climate Adaptation Efforts",
        content: "TCS launches AI-powered 'Climate Resilience Platform' tracking 50+ risk parameters. Reliance commits $10B for green hydrogen infrastructure (10GW capacity by 2026). Tech Mahindra's carbon accounting system reduces reporting time by 70%."
    },
    {
        title: "Mission LiFE Integrated into National Action Plan",
        content: "7-point integration strategy: 1) 200L water/day cap for urban households 2) Mandatory solar rooftops for >500m² buildings 3) 75% recycled material in public infrastructure 4) National bicycle policy (500km new tracks) 5) AI-driven energy audits 6) Climate literacy in NCERT curriculum 7) 25,000 eco-clubs nationwide."
    },
    {
        title: "Mangrove Conservation Efforts",
        content: "35% expansion in Sundarbans (2,100 km²→2,835 km²) via drone-seeding. New initiative: 'Blue Carbon Credits' valuing mangroves at $450/ha/year. Community impact: 15,000 fisherfolk trained in sustainable practices. Threat: 0.5m sea-level rise projected by 2040 in Bay of Bengal."
    },
    {
        title: "Waste Management Innovations in Pune",
        content: "Achieved 82% waste segregation through: 1) IoT smart bins (500 units) 2) 'Green coins' reward system 3) 25 biomethanation plants (300TPD capacity) 4) AI sorting at 10 MRFs. Results: Landfill waste reduced by 40%, 15MW energy generated from waste."
    },
    {
        title: "Steel Industry Expansion and Climate Concerns",
        content: "Production target: 300MT by 2030 (current 125MT). Emission challenge: 2.6tCO²/t steel vs global avg 1.85t. Solutions: 12 hydrogen-based DRI plants planned, CCUS adoption at 35 plants. Policy: BIS mandates 30% recycled steel in construction by 2026."
    },
    {
        title: "Groundwater Depletion and Agricultural Sustainability",
        content: "Critical zones: Punjab (82% over-exploited blocks), Tamil Nadu (76%). Solutions: 1) AI-based irrigation (40% water saving) 2) 1M solar pumps 3) Crop diversification incentives (₹15,000/acre). Crisis: 54 districts face acute water stress (<500m³/capita)."
    },
    {
        title: "Climate Change Performance Index (CCPI) Ranking",
        content: "India ranks 8th (score 69.5): Renewable energy (78/100), Policy (65/100). Strengths: 45% non-fossil capacity, Weakness: Per capita emissions up 12% (2.8tCO²). Top 3: Denmark (82.5), Sweden (80.1), Morocco (75.6)."
    },
    {
        title: "Corporate Climate Adaptation Efforts",
        content: "Infosys achieves water positivity (2.5x recharge): 225 water bodies restored. Mahindra's climate-smart agriculture: 1M farmers using AI advisories. HUL's plastic neutrality: 100% recyclable packaging, 60% recycled content."
    },
    {
        title: "Climate Action & Sustainability Conference (CASCA) 2025",
        content: "Key agenda: 1) Global carbon budget framework 2) Blue economy partnerships 3) Loss & damage fund operationalization 4) 45% emission cut by 2030 (2010 baseline). Participants: 190 nations, 1500+ corporations. Venue: Net-zero Bharat Mandapam (Delhi)."
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