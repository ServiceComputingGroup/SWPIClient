# SWAPI

[![Build Status](https://www.travis-ci.org/ServiceComputingGroup/SWPIClient.svg?branch=master)](https://www.travis-ci.org/ServiceComputingGroup/SWPIClient)  ![](https://img.shields.io/badge/license-MIT-000000.svg) [![codebeat badge](https://codebeat.co/badges/5ff2ea16-87a5-4667-8c84-e3e1b260330e)](https://codebeat.co/projects/github-com-servicecomputinggroup-swpiclient-master)

> 本项目是基于 VUE.js 的手脚架 vue-cli 项目，前端模仿 [SWAPI](https://swapi.co/) 网站界面，增加了用户注册，用户登录，登出，修改用户信息的功能

## 项目安装

``` bash
# install dependencies
npm install (npm的安装速度较慢，建议使用cnpm)

# serve with hot reload at localhost:8080
npm run dev

# 使用国内镜像 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖
cnpm install

# 启动服务可以访问 localhost:8080
cnpm run dev 
```
## 容器使用
``` bash
# build
npm run build
或者 cnpm run build
# 构建镜像
docker build -t client .
# 启动容器
docker run -p 80:80 client

# 最后访问IP地址80端口
```

