import React, { Component } from 'react';
import { FaCloud, FaMobile, FaDesktop } from 'react-icons/fa'
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

    // Remove bottom borders from all tab items
    removeBorder = () => {

        const tabItems = document.querySelectorAll('.tab-item');

        tabItems.forEach(item => {

            item.classList.remove('tab-border');

        });

    }

    // Remove show class from all content items
    removeShow = () => {

        const tabContentItems = document.querySelectorAll('.tab-content-item');

        tabContentItems.forEach(item => {

            item.classList.remove('show');

        });

    }

    // Select tab content item
    selectItem = (e) => {

        const tab = document.querySelector(`#${e.currentTarget.id}`);

        // Remove all show and border classes
        this.removeBorder();

        this.removeShow();

        // Add border to current tab item
        tab.classList.add('tab-border');

        // Grab content item from DOM
        const tabContentItem = document.querySelector(`#${e.currentTarget.id}-content`);

        // Add show class
        tabContentItem.classList.add('show');
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

        const tabItems = document.querySelectorAll('.tab-item');

        // Listen for tab item click
        tabItems.forEach(item => {

            item.addEventListener('click', this.selectItem);

        });

        return (

            <div>

                <nav className="navbar nav-scrolled">

                    <a className="navbar-brand" href="/"><span>K</span>EVIN <span>M</span>OTURI</a>
                        
                    <ul>

                        <li><a href="#home" onClick={this.smoothScroll}>Home</a></li>

                        <li><a href="#about" onClick={this.smoothScroll}>About</a></li>

                        <li><a href="#skillset" onClick={this.smoothScroll}>Skill Set</a></li>

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

                            <p>Hello There, I'm Kevin Moturi. I am a passionate, scalable and flexible full stack software developer with key interest in javascript. I am able to make wide range of applications for web, mobile and desktop.</p>

                            <p>I Have a strong work ethic and go beyond expectations to achieve project targets. I am also continually learning new languages and development techniques for career advancement.</p>

                            <p>Please scroll through to view my skill sets.</p>

                        </div>

                        <div className="intro-image">

                            <img src={require('./img/3.jpg')} alt="Kevin Moturi" />

                        </div>

                    </div>

                </section>

                <section id="skillset">

                    <div className="tabs">

                        <div className="container">

                            <div id="tab-1" className="tab-item tab-border" onClick={this.selectItem}>

                                <FaCloud className="icon" />
                        
                                <p className="hide-sm">Web Development</p>
                        
                            </div>
                        
                            <div id="tab-2" className="tab-item" onClick={this.selectItem}>

                                <FaMobile className="icon" />
                        
                                <p className="hide-sm">Mobile Development</p>
                        
                            </div>
                        
                            <div id="tab-3" className="tab-item" onClick={this.selectItem}>

                                <FaDesktop className="icon" />
                        
                                <p className="hide-sm">Desktop Development</p>
                        
                            </div>
                            
                        </div>

                    </div>

                    <div className="tab-content">

                        <div className="container">

                            <div id="tab-1-content" className="tab-content-item show">

                                <div className="tab-1-content-inner">

                                    <div>

                                        <h1>React JS - Frontend</h1>

                                        <p className="text-lg">I use react because its fast, simple and scalable and allows me to create reusable ui components and its easy to integrate other external javascript libraries with it.</p>

                                    </div>

                                    <img src={require('./img/react.png')} alt="Kevin Moturi" />

                                </div>

                                <div className="tab-1-content-inner">

                                    <div>

                                        <h1>Node JS - Backend</h1>

                                        <p className="text-lg">Node JS has enabled me to build reat-time applications that are light weight and efficient.</p>

                                    </div>

                                    <img src={require('./img/nodejs.png')} alt="Kevin Moturi" />

                                </div>

                                <div className="tab-1-content-inner">

                                    <div>

                                        <h1>GraphQL - (Frontend / Backend)</h1>

                                        <p className="text-lg">It a syntax that describes how to ask for data, and is generally used to load data from a server to a client. User's in applications i make with graphql are able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same</p>

                                    </div>

                                    <img src={require('./img/graphql.png')} alt="Kevin Moturi" />

                                </div>

                                <div className="tab-1-content-inner">

                                    <div>

                                        <h1>Laravel - Backend</h1>

                                        <p className="text-lg">It's a PHP framework for effective web development solutions with Effective authorization process, presence of object-oriented libraries, Useful MVC support and Top-notch security.</p>

                                    </div>

                                    <img src={require('./img/laravel.png')} alt="Kevin Moturi" />

                                </div>

                            </div>

                            <div id="tab-2-content" className="tab-content-item">

                                <div className="tab-1-content-inner">

                                    <div>

                                        <h1>React Native</h1>

                                        <p className="text-lg">It's a framework that enables me to create robust mobile applications using my existing JavaScript knowledge. It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user's experience or application quality. It enables my applications to have a native look and feel.</p>

                                    </div>

                                    <img src={require('./img/react.png')} alt="Kevin Moturi" />

                                </div>

                            </div>

                            <div id="tab-3-content" className="tab-content-item">

                                    <div className="tab-1-content-inner">

                                    <div>

                                        <h1>Electron JS</h1>

                                        <p className="text-lg">It's a runtime framework that allows the user to create desktop-suite applications with HTML5, CSS, and JavaScript. Combined with react js, i can be able to turn my existing web or mobile applications into dektop apps that can be installed in either mac or windows machines.</p>

                                    </div>

                                    <img src={require('./img/electron.png')} alt="Kevin Moturi" />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                
            </div>

        )

    }

};

export default Profile;
