const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Web プラットフォーム用の resolver を追加
config.resolver.platforms = ['web', 'native', 'ios', 'android'];

module.exports = config;