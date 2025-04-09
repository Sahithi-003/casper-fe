import { Grid, styled } from '@mui/material'
import React, { useContext } from 'react' 
import { TypographyComponent } from '../../atoms/Typography'
import NoDocumentsFoundCard from '../../molecules/NoDocumentsFoundCard';
import { DOCUMENTS, TEMPLATES, SAVED } from '../../../core-utils/constants';
import theme from '../../../core-utils/theme';
import { GenerateHeader } from '../../molecules/GeneratorHeader';
import start from '../../../../public/images/start.png';
import blog from '../../../../public/images/blog.png';
import { useHistory } from 'react-router-dom';
import { PromptContext } from '../../../core-utils/promptContext';
import SavedDocsTable, { rows } from '../SavedDocumentsTable';

const StyledContainer = styled(Grid)(() => ({
    columnGap:'24px',
  }));

const StyledGrid = styled(Grid)(() => ({
    paddingLeft: '24px',
  }));

const StyledTypography = styled(TypographyComponent)(() => ({
    fontSize: '20px',
    color: theme.palette.text_color.main,
  }));

  const StyledGrid3 = styled(Grid)(() => ({
    padding: '30px 0px 10px 24px',
  }));

  const StyledGrid4 = styled(Grid)(() => ({
    padding: '16px 20px 0px 24px',
  }));

  const StyledTypography3 = styled(TypographyComponent)(() => ({
    fontWeight: '400',
    fontSize: '16px',
    color: theme.palette.text_color.medium_emphasis,
  }));


const StyledGrid2 = styled(Grid)(() => ({
   borderRadius: '8px',
   backgroundColor: theme.palette.text_color.light,
   border: `1px solid ${theme.palette.stroke.stroke_100}`,
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
  }));

const DocumentsTab = () => {
  const { setMode } = useContext(
    PromptContext,
  );
    const history = useHistory();
    const handleClick = () => {
      history.push('/viewpage');
      setMode(0);      
    }
    const handleNavigate = () => {
      history.push('/viewpage');
      setMode(1);      
    }
    return (
        <Grid container direction="column" sx={{backgroundColor: theme.palette.stroke.stroke_500}} data-testid='top-container'>
            <StyledGrid item>
                <Grid container direction='column'>
                    <Grid item><StyledTypography variant='heading3' fontSize='20px' fontWeight={400} color={theme.palette.text_color.main}>{DOCUMENTS}</StyledTypography></Grid>
                    <Grid item sx={{paddingTop: '30px'}}><StyledTypography variant='subtitle1' color={theme.palette.text_color.main}>{TEMPLATES}</StyledTypography></Grid>
                </Grid>
            </StyledGrid>
            <Grid item sx={{paddingTop:'20px'}}>
              <StyledContainer container direction='row' paddingLeft='24px'>
                    <StyledGrid2 item xs={5.8} onClick={handleClick}>
                    <GenerateHeader
                        body='Start From Scratch'
                        subtitle='Get help writing any type of content using our AI template and Casper Command.'
                        width={48}
                        height={48} 
                        image={start}
                    ></GenerateHeader>
                    </StyledGrid2>
                    <StyledGrid2 item xs={5.8} onClick={handleNavigate}>
                    <GenerateHeader
                        body='Blog Post Workflow'
                        subtitle='Get help writing blog posts from start to finish with our AI assist.'
                        width={48}
                        height={48} 
                        image={blog}
                    ></GenerateHeader>
                    </StyledGrid2>
              </StyledContainer>
            </Grid>
            <StyledGrid3 item>
                <StyledTypography3 variant='subtitle1'>{SAVED}</StyledTypography3>
            </StyledGrid3>
            <StyledGrid4 item>
              {rows.length>0 &&
                <SavedDocsTable />}
              {rows.length==0 &&
                <NoDocumentsFoundCard />}
            </StyledGrid4>
        </Grid>
    )
}

export default DocumentsTab;