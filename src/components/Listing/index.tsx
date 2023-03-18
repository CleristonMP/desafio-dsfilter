import ProductCard from "./ProductCard";
import "./styles.css";

export default function Listing() {
  return (
    <section id="listing-section" className="container">
      <div className="listing-ctr">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
