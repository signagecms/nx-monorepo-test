import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { readdirSync } from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { getParsedFileContentBySlug, renderMarkdown } from '@mycom/markdown';
// import { Youtube, CustomLink } from '@mycom/shared/mdx-elements';


/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const mdxElements = {
    Youtube: dynamic(async () => {
      return await import('@mycom/shared/mdx-elements/youtube/youtube')}),
    // a: CustomLink
}

// POSTS_DIR_PATH is the absolute path to the _articles directory
const POSTS_DIR_PATH = join(process.cwd(), '_articles');

function Article({ frontMatter, html }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <div className="mb-4">by {frontMatter.author.name}</div>
      </article>
      <hr />
      <MDXRemote {...html} components={mdxElements} />
    </div>
  );
}

export default Article;

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
  // 1. parse the content of the markdown and seperate it into frontmatter and content
  const markdownArticle = getParsedFileContentBySlug(params.slug, POSTS_DIR_PATH);

  // 2. convert markdown content onto html
  const renderHTML = await renderMarkdown(markdownArticle.content);

  return {
    props: {
      frontMatter: markdownArticle.frontMatter,
      html: renderHTML,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  // console.log('readdirSync(POSTS_DIR_PATH)', readdirSync(POSTS_DIR_PATH));

  const paths = readdirSync(POSTS_DIR_PATH)
    .map((path) => path.replace(/\.mdx?$/, '')) // remove the md or mdx extension
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // if no prerender it will show 404
  };
};
