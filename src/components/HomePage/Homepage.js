import React from 'react';
import { BsFillFileMusicFill, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Homepage.css';

const Homepage = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div  className="app__gallery flex__center">
      <div className="app__gallery-content">
        
        <h1 className="headtext__cormorant">AUDIO Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p>
        <button id="#play" type="button" className="custom__button">Explore Music</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          
            <div className="app__gallery-images_card flex__center" >
            <img src="https://st.depositphotos.com/1900401/53934/i/380/depositphotos_539343248-stock-photo-sound-mixer-faders-close-disco.jpg" alt="gallery_image" width="10px" height="20px"/>
              <img src="https://st3.depositphotos.com/9880800/12921/i/380/depositphotos_129210158-stock-photo-young-man-and-woman-standing.jpg" alt="gallery_image" />
              <img src="https://static9.depositphotos.com/1625039/1128/i/380/depositphotos_11284906-stock-photo-musical-puppy.jpg" alt="gallery_image" width="20px" height="20px"/>
              
              <img src="https://st.depositphotos.com/1761942/1601/i/380/depositphotos_16018089-stock-photo-two-years-old-toddler-boy.jpghttps://st2.depositphotos.com/1034986/6164/i/380/depositphotos_61642515-stock-photo-crazy-brunette-woman-listening-music.jpg" alt="gallery_image" width="10px" height="20px"/>
              
              <BsFillFileMusicFill className="gallery__image-icon" />
            </div>
       
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;