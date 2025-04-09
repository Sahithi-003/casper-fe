import * as React from 'react';
import { Grid, styled } from '@mui/material';
import { Image } from '../../atoms/Image';
import { TypographyComponent } from '../../atoms/Typo';
import InputField from '../../atoms/InputField';
import SearchIcon from '../../../../public/images/search.png';
import theme from '../../../core-utils/theme';
import { templatesData } from '../../../core-utils/constants';
import { PromptContext } from '../../../core-utils/promptContext';
import { useContext } from 'react';

const data = templatesData;

const TemplateOptionGrid = styled(Grid)((props: { isSelected: boolean }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 20px 8px 8px',
  gap: '10px',
  background: props.isSelected ? '#F2F4FA' : '#FFFFFF',
  borderRadius: '8px',
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
}));

const TemplateOptionsContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '8px',
  width: '100%',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 1,
}));

const MainBoxStyle = styled(Grid)(() => ({
  gap: '15px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  left: '0px',
  background: '#FFFFFF',
}));

export const NavigationBarGrid = () => {
  const { selectedIndex, setSelectedIndex } = useContext(PromptContext);
  const [filter, setFilter] = React.useState('');

  const handleListItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <MainBoxStyle>
      <InputField
        image={SearchIcon}
        placeholder={'Search Text...'}
        value={filter}
        height="40px"
        onChange={(event) => setFilter(event.target.value)}
        isSearchBar={true}
      />
      <TemplateOptionsContainer>
        {data
          .filter(
            (f) =>
              f.title.toLowerCase().includes(filter.toLowerCase()) ||
              filter === '',
          )
          .map((f, index) => (
            <TemplateOptionGrid
              key={index}
              container
              isSelected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{ pointerEvents: index >= 4 ? 'none' : 'auto' }}
            >
              <Image source={f.image} alt="icon" width={24} height={24} />
              <TypographyComponent
                variant="body2"
                color={
                  selectedIndex === index
                    ? theme.palette.text_color.interactive
                    : theme.palette.text_color.medium_emphasis
                }
                children={f.title}
              />
            </TemplateOptionGrid>
          ))}
      </TemplateOptionsContainer>
    </MainBoxStyle>
  );
};
