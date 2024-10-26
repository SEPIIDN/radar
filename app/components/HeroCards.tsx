import DataTransferredCard from './DataTransferredCard';
import OnlineUsersCard from './OnlineUsersCard';
import ServerUsersCard from './ServerUsersCard';
import TotalUsersCard from './TotalUsersCard';

const HeroCards = () => {
  return (
    <div className='grid grid-cols-1 auto-rows-[22rem] lg:grid-cols-2 gap-6 p-6'>
      {/* <!-- Card 1: Total Users --> */}
      <TotalUsersCard />

      {/* <!-- Card 3: Server Users (Scrollable) --> */}
      <ServerUsersCard />
      {/* <!-- Card 2: Online Users --> */}
      <OnlineUsersCard />

      <DataTransferredCard />
    </div>
  );
};
export default HeroCards;
