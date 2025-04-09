import { Grid, styled } from '@mui/material';
import React, { useContext } from 'react';
import { TypographyComponent } from '../../atoms/Typography';
import folder from '../../../../public/images/empty folder.png';
import {
  DOCUMENT,
  NEW_DOCUMENT,
  AI,
  CREATE_DOCUMENT,
} from '../../../core-utils/constants';
import theme from '../../../core-utils/theme';
import { useHistory } from 'react-router-dom';
import { PromptContext } from '../../../core-utils/promptContext';

const TopContainer = styled(Grid)(() => ({
  paddingTop: '100px',
}));

const StyledGrid = styled(Grid)(() => ({
  paddingTop: '16px',
  paddingBottom: '100px',
  cursor: 'pointer',
}));

const StyledTypography = styled(TypographyComponent)(() => ({
  fontWeight: '400',
  fontSize: '20px',
}));

const StyledTypography2 = styled(TypographyComponent)(() => ({
  fontWeight: '400',
  fontSize: '16px',
}));

const StyledTypography3 = styled(TypographyComponent)(() => ({
  fontWeight: '400',
  fontSize: '16px',
}));

const StyledTypography4 = styled(TypographyComponent)(() => ({
  fontWeight: '400',
  fontSize: '14px',
}));

const StyledGrid2 = styled(Grid)(() => ({
  borderRadius: '8px',
  border: `1px solid ${theme.palette.stroke.stroke_100}`,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.text_color.light,
  height: '40rem',
}));

const NoDocumentsFoundCard = () => {
  const { setMode } = useContext(PromptContext);
  const history = useHistory();
  const handleClick = () => {
    history.push('/viewpage');
    setMode(0);
  };
  return (
    <StyledGrid2
      container
      direction="column"
      data-testid="no-documents-found-card"
    >
      <TopContainer item>
        <img src={folder} alt="logo" />
      </TopContainer>
      <Grid item sx={{ paddingTop: '16px' }}>
        <StyledTypography
          variant="subtitle1"
          color={theme.palette.text_color.main}
        >
          {DOCUMENT}
        </StyledTypography>
      </Grid>
      <Grid item sx={{ paddingTop: '8px' }}>
        <StyledTypography2
          variant="body1"
          color={theme.palette.text_color.medium_emphasis}
        >
          {NEW_DOCUMENT}
        </StyledTypography2>
      </Grid>
      <Grid item>
        <StyledTypography3
          variant="body1"
          color={theme.palette.text_color.medium_emphasis}
        >
          {AI}
        </StyledTypography3>
      </Grid>
      <StyledGrid item onClick={handleClick} data-testid='create-document'>
        <StyledTypography4
          variant="subtitle2"
          color={theme.palette.primary.primary_100}
        >
          {CREATE_DOCUMENT}
        </StyledTypography4>
      </StyledGrid>
    </StyledGrid2>
  );
};

export default NoDocumentsFoundCard;
