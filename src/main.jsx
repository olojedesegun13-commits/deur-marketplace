import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Camera,
  Check,
  ChevronRight,
  CreditCard,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Truck,
  UserCheck,
  WalletCards,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const categories = [
  { name: 'Market Runs', icon: Store, jobs: '1,240+', hint: 'Groceries, open market buying, receipts & proof' },
  { name: 'Personal Assistant', icon: CalendarCheck, jobs: '830+', hint: 'Day, month, yearly support for busy people' },
  { name: 'Delivery & Pickup', icon: Truck, jobs: '2,100+', hint: 'Documents, parcels, store pickup, dispatch' },
  { name: 'Digital Services', icon: Zap, jobs: '3,900+', hint: 'Design, editing, writing, websites, automation' },
  { name: 'Creative Studio', icon: Camera, jobs: '760+', hint: 'Photo, video, reels, motion graphics, CGI' },
  { name: 'Business Support', icon: BriefcaseBusiness, jobs: '1,050+', hint: 'Admin, virtual assistants, research, data entry' },
];

const gigs = [
  {
    title: 'Verified market run with receipt, photos, and same-day delivery',
    category: 'Market Runs',
    location: 'Lagos Island, Lagos',
    price: 'From ₦8,500',
    rating: '4.9',
    reviews: '216',
    seller: 'Amina R.',
    badge: 'ID Verified',
    image: 'linear-gradient(135deg, #16a34a, #bef264)',
  },
  {
    title: 'Personal assistant for errands, scheduling, follow-ups, and field tasks',
    category: 'Personal Assistant',
    location: 'Lekki, Lagos',
    price: 'From ₦25,000/day',
    rating: '5.0',
    reviews: '88',
    seller: 'Tobi A.',
    badge: 'Safety Checked',
    image: 'linear-gradient(135deg, #0f172a, #22c55e)',
  },
  {
    title: '3D motion promo video for fintech, real estate, and product launches',
    category: 'Digital Services',
    location: 'Remote',
    price: 'From ₦280,000',
    rating: '4.8',
    reviews: '142',
    seller: 'MotionLab',
    badge: 'Pro Seller',
    image: 'linear-gradient(135deg, #111827, #34d399)',
  },
  {
    title: 'Property inspection, photo proof, and maintenance supervision',
    category: 'Property Help',
    location: 'Abuja',
    price: 'From ₦35,000',
    rating: '4.9',
    reviews: '64',
    seller: 'Deji K.',
    badge: 'Verified Agent',
    image: 'linear-gradient(135deg, #047857, #fef3c7)',
  },
];

const clientPlans = [
  {
    name: 'Free Browse',
    price: '₦0',
    period: '/mo',
    description: 'Explore Deur before paying.',
    features: ['Browse services', 'View categories', 'Limited search', 'No hiring or messaging'],
    fee: 'Cannot hire',
    cta: 'Start browsing',
  },
  {
    name: 'Client Access',
    price: '₦2,500',
    period: '/mo',
    description: 'For people who need trusted help occasionally.',
    features: ['Post up to 5 jobs/month', 'Hire verified providers', 'Escrow protection', 'In-app messaging', 'Basic safety support'],
    fee: '5% safety & service fee',
    cta: 'Choose Access',
    featured: true,
  },
  {
    name: 'Client Plus',
    price: '₦5,000',
    period: '/mo',
    description: 'For families, founders, and frequent task posters.',
    features: ['Unlimited job posts', 'Priority provider matching', 'Recurring errands', 'Favorite providers', 'Better dispute support'],
    fee: '3% safety & service fee',
    cta: 'Choose Plus',
  },
];

const providerPlans = [
  {
    name: 'Starter',
    price: '₦0',
    period: '/mo',
    description: 'For new providers testing the marketplace.',
    features: ['Create verified profile', 'Browse jobs', '3 applications/month', 'Standard ranking'],
    fee: '15% platform success fee',
    cta: 'Start as provider',
  },
  {
    name: 'Provider Pro',
    price: '₦5,000',
    period: '/mo',
    description: 'Best for active earners on Deur.',
    features: ['Unlimited applications', 'Better search visibility', 'Direct bookings', 'Portfolio uploads', 'Faster payout eligibility'],
    fee: '10% platform success fee',
    cta: 'Go Pro',
    featured: true,
  },
  {
    name: 'Elite',
    price: '₦12,000',
    period: '/mo',
    description: 'For top providers, teams, and agencies.',
    features: ['Premium placement', 'Advanced analytics', 'Multiple listings', 'Priority matching', 'Dedicated support'],
    fee: '7.5% platform success fee',
    cta: 'Become Elite',
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ['Explore', 'How it works', 'Safety', 'Pricing'];
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Deur home">
        <span className="brand-mark">D</span>
        <span><strong>DEUR</strong><small>Opening doors for everyone</small></span>
      </a>
      <nav className="desktop-nav">
        {nav.map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
      </nav>
      <div className="desktop-actions">
        <a className="ghost-link" href="#signin">Sign in</a>
        <a className="btn btn-dark" href="#pricing">Join Deur</a>
      </div>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="mobile-panel">
          {nav.map((item) => <a onClick={() => setOpen(false)} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
          <a href="#signin">Sign in</a>
          <a className="btn btn-dark" href="#pricing">Join Deur</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><ShieldCheck size={18} /> Escrow protected • Verified people • Real-world safety</div>
        <h1>Get trusted help for anything — online or around you.</h1>
        <p>Hire verified people for errands, market runs, personal assistance, creative work, property help, business support, and everyday services.</p>
        <div className="search-card">
          <label><Search size={20} /><input placeholder="What do you need help with?" /></label>
          <label><MapPin size={20} /><input placeholder="Where? Lagos, Abuja, Remote..." /></label>
          <button>Find Help</button>
        </div>
        <div className="quick-tags">
          {['Market errands', 'Personal assistant', 'Logo design', 'Property inspection'].map(tag => <a href="#explore" key={tag}>{tag}</a>)}
        </div>
      </div>
      <div className="hero-visual" aria-label="Marketplace preview">
        <div className="floating-card top-card"><span className="status-dot"></span><div><strong>Escrow funded</strong><small>Provider starts after secure payment</small></div></div>
        <div className="phone-card">
          <div className="phone-bar"></div>
          <div className="job-preview">
            <span>Recommended for you</span>
            <h3>Personal assistant for a full workday</h3>
            <p>Lekki, Lagos • ID verified • proof required</p>
            <div className="job-meta"><strong>₦25,000/day</strong><em>4.9 ★</em></div>
          </div>
          <div className="mini-grid">
            <div><UserCheck /><span>ID check</span></div>
            <div><MessageCircle /><span>Chat</span></div>
            <div><WalletCards /><span>Escrow</span></div>
            <div><BadgeCheck /><span>Proof</span></div>
          </div>
        </div>
        <div className="floating-card bottom-card"><Sparkles size={22} /><div><strong>Gemini AI matching</strong><small>Turn needs into clear job posts</small></div></div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section id="explore" className="section-shell section-block">
      <div className="section-heading">
        <span className="kicker">Explore Deur</span>
        <h2>One marketplace for digital gigs and real-life tasks.</h2>
        <p>Deur goes beyond normal freelance websites by supporting verified local work, errands, assistants, and field services.</p>
      </div>
      <div className="category-grid">
        {categories.map(({ name, icon: Icon, jobs, hint }) => (
          <article className="category-card" key={name}>
            <div className="icon-wrap"><Icon size={24} /></div>
            <h3>{name}</h3>
            <p>{hint}</p>
            <span>{jobs} active requests</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function GigCard({ gig }) {
  return (
    <article className="gig-card">
      <div className="gig-image" style={{ background: gig.image }}><span>{gig.category}</span></div>
      <div className="gig-body">
        <div className="seller-row"><strong>{gig.seller}</strong><span><BadgeCheck size={14} />{gig.badge}</span></div>
        <h3>{gig.title}</h3>
        <p><MapPin size={15} /> {gig.location}</p>
        <div className="rating"><Star size={16} fill="currentColor" /> {gig.rating} <small>({gig.reviews})</small></div>
        <div className="gig-footer"><span>{gig.price}</span><button>View</button></div>
      </div>
    </article>
  );
}

function Marketplace() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Market Runs', 'Personal Assistant', 'Digital Services', 'Property Help'];
  const visible = useMemo(() => filter === 'All' ? gigs : gigs.filter(gig => gig.category === filter), [filter]);
  return (
    <section className="marketplace section-shell section-block">
      <div className="marketplace-top">
        <div><span className="kicker">Fiverr-inspired browsing</span><h2>Popular trusted services</h2></div>
        <a href="#pricing" className="text-link">Post a job <ChevronRight size={18} /></a>
      </div>
      <div className="filters">{filters.map(item => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
      <div className="gig-grid">{visible.map(gig => <GigCard gig={gig} key={gig.title} />)}</div>
    </section>
  );
}

function Safety() {
  const items = [
    ['Identity verification', 'Government ID, profile checks, provider badges, and verification tiers.'],
    ['Escrow-protected payments', 'Clients fund jobs first. Providers receive payout after completion confirmation.'],
    ['Real-world proof system', 'Photos, receipts, signatures, timestamps, and location-aware job updates.'],
    ['Safety office', 'Reports, disputes, emergency contacts, blocked users, and admin review queue.'],
  ];
  return (
    <section id="safety" className="safety section-shell section-block">
      <div className="safety-panel">
        <div className="section-heading left"><span className="kicker">Built for safety</span><h2>Not just convenience. Trust, life, and property matter.</h2><p>Because Deur includes real-world errands and personal assistance, safety cannot be an afterthought. It is part of the product.</p></div>
        <div className="safety-list">{items.map(([title, copy]) => <div className="safety-item" key={title}><ShieldCheck /><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['Search or post', 'Describe what you need. Gemini-powered suggestions can turn rough requests into clean job posts.'],
    ['Subscribe to unlock', 'Browse free. Subscribe when you are ready to message, post, hire, or accept work.'],
    ['Fund escrow', 'Payment is held safely while both parties agree on scope, timing, and proof requirements.'],
    ['Complete & review', 'Provider submits proof. Client confirms. Deur releases payout and stores ratings.'],
  ];
  return (
    <section id="how-it-works" className="section-shell section-block">
      <div className="section-heading"><span className="kicker">How it works</span><h2>A simple flow for online and offline jobs.</h2></div>
      <div className="steps-grid">{steps.map(([title, copy], index) => <article className="step-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <article className={`plan-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <div className="popular">Best value</div>}
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
      <div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div>
      <div className="fee"><CreditCard size={17} /> {plan.fee}</div>
      <ul>{plan.features.map(feature => <li key={feature}><Check size={17} />{feature}</li>)}</ul>
      <button className={plan.featured ? 'btn btn-green' : 'btn btn-light'}>{plan.cta}</button>
    </article>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="pricing section-shell section-block">
      <div className="section-heading"><span className="kicker">Subscriptions + commission</span><h2>Browse free. Subscribe to work, hire, message, and use escrow.</h2><p>Deur earns through subscriptions and fair transaction fees. Free providers pay higher commission; paid providers keep more.</p></div>
      <div className="pricing-group"><div className="pricing-title"><h3>For clients posting gigs</h3><span>Recommended client fee: 3%–5%</span></div><div className="plans-grid">{clientPlans.map(plan => <PlanCard plan={plan} key={plan.name} />)}</div></div>
      <div className="pricing-group"><div className="pricing-title"><h3>For providers wanting gigs</h3><span>Commission decreases as providers upgrade</span></div><div className="plans-grid">{providerPlans.map(plan => <PlanCard plan={plan} key={plan.name} />)}</div></div>
    </section>
  );
}

function CTA() {
  return <section className="cta section-shell"><div><span className="kicker">Launch direction</span><h2>Start with Lagos/Nigeria. Build trust first. Expand after the model works.</h2><p>Use Paystack subscriptions, escrow-like milestone payments, Supabase authentication, and Gemini AI for matching and job-writing support.</p></div><div className="cta-actions"><a href="#pricing" className="btn btn-dark">Join Deur</a><a href="#explore" className="btn btn-light">Explore services</a></div></section>;
}

function Footer() {
  return <footer className="footer section-shell"><div className="brand footer-brand"><span className="brand-mark">D</span><span><strong>DEUR</strong><small>Opening doors for everyone</small></span></div><div className="footer-links"><a>Trust & Safety</a><a>Pricing</a><a>Become a Provider</a><a>Help</a></div><p>© 2026 Deur. Prototype website UI for a trusted services marketplace.</p></footer>;
}

function App() {
  return <><Header /><main><Hero /><CategoryGrid /><Marketplace /><Safety /><HowItWorks /><Pricing /><CTA /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
