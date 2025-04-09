import React from 'react';
import { IconButton, styled } from '@mui/material';
import { ReactSVG } from 'react-svg';
import { TypographyComponent } from '../Typography';
import theme from '../../../core-utils/theme';

export interface IconButtonProps {
  src?: string;
  letter?: string;
  img_height?: string;
  active?: boolean;
  img_width?: string;
  icon_color?: string;
  disabled?: boolean;
  border?: string;
  border_color?: string;
  border_radius?: string;
  background_color?: string;
  height?: string;
  width?: string;
  padding?: string;
  children?: JSX.Element;
  type?: 'letter' | 'icon';
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // eslint-disable-next-line no-unused-vars
  onMouseDown?: (React.MouseEventHandler<HTMLButtonElement> & ((e: string) => void))
}

const StyledIcon = styled(IconButton)((props: IconButtonProps) => ({
  disabled: props.disabled ? props.disabled : false,
  border: props.border,
  borderColor: props.border_color,
  borderRadius: props.border_radius || '4px',
  backgroundColor: props.active
    ? theme.palette.structural.structural_300
    : props.background_color,
  height: props.height,
  width: props.width,
  padding: props.padding,
}));

const IconButtonComponent = (props: IconButtonProps) => {
  const {
    src,
    img_height,
    img_width,
    icon_color,
    disabled,
    border,
    border_color,
    border_radius,
    background_color,
    height,
    width,
    padding,
    active,
    type,
    letter,
    style,
    onClick,
    onMouseDown,
  } = props;
  return (
    <StyledIcon
      children={
        type === 'letter' ? (
          <TypographyComponent
            variant="subtitle2"
            color={
              props.active
                ? theme.palette.text_color.interactive
                : theme.palette.text_color.high_emphasis
            }
          >
            {letter}
          </TypographyComponent>
        ) : (
          <ReactSVG
            height={img_height}
            width={img_width}
            src={`${src}`}
            beforeInjection={(svg) => {
              const paths: NodeListOf<SVGPathElement> = svg.querySelectorAll(
                'path',
              );
              paths.forEach((path: SVGPathElement) =>
                path.setAttribute(
                  'stroke',
                  `${
                    active
                      ? theme.palette.primary.primary_100
                      : theme.palette.grey_color.grey_400
                  }`,
                ),
              );
            }}
          />
        )
      }
      style={ style }
      disabled={disabled}
      icon_color={icon_color}
      border={border}
      border_color={border_color}
      border_radius={border_radius}
      background_color={background_color}
      height={height}
      width={width}
      padding={padding}
      onClick={onClick}
      onMouseDown={onMouseDown}
      active={active}
      data-testid="iconComponent"
    />
  );
};

export default IconButtonComponent;
