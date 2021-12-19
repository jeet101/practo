import React, { useState } from "react";
import "./SearchBar.css";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import CloseIcon from "@material-ui/icons/Search";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function SearchBar({ placeholder, data }) {
  const [filteredData2, setFilteredData2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [wordEntered2, setWordEntered2] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleFilter2 = (event) => {
    const searchWord2 = event.target.value;
    setWordEntered2(searchWord2);
    const newFilter2 = data.filter((value) => {
      return value.author.toLowerCase().includes(searchWord2.toLowerCase());
    });

    if (searchWord2 === "") {
      setFilteredData2([]);
    } else {
      setFilteredData2(newFilter2);
    }
  };

  const clearInput2 = () => {
    setFilteredData2([]);
    setWordEntered2("");
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="main-search">
      <div className="search">
        <div className="searchInputs">
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <LocationOnOutlined />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
          <input
            type="text"
            placeholder="Enter Location"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <h5>{value.title[0]}</h5>
                  <div>
                    {" "}
                    <h5>{value.title} </h5>
                    <p>{value.author}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="search2">
        <div className="searchInputs2">
          <div className="searchIcon2">
            {filteredData2.length === 0 ? (
              <SearchRoundedIcon />
            ) : (
              <CloseIcon id="clearBtn2" onClick={clearInput2} />
            )}
          </div>
          <input
            type="text"
            placeholder="Enter Dr Name"
            value={wordEntered2}
            onChange={handleFilter2}
          />
        </div>
        {filteredData2.length != 0 && (
          <div className="dataResult2">
            {filteredData2.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem2" href={value.link} target="_blank">
                  <h5>{value.author[4]}</h5>
                  <div>
                    <h5>{value.author} </h5>
                    <p>{value.title}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
