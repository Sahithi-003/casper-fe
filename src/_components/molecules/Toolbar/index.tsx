/* eslint-disable no-unused-vars */
import React from 'react';
import { styled, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButtonComponent from '../../atoms/IconButton';
import boldIcon from '../../../../public/icons/bold.svg';
import italicIcion from '../../../../public/icons/italic.svg';
import underlineIcon from '../../../../public/icons/underline.svg';
import unNumberedIcon from '../../../../public/icons/unnumbered-list.svg';
import numberedIcon from '../../../../public/icons/numbered-list.svg';
import h1Icon from '../../../../public/icons/H1.svg';
import h2Icon from '../../../../public/icons/H2.svg';
import h3Icon from '../../../../public/icons/H3.svg';
import h4Icon from '../../../../public/icons/H4.svg';

export interface ToolbarProps {
  handleClickH1?: () => void;
  handleClickH2?: () => void;
  handleClickH3?: () => void;
  handleClickH4?: () => void;
  handleClickBold?: () => void;
  handleClickItalic?: () => void;
  handleClickUnderline?: () => void;
  handleClickUnNumbered?: () => void;
  handleClickNumbered?: () => void;
  onMouseDownBlock: (format: string) => void;
  onMouseDownMarkButton: (format: string) => void;
  activeBlockButton?: boolean;
  activeMarkButton?: boolean;
  BoldStyle?: React.CSSProperties;
  ItalicStyle?: React.CSSProperties;
  UnderlineStyle?: React.CSSProperties;
  UnNumberedStyle?: React.CSSProperties;
  NumberedStyle?: React.CSSProperties;
  H1Style?: React.CSSProperties;
  H2Style?: React.CSSProperties;
  H3Style?: React.CSSProperties;
  H4Style?: React.CSSProperties;
}

const MainContainer = styled(Box)(() => ({
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '14px 24px 14px 20px',
}));

const ToolbarContainer = styled(Box)(() => ({
  width: '100%',
  alignItems: 'center',
  gap: '12px',
  display: 'flex',
  flexDirection: 'row',
}));

const LeftContainer = styled(Box)(() => ({
  // width: '10.5%',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
}));

const MidContainer = styled(Box)(() => ({
  // width: '6.74%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row',
}));

const RightContainer = styled(Box)(() => ({
  // width: '9.4%',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
}));

const Toolbar = (props: ToolbarProps) => {
  return (
    <>
      <MainContainer data-testid="tool-bar">
        <ToolbarContainer>
          <LeftContainer>
            <IconButtonComponent
            img_height='8px'
            img_width='14px'
              src={h1Icon}
              onClick={props.handleClickH1}
              onMouseDown={()=>props.onMouseDownBlock('heading-one')}
              active={props.activeBlockButton}
              style={props.H1Style}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
            img_height='8px'
            img_width='14px'
              src={h2Icon}
              onClick={props.handleClickH2}
              onMouseDown={()=>props.onMouseDownBlock('heading-two')}
              active={props.activeBlockButton}
              style={props.H2Style}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
            img_height='8px'
            img_width='14px'
              src={h3Icon}
              onClick={props.handleClickH3}
              onMouseDown={()=>props.onMouseDownBlock('heading-three')}
              active={props.activeBlockButton}
              style={props.H3Style}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
            img_height='8px'
            img_width='14px'
              src={h4Icon}
              onClick={props.handleClickH4}
              onMouseDown={()=>props.onMouseDownBlock('heading-four')}
              active={props.activeBlockButton}
              style={props.H4Style}
              width="auto"
            ></IconButtonComponent>
          </LeftContainer>
          <Divider orientation="vertical" variant="middle" flexItem />
          <MidContainer>
            <IconButtonComponent
            img_height='6.83px'
            img_width='9.33px'
              src={boldIcon}
              onClick={props.handleClickBold}
              onMouseDown={()=>props.onMouseDownMarkButton('bold')}
              active={props.activeMarkButton}
              style={props.BoldStyle}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
              src={italicIcion}
              onClick={props.handleClickItalic}
              onMouseDown={()=>props.onMouseDownMarkButton('italic')}
              active={props.activeMarkButton}
              style={props.ItalicStyle}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
            img_height='11.67px'
            img_width='9.33px'
              src={underlineIcon}
              onClick={props.handleClickUnderline}
              onMouseDown={()=>props.onMouseDownMarkButton('underline')}
              active={props.activeMarkButton}
              style={props.UnderlineStyle}
              width="auto"
            ></IconButtonComponent>
          </MidContainer>
          <Divider orientation="vertical" variant="middle" flexItem />
          <RightContainer>
            <IconButtonComponent
            img_height='10.65px'
            img_width='11.98px'
              src={unNumberedIcon}
              onClick={props.handleClickUnNumbered}
              onMouseDown={()=>props.onMouseDownMarkButton('bulleted-list')}
              active={props.activeBlockButton}
              style={props.UnNumberedStyle}
              width="auto"
            ></IconButtonComponent>
            <IconButtonComponent
            img_height='13.3px'
            img_width='12px'
              src={numberedIcon}
              onClick={props.handleClickNumbered}
              onMouseDown={()=>props.onMouseDownMarkButton('numbered-list')}
              active={props.activeBlockButton}
              style={props.NumberedStyle}
              width="auto"
            ></IconButtonComponent>
          </RightContainer>
        </ToolbarContainer>
      </MainContainer>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
    </>
  );
};

export default Toolbar;
