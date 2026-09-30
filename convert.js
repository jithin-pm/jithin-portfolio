const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  const inputBuffer = fs.readFileSync('src/assets/jithin.HEIC');
  console.log("Read HEIC file");
  const outputBuffer = await convert({
    buffer: inputBuffer, 
    format: 'JPEG',      
    quality: 0.9           
  });
  console.log("Converted to JPEG");
  fs.writeFileSync('src/assets/jithin.jpg', outputBuffer);
  console.log("Saved jithin.jpg");
})();
