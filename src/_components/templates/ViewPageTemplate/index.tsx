import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TemplateProps {
  header?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const LeftContainer = styled(Grid)`
align-items: center,
display: flex,
flex-direction: column,
`;
const RightContainer = styled(Grid)`
align-items: center,
justifyContent: center,
display: flex,
`;

const ViewPageTemplate = ({ left, right, header }: TemplateProps) => {
  return (
    <Box width="99vw" height="93vh">
      <Grid direction="row" data-testid="template1" display="flex" container height='100%'>
        <LeftContainer item xs={2.5} height="100%">
          {left}
        </LeftContainer>
        <RightContainer item xs={9.5} height="100%">
          {right}
        </RightContainer>
      </Grid>
    </Box>
  );
};

export default ViewPageTemplate;
