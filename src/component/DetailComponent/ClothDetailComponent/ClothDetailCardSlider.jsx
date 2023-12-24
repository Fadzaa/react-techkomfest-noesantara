import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="w-full">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=" h-[450px] text-black rounded-xl relative">
              <div className="h-56 flex rounded-t-xl">
                <img src={d.image} alt="" className="h-[330px] w-56 object-cover" />
                <div className='absolute top-60'>
                  <p className=" font-milonga pl-7  text-3xl text-white">{d.name}</p>
                  <p className=" font-urbanist font-semibold text-2xl text-white pl-7">{d.region}</p>
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
    name: `Rafiu Sidqi`,
    image: `https://o-cdn-cas.sirclocdn.com/parenting/images/Baju-Tradisional-Adat-Bali-1.width-800.format-webp.webp`,
    region: `Sze`,
  },
  {
    name: `Rafiu Sidqi`,
    image: `https://o-cdn-cas.sirclocdn.com/parenting/images/Baju-Tradisional-Adat-Bali-1.width-800.format-webp.webp`,
    region: `Sze`,
  },
  {
    name: `Rafiu Sidqi`,
    image: `https://o-cdn-cas.sirclocdn.com/parenting/images/Baju-Tradisional-Adat-Bali-1.width-800.format-webp.webp`,
    region: `Sze`,
  },
  {
    name: `Rafiu Sidqi`,
    image: `https://o-cdn-cas.sirclocdn.com/parenting/images/Baju-Tradisional-Adat-Bali-1.width-800.format-webp.webp`,
    region: `Sze`,
  },
  {
    name: `Rafiu Sidqi`,
    image: `https://o-cdn-cas.sirclocdn.com/parenting/images/Baju-Tradisional-Adat-Bali-1.width-800.format-webp.webp`,
    region: `Sze`,
  },
];

export default App;
