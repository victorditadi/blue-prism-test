// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      cyan: string;
      cyanDarker: string;
      orange: string;
    };
    size: {
      small: string;
      mediumSmall: string;
      medium: string;
      large: string;
    };
    font: string[];
  }
}
