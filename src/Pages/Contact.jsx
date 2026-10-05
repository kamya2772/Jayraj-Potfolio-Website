import { useState } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); setSending(true); setStatus('');
    try { await emailjs.send('service_zi4wvfv', 'template_dhz79ms', formData, 'USC4_NklIkfrfLEQk'); setStatus('Your message has been sent. Thank you for getting in touch.'); setFormData({ name: '', email: '', subject: '', message: '' }); }
    catch { setStatus('Your message could not be sent. Please try again or use the email address alongside.'); }
    finally { setSending(false); }
  }
  return <><header className="page-heading"><p className="eyebrow">START A CONVERSATION</p><h1>Get in touch</h1><p>For research connections, academic conversations, and teaching enquiries.</p></header><div className="contact-grid"><form onSubmit={handleSubmit}>{[['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']].map(([name, label, type]) => <div className="form-field" key={name}><label htmlFor={name}>{label}</label><input type={type} id={name} name={name} autoComplete={name === 'subject' ? 'off' : name} value={formData[name]} onChange={e => setFormData({ ...formData, [name]: e.target.value })} required /></div>)}<div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required /></div><button className="button-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message ↗'}</button><p className="form-status" role="status">{status}</p></form><aside className="contact-details"><h2>Contact details</h2><p><strong>Email</strong><a href="mailto:jayrajrana2912@gmail.com">jayrajrana2912@gmail.com</a></p><p><strong>Phone</strong><a href="tel:+919265423807">+91 92654-23807</a></p><p><strong>Location</strong>Surat – 395009, Gujarat, India</p><div className="social-links"><a href="https://linkedin.com/in/jayraj-rana-3502841b2" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.youtube.com/@MorulaBiologybyJayrajRana" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://www.instagram.com/__.jayraj.__/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://wa.me/919265423807" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></aside></div></>;
}
