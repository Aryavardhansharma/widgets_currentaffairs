const nationalAffairsTopics = [
    {
        title: "U.S.–Iran Nuclear Deal Talks Resume",
        content: "The revived JCPOA negotiations in Vienna see contentious debates over uranium enrichment caps (currently at 60% purity) and phased sanctions relief. Key developments: Iran demands immediate removal of 1,532 sanctions, while U.S. insists on maintaining restrictions for IRGC's regional activities. European mediators propose compromise: 3-month verification period with IAEA monitoring 24/7 at Fordow facility. Regional implications: Gulf states seek inclusion in security annexes, demanding limits on Iranian missile tech (range capped at 800km)."
    },
    {
        title: "Mali Sees Mass Pro-Democracy Protests",
        content: "Post-coup turmoil intensifies as 50,000 protesters flood Bamako's Independence Square. Context: Junta extends transition period to 2026, violating 2022 ECOWAS timetable. Economic angle: Sanctions cost Mali $800M in lost trade since 2023. Security crisis: 134% surge in jihadist attacks (AQIM/ISGS) since French withdrawal. International response: African Union suspends Mali's membership, while Russia's Wagner Group expands presence to 1,500 mercenaries guarding gold mines."
    },
    {
        title: "ASEAN Pushes Back Against U.S. Tariffs",
        content: "The 10-nation bloc challenges Section 301 tariffs on $6.5B green tech exports. Breakdown: 35% duty on Vietnamese solar panels, 28% on Malaysian semiconductors. Legal strategy: Joint WTO dispute (DS612) cites violation of 2022 IPEF market access commitments. Countermeasures: ASEAN speeds up China-backed RCEP implementation, offering 15% tariff cuts to members. Economic impact: Projected 2.3% GDP drop across ASEAN-5 nations if U.S. measures persist."
    },
    {
        title: "UK Lawmakers Visit Taiwan Despite China Tensions",
        content: "The 11-member delegation's agenda: semiconductor cooperation (TSMC's $5B UK fab plan) and cybersecurity pact. PLA response: 72-hour air/naval drills with 42 warplanes crossing median line. Diplomatic fallout: Beijing summons UK ambassador, suspends BRI infrastructure talks. Trade implications: $12B in pending Chinese investments in UK nuclear/EV sectors frozen. US angle: Pentagon approves $300M arms sale to Taiwan post-visit."
    },
    {
        title: "China Pledges $500 Million to WHO",
        content: "Breakdown: $300M for pandemic preparedness, $200M for Africa health initiatives. Strategic context: Comes ahead of IHR amendments vote (May 2024) seeking mandatory data sharing. Controversy: Funds contingent on halting Phase 2 COVID origins study. Domestic angle: Boosts China's health diplomacy amid TB crisis (650K new cases in 2023). Countermove: US announces $600M WHO contribution with transparency conditions."
    },
    {
        title: "Artemis Accords Expand to 55 Countries",
        content: "New signatories: Brazil (space budget +40%) and India (ISRO lunar rover tech). Key provisions: 'Safety zones' around lunar bases (5km radius), shared spectrum for Mars comms. Resource rules: 15% royalty on commercial Helium-3 extraction. Military clause: Bans WMDs in orbit. Rivalry: China's ILRS moon base project now has 12 partners, including Pakistan and UAE."
    },
    {
        title: "NATO–EU Strengthen Joint Defense Policy",
        content: "2024 Strategic Compass highlights: 5,000-strong EU rapid cyber force (operational 2026), €100B Defense Innovation Accelerator. Tech focus: Quantum radar systems (2027 deployment), AI-powered AWACS upgrades. Burden-sharing: EU meets 2% GDP defense spending (avg 2.1%), NATO's eastern flank gets 12 new battalions. Russia response: Deploys Iskander-M nukes in Kaliningrad."
    },
    {
        title: "Ceasefire Between U.S. and Yemen’s Houthis",
        content: "30-day truce terms: Houthis halt Red Sea attacks (87 since 2023), US/Saudi pause airstrikes. Oil impact: Aramco resumes 4.8M bpd Ras Tanura exports. Humanitarian: UN convoys access 23 blockaded districts (8M at risk). Sticking points: Houthis demand Sanaa airport reopening, Saudis want missile inventory disclosure. Regional angle: Iran reduces arms shipments via Oman route."
    },
    {
        title: "UN Debates AI Weapons Treaty",
        content: "First Committee draft text bans 'fully autonomous kill systems' (Article 5a). Loopholes: Allows AI targeting aids with 'human judgment' (Article 9c). Military data: 64 nations currently develop combat AI (Per SIPRI). Ethical concerns: Algorithmic bias in ID systems (2023 Gaza incident). US/Russia stance: Seek R&D exemptions; 29 states demand complete ban. Verification hurdles: No agreement on inspection protocols."
    },
    {
        title: "Global Climate Pressure Rises Pre-COP30",
        content: "Key demands: G7 commits to 2035 coal phaseout (affects 287 plants), methane cuts (45% by 2030). Finance: $500B/year loss/damage fund proposal (US offers 17% share). Technology: IP waiver for 32 green techs proposed. Emission math: Current NDCs limit warming to 2.4°C - need 43% cuts by 2030. Protest surge: 350+ cities see Youth4Climate marches demanding COP30 binding targets."
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