import React from "react";
import { Pagination } from "./components";
import { PlayerIndex } from "./pages";

function App() {
  const [players, setPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [playersPerPage, setPlayersPerPage] = React.useState(100);

  React.useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/players?page=${currentPage}?per_page=${playersPerPage}`
      );
      if (response.ok) {
        const result = await response.json();
        setPlayers(result.data);
      }

      setLoading(false);
    };

    fetchPlayers();
  }, [currentPage, playersPerPage]);

  const handlePage = (e: any) => {
    const { value } = e.target;
    value === "next"
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage - 1);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <PlayerIndex />
      <div>
        <p>Current Page: {currentPage}</p>
        <button onClick={handlePage} value="back">
          Back
        </button>
        <button onClick={handlePage} value="next">
          Next
        </button>
      </div>
      {loading
        ? "Loading..."
        : players.map((p: any) => (
            <p key={p.id}>
              {p.first_name}
              {p.last_name}
            </p>
          ))}
    </div>
  );
}

export default App;
