import React from "react";

const Filter = ({ setTitle, setRate, rate, title }) => {
  return (
    <div className="fil">
      <div className="input-group ">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search by Title and Rate
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="search by title "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          className="form-control"
          placeholder="search by rate "
          onChange={(e) => setRate(e.target.value)}
          value={rate}
        />
      </div>{" "}
    </div>
  );
};

export default Filter;
