import React, { useState, useEffect, useRef } from 'react';
import "./PlayList.css";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { IoPlaySkipBackSharp, IoPlayForwardSharp, IoPauseSharp } from 'react-icons/io5';

const PlayList = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(-1); // Track which audio is currently playing
  const [playbackRate, setPlaybackRate] = useState(1); // Audio playback rate
  const audioRef = useRef(null);

  useEffect(() => {
    // Load playlist data from local storage when the component mounts
    const storedPlaylist = localStorage.getItem('playlist');
    if (storedPlaylist) {
      setPlaylist(JSON.parse(storedPlaylist));
    }
  }, []);

  useEffect(() => {
    // Play the audio when playingIndex changes
    if (playingIndex !== -1) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playingIndex]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleAddSongs = () => {
    if (selectedFiles.length > 0) {
      const newPlaylist = Array.from(selectedFiles).map(file => ({ title: URL.createObjectURL(file) }));
      setPlaylist([...playlist, ...newPlaylist]);
      setMessage(`${selectedFiles.length} song(s) added successfully`);
      localStorage.setItem('playlist', JSON.stringify([...playlist, ...newPlaylist]));
      setSelectedFiles([]);
    } else {
      setMessage('Please select one or more files to add');
    }
  };

  const handleTogglePlay = (index) => {
    if (playingIndex === index) {
      // Pause the audio
      setPlayingIndex(-1);
    } else {
      // Play the audio
      setPlayingIndex(index);
    }
  };

  const handleNext = () => {
    if (playingIndex < playlist.length - 1) {
      setPlayingIndex(playingIndex + 1);
    }
  };

  const handlePrev = () => {
    if (playingIndex > 0) {
      setPlayingIndex(playingIndex - 1);
    }
  };

  const handleChangeSpeed = (newSpeed) => {
    setPlaybackRate(newSpeed);
  };

  return (
    <div className="playlist-container">
      <h1 className="headtext__cormorant">Add Music</h1>
      <input className="custom__button" type="file" onChange={handleFileChange} multiple />
      <button className="custom__button" onClick={handleAddSongs}>Add</button>
      <p className="p__opensans">{message}</p>
      <h1 className="headtext__cormorant">My Playlist</h1>
      <div className="cards-container">
        {playlist.map((song, index) => (
          <motion.div key={index} className="card-wrapper">
            <Tilt options={{ max: 5, scale: 1 }}>
              <div className="card">
                <img src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?size=626&ext=jpg&ga=GA1.1.1735032981.1708437056&semt=sph" alt={song.title} className="card-image" width="240" height="180"/>
                <div className="card-controls">
                  <button className="control-button" onClick={() => handlePrev()}>
                    <IoPlaySkipBackSharp />
                  </button>
                  <button className="control-button" onClick={() => handleTogglePlay(index)}>
                    {playingIndex === index ? <IoPauseSharp /> : <IoPlayForwardSharp />}
                  </button>
                  <button className="control-button" onClick={() => handleNext()}>
                    <IoPlayForwardSharp />
                  </button>
                  {/* Speed control */}
                  <div className="speed-controller">
                    <label>Speed:</label>
                    <select value={playbackRate} onChange={(e) => handleChangeSpeed(parseFloat(e.target.value))}>
                      <option value={0.5}>0.5x</option>
                      <option value={1}>1x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>
                  </div>
                </div>
                <div className="card-details">
                  <h3 className="card-title">{song.title}</h3>
                  {/* Add more details here if needed */}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
      <audio ref={audioRef} src={playingIndex !== -1 ? playlist[playingIndex].title : ''} playbackRate={playbackRate} />
    </div>
  );
};

export default PlayList;
