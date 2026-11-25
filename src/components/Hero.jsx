import ArrowIcon from './ArrowIcon.jsx';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true">✦</span> Baked for your celebration</p>
          <h1 id="hero-title">Make a wish.<br /><em>We’ll bake it.</em></h1>
          <p className="intro">
            From sugar flowers to favourite characters, find a cake design that feels like your celebration.
          </p>
          <div className="actions">
            <a className="button mint" href="#collection">
              Explore the cakes <ArrowIcon direction="down" />
            </a>
            <a className="hero-link" href="#order">
              Plan a custom cake <ArrowIcon />
            </a>
          </div>
        </div>
        <figure className="hero-art">
          <span className="orbit" aria-hidden="true" />
          <span className="spark one" aria-hidden="true">✦</span>
          <span className="spark two" aria-hidden="true">✧</span>
          <span className="spark three" aria-hidden="true">✦</span>
          <div className="arch">
            <img
              src="/assets/214633.webp"
              alt="Ivory celebration cake with sculpted purple flowers and gold leaves"
              fetchPriority="high"
              width="929"
              height="1000"
            />
          </div>
          <figcaption><span aria-hidden="true">✦</span> Violet Bloom</figcaption>
        </figure>
      </div>
      <svg className="wave" aria-hidden="true" viewBox="0 0 1440 82" preserveAspectRatio="none">
        <path d="M0 42C225 105 338 6 577 28c194 18 297 54 475 32 178-22 260-58 388-43v65H0Z" />
      </svg>
    </section>
  );
}
