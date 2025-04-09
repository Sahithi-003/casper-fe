import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorBoundary from './wrappers/ErrorBoundary';
import ThemeWrapper from './wrappers/ThemeWrapper';
import { RenderCtrlProvider } from 'react-render-ctrl';
import { PromptContext } from './core-utils/promptContext';
import { BrowserRouter, Route } from 'react-router-dom';
import SideMenu from './_components/organisms/Sidebar';
import EditorPage from './_components/pages/EditorPage';

const App: React.FC = () => {
  const [promptInput, setPromptInput] = React.useState<string>('');
  const [promptLength, setPromptLength] = React.useState<number>(0);
  const [promptResponse, setPromptResponse] = React.useState({
    id: null,
    ApiCalProps: {},
    propmtResponse: {},
  });
  const [fileContent, setFileContent] = React.useState('');
  const [mode, setMode] = React.useState<number>(0);
  const [editorValue, setValue] = React.useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);
  const [wordCount, setWordCount] = React.useState<number>(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <PromptContext.Provider
          value={{
            promptInput,
            setPromptInput,
            promptLength,
            setPromptLength,
            promptResponse,
            setPromptResponse,
            fileContent,
            setFileContent,
            mode,
            setMode,
            editorValue,
            setValue,
            wordCount,
            setWordCount,
            selectedIndex,
            setSelectedIndex,
          }}
        >
          <CssBaseline>
            <ThemeWrapper>
              <RenderCtrlProvider
                ErrorComponent={() => <div>default error hint</div>}
                EmptyComponent={() => <div>default empty hint</div>}
                LoadingComponent={() => <div>default loading hint</div>}
              >
                <ErrorBoundary>
                  <>
                    <Route exact path="/" component={SideMenu} />
                    <Route exact path="/viewpage" component={EditorPage} />
                    <Route path="/viewpage/:id" component={EditorPage} />
                  </>
                </ErrorBoundary>
              </RenderCtrlProvider>
            </ThemeWrapper>
          </CssBaseline>
        </PromptContext.Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
