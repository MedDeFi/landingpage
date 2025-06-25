'use client';

import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import type { ChartConfiguration, ChartEvent, ActiveElement, TooltipItem, TooltipModel } from 'chart.js';

interface AppState {
  activeSection: string;
  charts: {
    rendering?: Chart;
    comparison?: Chart;
  };
}

interface ChartElement {
  length: number;
  [0]: {
    datasetIndex: number;
  };
}

const MobileHeader = () => (
  <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 p-4 fixed top-0 left-0 right-0 z-20 md:hidden">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-bold text-sky-800">Next.js SEO Guide</h1>
      <button id="mobile-menu-btn" className="p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </header>
);

const Sidebar = () => (
  <aside id="sidebar" className="w-64 bg-white border-r border-slate-200 p-4 fixed top-0 h-full transform -translate-x-full transition-transform z-30 md:relative md:translate-x-0 md:pt-8 flex-shrink-0">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-sky-800 hidden md:block">Next.js SEO</h1>
      <button id="close-sidebar-btn" className="p-2 md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <nav className="flex flex-col space-y-2">
      <a href="#introduction" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200 active">Introduction</a>
      <a href="#metadata" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Metadata</a>
      <a href="#performance" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Performance</a>
      <a href="#components" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Component Model</a>
      <a href="#crawlers" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Crawler Directives</a>
      <a href="#advanced-strategies" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Advanced Strategies</a>
      <a href="#i18n" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Internationalization</a>
      <a href="#monitoring" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Monitoring</a>
      <a href="#comparison" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Framework Comparison</a>
      <a href="#checklist" className="nav-link text-slate-600 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200">Interactive Checklist</a>
    </nav>
  </aside>
);

const Modal = () => (
  <div id="info-modal" className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 id="modal-title" className="text-lg font-semibold"></h3>
        <button id="modal-close-btn" className="text-slate-500 hover:text-slate-800">&times;</button>
      </div>
      <div id="modal-content" className="p-4 text-slate-600"></div>
    </div>
  </div>
);

export default function NextGuide() {
  const [appState, setAppState] = useState<AppState>({
    activeSection: 'introduction',
    charts: {},
  });

  useEffect(() => {
    // Initialize charts and event listeners
    createRenderingStrategiesChart();
    createFrameworkComparisonChart();
    createChecklist();
    updateActiveNav(appState.activeSection);

    // Cleanup function
    return () => {
      // Destroy charts on unmount
      Object.values(appState.charts).forEach((chart) => chart?.destroy());
    };
  }, []);

  // --- Navigation ---
  function updateActiveNav(targetId: string) {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
    const contentSections = document.querySelectorAll<HTMLElement>('.content-section');
    
    navLinks.forEach(link => {
      link.classList.toggle('active', link.hash === `#${targetId}`);
    });
    contentSections.forEach(section => {
      section.classList.toggle('hidden', section.id !== targetId);
    });
    window.scrollTo(0, 0);
  }

  // --- Charts ---
  function createRenderingStrategiesChart() {
    const canvas = document.getElementById('renderingStrategiesChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    
    if (appState.charts.rendering) appState.charts.rendering.destroy();
    
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Performance (LCP/TTFB)', 'SEO Impact', 'Data Freshness'],
        datasets: [
          { label: 'SSG', data: [10, 10, 3], backgroundColor: 'rgba(14, 165, 233, 0.7)', borderColor: 'rgb(14, 165, 233)', borderWidth: 1 },
          { label: 'SSR', data: [8, 10, 10], backgroundColor: 'rgba(249, 115, 22, 0.7)', borderColor: 'rgb(249, 115, 22)', borderWidth: 1 },
          { label: 'ISR', data: [9, 10, 8], backgroundColor: 'rgba(22, 163, 74, 0.7)', borderColor: 'rgb(22, 163, 74)', borderWidth: 1 },
          { label: 'CSR', data: [2, 3, 10], backgroundColor: 'rgba(239, 68, 68, 0.7)', borderColor: 'rgb(239, 68, 68)', borderWidth: 1 },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 10, ticks: { stepSize: 2 } } },
        plugins: {
          title: { display: false },
          tooltip: { 
            callbacks: { 
              label: function(this: TooltipModel<'bar'>, tooltipItem: TooltipItem<'bar'>) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}/10`;
              }
            } 
          }
        }
      }
    });

    setAppState(prev => ({
      ...prev,
      charts: { ...prev.charts, rendering: newChart }
    }));
  }

  function createFrameworkComparisonChart() {
    const canvas = document.getElementById('frameworkComparisonChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const comparisonText = document.getElementById('comparison-text');
    if (appState.charts.comparison) appState.charts.comparison.destroy();
    
    const data = {
      labels: ['Performance', 'Flexibility', 'Data Fetching Simplicity', 'Ecosystem', 'Beginner Friendliness'],
      datasets: [
        { label: 'Next.js', data: [9, 10, 7, 10, 8], fill: true, backgroundColor: 'rgba(14, 165, 233, 0.2)', borderColor: 'rgb(14, 165, 233)', pointBackgroundColor: 'rgb(14, 165, 233)'},
        { label: 'Remix', data: [8, 7, 10, 8, 7], fill: true, backgroundColor: 'rgba(249, 115, 22, 0.2)', borderColor: 'rgb(249, 115, 22)', pointBackgroundColor: 'rgb(249, 115, 22)' },
        { label: 'SvelteKit', data: [10, 8, 8, 7, 9], fill: true, backgroundColor: 'rgba(255, 62, 0, 0.2)', borderColor: 'rgb(255, 62, 0)', pointBackgroundColor: 'rgb(255, 62, 0)'}
      ]
    };

    const frameworkInfo: Record<string, string> = {
      'Next.js': 'The Versatile Hybrid: Offers a full spectrum of rendering strategies (SSG, SSR, ISR) and is backed by the vast React/Vercel ecosystem.',
      'Remix': 'The Web Standards Purist: Champions web fundamentals with a focus on SSR, forms, and a clear loader/action data pattern.',
      'SvelteKit': 'The Compiler-as-Framework: Aims for maximum performance by compiling to highly optimized vanilla JS, resulting in smaller bundles.'
    };

    const newChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onHover: (event: ChartEvent, chartElement: ActiveElement[], chart: Chart) => {
          if (chartElement.length) {
            const index = chartElement[0].datasetIndex;
            const label = data.datasets[index].label;
            if (comparisonText) {
              comparisonText.textContent = frameworkInfo[label] || 'Hover over a point for details.';
            }
          } else if (comparisonText) {
            comparisonText.textContent = 'Hover over a point on the chart to see details about each framework\'s philosophy.';
          }
        },
        plugins: { legend: { position: 'top' } },
        elements: { line: { borderWidth: 3 } }
      }
    });

    setAppState(prev => ({
      ...prev,
      charts: { ...prev.charts, comparison: newChart }
    }));
  }

  // --- Checklist ---
  function createChecklist() {
    const checklistData = {
      "Metadata & Content": [
        "Export static `metadata` from root layout.tsx",
        "Use `generateMetadata` for dynamic pages",
        "Place `favicon.ico` in /app",
        "Place `opengraph-image.jpg` in /app",
        "Implement and validate JSON-LD structured data",
        "Ensure `canonical` URLs are set correctly"
      ],
      "Performance & Caching": [
        "Choose appropriate rendering strategy per page (default to static)",
        "Understand `fetch` caching options (`revalidate`, `no-store`)",
        "Use `next/image` for all images with width/height/alt",
        "Use `next/font` to optimize font loading",
        "Use `notFound()` for proper 404 error handling"
      ],
      "Component Architecture": [
        "Default to Server Components for content and data fetching",
        "Create small Client Component 'islands' for interactivity",
        "Prevent hydration errors by moving client-only logic to `useEffect`",
        "Pass Server Components as `children` to Client Components"
      ],
      "Crawler Directives": [
        "Create dynamic `sitemap.ts`",
        "Manually create sitemap index for sites > 50k URLs",
        "Create `robots.ts` to disallow private routes and specify sitemap"
      ],
      "Advanced & Strategic": [
        "Implement programmatic SEO (pSEO) for relevant datasets",
        "Add advanced schemas (FAQ, HowTo) where applicable",
        "Use middleware for A/B testing or geo-based redirects",
        "Structure URL routes and content to build topical authority"
      ],
      "Monitoring & Analytics": [
        "Verify site with Google Search Console",
        "Submit sitemap to GSC",
        "Regularly audit GSC Performance and Indexing reports",
        "Choose an appropriate analytics solution"
      ]
    };

    const container = document.getElementById('checklist-container');
    if (!container) return;
    
    container.innerHTML = '';
    Object.entries(checklistData).forEach(([category, items]) => {
      const categoryEl = document.createElement('div');
      categoryEl.innerHTML = `<h3 class="text-xl font-semibold border-b pb-2 mb-4">${category}</h3>`;
      const listEl = document.createElement('div');
      listEl.className = 'space-y-3';
      
      items.forEach((item, index) => {
        const id = `check-${category.replace(/\s/g, '')}-${index}`;
        const itemEl = document.createElement('div');
        itemEl.className = 'flex items-center checklist-item';
        itemEl.innerHTML = `
          <input type="checkbox" id="${id}" class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500">
          <label for="${id}" class="ml-3 block text-sm font-medium text-slate-700">${item}</label>
        `;
        listEl.appendChild(itemEl);
      });
      
      categoryEl.appendChild(listEl);
      container.appendChild(categoryEl);
    });

    container.addEventListener('change', (e) => {
      if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
        e.target.closest('.checklist-item')?.classList.toggle('checklist-item-checked', e.target.checked);
      }
    });
  }

  return (
    <div id="app" className="flex min-h-screen">
      <MobileHeader />
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 mt-16 md:mt-0">
        <div id="content-container" className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <section id="introduction" className="content-section space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-b pb-4">The Definitive Guide to SEO in the Next.js App Router</h2>
            <p className="text-base md:text-lg text-slate-600">Welcome to the interactive guide for mastering Search Engine Optimization (SEO) with the Next.js App Router. This dashboard transforms the comprehensive technical report into an explorable experience. The App Router's server-first architecture fundamentally improves SEO, but requires mastering new concepts. This guide will walk you through the key pillars of a modern Next.js SEO strategy.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800">Metadata Management</h3>
                <p className="text-sm text-slate-500 mt-1">Learn to communicate clearly with crawlers using static and dynamic metadata.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800">High-Performance Architecture</h3>
                <p className="text-sm text-slate-500 mt-1">Master rendering and caching strategies to optimize for Core Web Vitals.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800">Intelligent Component Model</h3>
                <p className="text-sm text-slate-500 mt-1">Understand Server vs. Client components to balance SEO and interactivity.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800">Advanced SEO Strategies</h3>
                <p className="text-sm text-slate-500 mt-1">Leverage pSEO, Edge Middleware, and advanced schemas to dominate search rankings.</p>
              </div>
            </div>
             <p className="text-base md:text-md text-slate-600">Use the navigation on the left to dive into each topic. You'll find interactive charts, code examples, and practical checklists to help you build highly ranked, performant Next.js applications.</p>
          </section>

          {/* Metadata Section */}
          <section id="metadata" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mastering Metadata</h2>
            <p className="text-base md:text-lg text-slate-600">This section covers how to effectively manage metadata, the data that describes your page content to search engines and social platforms. The Next.js Metadata API provides a powerful, centralized way to manage these crucial signals, from basic titles to advanced structured data for rich snippets.</p>
            
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div id="metadata-tabs" className="flex border-b border-slate-200 p-2 bg-slate-50/50 rounded-t-lg flex-wrap">
                <button data-target="static-meta" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100 active">Static</button>
                <button data-target="dynamic-meta" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">Dynamic</button>
                <button data-target="file-meta" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">File-Based</button>
                <button data-target="jsonld-meta" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">JSON-LD</button>
                 <button data-target="article-schema" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">Article Schema</button>
                <button data-target="faq-schema" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">FAQ Schema</button>
                <button data-target="howto-schema" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">HowTo Schema</button>
              </div>
              <div className="p-4 md:p-6">
                <div id="static-meta" className="tab-content space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold">Foundational Metadata: Static & Global Tags</h3>
                  <p>Set site-wide defaults in your root <code>layout.tsx</code>. This creates a consistent baseline for your entire application. The <code>metadataBase</code> property is crucial for resolving relative paths, and <code>title.template</code> ensures consistent branding.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yourapp.com'),
  title: {
    template: '%s | My Awesome Site',
    default: 'My Awesome Site',
  },
  description: 'The official destination for awesome content.',
};`}</code>
                  </pre>
                </div>
                <div id="dynamic-meta" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Dynamic Metadata Generation</h3>
                  <p>For pages with content not known at build time (like blog posts), use the <code>generateMetadata</code> async function. It runs on the server, fetches data for the specific route, and returns a unique metadata object. This is a huge SEO win, as crawlers always get a fully-populated HTML head.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// app/posts/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}`}</code>
                  </pre>
                </div>
                <div id="file-meta" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">File-Based Metadata</h3>
                  <p>Next.js uses file conventions for common assets. Simply place these files in your <code>/app</code> directory (or subdirectories to override) and Next.js will generate the correct link tags automatically.</p>
                  <ul className="list-disc list-inside space-y-2 bg-slate-100 p-4 rounded-lg">
                    <li><code>favicon.ico</code>, <code>icon.png</code>: Sets the site favicon.</li>
                    <li><code>opengraph-image.jpg</code>: Default image for social sharing.</li>
                    <li><code>twitter-image.jpg</code>: Default image for Twitter cards.</li>
                  </ul>
                </div>
                <div id="jsonld-meta" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Implementing JSON-LD for Rich Snippets</h3>
                  <p>JSON-LD provides structured data to describe entities on your page (like Products or Articles), enabling rich snippets in search results. Embed a sanitized script tag in your page component to implement it.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// In your page component
const jsonLd = { /* schema.org object */ };

return (
  <section>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    {/* Page content */}
  </section>
);`}</code>
                  </pre>
                </div>
                 <div id="article-schema" className="tab-content space-y-4 hidden">
                    <h3 className="text-lg md:text-xl font-semibold">Advanced Schema: `Article`</h3>
                    <p>For blog posts or news, the `Article` schema is essential. It tells search engines about the author, publisher, and publication date, which helps build authority and can enable special features in search results like "Top Stories".</p>
                    <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                      <code>{`const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mastering SEO in Next.js",
  "author": {
    "@type": "Person",
    "name": "Jane Doe",
    "url": "https://www.janedoe.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tech Insights",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.yourapp.com/logo.png"
    }
  },
  "datePublished": "2025-06-15"
};`}</code>
                    </pre>
                </div>
                <div id="faq-schema" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Advanced Schema: `FAQPage`</h3>
                  <p>Use the `FAQPage` schema to mark up a Frequently Asked Questions page. This can result in your questions and answers appearing directly in Google's search results as a rich snippet, increasing visibility and providing immediate answers to users.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Next.js?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Next.js is a React framework for building full-stack web applications."
    }
  }, {
    "@type": "Question",
    "name": "Is Next.js good for SEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, its server-first architecture with features like SSG and SSR is excellent for SEO."
    }
  }]
};`}</code>
                  </pre>
                </div>
                <div id="howto-schema" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Advanced Schema: `HowTo`</h3>
                  <p>The `HowTo` schema is perfect for tutorial or guide content. It allows you to break down the process into explicit steps, which Google can display as a step-by-step rich result, guiding users through the process directly from the search page.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to create a Next.js app",
  "step": [{
    "@type": "HowToStep",
    "text": "Run 'npx create-next-app@latest' in your terminal."
  }, {
    "@type": "HowToStep",
    "text": "Follow the on-screen prompts to configure your project."
  }, {
    "@type": "HowToStep",
    "text": "Navigate into the new directory and run 'npm run dev' to start the server."
  }]
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Section */}
          <section id="performance" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Performance & Caching</h2>
            <p className="text-base md:text-lg text-slate-600">Performance is a direct SEO ranking factor. This section explores how Next.js's rendering and caching architecture is designed to optimize for Core Web Vitals and deliver a fast user experience.</p>
            
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div id="performance-tabs" className="flex border-b border-slate-200 p-2 bg-slate-50/50 rounded-t-lg flex-wrap">
                <button data-target="rendering-chart" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100 active">Strategies</button>
                <button data-target="ssg-content" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">SSG</button>
                <button data-target="ssr-content" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">SSR</button>
                <button data-target="isr-content" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">ISR</button>
                <button data-target="caching-diagram" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">Caching</button>
              </div>
              <div className="p-4 md:p-6">
                <div id="rendering-chart" className="tab-content">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Comparing Rendering Strategies</h3>
                  <div className="chart-container">
                    <canvas id="renderingStrategiesChart"></canvas>
                  </div>
                </div>
                <div id="ssg-content" className="tab-content space-y-2 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Static Site Generation (SSG)</h3>
                  <p>The default mode. Pages are pre-rendered to HTML at build time and served from a CDN. This provides the fastest possible load times and is the gold standard for performance and SEO.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto"><code>// This fetch is cached by default, making the page static.
const res = await fetch('https://api.example.com/data');
const data = await res.json();</code></pre>
                </div>
                 <div id="ssr-content" className="tab-content space-y-2 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Server-Side Rendering (SSR)</h3>
                  <p>Pages are rendered on the server for each request. This is for dynamic content like user dashboards. Opt-in by using a dynamic function or setting fetch cache to 'no-store'.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// Opting out of the data cache makes the entire route dynamic.
const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
const data = await res.json();`}</code>
                  </pre>
                </div>
                 <div id="isr-content" className="tab-content space-y-2 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Incremental Static Regeneration (ISR)</h3>
                  <p>The best of both worlds. A page is served statically, then re-generated in the background after a timeout (`revalidate`). Perfect for e-commerce sites and news feeds.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// The page will be static, but regenerate if a request comes in
// after 60 seconds.
const res = await fetch('https://api.example.com/data', { next: { revalidate: 60 } });
const data = await res.json();`}</code>
                  </pre>
                </div>
                <div id="caching-diagram" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold text-center">The Next.js Caching Engine</h3>
                  <p className="text-center text-slate-600">Next.js uses a multi-layered cache. A decision at the data level impacts the entire route's performance model.</p>
                  <div className="w-full bg-slate-100 p-6 rounded-lg flex flex-col md:flex-row justify-around items-center gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                      <h4 className="font-bold text-sky-700">1. Data Cache</h4>
                      <p className="text-sm">Extended `fetch` automatically caches results of data requests on the server. A `fetch` with `cache: 'no-store'` bypasses this.</p>
                    </div>
                    <div className="text-2xl font-bold text-slate-400">&rarr;</div>
                    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                      <h4 className="font-bold text-sky-700">2. Full Route Cache</h4>
                      <p className="text-sm">Caches the final rendered HTML + RSC Payload. If any data fetch in the route opts out of the Data Cache, this entire route cache is bypassed, making the page dynamic (SSR).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Components Section */}
          <section id="components" className="content-section space-y-4 md:space-y-6 hidden">
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Component Model: Server vs. Client</h2>
             <p className="text-base md:text-lg text-slate-600">The App Router's core innovation is its distinction between Server and Client components. This is the primary mechanism for controlling the trade-off between performance, SEO, and interactivity. Understanding this is non-negotiable for modern Next.js development.</p>
             
             <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 font-semibold text-sm">Feature</th>
                      <th className="p-4 font-semibold text-sm">Server Component (Default)</th>
                      <th className="p-4 font-semibold text-sm">Client Component ('use client')</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="p-4 font-medium">Rendering Location</td>
                      <td className="p-4">Server only</td>
                      <td className="p-4">Server (initial HTML), then Client</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Client-side JS</td>
                      <td className="p-4"><span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded-full">None</span></td>
                      <td className="p-4"><span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">Yes</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Data Fetching</td>
                      <td className="p-4">Direct `async/await` in component</td>
                      <td className="p-4">Client-side hooks (`useEffect`, etc.)</td>
                    </tr>
                     <tr>
                      <td className="p-4 font-medium">Interactivity (State, onClick)</td>
                      <td className="p-4">Not supported</td>
                      <td className="p-4">Primary use case</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">SEO Friendliness</td>
                      <td className="p-4">Excellent (fully pre-rendered)</td>
                      <td className="p-4">Excellent (initial HTML is complete) <button className="info-btn" data-modal-title="Client Components & SEO" data-modal-content="A common misconception is that 'use client' is bad for SEO. This is false. Client components are also pre-rendered on the server to static HTML. The 'use client' directive simply tells Next.js to also send the component's JS to the browser to make it interactive (a process called hydration). Crawlers see the complete initial HTML.">ⓘ</button></td>
                    </tr>
                  </tbody>
                </table>
             </div>
             <div className="p-4 md:p-6 bg-sky-50 border border-sky-200 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-sky-800">Example: The "Island" Architecture</h3>
                <p className="mt-2 text-slate-700 text-sm md:text-base">Keep Client Components as small and isolated as possible. Here, a mostly static `ProductPage` (Server Component) renders an interactive `AddToCartButton` (Client Component). This minimizes the client-side JavaScript bundle.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// app/products/[slug]/page.tsx (Server Component)
import AddToCartButton from '@/components/add-to-cart-button';

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton productId={product.id} />
    </div>
  );
}`}</code>
                  </pre>
                   <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// components/add-to-cart-button.tsx (Client Component)
'use client';

import { useState } from 'react';

export default function AddToCartButton({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <button onClick={() => addToCart(productId, quantity)}>
      Add to Cart
    </button>
  );
}`}</code>
                   </pre>
                </div>
             </div>
          </section>

          {/* Crawlers Section */}
          <section id="crawlers" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Directing the Crawlers</h2>
            <p className="text-base md:text-lg text-slate-600">While metadata gives implicit signals, `sitemap.xml` and `robots.txt` provide explicit instructions to search engines. These files tell crawlers what content exists, how to find it, and which areas to avoid. Next.js streamlines their creation with file-based conventions.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6 space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold">Dynamic Sitemaps: `sitemap.ts`</h3>
                    <p className="text-sm md:text-base">A sitemap is a roadmap for crawlers. Create <code>app/sitemap.ts</code> and export an async function that returns an array of all your site's URLs. For dynamic routes, fetch all items (e.g., all post slugs) and map them to the correct URL structure.</p>
                     <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// app/sitemap.ts
import { getAllPosts } from '@/lib/posts';

export default async function sitemap() {
  const posts = await getAllPosts();
  const postRoutes = posts.map(post => ({
    url: \`https://yourapp.com/posts/\${post.slug}\`,
    lastModified: post.lastModified,
  }));
  
  return [
    { url: 'https://yourapp.com', lastModified: new Date() },
    ...postRoutes,
  ];
}`}</code>
                   </pre>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6 space-y-4">
                     <h3 className="text-lg md:text-xl font-semibold">Controlling Access: `robots.ts`</h3>
                    <p className="text-sm md:text-base">The `robots.txt` file tells crawlers which paths they can or cannot access. Create <code>app/robots.ts</code> to generate this file dynamically. It's crucial for blocking private areas like admin panels and specifying your sitemap's location.</p>
                    <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://yourapp.com/sitemap.xml',
  };
}`}</code>
                   </pre>
                </div>
            </div>
             <div className="mt-6 bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Sitemap Index for Large Sites</h3>
                <p className="text-sm md:text-base">For sites with over 50,000 URLs, you must create a sitemap index file. Next.js does not do this automatically. You use `generateSitemaps` to create the individual sitemap files, then manually create the root index file.</p>
                <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// app/sitemap.xml/route.ts
// Manually create the root sitemap index file.
import { getServerSideSitemapIndex } from 'next-sitemap';

export async function GET(request: Request) {
  // Method to get all sitemap URLs
  // This could be from a database or a file system
  const sitemaps = ['https://.../sitemap-products-1.xml', 'https://.../sitemap-posts-1.xml'];
  return getServerSideSitemapIndex(sitemaps);
}`}</code>
                   </pre>
            </div>
          </section>

          {/* Advanced Strategies Section */}
          <section id="advanced-strategies" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Advanced SEO Strategies</h2>
            <p className="text-base md:text-lg text-slate-600">Beyond the fundamentals, Next.js enables powerful, advanced strategies that can provide a significant competitive advantage. This section explores programmatic SEO, leveraging edge middleware, and connecting your technical implementation to a broader content strategy.</p>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div id="advanced-tabs" className="flex border-b border-slate-200 p-2 bg-slate-50/50 rounded-t-lg flex-wrap">
                <button data-target="p-seo" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100 active">Programmatic SEO</button>
                <button data-target="edge-seo" className="tab-btn flex-1 p-2 rounded-md font-medium text-sm text-slate-600 border-2 border-transparent hover:bg-slate-100">Edge SEO</button>
              </div>
              <div className="p-4 md:p-6">
                <div id="p-seo" className="tab-content space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold">Programmatic SEO (pSEO)</h3>
                  <p className="text-sm md:text-base">pSEO is the practice of creating thousands of pages programmatically from a dataset. Next.js is exceptionally well-suited for this. The `generateStaticParams` function allows you to pre-render all these pages at build time, resulting in a massive, statically-generated, and highly performant site that can target countless long-tail keywords.</p>
                  <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                    <code>{`// app/locations/[city]/page.tsx
export async function generateStaticParams() {
  const cities = await getAllCities();
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export default function CityPage({ params }) {
  return <div>Welcome to {params.city}!</div>;
}`}</code>
                  </pre>
                </div>
                <div id="edge-seo" className="tab-content space-y-4 hidden">
                  <h3 className="text-lg md:text-xl font-semibold">Edge SEO with Middleware</h3>
                  <p className="text-sm md:text-base">Next.js Middleware runs on the "edge" before a request is completed. This allows you to implement powerful SEO logic without affecting the core application code.</p>
                  <ul className="list-disc list-inside space-y-3">
                    <li><strong>A/B Testing:</strong> Segment incoming traffic into buckets and rewrite them to different page variants to test which titles, copy, or layouts perform better in search.</li>
                    <li><strong>Geo-IP Targeting:</strong> Detect the user's country from the request and redirect them to the correct localized version of your site, improving local SEO relevance. This can be combined with pSEO to serve dynamic content (e.g., "Best Restaurants near you in [City]") while still serving a static shell.</li>
                    <li><strong>Dynamic Redirects:</strong> Manage redirects for legacy URLs or marketing campaigns directly at the edge for maximum performance.</li>
                  </ul>
                   <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle redirects, headers, etc.
  return NextResponse.next();
}`}</code>
                   </pre>
                </div>
              </div>
            </div>
          </section>
          
          {/* I18n Section */}
          <section id="i18n" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Internationalization (i18n)</h2>
             <p className="text-base md:text-lg text-slate-600">For a global audience, i18n is critical for SEO. This involves structuring your site to serve the correct language to the correct users and using `hreflang` tags to signal these language variations to search engines.</p>
             <div className="p-4 md:p-6 bg-white border border-slate-200 rounded-lg space-y-6">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Key i18n Implementation Steps</h3>
                    <ol className="list-decimal list-inside space-y-4 mt-4 text-sm md:text-base">
                      <li>
                        <h4 className="font-semibold inline">Use Sub-path Routing:</h4>
                        <p className="pl-6 text-slate-600">Structure your app directory under a dynamic `[lang]` segment (e.g., `app/[lang]/page.tsx`). This is simpler to manage than subdomains.</p>
                      </li>
                      <li>
                        <h4 className="font-semibold inline">Create Middleware for Locale Detection:</h4>
                        <p className="pl-6 text-slate-600">A `middleware.ts` file in your project root should detect the user's language from request headers and redirect them to the correct path (e.g., `/` to `/en`).</p>
                      </li>
                      <li>
                        <h4 className="font-semibold inline">Implement `hreflang` Tags:</h4>
                        <p className="pl-6 text-slate-600">In `generateMetadata`, use the `alternates.languages` object to tell search engines about all available language versions of a page. This prevents duplicate content issues and helps serve the correct language in search results.</p>
                      </li>
                    </ol>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Example: Managing Dictionaries</h3>
                    <p className="mt-2 text-slate-600 text-sm md:text-base">A common pattern is to store translations in JSON files and create a helper function to load the correct dictionary based on the `lang` parameter.</p>
                     <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs md:text-sm overflow-x-auto">
                     <code>{`// dictionaries/en.json
{
  "about": {
    "title": "About Us"
  }
}

// dictionaries/es.json
{
  "about": {
    "title": "Sobre Nosotros"
  }
}

// app/[lang]/about/page.tsx
import { getDictionary } from '@/lib/get-dictionary'

export default async function AboutPage({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return <h1>{dict.about.title}</h1>;
}`}</code>
                   </pre>
                </div>
             </div>
          </section>
          
          {/* Monitoring Section */}
          <section id="monitoring" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Monitoring & Analytics</h2>
            <p className="text-base md:text-lg text-slate-600">SEO is a continuous process. This section covers the essential tools for monitoring how search engines see your site, diagnosing issues, and tracking performance over time.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6 space-y-4">
                 <h3 className="text-lg md:text-xl font-semibold">Google Search Console (GSC)</h3>
                <p className="text-sm md:text-base">GSC is a free, indispensable tool. After verifying your site (DNS TXT record is best), you must regularly monitor these key reports:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Performance:</strong> Tracks clicks, impressions, and queries.</li>
                  <li><strong>Pages (Indexing):</strong> Shows which pages are indexed and why others are not.</li>
                  <li><strong>Sitemaps:</strong> Confirms Google can parse your sitemap.</li>
                  <li><strong>Core Web Vitals:</strong> Real-user performance data.</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Analytics: Vercel vs. Google</h3>
                <p className="text-sm md:text-base">While GSC shows search performance, on-site analytics track user behavior.</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Vercel Analytics</h4>
                  <p className="text-sm text-slate-600">A privacy-focused, cookieless, and lightweight option. Great for developers who need core traffic insights without impacting performance.</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Google Analytics</h4>
                  <p className="text-sm text-slate-600">A powerful, complex tool for deep marketing analysis and conversion tracking. More invasive and has a higher performance cost.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section id="comparison" className="content-section space-y-4 md:space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Framework Comparison</h2>
            <p className="text-base md:text-lg text-slate-600">Modern frameworks have largely solved fundamental SEO. The choice is now about architectural fit. Here's how Next.js compares to other popular frameworks on key SEO-related axes.</p>
             <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">High-Level SEO Feature Comparison</h3>
                <div className="chart-container">
                  <canvas id="frameworkComparisonChart"></canvas>
                </div>
                <p id="comparison-text" className="mt-6 text-center text-sm md:text-base text-slate-600 italic">Hover over a point on the chart to see details about each framework's philosophy.</p>
             </div>
          </section>
          
          {/* Checklist Section */}
          <section id="checklist" className="content-section space-y-6 hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">The Ultimate Next.js SEO Checklist</h2>
            <p className="text-base md:text-lg text-slate-600">Use this interactive checklist to track your implementation of key SEO best practices in your Next.js application. Checking items will help you ensure all critical aspects are covered.</p>
            
            <div id="checklist-container" className="space-y-8">
              {/* Checklist will be dynamically generated here */}
            </div>
          </section>
        </div>
      </main>
      <Modal />
    </div>
  );
}
