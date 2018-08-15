const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/angularElements/polyfills.js',
        './dist/angularElements/main.js',
        './dist/angularElements/runtime.js',
        './dist/angularElements/scripts.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/navigation.js')
    console.info('Elements created successfully!')
})()