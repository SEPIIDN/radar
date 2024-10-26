'use client';
import { useEffect, useState } from 'react';
import OnlineUsersChart from './OnlineUsersChart';
import CircularWithValueLabel from './ui/CircularProgressComponent';
import BasicTabs from './ui/TabsComponent';

const OnlineUsersCard = () => {
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
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <span className='bg-white rounded-full w-2 h-2 drop-shadow-glowingDot'></span>
            <h2 className='text-lg font-semibold'>
              Online Users
            </h2>
          </div>
          <div className='flex items-center gap-2 mt-2 ml-2'>
            <div className='relative border border-white rounded-full h-4 w-4'>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-white rounded-full h-1 w-1'></div>
            </div>
            <p className='text-white text-xs font-thin'>
              Active Users Now
            </p>
          </div>
        </div>
        <div className='text-white text-5xl font-bold'>
          120250
        </div>
      </div>
      {/* <!-- Chart section (Placeholder) --> */}

      <div className='flex flex-col gap-5'>
        {isMounted && <OnlineUsersChart />}
        <div className='flex justify-center items-center gap-8'>
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
      </div>

      {/* <!-- Tabs --> */}

      <div className='mt-10'></div>
      <BasicTabs labels={days} />
    </div>
  );
};
export default OnlineUsersCard;
