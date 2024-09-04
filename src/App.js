import './styles.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Band from './Components/Band';
import { Suspense } from 'react';
import { Environment, Lightformer } from '@react-three/drei';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

import uva from "./uva.png"
import dc from "./dc.png"
import vester from "./vester.png"
import project1 from "./UHR-Logo.png"
import project2 from "./babylon-logo.png"
import project3 from "./recipez-logo.png"
import project4 from "./coursereview-logo.png"
import project5 from "./ttt-logo.png"
import profile from "./new-profile.png"


function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const bottomRef = useRef(null);

  const projects1 = [
    { id: 1, name: 'UVA Housing Report', image: project1, link: 'https://github.com/tnargee/UVA-Housing-Report/#readme' },
    { id: 2, name: 'AI Chatbot', image: project2, link: 'https://github.com/tnargee/babylon-ai-chatbot/#readme' },
    { id: 3, name: 'Recipe Finder', image: project3, link: 'https://tnargee.github.io/recipez/' },
  ];
  
  const projects2 = [
    { id: 4, name: 'Course Review App', image: project4, link: 'https://github.com/tnargee' },
    { id: 5, name: 'Tic-Tac-Toe Game', image: project5, link: 'https://tnargee.github.io/ult-tictactoe/' },
  ];

  /*
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  }; */

  const handleProjectClick = (project) => {
    window.open(project.link, '_blank');
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className={`content-wrapper`}>
        <div className="content">
          <p className='heading-1'>Welcome to Tenzin's Portfolio</p>
          <hr/>
          <p className='heading-2'>Learn more about me below</p>
          < MdKeyboardDoubleArrowDown className='down-icon' onClick={scrollToBottom}/>
        </div>
      </div>

      <div className='dash-wrapper'>
      <div className='dashboard'>
          <div className='left-widget'>
            <div className='education'>

              <div className='section-heading'>
                <MdSchool className='school-icon'/>
                <p className='heading-2'>Education</p>
              </div>

              <div className='ed-div'>
                <img src={uva} alt=''></img>
                <div className='text'>
                  <p className='heading-1'>University of Virginia</p>
                  <p className='heading-2'>Computer Science, Data Science Minor</p>
                  <p className='body-1'>Aug 2021 - May 2025</p>
                  <p className='body-1'>Coursework: Adv Software Dev, Data Structures & Alg 2, Computer Systems 2, Data Science w Python, Machine Learning, HCI & UI Design, Artificial Intelligence, Internet Scale Apps </p>
                </div>
              </div>

            </div>

            <div className='experience'>

              <div className='section-heading'>
                <MdOutlineWork className='school-icon'/>
                <p className='heading-2'>Experience</p>
              </div>

              <div className='exp-div'>
                <img src={dc} alt=''></img>
                <div className='text'>
                  <p className='heading-1'>Software Engineer Intern</p>
                  <p className='heading-2'>DealCompass</p>
                  <p className='body-1'>May 2024 - July 2024</p>
                  <p className='body-1'>- Designed and developed a user task management system with a dynamic list and calendar interface using Figma, React, and CSS; integrated Google Calendar API to synchronize and modify third-party events, increasing user productivity by 80%.</p>
                  <p className='body-1 space'>- Integrated Slack and Gmail popups to facilitate seamless communication with team members and external contacts, enhancing user collaboration and efficiency.</p>
                  <p className='body-1 space'>- Developed an interactive main dashboard to visualize user engagement data through dynamic pie charts, graphs, and other visual formats, leveraging D3.js.</p>
                </div>
              </div>
              <div className='exp-div'>
                <img src={vester} alt=''></img>
                <div className='text'>
                  <p className='heading-1'>Software Engineer Intern</p>
                  <p className='heading-2'>Vester AI</p>
                  <p className='body-1'>July 2024 - Present</p>
                  <p className='body-1'>- Led front-end development and UI design for an AI crypto adviser platform, building the MVP from the ground up.</p>
                  <p className='body-1 space'>- Developed Python web scrapers and data pipelines to download and transcribe over 100 crypto whitepapers and 1000+ podcast audios using YouTube and Spotify APIs.</p>
                  <p className='body-1 space'>- Designed and implemented an interactive 3D event badge and signup form for beta landing page using React-Three-Fiber.</p>
                </div>
              </div>
            </div>
          </div>


          <div className='right-widgets'>
            <div className='right-top-widgets'>
            <div className='right-widget2'>
              <div className='skills'>
                <div className='section-heading'>
                  <HiSparkles className='school-icon'/>
                  <p className='heading-2'>Skills</p>
                </div>

                <p className='skill-list'>Frontend Development: React, Three.js, JavaScript, HTML, CSS </p>
                <p className='skill-list'>Backend Development: Python, Django, Java, RestAPI, SQL</p>
                <p className='skill-list'>Other: UI/UX Design, Figma, Blender </p>
              </div>
            </div>
              <img src={profile} alt=''></img>
            </div>


            <div className='right-widget1'>
              <div className='section-heading-right'>
                  <p className='heading-2'>Projects</p>
              </div>
              <div className="project-slideshow">
                {projects1.map((project) => (
                  <div key={project.id} className="project-icon" onClick={() => handleProjectClick(project)}>
                    <img src={project.image} alt={project.name} />
                    <p className="project-name">{project.name}</p>
                  </div>
                ))}
              </div>
              <div className="project-slideshow">
                {projects2.map((project) => (
                  <div key={project.id} className="project-icon" onClick={() => handleProjectClick(project)}>
                    <img src={project.image} alt={project.name} />
                    <p className="project-name">{project.name}</p>
                  </div>
                ))}
              </div>
            </div>

              {/*
              {selectedProject ? (

              <div className="project-detail">
                <div className='project-detail-left'>
                  <img src={selectedProject.image} alt={selectedProject.name} />
                  <p className="project-title">{selectedProject.name}</p>
                  <p className="project-description">{selectedProject.description}</p>
                  <button className="back-button" onClick={handleBackClick}>Back</button>
                </div>
                <div className='project-detail-right'>
                  <p>The UVA Housing Report is a comprehensive platform designed for the University of Virginia community to engage in discussions about housing issues, post topics, and submit housing-related complaints, either anonymously or as registered users.</p>

                  <p className='detail-header'>Features:</p>
                  <ul>
                    <li>Google OAuth Integration: Secure login through Google accounts, allowing users to authenticate with their existing Google credentials.</li>
                    <li>Community Forum: Users can participate in discussions, post new topics about housing, and respond to posts from other users.</li>
                    <li>Complaint Submission: Users can submit complaints anonymously or through their registered accounts. Registered users can track updates and receive notifications via email.</li>
                    <li>Admin Dashboard: Site administrators have the capability to review and manage user-submitted complaints and monitor forum activities.</li>
                    <li>Database System: Utilizes PostgreSQL for robust data management.</li>
                    <li>Web Framework: Built on Django 5, offering a powerful backend system designed for rapid development and clean, pragmatic design.</li>
                    <li>Cloud Hosting: Hosted on Heroku, ensuring high availability and scalability.</li>
                    <li>Cloud Storage: Integration with Amazon S3 for efficient file storage and retrieval.</li>
                  </ul>
                </div>
              </div>

            ) : (
              <>
              <div className="project-slideshow">
                {projects1.map((project) => (
                  <div key={project.id} className="project-icon" onClick={() => handleProjectClick(project)}>
                    <img src={project.image} alt={project.name} />
                    <p className="project-name">{project.name}</p>
                  </div>
                ))}
              </div>
              <div className="project-slideshow">
              {projects2.map((project) => (
                <div key={project.id} className="project-icon" onClick={() => handleProjectClick(project)}>
                  <img src={project.image} alt={project.name} />
                  <p className="project-name">{project.name}</p>
                </div>
              ))}
            </div>
            </>
            )}
            </div>
          */}
            
          </div>

        <div className="bottom" ref={bottomRef} style={{ height: '1px' }} />
      </div>
      </div>
      
      <div className={`canvas-wrapper ${isDragging ? 'dragging' : ''}`}>
        <Canvas className="canvas" camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={10} />
          { /*
          <directionalLight intensity={2} position={[-1, 0, 5]} />
          <directionalLight intensity={4} position={[8, 0, 5]} />
          <directionalLight intensity={2} position={[2, -4, 5]} />
          */ }
          <Physics gravity={[0, -40, 0]}>
            <Suspense fallback={null}>
              <Band setIsDragging={setIsDragging} />
            </Suspense>
          </Physics>
          <Environment background blur={0.75}>
            <color attach="background" args={['black']} />
            <Lightformer intensity={0.5} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={1} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      </div>
    </div>
    
  );
}

export default App;