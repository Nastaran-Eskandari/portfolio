import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './HeroHeader.css';
import '../Main/animate.css';

export class HeroHeader extends React.Component{
    render(){
        return(
        <div className="hero">
                <ScrollAnimation  animateIn="fadeInUp" duration={1} animateOnce= {true} className="hero_welcome">
                {/* <div className="hero_welcome-img">
                    <img src="./images/IMG_5185.jpg" alt="portfolio"></img>
                </div> */}
                    <div className="hero_welcome-text">
                        <h2>Hello!</h2>
                        <h3>I'm Nastaran Eskandari</h3>
                        <h4>Full-Stack Developer</h4>
                        <button><a href="./files/Nastaran-Eskandari-Resume.pdf" download>Download my Resume</a></button>
                    </div>
                </ScrollAnimation>
            <div>
                <p><a href="#about-section"><i className="fas fa-angle-down fa-5x breathing-btn "></i></a></p>
            </div>   
        </div>
        )
    }
}