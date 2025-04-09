import React from 'react';
import { styled, Typography, Box, Grid } from '@mui/material';
import theme from '../../../core-utils/theme';
import { TypographyComponent } from '../../atoms/Typography';
import Icon from '../../../../public/images/Icon.png';
import DropDown from '../DropDown';
import { languageOptionConsts } from '../../../core-utils/constants';

export interface LanguageOptions {
  selectedLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const MainGrid = styled(Grid)(() => ({
  width: '100%',
  gap: '12px',
  padding: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
}));

const BottomConverter = styled(Box)(() => ({
  width: '100%',
  gap: '4px',
  padding: '0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  alignSelf: 'stretch',
}));

const TopContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '4px',
  flexDirection: 'row',
  alignItems: 'center',
}));
const MidContainer = styled(Box)(() => ({
  gap: '8px',
  padding: '0px',
  display: 'flex',
  color: '#656B84',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '72px',
  width: '100%',
  alignSelf: 'stretch',
}));

const LanguageOptions = (props: LanguageOptions) => {
  return (
    <MainGrid data-testid="language-options">
      <TopContainer>
        <TypographyComponent
          variant="subtitle2"
          color={theme.palette.text_color.high_emphasis}
        >
          {languageOptionConsts.LANGUAGE_OPTIONS_TEXT}
        </TypographyComponent>
        <img src={Icon} width={'12px'} height={'12px'} alt="" />
      </TopContainer>
      <BottomConverter>
        <MidContainer>
          <Typography>{languageOptionConsts.INPUT_LANGUAGE}</Typography>
          <DropDown
            width="100%"
            value={props.selectedLanguage}
            handleChange={(event: any) => props.setLanguage(event.target.value)}
            menuItems={languageOptionConsts.LANGUAGE_OPTIONS}
            placeholder={languageOptionConsts.PLACEHOLDER}
          />
        </MidContainer>
        {/* <Grid padding="10px 0px">
          <IconButtonComponent
            src={ArrowLeft}
            img_height="24px"
            img_width="24px"
          />
        </Grid>
        <MidContainer>
          <Typography>Output Language</Typography>
          <DropDown
            width="100%"
            menuItems={languageOptionConsts.LANGUAGE_OPTIONS}
            placeholder={languageOptionConsts.PLACEHOLDER}
          />
        </MidContainer> */}
      </BottomConverter>
    </MainGrid>
  );
};
export default LanguageOptions;
