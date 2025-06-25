'use client';
import React, { useState, useEffect, useRef } from 'react';

// Add proper type definitions
interface BlogPost {
    title: string;
    date: string;
    summary: string;
    content: string;
}

interface Company {
    name: string;
    focus: string;
    description: string;
    details: string;
    tags: string[];
}

// Chart.js type definition
interface ChartInstance {
    destroy: () => void;
}

// Data can be moved to a separate file (e.g., data.js) and imported.
const blogPostsData: BlogPost[] = [
    {
        title: 'The Twin Engines: Understanding AI and Blockchain in Healthcare',
        date: 'June 10, 2025',
        summary: 'AI is the engine of insight, revolutionizing diagnostics and operations. Blockchain is the bedrock of trust, ensuring data integrity. Discover how these two pillars form the foundation of MedDeFi.',
        content: `<div class="space-y-4 text-gray-800">
            <p>Artificial Intelligence is rapidly transitioning from a peripheral tool to a core component of the healthcare apparatus. Its ability to analyze vast and complex datasets at superhuman speeds is creating unprecedented efficiencies and capabilities across the entire healthcare value chain. At the same time, blockchain provides the mechanism to ensure that data is trustworthy, secure, and transparently managed.</p>
            <h4 class="text-lg font-semibold mt-4">AI: The Engine of Insight</h4>
            <p>One of the most impactful applications of AI is in diagnostics. AI models can detect subtle patterns in medical images that may be invisible to the human eye, leading to earlier and more accurate diagnoses of conditions like cancer. Companies like <strong>Aidoc</strong> and <strong>Lunit</strong> provide solutions that flag abnormalities in radiological scans, assisting radiologists and improving accuracy. In drug discovery, AI dramatically shortens timelines by analyzing complex genomic data to identify promising drug candidates. Innovators like <strong>Owkin</strong> use federated learning to train models on data from multiple institutions without the data ever leaving its source, preserving privacy.</p>
            <h4 class="text-lg font-semibold mt-4">Blockchain: The Bedrock of Trust</h4>
            <p>Blockchain's core features—cryptography, immutability, and decentralization—collectively form a robust foundation for handling sensitive healthcare information. Immutability, achieved by cryptographically linking blocks, guarantees the integrity of EHRs and clinical trial data. Decentralization eliminates single points of failure, making systems vastly more resilient to cyberattacks compared to traditional centralized databases, which have proven highly vulnerable. Finally, the transparency of the ledger creates a permanent audit trail, allowing a patient to see exactly who accessed their record and when, fostering trust and accountability.</p>
            <p class="mt-4">The synergy between these two is profound: blockchain provides the authenticated, high-integrity data that AI models require to function ethically and effectively, while AI can bring dynamic intelligence to blockchain-based systems. This powerful, mutually reinforcing loop is the technological core of the MedDeFi revolution.</p>
        </div>`
    },
    {
        title: 'The MedDeFi Revolution: A New Patient-Centric Economy',
        date: 'June 12, 2025',
        summary: 'MedDeFi applies the principles of Decentralized Finance to healthcare. Learn how Data Tokenization, DAOs, and AI-powered Smart Contracts are creating a new economic paradigm centered on the patient.',
        content: `<div class="space-y-4 text-gray-800">
            <p>MedDeFi is not merely a technical integration; it's a new framework for organizing and financing healthcare. It seeks to dismantle opaque, intermediary-laden structures and replace them with decentralized networks governed by their participants. The core principles are patient sovereignty, disintermediation, and democratized access.</p>
            <h4 class="text-lg font-semibold mt-4">1. Data Tokenization: A New Asset Class</h4>
            <p>Tokenization transforms sensitive health data into a secure, controllable digital asset. It replaces Protected Health Information (PHI) with a non-sensitive "token," allowing data to be analyzed for research without exposing private details. This is the key to creating a "patient-as-shareholder" economy, where platforms from pioneers like <strong>Medicalchain</strong> create marketplaces for patients to monetize their anonymized data by contributing to research.</p>
            <h4 class="text-lg font-semibold mt-4">2. DAOs: Community-Governed Healthcare</h4>
            <p>Decentralized Autonomous Organizations (DAOs) are member-owned communities without central leadership. They are perfect for addressing the "long tail" of healthcare needs often neglected by for-profit models. DAOs like <strong>VitaDAO</strong> (longevity) and <strong>Vibe Bio</strong> (rare diseases) allow global communities to pool funds and vote on which research projects to support, democratizing funding and accelerating innovation.</p>
            <h4 class="text-lg font-semibold mt-4">3. AI-Powered Smart Contracts</h4>
            <p>Integrating AI makes smart contracts dynamic and intelligent. In value-based care, an AI contract can analyze outcomes from a wearable device and automatically trigger bonus payments to providers for keeping patients healthy. In finance, integrating AI risk assessment from companies like <strong>PayZen</strong> with a DeFi framework could create a peer-to-peer lending market for medical expenses, automating loans and bypassing traditional banks.</p>
        </div>`
    },
    {
        title: 'Mapping the Landscape: The Incumbents and Trailblazers of MedDeFi',
        date: 'June 14, 2025',
        summary: 'The MedDeFi ecosystem is being built by two key groups: tech giants providing the foundational "picks and shovels," and agile startups pioneering novel applications. Meet the key players.',
        content: `<div class="space-y-4 text-gray-800">
            <p>Understanding the competitive landscape is critical for identifying opportunities and partnerships in the nascent MedDeFi space. The market is defined by a dynamic interplay between established technology companies and innovative startups.</p>
            <h4 class="text-lg font-semibold mt-4">The Incumbents' Gambit</h4>
            <p>The world's largest tech companies are not building MedDeFi platforms directly, but they are providing the indispensable enabling infrastructure.</p>
            <ul class="list-disc list-inside ml-4">
                <li><strong>Google & Microsoft:</strong> These cloud giants provide the robust and scalable environments (Google Cloud, Azure) required to store and analyze vast healthcare datasets. Their advanced AI platforms (VertexAI, Azure OpenAI) are also setting the standard for medical AI.</li>
                <li><strong>NVIDIA:</strong> As the undisputed leader in GPUs, NVIDIA provides the core hardware engines required to train the complex deep learning models used in drug discovery and medical imaging.</li>
            </ul>
            <h4 class="text-lg font-semibold mt-4">The Trailblazers</h4>
            <p>While Big Tech builds the highways, startups are building the innovative vehicles. These companies are directly implementing the principles of MedDeFi.</p>
            <ul class="list-disc list-inside ml-4">
                <li><strong>BurstIQ:</strong> A quintessential MedDeFi company, BurstIQ's LifeGraph® platform combines on-chain data storage with AI-ready knowledge graphs, embedding ownership and context directly into the data itself.</li>
                <li><strong>Chronicled:</strong> The architect of the MediLedger Network, an industry-wide blockchain for the pharma sector that secures the supply chain and automates transactions between partners.</li>
                <li><strong>Avaneer Health:</strong> Backed by healthcare giants like Aetna and Cleveland Clinic, Avaneer is building a shared, decentralized network to tackle the foundational problem of data fragmentation and interoperability.</li>
            </ul>
        </div>`
    },
    {
        title: 'The Gauntlet: Navigating the Challenges of MedDeFi',
        date: 'June 16, 2025',
        summary: 'The path to adoption is fraught with technical, regulatory, and ethical challenges. A pragmatic assessment of these barriers is essential for any stakeholder seeking to navigate this nascent field.',
        content: `<div class="space-y-4 text-gray-800">
             <p>While the vision for MedDeFi is transformative, stakeholders must be clear-eyed about the significant hurdles that stand in the way of widespread adoption.</p>
             <h4 class="text-lg font-semibold mt-4">Technical & Scalability Hurdles</h4>
             <p>Foundational technical challenges remain. Blockchains must be able to handle the high transaction volume of healthcare, a problem being addressed by permissioned networks and off-chain storage solutions. Furthermore, integrating new decentralized apps with entrenched legacy EHR systems is a monumental task, compounded by a lack of industry-wide data standards.</p>
             <h4 class="text-lg font-semibold mt-4">The Regulatory Maze</h4>
             <p>The regulatory landscape is a primary challenge. A central conflict exists between blockchain's immutability and data privacy laws like GDPR's "right to be forgotten." The most viable solution is a hybrid model: storing sensitive data off-chain in a compliant, erasable database, while keeping only irreversible cryptographic hashes on-chain. Navigating the complex, overlapping requirements of HIPAA, GDPR, and other state-level laws requires a sophisticated, "compliance-by-design" approach.</p>
             <h4 class="text-lg font-semibold mt-4">The Ethical Minefield</h4>
             <p>Perhaps the most complex challenges are ethical. If a biased AI model makes a discriminatory decision, recording that output on an immutable blockchain creates a permanent, unchangeable record of that biased action—a massive liability. This risk creates a powerful "forced-function," elevating AI ethics from a guideline to a mission-critical engineering requirement. Fair governance models must also be designed to ensure data monetization schemes do not exploit vulnerable populations and that DAOs do not fall prey to control by wealthy "whales."</p>
         </div>`
    }
];

const companiesData: Company[] = [
    { name: 'Google', focus: 'AI & Cloud Infrastructure', description: 'Provides robust cloud environments and develops cutting-edge diagnostic AI.', details: 'Google\'s role is foundational. Its VertexAI and cloud platforms are essential for storing and analyzing vast healthcare datasets. Research divisions pioneer AI tools for detecting conditions like diabetic retinopathy and cancer.', tags: ['Incumbent', 'AI'] },
    { name: 'Microsoft', focus: 'Enterprise AI & Cloud', description: 'Offers Azure cloud and integrates OpenAI into telehealth solutions like Teladoc.', details: 'Microsoft is aggressively positioning itself as a leader in enterprise-grade AI for healthcare via its Azure platform and significant investments in OpenAI, integrated into its Microsoft Cloud for Healthcare suite.', tags: ['Incumbent', 'AI'] },
    { name: 'NVIDIA', focus: 'High-Performance Computing for AI', description: 'The leader in GPUs and specialized hardware that power medical AI research.', details: 'NVIDIA provides the core engines for the AI revolution in healthcare. Its GPUs and Clara software suite are purpose-built for the massive workloads in genomics, drug discovery, and medical imaging analysis.', tags: ['Incumbent', 'AI'] },
    { name: 'IBM', focus: 'Enterprise AI & Hybrid Cloud', description: 'Leverages Watson Health for trusted, enterprise-level AI solutions.', details: 'IBM\'s focus is on providing trusted, enterprise-level AI solutions for diagnostics and drug discovery, leveraging its deep relationships with large healthcare organizations and its focus on secure, hybrid cloud environments.', tags: ['Incumbent', 'AI'] },
    { name: 'BurstIQ', focus: 'Integrated AI/Blockchain Platform', description: 'A platform combining on-chain data storage with AI-ready knowledge graphs.', details: 'BurstIQ\'s LifeGraph® is a quintessential MedDeFi platform. It secures sensitive data on-chain while remaining compliant, and embeds ownership and context directly into the data, creating "AI-ready" smart data.', tags: ['Trailblazer', 'AI', 'Blockchain', 'Data Sovereignty'] },
    { name: 'Medicalchain', focus: 'Patient Data Sovereignty & Monetization', description: 'Empowering patients to control and sell anonymized health data for research.', details: 'Medicalchain is building a full ecosystem where patients control their health records. Their "MedTokens" function as a currency, allowing patients to be compensated for contributing their data.', tags: ['Trailblazer', 'Blockchain', 'Data Sovereignty'] },
    { name: 'Chronicled', focus: 'Pharmaceutical Supply Chain Integrity', description: 'Architect of the MediLedger Network, an industry-wide blockchain for pharma.', details: 'Chronicled tackles drug counterfeiting and chargeback disputes with its consortium blockchain, MediLedger, creating an immutable chain-of-custody for drugs.', tags: ['Trailblazer', 'Blockchain', 'Supply Chain'] },
    { name: 'Avaneer Health', focus: 'Decentralized Network Infrastructure', description: 'A consortium-backed network tackling healthcare\'s fragmented infrastructure.', details: 'Backed by giants like Aetna and Cleveland Clinic, Avaneer Health is building a shared network on a public ledger to streamline data exchange, claims processing, and provider management.', tags: ['Trailblazer', 'Blockchain', 'Infrastructure'] },
    { name: 'Patientory', focus: 'Patient Data Control & Management', description: 'A platform giving patients complete control and insights from their health data.', details: 'Patientory uses a blockchain-based platform to ensure the secure storage and transfer of health information, with the core value proposition being that users gain complete control over their health records.', tags: ['Trailblazer', 'Blockchain', 'Data Sovereignty'] },
    { name: 'FarmaTrust', focus: 'Pharmaceutical Supply Chain Security', description: 'End-to-end supply chain transparency to combat counterfeit medicines.', details: 'FarmaTrust uses a blockchain platform to track pharmaceuticals from factory to patient, ensuring authenticity and automatically alerting authorities to potential issues.', tags: ['Trailblazer', 'Blockchain', 'Supply Chain', 'AI'] },
    { name: 'Embleema', focus: 'Decentralized Clinical Trials', description: 'Facilitates virtual trials by allowing users to securely share data with researchers.', details: 'Embleema operates at the intersection of patient empowerment and clinical research. Its platform uses a blockchain to create a secure record of patient data for virtual clinical trials.', tags: ['Trailblazer', 'Blockchain', 'Data Sovereignty'] },
    { name: 'ProCredEx', focus: 'Medical Credential Verification', description: 'A distributed ledger for monetizing and verifying healthcare credential data.', details: 'ProCredEx created a distributed ledger for healthcare credentials, allowing organizations to instantly access verified information and monetize their existing data, turning a cost center into a revenue generator.', tags: ['Trailblazer', 'Blockchain', 'Infrastructure'] }
];

const GlobalStyles = () => (
    <style>{`
        body { font-family: 'Inter', sans-serif; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .nav-link { transition: color 0.3s, border-bottom-color 0.3s; }
        .nav-link:hover, .nav-link.active { color: #1e40af; border-bottom-color: #1e40af; }
        .section-card { transition: transform 0.3s, box-shadow 0.3s; }
        .section-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
        .tab-button.active { border-color: #1e40af; color: #1e40af; background-color: #dbeafe; }
        .chart-container { position: relative; width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; height: 350px; max-height: 450px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #e5e7eb; padding: 12px; text-align: left; }
        th { background-color: #f9fafb; }
        @media (min-width: 768px) { .chart-container { height: 400px; } }
    `}</style>
);


const MedDeFiReport = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [filter, setFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [showBlogModal, setShowBlogModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [chartError, setChartError] = useState<string | null>(null);
    const [chartLoading, setChartLoading] = useState(true);

    // State for accordions and tabs
    const [openPillar, setOpenPillar] = useState('ai');
    const [activeConcept, setActiveConcept] = useState('tokenization');
    const [activeTab, setActiveTab] = useState('technical');
    
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<ChartInstance | null>(null);

    // Effect for IntersectionObserver to track active section
    useEffect(() => {
        const sections = document.querySelectorAll('main section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        setActiveSection(id);
                    }
                }
            });
        }, { rootMargin: "-30% 0px -70% 0px" });

        sections.forEach(section => { observer.observe(section); });

        return () => sections.forEach(section => { observer.unobserve(section); });
    }, []);

    // Effect for initializing Chart.js
    useEffect(() => {
        const initializeChart = async () => {
            if (chartRef.current && typeof window !== 'undefined') {
                try {
                    setChartLoading(true);
                    setChartError(null);
                    
                    // Import Chart.js dynamically
                    const { Chart } = await import('chart.js/auto');
                    
                    if (chartInstance.current) {
                        chartInstance.current.destroy();
                    }

                    const marketData = {
                        labels: ['AI in Healthcare', 'Blockchain in Healthcare'],
                        datasets: [{
                            label: '2024 Value (USD Billions)',
                            data: [20, 7], 
                            backgroundColor: 'rgba(30, 64, 175, 0.6)',
                            borderColor: 'rgba(30, 64, 175, 1)', 
                            borderWidth: 1
                        }, {
                            label: 'Projected 2034 Value (USD Billions)',
                            data: [350, 110], 
                            backgroundColor: 'rgba(15, 118, 110, 0.6)',
                            borderColor: 'rgba(15, 118, 110, 1)', 
                            borderWidth: 1
                        }]
                    };

                    const marketGrowthCtx = chartRef.current.getContext('2d');
                    if (marketGrowthCtx) {
                        chartInstance.current = new Chart(marketGrowthCtx, {
                            type: 'bar', 
                            data: marketData,
                            options: {
                                responsive: true, 
                                maintainAspectRatio: false,
                                plugins: {
                                    title: { display: false },
                                    tooltip: {
                                        callbacks: {
                                            label: function(context) {
                                                let label = context.dataset.label || '';
                                                if (label) { label += ': '; }
                                                if (context.parsed.y !== null) { 
                                                    label += new Intl.NumberFormat('en-US', { 
                                                        style: 'currency', 
                                                        currency: 'USD' 
                                                    }).format(context.parsed.y) + 'B'; 
                                                }
                                                return label;
                                            }
                                        }
                                    }
                                },
                                scales: { 
                                    y: { 
                                        beginAtZero: true, 
                                        title: { display: true, text: 'Market Size (USD Billions)' } 
                                    } 
                                }
                            }
                        }) as ChartInstance;
                    }
                    setChartLoading(false);
                } catch (error) {
                    console.error('Failed to initialize chart:', error);
                    setChartError('Chart failed to load. Please refresh the page.');
                    setChartLoading(false);
                }
            }
        };

        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(initializeChart, 100);

        return () => {
            clearTimeout(timer);
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    const filteredCompanies = filter === 'all' 
        ? companiesData 
        : companiesData.filter(c => c.tags.includes(filter));

    const navLinks = [
        { id: 'overview', title: 'Overview' },
        { id: 'blog', title: 'Blog' },
        { id: 'pillars', title: 'Pillars' },
        { id: 'revolution', title: 'The Revolution' },
        { id: 'ecosystem', title: 'Ecosystem' },
        { id: 'foundations', title: 'Foundations' },
        { id: 'challenges', title: 'Challenges' },
        { id: 'future', title: 'Future' },
    ];

    return (
        <div className="bg-stone-50 text-gray-800 antialiased">
            <GlobalStyles />
            
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="font-bold text-xl text-blue-900">MedDeFi</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map(link => (
                                    <a 
                                        key={link.id}
                                        href={`#${link.id}`} 
                                        onClick={() => setActiveSection(link.id)}
                                        className={`nav-link px-3 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent ${activeSection === link.id ? 'active' : ''}`}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                
                <section id="overview" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Convergence of AI, Blockchain, and DeFi in Healthcare</h1>
                        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600">This report explores "MedDeFi," an emerging ecosystem that leverages the powerful convergence of Artificial Intelligence, blockchain, and the core principles of Decentralized Finance. MedDeFi moves beyond simple technological integration to fundamentally redefine value, ownership, and trust, proposing a future where patient data is a sovereign asset, research is democratized, and financial transactions are transparent, efficient, and disintermediated.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
                         <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-2">A Staggering Market Opportunity</h2>
                         <p className="text-center text-gray-600 mb-8">The markets for AI and Blockchain in healthcare are poised for explosive growth, creating a multi-hundred-billion dollar opportunity. This growth is fueled by incumbents like Google and NVIDIA providing foundational infrastructure, and a vibrant ecosystem of trailblazing startups building the applications of this new era.</p>
                         <div className="chart-container mb-12">
                            {chartLoading ? (
                                <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                                        <p className="text-gray-500">Loading chart...</p>
                                    </div>
                                </div>
                            ) : chartError ? (
                                <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                    <div className="text-center">
                                        <p className="text-gray-500 mb-2">{chartError}</p>
                                        <button 
                                            onClick={() => {
                                                setChartError(null);
                                                setTimeout(() => {
                                                    const initializeChart = async () => {
                                                        if (chartRef.current && typeof window !== 'undefined') {
                                                            try {
                                                                setChartLoading(true);
                                                                setChartError(null);
                                                                const { Chart } = await import('chart.js/auto');
                                                                if (chartInstance.current) {
                                                                    chartInstance.current.destroy();
                                                                }
                                                                const marketData = {
                                                                    labels: ['AI in Healthcare', 'Blockchain in Healthcare'],
                                                                    datasets: [{
                                                                        label: '2024 Value (USD Billions)',
                                                                        data: [20, 7], 
                                                                        backgroundColor: 'rgba(30, 64, 175, 0.6)',
                                                                        borderColor: 'rgba(30, 64, 175, 1)', 
                                                                        borderWidth: 1
                                                                    }, {
                                                                        label: 'Projected 2034 Value (USD Billions)',
                                                                        data: [350, 110], 
                                                                        backgroundColor: 'rgba(15, 118, 110, 0.6)',
                                                                        borderColor: 'rgba(15, 118, 110, 1)', 
                                                                        borderWidth: 1
                                                                    }]
                                                                };
                                                                const marketGrowthCtx = chartRef.current.getContext('2d');
                                                                if (marketGrowthCtx) {
                                                                    chartInstance.current = new Chart(marketGrowthCtx, {
                                                                        type: 'bar', 
                                                                        data: marketData,
                                                                        options: {
                                                                            responsive: true, 
                                                                            maintainAspectRatio: false,
                                                                            plugins: {
                                                                                title: { display: false },
                                                                                tooltip: {
                                                                                    callbacks: {
                                                                                        label: function(context) {
                                                                                            let label = context.dataset.label || '';
                                                                                            if (label) { label += ': '; }
                                                                                            if (context.parsed.y !== null) { 
                                                                                                label += new Intl.NumberFormat('en-US', { 
                                                                                                    style: 'currency', 
                                                                                                    currency: 'USD' 
                                                                                                }).format(context.parsed.y) + 'B'; 
                                                                                            }
                                                                                            return label;
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            scales: { 
                                                                                y: { 
                                                                                    beginAtZero: true, 
                                                                                    title: { display: true, text: 'Market Size (USD Billions)' } 
                                                                                } 
                                                                            }
                                                                        }
                                                                    }) as ChartInstance;
                                                                }
                                                                setChartLoading(false);
                                                            } catch (error) {
                                                                console.error('Failed to initialize chart:', error);
                                                                setChartError('Chart failed to load. Please refresh the page.');
                                                                setChartLoading(false);
                                                            }
                                                        }
                                                    };
                                                    initializeChart();
                                                }, 100);
                                            }}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                        >
                                            Retry
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <canvas ref={chartRef}></canvas>
                            )}
                        </div>
                        <div className="overflow-x-auto">
                            <h3 className="text-xl font-semibold mb-4 text-center">Market Size and Growth Projections (2024-2035)</h3>
                            <table>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Segment</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Year Value (2024/25)</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projected Value (by 2030-35)</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CAGR</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                    <tr><td>AI in Healthcare (Overall)</td><td>$15B - $27B</td><td>$110B - $613B</td><td>~36-39%</td></tr>
                                    <tr><td>Generative AI in Healthcare</td><td>~$2B</td><td>~$40B</td><td>~35%</td></tr>
                                    <tr><td>Blockchain in Healthcare (Overall)</td><td>$1.4B - $13B</td><td>$25B - $193B</td><td>~26-35%</td></tr>
                                    <tr><td>Blockchain for Clinical Trials</td><td>~$0.5B</td><td>~$6.5B</td><td>~26%</td></tr>
                                    <tr><td>Blockchain for Supply Chain</td><td>~$0.75B</td><td>~$10.2B</td><td>~26%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="blog" className="min-h-screen pt-20 -mt-16">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MedDeFi Insights: The Blog</h2>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">Explore the core concepts of our research through this series of curated blog posts. Each post breaks down a key section of the report into a digestible, narrative format.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPostsData.map((post, index) => (
                             <div key={index} className="bg-white rounded-xl shadow-lg flex flex-col">
                                <div className="p-6 flex-grow">
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                    <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3">{post.title}</h3>
                                    <p className="text-gray-700 text-sm">{post.summary}</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-b-xl">
                                    <button onClick={() => { setSelectedPost(post); setShowBlogModal(true); }} className="font-semibold text-blue-800 hover:text-blue-600 transition">Read More &rarr;</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showBlogModal && selectedPost && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowBlogModal(false)}>
                            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                                <div className="p-6 border-b">
                                    <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                                    <p className="text-sm text-gray-500 mt-1">By MedDeFi Research Team | <span>{selectedPost.date}</span></p>
                                </div>
                                <div className="p-6 lg:p-8 overflow-y-auto" dangerouslySetInnerHTML={{ __html: selectedPost.content }}></div>
                                <div className="p-4 bg-gray-100 border-t text-right">
                                     <button onClick={() => setShowBlogModal(false)} className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-900 transition">Close</button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                
                <section id="pillars" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Technological Pillars</h2>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">MedDeFi is built on the powerful synergy of two foundational technologies. AI provides the intelligence to analyze data, while blockchain provides the secure, trustworthy foundation for that data. Their true transformative power is unlocked when they are synergistically combined.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* AI Pillar */}
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">AI: The Engine of Insight</h3>
                             <p className="text-gray-600 text-sm mb-4">AI's ability to analyze vast datasets at superhuman speeds is creating unprecedented capabilities across the healthcare value chain, from the diagnostic lab to the administrative back office.</p>
                            <div className="space-y-4">
                                <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'diag' ? '' : 'diag')} className="w-full text-left p-4 font-semibold bg-blue-50 hover:bg-blue-100 flex justify-between items-center">Revolutionizing Diagnostics<span className="text-xl">{openPillar === 'diag' ? '−' : '+'}</span></button>
                                    {openPillar === 'diag' && <div className="p-4 bg-white border-t text-sm text-gray-700">AI models, trained on millions of images, detect subtle patterns invisible to the human eye. Companies like <strong>Aidoc</strong>, <strong>Enlitic</strong>, and <strong>Lunit</strong> provide solutions that flag abnormalities in radiological scans, assisting radiologists, improving accuracy, and prioritizing life-threatening cases.</div>}
                                </div>
                                 <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'drug' ? '' : 'drug')} className="w-full text-left p-4 font-semibold bg-blue-50 hover:bg-blue-100 flex justify-between items-center">Accelerating Drug Discovery<span className="text-xl">{openPillar === 'drug' ? '−' : '+'}</span></button>
                                    {openPillar === 'drug' && <div className="p-4 bg-white border-t text-sm text-gray-700">AI dramatically shortens the timeline and reduces costs of drug development. Companies like <strong>NVIDIA</strong> provide the core hardware (GPUs), while innovators like <strong>Owkin</strong> use federated learning to train models on data from multiple institutions without the data ever leaving its source, preserving privacy.</div>}
                                </div>
                                <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'ops' ? '' : 'ops')} className="w-full text-left p-4 font-semibold bg-blue-50 hover:bg-blue-100 flex justify-between items-center">Optimizing Operations<span className="text-xl">{openPillar === 'ops' ? '−' : '+'}</span></button>
                                     {openPillar === 'ops' && <div className="p-4 bg-white border-t text-sm text-gray-700">Beyond clinical use, AI automates administrative and operational tasks. <strong>Notable Health</strong> automates the patient journey from scheduling to billing. <strong>HealthForce AI</strong> optimizes hospital logistics like equipment tracking and staff scheduling, reducing costs and freeing up human staff.</div>}
                                </div>
                            </div>
                        </div>
                        
                        {/* Blockchain Pillar */}
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-semibold text-teal-800 mb-4 text-center">Blockchain: The Bedrock of Trust</h3>
                            <p className="text-gray-600 text-sm mb-4">While AI provides intelligence, blockchain provides the mechanism to ensure that data is trustworthy, secure, and transparently managed. It establishes trust in a network without relying on a central intermediary.</p>
                            <div className="space-y-4">
                                <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'immute' ? '' : 'immute')} className="w-full text-left p-4 font-semibold bg-teal-50 hover:bg-teal-100 flex justify-between items-center">Immutability & Data Integrity<span className="text-xl">{openPillar === 'immute' ? '−' : '+'}</span></button>
                                    {openPillar === 'immute' && <div className="p-4 bg-white border-t text-sm text-gray-700">Each block is cryptographically linked to the previous one, creating a "tamper-evident" chain. Altering a past record is computationally impossible, guaranteeing the integrity of EHRs, clinical trial data, and supply chain logs.</div>}
                                </div>
                                 <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'decentral' ? '' : 'decentral')} className="w-full text-left p-4 font-semibold bg-teal-50 hover:bg-teal-100 flex justify-between items-center">Decentralization & Resilience<span className="text-xl">{openPillar === 'decentral' ? '−' : '+'}</span></button>
                                    {openPillar === 'decentral' && <div className="p-4 bg-white border-t text-sm text-gray-700">The ledger is copied across many computers, eliminating single points of failure. This makes the system vastly more resilient to cyberattacks compared to traditional centralized databases, which are frequent targets (over 180M records breached in 2024).</div>}
                                </div>
                                <div className="border rounded-lg overflow-hidden">
                                    <button onClick={() => setOpenPillar(openPillar === 'audit' ? '' : 'audit')} className="w-full text-left p-4 font-semibold bg-teal-50 hover:bg-teal-100 flex justify-between items-center">Transparency & Auditability<span className="text-xl">{openPillar === 'audit' ? '−' : '+'}</span></button>
                                    {openPillar === 'audit' && <div className="p-4 bg-white border-t text-sm text-gray-700">Every action is time-stamped and recorded on a shared ledger visible to authorized participants. This creates a permanent, unchangeable audit trail, allowing a patient to see who accessed their record or a regulator to trace a drug's journey.</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="revolution" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The MedDeFi Revolution</h2>
                         <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">MedDeFi applies the core principles of Decentralized Finance to healthcare, enabling a patient-centric economy through key innovations like Data Tokenization, DAOs, and AI-powered Smart Contracts. This creates a system governed by and for its participants.</p>
                    </div>

                    <div className="lg:flex lg:gap-8">
                        <div className="lg:w-1/3 mb-8 lg:mb-0">
                            <div className="sticky top-24 space-y-4">
                                <button onClick={() => setActiveConcept('tokenization')} className={`w-full text-left p-4 rounded-lg shadow-md transition-colors ${activeConcept === 'tokenization' ? 'bg-blue-800 text-white' : 'bg-white hover:bg-blue-50'}`}>
                                    <h4 className="font-bold text-lg">1. Data Tokenization</h4><p className="text-sm">Transforming health data into secure, controllable assets.</p>
                                </button>
                                <button onClick={() => setActiveConcept('daos')} className={`w-full text-left p-4 rounded-lg shadow-md transition-colors ${activeConcept === 'daos' ? 'bg-blue-800 text-white' : 'bg-white hover:bg-blue-50'}`}>
                                    <h4 className="font-bold text-lg">2. DAOs</h4><p className="text-sm">Creating community-governed healthcare organizations.</p>
                                </button>
                                <button onClick={() => setActiveConcept('contracts')} className={`w-full text-left p-4 rounded-lg shadow-md transition-colors ${activeConcept === 'contracts' ? 'bg-blue-800 text-white' : 'bg-white hover:bg-blue-50'}`}>
                                    <h4 className="font-bold text-lg">3. AI-Powered Smart Contracts</h4><p className="text-sm">Automating the new healthcare economy with intelligence.</p>
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            {activeConcept === 'tokenization' && (
                                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                                    <h3 className="text-2xl font-semibold text-blue-900">Health Data Tokenization: A New Asset Class</h3>
                                    <p className="text-gray-700">Tokenization replaces sensitive patient information (PHI) with an irreversible, non-sensitive "token". This allows data to be analyzed and shared for research without exposing private details, unlocking its value while enhancing privacy. It is the key to creating a "patient-as-shareholder" economy.</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: Powering Research</h5>
                                        <p className="text-sm text-gray-600">Companies like <strong>Datavant</strong> use tokenization to link disparate datasets (EHRs, claims, pharmacy data) for a single patient, creating a complete health journey for analysis—all without sharing PHI.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: Data Monetization</h5>
                                        <p className="text-sm text-gray-600">Platforms from pioneers like <strong>Medicalchain</strong> create marketplaces where patients can consent to share tokenized data with researchers in exchange for direct compensation, flipping the model to let patients control and profit from their data.</p>
                                    </div>
                                </div>
                            )}
                            {activeConcept === 'daos' && (
                                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                                    <h3 className="text-2xl font-semibold text-blue-900">DAOs: Community-Governed Healthcare</h3>
                                    <p className="text-gray-700">Decentralized Autonomous Organizations (DAOs) are member-owned communities without central leadership. Decisions are made from the bottom-up, governed by rules encoded on a blockchain. This is perfect for a patient-centric system, especially for addressing the "long tail" of needs neglected by for-profit models.</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: Democratizing Research Funding</h5>
                                        <p className="text-sm text-gray-600">DAOs like <strong>VitaDAO</strong> (longevity) and <strong>Vibe Bio</strong> (rare diseases) allow global communities to pool funds and vote on which research projects to support, accelerating innovation in areas left behind by big pharma.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: Decentralized Health Insurance</h5>
                                        <p className="text-sm text-gray-600">DAOs can form community-owned insurance pools. Members contribute premiums, and claims are adjudicated transparently by the community or smart contracts. This drastically reduces administrative overhead and can make coverage more affordable and tailored.</p>
                                    </div>
                                </div>
                            )}
                            {activeConcept === 'contracts' && (
                                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                                    <h3 className="text-2xl font-semibold text-blue-900">AI-Powered Smart Contracts</h3>
                                    <p className="text-gray-700">Integrating AI makes smart contracts dynamic and intelligent. They can analyze complex data and make nuanced decisions, automating the healthcare economy with unprecedented sophistication.</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: Value-Based Claims Processing</h5>
                                        <p className="text-sm text-gray-600">An AI contract can analyze outcomes—like monitoring a diabetic's glucose levels via a wearable—and automatically trigger bonus payments to providers for keeping patients healthy, creating a direct financial incentive for better care.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-semibold">Use Case: "Care Now, Pay Later" (CNPL) Financing</h5>
                                        <p className="text-sm text-gray-600">Integrating AI-driven risk assessment (like from <strong>PayZen</strong>) with a DeFi framework could create a peer-to-peer lending market for medical expenses, automating loans and repayments without traditional banks.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section id="ecosystem" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The MedDeFi Ecosystem</h2>
                         <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">The MedDeFi revolution is being built by established tech giants providing the foundational "picks and shovels" and trailblazing startups creating novel applications.</p>
                    </div>
                    
                    <div className="mb-8 flex justify-center flex-wrap gap-2">
                        {['all', 'Incumbent', 'Trailblazer', 'Data Sovereignty', 'Supply Chain'].map(tag => (
                            <button 
                                key={tag} 
                                onClick={() => setFilter(tag)} 
                                className={`px-4 py-2 text-sm font-medium bg-white rounded-full shadow-sm hover:bg-blue-100 transition ${filter === tag ? 'bg-blue-800 text-white' : ''}`}
                            >
                                {tag === 'all' ? 'All' : tag}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredCompanies.map(company => (
                            <div key={company.name} className="bg-white rounded-xl shadow-lg p-6 section-card cursor-pointer" onClick={() => { setSelectedCompany(company); setShowModal(true); }}>
                                <h4 className="font-bold text-xl text-gray-900">{company.name}</h4>
                                <p className="text-blue-800 font-semibold text-sm mb-2">{company.focus}</p>
                                <p className="text-gray-600 text-sm">{company.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {company.tags.map(tag => (
                                        <span key={tag} className={`px-2 py-1 text-xs font-semibold rounded-full ${tag === 'Incumbent' ? 'bg-gray-200 text-gray-800' : 'bg-teal-100 text-teal-800'}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {showModal && selectedCompany && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
                            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8" onClick={e => e.stopPropagation()}>
                                <h3 className="text-2xl font-bold mb-2">{selectedCompany.name}</h3>
                                <p className="text-blue-800 font-semibold mb-4">{selectedCompany.focus}</p>
                                <p className="text-gray-700 whitespace-pre-line">{selectedCompany.details}</p>
                                <button onClick={() => setShowModal(false)} className="mt-6 w-full bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition">Close</button>
                            </div>
                        </div>
                    )}
                </section>

                <section id="foundations" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Foundational Shifts in Architecture</h2>
                         <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">Realizing the MedDeFi vision is not possible with current IT infrastructure. A foundational shift from centralized, siloed systems to decentralized or hybrid models is a necessity.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-center">Centralized vs. Decentralized Healthcare IT: A Comparative Framework</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Centralized Model (e.g., Traditional EHR)</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Decentralized Model (e.g., Blockchain Network)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                    <tr><td>Architecture</td><td>Single authoritative system with a central database. Control is top-down.</td><td>Peer-to-peer network with a distributed ledger. Control is distributed.</td></tr>
                                    <tr><td>Data Ownership</td><td>Institution-centric. The hospital or provider owns and controls the record.</td><td>Patient-centric. The patient can be empowered with cryptographic control.</td></tr>
                                    <tr><td>Security Model</td><td>Relies on perimeter defense. A single breach can compromise the entire dataset.</td><td>Distributed security. No single point of failure. Attack requires compromising a majority of the network.</td></tr>
                                    <tr><td>Interoperability</td><td>Inherently low. Requires complex, costly, proprietary integrations.</td><td>Inherently high. Built on shared protocols allowing disparate systems to interact.</td></tr>
                                    <tr><td>Resilience</td><td>Low. Vulnerable to a single point of failure; server downtime can halt all operations.</td><td>High. The network continues to function even if individual nodes fail.</td></tr>
                                    <tr><td>Pragmatic Model</td><td>The entrenched legacy system, but increasingly unfit for purpose.</td><td>Purely on-chain is impractical. <strong>Hybrid models</strong> combining off-chain storage with on-chain verification are the most viable path forward.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="challenges" className="min-h-screen pt-20 -mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Navigating the Gauntlet</h2>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">The path to adoption is a gauntlet of technical, regulatory, and ethical challenges that must be carefully navigated.</p>
                    </div>
                    
                    <div className="max-w-5xl mx-auto">
                        <div className="flex border-b border-gray-300 mb-8">
                            <button onClick={() => setActiveTab('technical')} className={`tab-button flex-1 py-2 px-4 text-center font-semibold text-gray-600 border-b-2 border-transparent transition ${activeTab === 'technical' ? 'active' : ''}`}>Technical Hurdles</button>
                            <button onClick={() => setActiveTab('regulatory')} className={`tab-button flex-1 py-2 px-4 text-center font-semibold text-gray-600 border-b-2 border-transparent transition ${activeTab === 'regulatory' ? 'active' : ''}`}>Regulatory Maze</button>
                            <button onClick={() => setActiveTab('ethical')} className={`tab-button flex-1 py-2 px-4 text-center font-semibold text-gray-600 border-b-2 border-transparent transition ${activeTab === 'ethical' ? 'active' : ''}`}>Ethical Minefield</button>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            {activeTab === 'technical' && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Technical & Scalability Hurdles</h3>
                                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                                        <li><span className="font-semibold">Blockchain Scalability:</span> Public blockchains have low transaction throughput. Solutions include permissioned blockchains and moving large data files "off-chain" while keeping hashes on-chain.</li>
                                        <li><span className="font-semibold">Interoperability with Legacy Systems:</span> Integrating decentralized apps with existing hospital EHRs is a monumental technical and financial challenge, requiring deep, complex integrations.</li>
                                        <li><span className="font-semibold">Lack of Standardization:</span> The industry lacks common data standards (e.g., for coding diagnoses). For a decentralized network to function, participants must agree on how to format and communicate data.</li>
                                        <li><span className="font-semibold">Expertise Gap:</span> There is a pronounced shortage of professionals with dual expertise in both healthcare (workflows, regulations) and advanced technology (blockchain, AI).</li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'regulatory' && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">The Regulatory Maze</h3>
                                    <p className="text-gray-700 mb-6">The regulatory landscape is complex and stringent. New technologies often exist in tension with established legal frameworks like HIPAA and GDPR.</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50"><tr><th>Rule</th><th>Challenge</th><th>Mitigation</th></tr></thead>
                                            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                                <tr><td><strong>HIPAA</strong> (Access Control)</td><td>Public ledger transparency conflicts with "minimum necessary" access rule.</td><td>Use <strong>permissioned blockchains</strong> with granular, role-based access controls.</td></tr>
                                                <tr><td><strong>GDPR</strong> (Right to Erasure)</td><td>Directly conflicts with blockchain's immutability.</td><td>Store PHI <strong>off-chain</strong> in a compliant, erasable database. Keep only irreversible hashes on-chain.</td></tr>
                                                <tr><td><strong>Cross-Border Data Laws</strong></td><td>A globally distributed ledger can create challenges with data residency laws.</td><td>Implement <strong>geofencing</strong> for off-chain data and use privacy-preserving tech like federated learning.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'ethical' && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">The Ethical Minefield</h3>
                                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                                        <li><span className="font-semibold">AI Bias on an Immutable Ledger:</span> If a biased AI model makes a discriminatory decision (e.g., for insurance), recording it on a blockchain creates a permanent, unchangeable record of that biased action—a massive liability.</li>
                                        <li><span className="font-semibold">The "Forced-Function" of Immutability:</span> This risk creates a powerful incentive to get AI ethics right *before* deployment. It elevates AI safety from a guideline to a mission-critical engineering requirement. Companies like <strong>Styrk.ai</strong> are building tools to audit AI bias and log the results immutably for defense.</li>
                                        <li><span className="font-semibold">Data Sovereignty and Equity:</span> Could a data monetization economy benefit the healthy and tech-savvy while exploiting the most vulnerable populations? Fair governance is crucial to prevent a new form of inequality.</li>
                                        <li><span className="font-semibold">DAO Governance Risks:</span> Simple token-based voting can lead to a plutocracy where wealthy "whales" control the DAO. Fairer governance models (e.g., reputation-based) are needed to ensure DAOs serve their communities.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section id="future" className="min-h-screen pt-20 -mt-16">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Future: Strategic Imperatives</h2>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-2">Navigating the MedDeFi landscape requires a nuanced strategy tailored to the specific goals of each stakeholder.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Emerging Trends & Future Trajectories</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h4 className="font-bold text-lg text-blue-900 mb-2">Decentralized Clinical Trials (DCTs)</h4>
                                <p>The shift to patient-centric, remote trials is a perfect use case for MedDeFi. AI can analyze real-time wearable data, while blockchain ensures the integrity of that remotely collected data, enhancing the reliability of trial outcomes.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-blue-900 mb-2">Generative AI as a Catalyst</h4>
                                <p>Generative AI will accelerate MedDeFi by creating high-quality synthetic health data for training models without using real patient info. It will also power the next generation of intelligent agents for navigating MedDeFi platforms.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-blue-900 mb-2">Decentralized Identity (DID)</h4>
                                <p>DID solutions will be a critical enabler for true patient sovereignty. They will allow individuals to own and control their own digital identity, which they can use to authenticate themselves across the healthcare ecosystem without a central provider.</p>
                            </div>
                             <div>
                                <h4 className="font-bold text-lg text-blue-900 mb-2">The Battle for the Platform</h4>
                                <p>A key strategic battle will emerge over who builds and controls the dominant MedDeFi platforms. Will it be enterprise-led consortiums, open protocols, or tech giants leveraging their cloud and AI scale? The outcome will define the MedDeFi economy.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-6 text-center">Stakeholder Recommendations</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                         <div className="bg-white rounded-xl shadow-lg p-6 section-card">
                            <h4 className="font-bold text-xl text-blue-900 mb-2">For Investors</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                <li>Focus on "picks and shovels" plays: enabling infrastructure like compliant storage and interoperability layers.</li>
                                <li>Prioritize startups with multi-disciplinary teams (healthcare, tech, regulatory).</li>
                                <li>Embrace pragmatic hybrid models over purely ideological "rip-and-replace" approaches.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 section-card">
                            <h4 className="font-bold text-xl text-blue-900 mb-2">For Healthcare Execs</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                <li>Start with targeted pilot projects with clear ROI (e.g., supply chain, claims).</li>
                                <li>Invest in upskilling your workforce in AI, data science, and blockchain principles.</li>
                                <li>Collaborate in industry consortiums to share costs and set standards.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 section-card">
                            <h4 className="font-bold text-xl text-blue-900 mb-2">For Developers</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                <li>Adopt a "compliance-by-design" approach from day one.</li>
                                <li>Solve a specific, high-pain-point problem for a clear customer segment.</li>
                                <li>Abstract the complexity: create intuitive UIs that hide the underlying tech from end-users.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 section-card">
                            <h4 className="font-bold text-xl text-blue-900 mb-2">For Policymakers</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                <li>Develop clear, technology-neutral regulatory frameworks focused on outcomes.</li>
                                <li>Foster regulatory "sandboxes" for safe, real-world experimentation.</li>
                                <li>Use convening power to drive industry-wide data standardization efforts.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default MedDeFiReport;