import "./styles.css";

export default function FilterCard() {
  return (
    <div className="container">
      <form className="filter-form">
        <div>
          <input
            type="text"
            name="min-price"
            id="min-price"
            placeholder="Preço mínimo"
          />
        </div>
        <div>
          <input
            type="text"
            name="max-price"
            id="max-price"
            placeholder="Preço máximo"
          />
        </div>
        <div className="filter-btn">
          <button type="submit">Filtrar</button>
        </div>
      </form>
    </div>
  );
}
