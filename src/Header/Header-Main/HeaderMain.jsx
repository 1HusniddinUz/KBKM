import React from 'react';
import Slider from 'react-slick';
import "./HeaderMain.css"
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';  

const products = [
  { id: 1, name: 'Brending', description: 'Bepul consulting xizmatlar', link: '#' },
  { id: 2, name: 'Korxona saytini yaratish', description: 'Xizmatlar', link: '#' },
  { id: 3, name: 'Onlayn bozorlar orqali sotish', description: 'Bepul consulting xizmatlar', link: '#' },
  { id: 4, name: 'Ijtimoiy tarmoqlarda sotish', description: 'Bepul consulting xizmatlar', link: '#' },
  { id: 5, name: 'Google va Yandexda reklama', description: 'Bepul consulting xizmatlar', link: '#' },
  { id: 6, name: 'Sog\'lom buxgalteriyani yuritish kurslari', description: 'Bepul consulting xizmatlar', link: '#' },
  { id: 7, name: 'Bizness yuritish kursi', description: 'Bepul consulting xizmatlar', link: '#' }
];

const HeaderMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div id="HeaderMain">
      <div id="Header-main-top">
        <div id="Header-main-top-tBox">
          <h2>BIZNESINGIZNI BIZ BILAN <br /> RIVOJLANTIRING</h2>
          <div id="Header-main-top-tSbox">
            <button><i className="fa-sharp fa-solid fa-circle-play"></i></button>
            <p>Посмотрите видео <br /> о нашем клубе</p>
          </div>
        </div>
      </div>
    <div id="HeaderMainProducts">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-card-content">
              {/* <p>{product.description}</p> */}
              <div className="product-link">
                <a href={product.link}>
                  <h3>{product.name}</h3>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default HeaderMain;
