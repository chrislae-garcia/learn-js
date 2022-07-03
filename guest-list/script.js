const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

const arrAdmitted = [];
const arrRefused = [];

// loop starts here

for (let i = 0; i < people.length; i++) {
  if (people[i] == 'Phil' ||
    people[i] == 'Lola') {
      arrRefused.push(people[i]);
  } else {
    arrAdmitted.push(people[i]);
  }
}

refused.textContent += arrRefused.join(', ');
admitted.textContent += arrAdmitted.join(', ');