const parseEditorJsData = (data) => {
  const { blocks } = data;
  let htm = blocks.map((block) => {
    const { data } = block;
    switch (block.type) {
      case 'header':
        return `<h${data.level}> ${data.text} </h${data.level}>`;

      case 'paragraph':
        return `<p> ${data.text} </p>`;

      case 'list':
        let style = data.style === 'unordered' ? 'ul' : 'ol';
        let list = data.items.map((i) => `<li> ${i} </li>`).reduce((a, c) => a + c, '');
        return `<${style}> ${list} </${style}>`;

      case 'embed':
        return `<div class="my-8 text-center"><iframe class="mx-auto" src=${data.embed} width=${data.width} height=${data.height}></iframe><p class="mt-4 text-sm">${data.caption}</p></div>`;
      case 'raw':
        return data.html;

      default:
        break;
    }
    return null;
  });
  return htm.join('');
};

export default parseEditorJsData;
