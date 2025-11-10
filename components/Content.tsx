import React from 'react';
import { Topic } from '../types';
import TopicSection from './TopicSection';

interface ContentProps {
  topics: Topic[];
}

const Content: React.FC<ContentProps> = ({ topics }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {topics.map((topic, index) => (
        <TopicSection 
            key={index} 
            topic={topic} 
        />
      ))}
    </div>
  );
};

export default Content;