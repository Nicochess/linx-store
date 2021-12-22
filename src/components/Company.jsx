const Footer = () => {
  const logo = require("../assets/linx-stone.png");

  return (
    <article className="company">
      <section className="company__image">
        <img src={logo} alt="Linx Stone Logo" />
      </section>
      <section className="company__resume">
        <p className="text">
          A Linx é uma empresa brasileira especialista em tecnologia para o
          varejo. Líder no mercado de software de gestão, com 45,6% de market
          share do mercado varejista, conforme atesta o IDC.
        </p>
        <p className="text">
          Toda a expertise da Linx na jornada de compra é transformada em
          insights fundamentais para atingir o que os varejistas mais esperam:
          fidelizar seus consumidores e atingir resultados concretos e
          relevantes.
        </p>
        <p className="text">
          Com capital aberto na B3 desde 2013, a Linx também se tornou a
          primeira empresa brasileira de software com capital aberto na NYSE, em
          2019. A empresa possui mais de 3,5 mil colaboradores distribuídos
          entre sua sede em São Paulo, 15 filiais pelo Brasil e 5 países da
          América. Para saber mais, acesse linx.com.br/imprensa.
        </p>
      </section>
    </article>
  );
};

export default Footer;
