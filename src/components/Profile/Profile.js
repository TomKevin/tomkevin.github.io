import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

    componentDidMount = () => {

        const navbar = document.querySelector('.navbar');

        const sectionOne = document.querySelector('.section-one');

        console.log(sectionOne);

        const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {

            entries.forEach(entry => {

                console.log(entry);

                console.log(`${JSON.stringify(entry.isIntersecting)}`);

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

        console.log(targetId);

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

                    <a className="navbar-brand" href="/profile"><span>K</span>EVIN <span>M</span>OTURI</a>
                        
                    <ul>

                        <li><a href="#home" onClick={this.smoothScroll}>Home</a></li>

                        <li><a href="#about" onClick={this.smoothScroll}>About</a></li>

                        <li><a href="#about" onClick={this.smoothScroll}>Technologies</a></li>

                    </ul>

                    <button className="navbar-toggler" onClick={() => this.navToggler()}>

                        <span></span>

                    </button>
                    
                </nav>

                <section className="section-one" id="home">

                    <h1>Section One</h1>

                </section>

                <section id="about">

                    <h1>Section Two</h1>

                </section>
                
            </div>

        )

    }

};

export default Profile;
