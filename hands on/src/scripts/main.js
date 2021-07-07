// selection dom

const usersContainer = document.querySelector('.users');
const buttonContainer = document.querySelector('.calculate-age');

// prepare data

const users = [
  {
    name: 'Aufa Billah',
    age: 22,
  },
  {
    name: 'Lia',
    age: 21
  },
];

// insert data users to dom (usersContainer)

users.forEach((user) => {
  usersContainer.innerHTML += `
    <tr>
      <td>${user.name}</td>
      <td>${user.age}</td>
    </tr>
  `;
})

// calculate age
const getAverageAge = (acc, user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalAge = users.reduce((acc, user) => {
        return acc + user.age;
      }, 0);

      resolve(totalAge / users.length);
    }, 2000);
  });
}

// function waiting from 1 to 3

const firstStarted = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('First Started')
    }, 2000);
  });
}

const firstFinished = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('First Finished')
    }, 2000);
  });
}

const secondStarted = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Second Started')
    }, 2000);
  });
}

const secondFinished = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Second Finished')
    }, 2000);
  });
}

const thirdStarted = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Third Started')
    }, 2000);
  });
}

const thirdFinished = () => {
  return  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Third Finished')
    }, 2000);
  });
}

buttonContainer.addEventListener('click', async () => {
  console.log(await firstStarted());

  console.log(await firstFinished());

  console.log(await secondStarted());

  console.log(await secondFinished());

  console.log(await thirdStarted());

  console.log(await getAverageAge());

  console.log(await thirdFinished());
});