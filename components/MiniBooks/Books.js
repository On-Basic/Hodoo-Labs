import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Books = () => {
  const BOOK_DATA = [
    { id: 1, src: '/assets/mini-books/img_book_1.png', alt: 'book-img1', },
    { id: 2, src: '/assets/mini-books/img_book_2.png', alt: 'book-img2', },
    { id: 3, src: '/assets/mini-books/img_book_3.png', alt: 'book-img3', },
    { id: 4, src: '/assets/mini-books/img_book_4.png', alt: 'book-img4', },
    { id: 5, src: '/assets/mini-books/img_book_5.png', alt: 'book-img5', },
    { id: 6, src: '/assets/mini-books/img_book_6.png', alt: 'book-img6', },
    { id: 7, src: '/assets/mini-books/img_book_7.png', alt: 'book-img7', },
    { id: 8, src: '/assets/mini-books/img_book_8.png', alt: 'book-img8', },
    { id: 9, src: '/assets/mini-books/img_book_9.png', alt: 'book-img9', },
    { id: 10, src: '/assets/mini-books/img_book_1.png', alt: 'book-img10', },
    { id: 11, src: '/assets/mini-books/img_book_1.png', alt: 'book-img11', },
    { id: 12, src: '/assets/mini-books/img_book_2.png', alt: 'book-img12', },
    { id: 13, src: '/assets/mini-books/img_book_3.png', alt: 'book-img13', },
    { id: 14, src: '/assets/mini-books/img_book_4.png', alt: 'book-img14', },
    { id: 15, src: '/assets/mini-books/img_book_5.png', alt: 'book-img15', },
    { id: 16, src: '/assets/mini-books/img_book_6.png', alt: 'book-img16', },
    { id: 17, src: '/assets/mini-books/img_book_7.png', alt: 'book-img17', },
    { id: 18, src: '/assets/mini-books/img_book_8.png', alt: 'book-img18', },
    { id: 19, src: '/assets/mini-books/img_book_9.png', alt: 'book-img19', },

  ]
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '30px',
  };
  return (
    <Container>
      <StyledSlider {...settings}>
      {BOOK_DATA.map(({ id, src, alt }) => {
        return <SliderImg key={id} alt={alt} src={src} />;
      })}
      </StyledSlider>
    </Container>
  );
}

export default Books;

const Container = styled.div`
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    height: 400px;
    border-radius: 20px;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;
const SliderImg = styled.img`
  width: 200px;
  height: 300px;
`;