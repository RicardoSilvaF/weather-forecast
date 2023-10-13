import React from "react";
import styled from "styled-components";

const SearchBox = ({ cityName, setCityName, onSearch }) => {
  const handleSearchClick = () => {
    onSearch();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <SearchComponent>
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyPress}
        errorMessage="adafafs"
      />
      <SearchButton onClick={handleSearchClick}>Buscar</SearchButton>
    </SearchComponent>
  );
};

export default SearchBox;

const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 300px;
  margin-left: 19px;
  margin-top: 15px;
`;

const SearchInput = styled.input`
  border: 1px solid #000;
  outline: none;
  width: 100%;
  height: 20px;
`;

const SearchButton = styled.button`
  background-color: #efefef;
  border: 1px solid #000;
  border-left: 0;
  padding: 5px 10px;
  cursor: pointer;
  height: 23.5px;
`;
