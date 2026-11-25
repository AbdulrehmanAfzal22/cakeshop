import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon.jsx';
import { catalog, categories } from '../data/catalog.js';

const pageSize = 6;

function CakeCard({ product, onSelect }) {
  return (
    <button className="card" type="button" onClick={(event) => onSelect(product, event.currentTarget)}>
      <span className="card-media">
        <img src={`/assets/${product.image}`} alt="" loading="lazy" />
      </span>
      <span className="card-content">
        <span>
          <span className="card-category">{product.category}</span>
          <span className="card-name">{product.name}</span>
        </span>
        <span className="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function CakeCollection({ onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [visibleLimit, setVisibleLimit] = useState(pageSize);
  const [focusIndex, setFocusIndex] = useState(null);
  const cardsRef = useRef(null);

  const matching = selectedCategory === categories[0]
    ? catalog
    : catalog.filter((product) => product.category === selectedCategory);
  const visibleProducts = matching.slice(0, visibleLimit);

  useEffect(() => {
    if (focusIndex === null) return undefined;
    const frame = requestAnimationFrame(() => {
      cardsRef.current?.children[focusIndex]?.focus();
      setFocusIndex(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [focusIndex, visibleProducts.length]);

  function chooseCategory(category) {
    setSelectedCategory(category);
    setVisibleLimit(pageSize);
    setFocusIndex(null);
  }

  function showMore() {
    setFocusIndex(visibleProducts.length);
    setVisibleLimit((limit) => limit + pageSize);
  }

  return (
    <section id="collection" className="collection shell" aria-labelledby="collection-title">
      <p className="eyebrow"><span aria-hidden="true">✦</span> The cake collection</p>
      <h2 id="collection-title">Find your <em>slice of magic.</em></h2>
      <p className="section-intro">Pick a design you love, then tell us how you’d make it yours.</p>
      <div className="filters" role="group" aria-label="Filter cake designs">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            aria-pressed={category === selectedCategory}
            onClick={() => chooseCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        Showing {visibleProducts.length} of {matching.length} designs.
      </p>
      <div className="grid" ref={cardsRef}>
        {visibleProducts.map((product) => (
          <CakeCard key={product.name} product={product} onSelect={onSelect} />
        ))}
      </div>
      {visibleLimit < matching.length && (
        <button className="button outline more" type="button" onClick={showMore}>
          Show more designs <ArrowIcon direction="down" />
        </button>
      )}
    </section>
  );
}
