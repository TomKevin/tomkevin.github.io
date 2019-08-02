import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './App.css';

const ImageWrapper = ({ source, title }) => (

    <figure>

      <img src={source} alt={title} />

      <figcaption className="caption">

       {title}

      </figcaption>

    </figure>

);


let index = 0;

class App extends Component {

  constructor(props) {

    super(props);

    this.state = { 
      
      value: 0 
      
    };
    
  }
  
  onChange = (value) => {

    this.setState({ value });

  }

  next = () => {

      if(index < 5) {

          const sections = document.querySelectorAll('section');

          index++;

          sections.forEach((section, i) => {

              if(i === index) {

                  section.scrollIntoView({behavior: 'smooth'});

              }
              
          });

      }

  }

  prev = () => {

      if(index > 0) {

          const sections = document.querySelectorAll('section');

          index--;

          sections.forEach((section, i) => {

              if(i === index) {

                  section.scrollIntoView({behavior: 'smooth'});

              }
              
          });

      }

  }

  handleOnDragStart = e => e.preventDefault();

  render() {

    return (

      <div className="main">

        <div className="content">
        
          <section>

            <div className="overlay"></div>

            <div className="wrapper">

              <div className="intro">

                <h1>Hi, I`m Kevin</h1>

                <p>Software Developer</p>

              </div>

            </div>
          
          </section>

          <section>

            <h1>My Technology Stack</h1>

            <Carousel

              slidesPerPage={3}

              centered

              value={this.state.value}

              onChange={this.onChange}

              slides={[

                (<ImageWrapper source={require('./assets/img/react.png')} title="React Js And React Native" />),

                (<ImageWrapper source={require('./assets/img/nodejs.png')} title="Node Js" />),

                (<ImageWrapper source={require('./assets/img/mongodb.png')} title="Mongo DB" />),

                (<ImageWrapper source={require('./assets/img/graphql.png')} title="GraphQL" />),

                (<ImageWrapper source={require('./assets/img/laravel.png')} title="Laravel" />),

                (<ImageWrapper source={require('./assets/img/electron.png')} title="Electron" />),

                (<ImageWrapper source={require('./assets/img/mysql.png')} title="MySQL" />),

              ]}

              autoPlay={2000}

              animationSpeed={1000}

              infinite
              
              breakpoints={{

                1000: {

                  slidesPerPage: 2,

                },

                500: {

                  slidesPerPage: 1,

                }
                
              }}

            />

          </section>
        
          <section>
          
            <h1>Section 3</h1>
          
          </section>
        
          <section>
          
            <h1>Section 4</h1>
          
          </section>
        
          <section>
          
            <h1>Section 5</h1>
          
          </section>
        
          <section>
          
            <h1>Section 6</h1>
          
          </section>
        
        </div>

        <div className="nav">

          <button className="prev" onClick={() => this.prev()} id="prev">Previous</button>

          <button className="next" onClick={() => this.next()} id="next">Next</button>

        </div>
        
      </div>

    );

  }

}

export default App;
