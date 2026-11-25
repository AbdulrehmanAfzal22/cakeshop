import { useState } from 'react';
import ArrowIcon from './ArrowIcon.jsx';

export default function Newsletter() {
  const [status, setStatus] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email;

    setSubscribed(false);
    if (!email.checkValidity()) {
      setStatus('Please enter a valid email address.');
      email.focus();
      return;
    }

    setStatus('You’re on the list — sweet notes are headed your way!');
    setSubscribed(true);
    form.reset();
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="shell newsletter-stage">
        <span className="newsletter-spark newsletter-spark-one" aria-hidden="true">✦</span>
        <span className="newsletter-spark newsletter-spark-two" aria-hidden="true">✧</span>
        <span className="newsletter-spark newsletter-spark-three" aria-hidden="true">✦</span>
        <div className="newsletter-card">
          <div className="newsletter-copy">
            <p className="newsletter-kicker"><span aria-hidden="true">✦</span> The Cake Galaxy Edit</p>
            <h2 id="newsletter-title">Good things come<br /><em>with frosting.</em></h2>
            <p className="newsletter-description">
              Join our sweetest little list for first looks, seasonal drops and beautiful ideas for your next celebration.
            </p>
            <form className="newsletter-form" noValidate onSubmit={subscribe}>
              <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
              <div className="newsletter-field">
                <svg className="newsletter-mail-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                />
                <button className="newsletter-submit" type="submit">
                  Join the list <ArrowIcon direction="right" />
                </button>
              </div>
              <p className={`newsletter-status${subscribed ? ' is-success' : ''}`} role="status" aria-live="polite">
                {status}
              </p>
            </form>
            <p className="newsletter-note"><span aria-hidden="true">♡</span> Fresh inspiration, never inbox clutter.</p>
          </div>
          <div className="newsletter-art" aria-hidden="true">
            <div className="newsletter-orbit orbit-one" />
            <div className="newsletter-orbit orbit-two" />
            <div className="newsletter-photo">
              <img src="/assets/214633.webp" alt="" />
            </div>
            <div className="newsletter-badge badge-new"><strong>Just<br />Baked</strong><span>✦</span></div>
            <div className="newsletter-badge badge-month"><span>THE</span><strong>Sweet<br />Season</strong></div>
            <span className="newsletter-flower flower-one">✿</span>
            <span className="newsletter-flower flower-two">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
