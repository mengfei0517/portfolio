# 🚀 GitHub Pages 部署指南

## 什么是 GitHub Pages？

GitHub Pages 是 GitHub 提供的**完全免费**的静态网站托管服务。你不需要购买任何服务器或域名就可以拥有一个在线网站！

你的网站地址将是：`https://你的用户名.github.io/portfolio/`

如果你创建一个特殊名称的仓库（`你的用户名.github.io`），网站地址将是：`https://你的用户名.github.io/`

## 📋 前提条件

1. 拥有一个 GitHub 账号（免费注册：https://github.com）
2. 在电脑上安装 Git

## 🎯 部署步骤

### 方法一：通过 GitHub 网页界面（最简单）

#### 1. 创建 GitHub 仓库

访问 https://github.com/new 创建新仓库：

- **仓库名称选项 A**（推荐）：`你的用户名.github.io`
  - 例如：如果你的用户名是 `mengfei0517`，则命名为 `mengfei0517.github.io`
  - 这样你的网站地址就是：`https://mengfei0517.github.io`
  
- **仓库名称选项 B**：`portfolio` 或其他任何名称
  - 网站地址将是：`https://你的用户名.github.io/portfolio/`

- **可见性**：选择 Public（公开）
- **其他选项**：不需要勾选任何东西
- 点击 "Create repository"

#### 2. 上传文件到 GitHub

在新创建的仓库页面：

1. 点击 "uploading an existing file" 或 "Add file" → "Upload files"
2. 将以下文件和文件夹拖拽到页面：
   - `index.html`
   - `css/` 文件夹
   - `js/` 文件夹
   - `images/` 文件夹
   - `README.md`
   - `.gitignore`
3. 在底部的提交信息中输入：`Initial commit`
4. 点击 "Commit changes"

#### 3. 启用 GitHub Pages

1. 进入仓库的 "Settings"（设置）
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 下拉菜单中选择：
   - Branch: `main` (或 `master`)
   - Folder: `/ (root)`
4. 点击 "Save"
5. 等待几分钟，页面会显示你的网站地址

#### 4. 访问你的网站

几分钟后，访问：
- 如果仓库名是 `你的用户名.github.io`：`https://你的用户名.github.io`
- 如果仓库名是其他：`https://你的用户名.github.io/仓库名/`

---

### 方法二：使用 Git 命令行（推荐给熟悉Git的用户）

#### 1. 在本地初始化 Git 仓库

```bash
cd /home/fiona/projects/portfolio

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "Initial commit: Add portfolio website"
```

#### 2. 连接到 GitHub 远程仓库

在 GitHub 上创建仓库后（参考方法一的步骤1），运行：

```bash
# 替换 YOUR_USERNAME 为你的 GitHub 用户名
# 替换 REPOSITORY_NAME 为你的仓库名
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 3. 启用 GitHub Pages

参考方法一的步骤3。

---

## 🎨 添加个人照片

在部署前或部署后，记得：

1. 将你的照片重命名为 `profile.jpg`
2. 放入 `images/` 文件夹
3. 如果已经部署，重新上传或推送更新

---

## 🔄 更新网站内容

### 通过网页界面更新：

1. 在 GitHub 仓库中找到要修改的文件
2. 点击文件，然后点击铅笔图标（Edit）
3. 修改内容
4. 点击 "Commit changes"
5. 等待几分钟，网站会自动更新

### 通过 Git 命令行更新：

```bash
# 修改文件后
git add .
git commit -m "Update: 描述你的修改"
git push
```

等待几分钟，GitHub Pages 会自动重新部署。

---

## 🌐 自定义域名（可选）

如果你想使用自己的域名（如 `www.mengfeifan.com`）：

1. 购买域名（可选，不是必需的）
2. 在 GitHub Pages 设置中添加自定义域名
3. 在域名提供商处配置 DNS 记录

这是可选的，不影响使用 GitHub 提供的免费域名。

---

## 📊 查看网站统计（可选）

你可以添加 Google Analytics 来追踪访问量：

1. 注册 Google Analytics
2. 获取跟踪代码
3. 在 `index.html` 的 `<head>` 部分添加代码

---

## ⚡ 加速部署（高级）

创建 `.github/workflows/deploy.yml` 文件可以实现自动化部署，但对于静态网站来说这不是必需的。

---

## 🐛 常见问题

### Q: 网站显示 404 错误
A: 检查：
- GitHub Pages 是否已启用
- 分支和文件夹设置是否正确
- 等待几分钟让部署完成

### Q: 样式没有加载
A: 如果仓库名不是 `用户名.github.io`，可能需要修改 CSS 和 JS 的路径。

### Q: 照片不显示
A: 检查 `images/profile.jpg` 文件是否存在且已上传。

### Q: 需要多久才能看到更新？
A: 通常 1-5 分钟，最多可能需要 10 分钟。

---

## 💡 提示

- ✅ GitHub Pages 完全免费
- ✅ 无需信用卡
- ✅ 无需购买服务器
- ✅ 自动 HTTPS 加密
- ✅ 无限流量（合理使用）
- ✅ 支持自定义域名

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看 GitHub Pages 文档：https://docs.github.com/pages
2. 检查仓库的 Actions 标签页查看部署状态
3. 确保所有文件都已正确上传

祝你部署成功！🎉 