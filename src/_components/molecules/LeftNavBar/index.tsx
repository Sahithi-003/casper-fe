import * as React from 'react';
import { Grid } from '@mui/material';
import { Image } from '../../atoms/Image';
import { TypographyComponent } from '../../atoms/Typo';

interface Props {
  icon: string;
  iconSelected: string;
  selected: boolean;
  label: string;
  color?: string;
  textVariant?: 'body1' | 'h2' | 'subtitle1';
}

export const TextIcon = (props: Props) => {
  {
    return (
      <Grid
        container
        style={{ alignItems: 'center', width: 'fit-content', gap: 12 }}
      >
        <Grid item style={{ alignItems: 'center', width: 'fit-content' }}>
          <Image
            source={props.selected ? props.iconSelected : props.icon}
            alt="icon"
          />
        </Grid>
        <Grid item>
          <TypographyComponent
            data-testid="menuText"
            variant={props.textVariant}
            color={props.selected ? '#E8E7F0' : props.color}
            children={props.label}
          />
        </Grid>
      </Grid>
    );
  }
};
