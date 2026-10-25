# Ospey 现代房产模板

中英文响应式单页房产网站，参考 Jiro Ospey 的区块、布局和动效。包含天空视频与透明建筑叠层、统计计数、9阶段进度、视频房源轮播、服务入场、粘性房源列表、预约弹窗、10条客户评价滚动、FAQ和订阅演示。默认中文，英文 /en。不存在独立博客或联系页；联系与政策为页内区块。

## 运行

Node 24.16.0，pnpm 9.15.4。先运行 pnpm install --frozen-lockfile，再 pnpm dev；默认 http://127.0.0.1:43470。生产 pnpm build 后 pnpm start。PORT 可覆盖端口。停止使用启动终端 Ctrl+C。无数据库和业务环境配置。

## 验证和修改

pnpm typecheck、pnpm lint、pnpm test、pnpm build。品牌入口 config/brand.ts；双语与集合 content/；主题 theme.css；公共区块 components/；页面组合 pages/HomePage.tsx；路由 src/app/[[...slug]]/page.tsx。均位于 src/features/site-templates/catalog/ospey 下。

## 限制

预约与订阅仅浏览器本地校验，不发送、不保存。媒体播放失败会显示状态，不静默替代素材。减少动态效果时暂停自动视频和循环。源码仓库为 https://github.com/weelume/ospey-template；验收记录不代表来源或素材商业授权。来源与许可见 .tpl/docs/ASSETS.json 与 LICENSE.md。未经明确授权不推送、上传或部署。

## 参考范围

原站为单页，三端截图各覆盖首页、关于、房源与联系区块，不虚构博客。动效与原站的全部三端逐帧对照仍未完成，不宣称完整一致。
