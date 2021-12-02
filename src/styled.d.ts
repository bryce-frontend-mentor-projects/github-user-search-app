import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Dictionary<string, string>
        shadows: Dictionary<string, string>
    }
}