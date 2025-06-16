import React from 'react'
import "./Home.css"
import RayPower from "../../assets/RAY POWER.png"
import YummyBerry from "../../assets/yummyberry.png"
import HhEcoCups from "../../assets/hh-ecocups.png"
import RevmoGloves from "../../assets/revmo-gloves.png"

const Home = () =>{
    const products = [
        {
            name: "Ray Power",
            image: RayPower,
            link: "https://ray-power.vercel.app",
                description: "Quvvatlantiruvchi innovatsion texnologiyalar."
        },
        {
            name: "Yummy Berry",
            image: YummyBerry,
            link: "https://strawberry-test.netlify.app/",
            description: "Tabiiy rezavorlik asosidagi mahsulotlar."
        },
        {
            name: "HH Eco Cups",
            image: HhEcoCups,
            link: "https://hh-ecocups.netlify.app",
            description: "Atrof-muhitga zarar yetkazmaydigan qog‘oz stakanlar."
        },
        {
            name: "Revmo Gloves",
            image: RevmoGloves,
            link: "https://revmo-gloves.vercel.app/",
            description: "Xavfsizlik uchun qulay va mustahkam qo‘lqoplar."
        }
    ];

    return (
    <div id='Home'>
      <div id="Home-main-top">

        {/* *   MAIN TOP PRODUCTS START */}

        <div id="Home-main-top-products">
            <div className="done_works">
                <div className="main_product_card">
                        {products.map((item, index) => (
                            <div className="product" key={index}>
                                <div className="product_overlay">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer"><button>Saytni ko'rish</button></a>
                                </div>
                                <img src={item.image} alt={item.name} className="product-image" />
                                <h3 className="product-title">{item.name}</h3>
                                <p className="product-description">{item.description}</p>

                            </div>
                        ))}

                </div>
            </div>
        </div>

        {/* *   MAIN TOP PRODUCTS END */}


        {/* *   MAIN TOP INFO START */}

        <div id="Home-main-top-info">
            <div id="Home-main-tInfo-lBox">
                {/* Image joylashadi  */}
                <img src="https://previews.dropbox.com/p/thumb/ACjc_2zol1QMqwVAG6-EiKsNjLO2BEw5sNeuHh3VOLjnw3vUsDjaMIwf93OqZpNdNb6DXL0VKlJOiPoKCRJ-f_Y88rEEeAfZRLjildaXub2xTTG9PaXh0h1PwxawAcTydUjOglajAaTUfY_H7LA2lwG6XuN0Ajbo19BNQhRAkhiyo7ONlX6uZBAz4AHXNuJEk6lfaw6tb0MyJFxrNgvHAHeC_hyleuhER0zd-1t1j1aJSPhHN673ol9HHhck_hgPAf-MpNdQT_FAbAqVoPqMOMANK9LbmJ6uYcW7NPXuGlHAmTUrhv2XHVv6fbjXfpJaa4ZDuWmQwW0I9lcy7r8__7HD/p.jpeg?is_prewarmed=true" alt="About Image" />
            </div>
            <div id="Home-main-tInfo-rBox">
                <h2>BIZ HAQIMIZDA</h2>

                <p>
                “Kichik biznesni rivojlantirish jamg‘armasi” Masʼuliyati cheklangan  <br /> jamiyati tijorat tashkiloti bo‘lib, O‘zbekiston Respublikasi Prezidentining <br /> “O‘zbekiston Respublikasi Prezidentining  tadbirkorlar bilan 2023-yildagi  ochiq <br /> muloqotida belgilangan vazifalarni amalga oshirish chora-tadbirlari to‘g‘risida” <br />2023-yil 4-sentyabrdagi PQ-292-son va “Kichik biznesni rivojlantirishni<br /> moliyaviy va institutsional qo‘llab-quvvatlash chora-tadbirlari to‘g‘risida” 2023-yil 14-sentyabrdagi<br /> PQ-306-son qarorlariga muvofiq, “Biznesni rivojlantirish banki”<br /> Aksiyadorlik tijorat bank taʼsischiligida<br /> Masʼuliyati cheklangan jamiyat tashkiliy-huquqiy shaklida tashkil etilgan.
                </p>
                    <br />
                <h4><u>Kichik biznesni rivojlantirish jamg'armasi:</u></h4> <br />
                <ul>
                    <li>hududlarning iqtisodiy salohiyati, tadbirkorlikning rivojlanganlik darajasi va boshqa mezonlardan <br /> kelib chiqib, markazlarning dastlabki ustav kapitalini shakllantiradi;</li>
                    <li>Jamg‘arma va markazlar faoliyatining institutsional va moliyaviy salohiyatini oshirish maqsadida <br /> xalqaro moliya institutlari va boshqa tashkilotlarning ekspertlari, kreditlari, <br /> investitsiyalari va texnik ko‘maklarini jalb qiladi;</li>
                    <li>Dastur doirasida markazlarning faoliyatini tashkil qilishni metodologik jihatdan qo‘llab-quvvatlaydi;</li>
                    <li>Biznesni rivojlantirish banki va markazlarga yuklatilgan vazifalarni samarali amalga <br /> oshirishni tashkil etish uchun muvofiqlashtiruvchi va bog‘lovchi bo‘g‘in vazifasini bajaradi;</li>
                </ul>
            </div>
        </div>

        {/* *   MAIN TOP INFO END */}


        {/* *   MAIN CONTACT START  */}

        <div id="Contact">
        <div id="Contact-main-top">
                    <h1>Biz bilan bog'laning </h1>
                    <p>Mahsulotlarimiz va xizmatlarimiz haqida ko'proq ma'lumot olish uchun. Iltimos, bizga elektron pochta xabarini yuboring. <br /> Bizning xodimlarimiz sizga yordam berish uchun doimo u erda bo'lishadi. Ikkilanmang!</p>
                </div>
                <div id="Contact-main-card">
                    <div id="Contact-main-lCard">
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-location "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Manzil</h3>
                                <p>Buxoro shahri , <br />  Abu Ali Ibn Sino ko'chasi  <br />39-uy </p>
                            </div>
                        </div>
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-phone "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Call Markazi </h3>
                                <p>
                                Mobile: <a href="tel: +998973024500">+998(97) 302-45-00</a> <br />
                                Office:<a href="tel: +998553023566">+998(55) 302-35-66</a><br />
                                Telegram BOT : <a href="https://t.me/buxoro_tadbirkorlar_klubi">KBKM BOT</a>
                                </p>
                            </div>
                        </div>
                        <div id="Contact-main-sCard">
                            <div id="Contact-main-sLCard">
                                <i className="fa-solid fa-clock "></i>
                            </div>
                            <div id="Contact-main-sRCard">
                                <h3>Ish Vaqti </h3>
                                <p>
                                Dushanba - Juma : 9:00 - 17:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="Contact-main-rCard">
                        <form action="https://getform.io/f/awnwvrrb" method="POST">
                            {/* User Info */}

                            <h3>Ism (Sharifingiz)</h3>
                            <input type="text" name="name" placeholder="Ism (Sharifingiz)" required/>

                            <h3>E-pochta manzilingiz </h3>
                            <input type="email" name="email" placeholder="example@gmail.com" required/>

                            <h3>Xabar</h3>
                            <input type="text" name="message" placeholder="Assalom-u aleykum! ... haqida so'ramoqchiman " required/>

                            {/* add hidden Honeypot input to prevent spams */}
                            <input type="hidden" name="_gotcha" style={{display: 'none'}}/>

                            {/*/!* checkbox handle *!/*/}
                            {/*<input type="checkbox" name="subscribe" value="yes" checked/>*/}
                            {/*<input type="hidden" name="subscribe" value="no"/>*/}

                            {/*/!* radio button handle *!/*/}
                            {/*<input type="radio" name="gender" value="male" checked/>*/}
                            {/*<input type="radio" name="gender" value="female"/>*/}
                            {/*<input type="radio" name="gender" value="other"/>*/}

                            {/*/!* select field handle *!/*/}
                            {/*<select name="work-experience">*/}
                            {/*    <option value="one-year">0-1 years</option>*/}
                            {/*    <option value="one-five-years">1-5 years</option>*/}
                            {/*</select>*/}

                            <button type="submit">Send</button>
                        </form>
                    </div>

                </div>
        </div>

        {/* *   MAIN CONTACT END  */}

      </div>
    </div>
  )
}
export default Home