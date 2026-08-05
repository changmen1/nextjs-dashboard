/*
 * Author: zxl
 * 文件描述: Next 字体
 * 创建时间 2025年10月11日 14:24:58
 */

import { Inter, Lusitana, Noto_Sans_SC } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400'],
})

// 中文简历使用思源黑体，字重稳定，HR 在不同系统上打开时不会出现明显的字体差异。
export const notoSansSc = Noto_Sans_SC({
    display: 'swap',
    preload: false,
    weight: ['400', '500', '600', '700'],
})
