'use client';
import {
  AreaChart,
  Area,
  Tooltip,
} from 'recharts';

const AreaChartComponent = () => {
  const days = [
    {
      name: 'Jan',
      product1: 4000,
      product2: 2400,
    },
    {
      name: 'Feb',
      product1: 3000,
      product2: 2210,
    },
    {
      name: 'Mar',
      product1: 2000,
      product2: 2290,
    },
    {
      name: 'Apr',
      product1: 2780,
      product2: 2000,
    },
    {
      name: 'May',
      product1: 1890,
      product2: 2181,
    },
    {
      name: 'Jun',
      product1: 2390,
      product2: 2500,
    },
  ];

  return (
    <div className='w-full mt-10'>
      <AreaChart
        width={860}
        height={150}
        data={days}
      >
        <defs>
          <linearGradient
            id='blue-gradient'
            x1='0'
            x2='0'
            y1='0'
            y2='1'
          >
            <stop
              offset='5%'
              stopColor='#73FFF566'
            />
            <stop
              offset='100%'
              stopColor='#99999903'
            />
          </linearGradient>
          <filter id='glowing-line'>
            <feDropShadow
              stdDeviation='5'
              floodColor='#73FFF5'
            />
            <feDropShadow
              stdDeviation='35'
              floodColor='#73FFF5'
            />
            <feDropShadow
              stdDeviation='70'
              floodColor='#73FFF5'
            />
            <feDropShadow
              stdDeviation='120'
              floodColor='#73FFF5'
            />
            <feDropShadow
              stdDeviation='210'
              floodColor='#73FFF5'
            />
          </filter>
        </defs>

        <Tooltip content={<CustomTooltip />} />
        <Area
          type='monotone'
          dataKey='product1'
          stroke='#73FFF5'
          fill='url(#blue-gradient)'
          stackId='1'
        />
      </AreaChart>
    </div>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white rounded-full py-1 px-4'>
        <p className='text-sm text-black'>
          <span>{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
