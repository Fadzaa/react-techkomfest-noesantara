import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InformativeDetailMain = () => {
  const [informativeData, setInformativeData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://zell-techkomfest.000webhostapp.com/api/informative/detail/1');
      const data = response.data;
      setInformativeData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {informativeData && (
        <div>
          <h2 className='text-5xl font-milonga text-primary text-center mt-6'>{informativeData.province}</h2>
          <p className='text-justify mt-9 font-urbanist'>{informativeData.detail_description}</p>
          <p className='text-justify mt-9 font-urbanist'>{informativeData.history}</p>
        </div>
      )}
    </div>
  );
};

export default InformativeDetailMain;
