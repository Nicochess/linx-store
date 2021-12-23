import "./sass/styles.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import FormFilter from "./components/FormFilter";
import Company from "./components/Company";
import Footer from "./components/Footer";

function App() {
  const dummy_data = [
    {
      id: 1,
      name: "Notebook Linx Impulse Premium 8GB RAM SSD 500GB Tela 15,6 Windows 10",
      image_url: "https://i.imgur.com/zu9NkxS.png",
      brand: "Linx",
      oldPrice: 4199.9,
      price: 3569.9,
      available: true,
      details: {
        freeShipping: true,
      },
    },
    {
      id: 2,
      name: "Smartphone Linx 6 GB RAM",
      image_url: "https://i.imgur.com/dwlWYcI.png",
      brand: "Stone",
      oldPrice: 4899.9,
      price: 4017.9,
      available: true,
      details: {
        freeShipping: false,
      },
    },
    {
      id: 3,
      name: "Notebook StoneCO Prime 4GB RAM SSD 500GB Tela 15,6 Windows 10",
      image_url: "https://i.imgur.com/CpNAH6e.png",
      brand: "Stone",
      oldPrice: 2499.9,
      price: 2399.9,
      available: true,
      details: {
        freeShipping: true,
      },
    },
    {
      id: 4,
      name: "Notebook Linx Impulse Premium 4GB RAM SSD 500GB Tela 15,6 Windows 10",
      image_url: "https://i.imgur.com/zu9NkxS.png",
      brand: "Linx",
      oldPrice: 2569.9,
      price: 2569.9,
      available: false,
      details: {
        freeShipping: false,
      },
    },
    {
      id: 5,
      name: "Notebook Linx Impulse Premium 8GB RAM SSD 1TB Tela 15,6 Windows 10",
      image_url: "https://i.imgur.com/zu9NkxS.png",
      brand: "Linx",
      oldPrice: 4899.9,
      price: 4017.9,
      available: true,
      details: {
        freeShipping: false,
      },
    },
    {
      id: 6,
      name: "Smartphone Linx 4 GB RAM",
      image_url: "https://i.imgur.com/dwlWYcI.png",
      brand: "Linx",
      oldPrice: 2999.9,
      price: 2799.9,
      available: true,
      details: {
        freeShipping: true,
      },
    },
    {
      id: 7,
      name: "Notebook StoneCO Prime 8GB RAM SSD 500GB Tela 15,6 Windows 10",
      image_url: "https://i.imgur.com/CpNAH6e.png",
      brand: "Stone",
      oldPrice: 4399.9,
      price: 3871.9,
      available: true,
      details: {
        freeShipping: true,
      },
    },
  ];

  return (
    <>
      <Header />
      <main className="page__container">
        <FormFilter />
        <CardList data={dummy_data} />
      </main>
      <article className="mail__container">
        <section className="mail">
          <h4 className="mail__title">
            Quer receber dicas para organizar melhor a sua rotina? Cadastre-se!
          </h4>
        </section>
        <form className="mail__form">
          <div className="form__control">
            <label htmlFor="name" className='form__label'>Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" className="form__field"/>
          </div>

          <div className="form__control">
            <label htmlFor="email" className='form__label'>Email</label>
            <input type="email" id="email" placeholder="Digite seu email" className="form__field" />
          </div>

          <button className="btn">Cadastrar</button>
        </form>
      </article>
      <Company />
      <Footer />
    </>
  );
}

export default App;
