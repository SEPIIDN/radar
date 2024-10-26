import ConfigsUsedCard from './ConfigsUsedCard';
import TotalTimeCard from './TotalTimeCard';

const SecondHeroCards = () => {
  return (
    <div className='grid grid-cols-1 auto-rows-[18rem] lg:grid-cols-2 gap-6 p-6 mt-20'>
      <TotalTimeCard />
      <ConfigsUsedCard />
    </div>
  );
};
export default SecondHeroCards;
