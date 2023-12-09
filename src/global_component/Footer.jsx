import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-[120px] px-32 items-center h-auto flex flex-col gap-56 sm:bg-red-500 ">
        <div className="flex gap-40">
          <div>
            <h2 className="font-urbanist font-semibold text-white text-2xl">Contact</h2>
            <div className="text-white text-base font-urbanist">
              <p>0895395343223</p>
              <p>fattahganteng@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className="font-urbanist font-semibold text-white text-2xl">Shop</h2>
            <div className="text-white text-base font-urbanist">
              <p>Tops</p>
              <p>Bottoms</p>
              <p>Outerwear</p>
              <p>New in</p>
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h2 className="font-urbanist font-semibold text-white text-2xl">Company</h2>
            <div className="text-white text-base font-urbanist">
              <p>Cookies</p>
              <p>Payments</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Security</p>
            </div>
          </div>
          <div>
            <h2 className="font-urbanist font-semibold text-white text-2xl">Newsletter</h2>
            <div className="text-white text-base font-urbanist">
              <p>Be the first to hear about our latest offers</p>
              <div className="flex items-center">
                <input type="text" placeholder="YOUR EMAIL ADDRESS" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" className="w-full h-10 px-3 mt-3 border border-white bg-transparent rounded-sm focus:outline-none placeholder-white" />
                <a href="#">
                  <button className="border border-white rounded-sm h-10 w-10 mt-3">
                    <ion-icon name="send-sharp"></ion-icon>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <hr className="border-1 border-white w-screen" />
          </div>
          <div className="flex my-7 justify-center space-x-96">
            <div>
              <p className="text-white font-urbanist text-base">Copyright &copy; 2023 Lorem Ipsum Ltd. </p>
            </div>
            <div className="flex gap-4  text-white ">
              <ion-icon name="logo-instagram" size="large"></ion-icon>
              <ion-icon name="logo-facebook" size="large"></ion-icon>
              <ion-icon name="logo-twitter" size="large"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
