import React, { useState } from 'react';
import { Grid, styled } from '@mui/material';

import SearchIcon from '../../../../public/icons/search.svg';
import InputField from '../../atoms/InputField';
import { TypographyComponent } from '../../atoms/Typography';
import theme from '../../../core-utils/theme';
import { TEMPLATES, templateTagsArray } from '../../../core-utils/constants';
import ChipItem from '../../atoms/ChipItem';
import { TemplateData } from '../../../utils/types';
import TemplateCard from '../../molecules/TemplateCard';

interface TemplatesGridProps {
  // eslint-disable-next-line no-unused-vars
  onSelectionTemplate: (selectedTemplate: TemplateData) => void;
  templatesData: TemplateData[];
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F7F8FA',
  width: '100%',
  height: '100%',
  margin: '0px'
}));

const BottomGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 24px 18px 24px',
  backgroundColor: '#F7F8FA',
  width: '100%',
  gap: '16px',
}));

const TopGrid = styled(Grid)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 24px',
  width: '100%',
  background: '#FFFFFF',
  borderBottom: '1px solid #EBEDF5',
  // borderLeft: '1px solid #EBEDF5',
}));

const TagsGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'flex-start',
  padding: '0px',
  width: '100%',
}));

const MainContainer = styled(Grid)(() => ({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': { width: 0 },
}));

const TemplatesGrid = (props: TemplatesGridProps) => {
  const { onSelectionTemplate, templatesData } = props;
  const [selectedTag, setSelectedTag] = useState(0);
  const [templatesDataArray, setTemplatesData] = useState<TemplateData[]>(
    templatesData,
  );
  const [searchText, setSearchText] = useState<string>('');

  const handleTagClick = (index: number) => {
    const templates = templatesData.filter(
      (template) =>
        template.tags?.includes(templateTagsArray[index]) &&
        template.title.toLowerCase().includes(searchText?.toLowerCase()),
    );
    setTemplatesData(templates);
    setSelectedTag(index);
  };
  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setSearchText(value);
    const searchResult: TemplateData[] = templatesData.filter(
      (template) =>
        template.title.toLowerCase().includes(value.toLowerCase()) &&
        template.tags?.includes(templateTagsArray[selectedTag]),
    );
    setTemplatesData(searchResult);
  };

  return (
    <StyledGrid data-testid="templates-grid" container m={12}>
      <TopGrid>
        <InputField
          image={SearchIcon}
          value={searchText}
          placeholder={'Search Text...'}
          height="32px"
          onChange={handleSearchTextChange}
          isSearchBar={true}
        />
      </TopGrid>
      <BottomGrid>
        <TypographyComponent
          variant="heading3"
          color={theme.palette.text_color.high_emphasis}
        >
          {TEMPLATES}
        </TypographyComponent>
        <TagsGrid>
          {templateTagsArray.map((tagName, index) => (
            <ChipItem
              key={tagName}
              label={tagName}
              active={index === selectedTag}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </TagsGrid>
        <MainContainer
          container
          spacing={'20px'}
          display="flex"
          height={'94%'}
          columns={{ xs: 6, sm: 12, md: 12 }}
        >
          {templatesDataArray.map((template: TemplateData) => (
            <Grid item xs={2} sm={4} md={3} key={template.title}>
              <TemplateCard
                onClick={() => onSelectionTemplate(template)}
                image={template.image}
                templateName={template.title}
                templateDescription={template.description}
              />
            </Grid>
          ))}
        </MainContainer>
      </BottomGrid>
    </StyledGrid>
  );
};

export default TemplatesGrid;
