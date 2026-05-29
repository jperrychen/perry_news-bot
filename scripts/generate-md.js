export function generateMarkdown(date, data, summary = null, timestamp = null) {
  let md = `# 行业热点与中长线投资线索周报\n\n报告日期：${date}\n`;

  // 如果有时间戳，显示具体时间
  if (timestamp) {
    const timeStr = new Date(timestamp).toLocaleString('zh-CN', { 
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    md += `生成时间：${timeStr}\n\n`;
  } else {
    md += "\n";
  }

  // 如果有 LLM 复盘，放在最前面
  if (summary) {
    md += `## 本周深度复盘与下周观察计划\n\n${summary}\n\n---\n\n`;
  } else {
    md += `## 本周深度复盘与下周观察计划\n\n> LLM 复盘生成失败。本文件保留原始公开线索，需人工补充八步复盘。\n\n---\n\n`;
  }

  // 原始线索列表
  md += `## 原始公开线索归档\n\n`;
  for (const block of data) {
    if (block.items.length === 0) continue;
    
    md += `### ${block.category}\n\n`;
    for (const item of block.items.slice(0, 5)) {
      md += `- **${item.title}**  \n`;
      
      // 标注来源类型
      const sourceTypeLabel = item.sourceType === 'policy' ? '政策/监管线索' :
                             item.sourceType === 'market' ? '市场/资金线索' :
                             item.sourceType === 'industry' ? '产业线索' :
                             item.sourceType === 'company' ? '公司线索' :
                             item.sourceType === 'blog' ? '博客' :
                             item.sourceType === 'news' ? '新闻' : '公开资讯';
      
      md += `  来源：${item.source} (${sourceTypeLabel})  \n`;
      
      // 如果有摘要，显示摘要
      const content = item.fullContent || item.snippet;
      if (content && content.trim().length > 0) {
        const contentType = item.contentType === 'fulltext' ? '全文' : 'RSS摘要';
        // 限制摘要长度
        const preview = content.length > 500 
          ? content.substring(0, 500).trim() + '...'
          : content.trim();
        md += `  摘要（${contentType}）：${preview.replace(/\n/g, ' ')}\n`;
      }
      
      md += `  链接：${item.link}\n\n`;
    }
  }

  md += "---\n\n免责声明：本报告由自动化脚本基于公开信息生成，仅用于研究复盘和中长线观察，不构成任何投资建议。市场有风险，投资需独立判断。\n\n_自动生成 · GitHub Actions_\n";
  return md;
}

