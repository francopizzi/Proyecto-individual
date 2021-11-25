import { Link } from 'react-router-dom';
import React from 'react';

function Landing() {
  return (
    <div>
       <Link to="/home/videogames">
            <button>
                Explore Games
            </button>
        </Link>
    </div>
  );
};

export default Landing;