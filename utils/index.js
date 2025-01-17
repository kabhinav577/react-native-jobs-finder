export const checkImageUrl = (url) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)'
    );
    return pattern.test(url);
  }
};
