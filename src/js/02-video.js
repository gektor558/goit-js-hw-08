import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};

const videoPlayer = new Player(refs.iframe); 

const onPlayerTimeSaveThrottle = throttle(onPlayerTimeSave, 1000);

videoPlayer.on('timeupdate', onPlayerTimeSaveThrottle);

function onPlayerTimeSave(data) {
  save("videoplayer-current-time", data.seconds);
};

videoPlayer.setCurrentTime(getSavedTime());

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

function getSavedTime() {
  try {
    const serializedState = localStorage.getItem("videoplayer-current-time");
    return serializedState === null ? 0 : Number.parseFloat(JSON.parse(serializedState));
  } catch (error) {
    console.error("Get state error: ", error.message);
    return 0;
  }  
}


