const formatDate = (date: string, locale = 'en-US') => {
  const now = new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return now;
};

export default formatDate;
