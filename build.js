const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const indexPath = path.join(__dirname, 'index.html');

const posts = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.html'))
  .map(file => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    const dateMatch = content.match(/<meta name="date" content="([^"]+)"/);
    const titleMatch = content.match(/<h1>([^<]+)<\/h1>/);
    const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const tagMatch = content.match(/class="post-tag"[^>]*>([^<]+)<\/span>/);
    return {
      url: `blog/${file}`,
      date: dateMatch ? dateMatch[1] : null,
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descMatch ? descMatch[1] : '',
      tag: tagMatch ? tagMatch[1].trim() : '',
    };
  })
  .filter(p => p.date)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const newest = posts.slice(0, 3);

const postsHtml = newest.map(p => `        <article class="post-card">
          <div class="post-tag">${p.tag}</div>
          <h3><a href="${p.url}">${p.title}</a></h3>
          <p>${p.description}</p>
          <a href="${p.url}" class="read-more">Weiterlesen →</a>
        </article>`).join('\n');

let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(
  /<!-- POSTS:START -->[\s\S]*?<!-- POSTS:END -->/,
  `<!-- POSTS:START -->\n${postsHtml}\n        <!-- POSTS:END -->`
);

fs.writeFileSync(indexPath, index);
console.log('✓ index.html aktualisiert mit den 3 neuesten Posts:');
newest.forEach(p => console.log(`  ${p.date}  ${p.url}`));
