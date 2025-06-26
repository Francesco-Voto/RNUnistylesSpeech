import {StyleSheet} from 'react-native-unistyles';

const theme = {
        colors: {
            primary: 'green',
            secondary: 'white',
            tertiary: 'grey',
        },
    };

export * from 'react-native-unistyles';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    default: typeof theme
  }
}

StyleSheet.configure({
  themes: {
    default: theme,
    },
});
