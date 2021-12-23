import Card from "./Card";
import { useState } from "react";

const CardList = ({ data }) => {
  const isMobile = window.innerWidth > 1024;

  const [visibleCards, setVisibleCards] = useState(() => {
    return isMobile ? 8 : 4;
  });

  const handleClick = () => {
    setVisibleCards(visibleCards + 4);
  };

  const cardComponent = data
    .slice(0, visibleCards)
    .map(({ id, image_url, name, price, oldPrice, available, details }) => {
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
          isMobile={isMobile}
        />
      );
    });

  return (
    <>
      <section className="product__list">{cardComponent}</section>
      {data.length > visibleCards ? (
        <button onClick={handleClick} className="btn load">Ver mais</button>
      ) : undefined}
    </>
  );
};

export default CardList;
