import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface AvatarProps extends MuiAvatarProps {
  alt: string;
  src?: string;
  variant?: 'circular' | 'rounded' | 'square';
  height?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  avatarText?: JSX.Element | string;
  objectFit?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  variant,
  height,
  width,
  backgroundColor,
  color,
  border,
  avatarText,
  objectFit,
  ...restProps
}) => {
  const useStyles = makeStyles({
    sizeAvatar: {
      height: height,
      width: width,
      backgroundColor: backgroundColor,
      color: color,
      border: border,
      '& > .MuiAvatar-img': {
        objectFit: objectFit ?? 'cover',
      },
    },
  });
  const classes = useStyles();
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      variant={variant}
      className={classes.sizeAvatar}
      data-testid="avatar"
      {...restProps}
    >
      {avatarText ?? alt.charAt(0)}
    </MuiAvatar>
  );
};

export default Avatar;
