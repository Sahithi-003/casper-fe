import React from 'react';
import { Grid, styled } from '@mui/material';
import { TypographyComponent } from '../../atoms/Typography';
import theme from '../../../core-utils/theme';
import IconButtonComponent from '../../atoms/IconButton';
import copyIcon from '../../../../public/icons/copy.svg';
import starIcon from '../../../../public/icons/star.svg';

interface AiOutputCardProps {
  handleCopy?: () => void;
  handleFavourite?: () => void;
  CardHeader: string;
  CardContent: string;
  CardTimeCounter: string;
}
const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  // width: '32%',
  // height: 'fit-content',
  width: '100%',
  boxSizing: 'border-box',
  background: `${theme.palette.text_color.light}`,
  border: `1px solid ${theme.palette.stroke.stroke_100}`,
  borderRadius: '8px',
  boxShadow:
    '0px 0px 1px rgba(12, 25, 75, 0.24), 0px 3px 8px -1px rgba(50, 54, 71, 0.05)',
}));

const TopGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const RightGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const LeftGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
}));

const BottomGrid = styled(Grid)(() => ({
  justifyContent: 'center',
  marginTop: '12px',
}));

const AiOutputCard = ({
  handleCopy,
  handleFavourite,
  CardHeader,
  CardContent,
  CardTimeCounter,
}: AiOutputCardProps) => {
  return (
    <StyledGrid container data-testid="ai-card">
      <TopGrid container>
        <RightGrid item width={'70%'}>
          <TypographyComponent
            variant="subtitle2"
            color={`${theme.palette.text_color.high_emphasis}`}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {CardHeader}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            color={`${theme.palette.text_color.low_emphasis}`}
          >
            {CardTimeCounter}
          </TypographyComponent>
        </RightGrid>
        <LeftGrid item>
          <IconButtonComponent src={copyIcon} onClick={handleCopy} />
          <IconButtonComponent src={starIcon} onClick={handleFavourite} />
        </LeftGrid>
        <BottomGrid>
          <TypographyComponent
            variant="body1"
            color={`${theme.palette.text_color.medium_emphasis}`}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {CardContent}
          </TypographyComponent>
        </BottomGrid>
      </TopGrid>
    </StyledGrid>
  );
};

export default AiOutputCard;
