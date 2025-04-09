/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, Slate, ReactEditor } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
  Element as BaseElement,
  BaseEditor,
  BaseText,
} from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import LoadingOverlay from 'react-loading-overlay';
import Toolbar from '../../molecules/Toolbar';
import { getData, getSavedDocs } from '../../../apis/library';
import { PromptContext } from '../../../core-utils/promptContext';
import { Grid } from '@mui/material';
import { SavedDocumentsTable } from '../../../utils/types';

interface CustomElement extends BaseElement {
  type?: string;
  align?: string;
  [key: string]: any;
}

export interface CustomDescendant extends BaseElement {
  type: string;
  children: { text: string }[];
}

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const TextEditor = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  // eslint-disable-next-line no-var
  let { selection } = editor;
  const [isLoading, setIsLoading] = useState(false);
  const [blockActive, setBlockActive] = useState<boolean>(false);
  const [markActive, setMarkActive] = useState<boolean>(false);
  const [, setSaved] = useState<SavedDocumentsTable[]>([]);
  const {
    promptInput,
    promptLength,
    setPromptResponse,
    setFileContent,
    editorValue,
    setValue,
    setWordCount,
  } = useContext(PromptContext);
  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    let editorValue = '';
    newValue.map((element: any) => {
      editorValue += element.children[0].text;
    });
    setFileContent(editorValue);
  }, []);

  useEffect(() => {
    getSavedDocs().then((res) => {
      setSaved(res);
    });
  }, []);
  const handleMouseDownBlockButton = (format: string) => (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    toggleMark(editor, format);
    setBlockActive(
      isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
      ),
    );
  };
  useEffect(() => {
    if (promptInput) {
      setIsLoading(true);
      getData({ input: promptInput, promptLength: promptLength }).then(
        (response) => {
          const result = response.data.promptResponse.choices[0].text;
          setPromptResponse(response.data);
          if (!selection) {
            selection = {
              anchor: {
                path: [0, 0],
                offset: 0,
              },
              focus: {
                path: [0, 0],
                offset: 0,
              },
            };
          }
          Transforms.insertText(editor, result, { at: selection! });
          setIsLoading(false);
        },
      );
    }
  }, [promptInput]);

  const handleMouseDownMarkButton = (format: string) => (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    toggleBlock(editor, format);
    setMarkActive(isMarkActive(editor, format));
  };
  let count = 0;
  // eslint-disable-next-line no-return-assign
  console.log(editorValue);
  editorValue.forEach((editor: any) =>
    editor.children.map(
      (children: any) => (count += children.text.trim().split(/\s+/).length),
    ),
  );
  setWordCount(count);

  return (
    <LoadingOverlay
      active={isLoading}
      spinner={true}
      styles={{
        wrapper: (base) => ({
          ...base,
          height: '100%',
        }),
      }}
      text="Loading your content..."
    >
      <Slate editor={editor} value={editorValue} onChange={handleChange}>
        <Toolbar
          onMouseDownBlock={(format: string) =>
            handleMouseDownBlockButton(format)
          }
          onMouseDownMarkButton={(format: string) =>
            handleMouseDownMarkButton(format)
          }
          handleClickBold={() => toggleMark(editor, 'bold')}
          handleClickItalic={() => toggleMark(editor, 'italic')}
          handleClickUnderline={() => toggleMark(editor, 'underline')}
          handleClickH1={() => toggleBlock(editor, 'heading-one')}
          handleClickH2={() => toggleBlock(editor, 'heading-two')}
          handleClickH3={() => toggleBlock(editor, 'heading-three')}
          handleClickH4={() => toggleBlock(editor, 'heading-four')}
          handleClickNumbered={() => toggleBlock(editor, 'numbered-list')}
          handleClickUnNumbered={() => toggleBlock(editor, 'bulleted-list')}
          activeBlockButton={blockActive}
          activeMarkButton={markActive}
        ></Toolbar>
        <Grid height={'90%'} data-testid="editor">
          <Editable
            style={{
              height: '100%',
              marginLeft: '10px',
              overflowY: 'scroll',
            }}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Here's how to write a command: talk to editor as you would to an assistant writing for you, then place your cursor at the end of the sentence and press '⌘/Ctrl + Enter'"
            spellCheck
            autoFocus
            contentEditable="true"
            onKeyDown={async (event) => {
              if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                setIsLoading(true);
                const textInput = event.target as HTMLElement;
                const input = textInput.innerText;

                getData({ input: input, promptLength: 1 })
                  .then((response) => {
                    const result = response.data.promptResponse.choices[0].text;
                    setPromptResponse(response.data);
                    Transforms.insertText(editor, result, { at: selection! });
                  })
                  .catch((error) => console.error(error))
                  .finally(() => {
                    setIsLoading(false);
                  });
              } else {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event)) {
                    event.preventDefault();
                    const mark: string =
                      HOTKEYS[hotkey as keyof typeof HOTKEYS];
                    toggleMark(editor, mark);
                  }
                }
              }
            }}
          />
        </Grid>
      </Slate>
    </LoadingOverlay>
  );
};

const toggleBlock = (
  editor: BaseEditor & ReactEditor & HistoryEditor,
  format: string,
) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
  );
  const isList = LIST_TYPES.includes(format);
  type ElementProperties = {
    align?: string;
    type?: string;
  };
  Transforms.unwrapNodes<CustomElement>(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes((n as CustomElement).type as string) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: ElementProperties;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: getType(),
    };
  }
  Transforms.setNodes<CustomElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }

  function getType(): string | undefined {
    if(isActive) {
      return 'paragraph';
    } 
    return isList ? 'list-item' : format;
  }
};

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
type BlockType = 'type' | 'align';

const isBlockActive = (
  editor: BaseEditor,
  format: string,
  blockType: BlockType = 'type',
): boolean => {
  const { selection } = editor;
  if (!selection) {
    return false;
  }

  const [match] = Array.from(
    Editor.nodes<CustomElement>(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n as CustomElement)[blockType] === format,
    }),
  );

  return !!match;
};

type marksType = (Omit<BaseText, 'text'> & Record<string, unknown>) | null;
const isMarkActive = (editor: Editor, format: string): boolean => {
  const marks: marksType = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

type ElementProps = {
  attributes: Record<string, unknown>;
  children: React.ReactNode;
  element: {
    type: string;
    align?: 'left' | 'center' | 'right';
  };
};

const Element = ({
  attributes,
  children,
  element,
}: ElementProps): JSX.Element => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes} data-testid="element">
          {children}
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes} data-testid="element">
          {children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes} data-testid="element">
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes} data-testid="element">
          {children}
        </h2>
      );
    case 'heading-three':
      return (
        <h3 style={style} {...attributes} data-testid="element">
          {children}
        </h3>
      );
    case 'heading-four':
      return (
        <h4 style={style} {...attributes} data-testid="element">
          {children}
        </h4>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes} data-testid="element">
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes} data-testid="element">
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes} data-testid="element">
          {children}
        </p>
      );
  }
};

type LeafProps = {
  attributes: Record<string, unknown>;
  children: React.ReactNode;
  leaf: {
    bold?: boolean;
    code?: boolean;
    italic?: boolean;
    underline?: boolean;
  };
};

const Leaf = ({ attributes, children, leaf }: LeafProps): JSX.Element => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
export default TextEditor;
