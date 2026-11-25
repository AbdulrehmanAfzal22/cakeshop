function ReasonIcon({ type }) {
  if (type === 'cake') {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 30h24l-2 10H14l-2-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M15 30c0-5 4-9 9-9s9 4 9 9M24 21v-4m-5 2 2 3m8-3-2 3M24 8l1.5 3.2L29 12l-3.5.8L24 16l-1.5-3.2L19 12l3.5-.8L24 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18 35h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'place') {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M38 20c0 11-14 22-14 22S10 31 10 20a14 14 0 1 1 28 0Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 35h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 39S7 29 7 17a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 12-17 22-17 22Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 23h5l3-6 4 13 3-7h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const reasons = [
  {
    title: 'Made personal',
    description: 'Your celebration, your style. Find a design you love and make it your own with a custom order.',
    type: 'heart',
  },
  {
    title: 'Unforgettable details',
    description: 'From delicate florals to playful favourites, discover designs that make the table—and the moment.',
    type: 'cake',
  },
  {
    title: 'Made with Lahore love',
    description: 'A local cake studio, here to help bring a little extra sweetness to your celebrations in Lahore.',
    type: 'place',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="reasons" aria-labelledby="reasons-title">
      <svg className="reasons-wave reasons-wave-top" aria-hidden="true" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0 0h1440v43c-178 36-302-14-474 3s-292 43-487 21S161 28 0 72Z" />
      </svg>
      <span className="reasons-spark reasons-spark-left" aria-hidden="true">✦</span>
      <span className="reasons-spark reasons-spark-right" aria-hidden="true">✧</span>
      <div className="shell reasons-content">
        <p className="reasons-kicker"><span aria-hidden="true">✦</span> A little more to love</p>
        <h2 id="reasons-title">Why choose <em>Cakes Galaxy?</em></h2>
        <p className="reasons-intro">
          Because your celebration deserves more than just cake. It deserves a little piece of magic made just for you.
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <article
              className={`reason-card${index === 1 ? ' reason-card-featured' : ''}`}
              key={reason.title}
            >
              <span className="reason-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="reason-icon" aria-hidden="true"><ReasonIcon type={reason.type} /></span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <span className="reason-rule" aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="reasons-signoff">
          <span aria-hidden="true">✧</span> Your moment. Your magic. Your Cakes Galaxy. <span aria-hidden="true">✧</span>
        </p>
      </div>
      <svg className="reasons-wave reasons-wave-bottom" aria-hidden="true" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0 48c177-37 301 14 474-3s292-43 487-21 318 39 479-23v99H0Z" />
      </svg>
    </section>
  );
}
