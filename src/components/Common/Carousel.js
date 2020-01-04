import React, { Component } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/Carousel.css';

class Carousel extends Component {

    constructor(props) {

        super(props)
    
        this.state = {

            currentIndex: 0,

            translateValue: 0


        }

    }

    goToPrevSlide = () => {

        if(this.state.currentIndex === 0)

            return;
        
        this.setState(prevState => ({

            currentIndex: prevState.currentIndex - 1,

            translateValue: prevState.translateValue + this.slideWidth()

        }))

    }

    goToNextSlide = () => {

        const { photos } = this.props;

        // to the first image in the array.
        if(this.state.currentIndex === photos.length - 1) {

            return this.setState({

                currentIndex: 0,

                translateValue: 0

            })

        }
        
        // This will not run if we met the if condition above
        this.setState(prevState => ({

            currentIndex: prevState.currentIndex + 1,

            translateValue: prevState.translateValue + -(this.slideWidth())

        }));

    }

    slideWidth = () => {
        
        return document.querySelector('.slide').clientWidth

    }

    render() {

        const { photos } = this.props;

        return (

            <div className="slider">

                <div className="slider-wrapper"

                style={{

                    transform: `translateX(${this.state.translateValue}px)`,

                    transition: 'transform ease-out 0.45s'

                }}>

                    {

                        photos.map((image, i) => (

                            <Slide key={i} image={image} />

                        ))

                    }

                </div>

                {this.state.currentIndex !== 0 && <LeftArrow goToPrevSlide={this.goToPrevSlide} />}

                {this.state.currentIndex !== photos.length - 1 && <RightArrow goToNextSlide={this.goToNextSlide} />}

            </div>

        )

    }

};

const Slide = ({ image }) => {

  const styles = {

    backgroundImage: `url(${image})`,

    backgroundSize: 'contain',

    backgroundRepeat: 'no-repeat',

    backgroundPosition: 'center'

  }

  return <div className="slide" style={styles}></div>

};

const LeftArrow = (props) => {

  return (

    <div className="backArrow arrow" onClick={props.goToPrevSlide}>

      <FiChevronLeft />

    </div>

  );

};

const RightArrow = (props) => {

  return (

    <div className="nextArrow arrow" onClick={props.goToNextSlide}>

      <FiChevronRight />

    </div>

  );

};

export default Carousel;

