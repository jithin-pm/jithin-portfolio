import React, { useContext } from 'react';
import '../styles/toolsmarquee.css';
import { ColorContext } from '../context/ContextShare';
import { FaReact, FaAngular, FaAws } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql, 
  SiTypescript, 
  SiNodedotjs, 
  SiWordpress, 
  SiAdobe,
  SiRedis,
  SiGit
} from 'react-icons/si';

const frameworks = [
  { name: 'React', icon: <FaReact size={60} />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={60} />, color: '#000000', invertInDark: true },
  { name: 'TypeScript', icon: <SiTypescript size={60} />, color: '#3178C6' },
  { name: 'Node.js', icon: <SiNodedotjs size={60} />, color: '#339933' },
  { name: 'Express', icon: <SiExpress size={60} />, color: '#000000', invertInDark: true },
  { name: 'Angular', icon: <FaAngular size={60} />, color: '#DD0031' },
  { name: 'WordPress', icon: <SiWordpress size={60} />, color: '#21759B' },
  { name: 'Adobe AEM', icon: <SiAdobe size={60} />, color: '#FF0000' },
  { name: 'MongoDB', icon: <SiMongodb size={60} />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql size={60} />, color: '#4479A1' },
  { name: 'Redis', icon: <SiRedis size={60} />, color: '#DC382D' },
  { name: 'Git', icon: <SiGit size={60} />, color: '#F05032' },
  { name: 'AWS', icon: <FaAws size={60} />, color: '#FF9900' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} />, color: '#06B6D4' },
];

const ToolsMarquee = () => {
  return (
    <div className="tools-marquee-section">
      <div className="tools-marquee-header" data-aos="fade-up">
        <h2>Built with</h2>
      </div>
      
      <div className="tools-marquee-container">
        <div className="tools-marquee-content">
          {/* Render the list twice to create a seamless infinite loop */}
          {[...frameworks, ...frameworks].map((item, index) => (
            <div 
              key={index} 
              className="tools-marquee-item"
              title={item.name}
            >
              <div className="tools-marquee-icon">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsMarquee;
