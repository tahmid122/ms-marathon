const dateFormatter = (date) => {
  const newDate = new Date(date).toLocaleString();
  return newDate.split(",")[0];
};

export default dateFormatter;
