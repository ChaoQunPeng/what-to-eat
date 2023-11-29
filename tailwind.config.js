/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 19:17:36
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 21:34:47
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
      debugger
      map[index] = `${index}rpx`;
      return map;
    }, {}),
    extend: {}
  },
  plugins: []
};
