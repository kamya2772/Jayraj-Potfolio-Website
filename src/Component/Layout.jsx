import { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const targetId = decodeURIComponent(hash.slice(1));
    const scrollToSection = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;
      target.scrollIntoView({ block: 'start' });
      return true;
    };
    if (scrollToSection()) return;
    // Lazy-loaded pages can mount after navigation; wait for their section.
    const observer = new MutationObserver(() => {
      if (scrollToSection()) observer.disconnect();
    });
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname, hash]);
  return <div className="academic-site"><a className="skip-link" href="#main-content">Skip to content</a><Sidebar /><main id="main-content" className={pathname === '/' ? 'home-content' : 'interior-content'}><Outlet context={{ isDarkMode: false }} /></main><footer className="site-footer"><div><Link to="/" className="footer-name">Jayraj Rana</Link><p>Research. Education. Curiosity.</p></div><span>Surat, Gujarat · India</span><a href="mailto:jayrajrana2912@gmail.com">Get in touch ↗</a></footer></div>;
}
