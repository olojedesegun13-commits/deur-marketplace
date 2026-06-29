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
  FileText,
  Home,
  LayoutDashboard,
  Lock,
  MapPin,
  Menu,
  MessageCircle,
  PlusCircle,
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

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Explore', page: 'explore' },
  { label: 'How it works', page: 'how' },
  { label: 'Safety', page: 'safety' },
  { label: 'Pricing', page: 'pricing' },
];

const categories = [
  { name: 'Market Runs', icon: Store, jobs: '1,240+', hint: 'Groceries, open market buying, receipts & proof' },
  { name: 'Personal Assistant', icon: CalendarCheck, jobs: '830+', hint: 'Day, month, yearly support for busy people' },
  { name: 'Delivery & Pickup', icon: Truck, jobs: '2,100+', hint: 'Documents, parcels, store pickup, dispatch' },
  { name: 'Digital Services', icon: Zap, jobs: '3,900+', hint: 'Design, editing, writing, websites, automation' },
  { name: 'Creative Studio', icon: Camera, jobs: '760+', hint: 'Photo, video, reels, motion graphics, CGI' },
  { name: 'Business Support', icon: BriefcaseBusiness, jobs: '1,050+', hint: 'Admin, virtual assistants, research, data entry' },
];

const gigs = [
  { title: 'Verified market run with receipt, photos, and same-day delivery', category: 'Market Runs', location: 'Lagos Island, Lagos', price: 'From ₦8,500', rating: '4.9', reviews: '216', seller: 'Amina R.', badge: 'ID Verified', image: 'linear-gradient(135deg, #16a34a, #bef264)' },
  { title: 'Personal assistant for errands, scheduling, follow-ups, and field tasks', category: 'Personal Assistant', location: 'Lekki, Lagos', price: 'From ₦25,000/day', rating: '5.0', reviews: '88', seller: 'Tobi A.', badge: 'Safety Checked', image: 'linear-gradient(135deg, #0f172a, #22c55e)' },
  { title: '3D motion promo video for fintech, real estate, and product launches', category: 'Digital Services', location: 'Remote', price: 'From ₦280,000', rating: '4.8', reviews: '142', seller: 'MotionLab', badge: 'Pro Seller', image: 'linear-gradient(135deg, #111827, #34d399)' },
  { title: 'Property inspection, photo proof, and maintenance supervision', category: 'Property Help', location: 'Abuja', price: 'From ₦35,000', rating: '4.9', reviews: '64', seller: 'Deji K.', badge: 'Verified Agent', image: 'linear-gradient(135deg, #047857, #fef3c7)' },
  { title: 'Virtual assistant for admin, calendar, emails, and research support', category: 'Business Support', location: 'Remote', price: 'From ₦90,000/month', rating: '4.7', reviews: '53', seller: 'Nora Desk', badge: 'Pro Seller', image: 'linear-gradient(135deg, #4338ca, #22c55e)' },
  { title: 'Pickup, queue, document submission, and field follow-up agent', category: 'Delivery & Pickup', location: 'Ikeja, Lagos', price: 'From ₦12,000', rating: '4.8', reviews: '101', seller: 'FieldPro', badge: 'ID Verified', image: 'linear-gradient(135deg, #f97316, #2563eb)' },
];

const clientPlans = [
  { name: 'Free Browse', price: '₦0', period: '/mo', description: 'Explore Deur before paying.', features: ['Browse services', 'View categories', 'Limited search', 'No hiring or messaging'], fee: 'Cannot hire', cta: 'Start browsing' },
  { name: 'Client Access', price: '₦2,500', period: '/mo', description: 'For people who need trusted help occasionally.', features: ['Post up to 5 jobs/month', 'Hire verified providers', 'Escrow protection', 'In-app messaging', 'Basic safety support'], fee: '5% safety & service fee', cta: 'Choose Access', featured: true },
  { name: 'Client Plus', price: '₦5,000', period: '/mo', description: 'For families, founders, and frequent task posters.', features: ['Unlimited job posts', 'Priority provider matching', 'Recurring errands', 'Favorite providers', 'Better dispute support'], fee: '3% safety & service fee', cta: 'Choose Plus' },
];

const providerPlans = [
  { name: 'Starter', price: '₦0', period: '/mo', description: 'For new providers testing the marketplace.', features: ['Create verified profile', 'Browse jobs', '3 applications/month', 'Standard ranking'], fee: '15% platform success fee', cta: 'Start as provider' },
  { name: 'Provider Pro', price: '₦5,000', period: '/mo', description: 'Best for active earners on Deur.', features: ['Unlimited applications', 'Better search visibility', 'Direct bookings', 'Portfolio uploads', 'Faster payout eligibility'], fee: '10% platform success fee', cta: 'Go Pro', featured: true },
  { name: 'Elite', price: '₦12,000', period: '/mo', description: 'For top providers, teams, and agencies.', features: ['Premium placement', 'Advanced analytics', 'Multiple listings', 'Priority matching', 'Dedicated support'], fee: '7.5% platform success fee', cta: 'Become Elite' },
];

function Brand({ setPage }) {
  return <button className="brand brand-button" onClick={() => setPage('home')} aria-label="Deur home"><img src="/deur-logo.svg" alt="Deur logo" /><span><strong>DEUR</strong><small>Opening doors for everyone</small></span></button>;
}

function Header({ page, setPage, user, setUser }) {
  const [open, setOpen] = useState(false);
  const go = (next) => { setPage(next); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <header className="site-header">
      <Brand setPage={go} />
      <nav className="desktop-nav">{navItems.map(item => <button className={page === item.page ? 'active' : ''} onClick={() => go(item.page)} key={item.page}>{item.label}</button>)}</nav>
      <div className="desktop-actions">{user ? <><button className="ghost-link" onClick={() => go(user.role === 'provider' ? 'provider-dashboard' : 'client-dashboard')}>Dashboard</button><button className="btn btn-light" onClick={() => { setUser(null); go('home'); }}>Sign out</button></> : <><button className="ghost-link" onClick={() => go('signin')}>Sign in</button><button className="btn btn-dark" onClick={() => go('signup')}>Join Deur</button></>}</div>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      {open && <div className="mobile-panel">{navItems.map(item => <button onClick={() => go(item.page)} key={item.page}>{item.label}</button>)}{user ? <><button onClick={() => go(user.role === 'provider' ? 'provider-dashboard' : 'client-dashboard')}>Dashboard</button><button onClick={() => { setUser(null); go('home'); }}>Sign out</button></> : <><button onClick={() => go('signin')}>Sign in</button><button className="btn btn-dark" onClick={() => go('signup')}>Join Deur</button></>}</div>}
    </header>
  );
}

function Hero({ setPage }) {
  return <section className="hero section-shell"><div className="hero-copy"><div className="eyebrow"><ShieldCheck size={18} /> Escrow protected • Verified people • Real-world safety</div><h1>Get trusted help for anything — online or around you.</h1><p>Hire verified people for errands, market runs, personal assistance, creative work, property help, business support, and everyday services.</p><div className="search-card"><label><Search size={20} /><input placeholder="What do you need help with?" /></label><label><MapPin size={20} /><input placeholder="Where? Lagos, Abuja, Remote..." /></label><button onClick={() => setPage('explore')}>Find Help</button></div><div className="quick-tags">{['Market errands', 'Personal assistant', 'Logo design', 'Property inspection'].map(tag => <button onClick={() => setPage('explore')} key={tag}>{tag}</button>)}</div></div><div className="hero-visual" aria-label="Marketplace preview"><div className="floating-card top-card"><span className="status-dot"></span><div><strong>Escrow funded</strong><small>Provider starts after secure payment</small></div></div><div className="phone-card"><div className="phone-bar"></div><div className="job-preview"><span>Recommended for you</span><h3>Personal assistant for a full workday</h3><p>Lekki, Lagos • ID verified • proof required</p><div className="job-meta"><strong>₦25,000/day</strong><em>4.9 ★</em></div></div><div className="mini-grid"><div><UserCheck /><span>ID check</span></div><div><MessageCircle /><span>Chat</span></div><div><WalletCards /><span>Escrow</span></div><div><BadgeCheck /><span>Proof</span></div></div></div><div className="floating-card bottom-card"><Sparkles size={22} /><div><strong>Gemini AI matching</strong><small>Turn needs into clear job posts</small></div></div></div></section>;
}

function CategoryGrid() { return <section className="section-shell section-block"><div className="section-heading"><span className="kicker">Explore Deur</span><h2>One marketplace for digital gigs and real-life tasks.</h2><p>Deur goes beyond normal freelance websites by supporting verified local work, errands, assistants, and field services.</p></div><div className="category-grid">{categories.map(({ name, icon: Icon, jobs, hint }) => <article className="category-card" key={name}><div className="icon-wrap"><Icon size={24} /></div><h3>{name}</h3><p>{hint}</p><span>{jobs} active requests</span></article>)}</div></section>; }

function GigCard({ gig, setPage }) { return <article className="gig-card"><div className="gig-image" style={{ background: gig.image }}><span>{gig.category}</span></div><div className="gig-body"><div className="seller-row"><strong>{gig.seller}</strong><span><BadgeCheck size={14} />{gig.badge}</span></div><h3>{gig.title}</h3><p><MapPin size={15} /> {gig.location}</p><div className="rating"><Star size={16} fill="currentColor" /> {gig.rating} <small>({gig.reviews})</small></div><div className="gig-footer"><span>{gig.price}</span><button onClick={() => setPage('gig-detail')}>View</button></div></div></article>; }

function Marketplace({ setPage, full = false }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Market Runs', 'Personal Assistant', 'Digital Services', 'Delivery & Pickup', 'Property Help', 'Business Support'];
  const visible = useMemo(() => filter === 'All' ? gigs : gigs.filter(gig => gig.category === filter), [filter]);
  return <section className="marketplace section-shell section-block"><div className="marketplace-top"><div><span className="kicker">Fiverr-inspired browsing</span><h2>{full ? 'Explore trusted services' : 'Popular trusted services'}</h2></div><button onClick={() => setPage('post-job')} className="text-link">Post a job <ChevronRight size={18} /></button></div>{full && <div className="wide-search"><Search size={20} /><input placeholder="Search errands, assistants, designers, delivery, property help..." /></div>}<div className="filters">{filters.map(item => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="gig-grid">{visible.map(gig => <GigCard gig={gig} setPage={setPage} key={gig.title} />)}</div></section>;
}

function Safety() { const items = [['Identity verification','Government ID, profile checks, provider badges, and verification tiers.'],['Escrow-protected payments','Clients fund jobs first. Providers receive payout after completion confirmation.'],['Real-world proof system','Photos, receipts, signatures, timestamps, and location-aware job updates.'],['Safety office','Reports, disputes, emergency contacts, blocked users, and admin review queue.']]; return <section className="safety section-shell section-block"><div className="safety-panel"><div className="section-heading left"><span className="kicker">Built for safety</span><h2>Not just convenience. Trust, life, and property matter.</h2><p>Because Deur includes real-world errands and personal assistance, safety cannot be an afterthought. It is part of the product.</p></div><div className="safety-list">{items.map(([title, copy]) => <div className="safety-item" key={title}><ShieldCheck /><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>; }

function HowItWorks() { const steps = [['Search or post','Describe what you need. Gemini-powered suggestions can turn rough requests into clean job posts.'],['Subscribe to unlock','Browse free. Subscribe when you are ready to message, post, hire, or accept work.'],['Fund escrow','Payment is held safely while both parties agree on scope, timing, and proof requirements.'],['Complete & review','Provider submits proof. Client confirms. Deur releases payout and stores ratings.']]; return <section className="section-shell section-block"><div className="section-heading"><span className="kicker">How it works</span><h2>A simple flow for online and offline jobs.</h2></div><div className="steps-grid">{steps.map(([title, copy], index) => <article className="step-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>; }

function PlanCard({ plan, setPage }) { return <article className={`plan-card ${plan.featured ? 'featured' : ''}`}>{plan.featured && <div className="popular">Best value</div>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div><div className="fee"><CreditCard size={17} /> {plan.fee}</div><ul>{plan.features.map(feature => <li key={feature}><Check size={17} />{feature}</li>)}</ul><button onClick={() => setPage('signup')} className={plan.featured ? 'btn btn-green' : 'btn btn-light'}>{plan.cta}</button></article>; }
function Pricing({ setPage }) { return <section className="pricing section-shell section-block"><div className="section-heading"><span className="kicker">Subscriptions + commission</span><h2>Browse free. Subscribe to work, hire, message, and use escrow.</h2><p>Deur earns through subscriptions and fair transaction fees. Free providers pay higher commission; paid providers keep more.</p></div><div className="pricing-group"><div className="pricing-title"><h3>For clients posting gigs</h3><span>Recommended client fee: 3%–5%</span></div><div className="plans-grid">{clientPlans.map(plan => <PlanCard plan={plan} setPage={setPage} key={plan.name} />)}</div></div><div className="pricing-group"><div className="pricing-title"><h3>For providers wanting gigs</h3><span>Commission decreases as providers upgrade</span></div><div className="plans-grid">{providerPlans.map(plan => <PlanCard plan={plan} setPage={setPage} key={plan.name} />)}</div></div></section>; }

function AuthPage({ type, setPage, setUser }) { const isSignup = type === 'signup'; const [role, setRole] = useState('client'); return <section className="auth-page section-shell"><div className="auth-copy"><span className="kicker">{isSignup ? 'Join Deur' : 'Welcome back'}</span><h1>{isSignup ? 'Create your Deur account.' : 'Sign in to Deur.'}</h1><p>{isSignup ? 'Choose whether you want to post gigs as a client or earn money as a provider. Real auth comes next with Supabase.' : 'This sign-in screen is ready for Supabase authentication in the next phase.'}</p><div className="auth-benefits"><div><ShieldCheck /> Verified marketplace</div><div><WalletCards /> Escrow protection</div><div><MessageCircle /> Secure messaging</div></div></div><form className="auth-card" onSubmit={(e) => { e.preventDefault(); setUser({ name: 'Demo User', role }); setPage(role === 'provider' ? 'provider-dashboard' : 'client-dashboard'); }}><img src="/deur-logo.svg" alt="Deur logo" /><h2>{isSignup ? 'Start with Deur' : 'Log in'}</h2>{isSignup && <div className="role-tabs"><button className={role === 'client' ? 'selected' : ''} onClick={() => setRole('client')} type="button">I need help</button><button className={role === 'provider' ? 'selected' : ''} onClick={() => setRole('provider')} type="button">I want gigs</button></div>}<label>Full name<input placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label><label>Password<input type="password" placeholder="••••••••" /></label><button className="btn btn-green" type="submit">{isSignup ? 'Create account' : 'Sign in'}</button><p className="form-note">Demo UI only. We’ll connect real login with Supabase next.</p><button type="button" className="link-button" onClick={() => setPage(isSignup ? 'signin' : 'signup')}>{isSignup ? 'Already have an account? Sign in' : 'New here? Join Deur'}</button></form></section>; }

function DashboardCard({ icon: Icon, title, value, copy }) { return <article className="dash-card"><Icon /><span>{title}</span><strong>{value}</strong><p>{copy}</p></article>; }
function ClientDashboard({ setPage }) { return <section className="dashboard section-shell section-block"><div className="dash-hero"><div><span className="kicker">Client dashboard</span><h1>Post jobs, manage bookings, and track escrow.</h1><p>Demo dashboard for clients who need trusted people for online or offline work.</p></div><button onClick={() => setPage('post-job')} className="btn btn-green">Post a new job</button></div><div className="dash-grid"><DashboardCard icon={FileText} title="Active jobs" value="3" copy="Market run, assistant booking, and property inspection." /><DashboardCard icon={WalletCards} title="Escrow funded" value="₦72,500" copy="Held safely until proof and completion." /><DashboardCard icon={MessageCircle} title="Unread chats" value="5" copy="Provider questions and updates." /><DashboardCard icon={ShieldCheck} title="Safety status" value="Protected" copy="ID checks and proof requests enabled." /></div><div className="work-panel"><h2>Recent client activity</h2><ul><li><Check /> Market run request matched with 4 verified providers.</li><li><Check /> Personal assistant booking awaiting escrow funding.</li><li><Check /> Property inspection proof uploaded for review.</li></ul><button onClick={() => setPage('provider-dashboard')} className="btn btn-light">View provider dashboard demo</button></div></section>; }
function ProviderDashboard({ setPage }) { return <section className="dashboard section-shell section-block"><div className="dash-hero"><div><span className="kicker">Provider dashboard</span><h1>Find gigs, manage services, and grow earnings.</h1><p>Demo dashboard for providers earning through verified Deur opportunities.</p></div><button onClick={() => setPage('create-service')} className="btn btn-green">Create service</button></div><div className="dash-grid"><DashboardCard icon={BriefcaseBusiness} title="Open leads" value="18" copy="Jobs matching your profile." /><DashboardCard icon={WalletCards} title="Pending payout" value="₦118,000" copy="After completed proof review." /><DashboardCard icon={Star} title="Rating" value="4.9" copy="Based on verified reviews." /><DashboardCard icon={BadgeCheck} title="Plan" value="Provider Pro" copy="10% platform success fee." /></div><div className="work-panel"><h2>Recommended gigs</h2><ul><li><Check /> Market run in Lagos Island — ₦8,500.</li><li><Check /> Day assistant in Lekki — ₦25,000.</li><li><Check /> Document pickup in Ikeja — ₦12,000.</li></ul><button onClick={() => setPage('admin')} className="btn btn-light">View admin/safety demo</button></div></section>; }
function AdminPage() { return <section className="dashboard section-shell section-block"><div className="dash-hero"><div><span className="kicker">Admin & safety office</span><h1>Review verification, payments, disputes, and reports.</h1><p>This is the control room Deur will need before real-world tasks scale.</p></div></div><div className="dash-grid"><DashboardCard icon={UserCheck} title="Pending ID checks" value="12" copy="Review provider documents." /><DashboardCard icon={Lock} title="Open disputes" value="4" copy="Payment or proof conflicts." /><DashboardCard icon={ShieldCheck} title="Safety reports" value="2" copy="Needs urgent admin review." /><DashboardCard icon={CreditCard} title="Transactions" value="₦840k" copy="Tracked this week." /></div></section>; }


function PostJobPage({ setPage }) {
  return <section className="form-page section-shell section-block"><div className="form-hero"><span className="kicker">Post a job</span><h1>Tell Deur what you need done.</h1><p>This demo form shows the flow clients will use before Paystack escrow and provider matching.</p></div><form className="big-form" onSubmit={(e)=>{e.preventDefault(); setPage('client-dashboard');}}><label>Job title<input placeholder="e.g. Buy food items from Balogun Market" /></label><label>Category<select><option>Market Runs</option><option>Personal Assistant</option><option>Delivery & Pickup</option><option>Digital Services</option><option>Property Help</option></select></label><label>Location<input placeholder="Lagos Island, Remote, Abuja..." /></label><label>Budget<input placeholder="₦25,000" /></label><label>What should the provider do?<textarea placeholder="Describe the task, proof needed, timing, and safety requirements."></textarea></label><div className="form-actions"><button className="btn btn-green" type="submit"><PlusCircle size={18}/> Post demo job</button><button type="button" onClick={()=>setPage('client-dashboard')} className="btn btn-light">Cancel</button></div></form></section>;
}
function CreateServicePage({ setPage }) {
  return <section className="form-page section-shell section-block"><div className="form-hero"><span className="kicker">I want gigs</span><h1>Create a service people can book.</h1><p>Providers can list errands, personal assistance, digital services, field support, and more.</p></div><form className="big-form" onSubmit={(e)=>{e.preventDefault(); setPage('provider-dashboard');}}><label>Service title<input placeholder="e.g. Same-day market runs with receipts" /></label><label>Category<select><option>Market Runs</option><option>Personal Assistant</option><option>Delivery & Pickup</option><option>Digital Services</option><option>Business Support</option></select></label><label>Service area<input placeholder="Lekki, Lagos Island, Remote..." /></label><label>Starting price<input placeholder="₦8,500" /></label><label>Describe your service<textarea placeholder="Tell clients what you offer, timing, proof, and requirements."></textarea></label><div className="form-actions"><button className="btn btn-green" type="submit"><PlusCircle size={18}/> Publish demo service</button><button type="button" onClick={()=>setPage('provider-dashboard')} className="btn btn-light">Cancel</button></div></form></section>;
}
function GigDetailPage({ setPage }) {
  return <section className="detail-page section-shell section-block"><button className="text-link" onClick={()=>setPage('explore')}>← Back to explore</button><div className="detail-grid"><div><span className="kicker">Verified service</span><h1>Personal assistant for errands, scheduling, follow-ups, and field tasks</h1><p>Lekki, Lagos • ID verified • escrow protected • proof required</p><div className="work-panel"><h2>What is included</h2><ul><li><Check /> Field errands and status updates.</li><li><Check /> Photo/receipt proof where needed.</li><li><Check /> Secure chat before work starts.</li><li><Check /> Escrow payment protection.</li></ul></div></div><aside className="booking-card"><h2>From ₦25,000/day</h2><p>Client pays safety fee. Provider success fee is calculated by plan.</p><button onClick={()=>setPage('signin')} className="btn btn-green">Continue to booking</button><button onClick={()=>setPage('create-service')} className="btn btn-light">I want gigs like this</button></aside></div></section>;
}

function HomePage({ setPage }) { return <><Hero setPage={setPage} /><CategoryGrid /><Marketplace setPage={setPage} /><Safety /><HowItWorks /><Pricing setPage={setPage} /><section className="cta section-shell"><div><span className="kicker">Launch direction</span><h2>Start with Lagos/Nigeria. Build trust first. Expand after the model works.</h2><p>Use Paystack subscriptions, escrow-like milestone payments, Supabase authentication, and Gemini AI for matching and job-writing support.</p></div><div className="cta-actions"><button onClick={() => setPage('signup')} className="btn btn-dark">Join Deur</button><button onClick={() => setPage('explore')} className="btn btn-light">Explore services</button></div></section></>; }
function Footer({ setPage }) { return <footer className="footer section-shell"><Brand setPage={setPage} /><div className="footer-links"><button onClick={() => setPage('safety')}>Trust & Safety</button><button onClick={() => setPage('pricing')}>Pricing</button><button onClick={() => setPage('provider-dashboard')}>Become a Provider</button><button onClick={() => setPage('admin')}>Admin Demo</button></div><p>© 2026 Deur. Prototype MVP for a trusted services marketplace.</p></footer>; }

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const render = () => {
    if (page === 'home') return <HomePage setPage={setPage} />;
    if (page === 'explore') return <><Marketplace setPage={setPage} full /><CategoryGrid /></>;
    if (page === 'how') return <HowItWorks />;
    if (page === 'safety') return <Safety />;
    if (page === 'pricing') return <Pricing setPage={setPage} />;
    if (page === 'signin') return <AuthPage type="signin" setPage={setPage} setUser={setUser} />;
    if (page === 'signup') return <AuthPage type="signup" setPage={setPage} setUser={setUser} />;
    if (page === 'client-dashboard') return <ClientDashboard setPage={setPage} />;
    if (page === 'provider-dashboard') return <ProviderDashboard setPage={setPage} />;
    if (page === 'admin') return <AdminPage />;
    if (page === 'post-job') return <PostJobPage setPage={setPage} />;
    if (page === 'create-service') return <CreateServicePage setPage={setPage} />;
    if (page === 'gig-detail') return <GigDetailPage setPage={setPage} />;
    return <HomePage setPage={setPage} />;
  };
  return <><Header page={page} setPage={setPage} user={user} setUser={setUser} /><main>{render()}</main><Footer setPage={setPage} /></>;
}

createRoot(document.getElementById('root')).render(<App />);
