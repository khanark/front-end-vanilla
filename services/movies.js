export const getData = async () => {
  const res = await fetch('../data/data.json');
  const data = await res.json();
  return Object.entries(data).map(([id, val]) =>
    Object.assign({}, { id }, val)
  );
};
