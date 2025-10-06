# Mengfei Fan - Portfolio Website

一个现代化、响应式的个人作品集网站，展示了机器人和人工智能工程师的项目、技能和经验。

## 🌐 在线演示

本网站设计参考了简洁优雅的学术主页风格，采用了现代化的UI设计和流畅的动画效果。

## ✨ 特性

- **响应式设计** - 完美适配桌面、平板和移动设备
- **现代化UI** - 使用渐变色、阴影和流畅动画
- **性能优化** - 快速加载，平滑滚动
- **易于定制** - 清晰的代码结构，便于修改
- **SEO友好** - 包含适当的meta标签和语义化HTML

## 📁 项目结构

```
portfolio/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # JavaScript交互
├── images/
│   └── profile.jpg     # 个人照片（需要添加）
├── main.tex            # LaTeX简历源文件
└── README.md           # 项目说明
```

## 🚀 快速开始

### 方法1: 直接打开HTML文件

1. 克隆或下载此仓库
2. 双击 `index.html` 文件在浏览器中打开

### 方法2: 使用本地服务器（推荐）

使用Python内置的HTTP服务器：

```bash
# Python 3.x
cd portfolio
python3 -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000`

或使用Node.js的http-server：

```bash
# 首先安装http-server (如果还没有)
npm install -g http-server

# 在项目目录中运行
cd portfolio
http-server
```

### 方法3: 使用Live Server (VS Code)

1. 在VS Code中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 🎨 自定义

### 修改个人信息

编辑 `index.html` 文件中的相关内容：

- 姓名、标题和描述
- 教育背景
- 技能
- 项目经历
- 工作经验
- 联系信息

### 修改颜色主题

编辑 `css/style.css` 文件顶部的CSS变量：

```css
:root {
    --primary-color: #004f90;      /* 主色调 */
    --secondary-color: #0066cc;    /* 次要色调 */
    --accent-color: #00a8e8;       /* 强调色 */
    /* ... 其他颜色 */
}
```

### 添加个人照片

1. 将你的照片命名为 `profile.jpg`
2. 放置在 `images/` 文件夹中
3. 建议尺寸: 400x480px 或等比例

## 📱 响应式断点

- **桌面**: > 768px
- **平板**: 481px - 768px
- **手机**: < 480px

## 🌐 部署

### GitHub Pages

1. 将代码推送到GitHub仓库
2. 进入仓库设置 (Settings)
3. 找到 "Pages" 部分
4. 选择主分支和根目录
5. 保存，几分钟后网站就会上线

### Netlify

1. 注册 [Netlify](https://www.netlify.com/) 账号
2. 拖拽整个项目文件夹到Netlify
3. 自动部署完成

### Vercel

```bash
# 安装Vercel CLI
npm install -g vercel

# 在项目目录中运行
vercel
```

## 📝 技术栈

- **HTML5** - 语义化标记
- **CSS3** - Flexbox, Grid, 动画
- **JavaScript (ES6+)** - 原生JavaScript, 无框架
- **Font Awesome 6** - 图标库
- **Google Fonts** - Inter字体

## 🎯 功能特性

### 导航栏
- 固定在顶部
- 滚动时添加阴影效果
- 自动高亮当前章节
- 移动端响应式菜单

### 动画效果
- 页面加载淡入
- 滚动触发的元素动画
- 悬停效果
- 平滑滚动

### 时间轴
- 教育背景展示
- 工作经验展示
- 悬停交互效果

### 项目卡片
- 网格布局
- 标签系统
- 悬停放大效果

## 📊 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

## 📄 许可证

此项目仅供个人使用。如需使用，请注明出处。

## 👤 作者

**Mengfei Fan**

- Email: mengfeifan517@163.com
- GitHub: [@mengfei0517](https://github.com/mengfei0517)
- Location: Munich, Germany

## 🙏 致谢

设计灵感来自于学术界的个人主页，特别参考了简洁优雅的布局风格。

---

⭐ 如果你觉得这个项目有帮助，请给它一个星标！ 