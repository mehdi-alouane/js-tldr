import { normalizeDocsIndex } from './normalizeDocsIndex';

const fetchDocsIndex = () =>
  fetch('/docs/index.json', {
    credentials: 'same-origin'
  }).then(r => r.json());

export const loadDocsData = async () => {
  try {
    const index = await fetchDocsIndex();
    return normalizeDocsIndex(index);
  } catch (error) {
    console.error(error);
  }
};
