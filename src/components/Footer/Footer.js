import React from 'react';
import './Footer.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import Mailto from 'react-protected-mailto'

export class Footer extends React.Component{
    render(){
        return(
            <div>
                <ScrollableAnchor id={'contact-section'} scrollDuration={2} keepLastAnchorHash={false}>
                    <div className="footer">
                        <nav className="footer_navbar">
                            <div className="footer_navbar--info">
                             <p>Email: <Mailto email='nastaran.eskandari@gmail.com'/></p>
                            </div>
                            <div className="footer_navbar--social">
                                <a href="https://www.linkedin.com/in/nastaran-eskandari/"  rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                                <a href="https://github.com/Nastaran-Eskandari"  rel="noopener noreferrer" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </nav>
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}