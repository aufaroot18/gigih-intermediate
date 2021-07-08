import playlist from '../data/playlist-source.js';

const _handleFormSubmit = () => {
  const form = document.querySelector('.playlist-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.elements['title'].value;
    const description = form.elements['description'].value;
  
    alert(`
      title: ${title}
      description: ${description}
    `);
  
    form.reset();
  });
}

const home = async () => {
  _handleFormSubmit();
  console.log(await playlist);
};

export default home;