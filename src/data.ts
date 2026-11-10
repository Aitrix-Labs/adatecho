export const brand = {
  name: 'adatecho',
  display: 'Adatecho',
  tagline: 'AI Customer Service Agents for Enterprise CX',
}

export const nav = [
  {
    label: 'Platform',
    items: [
      { title: 'Overview', body: 'Measure, test, coach, and extend your AI agent at scale', to: '/platform' },
      { title: 'Adatecho Computer', body: 'Give your AI agent the tools to complete customer tasks', to: '/platform#computer' },
      { title: 'Playbooks', body: 'Automate your complex SOPs with agentic AI', to: '/platform#playbooks' },
      { title: 'Integrations', body: 'Connect systems to personalize every interaction', to: '/platform#integrations' },
      { title: 'Trust & Safety', body: 'Scale enterprise AI with confidence', to: '/trust' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { title: 'Betting & Gaming', body: '', to: '/industries/betting-gaming' },
      { title: 'Ecommerce', body: '', to: '/industries/ecommerce' },
      { title: 'Financial Services', body: '', to: '/industries/financial-services' },
      { title: 'Health Insurance', body: '', to: '/industries/health-insurance' },
      { title: 'Property & Casualty Insurance', body: '', to: '/industries/property-insurance' },
      { title: 'SaaS', body: '', to: '/industries/technology' },
      { title: 'Travel', body: '', to: '/industries/travel' },
    ],
  },
  {
    label: 'Customers',
    items: [
      { title: 'Customer stories', body: 'See how 350+ businesses delivered exceptional customer service', to: '/customers' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { title: 'Blog', body: 'Our best advice plus actionable insights to transform your CX', to: '/blog' },
      { title: 'Research', body: 'Timely market data to help you execute, grow, and evolve your ACX strategy', to: '/resources' },
      { title: 'Events', body: 'Curated moments for a global community of CX leaders', to: '/resources#events' },
      { title: 'Resource library', body: 'Expert guides, reports, and playbooks', to: '/resources' },
    ],
  },
]

export const hero = {
  partners: 'adatecho + dialpad',
  title: 'The Future of Customer Work Starts Now',
  body: 'A new kind of customer communications company, built to bring people and AI agents together to do more for every customer.',
  cta: 'See the full announcement',
  ctaTo: '/company',
}

export const elevate = {
  title: 'Elevate your CX with AI agents proven to outperform humans',
  stats: [
    { value: '8×', label: 'More productive than human agents' },
    { value: '162%', label: 'Increase in CSAT scores' },
    { value: '357%', label: 'ROI on AI investment' },
    { value: '84%', label: 'Automated resolution rate' },
  ],
}

export const liveCounter = {
  eyebrow: 'Live · right now across Adatecho',
  label: 'Total engaged customer conversations',
  base: 4_127_134_593,
}

export const outcomes = {
  title: 'Measured outcomes across 350+ global businesses',
  items: [
    { value: '80%', label: 'CSAT after automating support', to: '/customers' },
    { value: '400', label: 'FTE workload managed by their AI agent', to: '/customers' },
    { value: '42%', label: 'Lower average handle time', to: '/customers' },
    { value: '$2.7M', label: 'Estimated annual savings', to: '/customers' },
    { value: '90%', label: 'More agent availability', to: '/customers' },
    { value: '60K', label: 'Human labor hours saved per month', to: '/customers' },
  ],
}

export const industries = {
  title: 'AI purpose-built for your industry’s toughest challenges',
  tabs: [
    {
      id: 'financial',
      label: 'Financial services',
      href: '/industries/financial-services',
      metrics: [
        { value: '7M', label: 'Users' },
        { value: '15%', label: 'Improvement in customer satisfaction' },
      ],
    },
    {
      id: 'gaming',
      label: 'Betting & gaming',
      href: '/industries/betting-gaming',
      metrics: [
        { value: '45%', label: 'Interactions resolved by Adatecho' },
        { value: '90%', label: 'More agent availability for high-value interactions' },
      ],
    },
    {
      id: 'retail',
      label: 'Retail & ecommerce',
      href: '/industries/ecommerce',
      metrics: [
        { value: '$2.7M', label: 'Estimated annual savings' },
        { value: '816,446', label: 'Engaged conversations' },
      ],
    },
    {
      id: 'tech',
      label: 'Technology',
      href: '/industries/technology',
      metrics: [
        { value: '42%', label: 'Reduction in average agent handle time' },
        { value: '225,000+', label: 'Active customers' },
      ],
    },
    {
      id: 'travel',
      label: 'Travel',
      href: '/industries/travel',
      metrics: [
        { value: '34%+', label: 'Higher automated resolution with generative AI' },
        { value: '<1 min', label: 'Wait times for high-priority support cases' },
      ],
    },
  ],
}

export const testimonials = {
  title: 'Trusted by the world’s leading enterprises',
  items: [
    {
      title: 'Deliver extraordinary experiences on all the channels',
      metric: '42%',
      metricLabel: 'Reduction in average agent handle time',
      quote:
        'With Adatecho, we know the automated resolution will continue to improve as the AI agent learns and grows. The responses and the accuracy are phenomenal.',
      author: 'Tal Gulst',
      role: 'Bot manager',
    },
    {
      title: 'Make customer care efficient and deeply human',
      metric: '50%+',
      metricLabel: 'Higher CSAT scores',
      quote:
        'By transforming Charlie into a generative AI agent, we’ve achieved faster resolutions, reduced wait times to under a minute, and over 50% higher CSAT. It’s proof that AI can make customer care both efficient and deeply human.',
      author: 'Candice Iyog',
      role: 'Chief Marketing & Customer Experience Officer',
    },
    {
      title: 'Create more meaningful relationships',
      metric: '60K',
      metricLabel: 'Human labor hours saved per month',
      quote:
        'Customers will actually prefer using automation. Faster, more accurate, more tailored experiences. This isn’t just about efficiency. It’s about a better way to serve customers.',
      author: 'Milan Vanmarcke',
      role: 'Customer Happiness Manager',
    },
    {
      title: 'Grow CX ambition, not cost',
      metric: '$2.7M',
      metricLabel: 'Estimated annual savings',
      quote:
        'Every dollar we save through efficiency gets channeled back into elevating the member experience. That’s how you turn Customer Care from a cost center into a growth driver.',
      author: 'CX Leadership',
      role: 'Enterprise customer',
    },
  ],
}

export const platform = {
  title: 'Power personalized AI experiences at scale with Adatecho’s ACX Platform',
  items: [
    {
      title: 'Continuously improve AI agent performance',
      body: 'Test, analyze, and optimize AI agent performance for continuous improvement with tools built for the enterprise',
    },
    {
      title: 'Deliver omnichannel, multilingual CX',
      body: 'Deploy AI across every channel and language while preserving customer identity, context, and conversation continuity',
    },
    {
      title: 'Extend Adatecho to your enterprise workflows',
      body: 'Integrate seamlessly into your existing tech stack and enterprise workflows with open APIs and SDKs built for enterprise',
    },
    {
      title: 'Smart, accurate, safe, and CX-tuned',
      body: 'Orchestrate multiple LLMs to understand, act, and resolve complex inquiries with accuracy, safety, and consistency',
    },
  ],
}

export const trust = {
  title: 'Battle-tested AI with enterprise-level rigor',
  subtitle: 'Trusted by leading companies across 85+ countries',
  items: [
    {
      title: 'Industry-leading compliance',
      body: 'HIPAA, SOC 2, GDPR, PCI DSS, and AIUC-1 compliance safeguard sensitive data with industry-leading security practices.',
    },
    {
      title: 'Safety and accuracy controls',
      body: 'Built-in safeguards minimize hallucinations, with continuous monitoring to ensure accuracy, alignment, and safe responses.',
    },
    {
      title: 'Privacy by design',
      body: 'High standards for data protection, and zero data retention policies with LLM providers.',
    },
    {
      title: 'Enterprise-grade security',
      body: 'Independent annual penetration testing including LLMs, disaster recovery and business continuity planning.',
    },
  ],
}

export const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', to: '/platform' },
      { label: 'Practice', to: '/platform' },
      { label: 'Experts', to: '/platform' },
      { label: 'Playbooks', to: '/platform#playbooks' },
      { label: 'Integrations', to: '/platform#integrations' },
    ],
  },
  {
    title: 'Channels',
    links: [
      { label: 'Messaging', to: '/platform' },
      { label: 'Voice', to: '/platform' },
      { label: 'Email', to: '/platform' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Betting & Gaming', to: '/industries/betting-gaming' },
      { label: 'Ecommerce', to: '/industries/ecommerce' },
      { label: 'Financial Services', to: '/industries/financial-services' },
      { label: 'Health Insurance', to: '/industries/health-insurance' },
      { label: 'Property Insurance', to: '/industries/property-insurance' },
      { label: 'Technology', to: '/industries/technology' },
      { label: 'Travel', to: '/industries/travel' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'ACX Academy ↗', to: '/resources', external: true },
      { label: 'Blog', to: '/blog' },
      { label: 'Events', to: '/resources' },
      { label: 'Customers', to: '/customers' },
      { label: 'Documentation ↗', to: '/resources', external: true },
      { label: 'Resource Library', to: '/resources' },
    ],
  },
  {
    title: 'Adatecho Labs',
    links: [
      { label: 'Overview', to: '/company' },
      { label: 'Applied AI research', to: '/resources' },
      { label: 'Adatecho Labs blog', to: '/blog' },
      { label: 'Applied AI careers', to: '/company/careers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Adatecho?', to: '/company' },
      { label: 'Careers', to: '/company/careers' },
      { label: 'Media Center', to: '/company' },
      { label: 'Become a partner', to: '/contact' },
      { label: 'Trust center', to: '/trust' },
    ],
  },
]

export const legalLinks = [
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Security ↗', to: '/trust', external: true },
  { label: 'Accessibility', to: '/privacy' },
  { label: 'Status ↗', to: '/trust', external: true },
]
