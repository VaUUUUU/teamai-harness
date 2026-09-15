# 新增和更新 Skill

## 1. 提交什么

1. 新 Skill 放入 `skills/<name>/`，包含 `SKILL.md`、实际运行所需文件和许可证。不要把 node_modules、虚拟环境、缓存和用户产物一起复制。
2. 更新 `sources.json`：来源、上游提交或发布版本、许可证、纳入日期、本仓改动、已验证内容。
3. 更新 `CATALOG.md`：能做什么、怎样使用、依赖、限制。
4. 在 `CHANGELOG.md` 顶部增加中文条目：增加/修改/移除原因、影响、验证及回退方式。
5. 执行 `node scripts/inventory.mjs --write` 和 `node scripts/validate.mjs`。

## 2. PR 流程

```sh
git switch -c add/<skill-name>
# 完成上面的文件修改和检查
git add skills/<skill-name> sources.json inventory.json CATALOG.md CHANGELOG.md
git commit -m "feat: add <skill-name>"
git push -u origin add/<skill-name>
gh pr create
```

1. PR 会展示变更差异并提供说明模板。维护者检查用途、许可证、脚本与验证证据后合并。
2. 若已通过 TeamAI 接入，也可在本机已安装的 Skill 目录编辑后运行 `teamai push`，选择这次变化，由 TeamAI 开 PR；仍需在 PR 分支补齐本仓的目录、来源、哈希和 CHANGELOG。
3. MCP、共享指令、文档直接在仓库分支修改并开普通 PR。不要假定所有文件类型都能通过 `teamai push` 上传。
4. 需要形成发布快照时添加版本标签。各机器 `teamai pull` 后同步的是合并后的默认分支；已有会话是否立即载入新指令取决于客户端，必要时重新开始会话。
5. 若更新有问题，用 `git revert <commit>` 产生可审查的回退提交并开 PR。已保存的历史不会被强制改写。Skill 使用中产生的文件和外部操作不属于代码回退范围。

## 3. 记录边界

1. Git 只记录提交过的变化，不记录尚未提交的本机修改，也不记录每一次 Skill 调用。
2. 本仓关闭 TeamAI 使用统计上报。更新日志记录资源版本，不上传聊天内容。
3. PR 是本仓维护流程；初版未配置必须审批的分支保护，管理员仍可直接 push。若要技术上强制 PR，需另行配置 GitHub 分支保护。
