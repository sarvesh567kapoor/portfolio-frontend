import React, { useState, useEffect } from 'react';

const ContactFormPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    budget_range: '',
    heard_from: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  // Scroll to top when visiting the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let msg = 'Something went wrong. Please check the form and try again.';
        try {
          const data = await res.json();
          if (data?.message) msg = data.message;
        } catch {
          // ignore JSON parse error
        }
        throw new Error(msg);
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        budget_range: '',
        heard_from: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 className="section-title">Contact form</h1>
            <p className="section-subtitle">
              Share a few details about your project and I&apos;ll get back to you via email.
            </p>
          </div>

          <div className="grid" style={{ gap: '1.75rem' }}>
            {/* Left info card */}
            <div className="card">
              <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1rem' }}>
                How I usually work
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.8rem' }}>
                Send me a quick outline of what you need and I&apos;ll reply with clarifying questions,
                a rough estimate and next steps. I work on:
              </p>
              <ul style={{ fontSize: '0.9rem', color: '#9ca3af', paddingLeft: '1.15rem' }}>
                <li>WordPress plugins, WooCommerce stores, Laravel APIs, Shopify themes.</li>
                <li>React dashboards, admin panels and custom integrations.</li>
                <li>Bug fixing, refactors and performance improvements.</li>
              </ul>
            </div>

            {/* Right form card */}
            <div className="card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="grid" style={{ gap: '0.75rem' }}>
                  <div>
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      className="form-input"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">Subject</label>
                    <input
                      className="form-input"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Estimated budget</label>
                    <select
                      className="form-input"
                      name="budget_range"
                      value={form.budget_range}
                      onChange={handleChange}
                    >
                      <option value="">Select a range (optional)</option>
                      <option value="<$300">&lt; $300</option>
                      <option value="$300–$800">$300–$800</option>
                      <option value="$800–$2000">$800–$2k</option>
                      <option value=">$2000">&gt; $2k</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">How did you hear about me?</label>
                    <select
                      className="form-input"
                      name="heard_from"
                      value={form.heard_from}
                      onChange={handleChange}
                    >
                      <option value="">Choose one (optional)</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Google search">Google search</option>
                      <option value="Freelance site">Freelance site</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <label className="form-label">Project details</label>
                  <textarea
                    className="form-input"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me a bit about your project, goals and timelines."
                  />
                </div>

                {error && (
                  <div className="form-error" style={{ marginTop: '0.75rem' }}>
                    {error}
                  </div>
                )}
                {status === 'success' && (
                  <div className="form-success" style={{ marginTop: '0.75rem' }}>
                    Thanks! Your message has been sent.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ marginTop: '1rem', minWidth: '150px' }}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactFormPage;
