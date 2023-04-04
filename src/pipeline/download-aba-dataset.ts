import https from "https";
import fs from "fs";
import path from "path";

const fileUrl =
  "https://www.brewersassociation.org/wp-content/themes/ba2019/json-store/breweries/breweries.json";
const directory = path.join(__dirname, "../../tmp");
const filePath = directory + "/aba-breweries.json";

// Create the tmp directory if it doesn't exist
fs.mkdirSync(directory, { recursive: true });

// Download the file using https and save it to the tmp directory
const file = fs.createWriteStream(filePath);
https.get(fileUrl, (response) => {
  response.pipe(file);
});
