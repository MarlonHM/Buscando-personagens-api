import "./style.css";

const CharCard = ({ person, image, status, species }) => {
  const string = () => {
    if (person.length > 15) {
      return person.substring(0, 15).concat(" ...");
    } else return person;
  };

  return (
    <div>
      {status === "Alive" ? (
        <div className="vivos">
          <h2 className="nome nome_vivos">{string()}</h2>
          <h3 className="especie especie_vivos">{species}</h3>
          <figure className="img_container">
            <img className="imagem" src={image} alt={person} />
          </figure>
        </div>
      ) : (
        <div className="outros">
          <h2 className="nome nome_outros">{string()}</h2>
          <h3 className="especie especie_outros">{species}</h3>
          <figure className="img_container">
            <img className="imagem" src={image} alt={string()} />
          </figure>
        </div>
      )}
    </div>
  );
};

export default CharCard;
