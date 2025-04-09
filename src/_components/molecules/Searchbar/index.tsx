import * as React from 'react';
import TextField from '@mui/material/TextField';

import { Grid } from '@mui/material';
import { Image } from '../../atoms/Image';
import search from '../../../../public/images/search.png';

interface Props {
  placeholder: string;
  textVariant?: 'small' | 'medium';
}

export const SearchBar = (props: Props) => {
  {
    return (
      <Grid
        container
        style={{ alignItems: 'center', width: 'fit-content', gap: 12 }}
      >
        <Grid item style={{ alignItems: 'center', width: 'fit-content' }}>
          <Image source={search} alt="icon" />
        </Grid>
        <Grid item>
          <TextField
            label="Search Templates.."
            variant="outlined"
            placeholder={props.placeholder}
            size={props.textVariant}
          />
        </Grid>
      </Grid>
    );
  }
};