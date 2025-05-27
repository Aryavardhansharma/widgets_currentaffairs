const topics = [
    {
        title: "National Affairs",
        url: "nationalaffairshub.html",
        connections: [3, 5, 9, 11],
        position: { x: 50, y: 15 }
    },
    {
        title: "International Affairs",
        url: "international.html",
        connections: [2, 4, 10, 12],
        position: { x: 30, y: 25 }
    },
    {
        title: "Economic & Financial Affairs",
        url: "economic.html",
        connections: [1, 3, 6, 8],
        position: { x: 70, y: 25 }
    },
    {
        title: "Science & Technology",
        url: "science.html",
        connections: [0, 2, 5, 12],
        position: { x: 50, y: 40 }
    },
    {
        title: "Defense & Security",
        url: "defense.html",
        connections: [1, 7, 11],
        position: { x: 15, y: 50 }
    },
    {
        title: "Environmental & Climate Affairs",
        url: "environment.html",
        connections: [0, 3, 9],
        position: { x: 85, y: 50 }
    },
    {
        title: "Sports",
        url: "sports.html",
        connections: [2, 8, 10],
        position: { x: 35, y: 65 }
    },
    {
        title: "Awards & Honours",
        url: "awards.html",
        connections: [4, 9, 12],
        position: { x: 65, y: 65 }
    },

    {
        title: "Summits & Conferences",
        url: "summits.html",
        connections: [1, 3, 7],
        position: { x: 50, y: 55 }
    }
];

function createNodes() {
    const map = document.getElementById('mainMap');
    map.querySelectorAll('.node').forEach(node => node.remove());
    
    topics.forEach((topic, index) => {
        const node = document.createElement('a');
        node.className = 'node';
        node.href = topic.url;
        node.innerHTML = `
            <div class="node-content">
                <h2>${topic.title}</h2>
            </div>
        `;
        map.appendChild(node);
    });
}

function positionNodesInCircle() {
    const container = document.getElementById('mainMap');
    const nodes = document.getElementsByClassName('node');
    const radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.4;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    
    // Equal angle steps for all nodes
    const angleStep = (2 * Math.PI) / nodes.length;
    
    Array.from(nodes).forEach((node, index) => {
        // Calculate angle without any offset
        const angle = index * angleStep - Math.PI / 2;
        
        // Calculate positions
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Apply positions
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
    });
}

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

function calculateConnectionPath(from, to) {
    const container = document.getElementById('mainMap').getBoundingClientRect();
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    
    const start = {
        x: fromRect.left - container.left + fromRect.width/2,
        y: fromRect.top - container.top + fromRect.height/2
    };
    
    const end = {
        x: toRect.left - container.left + toRect.width/2,
        y: toRect.top - container.top + toRect.height/2
    };

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dr = Math.sqrt(dx*dx + dy*dy) * 1.5;
    
    return `M ${start.x} ${start.y} A ${dr} ${dr} 0 0 1 ${end.x} ${end.y}`;
}

window.addEventListener('resize', () => {
    document.querySelectorAll('svg').forEach(el => el.remove());
    positionNodesInCircle();
    drawConnections();
});

document.addEventListener('DOMContentLoaded', () => {
    createNodes();
    positionNodesInCircle();
    drawConnections();
});