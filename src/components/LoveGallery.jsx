import ArrowIcon from './ArrowIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';

const photos = [
  {
    image: '214633.webp',
    alt: 'Violet Bloom cake with handmade purple flowers and gold leaves',
    label: 'Sugar-flower magic',
    ariaLabel: 'See our Violet Bloom floral cake on Instagram',
  },
  {
    image: '214728.webp',
    alt: 'Peony and Pearls celebration cake with a sculpted flower',
    label: 'Made for your moment',
    ariaLabel: 'See our Peony and Pearls cake on Instagram',
  },
  {
    image: '214646.webp',
    alt: 'Colourful race-car birthday cake with checkered flags',
    label: 'Little-big celebrations',
    ariaLabel: 'See our Race Day birthday cake on Instagram',
  },
  {
    image: '214718.webp',
    alt: 'Bright superhero-themed birthday cake',
    label: 'Dream it. We’ll bake it.',
    ariaLabel: 'See our Superhero Squad cake on Instagram',
  },
];

const instagramUrl = 'https://www.instagram.com/cakes.galaxy.pk/';

export default function LoveGallery() {
  return (
    <section className="love-gallery" aria-labelledby="love-gallery-title">
      <svg className="love-wave love-wave-top" aria-hidden="true" viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path d="M0 0h1440v25c-192 42-349 3-535 15S576 70 385 47 127 17 0 49Z" />
      </svg>
      <div className="love-gallery-strip">
        <div className="love-gallery-copy">
          <span className="love-ribbon" aria-hidden="true">✦ Baked with love ✦</span>
          <p className="love-kicker">A little sweetness goes a long way</p>
          <h2 id="love-gallery-title">Why you’ll<br />love <em>us.</em></h2>
          <span className="love-underline" aria-hidden="true" />
          <p className="love-description">
            Thoughtful details. Joyful designs. A centrepiece made for your kind of celebration.
          </p>
          <p className="love-promises">Made to order <span>✦</span> Made in Lahore</p>
          <a className="love-follow" href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            Follow our sweet story <ArrowIcon />
          </a>
          <span className="love-doodle love-doodle-one" aria-hidden="true">✿</span>
          <span className="love-doodle love-doodle-two" aria-hidden="true">♡</span>
        </div>
        {photos.map((photo) => (
          <a
            className="love-photo"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={photo.ariaLabel}
            key={photo.image}
          >
            <img src={`/assets/${photo.image}`} alt={photo.alt} loading="lazy" />
            <span className="love-photo-caption">
              {photo.label} <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
      <svg className="love-wave love-wave-bottom" aria-hidden="true" viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path d="M0 31c180-39 346 5 535-9s329-30 520-6 258 26 385-12v66H0Z" />
      </svg>
    </section>
  );
}
