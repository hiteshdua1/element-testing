var fs = require('fs'),
    PNG = require('pngjs').PNG,
    pixelmatch = require('pixelmatch');

var img1 = fs.createReadStream('ele.png').pipe(new PNG()).on('parsed', doneReading),
    img2 = fs.createReadStream('ele2.png').pipe(new PNG()).on('parsed', doneReading),
    filesRead = 0;

function doneReading() {
    
    if (++filesRead < 2) {
        return;
    }

    var diff = new PNG({width: img1.width, height: img1.height});

    const diffPixels = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});
    if (diffPixels>0) {
        console.log(`Selector Image modified/changed, by ${diffPixels} Pixels Please validate !`);
    } else {
        console.log('Perfection Match !');
    }
    diff.pack().pipe(fs.createWriteStream('diff.png'));
}
