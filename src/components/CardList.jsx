import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <section className="product__list">
      {data.map(
        ({ id, image_url, name, price, oldPrice, available, details }) => {
          return (
            <Card
              key={id}
              id={id}
              image_url={image_url}
              name={name}
              price={price}
              oldPrice={oldPrice}
              available={available}
              details={details}
            />
          );
        }
      )}
    </section>
  );
};

export default CardList;
