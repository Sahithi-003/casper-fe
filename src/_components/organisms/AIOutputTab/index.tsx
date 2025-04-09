import React, { useEffect, useState } from 'react';
import { Box, Grid, styled } from '@mui/material';
import { TypographyComponent } from '../../atoms/Typography';
import theme from '../../../core-utils/theme';
import {
  AI_OUTPUTS,
  // CARD_DETAILS_ARRAY,
  // arr,
} from '../../../core-utils/constants';
import AiOutputCard from '../../molecules/AiOutputCard';
import SearchIcon from '../../../../public/icons/search.svg';
import InputField from '../../atoms/InputField';
import { getAllAiOutputs } from '../../../apis/library';
import moment from 'moment';

interface AIOutputCardType {
  id: string;
  header: string;
  counterTime: string;
  content: string;
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: `${theme.palette.stroke.stroke_500}`,
  gap: '20px',
  width: '100%',
  height: '100%',
}));

const TopGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: `${theme.palette.structural.white}`,
  padding: '12px 24px',
}));

const SubContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',
  paddingLeft: '24px',
}));

const SearchBox = styled(Box)(() => ({
  width: '46.82%',
}));

const BottomGrid = styled(Grid)(() => ({
  height: '70vh',
  overflowY: 'scroll',
}));

const AIOutputTab = () => {
  const [aiOutputsArray, setOutputsArray] = useState<AIOutputCardType[]>();
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    getAllAiOutputs()
      .then((response) => {
        // eslint-disable-next-line prefer-const
        let array: AIOutputCardType[] = [];
        // eslint-disable-next-line max-nested-callbacks
        response.data.map((promptRequest: any) => {
          promptRequest.promptResponse &&
            // eslint-disable-next-line max-nested-callbacks
            promptRequest.promptResponse.choices.map((choice: any) => {
              const aiOutputCard: AIOutputCardType = {
                id: `${promptRequest.id} ${choice.index}`,
                header: promptRequest.prompt,
                counterTime: moment(
                  new Date(promptRequest.createdAt),
                ).fromNow(),
                content: choice.text.slice(2),
              };
              array.push(aiOutputCard);
            });
        });
        return array;
      })
      .then((array) => setOutputsArray(array));
  }, []);
  useEffect(() => {
    console.log(aiOutputsArray);
  }, [aiOutputsArray]);
  return (
    <StyledGrid container data-testid="Ai-outputs">
      <TopGrid item>
        <SearchBox>
          <InputField
            image={SearchIcon}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder={'Search Text...'}
          />
        </SearchBox>
      </TopGrid>
      <SubContainer item>
        <TypographyComponent
          variant="h3"
          color={`${theme.palette.text_color.high_emphasis}`}
        >
          {AI_OUTPUTS}
        </TypographyComponent>
        <BottomGrid container md={12} spacing={'20px'}>
          {aiOutputsArray
            ?.filter((aiOutput) =>
              aiOutput.header.toLowerCase().includes(searchText.toLowerCase()),
            )
            .map((cardItem) => (
              <Grid item md={4} display={'flex'} key={cardItem.header}>
                <AiOutputCard
                  key={cardItem.id}
                  CardHeader={cardItem.header}
                  CardContent={cardItem.content}
                  CardTimeCounter={cardItem.counterTime}
                />
              </Grid>
            ))}
        </BottomGrid>
      </SubContainer>
    </StyledGrid>
  );
};

export default AIOutputTab;
