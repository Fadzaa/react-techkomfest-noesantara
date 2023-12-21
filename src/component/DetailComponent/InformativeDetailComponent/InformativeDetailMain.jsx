import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { house4 } from "../../../utils/images.js";

const InformativeDetailMain = () => {
  const [informativeData, setInformativeData] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://zell-techkomfest.000webhostapp.com/api/informative/detail/1"
      );
      const data = response.data;
      setInformativeData(data.data);
      setLoading(false); // Set loading to false after data is fetched
      console.log(data.data);
    } catch (error) {
      setLoading(false); // Set loading to false in case of an error
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="loading-animation mx-auto text-center justify-center ">
          Loading...
        </div>
      ) : (
        informativeData && (
          <div className="w-7/12 lg:w-[900px] lg:ml-[280px] mx-auto mt-16 ">
            <div id="about" className="lg:flex lg:flex-row lg:gap-6">
              <div>
                <div className="flex flex-col gap-5  ">
                  <h2 className="text-[36px] font-milonga text-black text-center lg:text-[48px] lg:text-left ">
                    {informativeData.province}
                  </h2>
                  <hr className="border-gray-400 lg:w-[485px] " />
                </div>
                <p className="text-left mt-9 font-urbanist w-full text-[16px] lg:w-[586px]">
                {informativeData.detail_description}
              </p>
               
              </div>
              
              <img
                  className=" object-cover  rounded-xl w-[256px] h-[144px] mt-[21px] lg:w-[347px] lg:h-[232px]"
                  src={house4}
                  alt=""
                />
            </div>
            <div id="history">
              <div className="flex flex-row gap-7 items-center mt-[61px]">
                <h1 className="text-[32px] font-urbanist font-bold">History</h1>
                <hr className="border-black w-[89px] items-center justify-center" />
              </div>
              <p className="text-justify mt-7 font-urbanist">
                {informativeData.history}
              </p>
            </div>
            <div id="geography">
              <div className="flex flex-row gap-7 items-center mt-[61px]">
                <h1 className="text-[32px] font-urbanist font-bold">
                  Geography
                </h1>
                <hr className="border-black w-[89px] items-center justify-center" />
              </div>
              <p className="text-justify mt-7 font-urbanist">
                {informativeData.geography}
              </p>
            </div>
            <div id="demographics">
              <div className="flex flex-row gap-7 items-center mt-[61px]">
                <h1 className="text-[32px] font-urbanist font-bold">
                  Demographics
                </h1>
                <hr className="border-black w-[89px] items-center justify-center" />
              </div>
              <p className="text-justify mt-7 font-urbanist">
                {informativeData.demographics}
              </p>
            </div>
            <div id="art-culture">
              <div className="flex flex-row gap-7 items-center mt-[61px]">
                <h1 className="text-[32px] font-urbanist font-bold ">
                  Art And Culture
                </h1>
                <hr className="border-black w-[89px] items-center justify-center" />
              </div>
              <p className="text-justify mt-7 font-urbanist">
                {informativeData.artculture}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default InformativeDetailMain;
