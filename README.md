# 行业热点与中长线投资线索周报机器人

自动抓取每周公开行业、政策、资金、景气度和中概股线索，并生成 Markdown 周报的 GitHub Actions 机器人。

## ✨ 功能特性

- 🤖 **自动运行**：每周日 23:00（UTC+8）执行一次
- 📅 **每周存档**：自动生成 `weekly/YYYY-MM-DD-industry-hotspots.md`
- 🔥 **多源聚合**：覆盖宏观政策、市场资金、AI算力、新能源、汽车、医药消费、周期品、港股与中概股
- 📝 **结构化输出**：按八步框架生成中长线投资研究周报
- 🧠 **AI 复盘**：使用硅基流动模型整理行业主线、资金验证、景气度、观察个股池和下周计划
- 🎯 **定位清晰**：用于中长线布局研究，不用于短线炒作

## 📂 项目结构

```
news-bot/
├── .github/
│   └── workflows/
│       └── daily.yml          # GitHub Actions 工作流（每周日 23:00）
├── scripts/
│   ├── fetch-rss.js           # RSS 抓取模块
│   ├── sources.js             # 信息源配置
│   ├── generate-md.js         # Markdown 生成器
│   ├── generate-summary.js    # LLM 摘要生成模块
│   └── run.js                 # 主执行脚本
├── weekly/
│   └── YYYY-MM-DD-industry-hotspots.md
├── outputs/                   # 本地 Codex 分析稿输出目录
├── daily/                     # 历史日报归档
├── package.json
└── README.md
```

## 🔌 信息源

### 宏观与资金
- 国务院、发改委、工信部、央行、证监会等政策与监管线索
- A股板块涨幅、北向/南向/主力资金、行业 ETF 份额变化

### 行业主线
- AI 算力、半导体、数据中心、光模块
- 新能源、电力设备、储能、电网
- 新能源汽车、智能驾驶、中概汽车
- 创新药、CXO、消费复苏、平台经济
- 地产基建、有色、化工、钢铁等周期品
- 港股与美股中概股财报、监管和海外流动性

## 🚀 使用方法

### 本地测试

```bash
# 安装依赖
npm install

# 运行脚本
npm start
```

### GitHub Actions

工作流会在每周日 **UTC+8 23:00** 自动运行（对应 UTC 15:00），或可通过 `workflow_dispatch` 手动触发。

### ⚙️ 配置 API Key（必需）

为了启用 LLM 周度复盘功能，需要配置硅基流动的 API Key：

1. 进入 GitHub 仓库页面
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 名称填写：`SILICONFLOW_API_KEY`
5. 值填写：你的硅基流动 API Token
6. 点击 **Add secret**

配置完成后，工作流会自动使用该 Token 调用 `deepseek-ai/DeepSeek-V3.2` 模型生成复盘。

**本地测试时**，需要设置环境变量：
```bash
export SILICONFLOW_API_KEY="your-api-key-here"
npm start
```

或使用 `.env` 文件（需要安装 `dotenv` 包）。

## 📝 输出示例

每周生成的 Markdown 文件包含：

```markdown
# 行业热点与中长线投资线索周报

报告日期：2026-05-31
生成时间：2026-05-31 23:00

## 本周深度复盘与下周观察计划

第一步：本周市场宏观概况
...

第八步：制定下周观察与交易计划
...

---

## 原始公开线索归档

### AI算力与半导体
- **...**
  来源：...
  链接：...

---
免责声明：本报告由自动化脚本基于公开信息生成，仅用于研究复盘和中长线观察，不构成任何投资建议。
```

## ⚙️ 高级配置

### 自定义信息源

在 `scripts/sources.js` 中可以自定义信息源和分类。

### 调整 LLM 参数

在 `scripts/generate-summary.js` 中可以调整模型参数（temperature, top_p 等）。

## 📄 License

MIT
