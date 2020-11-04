/* const parseEditorJsData = (data, amp = false) => {
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
        return !amp
          ? `<div class="my-8 text-center"><iframe class="mx-auto" src=${data.embed} width=${data.width} height=${data.height}></iframe><p class="mt-4 text-sm">${data.caption}</p></div>`
          : `<div class="my-8 text-center"><amp-iframe  src=${data.embed} width=${data.width} height=${data.height} sandbox="allow-scripts allow-same-origin"
        layout="responsive"
        frameborder="0"></amp-iframe><p class="mt-4 text-sm">${data.caption}</p></div>`;

      case 'raw':
        return !amp ? data.html : '';

      default:
        break;
    }
    return null;
  });
  return htm.join('');
};

export default parseEditorJsData;
 */
import React from 'react';
import Embed from '../components/Embed';

const parseEditorJsData = (content, amp = false) => {
  const { blocks } = content;

  const htm = (
    <div>
      {blocks.map((block, i) => {
        const { data } = block;
        let HeaderTag;
        let style;
        let ListTag;
        let list;
        if (data.level) {
          HeaderTag = `h${data.level}`;
        }

        if (data.style) {
          style = data.style === 'unordered' ? 'ul' : 'ol';
          ListTag = `${style}`;
          list = data.items.map((listItem) => <li> ${listItem} </li>).reduce((a, c) => a + c, '');
        }

        switch (block.type) {
          case 'header':
            return <HeaderTag key={i} dangerouslySetInnerHTML={{ __html: data.text }} />;
          case 'paragraph':
            return <p key={i} dangerouslySetInnerHTML={{ __html: data.text }} />;

          case 'list':
            return <ListTag key={i}>{list}</ListTag>;

          case 'embed':
            return <Embed link={data.source} key={i} amp={amp} caption={data.caption} />;

          case 'raw':
            return <div key={i} dangerouslySetInnerHTML={{ __html: data.html }} />;

          default:
            break;
        }
        return null;
      })}
    </div>
  );
  return htm;
};

export default parseEditorJsData;
