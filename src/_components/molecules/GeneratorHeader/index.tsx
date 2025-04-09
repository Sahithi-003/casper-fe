import * as React from 'react';
import { Grid, styled, Box } from '@mui/material';
import { Image } from '../../atoms/Image';
import { TypographyComponent } from '../../atoms/Typo';

const StyledBox = styled(Box)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px 20px',
  gap: '16px',
  width: '100%',
  height: '96px',
  background: '#FFFFFF',
  borderBottom: '1px solid #EBEEFC',
}));

export interface ParentInputFieldProps {
  body: string;
  subtitle: string;
  width: number;
  height: number;
  image: string;
}

export const GenerateHeader = (props: ParentInputFieldProps) => {
  {
    return (
      <StyledBox data-testid='generate-header'>
        <Grid item style={{ alignItems: 'center', width: 'fit-content' }}>
          <Image
            source={props.image}
            width={props.width}
            height={props.height}
            alt="icon"
          />
        </Grid>
        <Grid item display={'flex'} flexDirection="column" gap="4px">
          <TypographyComponent
            data-testid="menuText"
            variant="subtitle2"
            color="#2D3248"
            children={props.body}
          />
          <TypographyComponent
            data-testid="menuText1"
            variant="body2"
            color="#656B84"
            children={props.subtitle}
          />
        </Grid>
      </StyledBox>
    );
  }
};
