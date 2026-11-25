import ArrowIcon from './ArrowIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';

export default function Footer() {
  return (
    <footer id="order" className="footer">
      <svg className="wave" aria-hidden="true" viewBox="0 0 1440 82" preserveAspectRatio="none">
        <path d="M0 0h1440v36c-158-21-280 61-503 25S643 9 442 48 151 68 0 36Z" />
      </svg>
      <div className="shell">
        <div className="footer-main">
          <div>
            <p className="eyebrow"><span aria-hidden="true">✦</span> Made to order in Lahore</p>
            <h2>Let’s make it <em>sweet.</em></h2>
            <p>Share your occasion, date and favourite design with us.</p>
          </div>
          <a
            className="button mint"
            data-order
            href="https://wa.me/923010119807"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <ArrowIcon />
          </a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#top">
            <img src="/assets/logo.webp" alt="" width="42" height="42" />
            <span>Cakes Galaxy</span>
          </a>
          <div className="footer-links">
            <a href="tel:+923010119807">0301 0119807</a>
            <a
              className="instagram-link"
              href="https://www.instagram.com/cakes.galaxy.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
