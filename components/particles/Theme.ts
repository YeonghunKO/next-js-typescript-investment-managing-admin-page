import { css, DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  /* layout */
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  gridMax: '1440px',
  /* Colours */
  white: '#ffffff',
  offWhite: '#F0F0F0',
  grey: '#a6a6a6',
  grey50: '#f7f7f7',
  grey100: '#d9d9d9',
  grey200: '#bfbfbf',
  grey300: '#a6a6a6',
  grey400: '#8c8c8c',
  grey500: '#737373',
  grey600: '#595959',
  grey700: '#404040',
  grey800: '#262626',
  grey900: '#0d0d0d',
  black: '#141213',
  purple100: '#EDE9FB',
  purple200: '#C9BEF3',
  purple300: '#A593EC',
  purple400: '#8168E4',
  purple500: '#5D3DDC',
  purple600: '#4E2ECD',
  purple700: '#341B97',
  purple800: '#25136C',
  purple900: '#170C41',
  primary: '#5D3DDC',
  primary100: '#EDE9FB',
  primary200: '#C9BEF3',
  primary300: '#A593EC',
  primary400: '#8168E4',
  primary500: '#5D3DDC',
  primary600: '#4E2ECD',
  primary700: '#341B97',
  primary800: '#25136C',
  primary900: '#170C41',
  secondary: '#ff2828',
  tertiary: '#7eff8f',
};

export default Theme;
