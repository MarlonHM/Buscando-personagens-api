import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1 className="titulo">Personagens</h1>
      <div className="container">
        {characterList.map((person) => {
          return (
            <CharCard
              key={person.id}
              person={person.name}
              image={person.image}
              status={person.status}
              species={person.species}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
