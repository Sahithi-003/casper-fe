import React, { ChangeEvent, useState } from 'react';
import { Grid, styled, TextField } from '@mui/material';
import theme from '../../../core-utils/theme';
import ToggleSelection from '../../molecules/ToggleSelection';
import { TypographyComponent } from '../../atoms/Typography';
import IconButtonComponent from '../../atoms/IconButton';
import more from '../../../../public/icons/more.svg';
import eyeIcon from '../../../../public/images/eye.svg';
import fileIcon from '../../../../public/icons/file-05.svg';

interface TopNavBarProps {
  activeIndex: number;
  // eslint-disable-next-line no-unused-vars
  onSelection: (arg: number) => void;
  onFileNameChange: (
    // eslint-disable-next-line no-unused-vars
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  height?: string;
  width?: string;
  fileNameProp?: string;
  noOfWords: number;
  onMoreClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-input': {
    padding: '0px',
    color: theme.palette.text_color.high_emphasis,
    fontWeight: 600,
    lineHeight: '20px',
    fontSize: '14px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StyledGrid = styled(Grid)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  width: '100%',
  height: '100%',
  margin: '0px',
  borderBottom: '1px solid #EBEDF5',
}));

const TopNavBar = (props: TopNavBarProps) => {
  const {
    onFileNameChange,
    fileNameProp,
    onSelection,
    noOfWords,
    onMoreClick,
    activeIndex,
  } = props;

  const [fileName, setFileName] = useState(fileNameProp || 'Untitled File');
  const handleFileNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFileName(event.target.value);
    onFileNameChange(event);
  };
  return (
    <StyledGrid data-testid="top-nav-bar" container m={12}>
      <Grid item m={4} margin="0px">
        <StyledTextField
          onChange={handleFileNameChange}
          value={fileName}
        />
      </Grid>
      <Grid item m={4} margin="0px">
        <ToggleSelection
          activeIndex={activeIndex}
          type="icon"
          data={[
            eyeIcon,
            fileIcon,
          ]}
          onSelection={onSelection}
          width="72px"
        />
      </Grid>
      <Grid
        item
        m={4}
        margin="0px"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        padding="0px"
        gap="12px"
      >
        <Grid>
          <TypographyComponent
            variant="caption1"
            color={theme.palette.text_color.high_emphasis}
          >
            {`${noOfWords || 0} `}
          </TypographyComponent>
          <TypographyComponent
            variant="caption1"
            color={theme.palette.text_color.low_emphasis}
          >
            words
          </TypographyComponent>
        </Grid>
        <IconButtonComponent
          src={more}
          img_width="16px"
          img_height="16px"
          height="32px"
          width="32px"
          border="1px solid #EBEDF5"
          onClick={onMoreClick}
        />
      </Grid>
    </StyledGrid>
  );
};

export default TopNavBar;
