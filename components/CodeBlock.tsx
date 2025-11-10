import React from 'react';
import { Clipboard, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-[#0D1117] rounded-xl my-4 relative group text-sm shadow-lg border border-border">
      <div className="flex justify-between items-center px-4 py-2 bg-muted/50 rounded-t-lg border-b border-border">
        <span className="text-xs font-sans text-muted-foreground">{language}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md opacity-50 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Clipboard size={16} />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm md:text-base">
        <code 
          className="font-mono text-gray-300"
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;