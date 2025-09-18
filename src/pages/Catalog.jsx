import products, { CATEGORIES } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import { useState } from "react";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("title");
  const [maxPrice, setMaxPrice] = useState(200);

  const filtered = products
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  return (
    <section className="catalog-page">
      <header className="catalog-header">
        <h1>🛍️ Our Catalog</h1>
        <p>Browse products, filter by category, and find your favorites.</p>
      </header>

      <div className="container catalog-controls">
        <input
          className="catalog-search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="catalog-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <div className="catalog-price">
          <label>
            Max Price: ${maxPrice}
            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <select
          className="catalog-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="title">Sort: A–Z</option>
          <option value="price">Sort: Price</option>
          <option value="rating">Sort: Rating</option>
        </select>
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
