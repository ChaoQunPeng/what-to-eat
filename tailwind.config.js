/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 19:17:36
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-30 16:17:33
 * @FilePath: /what-to-eat/tailwind.config.js
 * @Description: tailwind配置文件
 */

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./pages/**/*.{html,vue,js}'],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}rpx`;
      return map;
    }, {}),
    colors: {
      red: 'var(--wte-color-red)',
      black: 'var(--wte-color-black)',
      'black-85': 'var(--wte-color-black-85)',
      'black-65': 'var(--wte-color-black-65)',
      'black-45': 'var(--wte-color-black-45)',
      'black-25': 'var(--wte-color-black-25)',
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
