# TeamAI Harness

一套在不同机器和 AI 工具之间复用的协作规则、Skill 与 MCP 声明。首版以 Codex 为接入目标，预留 Claude Code 的原生路径。

## 1. 当前共享内容（v0.2.0）

| 编号 | 内容 | 状态 |
|---|---|---|
| 1 | 通用协作规则 A1–E5，含 C5 | 共同源见 `claudemd/common/01-collaboration.md` |
| 2 | FastCtx 使用约定 | 按当前工具可用性执行，见 `claudemd/common/02-tools.md` |
| 3 | Archify | 已收录，MIT |
| 4 | SCI-PPT | 已收录，MIT |
| 5 | 大师 PPT / Dashi PPT | 已收录，AGPL-3.0 主体及专有导出引擎，详见各许可证 |
| 6 | graft、fastctx MCP | 已声明，每台机器仍需有对应可执行程序 |
| 7 | Lieflat Charts | 待商用授权，未分发技能本体 |
| 8 | Wise PPT | 已收录，AGPL-3.0；HTML 演示与 PDF，要求 Node 22/24 和 Google Chrome 132+ |

目录、来源、版本和限制见 [CATALOG.md](CATALOG.md)，每次发布见 [CHANGELOG.md](CHANGELOG.md)。文件精确版本记录在 [inventory.json](inventory.json)。

Wise PPT 的操作方式与本次验证见 [接入说明](docs/WISE-PPT.md)。它保留自身的设计规范，同时在已接入 TeamAI 的宿主中遵循本仓共同协作规则；本仓不替换或移除 Wise 的安装、结构和交付检查。

## 2. 在另一台机器接入 Codex

先安装 Node.js 20+、Git、Codex、GitHub CLI，并完成 `gh auth login`。贡献更新还需要该仓库的写权限。

```sh
npm install -g teamai-cli@0.24.0
teamai init https://github.com/VaUUUUU/teamai-harness --scope user --agent codex
teamai pull
teamai status
```

1. 这是用户级接入，通用资源用于多个项目。登录同一个 Codex 账号本身不会完成上述安装。
2. 首次接入前备份现有 `~/.codex/AGENTS.md`、同名 Skill 和 MCP 配置。TeamAI 的指令注入块保留已有正文；若已有相同 A1–E5，应对照后去掉重复的旧副本。
3. Codex 需要在 Hooks 设置中信任 TeamAI 的会话启动钩子，之后才能依靠启动会话自动同步；未信任时手动运行 `teamai pull`。
4. 本仓显式设置 `toolPaths.codex.claudemd: .codex/AGENTS.md`，确保共享指令落到 Codex 会读取的位置。TeamAI 0.24.0 默认路径没有这一项。
5. MCP 使用 PATH 中的 `graft` 和 `fastctx`；缺少程序时 TeamAI 会跳过并提示。已有同名手写 MCP 默认保留，需要对照后再交由 TeamAI 管理。
6. 首版关闭使用统计上传、经验提醒和 CLI 自动升级。Skill 文件更新随 `teamai pull`；Python/Node/浏览器及依赖安装仍在每台机器完成。

## 3. 以后接入 Claude Code

在需要接入的机器安装 Claude Code，再运行：

```sh
teamai init https://github.com/VaUUUUU/teamai-harness --scope user --agent claude
teamai pull
```

重复 init 的 agent 选择是追加关系。Claude 的登录和本机工具授权在 Claude 环境完成；GitHub 写权限由仓库所有者管理。共享资源的格式适配不保证不同模型的行为或成品完全一致。

## 4. 每次更新都有记录

1. **Git 提交**：记录作者、时间、改了哪些文件和逐行差异。
2. **Pull Request（PR）**：记录新增 Skill 的理由、来源、许可证、验证结果和讨论。
3. **CHANGELOG**：用中文解释这一版对使用者有哪些变化。
4. **版本标签**：如 `v0.1.0`，标记可复查的发布快照。

新 Skill 的标准流程：阅读来源及许可证 → 新建分支 → 放入 `skills/<name>/` → 更新目录、来源台账和 CHANGELOG → 运行检查 → 开 PR → 审阅并合并 → 各机器 pull。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 5. 许可范围

本仓按可能用于公司或客户项目设计。第三方 Skill 各自保留许可证，仓库公开不代表所有组件使用同一个许可证。请阅读 [LICENSES.md](LICENSES.md)。

## 6. 官方依据

1. [TeamAI 中文使用手册](https://github.com/Tencent/teamai-cli/blob/656432008468e1783445438cb17af08fedd335cf/docs/usage-guide.zh-CN.md)
2. [Codex AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
