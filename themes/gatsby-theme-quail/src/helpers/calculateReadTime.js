export default function readingTime(readId, writeId) {
  const text = document.getElementById(readId).innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById(writeId).innerText = time;
}
