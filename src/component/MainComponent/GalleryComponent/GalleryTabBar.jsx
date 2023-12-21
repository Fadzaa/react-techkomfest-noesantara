import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GalleryCardGroup from './GalleryCardGroup';
import dataGallery from './dataGallery';

const AntTabs = styled(Tabs)(({ theme }) => ({
  width: 300,
  bgcolor: 'transparent',
  borderBottom: 'none',
  '& .MuiTabs-indicator': {
    backgroundColor: '#fff',
    width: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '& .MuiTabs-scrollButtons': {
    color: '#fff',
  },
  [theme.breakpoints.up('lg')]: {
    width: '621px',
    '&.lg:w-621': {
      width: '621px',
      marginRight: '30px',
    },
  },
}));

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  color: '#fff',
  fontFamily: ['Urbanist'].join(','),
  '&:hover': {
    color: '#fff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#fff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
  marginRight: '10px',
  [theme.breakpoints.up('lg')]: {
    marginRight: '30px',
    '&.lg:mr-30': {
      marginRight: '30px',
    },
  },
}));

const GalleryTabBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const filteredData = (category) => {
    if (category === 'All') {
      return dataGallery; 
    } else {
      return dataGallery.filter((item) => item.category === category);
    }
  };

  const tabCategories = [
    'All',
    'Makanan Tradisional',
    'Warisan Kebudayaan',
    'Rumah Adat',
    'Alat Musik Tradisional',
    'Senjata Tradisional',
  ];

  const tabContents = tabCategories.map((category, index) => (
    <GalleryCardGroup key={index} category={category} images={filteredData(category).map((item) => item.culture_image)} />
  ));

  return (
    <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
      <Box sx={{ bgcolor: 'transparent', marginBottom: '-1px', overflowX: 'auto' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" variant="scrollable" scrollButtons="auto" className="lg:w-621">
          {tabCategories.map((label, index) => (
            <AntTab key={index} label={label} />
          ))}
        </AntTabs>
        <Box sx={{ marginTop: '20px', marginLeft: '2px' }}>{tabContents[value]}</Box>
      </Box>
    </Box>
  );
};

export default GalleryTabBar;



