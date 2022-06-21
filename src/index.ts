import padStart from 'lodash.padStart';

/* eslint-disable no-useless-escape */
const slugify = (str: string, sortOrder?: number) => {
  const slugFromString = str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
  let output = slugFromString;
  if (sortOrder) {
    output = `${padStart(sortOrder, 3, '0')}-${output}`;
  }
  return output;
};

export default slugify;
