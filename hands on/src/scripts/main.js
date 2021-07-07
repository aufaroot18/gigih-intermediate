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
  const totalAge = users.reduce((acc, user) => {
    return acc + user.age;
  }, 0);

  return totalAge / users.length;
}

buttonContainer.addEventListener('click', () => {
  const averageAge = getAverageAge();
  alert(`Rata-rata umur: ${averageAge}`);
});