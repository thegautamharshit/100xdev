## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require('fs');

// Read the file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned data back to the file
    fs.writeFile('sample.txt', cleanedData, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }

        console.log('File has been cleaned and saved successfully.');
    });
});

