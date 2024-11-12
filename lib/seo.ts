export const seo = {
  title: 'sbemo | 开发者、AI “专家”、细节控、研究生',
  description:
    '我叫赵硕，一名开发者、AI “专家”、细节控、研究生',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
