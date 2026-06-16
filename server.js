import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(srcDir, 'public');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  let filePath = path.join(srcDir, req.url === '/' ? 'index.html' : req.url);
  
  // Remove query strings
  filePath = filePath.split('?')[0];
  
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      // File found in src
      const extname = path.extname(filePath).toLowerCase();
      const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.avif': 'image/avif',
        '.webp': 'image/webp',
        '.mp4': 'video/mp4',
      };
      res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'application/octet-stream' });
      res.end(data);
    } else {
      // Try public folder
      let publicPath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
      publicPath = publicPath.split('?')[0];
      
      fs.readFile(publicPath, (err2, data2) => {
        if (!err2) {
          const extname = path.extname(publicPath).toLowerCase();
          const contentTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.avif': 'image/avif',
            '.webp': 'image/webp',
            '.mp4': 'video/mp4',
          };
          res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'application/octet-stream' });
          res.end(data2);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
