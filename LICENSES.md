# 许可证与来源

| 编号 | 范围 | 许可 |
|---|---|---|
| 1 | `skills/archify/` | MIT；第三方声明见其 THIRD_PARTY_NOTICES.md |
| 2 | `skills/sci-ppt/` | MIT；运行依赖有各自许可证 |
| 3 | `skills/dashi-ppt/` | 上游 AGPL-3.0 主体；`project/packages/html-deck-to-pptx/LICENSE` 的专有例外独立适用 |
| 4 | 共同规则、目录和维护脚本 | 为仓库所有者整理的共享材料，暂未另行授予第三方通用开源许可证 |
| 5 | `skills/wise-ppt/` | AGPL-3.0；第三方依赖、字体、图标及地图数据见该目录 NOTICE 和对应许可证 |

1. 各 Skill 目录中的许可证随分发保留。本仓没有用统一 MIT 标签覆盖全部组件。
2. 大师 PPT 上游允许商业使用；修改、再分发和网络服务可能触发对应源码义务。专有导出引擎保持在完整 Skill 内，不独立拆用，也不修改其专有代码。
3. SCI-PPT 的 MIT 只覆盖该 Skill 自身。其依赖（例如 PyMuPDF）及论文、字体、图片等输入另有条件；商业产品集成需按实际版本和使用方式检查依赖许可。
4. Lieflat Charts 使用 PolyForm Noncommercial 1.0.0，当前未收录其本体。商用授权须来自权利人，不能由本仓所有者代授。
5. MCP 配置只声明如何连接工具，未包含 graft 或 fastctx 的可执行程序，也不替代它们各自的许可。
6. Wise PPT 按上游公开发行提交原样收录，保留 LICENSE、NOTICE、字体 OFL、ECharts Apache-2.0、组件与图标 MIT 等声明。AGPL 不是“禁止商用”，但修改、再分发或网络服务的具体方式可能涉及源码提供义务；不能据此承诺所有商用场景均无额外条件。地图数据须保留上游 NOTICE 指定的来源标注；用户输入素材另行核对权利。
