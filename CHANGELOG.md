# 更新记录

## v0.2.0 — 2026-09-20

1. 新增 Wise PPT：原样保留官方发行包、设计规范、校验逻辑、LICENSE 与 NOTICE，支持离线 16:9 HTML 演示和同源 PDF。
2. 固定官方提交 `9743b49ce2307b1fec2cbb9a87a4eebe29576dc2`；未采用最新 `c3bb934`，因为 README 变更但发行清单哈希未更新。没有手改清单绕过检查。
3. 新增上游 bundle manifest 校验：CI 在本仓 inventory 之外逐项比对 Wise 官方清单。
4. 增补来源、依赖、用法和验证记录，详见 [Wise PPT 接入说明](docs/WISE-PPT.md)。要求 Windows/macOS、Node 22/24 LTS、Google Chrome 132+；首次 build 可能下载字体，不承诺原生可编辑 PPTX。
5. 本次不启用或修改 TeamAI 全局自动同步、MCP 或其他 Skill；已接入机器通过 `teamai pull` 获取新增能力。
6. 回退：对本次合并提交运行 `git revert` 并提 PR；本机保留用户修改后可将新增 wise-ppt 移出全局 skills。不要回退到校验失败的 c3bb934。

## v0.1.0 — 2026-09-15

1. 建立可能商用的跨机器共享 Harness，首个接入目标为 Codex。
2. 纳入通用协作规则 A1–E5（含 C5）；将 FastCtx 约定做成按工具可用性执行的共用说明。
3. 纳入 Archify、SCI-PPT、大师 PPT，保留各自许可证和来源记录。
4. 声明 graft、fastctx MCP，使用可跨机器解析的命令名称。
5. Lieflat Charts 记录为待商用授权；其余候选 #4、#5、#6、#8 保持待讨论。
6. 增加 Skill 目录、来源台账、文件 SHA-256 清单、PR 模板和 GitHub 自动校验。
7. 初版校验范围：资源结构、来源信息、文件完整性、敏感路径/凭据模式，以及实际执行的烟雾检查；具体结果见 `docs/VERIFICATION.md`。
8. 回退方式：Git revert 对应提交；同步到本机的文件、客户端授权和依赖需要独立处理。
