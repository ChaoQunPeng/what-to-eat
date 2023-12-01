/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 19:17:36
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-01 13:57:10
 * @FilePath: /what-to-eat/tailwind.config.js
 * @Description: tailwind配置文件
 */

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './pages/**/*.{html,vue,js}',
    './components/**/*.{html,vue,js}'
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}rpx`;
      return map;
    }, {}),
    colors: {
      red: '#ee0a24',
      black: 'var(--wte-color-black)',
      'black-85': 'rgba(18, 18, 18, 0.85)',
      'black-65': 'rgba(18, 18, 18, 0.65)',
      'black-45': 'rgba(18, 18, 18, 0.45)',
      'black-25': 'rgba(18, 18, 18, 0.25)',
      // transparent: 'transparent',
      white: '#ffffff'
    },
    extend: {
      fontSize: [24, 26, 28, 30, 32, 34, 36, 38, 40].reduce((acc, cur, index) => {
        acc[`size-${cur}`] = `${cur}rpx`;
        return acc;
      }, {}),
      borderRadius: {
        'radius-20': '20rpx'
      }
    }
  },
  plugins: []
};
