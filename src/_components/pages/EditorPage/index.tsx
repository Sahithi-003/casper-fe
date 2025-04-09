/* eslint-disable max-nested-callbacks */
import { Grid } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSavedDocs, saveDocument } from '../../../apis/library';
import { PromptContext } from '../../../core-utils/promptContext';
import { ContentDescription } from '../../organisms/ContentDesc';
import LeftFormPannel from '../../organisms/LeftFormPannel';
import { NavigationBarGrid } from '../../organisms/LeftnavbarGrid';
import TextEditor from '../../organisms/TextEditor';
import TopNavBar from '../../organisms/TopNavBar';
import { PowerModeTemplate } from '../../templates/PowerModeTemplate';
import ViewPageTemplate from '../../templates/ViewPageTemplate';
import { SavedDocumentsTable } from '../../../utils/types';

const EditorPage = () => {
  const { mode } = useContext(PromptContext);
  const [activeIndex, setActiveIndex] = useState(mode);
  const [fileName, setFileName] = useState('Untitled File');
  const { wordCount } = useContext(PromptContext);
  const [documentId, setDocumentId] = useState(null);
  const {
    fileContent,
    promptResponse,
    setFileContent,
    setValue,
  } = useContext(PromptContext);
  const [saved, setSaved] = useState<SavedDocumentsTable[]>([]);
  const id: any = useParams();

  useEffect(() => {
    if (fileContent !== '') {
      save(documentId, fileName, fileContent, promptResponse);
    }
  }, [fileContent]);

  useEffect(() => {
    if (fileName !== '') {
      save(documentId, fileName, fileContent, promptResponse);
    }
  }, [fileName]);
  useEffect(() => {
    getSavedDocs().then((res) => {
      setSaved(res);
    });
  }, []);

  useEffect(() => {
    const index = id?.id;
    if (index) {
      const doc = saved.find((doc) => {
        return doc.id.toString() === index.toString();
      });
      if (doc) {
        setFileName(doc.fileName!);
        setFileContent(doc.fileContent);
        const updatedEditorValue = [
          {
            type: 'paragraph',
            children: [
              {
                text: doc.fileContent,
              },
            ],
          },
        ];
        setValue(updatedEditorValue);
      }
    }
  }, [saved]);

  const save = useCallback(
    debounce((documentId, fileName, fileContent, promptResponse) => {
      return saveDocument(
        documentId,
        fileName,
        fileContent,
        promptResponse.id,
      ).then((response: any) => {
        setDocumentId(response.data.id);
      });
    }, 5000),
    [],
  );

  const handleFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFileName(event.target.value);
  return (
    <Grid container direction="row">
      <Grid item sx={{ width: '100%' }}>
        <TopNavBar
          fileNameProp={fileName}
          activeIndex={activeIndex}
          onSelection={setActiveIndex}
          onFileNameChange={handleFileNameChange}
          noOfWords={wordCount}
        />
      </Grid>
      <Grid item>
        {activeIndex === 0 && (
          <ViewPageTemplate left={<LeftFormPannel />} right={<TextEditor />} />
        )}
        {activeIndex === 1 && (
          <PowerModeTemplate
            left={<NavigationBarGrid />}
            middle={<ContentDescription />}
            right={<TextEditor />}
          />
        )}
      </Grid>
    </Grid>
  );
};

// eslint-disable-next-line no-unused-vars
function debounce<T extends (...args: any[]) => Promise<any>>(
  func: T,
  wait: number,
) {
  let timeout: NodeJS.Timeout | null | number = null;
  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): Promise<any> {
    const context = this;
    return new Promise((resolve, reject) => {
      const later = function () {
        timeout = null;
        func.apply(context, args).then(resolve).catch(reject);
      };
      clearTimeout(timeout as NodeJS.Timeout);
      timeout = setTimeout(later, wait);
    });
  };
}
export default EditorPage;
