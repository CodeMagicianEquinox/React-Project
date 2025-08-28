// src/pages/Catalog.jsx
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import products, { CATEGORIES } from "../data/products";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200);
  const [sortBy, setSortBy] = useState("relevance"); // relevance | priceLow | priceHigh | rating

  const filtered = useMemo(() => {
    let view = products.filter(p => 
      (category === "All" || p.category === category) &&
      p.price <= maxPrice &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
       p.description.toLowerCase().includes(query.toLowerCase()))
    );

    switch (sortBy) {
      case "priceLow":  view.sort((a, b) => a.price - b.price); break;
      case "priceHigh": view.sort((a, b) => b.price - a.price); break;
      case "rating":    view.sort((a, b) => b.rating - a.rating); break;
      default:          /* relevance = leave as-is */ break;
    }
    return view;
  }, [query, category, maxPrice, sortBy]);

  return (
    <section className="catalog-page">
      <div className="container">
        <h1 className="mb-3">Catalog</h1>

        <div className="catalog-controls">
          <input
            type="search"
            className="catalog-search"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="catalog-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <label className="catalog-price">
            <span>Max Price: ${maxPrice}</span>
            <input
              type="range"
              min="10"
              max="200"
              step="1"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>

          <select
            className="catalog-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="priceLow">Sort: Price (Low → High)</option>
            <option value="priceHigh">Sort: Price (High → Low)</option>
            <option value="rating">Sort: Rating</option>
          </select>
        </div>

        <div className="products-grid">
          {filtered.length === 0 ? (
            <p className="mb-3">No products match your filters.</p>
          ) : (
            filtered.map(p => (
              <ProductCard key={p.id} {...p} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
