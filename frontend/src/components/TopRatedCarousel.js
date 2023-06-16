import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const TopRatedCarousel = ({topPro}) => {

   

  return (
    <div >
    <Container>

<Carousel>

{
    topPro?.map((product)=>(


        <Carousel.Item key={product.name}>
      <Link to={`/product/${product._id}`}><img
          className="d-block w-100 carouselImage"
          src={product.image}
          alt="First slide"
         
        /> </Link> 
        <Carousel.Caption>
          <h3 >{product.name}</h3>
          <p>₹{product.price}</p>
        </Carousel.Caption>
      </Carousel.Item>

    ))
}
      
      
      
    </Carousel>
    </Container>
      
    </div>
  )
}

export default TopRatedCarousel
