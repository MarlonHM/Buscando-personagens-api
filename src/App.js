import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharaterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => {
        setCharaterList((state) => [...state, ...response.results]);
        setNextPage(response.info.next);
      });
  }, [currentPage]);

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <div className="div_botao">
        <button className="botao" onClick={() => setCurrentPage(nextPage)}>
          Próxima página
        </button>
      </div>
    </div>
  );
}

export default App;
