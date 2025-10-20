const tokens = require('./tokens.json');

const colorVars = {
  bg: 'hsl(var(--bg))',
  fg: 'hsl(var(--fg))',
  muted: 'hsl(var(--muted))',
  'muted-fg': 'hsl(var(--muted-fg))',
  primary: 'hsl(var(--primary))',
  'primary-fg': 'hsl(var(--primary-fg))',
  ring: 'hsl(var(--ring))'
};

module.exports = {
  content: ['./mkdocs_shadcn_theme/templates/**/*.html', './example/docs/**/*.md'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: colorVars,
      borderRadius: {
        sm: tokens.radius.sm,
        DEFAULT: tokens.radius.md,
        md: tokens.radius.md,
        lg: tokens.radius.lg
      },
      fontFamily: {
        sans: tokens.font.sans.split(','),
        mono: tokens.font.mono.split(',')
      },
      spacing: tokens.space
    }
  },
  plugins: []
};
