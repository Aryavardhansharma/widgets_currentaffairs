const nationalAffairsTopics = [
    {
        title: "U.S. Stock Market Crash Triggered by Tariff Announcements",
        content: "Dow Jones plunges 8.2% (3,200 points) after new 35% tariffs on $550B Chinese imports. Tech sector hit hardest: NASDAQ down 12%, FAANG stocks lose $1.2T market cap. Treasury yields spike to 4.8% as investors flee to bonds. SEC activates circuit breakers 14 times during trading session. Analysts warn of potential 2008-level correction if trade war escalates."
    },
    {
        title: "Federal Reserve Maintains Interest Rates Amid Economic Uncertainty",
        content: "FOMC votes 9-1 to hold rates at 5.25%-5.50% range despite 3.9% core inflation. New dot plot shows 2 cuts in 2024 (down from 4). Balance sheet runoff continues at $95B/month. Powell warns of 'asymmetric risks' from commercial real estate debt ($2.6T exposure). Market reacts: DXY index surges to 108.50, gold drops 3%."
    },
    {
        title: "India Becomes World's Fourth-Largest Economy",
        content: "FY24 GDP hits $4.11T, surpassing Germany ($4.07T). Growth drivers: 14% manufacturing expansion, 9.3% services growth. Per capita income reaches $2,850 (PPP $11,300). Key sectors: Digital economy ($1.2T), renewables (84GW capacity). Challenges remain: 6.8% unemployment, 5.6% fiscal deficit. Nifty50 crosses 25,000 mark post-announcement."
    },
    {
        title: "RBI Announces Record ₹2.7 Lakh Crore Dividend to Government",
        content: "Central bank surplus jumps 188% from FX gains (₹1.4L cr) and bond sales (₹85,000 cr). Transfer enables 0.5% GDP fiscal space: 50% for deficit reduction (target 5.1%→4.9%), 30% infra spending. Market impact: 10-year G-sec yield drops 15bps to 6.95%, rupee strengthens to 82.85/$."
    },
    {
        title: "ASEAN Urges Economic Integration to Counter U.S. Tariffs",
        content: "10-nation bloc accelerates RCEP implementation: 92% goods tariff-free by 2025. New $200B digital economy pact signed. Joint response to US tariffs: 15% export duty on rare earth metals (controls 80% global supply). ASEAN+3 FX safety net expanded to $400B. Projected 2024 GDP growth maintained at 4.7%."
    },
    {
        title: "UK Secures Trade Deals with U.S., India, and EU",
        content: "Post-Brexit trifecta: $110B US deal focuses on AI/tech (data flow pact), $50B India FTA (whisky tariffs cut 50%), EU veterinary agreement (saves £1B/yr). Trade coverage now 82% of GDP. Sterling rallies 3% vs euro, FTSE 250 up 5%. Concerns remain: Services exclusion in EU deal affects 40% exports."
    },
    {
        title: "G7 Pledges to Address Global Economic Imbalances",
        content: "Bari Declaration targets: 1) $300B SDR redistribution, 2) Debt standstill for 52 low-income nations, 3) CB digital currency standards. Controversy: No consensus on China's industrial subsidies ($900B estimated). Market reaction: EM bond spreads tighten 45bps, Bitcoin jumps 12% on CBDC plans."
    },
    {
        title: "China's Trade Data Shows Uneven Recovery",
        content: "May exports fall 7.5% y/y (vs +0.5% est.), imports drop 4.8%. Surplus hits $82B: EU deficit $42B, US $38B. Structural shifts: EV exports up 65% (35% global share), chips down 28%. Yuan weakens to 7.25/$, PBOC injects ¥800B via MLF. Property crisis deepens: Evergrande liquidation claims hit $300B."
    },
    {
        title: "OECD Warns of Rising Global Debt Levels",
        content: "Aggregate debt/GDP hits 336% ($307T): Governments 105%, corps 95%, households 136%. Red flags: $1.3T EM debt maturing in 2025, US junk bond defaults at 5.7% (10-yr avg 3.2%). Policy proposals: 15% global minimum corp tax, climate-debt swaps. IMF programs active in 96 countries (record high)."
    },
    {
        title: "Turkish Lira Plunges Amid Political Turmoil",
        content: "Currency hits record 35/$ despite 50% rate hike (50%→40%). Inflation surges to 78%: Bread prices up 120%, gas 95%. CDS spreads widen to 650bps. Erdogan's new economic team seeks $15B IMF loan. Contagion risk: Egypt pound down 8%, Pakistan rupee 5%. Gold demand spikes 300%."
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