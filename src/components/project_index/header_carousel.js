import React from 'react';
import Carousel from 'nuka-carousel';
import Decorators from './decorators';
import { Link } from 'react-router-dom';
import '../../css/project_index.css'

const HeaderCarousel = () => {
  return (
    <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>

      <div className="header-carousel-slide">
        <img src="https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg" alt="header-carousel-slide"/>
        <div className="carousel-text one">
          <h1>Creators</h1><h1>thrive here.</h1>
          <h2>Quickstarter creators pursue bold ideas on their own terms. Start a project today.</h2>
          <Link to="/projects/new"><button>Start a project</button></Link>
        </div>
      </div>

      <div className="header-carousel-slide slide-three">
        <img className="image-three" src="http://s3-us-east-2.amazonaws.com/quickstarter-pro/projects/images/000/000/038/original/tiny_telephone.jpg?1498837355" alt="header-carousel-slide"/>
        <div className="carousel-text three">
          <h1>Tiny Telephone Oakland</h1>
          <h2>Help one of the busiest recording studios in California</h2>
          <Link to={`/projects/${38}`}><button>View project</button></Link>
        </div>
      </div>

      <div className="header-carousel-slide">
        <img src="http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/09/tny-14.jpg" alt="header-carousel-slide"/>
        <div className="carousel-text two">
          <h1>Unbounded</h1>
          <h2>A documentary following an adventure into Patagonia for exploration and conservation</h2>
          <Link to={`/projects/${34}`}><button>View project</button></Link>
        </div>
      </div>

      <div className="header-carousel-slide slide-four">
        <img className="image-four" src="http://s3-us-east-2.amazonaws.com/quickstarter-pro/projects/images/000/000/030/original/wood_keyboard.jpg?1498837353" alt="header-carousel-slide"/>
        <div className="carousel-text four">
          <h1>The Oakly</h1>
          <h2>A fully programmable, compact, portable oak keyboard</h2>
          <Link to={`/projects/${30}`}><button>View project</button></Link>
        </div>
      </div>

    </Carousel>
  );
};

export default HeaderCarousel;
