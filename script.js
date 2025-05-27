// script.js
const topics = [
    {
        title: "Lok Sabha Elections 2024 & New Government Policies",
        content: "The Lok Sabha Elections 2024 saw the NDA, led by the BJP, return to power with a clear majority. Key campaign issues included jobs, inflation, infrastructure, and education. The new government is focusing on boosting the economy, expanding social welfare, investing in infrastructure, promoting green energy, and advancing Digital India and AI-driven innovation. Voter turnout was over 65%, and the cabinet includes a mix of new and experienced ministers.",
        connections: [1, 2, 9],
        position: { x: 50, y: 10 }
    },
    {
        title: "Interim Budget 2025",
        content: "Key fiscal measures focusing on infrastructure development, social welfare schemes, and tax reforms.",
        connections: [0, 3, 8],
        position: { x: 25, y: 25 }
    },
    {
        title: "India’s G20 Presidency Outcomes",
        content: "Major agreements on climate finance, multilateral development bank reforms, and digital public infrastructure.",
        connections: [0, 4, 6],
        position: { x: 75, y: 25 }
    },
    {
        title: "India’s Space Missions (ISRO Achievements)",
        content: "Recent accomplishments including lunar exploration, satellite launches, and international collaborations.",
        connections: [1, 5, 7],
        position: { x: 10, y: 45 }
    },
    {
        title: "NEP 2020 Implementation & CUET",
        content: "Progress on multidisciplinary education, digital universities, and common entrance test reforms.",
        connections: [2, 5, 8],
        position: { x: 90, y: 45 }
    },
    {
        title: "India-China & India-Canada Relations",
        content: "Diplomatic developments including border negotiations and trade partnership discussions.",
        connections: [3, 4, 9],
        position: { x: 35, y: 65 }
    },
    {
        title: "Technology & AI Policy Developments",
        content: "New regulations for AI governance, semiconductor manufacturing incentives, and startup ecosystem support.",
        connections: [2, 7, 8],
        position: { x: 65, y: 65 }
    },
    {
        title: "Climate Change & India’s Green Push",
        content: "Initiatives including renewable energy targets, green hydrogen mission, and COP28 commitments.",
        connections: [3, 6, 9],
        position: { x: 20, y: 85 }
    },
    {
        title: "Economic Indicators & RBI Policies",
        content: "Recent trends in inflation, GDP growth, and monetary policy changes including repo rate adjustments.",
        connections: [1, 4, 6],
        position: { x: 50, y: 85 }
    },
    {
        title: "Important Supreme Court Judgments",
        content: "Landmark rulings on constitutional matters, environmental issues, and digital rights.",
        connections: [0, 5, 7],
        position: { x: 80, y: 85 }
    }
];

// DOM Elements
const modal = document.getElementById('infoModal');
const span = document.getElementsByClassName('close')[0];

// Node Creation
function createNodes() {
    const map = document.getElementById('mainMap');
    
    topics.forEach((topic, index) => {
        const node = document.createElement('div');
        node.className = 'node';
        node.innerHTML = `
            <div class="node-content">
                <h2>${topic.title}</h2>
            </div>
        `;
        
        node.style.left = `${topic.position.x}%`;
        node.style.top = `${topic.position.y}%`;
        node.addEventListener('click', () => openModal(topic));
        map.appendChild(node);
    });
}

// Connection Drawing
function drawConnections() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.setAttribute('preserveAspectRatio', 'none');

    topics.forEach((topic, index) => {
        topic.connections.forEach(connIndex => {
            const from = document.getElementsByClassName('node')[index];
            const to = document.getElementsByClassName('node')[connIndex];
            
            if(from && to) {
                const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
                line.setAttribute('d', calculateConnectionPath(from, to));
                line.classList.add('connection');
                svg.appendChild(line);
            }
        });
    });

    document.getElementById('mainMap').prepend(svg);
}

// Path Calculation
function calculateConnectionPath(from, to) {
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    
    const start = {
        x: fromRect.left + fromRect.width/2,
        y: fromRect.top + fromRect.height/2
    };
    
    const end = {
        x: toRect.left + toRect.width/2,
        y: toRect.top + toRect.height/2
    };

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    
    // Create curved path
    return `M ${start.x} ${start.y} 
            Q ${start.x + dx * 0.7} ${start.y + dy * 0.3},
              ${end.x} ${end.y}`;
}

// Modal Handling
function openModal(topic) {
    document.getElementById('modalTitle').textContent = topic.title;
    document.getElementById('modalContent').textContent = topic.content;
    modal.style.display = "block";
}

// Responsive Handling
function handleResize() {
    document.querySelectorAll('.connection').forEach(el => el.remove());
    drawConnections();
}

// Event Listeners
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => e.target == modal ? modal.style.display = "none" : null;

window.addEventListener('resize', () => {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(handleResize, 250);
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    createNodes();
    drawConnections();
    
    // Add slight delay for better connection rendering
    setTimeout(handleResize, 100);
});