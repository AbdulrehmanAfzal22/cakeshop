import { useEffect, useRef } from 'react';
import ArrowIcon from './ArrowIcon.jsx';

export default function DesignDialog({ product, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (product && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [product]);

  function orderUrl() {
    const message = `Hi Cakes Galaxy! I’m interested in the “${product.name}” design. Could you share pricing and availability?`;
    return `https://wa.me/923010119807?text=${encodeURIComponent(message)}`;
  }

  return (
    <dialog
      ref={dialogRef}
      id="design"
      aria-labelledby="design-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {product && (
        <>
          <button
            className="close"
            aria-label="Close design details"
            type="button"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
          <img className="detail-image" src={`/assets/${product.image}`} alt={product.name} />
          <div className="detail-copy">
            <p className="eyebrow detail-category">{product.category}</p>
            <h2 id="design-title">{product.name}</h2>
            <p className="detail-description">{product.description}</p>
            <a className="button dark detail-order" href={orderUrl()} target="_blank" rel="noopener noreferrer">
              Ask about this design <ArrowIcon />
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
