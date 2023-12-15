import type { Preview } from '@storybook/vue3';

// @ts-ignore
const scss = import.meta.glob("../src/**/*.@(css|scss)");
Object.keys(scss).forEach((str) => import(/* @vite-ignore */ str));

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
