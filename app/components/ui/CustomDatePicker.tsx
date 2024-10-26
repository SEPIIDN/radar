'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { MdOutlineTimer } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function CustomDatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-auto justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <MdOutlineTimer size={'18px'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        <div className='flex justify-center gap-2 bg-black px-4 pb-4 rounded-br-lg rounded-bl-lg'>
          <button className='py-2 px-4 bg-white rounded-xl w-[100%]'>
            Cancel
          </button>
          <button className='py-2 px-4 bg-primary-900 text-white rounded-xl w-[100%]'>
            OK
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
