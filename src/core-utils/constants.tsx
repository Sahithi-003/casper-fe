import React from 'react';
import AIOutputTab from '../_components/organisms/AIOutputTab';
import DocumentsTab from '../_components/organisms/DocumentsTab';
import { TemplateData } from '../utils/types';
import message from '../../public/icons/message.svg';
import aida from '../../public/icons/aida.svg';
import facebook from '../../public/icons/facebook.svg';
import google from '../../public/icons/google.svg';
import youtube from '../../public/icons/youtube.svg';
import gmail from '../../public/icons/gmail.svg';
import TemplatesGrid from '../_components/organisms/TemplatesGrid';

export const TITLE_PLACEHOLDER_TEXT = 'Write a title for your document...';
export const MAX_CHAR_TEXT = 80;
export const TITLE = 'Title';
export const CONTENT_DESC_PLACEHOLDER_TEXT = 'Write an article about...';
export const MAX_CHAR_CONTENT_DESC = 600;
export const CONTENT_DESC = 'Content description/brief';
export const TONE_OF_VOICE = 'Tone of voice';
export const TONE_OF_VOICE_PLACEHOLDER_TEXT =
  'Witty, serious, Roe Rogan, etc...';
export const MAX_CHAR_TONE_OF_VOICE = 80;
export const KEYWORDS = 'Keywords';
export const menuItems = ['English', 'Spanish', 'French'];
export const MAX_CHAR_KEYWORDS = 80;
export const SELECT_CHANGE_EVENT_TEXT = 'Select Language';
export const OUTPUT_LENGTH = 'Output Length:';
export const COMPOSE = 'Compose';
export const REGENERATE_RESPONSE = 'Regenerate Response';

export const DOCUMENT = 'No documents found';
export const NEW_DOCUMENT =
  'To create a new document, start by opening a blank document from the above templates.';
export const AI =
  'Get help writing blog posts from start to finish with our AI assist.';
export const CREATE_DOCUMENT = 'Create Document';
export const DOCUMENTS = 'Documents';
export const TEMPLATES = 'Templates';
export const SAVED = 'Saved Documents';
export const AI_OUTPUTS = 'AI Outputs';
export const CARD_DETAILS_ARRAY = [
  {
    id: 0,
    header: 'Harnessing the Power of the...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
  {
    id: 1,
    header: 'Maximizing Your Solar...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
  {
    id: 2,
    header: 'Harnessing the Power of the...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
  {
    id: 3,
    header: 'Harnessing the Power of the...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
  {
    id: 4,
    header: 'Harnessing the Power of the...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
  {
    id: 5,
    header: 'Harnessing the Power of the...',
    counterTime: '3m ago',
    content:
      'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
  },
];
export const templateTagsArray = [
  'All',
  'Frameworks',
  'Email',
  'Websites',
  'Blog',
  'Ads',
  'ECommerce',
  'Social Media',
  'Google',
  'Video',
  'New',
  'SEO',
];

export const templatesData: TemplateData[] = [
  {
    title: 'Paragraph Generator',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: message,
    tags: ['All', 'New', 'Blog', 'Websites'],
  },
  {
    title: 'AIDA Framework',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: aida,
    tags: ['All', 'Frameworks', 'SEO', 'New'],
  },
  {
    title: 'Text Summarizer',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: message,
    tags: ['All', 'Email', 'Websites', 'Blog', 'Social Media'],
  },
  {
    title: 'Email Subject Lines',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: gmail,
    tags: ['All', 'Email', 'Blog', 'Ads', 'Google'],
  },
  {
    title: 'Facebook Ad Primary Text',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: facebook,
    tags: ['All', 'Blog', 'Ads', 'Social Media'],
  },
  {
    title: 'Google Ad Headline',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: google,
    tags: ['All', 'Blog', 'Ads', 'Google'],
  },
  {
    title: 'Marketing Angles',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: facebook,
    tags: ['All', 'Blog', 'Ads', 'ECommerce', 'Social Media'],
  },
  {
    title: 'Video Description - Youtube',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: youtube,
    tags: ['All', 'Blog', 'Video', 'SEO'],
  },
  {
    title: 'Real Estate Listing - Residential',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: facebook,
    tags: ['All', 'Ads', 'ECommerce', 'Social Media'],
  },
  {
    title: 'PSA Framework',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: message,
    tags: ['All', 'Frameworks', 'ECommerce', 'New', 'SEO'],
  },
  {
    title: 'Content Improver',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: message,
    tags: ['All', 'Email', 'Websites', 'Blog', 'Social Media'],
  },
  {
    title: 'Facebook Ad Primary Text',
    description:
      'Create high converting copy for the “Primary Text” section of your facebook ads.',
    image: facebook,
    tags: ['All', 'Blog', 'Ads', 'Social Media'],
  },
];

export const ApiContent = [
  'Nonspec makes a fully adjustable prosthetic limb for amputees worldwide. The Nonspec team has spent months on the ground working directly with customers, designing components to work alongside clinicians during fitting. The ease of access and fit decreases the process from a dozen visits, to a single trip! This allows clinics more time to dedicate to each amputee and allows them to see more customers each day, reducing the 2-year average wait time for an amputee to just six months as they heal from their surgery.\nThrough careful design and material selection, the Nonspec limb is able to deliver energy responsiveness on par with expensive composites at a fraction of the cost, giving users the chance to walk comfortably again, without placing any undue burden on them or their families. The limb is also the only one at its price point that meets world durability standards, so it can be marketed globally.\n The product is low maintenance, lightweight, “springy”, and allows day-to-day comfort adjustments at home. The minimal hardware used in fitting is available in any hardware shop around the world. Local teams are hired to help support the deployment, follow-ups, and adoption of the technology.',
  'hi , is anyone there',
  'this is to test the functionality',
  'Initially, this solution was developed to solve the main problem that pediatric amputees face, outgrowing their prosthetic faster than they can get one properly fit. However, research showed that amputees of all ages are lacking access to affordable prosthetics, even if they have insurance. Additionally, clinics don’t have the time and resources to meet the demand, causing a 2-year wait period for amputees to receive a limb. Our product empowers clinics to fit amputees in just one visit, without the constant attention of the few trained clinicians. This, in turn, allows clinics to see more patients each year and bolsters their reputation by providing a comfortable product that increases comfort. Our product has a one-year manufacturing guarantee, which gives the clinic and user piece of mind./nAdjustable Prosthetic Pylon users have been able to return to their favorite sports, improve their job prospects, and enjoy more active lifestyles with their families. They spend less time in the clinic and more time living their lives! Technical testing has confirmed that the device meets ISO 10328 (a 113 kg load for 3 million cycles of simulated heal-toe walking). That’s about 4 years of walking, and it has shown to have superior proximal/distal adjustment compared to standard components that cost ten times more.',
];

export const languageOptionConsts = {
  LANGUAGE_OPTIONS_TEXT: 'Language Options',
  INPUT_LANGUAGE: 'Input Language',
  OUTPUT_LANGUAGE: 'Output Language',
  PLACEHOLDER: 'Language',
  LANGUAGE_OPTIONS: ['English', 'Spanish', 'French'],
};

export const contentDescConst = [
  {
    image: message,
    HEADER_TITLE: 'Paragraph Generator',
    HEADER_SUBTITLE: 'Generate paragraph that will captivate your reader!',
    WRITE_FIRST_TEXT: '',
    WRITE_FIRST_PLACEHOLDER: '',
    WRITE_FIRST_WORDCOUNT: 0,
    WRITE_CONTENT_PLACEHOlDER: 'Write Content....',
    WRITE_CONTENT_TEXT: 'What is your Paragraph about?',
    WRITE_CONTENT_WORDCOUNT: 600,
    WRITE_KEYWORDS_PLACEHOLDER: 'What is your Paragraph about?',
    WRITE_KEYWORDS_TEXT: 'Keywords to include!',
    WRITE_KEYWORDS_BOTTOM_TEXT: 'e.g Etherum, Bitcoin',
    WRITE_KEYWORD_WORDCOUNT: 80,
    TONE_OF_VOICE_PLACEHOLDER_TEXT: 'Enter tone of voice...',
    TONE_OF_VOICE_TEXT: 'Tone of voice',
    WRITE_TONE_WORDCOUNT: 80,
    OUTPUTS_TEXT: 'Outputs:',
    BUTTON_TEXT: 'Generate AI Content',
  },
  {
    image: aida,
    HEADER_TITLE: 'AIDA Framework',
    HEADER_SUBTITLE:
      'Use the oldest marketing framework in the world. Attention, Interest, Desire, Action',
    WRITE_FIRST_TEXT: '',
    WRITE_FIRST_PLACEHOLDER: '',
    WRITE_FIRST_WORDCOUNT: 0,
    WRITE_CONTENT_PLACEHOlDER: 'Enter your product Name...',
    WRITE_CONTENT_TEXT: 'Company/Product name',
    WRITE_CONTENT_WORDCOUNT: 80,
    WRITE_KEYWORDS_PLACEHOLDER: 'Enter your product description...',
    WRITE_KEYWORDS_TEXT: 'Product description',
    WRITE_KEYWORDS_BOTTOM_TEXT: '',
    WRITE_KEYWORD_WORDCOUNT: 600,
    TONE_OF_VOICE_PLACEHOLDER_TEXT: 'Enter tone of voice...',
    TONE_OF_VOICE_TEXT: 'Tone of voice',
    WRITE_TONE_WORDCOUNT: 80,
    OUTPUTS_TEXT: 'Outputs:',
    BUTTON_TEXT: 'Generate AI Content',
  },
  {
    image: message,
    HEADER_TITLE: 'Text Summarizer',
    HEADER_SUBTITLE: 'Get the key points from a piece of text',
    WRITE_FIRST_TEXT: '',
    WRITE_FIRST_PLACEHOLDER: '',
    WRITE_FIRST_WORDCOUNT: 0,
    WRITE_CONTENT_PLACEHOlDER: 'Enter your text...',
    WRITE_CONTENT_TEXT: 'Text',
    WRITE_CONTENT_WORDCOUNT: 600,
    WRITE_KEYWORDS_PLACEHOLDER: '',
    WRITE_KEYWORDS_TEXT: '',
    WRITE_KEYWORDS_BOTTOM_TEXT: '',
    WRITE_KEYWORD_WORDCOUNT: 80,
    TONE_OF_VOICE_PLACEHOLDER_TEXT: 'Enter tone of voice...',
    TONE_OF_VOICE_TEXT: 'Tone of voice',
    WRITE_TONE_WORDCOUNT: 80,
    OUTPUTS_TEXT: 'Outputs:',
    BUTTON_TEXT: 'Generate AI Content',
  },
  {
    image: gmail,
    HEADER_TITLE: 'Personalized Cold Emails',
    HEADER_SUBTITLE: 'Write cold email that actually work and get responses',
    WRITE_FIRST_TEXT: 'Tell us about your product',
    WRITE_FIRST_PLACEHOLDER: 'Write about your product...',
    WRITE_FIRST_WORDCOUNT: 600,
    WRITE_CONTENT_PLACEHOlDER: 'Enter your product name...',
    WRITE_CONTENT_TEXT: 'Your Company/Product Name',
    WRITE_CONTENT_WORDCOUNT: 80,
    WRITE_KEYWORDS_PLACEHOLDER: 'Enter your context of email...',
    WRITE_KEYWORDS_TEXT: 'Context to include in the email',
    WRITE_KEYWORDS_BOTTOM_TEXT: '',
    WRITE_KEYWORD_WORDCOUNT: 80,
    TONE_OF_VOICE_PLACEHOLDER_TEXT: 'Enter tone of voice...',
    TONE_OF_VOICE_TEXT: 'Tone of voice',
    WRITE_TONE_WORDCOUNT: 80,
    OUTPUTS_TEXT: 'Outputs:',
    BUTTON_TEXT: 'Generate AI Content',
  },
];

export const arr = [
  {
    id: 0,
    value: '',
  },
  {
    id: 1,
    value: (
      <TemplatesGrid
        onSelectionTemplate={(selectedTemplate) => {}}
        templatesData={templatesData}
      />
    ),
  },
  {
    id: 2,
    value: <DocumentsTab />,
  },
  {
    id: 3,
    value: '',
  },
  {
    id: 4,
    value: <AIOutputTab />,
  },
  {
    id: 5,
    value: '',
  },
  {
    id: 6,
    value: '',
  },
  {
    id: 7,
    value: '',
  },
  {
    id: 8,
    value: '',
  },
  {
    id: 9,
    value: '',
  },
];
