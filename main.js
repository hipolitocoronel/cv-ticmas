window.onload = () => {
  const skillContainer = document.getElementById('skill-container');

  // habilidades que se mostraran en el front
  const skills = [
    { name: 'ReactJS', number: 5 },
    { name: 'MongoDB', number: 2 },
    { name: 'TailwindCSS', number: 3 },
    { name: 'SASS', number: 4 },
    { name: 'NodeJS', number: 6 },
  ];

  for (let skill of skills) {
    const skillItem = document.createElement('div');
    const skillName = document.createElement('p');
    const div = document.createElement('div');
    for (let i = 0; i < skill.number; i++) {
      const span = document.createElement('span');
      span.className += 'skill-active';
      div.appendChild(span);
    }

    // rellenando skills inactivas
    for (let i = 0; i < 6 - skill.number; i++) {
      const span = document.createElement('span');
      div.appendChild(span);
    }

    skillItem.className = 'skill__item';
    skillName.innerText = skill.name;
    skillName.className = 'title-secondary';
    skillItem.appendChild(skillName);
    skillItem.appendChild(div);
    skillContainer.appendChild(skillItem);
  }
};
