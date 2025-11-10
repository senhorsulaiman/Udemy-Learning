import React from 'react';
import { Topic } from '../types';
import CodeBlock from './CodeBlock';

interface TopicSectionProps {
  topic: Topic;
}

const TextParser: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  // Regex to capture markdown-like syntax for links, bold, and various inline code styles
  const regex = /(\[.*?\]\(.*?\))|(\*\*.*?\*\*)|(`.*?`|\B'.*?'\B|\B".*?"\B)/g;
  
  const parts = text.split(regex).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        // **bold**
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
        }
        
        // [link](url)
        if (part.startsWith('[') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, linkText, url] = match;
            return <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{linkText}</a>;
          }
        }
        
        // `code` or 'code' or "code"
        const isBacktickCode = part.startsWith('`') && part.endsWith('`');
        const isSingleQuoteCode = part.startsWith("'") && part.endsWith("'");
        const isDoubleQuoteCode = part.startsWith('"') && part.endsWith('"');

        if (isBacktickCode || isSingleQuoteCode || isDoubleQuoteCode) {
            return <code key={index} className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono text-primary">{part.slice(1, -1)}</code>;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};


const TopicSection: React.FC<TopicSectionProps> = ({ topic }) => {
  return (
    <section id={topic.id} className="mb-16 scroll-mt-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-8 pb-3 border-b border-border flex items-center gap-3">
        <span className="bg-gradient-to-r from-primary to-violet-400 text-transparent bg-clip-text">
            {topic.title}
        </span>
      </h2>
      <div className="space-y-6">
        {topic.content.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <TextParser text={block.text || ''} />
                </p>
              );
            case 'code':
              return (
                <CodeBlock
                  key={index}
                  code={block.text || ''}
                  language={block.language || 'text'}
                />
              );
            case 'list':
              return (
                <ul key={index} className="list-disc list-outside space-y-3 pl-5 text-muted-foreground text-base sm:text-lg">
                  {block.items?.map((item, i) => (
                    <li key={i} className="pl-2">
                      {item.split('\n').map((line, j) => <div key={j}><TextParser text={line.trim()} /></div>)}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default TopicSection;