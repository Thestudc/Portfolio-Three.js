import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8'>
            Hi, I am <span className='font-semibold'>Bojan Manojloski</span>👋
            <br />
            A Software Developer from Macedonia
        </h1>
    ),
    2 : (
        <InfoBox 
            text="Worked with many companies and pick up a couple of skills with me"
            link="/about"
            btnText="Learn more about me"
        />
    ),
    3 : (
        <InfoBox 
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Find out more about me"
        />
    ),
    4 : (
        <InfoBox 
            text="Need a project done or looking for a dev?  Let's chat about it!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo