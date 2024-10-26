'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { MdOutlineTimer } from 'react-icons/md';
import { CustomDatePicker } from './CustomDatePicker';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function TotalUsersTabs({
  labels,
}: string[]) {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isMounted, setIsMounted] =
    React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {labels.map((label) => (
            <Tab key={label} label={label} />
          ))}
          <CustomDatePicker />
        </Tabs>
        {/* <div
          className={`${
            open ? 'flex' : 'hidden'
            } justify-end items-center absolute left-0 top-0 right-0 bottom-0 bg-white/[0.7] z-0 backdrop-blur-sm`}
            >
            <div
            onClick={handleClose}
            className='bg-red-500 h-full w-1/2'
            ></div>
            </div> */}
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
