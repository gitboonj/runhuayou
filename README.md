# NORVEX Lubricants 外贸润滑油英文官网（静态网站）

一个纯 HTML + CSS + JavaScript 的静态网站，**不需要安装任何软件、不需要数据库**，双击 `index.html` 就能在浏览器里打开。

> ⚠️ 公司名称（NORVEX Lubricants）、地址、电话、产品参数等**全部是虚构的示例数据**，正式上线前请替换为真实信息。

## 文件结构

```
├── index.html      首页
├── products.html   产品列表（带分类筛选）
├── product.html    产品详情（所有产品共用这一个页面）
├── about.html      关于我们
├── contact.html    联系我们（含询盘表单）
├── css/
│   └── style.css   全站样式（颜色、布局、手机适配）
└── js/
    ├── products.js 产品数据 ← 增删改产品只需改这里
    └── main.js     交互功能（手机菜单、产品展示、表单校验与提交）
```

## 常见修改

| 想做的事 | 改哪里 |
| --- | --- |
| 新增 / 修改产品 | `js/products.js` 中的 `PRODUCTS` 数组，复制一个 `{ ... }` 改内容即可 |
| 首页显示哪些推荐产品 | 产品数据里的 `featured: true` |
| 修改主题颜色 | `css/style.css` 顶部 `:root` 里的颜色变量 |
| 修改公司名、电话、邮箱、地址 | 5 个 HTML 文件的顶部信息条、页脚，以及 `contact.html` 左侧联系方式 |
| 修改 WhatsApp 号码 | 搜索 `wa.me/8613800000000`，换成你的号码（国家码+号码，只写数字） |

产品详情页的网址格式是 `product.html?id=产品编号`，编号就是 `products.js` 里的 `id`。

## 让询盘表单真正发送邮件

静态网站本身不能发邮件，默认是**演示模式**（提交后显示成功，但不会发送）。启用方法：

1. 到 [Formspree](https://formspree.io) 免费注册，新建一个表单，填入接收询盘的邮箱
2. 复制得到的地址（形如 `https://formspree.io/f/abcdwxyz`）
3. 打开 `js/main.js`，填到 `const FORM_ENDPOINT = "";` 的引号里

## 本地预览

- 最简单：直接双击 `index.html`
- 或在本目录运行 `python3 -m http.server 8000`，然后浏览器打开 http://localhost:8000

## 免费上线

可以直接部署到 GitHub Pages、Netlify 或 Cloudflare Pages（把整个文件夹上传即可，无需构建）。

## 后续建议

- 用真实产品照片替换代码绘制的油桶示意图（`products.js` 中的 `createBottleSVG`）
- 购买自己的域名，并把邮箱换成企业邮箱
