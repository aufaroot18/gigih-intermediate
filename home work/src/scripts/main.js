console.log('hello');

// grab dom
const form = document.querySelector('.playlist-form');

// handle submit form
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