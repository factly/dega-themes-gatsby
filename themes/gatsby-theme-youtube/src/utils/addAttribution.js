export default function addAttribution(e) {
  e.preventDefault();
  const pagelink = `\nView Here: ${document.location.href}`;
  const copytext = window.getSelection() + pagelink;
  const clipdata = e.clipboardData || window.clipboardData;
  if (clipdata) {
    clipdata.setData('Text', copytext);
  }
}
