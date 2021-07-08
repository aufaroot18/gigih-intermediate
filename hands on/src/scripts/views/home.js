import users from '../data/users-source.js';
import ProcessAsync from '../utils/process-async.js';

const _getAverageAge = () => new Promise((resolve) => {
  setTimeout(() => {
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    resolve(totalAge / users.length);
  }, 2000);
});

const _generateUsers = () => {
  const usersContainer = document.querySelector('.users');

  users.forEach((user) => {
    usersContainer.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
      </tr>
    `;
  });
};

const _handleButtonAverage = () => {
  const buttonContainer = document.querySelector('.calculate-age');

  buttonContainer.addEventListener('click', async () => {
    console.log(await ProcessAsync.firstStarted());
    console.log(await ProcessAsync.firstFinished());
    console.log(await ProcessAsync.secondStarted());
    console.log(await ProcessAsync.secondFinished());
    console.log(await ProcessAsync.thirdStarted());
    console.log(await _getAverageAge());
    console.log(await ProcessAsync.thirdFinished());
  });
};

const home = () => {
  _generateUsers();
  _handleButtonAverage();
};

export default home;
