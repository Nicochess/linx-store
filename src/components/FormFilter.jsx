import React from "react";

const FormFilter = () => {
  return (
    <form className='form__filter'>
      <div className="form__control">
        <input type="text" id="search" className='form__field' placeholder='Buscar por produto' />
        <button className="btn">Buscar</button>
      </div>
      <div className="form__control">
        <label htmlFor="deadline" className="select__label">Filtrar por:</label>
        <select name="deadline" id="deadline" className='form__select'>
          <option value="deadline">Prazo</option>
        </select>
      </div>
    </form>
  );
};

export default FormFilter;
