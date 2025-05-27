const  nationalAffairsTopics= [
    {
        title: "Virat Kohli Retires from Test Cricket",
        content: "Legendary batsman concludes 14-year Test career with 8,848 runs (avg 49.15), 29 centuries. Final match: 135 vs Australia at MCG. Records: Most Test wins as captain (40), 4th highest run-scorer for India. Future role: Mentor for NCA's Emerging Players Program."
    },
    {
        title: "B Sai Sudharsan Selected for India's Test Squad",
        content: "Tamil Nadu batter earns maiden call-up after 1,202 Ranji runs @68.94. Will replace Kohli at No.4. Recent form: 214* vs MP, 167 vs Bengal. Technical highlight: 92% control rate against spin."
    },
    {
        title: "JioStar-Sony Broadcast India's England Tours",
        content: "$380M deal covers 5 Tests, 7 ODIs, 6 T20Is (2025-26). Features: 8K streaming, multi-angle replays, VR commentary. Free access: First 2 days of each Test on JioCinema."
    },
    {
        title: "Hardik Pandya Nears 300 T20 Matches",
        content: "Mumbai Indians captain to become 4th Indian (after Dhoni, Rohit, Raina) to reach milestone. Stats: 6,189 runs, 213 wickets. IPL 2025: Needs 7 games to achieve feat."
    },
    {
        title: "India Wins 4th SAFF U-19 Championship",
        content: "3-1 final victory over Bangladesh. Stars: Ravi Kumar (Golden Boot - 8 goals), Arjun Mishra (Best GK). Record: 4 titles in 6 editions."
    },
    {
        title: "Khelo India Youth Games 2025 Conclude",
        content: "Bihar hosts 5,000 athletes across 27 sports. Medal tally: Maharashtra (132), Haryana (118), Karnataka (95). New records: 12 in swimming, 8 in athletics."
    },
    {
        title: "Khelo India Beach Games in Diu",
        content: "Inaugural edition features: Beach football, volleyball, kabaddi. Medal count: Manipur (14), Kerala (12), Odisha (9). Highlight: Niharica's 3 golds in kurash."
    },
    {
        title: "Rory McIlroy at DP World India Championship",
        content: "First top-10 golfer in India since 2014. Purse: $2.5M. Venue: DLF G&CC (Oct 23-26). Indian hopes: Shubhankar Sharma, Anirban Lahiri."
    },
    {
        title: "2025 World Para Athletics in Delhi",
        content: "100+ nations, 1,500 athletes. Venues: JLN Stadium (renovated with wheelchair ramps), Thyagraj Complex. Events: 172 medal categories."
    },
    {
        title: "World Boxing Cup Final 2025",
        content: "November 15-22, Indira Gandhi Arena. Qualifiers: 400 boxers from 80 nations. Indian team: 8 men, 6 women. New category: AI scoring system debut."
    }
]
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