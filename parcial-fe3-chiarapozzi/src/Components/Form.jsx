import React, { useState } from "react";
import Card from "./Card";
import "./../Styles/Form.css";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    favoritebook: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleChangeFavoriteBook = (event) => {
    setUser({ ...user, favoritebook: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = user.name.trim().length >= 3 && !user.name.startsWith(" ");
    const isFavoriteBookValid = user.favoritebook.length >= 6;

    if (isNameValid && isFavoriteBookValid) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  const reset = () => {
    setUser({
      name: "",
      favoritebook: "",
    });
    setShow(false);
    setError(false);
  };

  return (
    <>
      <h2>Queremos conocerte!</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={user.name} onChange={handleChangeName} />
        <label>Libro preferido:</label>
        <input
          type="text"
          value={user.favoritebook}
          onChange={handleChangeFavoriteBook}
        />
        <div className="buttonContainer">
          <button type="submit">Enviar</button>
          <button type="reset" onClick={reset}>Reset form</button>
        </div>
      </form>

      {error && (
        <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
      )}

      {show && <Card user={user} className="cardContainer" />}
    </>
  );
};

export default Form;
