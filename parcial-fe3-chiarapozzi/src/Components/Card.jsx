import React from "react";

const Card = ({ user }) => {
  return (
    <div style={styles.cardContainer}>
      <h2>Hola amigo lector!</h2>
      <h3>Nombre: {user.name}</h3>
      <h4>Libro favorito: {user.favoritebook}</h4>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px",
    margin: "20px auto",
    textAlign: "center",
    backgroundcolor: "#f7f7f7"
  },
};

export default Card;