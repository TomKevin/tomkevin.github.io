import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

    componentDidMount = () => {

        const navbar = document.querySelector('.navbar');

        const sectionOne = document.querySelector('.section-one');

        // console.log(sectionOne);

        const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {

            entries.forEach(entry => {

                // console.log(entry);

                // console.log(`${JSON.stringify(entry.isIntersecting)}`);

                if(!entry.isIntersecting) {

                    navbar.classList.add("navbar-scrolled");

                } else {

                    navbar.classList.remove("navbar-scrolled");

                    // navbar.classList.add("navbar-scrolled");

                }

                // navbar.classList.add("navbar-scrolled");

            });

        }, {

            rootMargin: "-200px 0px 0px 0px"

        });

        sectionOneObserver.observe(sectionOne);

    }

    navToggler = () => {

        const navbarToggler = document.querySelector(".navbar-toggler");

        const navbarMenu = document.querySelector(".navbar ul");

        navbarToggler.classList.toggle('open-navbar-toggler');

        navbarMenu.classList.toggle('open');

    }

    smoothScroll = (event) => {

        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("href");

        // console.log(targetId);

        window.scrollTo({ 

            top: document.querySelector(targetId).offsetTop,

            behavior: "smooth"

        });

    }

    render() {

        const navbarLinks = document.querySelectorAll('.navbar a');

        navbarLinks.forEach(elem => elem.addEventListener("click", () => {

            const navbarToggler = document.querySelector(".navbar-toggler");

            const navbarMenu = document.querySelector(".navbar ul");

            if(navbarMenu.classList.contains('open')) {

                navbarToggler.click();

            }

        }));

        return (

            <div>

                <nav className="navbar nav-scrolled">

                    <a className="navbar-brand" href="/"><span>K</span>EVIN <span>M</span>OTURI</a>
                        
                    <ul>

                        <li><a href="#home" onClick={this.smoothScroll}>Home</a></li>

                        <li><a href="#about" onClick={this.smoothScroll}>About</a></li>

                        <li><a href="#technologies" onClick={this.smoothScroll}>Technologies</a></li>

                    </ul>

                    <button className="navbar-toggler" onClick={() => this.navToggler()}>

                        <span></span>

                    </button>
                    
                </nav>

                <section className="section-one" id="home">

                    <img src={require('./img/3.jpg')} alt="Kevin Moturi" />

                    <h1>Hi, I'm Kevin</h1>

                    <h4>Full Stack Software Developer</h4>

                </section>

                <section id="about">

                    <div className="intro">

                        <div className="intro-text">

                            <h1>Little About Me</h1>

                            <p>Hello There, I'm Kevin Moturi. I love javascript because it's fast, flexible and scalable. I can also be able to make wide range of applications for web, mobile and desktop applications that are cross platform, Both iOS and Android for mobile applications and MacOS and Windows for desktop applications.</p>

                            <p>I also enjoy being challenged to work and engage with projects that require me to work outside my comfort and knowledge set, as i continue to learn new languages and development techniques that are important to me and the success of your organization.</p>

                            <p>Please scroll through to view my skill sets.</p>

                        </div>

                        <div className="intro-image">

                            <img src={require('./img/3.jpg')} alt="Kevin Moturi" />

                        </div>

                    </div>

                </section>

                <section id="technologies">

                    

                </section>
                
            </div>

        )

    }

};

export default Profile;
