import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TemplateProps {
  header?: React.ReactNode;
  left?: React.ReactNode;
  middle?:React.ReactNode;
  right?: React.ReactNode;
}


const LeftContainer = styled(Grid)`
align-items: center,
display: flex,
flex-direction: column,
`;
const MiddleContainer = styled(Grid)`
align-items: center,
display: flex,
flex-direction: column,
`;
const RightContainer = styled(Grid)`
align-items: center,
justifyContent: center,
display: flex,
`;

export const PowerModeTemplate = ({ left, right, header,middle }: TemplateProps) => {
  return (
    <Grid width="99vw" height="93vh" display='flex' flexDirection='column'>
      <Grid direction="row" data-testid="template1" display="flex" container height='100%'>
        <LeftContainer item xs={3} height="100%" borderRight='1px solid #EBEDF5'>
          {left}
        </LeftContainer>
        <MiddleContainer item xs = {3.5} height='100%'>{middle}</MiddleContainer>
        <RightContainer item xs={5.5} height="100%">
          {right}
        </RightContainer>
      </Grid>
    </Grid>
  );
};
