# 本仓库的维护规则

1. 先完整读取 `claudemd/common/01-collaboration.md` 和 `claudemd/common/02-tools.md`。这些文件是跨工具共同规则的唯一维护源。
2. 用中文输出，清单、步骤和表格包含编号。
3. 新增或更新 Skill 前核实来源和具体版本，保留许可证；按可能商用的边界处理。不得把待讨论项直接变成已批准项目。
4. 每次资源更新同时更新 `CATALOG.md`、`sources.json` 和 `CHANGELOG.md`，再运行 `node scripts/inventory.mjs --write` 以及 `node scripts/validate.mjs`。
5. 通过分支和 PR 提交资源更新，说明变更、来源、实际验证和未验证项。不把工作区中的凭据、个人会话、历史命令白名单或整个客户端配置加入仓库。
6. TeamAI 的 `rules/*.md` 与 Codex 的 `rules/*.rules` 含义不同。本仓通过 `claudemd/common/` 注入通用行为约定。
