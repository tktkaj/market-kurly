const path = require('path');
const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name : 'container',
      filename: 'remoteEntryCnt.js',
      remotes : {},
      exposes : {},
      shared : {}
    })
  ),
)