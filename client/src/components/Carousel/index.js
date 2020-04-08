import React, { Component } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";

// import "./style.css";

const imgURLs = [
    "https://unsplash.com/photos/XuQGqCBpNGk/download",
    "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/mexico-city-travel.adapt.1900.1.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/08/12/amsterdam-gabled-houses.jpg?w968h681",
    "https://cdn.lifestyleasia.com/wp-content/uploads/2019/07/09102106/istock_629604122.cd94e151810.original-1.jpg",
    "https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg",
    "https://www.thestar.com/content/dam/thestar/life/travel/2012/11/08/quebec_travel_montreal_a_stunning_bargain_in_offseason/old_montreal_quebeccanada.jpeg",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdebbikickham%2Ffiles%2F2019%2F02%2FForbes-Conrad-Bora-Bora-Nui-1200x645.jpg",
    "https://tr-images.condecdn.net/image/0OxVGkqyA58/crop/2040/f/new-orleans-gettyimages-534573323.jpg",
]

class Carousel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }; 
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgURLs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = imgURLs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
        return (
        <div className="carousel">
            <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
            <ImageSlide url={ imgURLs[this.state.currentImageIndex] } />
            <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
        </div>
        );
    }
}
  
export default Carousel;