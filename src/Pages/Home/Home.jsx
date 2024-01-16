import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DealsDay from './DealsDay/DealsDay';
import TopDeals from './TopDeals/TopDeals';
import Banner from './Banner';

export default function Home() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('dealsday');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case 'dealsday':
        return <DealsDay />;
      case 'topdeals':
        return <TopDeals />;
      // Add more cases for other components if needed
      default:
        return null;
    }
  };

  return (
    <>
      <div className=''>
        <Banner />
      </div>

      <div className='flex space-x-4 mb-4 mt-24 ml-10 '>
        <button
          onClick={() => handleTabClick('dealsday')}
          className={`${
            selectedTab === 'dealsday' ? 'bg-black text-white' : 'bg-white text-black'
          } p-2 px-4 rounded-md border cursor-pointer`}
        >
          Deals Of the Day
        </button>
        <button
          onClick={() => handleTabClick('topdeals')}
          className={`${
            selectedTab === 'topdeals' ? 'bg-black text-white' : 'bg-white text-black'
          } p-2 px-4 rounded-md border cursor-pointer`}
        >
          Deals Of the Day
        </button>
       
      </div>

      {renderSelectedComponent()}
    </>
  );
}
