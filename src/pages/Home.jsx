import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import FormFilter from "../components/FormFilter";
import Company from "../components/Company";
import Footer from "../components/Footer";
import MailForm from "../components/MailForm";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <main className="page__container">
        <FormFilter />
        <CardList data={data} />
      </main>
      <MailForm />
      <Company />
      <Footer />
    </>
  );
};

export default Home;
