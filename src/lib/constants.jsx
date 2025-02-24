// src/lib/constants.js
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const POST_TYPES = {
  QNA: 1,
  CODE_SHARE: 2,
  DAILY: 3,
};

export const CLASS_TYPES = {
  ALL: 0,
  CLOUD_SERVICE: 1,
  AI_ENGINEERING: 2,
  CLOUD_ENGINEERING: 3,
};

export const TAGS = {
  THEORY: '이론',
  PRACTICE: '실습',
  PROJECT: '프로젝트',
  OTHER: '기타',
};
