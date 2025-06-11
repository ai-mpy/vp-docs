# MicroPython文档

这是一个使用VuePress构建的MicroPython传感器文档网站。

## 在线访问

访问 [https://ai-mpy.github.io/vp-docs/](https://ai-mpy.github.io/vp-docs/) 查看在线文档。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

## 构建部署

```bash
# 构建静态文件
npm run docs:build

# 部署到GitHub Pages
npm run docs:deploy
```

## 文档结构

- `/docs/`: 所有文档文件
  - `/docs/sensor/`: 传感器相关文档
    - `light_sensor.md`: 光线传感器文档
    - `digital_vibration_sensor.md`: 数字震动传感器文档