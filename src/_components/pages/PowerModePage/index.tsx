import React, { useState } from 'react';
import { NavigationBarGrid } from '../../organisms/LeftnavbarGrid';
import { ContentDescription } from '../../organisms/ContentDesc';
import TextEditor from '../../organisms/TextEditor';
import TopNavBar from '../../organisms/TopNavBar';
import { PowerModeTemplate } from '../../templates/PowerModeTemplate';

export const PowerPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fileName, setFileName] = useState('Untitled File');

  const handleFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFileName(event.target.value);

  return (
    <PowerModeTemplate
      header={
        <div>
          <TopNavBar
            fileNameProp={fileName}
            activeIndex={activeIndex}
            onSelection={setActiveIndex}
            onFileNameChange={handleFileNameChange}
            noOfWords={0}
          />
        </div>
      }
      left={<NavigationBarGrid />}
      middle={<ContentDescription />}
      right={<TextEditor />}
    />
  );
};
