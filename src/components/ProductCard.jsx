// src/components/ProductCard.jsx
function stars(rating = 0) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}

export default function ProductCard({ title, price, image, description, rating }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>

        <div className="product-meta">
          <span className="product-price">${Number(price).toFixed(2)}</span>
          {typeof rating === "number" && (
            <span className="product-rating" aria-label={`Rating ${rating} of 5`}>
              {stars(rating)}
            </span>
          )}
        </div>

        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}
