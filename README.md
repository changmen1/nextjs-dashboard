# Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
**根据官方学习步骤 记录重要信息**

## 第一章 创建Next.js 应用程序并运行开发服务器

### 文件夹结构

- /app : 包含了您应用程序的所有路由、组件和逻辑，您将主要在这里进行工作。
- /app/lib : 包含了您应用程序中使用的函数，例如可重用的实用函数和数据获取函数。
- /app/ui : 包含了您应用程序的所有 UI 组件，例如卡片、表格和表单。为了节省时间，我们已经为您预先设计了这些组件。
- /public : 包含了您应用程序的所有静态资源，例如图片。
- 配置文件：您还会在应用程序的根目录下注意到一些配置文件，例如 next.config.ts 。当您使用 create-next-app 开始一个新项目时，这些文件中的大多数都会被创建和预先配置。在这个课程中，您不需要修改它们。

> 对于这个项目，我们在 app/lib/placeholder-data.ts 中提供了一些占位符数据。文件中的每个 JavaScript 对象代表你数据库中的一个表。
> 在设置数据库的章节中，您将使用这些数据来初始化您的数据库（用一些初始数据填充它）。
> Next.js 会检测您的项目是否使用 TypeScript，并自动安装必要的包和配置。Next.js 还附带了一个 TypeScript 插件，用于您的代码编辑器，以帮助实现自动完成和类型安全。

```bash
    Opening the command palette (Ctrl/⌘ + Shift + P)
    - 打开命令面板（ Ctrl/⌘ + Shift + P ）
    Searching for "TypeScript: Select TypeScript Version"
    - 搜索“TypeScript：选择 TypeScript 版本”
    Selecting "Use Workspace Version"
    - 选择“使用工作区版本”
```

## 第二章 CSS样式

How to add a global CSS file to your application.
如何将全局 CSS 文件添加到您的应用程序中。

Two different ways of styling: Tailwind and CSS modules.
两种不同的样式化方式：Tailwind 和 CSS 模块。

How to conditionally add class names with the clsx utility package.
如何使用 clsx 工具包条件性地添加类名。

### clsx

- 您可以使用 clsx 来有条件地应用类，如下所示：
- 假设您想创建一个接受 status 的 InvoiceStatus 组件。状态可以是 'pending' 或 'paid' 。
- 如果是 'paid' ，您希望颜色为绿色。如果是 'pending' ，您希望颜色为灰色

```tsx
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}    
```

## 第三章 优化字体和图片

如何使用 next/font 添加自定义字体。

如何使用 next/image 添加图片。

在 Next.js 中字体和图片是如何进行优化的。

>当你使用 next/font 模块时，Next.js 会自动在应用中优化字体。它会在构建时下载字体文件，并将它们与你的其他静态资源一起托管。这意味着当用户访问你的应用时，不会有额外的字体网络请求，这会影响性能。

### 添加主字体

在您的 /app/ui 文件夹中，创建一个名为 fonts.ts 的新文件。您将使用此文件来保存将在整个应用中使用的字体。

```ts
    import { Inter } from 'next/font/google'
    export const inter = Inter({ subsets: ['latin'] });
```

最后，将字体添加到 /app/layout.tsx 中的 body元素：

```tsx
    import "@/app/ui/global.css"
    import { inter } from '@/app/ui/fonts';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
      );
    }
```

通过将 Inter 添加到 body 元素中，字体将应用于您的整个应用。这里，您还添加了 Tailwind antialiased 类，它使字体更加平滑。使用这个类不是必需的，但它增添了一些美感。

### 添加副字体

```ts
    import { Inter, Lusitana } from 'next/font/google'
    export const inter = Inter({ subsets: ['latin'] });
    export const lusitana = Lusitana({
        subsets: ['latin'],
        weight: ['400', '700'],
    })
```

## 第四章 创建布局和页面

Create the dashboard routes using file-system routing.
使用文件系统路由创建 dashboard 路由。

Understand the role of folders and files when creating new route segments.
了解在创建新路由段时文件夹和文件的作用。

Create a nested layout that can be shared between multiple dashboard pages.
创建一个可以共享于多个仪表板页面的嵌套布局。

Understand what colocation, partial rendering, and the root layout are.
了解什么是托管、部分渲染和根布局。

## 第五章 页面导航

How to use the next/link component.
如何使用 next/link 组件。

How to show an active link with the usePathname() hook.
如何使用 usePathname() 钩子显示活动链接。

How navigation works in Next.js.
Next.js 中导航的工作原理。
