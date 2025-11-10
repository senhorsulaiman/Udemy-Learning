import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TUTORIALS } from './data';
import { Topic } from './types';
import TopNavBar from './components/TopNavBar';
import Content from './components/Content';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Menu, ChevronsUpDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentTutorialId, setCurrentTutorialId] = useState<string>('nextjs');
  
  const currentTutorial = TUTORIALS[currentTutorialId];

  const [topics, setTopics] = useState<Topic[]>(currentTutorial.notes);
  const [activeTopicId, setActiveTopicId] = useState<string>(
    currentTutorial.notes.length > 0 ? currentTutorial.notes[0].id : ''
  );

  const mainContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const newTopics = TUTORIALS[currentTutorialId].notes;
    setTopics(newTopics);
    if (newTopics.length > 0) {
      setActiveTopicId(newTopics[0].id);
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
      }
    } else {
      setActiveTopicId('');
    }
  }, [currentTutorialId]);

  const handleScrollToTopic = (topicId: string) => {
    const element = document.getElementById(topicId);
    const contentElement = mainContentRef.current;
    
    if (element && contentElement) {
       const contentRect = contentElement.getBoundingClientRect();
       const elementRect = element.getBoundingClientRect();
       const top = elementRect.top - contentRect.top + contentElement.scrollTop;
      
      contentElement.scrollTo({
        top: top - 130, // Offset for sticky header + top nav bar
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = useCallback(() => {
    const contentElement = mainContentRef.current;
    if (!contentElement) return;

    // Active topic highlighting
    let currentActiveId = '';
    const topicElements = contentElement.querySelectorAll('section[id]');
    
    const headerOffset = 150; // Offset for header + nav bar
    topicElements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top <= headerOffset) { 
            currentActiveId = element.id;
        }
    });
    
    if (currentActiveId) {
        setActiveTopicId(currentActiveId);
    } else if (topics.length > 0 && contentElement.scrollTop < 200) {
        setActiveTopicId(topics[0].id);
    }
  }, [topics]);

  useEffect(() => {
    const contentElement = mainContentRef.current;
    if (contentElement) {
        contentElement.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="flex flex-col h-dvh bg-muted/50 dark:bg-background">
      <header className="sticky top-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm border-b border-border p-3 shadow-sm z-20 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-semibold text-foreground">{currentTutorial.name}</h1>
          </div>
           <div className="flex items-center gap-4">
               <div className="relative">
                 <select
                   value={currentTutorialId}
                   onChange={(e) => setCurrentTutorialId(e.target.value)}
                   className="text-sm font-medium appearance-none cursor-pointer bg-muted border border-border rounded-lg py-2 pl-3 pr-8 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                 >
                   {Object.entries(TUTORIALS).map(([id, tutorial]) => (
                     <option key={id} value={id}>{tutorial.name}</option>
                   ))}
                 </select>
                 <ChevronsUpDown size={16} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/80" />
               </div>
            <ThemeSwitcher />
          </div>
      </header>
      
      <TopNavBar 
        topics={topics}
        activeTopicId={activeTopicId}
        onTopicClick={handleScrollToTopic}
      />

      <main ref={mainContentRef} className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <Content topics={topics} />
          </div>
      </main>
    </div>
  );
};

export default App;