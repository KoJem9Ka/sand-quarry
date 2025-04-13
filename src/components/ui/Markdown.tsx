import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useMemo } from 'react';


export function Markdown({ remarkPlugins, rehypePlugins, ...props }: Options) {
  const _remarkPlugins = useMemo(() => {
    return remarkPlugins ? [remarkGfm, ...remarkPlugins] : [remarkGfm];
  }, [remarkPlugins]);

  const _rehypePlugins = useMemo(() => {
    return rehypePlugins ? [rehypeRaw, ...rehypePlugins] : [rehypeRaw];
  }, [rehypePlugins]);

  return (
    <ReactMarkdown
      rehypePlugins={_rehypePlugins}
      remarkPlugins={_remarkPlugins}
      {...props}
    />
  );
}
