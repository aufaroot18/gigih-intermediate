import API_ENDPOIT from '../globals/api-endpoint.js';

const getPlaylist = async () => {
  try {
    const responses = await fetch(API_ENDPOIT.playlist);
    const playlist = await responses.json();
    return playlist;
  }
  catch(err) {
    throw new Error(err);
  }
}

const playlist = getPlaylist();

export default playlist;
