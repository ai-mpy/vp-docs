# 开发服务器
dev:
    npm run docs:dev

# 构建文档
build:
    npm run docs:build

# 部署到GitHub Pages
deploy:
    #!/usr/bin/env bash
    set -e
    
    echo "清理旧的构建文件..."
    rm -rf docs/.vuepress/dist
    
    echo "开始构建文档..."
    npm run docs:build
    
    echo "检查构建结果..."
    if [ ! -f "docs/.vuepress/dist/index.html" ]; then
        echo "❌ 构建失败: 找不到 index.html 文件"
        exit 1
    fi
    
    echo "检查CSS文件..."
    if [ -z "$(find docs/.vuepress/dist -name "*.css" | head -1)" ]; then
        echo "⚠️ 警告: 未找到CSS文件"
    else
        echo "✓ 找到CSS文件"
    fi
    
    echo "开始部署到GitHub Pages..."
    cd docs/.vuepress/dist
    
    # 创建CNAME文件（如果需要自定义域名）
    # echo "your-custom-domain.com" > CNAME
    
    # 创建.nojekyll文件以禁用GitHub Pages上的Jekyll处理
    touch .nojekyll
    
    # 初始化git仓库
    git init
    git config --local user.name "GitHub Actions"
    git config --local user.email "github-actions@users.noreply.github.com"
    
    # 添加所有文件并提交
    git add -A
    git commit -m 'deploy to gh-pages'
    
    # 推送到gh-pages分支
    echo "推送到GitHub仓库的gh-pages分支..."
    git push -f https://github.com/ai-mpy/vp-docs.git HEAD:gh-pages
    
    # 返回原目录
    cd -
    
    echo "✅ 部署完成！"
    echo "站点将在几分钟后可以通过 https://ai-mpy.github.io/vp-docs/ 访问"
    echo "如果样式仍有问题，请尝试强制刷新浏览器缓存 (Ctrl+F5 或 Cmd+Shift+R)"