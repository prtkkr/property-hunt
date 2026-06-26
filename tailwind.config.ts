import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
};

export default config;
