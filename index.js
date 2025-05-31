const fs = require('fs');
const path = require('path');
// Get inputs from command line arguments
const replaceThis = process.argv[2];    // first argument after node script
const replaceWith = process.argv[3];    // second argument after node script

if (!replaceThis || !replaceWith) {
    console.error('Please provide both replaceThis and replaceWith arguments.');
    process.exit(1);
}

const preview = false;           // if you  want to preview or check the file that how many files are redy to change so set it to true.
const folder = path.join(__dirname, "./")     //Required proper path

try {
    fs.readdir(folder, (err, data) => {
        if (err) {
            console.error(`The folder does not exist: ${folder}` + err);
        } else {
            for (let index = 0; index < data.length; index++) {
                const item = data[index];
                const oldFileName = path.join(folder, item)
                const newFileName = path.join(folder, item.replaceAll(replaceThis, replaceWith));
                if (!preview) {
                    if  (oldFileName !== newFileName) {
                        fs.rename(oldFileName, newFileName, (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("Renamed: " +folder+"/" + item + " to " + newFileName);
                                console.log(oldFileName)
                                console.log(newFileName)
                            }
                        });
                    }
                } else {
                    if ("data/" + item !== newFileName) console.log(`data/${item} will be renamed to ${newFileName}`);  // Previewing the renaming process without actually renaming the files.

                }
            }
        }
    });
} catch (error) {
    console.error(error);
}
