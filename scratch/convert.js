const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  try {
    console.log('Reading HEIC file...');
    const inputBuffer = fs.readFileSync('../src/assets/jithin.HEIC');
    console.log('Converting to JPG...');
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 1
    });
    console.log('Writing JPG file...');
    fs.writeFileSync('../src/assets/jithin.jpg', outputBuffer);
    console.log('Conversion successful!');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
})();
