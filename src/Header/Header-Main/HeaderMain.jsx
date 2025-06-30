import React from 'react';
import Slider from 'react-slick';
import "./HeaderMain.css"
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';  

const products = [
  { id: 1, name: 'Logotip | Brending xizmati', description: 'Bepul consulting xizmatlar', link: 'https://t.me/buxoro_tadbirkorlar_klubi' },
  { id: 2, name: 'Korxona saytini yaratish', description: 'Xizmatlar', link: 'https://t.me/buxoro_tadbirkorlar_klubi' },
  { id: 3, name: 'CRM (korxonani tizimlashtirish)', description: 'Bepul consulting xizmatlar', link: 'https://t.me/buxoro_tadbirkorlar_klubi' },
  { id: 4, name: 'Telegram BOT ', description: 'Bepul consulting xizmatlar', link: 'https://t.me/buxoro_tadbirkorlar_klubi' },
  { id: 6, name: 'Buxgalteriya kurslari', description: 'Bepul consulting xizmatlar', link: 'https://t.me/buxoro_tadbirkorlar_klubi' },

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
            <p>Klubimiz haqida videoni <br/> tomosha qiling</p>
          </div>
        </div>
        <div id="HeaderMainProducts">
          <Slider {...settings}>
            {products.map(product => (
                <div key={product.id} className="product-card">
                  <a href={product.link} target={"_blank"} rel="noopener noreferrer" >
                    <div className="product-card-content">
                      {/*<p>{product.description}</p>*/}
                      <div className="product-link">
                        <a href={product.link}>
                          <h3>{product.name}</h3>
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
