import '@emotion/react';
import { theme } from '@styles/theme';

declare module '@emotion/react' {
    export interface Theme {
        color: { [color in keyof typeof theme["color"]]: string };
    }
}