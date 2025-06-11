# 开发服务器
dev:
    npm run docs:dev

# 构建文档
build:
    npm run docs:build

# 部署到GitHub Pages
deploy:
    npm run docs:build
    cd docs/.vuepress/dist
    git init
    git add -A
    git commit -m 'deploy'
    git push -f https://github.com/ai-mpy/vp-docs.git main:gh-pages
    cd - 