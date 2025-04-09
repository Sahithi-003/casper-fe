import axios, { AxiosResponse } from 'axios';
import { ApiCallProps, SavedDocumentsTable } from '../utils/types';

export const getData = async (inputData: ApiCallProps) => {
  const { input, noOfChoices, promptLength } = inputData;
  return axios.post(`${process.env.REACT_APP_API_URL}api/v1/post`, {
    prompt: input,
    max_tokens: getOutputLength(promptLength || 0),
    n: noOfChoices || 1,
    temperature: 0.7,
  });
};

function getOutputLength(promptLength: number): number {
  if (promptLength === 2) {
    return 550;
  } else if (promptLength === 1) {
    return 350;
  } else {
    return 200; // default value
  }
}

export const saveDocument = async (
  id: number | null,
  fileName: string,
  fileContent: string,
  promptInput: number | null,
): Promise<AxiosResponse<any, any>> => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}api/v1/save-document`,
    {
      id: id,
      file_name: fileName,
      file_content: fileContent,
      modifiedAt: new Date().getTime(),
      promptRequest: promptInput
        ? {
            id: promptInput,
          }
        : null,
    },
  );
  return response;
};

export const getAllAiOutputs = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}api/v1/get-AiRequests`,
  );
};
export const getSavedDocs = async () => {
  let save: SavedDocumentsTable[] | null = []
  await axios
    .get(`${process.env.REACT_APP_API_URL}api/v1/get-saved-documents`)
    .then((res) => {
      save = res.data
    })
    .catch(() => {})
  return save
}
