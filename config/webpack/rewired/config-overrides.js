const path = require('path');
const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  addWebpackPlugin,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
// eslint-disable-next-line
const loaderUtils = require('loader-utils');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// eslint-disable-next-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ActionsLoaderConfig = require('@mihanizm56/webpack-magic-redux-modules/lib/loader-config');

const CSSPlugin = config => {
  const modifiedPlugins = config.plugins.map(plugin => {
    if (
      Boolean(plugin.constructor) &&
      plugin.constructor.name === MiniCssExtractPlugin.name
    ) {
      return new MiniCssExtractPlugin({
        ...plugin.options,
        ignoreOrder: true,
      });
    }

    return plugin;
  });

  return { ...config, plugins: modifiedPlugins };
};

function getCSSModuleLocalIdent(context, localIdentName, localName, options) {
  const hash = loaderUtils.getHashDigest(
    context.resourcePath + localName,
    'md5',
    'base64',
    10,
  );

  return loaderUtils.interpolateName(context, `${localName}__${hash}`, options);
}

const StyleLoaderConfig = ({ use: [, css], test }) => {
  if (
    test.toString() === /\.css$/.toString() ||
    test.toString() === /\.(scss|sass)$/.toString()
  ) {
    return;
  }
  // eslint-disable-next-line
  css.options.modules = {
    // localIdentName: '[local]-[hash:base64:3]',
    getLocalIdent: getCSSModuleLocalIdent,
  };
};

const addMagicActionsLoader = () => config => {
  const newRules = [...config.module.rules, ActionsLoaderConfig()];

  return {
    ...config,
    module: { ...config.module, rules: newRules },
  };
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? override(
        CSSPlugin,
        adjustStyleLoaders(StyleLoaderConfig),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
        addWebpackPlugin(new ProgressBarPlugin()),
      )
    : override(
        CSSPlugin,
        adjustStyleLoaders(StyleLoaderConfig),
        addReactRefresh({ disableRefreshCheck: true }),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
      );
