export interface ContentBlock {
  type: 'paragraph' | 'code' | 'list';
  text?: string;
  language?: string;
  items?: string[];
}

export interface Topic {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Tutorial {
  name: string;
  notes: Topic[];
}

export interface TutorialCollection {
  [key: string]: Tutorial;
}
