import React, { useRef, useEffect } from 'react';
import { Topic } from '../types';

interface TopNavBarProps {
  topics: Topic[];
  activeTopicId: string;
  onTopicClick: (topicId: string) => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ topics, activeTopicId, onTopicClick }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const topicRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const activeTopicElement = topicRefs.current.get(activeTopicId);
    if (activeTopicElement && navRef.current) {
      activeTopicElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeTopicId]);

  // Add mouse wheel scrolling effect
  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      navElement.scrollTo({
        left: navElement.scrollLeft + e.deltaY,
        behavior: 'auto'
      });
    };

    navElement.addEventListener('wheel', onWheel);
    return () => navElement.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="sticky top-[61px] bg-background/80 dark:bg-card/80 backdrop-blur-sm border-b border-border z-10 overflow-x-auto no-scrollbar shadow-sm"
    >
      <div className="flex items-center gap-2 px-4 py-3">
        {topics.map(topic => {
          const isActive = activeTopicId === topic.id;
          return (
            <button
              key={topic.id}
              ref={node => {
                if (node) {
                  topicRefs.current.set(topic.id, node);
                } else {
                  topicRefs.current.delete(topic.id);
                }
              }}
              onClick={() => onTopicClick(topic.id)}
              className={`
                px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200
                ${isActive ? 'bg-primary text-primary-foreground shadow' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'}
              `}
            >
              {topic.title}
            </button>
          )
        })}
      </div>
    </nav>
  );
};

export default TopNavBar;