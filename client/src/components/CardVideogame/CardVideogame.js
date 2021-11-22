import React from 'react';

function CardVideogame({name, backgroundImage}) {
    return (
      <div>
          <h1>{name}</h1>
          <img src={backgroundImage}/>
      </div>
    );
  };

  export default CardVideogame;