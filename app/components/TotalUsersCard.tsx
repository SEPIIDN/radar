'use client';

import { useEffect, useState } from 'react';
import TotalUsersChart from './TotalUsersChart';
import TotalUsersTabs from './ui/TotalUsersTabs';

const TotalUsersCard = () => {
  const [isMounted, setIsMounted] =
    useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const days = [
    'Daily',
    'Weekly',
    'Monthly',
    'Annually',
    'Total',
  ];
  return (
    <div className='relative flex flex-col justify-between bg-black rounded-[24px] p-6 shadow-lg'>
      <div className='flex justify-between text-white mb-4'>
        <div className='flex items-center gap-4'>
          <span className='bg-white rounded-full w-2 h-2 drop-shadow-glowingDot'></span>
          <h2 className='text-lg font-semibold'>
            Total Users
          </h2>
        </div>
        <div className='text-white text-5xl font-bold'>
          120250
        </div>
      </div>
      {/* <!-- Chart section (Placeholder) --> */}
      {isMounted && <TotalUsersChart />}

      {/* <!-- Tabs --> */}
      <TotalUsersTabs labels={days} />
    </div>
  );
};
export default TotalUsersCard;
