const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {
// where are the public facing files going to be located 

// eleventy passes from source file to public file 

//passing image and styling 
eleventyConfig.addPassthroughCopy('./src/style.css');
eleventyConfig.addPassthroughCopy('./src/assets');

// Fixing date formatting
eleventyConfig.addFilter("postDate", 
(dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
})

    return{
        dir: {
            input: "src",
            // output to public 
            output: "public"
        }
    };
}