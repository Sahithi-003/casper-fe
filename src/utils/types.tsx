export interface ApiCallProps {
  input?: string;
  noOfChoices?: number;
  promptLength?: number;
}
export interface ResponseProps {
  id: number | null;
  ApiCalProps: ApiCallProps;
  propmtResponse: any;
}
export interface TemplateData {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}
export interface SavedDocumentsTable {
  id: string;
  fileName?: string;
  fileContent?: string;
  modifiedAt?: string;
}
