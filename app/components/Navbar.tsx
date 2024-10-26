import { FaUser } from 'react-icons/fa6';
import { FaRegBell } from 'react-icons/fa6';
import { FaUpRightFromSquare } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='bg-primary-800 flex justify-between items-center px-6 py-4 text-white rounded-br-3xl rounded-bl-3xl'>
      <div className='flex gap-4 items-center font-thin w-[33%]'>
        <img src='/Radar_Logo.svg' />
        <span className='-mt-2'>
          Last Update : 18:32
        </span>
      </div>
      <div className='flex items-center justify-center w-[33%]'>
        <div className='flex items-center justify-center bg-white text-primary-800 rounded-full py-2 px-3 gap-4 font-bold'>
          <div className='text-white bg-primary-800 rounded-full py-2 px-8'>
            VPN
          </div>
          <div className='bg-white text-primary-800 rounded-full py-2 px-8'>
            DNS
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-4 w-[33%]'>
        <div className='relative p-2 rounded-xl border border-white max-w-10 max-h-10 h-10 w-10'>
          <div className='border border-white rounded-full text-center max-w-6 max-h-6 h-6 w-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <FaUser
              size={'1.2em'}
              className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            />
          </div>
        </div>
        <div className='relative p-2 rounded-xl border border-white max-w-10 max-h-10 h-10 w-10'>
          <div className='text-center max-w-6 max-h-6 h-6 w-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <FaRegBell
              size={'1.3em'}
              className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            />
            <span className='absolute rounded-full w-2 h-2 -top-2 -right-2 bg-primary-400'></span>
          </div>
        </div>
        <div className='relative p-2 rounded-xl border border-white max-w-10 max-h-10 h-10 w-10'>
          <div className='text-center max-w-6 max-h-6 h-6 w-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <FaUpRightFromSquare
              size={'1.2em'}
              className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
