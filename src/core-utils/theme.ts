import { createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
  }

  interface Palette {
    text_color: Palette['primary'];
    grey_color: Palette['primary'];
    stroke: Palette['primary'];
    success_color: Palette['primary'];
    warning_color: Palette['primary'];
    alert: Palette['primary'];
    progress: Palette['primary'];
    structural: Palette['primary'];
    avatars: Palette['primary'];
  }

  interface PaletteOptions {
    text_color: PaletteOptions['primary'];
    grey_color: PaletteOptions['primary'];
    stroke: PaletteOptions['primary'];
    success_color: PaletteOptions['primary'];
    warning_color: PaletteOptions['primary'];
    alert: PaletteOptions['primary'];
    progress: PaletteOptions['primary'];
    structural: PaletteOptions['primary'];
    avatars: PaletteOptions['primary'];
  }

  interface PaletteColor {
    primary_50?: string;
    primary_100?: string;
    primary_200?: string;
    primary_300?: string;
    low_emphasis?: string;
    low_emphasis1?: string;
    medium_emphasis?: string;
    high_emphasis?: string;
    interactive?: string;
    grey_100?: string;
    grey_200?: string;
    grey_300?: string;
    grey_400?: string;
    grey_500?: string;
    grey_600?: string;
    stroke_100?: string;
    stroke_200?: string;
    stroke_300?: string;
    stroke_400?: string;
    stroke_500?: string;
    success_300?: string;
    success_500?: string;
    warning_300?: string;
    warning_500?: string;
    alert_300?: string;
    alert_500?: string;
    progress_300?: string;
    progress_500?: string;
    structural_50?: string;
    structural_100?: string;
    structural_200?: string;
    structural_300?: string;
    white?: string;
    theme?: string;
    avatar_grey?: string;
    avatar_orange?: string;
    avatar_green?: string;
    avatar_lightblue?: string;
    avatar_blue?: string;
    avatar_purple?: string;
    avatar_red?: string;
    avatar_darkblue?: string;
  }

  interface SimplePaletteColorOptions {
    primary_50?: string;
    primary_100?: string;
    primary_200?: string;
    primary_300?: string;
    low_emphasis?: string;
    low_emphasis1?: string;
    medium_emphasis?: string;
    high_emphasis?: string;
    interactive?: string;
    grey_100?: string;
    grey_200?: string;
    grey_300?: string;
    grey_400?: string;
    grey_500?: string;
    grey_600?: string;
    stroke_100?: string;
    stroke_200?: string;
    stroke_300?: string;
    stroke_400?: string;
    stroke_500?: string;
    success_300?: string;
    success_500?: string;
    warning_300?: string;
    warning_500?: string;
    alert_300?: string;
    alert_500?: string;
    progress_300?: string;
    progress_500?: string;
    structural_50?: string;
    structural_100?: string;
    structural_200?: string;
    structural_300?: string;
    white?: string;
    theme?: string;
    avatar_grey?: string;
    avatar_orange?: string;
    avatar_green?: string;
    avatar_lightblue?: string;
    avatar_blue?: string;
    avatar_purple?: string;
    avatar_red?: string;
    avatar_darkblue?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    heading3: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
    overline: true;
  }
}

declare module '@mui/material' {
  interface PropsColorOverrides {
    text_color: true;
    grey_color: true;
    stroke: true;
    success_color: true;
    warning_color: true;
    alert: true;
    progress: true;
    structural: true;
    avatars: true;
  }
}

const theme = createTheme({
  spacing: 4,
  typography: {
    heading1: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    heading2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    heading3: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    subtitle1: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    subtitle2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    body1: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 400,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    caption1: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    caption2: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
      textTransform: 'none',
      fontFamily: 'Lato',
    },

    overline: {
      fontSize: '10px',
      lineHeight: '12px',
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Lato',
    },
  },
  palette: {
    primary: {
      main: '#324EBD',
      primary_50: '#E0E7FF',
      primary_100: '#5573E9',
      primary_200: '#415DCC',
      primary_300: '#324EBD',
    },
    text_color: {
      main: '#2D3248',
      high_emphasis: '#2D3248',
      medium_emphasis: '#656B84',
      low_emphasis: '#8D91A2',
      low_emphasis1: '#8D91A2',
      light: '#FFFFFF',
      interactive: '#5573E9',
    },
    grey_color: {
      main: '#EBEEFC',
      grey_100: '#EBEEFC',
      grey_200: '#B5BFE5',
      grey_300: '#9BA3C2',
      grey_400: '#777D96',
      grey_500: '#303448',
      grey_600: '#EEEEEE',
    },
    stroke: {
      main: '#2D3248',
      stroke_100: '#EBEDF5',
      stroke_200: '#ACB7E5',
      stroke_300: '#717896',
      stroke_400: '#2D3248',
      stroke_500: '#F5F5F5',
    },
    success_color: {
      main: '#26835B',
      success_300: '#E0FCF0',
      success_500: '#26835B',
    },
    warning_color: {
      main: '#E1B129',
      warning_300: '#FFF7D8',
      warning_500: '#E1B129',
    },
    alert: {
      main: '#C83729',
      alert_300: '#FFEDEC',
      alert_500: '#C83729',
    },
    progress: {
      main: '#186AE1',
      progress_300: '#EAF2FF',
      progress_500: '#186AE1',
    },
    structural: {
      main: '#415DCC',
      structural_50: '#F7F8FA',
      structural_100: '#F7F9FF',
      structural_200: '#F0F3FC',
      structural_300: '#F2F4FA',
      white: '#FFFFFF',
      theme: '#415DCC',
    },
    avatars: {
      main: '#0C56C9',
      avatar_grey: '#43536D',
      avatar_orange: '#FD9933',
      avatar_green: '#11865B',
      avatar_lightblue: '#19A3BE',
      avatar_blue: '#0C56C9',
      avatar_purple: '#5247A8',
      avatar_red: '#DC371D',
      avatar_darkblue: '#0A1F41',
    },
  },
});

export default theme;
