import matter from 'gray-matter';
import { join } from 'path';
import { readFileSync } from 'fs';

import {serialize} from 'next-mdx-remote/serialize';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getParsedFileContentBySlug(fileName: string, postsPath) {
  const postFilePath = join(postsPath, `${fileName}.mdx`);
  const fileContent = readFileSync(postFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
}

export function renderMarkdown(markdownContent: string) {
 return serialize(markdownContent || '')
}
