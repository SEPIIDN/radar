'use client';
import CircularWithValueLabel from './ui/CircularProgressComponent';

const ServerUsersCard = () => {
  interface Server {
    name: string;
    flag: string;
    badge?: string;
    users: number;
    percentage: number;
    primary: boolean;
  }
  const servers: Server[] = [
    {
      name: 'Tehran',
      flag: '/iran.png',
      badge: '/CamadaStar.png',
      users: 10369,
      percentage: 56,
      primary: true,
    },
    {
      name: 'TEH1',
      flag: '/iran.png',
      badge: '/CamadaIII.png',
      users: 10369,
      percentage: 26,
      primary: false,
    },
    {
      name: 'TEH2',
      flag: '/iran.png',
      badge: '/CamadaII.png',
      users: 10369,
      percentage: 19,
      primary: false,
    },
    {
      name: 'TEH3',
      flag: '/iran.png',
      badge: '/CamadaI.png',
      users: 10369,
      percentage: 17,
      primary: false,
    },
    {
      name: 'TEH4',
      flag: '/iran.png',
      badge: '',
      users: 10369,
      percentage: 13,
      primary: false,
    },
    {
      name: 'TEH5',
      flag: '/iran.png',
      badge: '',
      users: 10369,
      percentage: 12,
      primary: false,
    },
    {
      name: 'Germany',
      flag: '/germany.png',
      badge: '/CamadaSilverStar.png',
      users: 10369,
      percentage: 12,
      primary: true,
    },
    {
      name: 'GER1',
      flag: '/germany.png',
      badge: '/CamadaIII.png',
      users: 10369,
      percentage: 12,
      primary: false,
    },
    {
      name: 'GER2',
      flag: '/germany.png',
      badge: '/CamadaII.png',
      users: 10369,
      percentage: 12,
      primary: false,
    },
    {
      name: 'GER3',
      flag: '/germany.png',
      badge: '/CamadaI.png',
      users: 10369,
      percentage: 12,
      primary: false,
    },
    {
      name: 'GER4',
      flag: '/germany.png',
      badge: '',
      users: 10369,
      percentage: 12,
      primary: false,
    },
    {
      name: 'GER5',
      flag: '/germany.png',
      badge: '',
      users: 10369,
      percentage: 12,
      primary: false,
    },
  ];

  return (
    <div className='bg-black  rounded-[24px] p-6 shadow-lg lg:col-span-1'>
      <div className='flex items-center gap-4'>
        <span className='bg-white rounded-full w-2 h-2 drop-shadow-glowingDot'></span>
        <h2 className='text-lg text-white font-semibold'>
          Server Users
        </h2>
      </div>
      {/* <!-- List of servers --> */}
      <div className='text-white flex flex-col gap-4 mt-5 mx-4 overflow-y-auto max-h-[83%] server-users-scrollbar'>
        {servers.map((server) => (
          <>
            <div
              className={`flex justify-between items-center py-1 px-4 rounded-full ${
                server.primary
                  ? 'bg-[#2C2C2C]'
                  : 'bg-[#161616]'
              }`}
            >
              <div className='flex justify-start items-center'>
                <img
                  className='mr-4'
                  src={server.badge}
                  alt={server.badge}
                />
                <img
                  className='w-4 h-4 mr-1'
                  src={server.flag}
                  alt={server.flag}
                />
                <div className=' text-lg font-bold'>
                  {server.name}
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <span className='text-lg font-bold'>
                  {server.users}
                </span>
                <span className='ml-1 -mb-2 text-xs font-thin'>
                  Users
                </span>
              </div>
              <CircularWithValueLabel
                percentage={server.percentage}
              />
            </div>
          </>
        ))}
      </div>
      {/* <!-- Add other server entries similarly --> */}
    </div>
  );
};
export default ServerUsersCard;
