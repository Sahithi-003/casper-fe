import React, { MouseEventHandler } from 'react';
import { Grid, styled } from '@mui/material';
import theme from '../../../core-utils/theme';
import { TypographyComponent } from '../../atoms/Typography';

interface TemplateCardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  image: string;
  templateName: string;
  templateDescription: string;
  width?: string;
  height?: string;
}

interface StyledGridProps {
  width?: string;
  height?: string;
}

const StyledGrid = styled(Grid)((props: StyledGridProps) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  gap: '12px',
  width: props.width || '100%',
  height: props.height,
  background: '#FFFFFF',
  boxShadow:
    '0px 0px 1px rgba(12, 25, 75, 0.24), 0px 3px 8px -1px rgba(50, 54, 71, 0.05)',
  borderRadius: '8px',
  border: `1px solid transparent`,
  '&:hover': {
    border: `1px solid ${theme.palette.primary.primary_100}`,
  },
}));

const StyledInnerGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '4px',
}));

const TemplateCard = (props: TemplateCardProps) => {
  const {
    width,
    height,
    onClick,
    templateName,
    image,
    templateDescription,
  } = props;
  return (
    <StyledGrid
      width={width}
      height={height || '182px'}
      data-testid="template-card"
      onClick={onClick}
    >
      <Grid
        display={'flex'}
        alignItems="center"
        borderRadius={'50%'}
        width="44px"
        height="44px"
        justifyContent={'center'}
        sx={{ backgroundColor: '#F7F9FF' }}
      >
        <img src={image} height="32px" width={'32px'} alt="template-icon" />
      </Grid>
      <StyledInnerGrid>
        <TypographyComponent
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
          variant="subtitle1"
          color={theme.palette.text_color.high_emphasis}
        >
          {templateName}
        </TypographyComponent>
        <TypographyComponent
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
          variant="body2"
          color={theme.palette.text_color.medium_emphasis}
        >
          {templateDescription}
        </TypographyComponent>
      </StyledInnerGrid>
    </StyledGrid>
  );
};

export default TemplateCard;
