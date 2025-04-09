import * as React from 'react';
import { GenerateHeader } from '../../molecules/GeneratorHeader';
import { Box, Grid, styled } from '@mui/material';
import ProductDetailsInput from '../../molecules/ProductDetailsInput';
import copy from '../../../../public/images/copy.png';
import remove from '../../../../public/images/remove.png';
import fav from '../../../../public/images/fav.png';
import LanguageOptions from '../../molecules/LanguageOptions';
import { TypographyComponent } from '../../atoms/Typo';
import ButtonComponent from '../../atoms/Button';
import { useState, useEffect } from 'react';
import theme from '../../../core-utils/theme';
import { contentDescConst } from '../../../core-utils/constants';
import { getData } from '../../../apis/library';
import LoadingOverlay from 'react-loading-overlay';
import { PromptContext } from '../../../core-utils/promptContext';
import { constants } from 'perf_hooks';

const MainContainer = styled(Grid)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  borderRight: '1px solid #EBEDF5',
}));
const MiddleGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // padding: '24px 20px',
  width: '100%',
  '&::-webkit-scrollbar': { width: 0 },
  background: '#FFFFFF',
  boxSizing: 'border-box',
  flex: 1,
  height: 'calc(92% - 120px)',
  flexGrow: 1,
  // overflowY: 'scroll',
  gap: '70px',
}));

const FormContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px 20px',
  width: '100%',
  gap: '24px',
  background: '#FFFFFF',
  flex: 'none',
  order: 0,
  flexGrow: 0,
}));

const FooterBox = styled(Box)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
  gap: '24px',
  width: '100%',
  height: '64px',
  background: '#FFFFFF',
  borderTop: '1px solid #EBEDF5',
  flex: 'none',
  order: 0,
  flexGrow: 0,
}));

const ContentBox = styled(Box)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '14px 20px 24px',
  gap: '32px',
  width: '100%',
  flex: 'none',
  background: '#F7F8FA',
}));

export const ContentDescription = () => {
  const [numb, setNumb] = useState(1);
  const [selectedLanguage, setLanguage] = useState('English');
  const [firstHolderText, setFirstHolderText] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  const [keywords, setKeyWords] = useState('');
  const [toneOfVoice, setToneOfVoice] = useState('');
  const [data, setData] = useState<{ id: number; text: string }[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [
    isGenerateContentButtonActive,
    setIsGenerateContentButtonActive,
  ] = useState(false);
  const { selectedIndex } = React.useContext(PromptContext);
  const inputPrompt: string[] = [
    `Write a paragraph about ${paragraphText}, tone of voice:${toneOfVoice}, ${
      keywords && `keywords:${keywords}, `
    } language: ${selectedLanguage}`,
    `Write a marketing message using AIDA Framework about your Company/Product name ${paragraphText}, product description ${keywords}, tone of voice:${toneOfVoice}`,
    `Write text summary of ${paragraphText}, tone of voice:${toneOfVoice}`,
    `Write a personalized cold email about our product ${firstHolderText}, with company/Product name ${paragraphText}, context to include in the email ${keywords}, tone of voice:${toneOfVoice} `,
  ];

  useEffect(() => {
    setIsGenerateContentButtonActive(
      paragraphText && toneOfVoice ? true : false,
    );
  });
  const generateParagraph = () => {
    setIsLoading(true);
    const input = inputPrompt[selectedIndex];
    getData({ input: input, promptLength: 1, noOfChoices: numb })
      .then((response) => {
        const array: { id: number; text: string }[] = [];
        response.data.promptResponse.choices.map((choice: any, index: number) =>
          array.push({ id: index, text: choice.text }),
        );
        setData(array);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleDelete = (id: number) => {
    setData((current: any) => current?.filter((data: any) => data.id !== id));
  };

  return (
    <MainContainer>
      <GenerateHeader
        body={contentDescConst[selectedIndex].HEADER_TITLE}
        subtitle={contentDescConst[selectedIndex].HEADER_SUBTITLE}
        width={48}
        height={48}
        image={contentDescConst[selectedIndex].image}
      ></GenerateHeader>
      <MiddleGrid id="main_box" container>
        <LoadingOverlay
          active={isLoading}
          spinner={true}
          styles={{
            wrapper: (base) => ({
              ...base,
              height: '100%',
              width: '100%',
            }),
          }}
          text="Loading your content..."
        >
          <Grid
            height="100%"
            width="100%"
            overflow={'auto'}
            sx={{ '&::-webkit-scrollbar': { width: 0 } }}
            // gap="100px"
            // display={'flex'}
          >
            <FormContainer item id="form_container" container>
              <Grid
                item
                width="100%"
                gap="24px"
                display={'flex'}
                flexDirection="column"
              >
                {selectedIndex === 3 ? (
                  <ProductDetailsInput
                    placeholder={
                      contentDescConst[selectedIndex].WRITE_FIRST_PLACEHOLDER
                    }
                    TypoChildren={
                      contentDescConst[selectedIndex].WRITE_FIRST_TEXT
                    }
                    wordCount={
                      contentDescConst[selectedIndex].WRITE_FIRST_WORDCOUNT
                    }
                    value={firstHolderText}
                    setValue={setFirstHolderText}
                    maxCharCount={
                      contentDescConst[selectedIndex].WRITE_FIRST_WORDCOUNT
                    }
                  />
                ) : null}
                <ProductDetailsInput
                  placeholder={
                    contentDescConst[selectedIndex].WRITE_CONTENT_PLACEHOlDER
                  }
                  wordCount={
                    contentDescConst[selectedIndex].WRITE_CONTENT_WORDCOUNT
                  }
                  TypoChildren={
                    contentDescConst[selectedIndex].WRITE_CONTENT_TEXT
                  }
                  isImportant={true}
                  bottom={''}
                  value={paragraphText}
                  setValue={setParagraphText}
                  maxCharCount={
                    contentDescConst[selectedIndex].WRITE_CONTENT_WORDCOUNT
                  }
                />
                {selectedIndex === 2 ? null : (
                  <ProductDetailsInput
                    placeholder={
                      contentDescConst[selectedIndex].WRITE_KEYWORDS_PLACEHOLDER
                    }
                    wordCount={
                      contentDescConst[selectedIndex].WRITE_KEYWORD_WORDCOUNT
                    }
                    TypoChildren={
                      contentDescConst[selectedIndex].WRITE_KEYWORDS_TEXT
                    }
                    isHavingHelpIcon={true}
                    bottom={
                      contentDescConst[selectedIndex].WRITE_KEYWORDS_BOTTOM_TEXT
                    }
                    value={keywords}
                    setValue={setKeyWords}
                    maxCharCount={
                      contentDescConst[selectedIndex].WRITE_KEYWORD_WORDCOUNT
                    }
                  />
                )}
                <ProductDetailsInput
                  placeholder={
                    contentDescConst[selectedIndex]
                      .TONE_OF_VOICE_PLACEHOLDER_TEXT
                  }
                  wordCount={
                    contentDescConst[selectedIndex].WRITE_TONE_WORDCOUNT
                  }
                  TypoChildren={
                    contentDescConst[selectedIndex].TONE_OF_VOICE_TEXT
                  }
                  isImportant={true}
                  bottom={''}
                  value={toneOfVoice}
                  setValue={setToneOfVoice}
                  maxCharCount={
                    contentDescConst[selectedIndex].WRITE_TONE_WORDCOUNT
                  }
                />
              </Grid>
              {selectedIndex === 0 ? (
                <Grid item width="100%">
                  <LanguageOptions
                    selectedLanguage={selectedLanguage}
                    setLanguage={setLanguage}
                  />
                </Grid>
              ) : null}
            </FormContainer>

            {data && (
              <Grid item marginTop="200px">
                {content(data, handleDelete)}
              </Grid>
            )}
          </Grid>
        </LoadingOverlay>
      </MiddleGrid>
      <FooterBox id="footer_box">
        <Grid
          display={'flex'}
          flexDirection="row"
          gap="8px"
          alignItems={'center'}
        >
          <TypographyComponent variant="subtitle2" color={'#2D3248'}>
            {contentDescConst[selectedIndex].OUTPUTS_TEXT}
          </TypographyComponent>
          <input
            style={{
              // height: '15px',
              width: '40px',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #EBEDF5',
            }}
            type="number"
            placeholder="1"
            step="any"
            min="1"
            max="5"
            value={numb}
            onChange={(e: any) => setNumb(e.target.value)}
          ></input>
        </Grid>
        <ButtonComponent
          style={{ padding: '10px 16px' }}
          label={contentDescConst[selectedIndex].BUTTON_TEXT}
          textColor="#5573E9"
          variant="outlined"
          textVariant="subtitle2"
          disabled={!isGenerateContentButtonActive}
          onClick={generateParagraph}
        ></ButtonComponent>
      </FooterBox>
    </MainContainer>
  );
};

const IconsBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: '0px',
  gap: '4px',
  width: '100%',
  height: '32px',
}));
// eslint-disable-next-line no-unused-vars
export default function content(
  data: { id: number; text: string }[],
  // eslint-disable-next-line no-unused-vars
  handleDelete: (id: number) => void,
) {
  return (
    <ContentBox id="content_box">
      {data.map((choice) => (
        <Grid display={'flex'} container gap="16px" key={choice.id}>
          <IconsBox>
            <img
              onClick={() => handleClick(choice.text)}
              src={copy}
              alt=""
            ></img>
            <img src={fav} alt=""></img>
            <img
              onClick={() => handleDelete(choice.id)}
              src={remove}
              alt=""
            ></img>
          </IconsBox>
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.high_emphasis}
            width="100%"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {choice.text.slice(2)}
          </TypographyComponent>
        </Grid>
      ))}
    </ContentBox>
  );
}

const handleClick = (choice: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = choice;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};
