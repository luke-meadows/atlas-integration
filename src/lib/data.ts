import { media } from '@/lib/media';

export const focusItems = [
  {
    title: 'Web-to-Contract Salesforce delivery',
    desc: 'From website strategy and conversion design through to Lead → Opportunity → Order → Contract. A joined-up journey that removes manual handoffs and improves data quality.',
    bullets: [
      'Web strategy + forms + tracking',
      'Routing, automation, governance',
      'Order/Contract flows (as required)',
    ],
  },
  {
    title: 'Agentforce automation that sticks',
    desc: 'Practical AI and agent workflows that reduce admin and keep deals moving—built with evidence-first guardrails and measurable outcomes.',
    bullets: [
      'Opportunity summaries & status',
      'Qualification signals & scoring',
      'Next-step coaching & nudges',
    ],
  },
  {
    title: 'HubSpot across the full suite',
    desc: 'Marketing, Sales, Service, CMS and Ops Hub—implemented with clean CRM foundations, lifecycle clarity and reporting your leadership can trust.',
    bullets: [
      'Lifecycle + attribution model',
      'Automations and pipelines',
      'Sync patterns with Salesforce',
    ],
  },
];

export const services = [
  {
    title: 'Salesforce Implementation & Optimisation',
    desc: 'Sales Cloud, Service Cloud and platform build—clean data model, sensible automation, fast UX and reporting that answers real questions.',
    bullets: [
      'Lead/Opportunity design',
      'Automation (Flow/Apex)',
      'Dashboards & governance',
    ],
  },
  {
    title: 'Web-to-Contract Architecture',
    desc: 'We design the end-to-end journey from web enquiry to signed agreement—so sales teams work from a single source of truth.',
    bullets: [
      'Lead capture & enrichment',
      'CPQ/Order patterns (where needed)',
      'Contract lifecycle & handover',
    ],
  },
  {
    title: 'Agentforce & AI Enablement',
    desc: 'AI summaries, scoring, and agent-led workflows that reduce admin and surface the right next action—without making things fragile.',
    bullets: [
      'Engagement summaries',
      'Weighted scoring & tips',
      'Task creation & follow-ups',
    ],
  },
  {
    title: 'HubSpot (Marketing, Sales, Service, CMS, Ops)',
    desc: 'A full HubSpot capability—implemented with clarity: lifecycle stages, properties, pipelines, reporting, and automation built to scale.',
    bullets: [
      'CRM + pipeline setup',
      'Marketing automation',
      'CMS templates + governance',
    ],
  },
  {
    title: 'Integrations & Data',
    desc: 'Connect Salesforce and HubSpot to the systems around them—ERP, finance, product, support, data warehouse—with strong monitoring and error handling.',
    bullets: [
      'Integration architecture',
      'Sync rules & dedupe',
      'Data migration & quality',
    ],
  },
  {
    title: 'Custom Components & Delivery Support',
    desc: 'LWCs and platform utilities that reduce clicks, enforce process, and improve adoption. Senior-led delivery without big-consultancy overhead.',
    bullets: [
      'LWC productivity tools',
      'Enablement & training',
      'Managed support retainer',
    ],
  },
];

export const agentforceExamples = [
  {
    title: 'AI Engagement Summary (Opportunity)',
    summary:
      'Ingests emails, tasks, events and calls to produce a clean timeline and an engagement status (Engaged / Not engaged / Waiting / Response received).',
    outcomes: [
      'Instant context for AEs',
      'Visibility into hidden activity',
      'Clear next comms gaps',
    ],
  },
  {
    title: 'Weighted AI Opportunity Scoring',
    summary:
      'Measures engagement frequency and analyses email/transcript content to surface qualification signals (e.g. Budget, Authority, Need, Timeline) and generate next steps and coaching tips.',
    outcomes: [
      'Prioritise pipeline focus',
      'Catch stalling deals early',
      'Reduce manual note-taking',
    ],
  },
  {
    title: 'Agent-led follow-ups & hygiene',
    summary:
      'Agents prompt for missing fields, suggest actions, create tasks, and keep stages aligned—so the CRM stays accurate without constant chasing.',
    outcomes: ['Cleaner data', 'Higher adoption', 'More reliable forecasting'],
  },
];

export const hubspotCapabilities = [
  {
    title: 'Marketing Hub',
    bullets: [
      'Lifecycle & attribution foundations',
      'Lead capture, nurturing, scoring',
      'Campaign reporting & governance',
    ],
  },
  {
    title: 'Sales Hub',
    bullets: [
      'Pipelines, playbooks, sequences',
      'Meeting booking + routing',
      'Forecasting and activity reporting',
    ],
  },
  {
    title: 'Service Hub',
    bullets: [
      'Ticketing, SLAs, knowledge base',
      'Omni-channel + self-serve journeys',
      'CSAT/NPS and service reporting',
    ],
  },
  {
    title: 'CMS Hub',
    bullets: [
      'High-performance templates',
      'Content model + permissions',
      'SEO + conversion best practices',
    ],
  },
  {
    title: 'Operations Hub',
    bullets: [
      'Data sync & automation',
      'Data quality workflows',
      'Process orchestration',
    ],
  },
];

export const industries = [
  {
    title: 'Construction, Trades & Infrastructure',
    desc: 'Complex operations, long buying cycles, multiple stakeholders. We build CRM journeys that reduce friction—from enquiry to contract and delivery handover.',
    bullets: [
      'Project-focused sales flows',
      'Multi-division routing',
      'Operational handover clarity',
    ],
  },
  {
    title: 'Manufacturing & Industrial',
    desc: 'Cleaner pipeline, better product/service visibility, and less admin for teams managing complex quoting and fulfilment processes.',
    bullets: [
      'Structured qualification',
      'Automation & approvals',
      'Reporting leadership trusts',
    ],
  },
  {
    title: 'B2B Services',
    desc: 'From lead intake to renewals—make lifecycle stages, SLAs and reporting consistent across teams.',
    bullets: [
      'Lifecycle clarity',
      'HubSpot + Salesforce alignment',
      'Process governance',
    ],
  },
  {
    title: 'All industries',
    desc: 'If you need Salesforce and HubSpot to run like an operating system—not a spreadsheet—we can help.',
    bullets: ['Practical delivery', 'Clean integrations', 'Adoption-first UX'],
  },
];

export const caseStudies = [
  {
    title: 'Web-to-Contract rebuild for a multi-site operator',
    tag: 'Salesforce Journey',
    summary:
      'Rebuilt lead intake, routing and opportunity process to reduce admin and improve speed-to-quote across multiple divisions.',
    image: media.work.w1,
    metrics: [
      'Routing clarity & SLAs',
      'Cleaner pipeline stages',
      'Improved reporting accuracy',
    ],
  },
  {
    title: 'Agentforce engagement summaries & next-step guidance',
    tag: 'Agentforce',
    summary:
      'Delivered opportunity-level summaries and engagement status so AEs see the full story without digging through activity records.',
    image: media.work.w2,
    metrics: [
      'Faster context switching',
      'Better follow-up quality',
      'Reduced manual updates',
    ],
  },
  {
    title: 'HubSpot suite rollout with Salesforce alignment',
    tag: 'HubSpot',
    summary:
      'Implemented lifecycle model, properties and reporting across hubs, with governance and sync patterns for shared truth.',
    image: media.work.w3,
    metrics: [
      'Lifecycle clarity',
      'Reliable attribution',
      'Clean handoffs to Sales',
    ],
  },
  {
    title: 'Integration foundation with monitoring & error handling',
    tag: 'Integrations',
    summary:
      'Designed integration patterns with clear ownership, retry strategy and alerts—reducing silent failures and data drift.',
    image: media.work.w4,
    metrics: [
      'Error visibility',
      'Data quality guardrails',
      'Sensible ownership model',
    ],
  },
];

export const processSteps = [
  {
    title: 'Discovery',
    desc: 'Goals, stakeholders, systems map, process pain points, success metrics. Clear scope and priorities.',
  },
  {
    title: 'Design',
    desc: 'Lifecycle, routing, governance, data model and UX. We keep it maintainable—no fragile complexity.',
  },
  {
    title: 'Build',
    desc: 'Configuration, automation, components, integrations and reporting. Evidence-first AI patterns for Agentforce.',
  },
  {
    title: 'Launch',
    desc: 'Staging → UAT → cutover. Monitoring, training, runbooks and adoption support.',
  },
  {
    title: 'Improve',
    desc: 'Iterate with metrics: conversion, speed-to-lead, pipeline hygiene, adoption and forecast confidence.',
  },
];

export const faqs = [
  {
    q: 'Do you build the website too?',
    a: 'Yes. We can deliver web strategy/design and the lead capture layer, then connect it into Salesforce/HubSpot with clean routing, tracking and governance.',
  },
  {
    q: 'What does Web-to-Contract actually include?',
    a: 'Typically: web enquiry → lead capture/enrichment → routing → opportunity stages → quoting/order patterns (where needed) → contract creation and handover to delivery/service.',
  },
  {
    q: 'How do you approach Agentforce safely?',
    a: 'We use evidence-first guardrails: agents only use approved data sources, log their outputs, and we measure adoption and impact. No ‘magic’ automations that can’t be explained.',
  },
  {
    q: 'Can you work with existing Salesforce/HubSpot setups?',
    a: 'Yes. We usually start with a fast assessment, then refactor the highest-impact areas: routing, automation, data quality, and reporting.',
  },
];
