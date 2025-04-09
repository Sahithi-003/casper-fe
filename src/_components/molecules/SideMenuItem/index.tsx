import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

interface SideMenuItemProps {
  source?: string
  title: string
  muiIcon: React.ReactNode
}

const SideMenuItem = (Props: SideMenuItemProps) => {
  return (
    <Grid container spacing={1.5} height={48} paddingLeft="0.625rem">
      <Grid item>
        <Box
          borderRadius={10}
          height="25px"
          width={40}
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          {Props.muiIcon}
        </Box>
      </Grid>
      <Grid item>
        <Box paddingTop="3px" data-testid="side-text">
          <Typography variant="body2" textTransform={'none'} fontSize="14px">
            {Props.title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SideMenuItem
