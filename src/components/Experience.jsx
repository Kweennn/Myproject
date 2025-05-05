import React from 'react';
import Navbar from './Navbar';
import '../App.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      date: "2023 - Present",
      title: "Project Manager",
      company: "Orion Tech Inc.",
      description: "I lead teams through every phase of a project, ensuring smooth execution, clear communication, and on-time, on-budget delivery.",
      skills: ["Project Planning", "Team Leadership", "Time Management" , "Problem Solving",]
    },
        {
          id: 2,
          date: "2023 - Present",
          title: "Frontend Developer",
          company: "Orion Tech Inc.",
          description: "I design and develop responsive, user-friendly interfaces using HTML, CSS, and JavaScript frameworks, ensuring seamless user experiences across devices while collaborating closely with designers and backend developers.",
          skills: [ "JavaScript", "CSS", "Responsive Design", "API Integration", "UIUX Design"]
        },
  ];
  const skills = {
    technical: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Responsive Design", level: 90 }
    ],
    design: [
      { name: "UI/UX Design", level: 75 },
      { name: "Figma", level: 80 },
      { name: "Adobe Photoshop", level: 65 },
      { name: "Adobe Illustrator", level: 60 }
    ],
    other: [
      { name: "Leadership", level: 85 },
      { name: "A Timeline & Budget Oversight", level: 75 },
      { name: "Task Coordination", level: 90 },
      { name: "Agile Workflow", level: 85 }
    ]
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Experience</h1>
    
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div className="experience-item" key={exp.id}>
              <div className="experience-date">{exp.date}</div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="category-title">Technical Skills</h3>
              <div className="skill-bars">
                {skills.technical.map((skill, index) => (
                  <div className="skill-bar" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Design Skills</h3>
              <div className="skill-bars">
                {skills.design.map((skill, index) => (
                  <div className="skill-bar" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Soft Skills</h3>
              <div className="skill-bars">
                {skills.other.map((skill, index) => (
                  <div className="skill-bar" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
