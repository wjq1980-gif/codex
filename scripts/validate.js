const fs = require('fs');
const required = ['README.md', 'index.html', 'video-script.md'];
for (const file of required) {
  if (!fs.existsSync(file)) {
    throw new Error(`${file} is missing`);
  }
}
const html = fs.readFileSync('index.html', 'utf8');
for (const text of ['可口可乐健康吗？', '偶尔享用', '水更适合日常补水']) {
  if (!html.includes(text)) {
    throw new Error(`Missing required copy: ${text}`);
  }
}
if (!html.includes('prefers-reduced-motion')) {
  throw new Error('Reduced motion support is missing');
}
console.log('Video project files validated.');
