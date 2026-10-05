import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import resume from '../assets/Jayraj_Rana_RESUME_2025.pdf';
const links = [['/', 'Overview'], ['/introduction', 'About'], ['/writing', 'Research & teaching'], ['/experience', 'Experience'], ['/certificate', 'Credentials'], ['/media', 'Gallery'], ['/contact', 'Contact']];
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="wordmark" onClick={() => setOpen(false)}><span className="monogram">JR<span>.</span></span><span>Jayraj Rana<small>RESEARCH SCHOLAR</small></span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close ✕' : 'Menu ☰'}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<a href={resume} className="nav-cv" download>CV ↗</a></nav>
  </div></header>;
}
