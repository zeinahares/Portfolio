import React from 'react';
import '../../styles/resume.css';

const skillSets = [
  {
    title: 'Languages',
    skills: [
      'JavaScript (ES6+)',
      'Python',
      'Java',
      'C',
      'HTML5',
      'CSS3',
      'SQL',
      'GraphQL',
      'Haskell',
      'Prolog',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'jQuery',
      'Handlebars',
      'Bootstrap',
      'Progressive Web Apps',
      'Single Page Applications',
      'Mobile-First Design',
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'GraphQL',
      'MySQL / Sequelize',
      'MongoDB / Mongoose',
      'NoSQL',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git & GitHub',
      'npm',
      'Heroku',
      'Chrome DevTools',
      'Google Workspace',
      'Microsoft Excel (Advanced)',
      'DanceBiz',
    ],
  },
  {
    title: 'Concepts & Methodologies',
    skills: [
      'Object-Oriented Programming',
      'Object-Relational Mapping',
      'Model-View-Controller',
      'MERN Stack',
      'A* Search & Heuristics',
      'UML & System Design',
      'Test-Driven Development',
      'Workflow Automation',
    ],
  },
];

export default function Resume() {
  return (
    <div className='resume'>
      <h1>My Skills</h1>
      <h5>
        <a href='./Zeina_Hares_Resume_2026.pdf' target='_blank' download>
          Click Here to Download My Resume
        </a>
      </h5>
      <div className='resume_container'>
        {skillSets.map((set) => (
          <div className='set' key={set.title}>
            <h3>{set.title}</h3>
            <ul>
              {set.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
