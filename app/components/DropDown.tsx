'use client';
import { useState } from 'react';
import {
  FaCaretDown,
  FaCaretUp,
} from 'react-icons/fa6';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState('Saturday');

  const handleClick = (): void => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleSelect = (day: string): void => {
    setSelected(day);
    setOpen(false);
  };

  const days = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  return (
    <>
      <button
        id='trigger'
        className='flex justify-between items-center bg-white/[0.2] text-white p-2 gap-2 rounded-xl w-48'
        onClick={handleClick}
      >
        <span>Day / {selected}</span>
        {!open ? (
          <FaCaretDown
            size={'18px'}
            color='white'
          />
        ) : (
          <FaCaretUp
            size={'18px'}
            color='white'
          />
        )}
      </button>
      <div
        className={`absolute w-48 z-10 flex-col bg-slate-700 text-white p-2 gap-2 rounded-xl ${
          open ? 'flex' : 'hidden'
        } `}
      >
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleSelect(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </>
  );
};
export default DropDown;
