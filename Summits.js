const nationalAffairsTopics = [
    {
        title: "World Audio Visual & Entertainment Summit (WAVES)",
        content: "Mumbai hosted 15,000 delegates from 89 countries. Key announcements: India's AVGC policy 2.0, $500M animation fund. Masterclasses by Oscar winners Chloé Zhao and AR Rahman. Deal closed: Netflix-India $300M regional content pact."
    },
    {
        title: "Global Conference on Space Exploration (GLEX 2025)",
        content: "3,500 space leaders at Pragati Maidan. Highlights: ISRO's 2040 lunar base roadmap, NASA-ISRO signed Mars sample return pact. Exhibition: Chandrayaan-4 prototype, reusable launch vehicle mockup."
    },
    {
        title: "BBB Summit 2025 Focuses on Bioenergy",
        content: "Delhi declaration commits to 20% bioenergy mix by 2030. Innovations: IISc's algae biofuel (₹45/liter production cost), GAIL's CBG plants (50 locations). Signed: India-Brazil ethanol technology transfer MOU."
    },
    {
        title: "25th International TOVS Study Conference",
        content: "Goa hosted 400 meteorologists from 63 nations. Key topics: Next-gen weather satellites (INSAT-3DS data), AI-driven cyclone prediction (92% accuracy achieved). Field trip: IMD supercomputer facility inaugurated."
    },
    {
        title: "India Ports Conference 2025",
        content: "Chennai event unveiled Sagarmala 2.0: $82B investment plan. Targets: 2500 MMT cargo handling, 14 mega ports. Green initiatives: 100% shore power at major ports by 2027."
    },
    {
        title: "GeoSpace Bharat 2025",
        content: "Visakhapatnam showcased 150 geospatial startups. Launched: National Digital Twin initiative (25 cities mapped). DRDO revealed AI-powered terrain analysis for border security."
    },
    {
        title: "India Communication Summit 2025",
        content: "Delhi NCR event drew 2,000 PR professionals. Trends: AI media monitoring (95% accuracy), crisis simulation workshops. Awarded: Tata Communications 'Best CSR Campaign' for digital literacy drive."
    },
    {
        title: "Rising Northeast Investors Summit",
        content: "Guwahati secured ₹1.2L cr investments: 40% in agro-processing, 30% green energy. Infrastructure: 6 new SEZs approved. Cultural showcase: 8 states' traditional crafts exhibition."
    },
    {
        title: "SPIC MACAY International Convention",
        content: "IIT Hyderabad hosted 5,000 artists and students. Features: 72-hour non-stop concert, rare Veena styles workshop. Spotlight: Revival of 16 endangered art forms through AI documentation."
    },
    {
        title: "ETCIO Annual Conclave 2025",
        content: "Goa's tech leadership summit focused on: Quantum computing readiness, 6G rollout strategies. Launched: CISO alliance against ransomware attacks. Survey: 68% Indian firms adopting AIOps."
    },
    {
        title: "AI Visionaries Summit 2025",
        content: "Delhi declaration on ethical AI: 7-nation framework signed. Showcases: BharatGPT's healthcare diagnostics, TCS's cognitive supply chains. Investment: $2B AI research fund announced."
    },
    {
        title: "India Chairs Asian Productivity Organization",
        content: "2-year term focuses on: Smart farming technologies, MSME automation. First initiative: Indo-Japan productivity centers in 15 states. Target: 5% annual productivity growth across Asia."
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