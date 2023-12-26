import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode : true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false ,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="mx-auto container justify-center w-screen items-center   ">
      <div className="mt-20 items-center">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=" w-56 text-black rounded-xl relative ">
              <div className="h-[330px] w-56 flex rounded-t-xl">
                <img src={d.image} alt={d.name} className=" object-cover w-full" />
                <div className='absolute top-60'>
                  <p className="font-milonga pl-7 text-3xl text-white">{d.name}</p>
                  <p className="font-urbanist font-semibold text-2xl text-white pl-7">{d.region}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Kebaya Bali`,
    image: `https://lh6.googleusercontent.com/w3zaEW6HbNnxv-vVUMCozwbtxFHsdVq3vPQQgTcD47bkHwGAkmPKvCbhXUAewzy4386kpB63q2gp4V1EbeP_793G19L5fzGhoa_ni6LWv5iFhIi3gBn4jVgH4wZWAJWYvd2wQuIOjDUdR0Wz_QZUo2w`,
    region: `Bali`,
  },
  {
    name: `Baju Bodo`,
    image: `https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2023/08/21/snapinstaapp_368672891_25707979-20230821102543.jpg`,
    region: `Sumatera Selatan`,
  },
  {
    name: `Ulos`,
    image: `https://imgx.parapuan.co/crop/0x0:0x0/700x0/photo/2022/10/18/img_7595jpg-20221018091443.jpg`,
    region: `Sumatera Utara`,
  },
  {
    name: `Baju Kurung`,
    image: `https://muslimahclothing.com/wp-content/uploads/2021/04/KURUNG-ADIONA-STEEL-BLUE-2.jpg`,
    region: `Pahang`,
  },
  {
    name: `Baju Dayak`,
    image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/dsc8590.width-800.format-webp.webp',
    region: `Kalimantan`,
  },
  {
    name: `Ulee Balang`,
    image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/187570873_928636181313016_2975744.width-800.format-webp.webp',
    region: `Aceh`,
  },
  {
    name: `Baju Betabur`,
    image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/WhatsApp_Image_2021-07-31_at_10.3.width-800.format-webp.webp',
    region: `Bengkulu`,
  },
  
];


export default App;
