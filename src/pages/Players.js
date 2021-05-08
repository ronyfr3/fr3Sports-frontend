import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loading from './Loading'

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [result, setResult] = useState(0);
  const [search, setSearch] = useState("");
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let response = await Axios.get(
        `https://floating-spire-13550.herokuapp.com/api/players?limit=${
          page * 5
        }&${sort}&name[regex]=${search}`
      );
      let data = await response.data;
      console.log(data.data);
      setLoading(false)
      setPlayers(data.data);
      let results = await response.data.results;
      setResult(results);
    };
    fetchData();
  }, [page, search, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      {
        loading ? <Loading /> : (
          <div className="playerProfiles">
      <div className="fields">
        <input
          className="inputfield"
          placeholder="search player"
          type="text"
          value={search}
          onChange={handleSearch}
        />

        {/* <span>Sort By: </span> */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option disabled value="">
            Sort By
          </option>
          <option value="">All</option>
          <option value="sort=-auctionPrice">Highest Paid Player</option>
          <option value="sort=auctionPrice">Lowest Paid Player</option>
        </select>
      </div>
      <div className="playerList">
        {players.map((player) => {
          const {
            name,
            auctionPrice,
            image,
            country,
            iplTeam,
            teamLogo,
          } = player;
          return (
            <div key={name} className="info">
              <img src={image} alt={name} />
              <div className="name-country">
                <p className="namecountry">{name}</p>
                <p className="namecountry">{country}</p>
              </div>
              <div className="ipl">
                <img src={teamLogo} alt={iplTeam} />
                <div className="logoprice">
                  <p className="teampaid">{iplTeam}</p>
                  <p className="teampaid1">Paid {auctionPrice}cr</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {result < page * 4 ? (
          ""
        ) : (
          <button onClick={() => setPage(page + 1)}>Load More</button>
        )}
      </div>
      </div>
        )
    }
      </>
  );
};

export default Players;
