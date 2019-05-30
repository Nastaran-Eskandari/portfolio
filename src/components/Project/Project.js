import React from 'react';
import './Project.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../Main/animate.css';

let projects = [{
    title:"BandPage",
    text:"My first project while at BrainStation. I used HTML, SASS, JavaScript and APIs. This project taught us responsive web design and functions to store and retrieve data.",
    imgSrc:'./images/band.png',
    href:'https://bandpage.netlify.com/',
    btnText:'View Website'
},
{
    title:"BrainFlix",
    text:"Fully responsive website clone of YouTube. My first React website using NodeJS and API functions with an external database.",
    imgSrc:'./images/brainFlix.png',
    href:'https://github.com/Nastaran-Eskandari/brainflix',
    btnText:'View In GitHub'
},
{
    title:"Mr Swat",
    text:"Pair programming project completed in an intensive week. Play online to see how we used React components to generate the swatter and bugs. ",
    imgSrc:'./images/swap.png',
    href:'https://mrswat.netlify.com/',
    btnText:'View Website'
},
{
    title:"You Can Tell Me",
    text:"My Capstone project at BrainStation. I thought it would be great to make a website where anyone could go and express their thoughts and feelings. As a recent immigrant with few connections in Canada it's often challenging and lonely and this project was designed to help people in tough situations express themselves and feel less alone.",
    imgSrc:'./images/capstone.png',
    href:'https://github.com/Nastaran-Eskandari/Capstone',
    btnText:'View In GitHub '
},
{
    title:"Gelal Rah Jonoub",
    text:" I made this website for a multi million dollar construction company back in Iran as a freelancer in 2017. I used HTML, CSS, JavaScript, JQuery and Bootstrap.  ",
    imgSrc:'./images/gelal.png',
    href:'http://gelalrahjonoub.com/',
    btnText:'View Website'
},
                {
    title:"Recipe Search",
    text:"  This is a cool example of using the Food2Fork API's to get recipes. I used React, JS, Bootstrap and CSS to build this simple and fun website! ",
    imgSrc:'./images/recipe.png',
    href:'https://github.com/Nastaran-Eskandari/Recipe-Search',
    btnText:'View In GitHub '
}

];
export class Project extends React.Component{
    render(){  
        return(
            <div >
                <ScrollableAnchor id={'project-section'} scrollDuration={2} keepLastAnchorHash={false}>
                    <div className="projects"  >
                    <h2 className="title"><span className="first-letter">P</span>rojects</h2>
                        {projects.map( (project,i)=>{
                        return (
                            <div className="project" key={i}>
                                <ScrollAnimation  animateIn="fadeInLeft" duration={1} animateOnce= {true} className="project_img--container">
                                    <img src={project.imgSrc} alt=''/>
                                </ScrollAnimation>
                                <ScrollAnimation  animateIn="fadeInRight" duration={1} animateOnce= {true} className="project_info">   
                                    <h2>{project.title}</h2>
                                    <h3>{project.text}</h3>
                                    <a className='breathing-button' rel="noopener noreferrer" href={project.href} target='_blank'>{project.btnText}</a>
                                </ScrollAnimation> 
                            </div>
                            )}
                        )}
                    </div>
                </ScrollableAnchor>
                </div>
        )} 
    }
