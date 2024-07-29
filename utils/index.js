export function getFormattedDate() {
  const today = new Date();
  const formattedDate =
    today.getFullYear() +
    "-" +
    String(today.getDate()).padStart(2, "0") +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0");
  return formattedDate;
}
