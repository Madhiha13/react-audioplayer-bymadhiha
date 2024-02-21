import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiAudiomack } from 'react-icons/si';
import { MdPlaylistPlay, MdMusicNote} from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav= () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="headtext__cormorant" >Audio Player App</h1>
      </div>
      <ul className={`app__navbar-links ${toggleMenu ? 'hidden' : ''}`}>
        <li className="p__opensans" ><Link to="/"><MdMusicNote />Home</Link></li>
        <li className="p__opensans"><Link to="/list"><MdPlaylistPlay /><a href="#play">Playlist</a></Link></li>
      </ul>
      <div className={`app__navbar-smallscreen ${toggleMenu ? 'open' : ''}`}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay" onClick={() => setToggleMenu(false)}>
          <SiAudiomack fontSize={27} className="overlay__close" />
            <ul className={`app__navbar-links ${toggleMenu ? 'hidden' : ''}`}>
                <li className="p__opensans" ><Link to="/"><a href="#home"><MdMusicNote />Home</a></Link></li>
                <li className="p__opensans"><Link to="/playlist"><MdPlaylistPlay />Playlist</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
