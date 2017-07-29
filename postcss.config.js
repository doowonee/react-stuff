const overriddenVariables = { 
  /* Note that you can use global colors and variables */
  'color-text': 'var(--palette-grey-800)',
  'color-primary': 'var(--palette-blue-500)',
  'color-accent': 'var(--palette-teal-600)',
  'preferred-font' : "'Spoqa Han sans', 'Arial', sans-serif;",
  'drawer-desktop-width': "calc(5 * var(--standard-increment-desktop));"
};

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
          customProperties: {
            variables: overriddenVariables,
          },
        },
    }
  },
};