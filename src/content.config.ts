import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // src/content/blog/ 配下のマークダウンファイルを読み込む
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 文字列の日付も自動で Date 型に変換
    slug: z.string(),
    // カテゴリー構造: [{ slug: 'sogetsu', name: '草月' }, ...]
    categories: z.array(
      z.object({
        slug: z.string(),
        name: z.string(),
      })
    ).optional(),
    // タグ構造: [{ name: 'タグ名' }, ...] または文字列の配列にも対応できるように柔軟に
    tags: z.array(
      z.union([
        z.object({
          name: z.string(),
          slug: z.string().optional(),
        }),
        z.string(),
      ])
    ).optional(),
    // tags: z.array(
    //   z.union([
    //     z.object({ name: z.string() }),
    //     z.string(),
    //   ])
    // ).optional(),
    // 👇 status の定義
    status: z.string().optional(),
  }),
});

export const collections = { blog };
