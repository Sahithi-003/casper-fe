import React from 'react'
import {
  Box,
  Tab,
  Tabs,
  Typography,
  styled,
  Grid,
  Divider,
} from '@mui/material'
import SideMenuItem from '../../molecules/SideMenuItem/index'
import theme from '../../../core-utils/theme'
import { titles } from '../../../core-utils/properties'
import { arr } from '../../../core-utils/constants'
import template from '../../../../public/images/templates.png'
import lightbulb from '../../../../public/images/lightbulb-05.png'
import indicator from '../../../../public/images/indicator.png'
import favourite from '../../../../public/images/favourite.png'
import home from '../../../../public/images/home-05.png'
import plus from '../../../../public/images/plus.png'
import document from '../../../../public/images/doc.png'
import account from '../../../../public/images/account.png'
import logout from '../../../../public/images/logout.png'
import casper from '../../../../public/images/casper icon.png'
import { TypographyComponent } from '../../atoms/Typography'

const StyledTab = styled(TabPanel)({
  background: theme.palette.grey[100],
  leftpadding: '40px',
})

const StyledTabs = styled(Tabs)({
  flexDirection: 'column',
  paddingRight: '10px',
  paddingLeft:'10px',
  width:'100%',
  
  '.Mui-selected': {
    color: theme.palette.primary.primary_100,
    backgroundColor: '#F2F4FA',
    borderRadius:'8px',
  },
  '.MuiTab-root': {
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'visible',
    height: '5px',
    width: '18rem',
    alignItems: 'center',
  },
  '.MuiTabs-indicator': {
    display: "none"
  },
})

const StyledBox = styled(Box)({
  width: '350%',
  height: 'auto',
  overflow: 'auto',
  // paddingBottom: '100px',
})

const StyledDivider = styled(Divider)({
 borderColor: theme.palette.structural.white,
})

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <StyledBox
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0.5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </StyledBox>
  )
}

const SideMenu = () => {
  const [value, setValue] = React.useState<number>(1)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        width: '100%',
      }}
      data-testid="side-menu"
    >
      <Grid container direction='column' width={'19%'}>
      <Grid item paddingLeft='35px' paddingTop='13.2px' paddingBottom='30px'>
        <Grid container columnSpacing='6px'>
          <Grid item><img src={casper} alt="home" /></Grid>
          <Grid item><TypographyComponent variant='heading2' fontSize={'16px'} color={theme.palette.text_color.main}>Casper</TypographyComponent></Grid>
        </Grid>
      </Grid>
      <Grid item>
      <StyledTabs
        centered
        orientation="vertical"
        value={value}
        textColor="inherit"
        onChange={handleChange}
      >
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={home} alt="home" />}
              title={titles.title1}
            />
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={template} alt="template" />}
              title={titles.title2}
            />
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <>
            <Grid container direction="row">
              <Grid item>
            <SideMenuItem
              muiIcon={<img src={document} alt="doc" />}
              title={titles.title3}
            />
            </Grid>
            <Grid item paddingLeft="82px" paddingTop="5px">
            <img src={plus} alt="idea" />
            </Grid>
            </Grid>
            </>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={indicator} alt="indicator" />}
              title={titles.title4}
            />
          }
          {...a11yProps(3)}
        />
        <Tab
          label={
            <>
            <Grid container direction="row">
              <Grid item>
            <SideMenuItem
              muiIcon={<img src={lightbulb} alt="light" />}
              title={titles.title5}
            />
            </Grid>
            <Grid item paddingLeft="90px" paddingTop="5px">
            <img src={plus} alt="idea" />
            </Grid>
            </Grid>
            </>
          }
        />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={favourite} alt="favourite" />}
              title={titles.title6}
            />
          }
        />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={indicator} alt="indicator" />}
              title={titles.title7}
            />
          }
        />
        <StyledDivider sx={{ paddingTop: '150%' }} variant="middle" />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={account} alt="account" />}
              title={titles.title8}
            />
          }
        />
        <Tab
          label={
            <SideMenuItem
              muiIcon={<img src={logout} alt="logout" />}
              title={titles.title9}
            />
          }
        />
      </StyledTabs>
      </Grid>
      </Grid>
      {arr.map((val) => (
        <StyledTab index={val.id} value={value}>
          {val.value}
        </StyledTab>
      ))}
    </Box>
  )
}

export default SideMenu
