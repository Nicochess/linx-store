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
    return Number(`${num}`).toFixed(2).replace(".", ",");
  };

  return (
    <article className="card" key={id} id={id}>
      <span className={!available ? "missing" : undefined}></span>
      <section className="card__image">
        <img src={image_url} alt={name} />
      </section>
      <section className="card__content">
        <h3 className="title">{name}</h3>
        {available ? (
          <>
            <div className="prices">
              <span className="oldprice">R$ {commaNum(oldPrice)}</span>
              <strong className="price">R$ {commaNum(price)}</strong>
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
