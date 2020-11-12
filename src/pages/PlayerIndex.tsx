import * as React from "react";
import styled from "styled-components";
import Button, { LoadingButton } from "@atlaskit/button";
import Select from "@atlaskit/select";
import TextField from "@atlaskit/textfield";
import { Pagination, Table } from "../components";

/**
 * 1. Search input component
 * 2. Player info api
 * 3. Table component
 *  - Columns: Player Name, Team, Number, Position, Height, Weight etc
 *  - Infinite scrolling
 *  - Filter Input boxes
 */

const PlayerIndexStyle = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 0.25em;
  border: 1px solid grey;
  padding: 3em 1em;
`;

const PlayerIndex = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (e: any) => {
    e.target.innerHTML === "Prev"
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);
  };

  return (
    <PlayerIndexStyle>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: "1em" }}
      >
        <h1>All Players</h1>
        <TextField
          css={{}}
          width={600}
          placeholder="Search for a player"
          isCompact={true}
        />
      </div>
      <div style={{ padding: "1em 0" }}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1em" }}
        >
          <Select
            className="single-select"
            classNamePrefix="react-select"
            options={[{ label: 1, value: 1 }]}
            placeholder={currentPage}
          />
          <Button onClick={handlePage} value="prev">
            Prev
          </Button>
          <Button onClick={handlePage} value="next">
            Next
          </Button>
        </div>
      </div>
      <Table />
    </PlayerIndexStyle>
  );
};

export default PlayerIndex;
