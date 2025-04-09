import { createContext } from 'react';
import { ResponseProps } from '../utils/types';

interface PromptContextType {
  promptInput: string;
  promptLength: number;
  promptResponse: ResponseProps;
  fileContent: string;
  wordCount: number;
  editorValue: { type: string; children: { text: string }[] }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setWordCount: React.Dispatch<React.SetStateAction<any>>;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  setFileContent: React.Dispatch<React.SetStateAction<any>>;
  setPromptResponse: React.Dispatch<React.SetStateAction<any>>;
  mode: number;
  setPromptInput: React.Dispatch<React.SetStateAction<string>>;
  setPromptLength: React.Dispatch<React.SetStateAction<number>>;
  setMode: React.Dispatch<React.SetStateAction<number>>;
}

export const PromptContext = createContext<PromptContextType>({
  promptInput: '',
  setPromptInput: () => {},
  promptLength: 0,
  setPromptLength: () => {},
  promptResponse: { id: null, ApiCalProps: {}, propmtResponse: {} },
  setPromptResponse: () => {},
  fileContent: '',
  setFileContent: () => {},
  mode: 0,
  setMode: () => {},
  selectedIndex: 0,
  setSelectedIndex: () => {},
  editorValue: [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ],
  setValue: () => {},
  wordCount: 0,
  setWordCount: () => {},
});
