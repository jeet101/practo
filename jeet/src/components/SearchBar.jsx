import React, { useState } from "react";
import "./SearchBar.css";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import CloseIcon from "@material-ui/icons/Search";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="search2">
        <div className="searchInputs2">
          <div className="searchIcon2">
            {filteredData.length === 0 ? (
              <SearchRoundedIcon />
            ) : (
              <CloseIcon id="clearBtn2" onClick={clearInput} />
            )}
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
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
