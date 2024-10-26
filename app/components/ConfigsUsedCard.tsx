'use client';

import { useEffect, useState } from 'react';
import BasicTabs from './ui/TabsComponent';
import TotalUsersChart from './TotalUsersChart';

const ConfigsUsedCard = () => {
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
    <div className='flex flex-col justify-between bg-black rounded-[24px] p-6 shadow-lg lg:min-h-[400px]'>
      <div className='flex justify-between text-white mb-4'>
        <div className='flex items-center gap-4'>
          <span className='bg-white rounded-full w-2 h-2 drop-shadow-glowingDot'></span>
          <h2 className='text-lg font-semibold'>
            Configs Used
          </h2>
        </div>
      </div>
      <div className='text-white flex justify-center text-5xl font-bold'>
        8,566,229
      </div>
      {/* <!-- Chart section (Placeholder) --> */}
      {isMounted && <TotalUsersChart />}

      {/* <!-- Tabs --> */}
      <BasicTabs labels={days} />
    </div>
  );
};
export default ConfigsUsedCard;
