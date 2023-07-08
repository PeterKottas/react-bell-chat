module.exports = function babel(api) {
  const BABEL_ENV = api.env();
  const presets = ['@babel/env', '@babel/typescript', '@babel/preset-react'];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-static-block',
    ['@babel/proposal-class-properties', { loose: true }],
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'inline-react-svg',
  ];
  if (BABEL_ENV === 'development') {
    plugins.push('react-refresh/babel');
  }
  return {
    presets,
    plugins,
  };
};
