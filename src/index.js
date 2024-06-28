export default function lastNubmers(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
