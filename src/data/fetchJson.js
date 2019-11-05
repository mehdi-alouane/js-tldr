export const fetchJson = path =>
  fetch(path, { credentials: 'same-origin' }).then(res => res.json());
