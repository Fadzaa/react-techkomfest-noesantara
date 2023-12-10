import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-primary flex w-screen pt-10 lg:flex-col lg:pt-[120px] lg:items-center lg:gap-56 ">
        <div className="flex flex-col lg:gap-36">
          <div className="pl-9 lg:flex lg:gap-[120px] lg:ml-[104px]">
            <div className="flex gap-9 lg:gap-[210px]">
              <div>
                <h2 className="font-urbanist font-semibold text-xl text-white lg:text-2xl">Contact</h2>
                <div className="text-white text-xs font-urbanist lg:text-base">
                  <p>0895395343223</p>
                  <p>fattahganteng@gmail.com</p>
                </div>
              </div>
              <div>
                <h2 className="font-urbanist font-semibold text-xl text-white lg:text-2xl">Shop</h2>
                <div className="text-white text-xs font-urbanist lg:text-base">
                  <p>Tops</p>
                  <p>Bottoms</p>
                  <p>Outerwear</p>
                  <p>New in</p>
                  <p>About</p>
                  <p>Blog</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-9 lg:flex-row lg:gap-[120px]">
              <div>
                <h2 className="font-urbanist font-semibold text-xl text-white lg:text-2xl">Company</h2>
                <div className="text-white text-xs font-urbanist lg:text-base">
                  <p>Cookies</p>
                  <p>Payments</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Security</p>
                </div>
              </div>
              <div>
                <h2 className="font-urbanist font-semibold text-xl text-white lg:text-2xl">Newsletter</h2>
                <div className="text-white text-xs font-urbanist lg:text-base">
                  <p>Be the first to hear about our latest offers</p>
                  <div className="flex items-center">
                    <input type="text" placeholder="YOUR EMAIL ADDRESS" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" className="w-[260px] h-10 px-3 mt-3 border border-white bg-transparent rounded-sm focus:outline-none placeholder-white" />
                    <a href="#">
                      <button className="border border-white rounded-sm h-10 w-10 mt-3">
                        <ion-icon name="send-sharp"></ion-icon>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[119px] lg:mt-[65px]'>
            <div className="h-[1px] bg-white w-screen"></div>
            <p className="text-center text-white text-base font-urbanist my-8 lg:mt-11">Copyright &copy; 2023 Lorem Ipsum Ltd.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
