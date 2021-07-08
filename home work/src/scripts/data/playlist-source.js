import API_ENDPOIT from '../globals/api-endpoint.js';

const getPlaylist = async () => {
  const responses = await fetch(API_ENDPOIT.playlist);
  const playlist = await responses.json();
  return playlist;
}

const playlist = getPlaylist();

export default playlist;
