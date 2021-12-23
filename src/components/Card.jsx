import React from "react";

const Card = ({
  id,
  image_url,
  name,
  price,
  oldPrice,
  available,
  details,
  isMobile,
}) => {
  const commaNum = (num) => {
    return num.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const discountValue = () => {
    const value = ((oldPrice - price) * 100) / oldPrice;
    return value.toFixed(0);
  };

  const hasDiscount = oldPrice !== price && {
    flag: <span className="flag discount">{discountValue()}% OFF</span>,
    value: <span className="oldprice">{commaNum(oldPrice)}</span>,
  };

  return (
    <article className="card" key={id} id={id}>
      <div className="flags__container">
        {available ? (
          <>
            {hasDiscount.flag}
            {details.freeShipping ? (
              <span className="flag">Frete Grátis</span>
            ) : undefined}
          </>
        ) : undefined}
      </div>

      {!available ? <span className="missing"></span> : undefined}
      <div className="flags"></div>
      <section className="card__image">
        <img src={image_url} alt={name} />
      </section>
      <section className="card__content">
        <h3 className="title">{name}</h3>
        {available ? (
          <>
            <div className="prices">
              {hasDiscount.value}
              <strong className="price">{commaNum(price)}</strong>
            </div>
            <span className="installment">
              10x de {commaNum(price / 10)} sem juros
            </span>
            <div className="card__actions">
              <button className="btn">Ver Produto</button>
            </div>
          </>
        ) : (
          <>
            <p className="unavaliable">Produto indisponível</p>
            {isMobile ? (
              <div className="card__actions">
                <button className="btn">Ver Produto</button>
              </div>
            ) : undefined}
          </>
        )}
      </section>
    </article>
  );
};

export default Card;
