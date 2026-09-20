# Wise PPT 接入与验证

## 1. 版本与使用方式

1. 官方发行仓：[WiseWong6/wise-ppt](https://github.com/WiseWong6/wise-ppt)。固定提交 [`9743b49ce2307b1fec2cbb9a87a4eebe29576dc2`](https://github.com/WiseWong6/wise-ppt/tree/9743b49ce2307b1fec2cbb9a87a4eebe29576dc2)，收录日期 2026-09-20，上游文件无修改。
2. 发行清单的开发源码标识为 `cae3b53272532bafdeb24e01a5cc4c82aa466111`，与公开发行仓提交是不同坐标。保留 LICENSE、NOTICE 和所有随包第三方许可，不改标为 MIT。
3. 使用：“用 Wise PPT 把这份材料做成网页演示和 PDF。”可指定页数、配色、输出目录。图册位于 `<skill>/references/catalog.html`，用 Google Chrome 打开。
4. 支持 16:9 HTML 和同源 PDF，不等于原生可编辑 PPTX。保留 standard / experimental 模式边界：改变已审核结构需明确授权。
5. 条件：Windows/macOS、Node 22/24 LTS、Google Chrome 132+；不支持 Linux 或用 Edge 代替 Chrome。无需 npm install，完整说明见 [USER-GUIDE.md](../skills/wise-ppt/USER-GUIDE.md)。
6. 使用前运行 `node <skill>/bin/wise-ppt.mjs doctor`。生产仍须通过 preflight、build、validate、deliver，安装检查不替代成品验收。

## 2. 与共同 Harness 配合

1. Codex 用户级 skills 目录中的安装可供本机所有项目发现，不只限于本仓目录。下一轮对话可用；若宿主仍缓存旧清单，可重新开启任务。
2. 本仓 `claudemd/common/` 管共同沟通、编号、证据、任务边界；Wise `SKILL.md` 管演示制作流程。不复制全局规则进 Wise 文件，也不去掉它的安装和交付检查。
3. 仅 clone 本仓不会激活共同规则。按根 README 接入 TeamAI 后，其他机器用 `teamai pull` 同步，仍须独立满足运行条件和通过 doctor。本次不擅自启用全局自动同步或修改 MCP。
4. 本机与仓库使用同一固定版本。后续升级走来源核对、doctor、bundle/inventory 检查及 PR，不静默跟随上游 HEAD。

## 3. 实际验证与问题处理

| 编号 | 项目 | 结果与边界 |
|---|---|---|
| 1 | 发行完整性 | 选定版本的 2,864 个清单文件字节数和 SHA-256 全部匹配；清单 SHA-256 为 `1979a1ce7d8c32d71e3db23165c680b4ca892ba12c8b779017f8381a41a82695` |
| 2 | 官方 doctor | Windows x64、Node v24.13.0、Google Chrome 153.0.8010.48 上通过；`status: pass`、`bundle_mode: release`、无 warnings |
| 3 | 字体 | 本机有 10 项生产字体缺失；doctor 不下载，首次 build 按官方清单下载并校验；不声称首次构建完全离线 |
| 4 | 拒绝的最新提交 | [`c3bb934`](https://github.com/WiseWong6/wise-ppt/commit/c3bb9349484d28c02e168154437cc95339bd38bd) 只改 README 并新增作者名片；README 实际 17,166 字节、清单 16,502，doctor 失败；改用前一官方提交，未篡改清单 |
| 5 | Windows 换行 | 普通 Git clone 的换行转换使 LICENSE 初检失败；最终使用 skill-installer 下载指定提交的原始归档。本仓 `* -text` 保留原字节 |
| 6 | 沙箱 | 沙箱内 Chrome CDP 启动被拒，获准在沙箱外运行后通过；未修改 Chrome 安全参数 |
| 7 | 未验证 | 本次没有制作用户演示或运行完整 build/validate/deliver；不据安装检查承诺所有素材、下载和机器都成功 |
| 8 | 最终安装与仓库 | 最终全局目录 doctor 再次通过；本机与仓库共 2,865 个文件逐项 SHA-256 一致；本仓检查通过：4 个 Skill、3,501 个共享资源文件 |

## 4. 检索记录与证据边界

采用 skill-installer 安装，按 high-impact-gate / sufficient-web-search 核对来源和限制。实际入口为统一 web search，底层引擎不公开；另用 GitHub API 和本地官方文件核验，不使用平台登录态检索。

| 编号 | 轮次 | 实际 query / 方向 | 采用证据或缺口 |
|---|---|---|---|
| 1 | 官方 | `"Wise PPT" skill github`、`"wise-ppt" official license` | [作者发布说明](https://wisewong.com/blog/wise-ppt-skill-opensource/)定位官方仓；以下载的 README、SKILL、USER-GUIDE、LICENSE、NOTICE 为核心依据 |
| 2 | 技术问题 | `"wise-ppt" bug "not working" GitHub issue` | 无可靠专项结果；issues 网页不可取，GitHub API 返回空数组，不解释为没有缺陷 |
| 3 | 英文社区 | `"wise-ppt" reddit review alternative` | 未找到 Wise 专项独立测评；泛 HTML deck 讨论不证明本 Skill 的质量 |
| 4 | 中文社区 | wise-ppt + 下表平台限定；微信另加“Wise PPT 微信公众号 踩坑” | 作者自述不能当独立用户反馈，各平台公开缺口见下表 |
| 5 | 替代 | `"wise-ppt" alternative HTML PPT skill` | 命中其他 HTML 演示工具资料，未据此给工具排名或更换用户指定方案 |
| 6 | 反向 | `"wise-ppt" 失败 限制 license risk` | 无专项独立结论；本地真实发现 README 漂移、Windows 换行、Chrome 沙箱和字体条件，已明确记录 |

| 编号 | 中文平台 | 公开检索及缺口 |
|---|---|---|
| 1 | 小红书 | site:xiaohongshu.com；无可引用专项独立反馈；未使用登录态 |
| 2 | 微信公众号 | site:mp.weixin.qq.com/s/、site:mp.weixin.qq.com/s?、中文“微信公众号”入口；公开证据缺口，作者站自述不充当独立反馈 |
| 3 | 抖音 | site:douyin.com；公开证据缺口 |
| 4 | 知乎 | site:zhihu.com；公开证据缺口 |
| 5 | V2EX | site:v2ex.com；公开证据缺口 |
| 6 | Linux.do | site:linux.do；没有取得可引用的专项独立反馈，索引页不算反馈 |
| 7 | 掘金 | site:juejin.cn；公开证据缺口 |

| 编号 | 完成度检查 | 状态及证据 |
|---|---|---|
| 1 | 检索包 | 已完成：来源、许可、安装条件、兼容、反向和替代方向 |
| 2 | 实际入口 | 已说明：统一 web search、GitHub API、本地文件；不能声称使用具体搜索引擎 |
| 3 | 检索日志 | 已完成：六轮及逐平台缺口如上 |
| 4 | 反向证据与中文平台 | 检索动作完成、专项独立反馈不足；本地反向问题已复现 |
| 5 | 结论匹配证据 | 仅本机完整性与 doctor 可确定；独立口碑、完整制作效果、普遍兼容性未确认 |

自查为**部分通过**：多轮公开检索没有可靠专项独立反馈，不补写口碑。具体文件完整性及本机 doctor 结果置信度高；不对普遍制作质量下确定结论。下一步可用用户提供的非敏感资料验证完整制作链路。

## 5. 回退

1. 校验失败的初次下载移出活动 Skill 目录，保留在本机备份，未上传仓库。
2. 本机不再使用时，保留用户修改后将 wise-ppt 移出用户级 skills；不需要改全局 AGENTS.md 或其他 Skill。
3. 仓库回退用 revert PR，不强制改写历史；用户生成文件和字体缓存独立保留。
