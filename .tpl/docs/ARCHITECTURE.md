# 架构

采用 Next.js App Router + React + TypeScript strict + Framer Motion，业务按 feature 组织。config/brand.ts 集中品牌；content/ 存储双语与集合；theme.css 集中主题；components/ 按区块划分；HomePage 组合；meta.ts 注册页面。host.tsx 通过 Context 提供可选宿主注入，独立运行默认自身品牌。素材仅从 public/templates/ospey 读取。
