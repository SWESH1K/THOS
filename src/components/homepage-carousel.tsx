import React from 'react';
import { Carousel } from 'react-bootstrap';
import './homepage-carousel.css';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const HomepageCarousel: React.FC = () => {
  // Sample carousel data - replace these with your actual images
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'First Slide',
      description: 'This is the description for the first slide.'
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2023/08/17/11/01/indian-school-children-8196294_1280.jpg',
      title: 'Second Slide',
      description: 'This is the description for the second slide.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwc2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Third Slide',
      description: 'This is the description for the third slide.'
    }
  ];

  return (
    <div className="homepage-carousel" style={{ position: 'relative', zIndex: 1, marginTop: '0px' }}>
      <Carousel fade interval={3000} controls={true} indicators={true}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomepageCarousel;