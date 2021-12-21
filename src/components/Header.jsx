const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Dashboard Tasks</h1>
      <nav>
        <ul className="header__menu">
          <li className="header__menu--button">Minhas Tarefas</li>
          <li className="header__menu--button">Criar nova tarefa</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
