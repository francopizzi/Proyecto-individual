import React from 'react';
import ButtonAddGame from '../ButtonAddGame/ButtonAddGame';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
       <SearchBar/>
       <Link to="/home/addgame">
        <ButtonAddGame/>
       </Link>
    </div>
  );
};

export default Navbar;