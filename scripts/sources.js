// 白名单：允许抓取全文的站点。周报以线索收集为主，默认只抓可稳定解析的公开网页。
const FULLTEXT_WHITELIST = [
  "gov.cn",
  "stats.gov.cn",
  "pbc.gov.cn",
  "ndrc.gov.cn",
  "mof.gov.cn",
  "mofcom.gov.cn",
  "miit.gov.cn",
  "sec.gov",
  "ir.nasdaq.com"
];

// 检查URL是否在白名单中
export function canFetchFullText(url) {
  return FULLTEXT_WHITELIST.some(domain => url.includes(domain));
}

// 兼容旧模块命名：本仓库不再抓取 arXiv，保留函数避免调用方报错。
export function isArxivSource(sourceName) {
  return sourceName && sourceName.toLowerCase().includes('arxiv');
}

export const SOURCES = [
  {
    category: "宏观政策与监管",
    sources: [
      { name: "国务院政策动态", url: "https://news.google.com/rss/search?q=国务院+政策+资本市场+产业+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "policy" },
      { name: "发改委产业政策", url: "https://news.google.com/rss/search?q=发改委+产业+政策+投资+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "policy" },
      { name: "工信部产业政策", url: "https://news.google.com/rss/search?q=工信部+产业+政策+制造业+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "policy" },
      { name: "央行与金融监管", url: "https://news.google.com/rss/search?q=央行+证监会+金融监管+资本市场+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "policy" }
    ]
  },
  {
    category: "市场资金与情绪",
    sources: [
      { name: "A股板块涨幅排名", url: "https://news.google.com/rss/search?q=A股+本周+板块+涨幅+排名+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "market" },
      { name: "北向资金行业流向", url: "https://news.google.com/rss/search?q=北向资金+行业+流向+本周+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "market" },
      { name: "主力资金行业流向", url: "https://news.google.com/rss/search?q=主力资金+行业+流向+本周+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "market" },
      { name: "ETF份额变化", url: "https://news.google.com/rss/search?q=行业ETF+份额+增长+资金+流入+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "market" }
    ]
  },
  {
    category: "AI算力与半导体",
    sources: [
      { name: "AI算力产业链", url: "https://news.google.com/rss/search?q=AI算力+数据中心+服务器+光模块+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "半导体设备材料", url: "https://news.google.com/rss/search?q=半导体+设备+材料+国产替代+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "中概科技公司", url: "https://news.google.com/rss/search?q=中概股+AI+云计算+财报+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "company" }
    ]
  },
  {
    category: "新能源与电力设备",
    sources: [
      { name: "光伏产业链", url: "https://news.google.com/rss/search?q=光伏+硅料+组件+装机+价格+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "储能与电网", url: "https://news.google.com/rss/search?q=储能+电网+招标+电力设备+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "风电核电", url: "https://news.google.com/rss/search?q=风电+核电+装机+审批+招标+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" }
    ]
  },
  {
    category: "汽车与智能驾驶",
    sources: [
      { name: "新能源汽车销量", url: "https://news.google.com/rss/search?q=新能源汽车+销量+渗透率+车企+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "智能驾驶产业链", url: "https://news.google.com/rss/search?q=智能驾驶+Robotaxi+激光雷达+汽车芯片+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "中概汽车公司", url: "https://news.google.com/rss/search?q=中概股+新能源汽车+财报+交付量+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "company" }
    ]
  },
  {
    category: "医药消费与出海",
    sources: [
      { name: "创新药与CXO", url: "https://news.google.com/rss/search?q=创新药+CXO+临床+出海+授权+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "消费复苏", url: "https://news.google.com/rss/search?q=消费+零售+旅游+餐饮+业绩+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "平台经济与中概消费", url: "https://news.google.com/rss/search?q=中概股+电商+本地生活+财报+消费+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "company" }
    ]
  },
  {
    category: "地产基建与周期品",
    sources: [
      { name: "地产政策与销售", url: "https://news.google.com/rss/search?q=房地产+政策+销售+土地+本周+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "基建与工程机械", url: "https://news.google.com/rss/search?q=基建+工程机械+订单+开工率+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" },
      { name: "有色化工钢铁", url: "https://news.google.com/rss/search?q=有色+化工+钢铁+价格+库存+开工率+when:7d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "industry" }
    ]
  },
  {
    category: "港股与中概股",
    sources: [
      { name: "港股行业热点", url: "https://news.google.com/rss/search?q=港股+行业+热点+南向资金+when:7d&hl=zh-CN&gl=HK&ceid=HK:zh-Hant", type: "market" },
      { name: "中概股财报与监管", url: "https://news.google.com/rss/search?q=中概股+财报+监管+美股+when:7d&hl=zh-CN&gl=US&ceid=US:zh-Hans", type: "company" },
      { name: "ADR与海外流动性", url: "https://news.google.com/rss/search?q=Chinese+ADR+earnings+China+stocks+when:7d&hl=en-US&gl=US&ceid=US:en", type: "company" }
    ]
  }
];

