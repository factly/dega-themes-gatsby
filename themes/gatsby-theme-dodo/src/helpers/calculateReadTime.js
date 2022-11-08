export default function readingTime(id) {
  const text = document.getElementById('article').innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById('time').innerText = time;
}
