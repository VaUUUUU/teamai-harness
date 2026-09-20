# 共享能力目录

## 1. 已确认的 Skill

保留讨论时的候选编号。这里的“收录日期”是进入本仓库的日期，不代表原机器的安装时间。

| 原编号 | 名称 | 状态 / 收录日期 | 能做什么 | 使用方法与依赖 |
|---|---|---|---|---|
| 1 | Archify | 已收录 / 2026-09-15 | 生成可交互 HTML 架构图、流程图、时序图和状态图 | 接入后说“用 Archify 画出这个系统的架构”；需要 Node.js 18+；保留 MIT 和第三方许可 |
| 2 | SCI-PPT | 已收录 / 2026-09-15 | 根据论文 PDF、大纲或文本生成学术 PPTX | 说“用 SCI-PPT 把这篇论文做成汇报”；需要 Python 3.10+ 及 skill 的 requirements；PyMuPDF 依赖单独核对 AGPL/商业许可 |
| 3 | 大师 PPT / Dashi PPT | 已收录 / 2026-09-15 | 制作可离线打开、可编辑的 HTML 演示，并支持 PPTX/PDF 导出 | 说“用大师 PPT 做这份汇报”；按 SKILL.md 安装项目依赖；AGPL 主体与专有导出包各自适用，不拆出导出引擎复用 |
| 7 | Lieflat Charts | 待商用授权 / 未分发 | 模板驱动的数据图表与 HTML 报告 | 尚不随本仓安装；取得适用商用许可后再走新增流程 |
| 9（新增） | Wise PPT | 已收录 / 2026-09-20 | 将 PDF、文章、大纲等整理为 16:9 离线 HTML 演示及同源 PDF | 说“用 Wise PPT 把这份材料做成演示”；Node 22/24 LTS、Google Chrome 132+；不支持 Linux/Edge；使用前 doctor 必须通过；不保证原生可编辑 PPTX |

候选 4、5、6、8 尚未批准进入首版，本仓不分发它们。安装日期不能从文件复制时间可靠倒推。

## 2. MCP 声明

| 编号 | 名称 | 本仓提供 | 接入条件 |
|---|---|---|---|
| 1 | graft | `graft mcp` 的 stdio 声明 | 本机安装 graft，PATH 可找到；服务能力及权限以实际安装版本为准 |
| 2 | fastctx | `fastctx serve` 的 stdio 声明 | 本机安装 fastctx，PATH 可找到；用于本地文件读取、搜索和机械替换 |

不分发这两个服务的二进制，不共享账号、密钥或本机绝对路径。已有同名配置默认保留。

## 3. 共同规则与平台适配

| 编号 | 资源 | 用途 |
|---|---|---|
| 1 | `claudemd/common/01-collaboration.md` | A1–E5（含 C5）的中文协作、编号、证据、任务边界和验收规则 |
| 2 | `claudemd/common/02-tools.md` | FastCtx 优先、工具缺失时的回退、能力可用性约束 |
| 3 | `teamai.yaml` | Codex / Claude Code 的原生路径映射；启用哪个平台由每台机器 init 时选择 |

规则与 Skill 是可共享的指令及资源，不是把不同平台的模型、权限系统、内置工具变成同一个运行时。

## 4. 来源与版本

1. [sources.json](sources.json)：版本、来源、收录日期、许可说明和导入改动。
2. [inventory.json](inventory.json)：每个共享资源文件的字节数及 SHA-256。
3. [LICENSES.md](LICENSES.md)：商业使用边界与第三方许可位置。
4. [CHANGELOG.md](CHANGELOG.md)：每次发布的中文变化说明。
5. Archify 和 SCI-PPT 使用已有安装快照，不能声称其导入文件已与某个未知上游提交逐字核对；SCI-PPT 上游网址尚未确认。
