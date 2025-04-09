/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from 'react';
import LeftFormPannel from '../../organisms/LeftFormPannel';
import TextEditor from '../../organisms/TextEditor';
import TopNavBar from '../../organisms/TopNavBar';
import ViewPageTemplate from '../../templates/ViewPageTemplate';
import { saveDocument } from '../../../apis/library';
import { PromptContext } from '../../../core-utils/promptContext';

const ViewPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fileName, setFileName] = useState('Untitled File');
  const [documentId, setDocumentId] = useState(null);
  const { fileContent, promptResponse } = useContext(
    PromptContext,
  );
  const handleFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFileName(event.target.value);


  useEffect(() => {
    saveDocument(documentId, fileName, fileContent, promptResponse.id).then(
      (response: any) => {
        setDocumentId(response.data.id);
      },
    );
  }, [fileContent]);


  return (
    <ViewPageTemplate
      header={
        <div>
          <TopNavBar
            activeIndex={activeIndex}
            onSelection={setActiveIndex}
            onFileNameChange={handleFileNameChange}
            noOfWords={0}
          />
        </div>
      }
      left={<LeftFormPannel />}
      right={<TextEditor />}
    />
  );
};

export default ViewPage;
