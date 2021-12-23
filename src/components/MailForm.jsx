import React from "react";

const MailForm = () => {
  return (
    <article className="mail__container">
      <section className="mail">
        <h4 className="mail__title">
          Quer receber dicas para organizar melhor a sua rotina? Cadastre-se!
        </h4>
      </section>
      <form className="mail__form">
        <div className="form__control">
          <label htmlFor="name" className="form__label">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            className="form__field"
          />
        </div>

        <div className="form__control">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            className="form__field"
          />
        </div>

        <button className="btn">Cadastrar</button>
      </form>
    </article>
  );
};

export default MailForm;
