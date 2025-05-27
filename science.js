const nationalAffairsTopics = [
    {
        title: "Google Unveils AI-Powered 'AI Mode' for Search at I/O 2025",
        content: "New multimodal AI search processes video/audio inputs with 90% accuracy improvement. Features: Real-time fact-checking across 2B sources, personalized knowledge graphs. Infrastructure: 100M+ TPU v6 clusters deployed. Impact: 50% faster response times, 40% reduction in energy use. Privacy: On-device processing for 98% queries using Tensor G5 chips."
    },
    {
        title: "Microsoft Expands AI Integration Across Platforms at Build 2025",
        content: "Copilot becomes OS-level feature in Windows 12: System-wide AI assistant with 500+ APIs. Azure AI Studio adds quantum ML tools. Teams gets real-time multilingual translation (100+ languages). Security: Pluton AI firewall blocks 99.9% zero-day attacks. Dev tools: GitHub Copilot X writes 80% boilerplate code automatically."
    },
    {
        title: "India Launches ₹500 Crore Fund to Boost Space-Tech Startups",
        content: "IN-SPACe initiative targets 200+ startups in 5 years. Focus areas: Small satellite tech (sub-100kg), hyper-spectral imaging, propulsion systems. Partnerships: ISRO to share 40+ patents royalty-free. Milestones: First private lunar rover (2027), reusable launch vehicle (2028). Current achievements: 85 startups already operational, 12 in advanced testing."
    },
    {
        title: "Imperial College London Establishes Global Research Hub in Bengaluru",
        content: "$200M facility focuses on climate tech and precision medicine. Features: AI-driven drug discovery lab, 10-petaflop supercomputer. Collaborations: IISc, Tata Institute. Programs: 50 PhD scholarships annually, joint degrees in quantum biology. First projects: Carbon capture algae (target: 1 ton/day), malaria vaccine trials."
    },
    {
        title: "Breakthrough Laser Amplifier Could Make Internet 10 Times Faster",
        content: "Stanford team achieves 200Tbps speeds using photonic crystal amplifiers. Technology: Soliton wave transmission in silicon chips. Deployment: Compatible with existing fiber (upgrade cost $0.2/meter). Commercialization: Cisco, Huawei plan 2026 rollout. Impact: 4K hologram streaming becomes feasible, latency drops to 0.1ms."
    },
    {
        title: "British Company Advances Space-Based Solar Power Station Concept",
        content: "Space Solar's CASSIOPeiA prototype completes vacuum tests. Design: 1.7km diameter satellite beaming 2GW microwaves. Timeline: 2030 demo mission (£3B), 2035 operational. Safety: 99.999% beam accuracy, auto-shutdown in 50ms. Partners: ESA, UKSA, Airbus. Competitors: China's SSPS program targets 2032 deployment."
    },
    {
        title: "India Unveils First Genome-Edited Rice Varieties Using CRISPR",
        content: "New varieties: Swarna-ADT45 (drought-resistant, yield +25%), CR Dhan 501 (nitrogen-efficient, needs 40% less fertilizer). Approval: DGCI greenlights commercial cultivation. Biosafety: No foreign DNA inserted. Scaling: 10M farmers targeted by 2027. Export potential: $2B annual opportunity in Africa/SE Asia."
    },
    {
        title: "NASA's James Webb Telescope Observes Activity Around Milky Way's Central Black Hole",
        content: "Unprecedented data on Sagittarius A*: Magnetic field fluctuations (10^15 Gauss), 500K mph gas streams. Discoveries: Intermediate black hole population (100-10K solar masses), dark matter signatures. Tech: MIRI instrument captures 5-28μm wavelengths. Future: 2-year observation program approved."
    },
    {
        title: "Quantum Computing Milestone Achieved with Faster Error Correction",
        content: "Google/Quantinuum demonstrate 99.9% logical qubit fidelity using surface code. Breakthrough: Error correction cycle time cut to 100μs (from 1ms). Scaling path: 1M physical qubits → 10K logical → 100 algo qubits. Applications: First useful quantum chemistry simulations (2027), optimized supply chains (2028)."
    },
    {
        title: "India's National Quantum Mission Aims to Foster Quantum Technologies",
        content: "$1B investment over 5 years: 4 quantum hubs (computing, comms, sensing, materials). Goals: 1000-qubit processor by 2028, quantum-safe encryption standard. Education: 50 QCs in universities, 10K trained specialists. International tie-ups: CERN, Fermilab, RIKEN. First achievement: Bhaskara-1 quantum computer (56 superconducting qubits)."
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