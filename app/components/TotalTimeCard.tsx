'use client';
import { useEffect, useState } from 'react';
import OnlineUsersChart from './OnlineUsersChart';
import CircularWithValueLabel from './ui/CircularProgressComponent';
import BasicTabs from './ui/TabsComponent';

const TotalTimeCard = () => {
  const [isMounted, setIsMounted] =
    useState(false);

  interface Progress {
    value: number;
    country: string;
    label: string;
    image: string;
  }
  const progressArray: Progress[] = [
    {
      value: 33,
      country: 'Iran',
      label: 'TEH1',
      image: '/iran.png',
    },
    {
      value: 25,
      country: 'Germany',
      label: 'GER2',
      image: '/germany.png',
    },
    {
      value: 12,
      country: 'Turkey',
      label: 'TRK3',
      image: '/turkey.png',
    },
    {
      value: 4,
      country: 'Turkey',
      label: 'TRK2',
      image: '/turkey.png',
    },
  ];

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
    <div className='flex flex-col justify-between bg-black rounded-[24px] p-6 shadow-lg lg:min-h-[450px]'>
      <div className='flex justify-between text-white mb-4'>
        <div className='flex items-center gap-4'>
          <span className='bg-white rounded-full w-2 h-2 drop-shadow-glowingDot'></span>
          <h2 className='text-lg font-semibold'>
            Total Time
          </h2>
        </div>
      </div>

      <div className='text-white flex justify-center font-bold'>
        <span className='text-5xl'>2</span>
        <span className=' text-3xl mt-4 mr-3'>
          years
        </span>
        <span className='text-5xl'>2</span>
        <span className=' text-3xl mt-4 mr-3'>
          months
        </span>
        <span className='text-5xl'>520</span>
        <span className=' text-3xl mt-4 mr-3'>
          hours
        </span>
      </div>
      {/* <!-- Chart section (Placeholder) --> */}

      <div className='flex flex-col gap-5'>
        <div className='flex justify-center items-center gap-8 mt-10 -mb-12'>
          <div className='flex justify-center items-center gap-10'>
            {isMounted &&
              progressArray.map(
                ({
                  value,
                  country,
                  label,
                  image,
                }) => (
                  <div
                    key={label}
                    className='flex flex-col justify-center items-center gap-1'
                  >
                    <CircularWithValueLabel
                      percentage={value}
                    />

                    <div className='flex items-center gap-2'>
                      <img
                        src={`${image}`}
                        className='w-4 h-4'
                      />
                      <p className='text-white text-sm'>
                        {country} / {label}
                      </p>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
        {isMounted && <OnlineUsersChart />}
      </div>

      {/* <!-- Tabs --> */}

      <div className='mt-10'></div>
      <BasicTabs labels={days} />
    </div>
  );
};
export default TotalTimeCard;
