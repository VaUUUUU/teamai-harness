# v0.1.0 验证记录

## 1. 已完成的本地验证（2026-09-15）

| 编号 | 检查项 | 结果与边界 |
|---|---|---|
| 1 | 资源完整性 | `node scripts/validate.mjs` 通过：3 个 Skill，636 个共享资源文件；检查来源字段、许可证文件、逐文件 SHA-256、文件大小，以及凭据/本机路径特征 |
| 2 | TeamAI 主配置 | 使用官方提交 `656432008468e1783445438cb17af08fedd335cf` 的 `TeamaiConfigSchema` 解析 `teamai.yaml` 成功；核对 Codex 的共享指令目标为 `.codex/AGENTS.md` |
| 3 | MCP 声明 | 同一官方源码的 `McpYamlSchema` 解析成功；确认为 graft、fastctx 两项；未测试服务的实际启动与调用 |
| 4 | Skill 发现 | 调用官方 `SkillsHandler.scanTeamForPull` 成功识别 archify、dashi-ppt、sci-ppt；另以 YAML 解析各自 SKILL.md 元数据并核对名称 |
| 5 | Archify 冒烟测试 | `--help` 正常；用随包 `async-job-roundtrip.sequence.json` 成功生成独立 HTML；不等同于所有图类型的视觉验收 |
| 6 | SCI-PPT 语法 | 32 个 Python 源文件通过 AST 解析；没有运行论文到 PPTX 的完整链路 |
| 7 | 大师 PPT 来源 | 从官方仓库提交 `21dc7e5fc8c3a0d7f6a94948153dd1ee954f4e64` 导入完整 Skill 目录，补入上游根 LICENSE；保留导出引擎专有 LICENSE；没有运行完整 PPTX/PDF 导出 |

官方 TypeScript 校验代码通过本机已有 esbuild 转换后调用；Skill 扫描校验仅运行只读方法，没有运行 init/pull 的安装分支，也没有执行未使用的内置资源加载分支。

## 2. 可重复检查

```sh
node scripts/validate.mjs
node skills/archify/bin/archify.mjs --help
node skills/archify/bin/archify.mjs render sequence skills/archify/examples/async-job-roundtrip.sequence.json verification-output/archify-smoke.html
```

1. GitHub Actions 在 push 和 PR 时运行资源校验；实际结果以仓库 Actions 页面为准。
2. 源码快照按原始字节保存，`.gitattributes` 禁止自动换行转换，避免跨机器检出后哈希变化。
3. 只有有意更改共享资源后，才运行 `node scripts/inventory.mjs --write` 更新清单，并在 PR 中解释差异。

## 3. 未覆盖范围

1. 仓库发布不等于所有机器已接入；没有据此声称真实用户环境已运行 TeamAI init 或自动同步。
2. 依赖安装、模型能力、第三方服务授权和完整内容生产，需要在接入机器上验证。
3. 凭据特征扫描不是完整安全审计；许可整理也不是对全部使用方式的法律保证。商用或对外分发仍需遵守各组件条款。
