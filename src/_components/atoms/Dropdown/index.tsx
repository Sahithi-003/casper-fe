import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  label: string;
}

export const Dorpdown = (props: Props) => {
  const [language, setlanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setlanguage(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          language
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          onChange={handleChange}
          autoWidth
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={21}>Spanish</MenuItem>
          <MenuItem value={22}>Korean</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
