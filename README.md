# Turn static HTML/CSS into a blog with CMS using the JAMStack
We'll be taking a static HTML/CSS project, hooking it up with Eleventy (static site generator), and then using GitHub to get it up onto Netlify, and finally integrated Netlify CMS!

- convert static html files to template files 
- host it on github 
- connect github to netlify
 - admin panel linked to github which pushes changes to github which then updtes the netlify 

## Requirments 
- node package manager 


### Initialising the project and installing Eleventy
```bash
npm init -y
npm install @11ty/eleventy --save-dev
#scoped dev dependency - create node modules
```
> replace the scripts section in `package.json`
```bash
  "scripts": {4
    #help eleventy server running for us 
    "start": "eleventy --serve",
    #build file 
    "build": "eleventy"
  },
```
### Configuration file for Eleventy 
> Create a file `.eleventy.js `

### Launching through Terminal 
> Launch it locally using `npm start`
```bash
 -----------------------------------
 Local: http://localhost:8082
 External: http://192.168.182.1:8082
 -----------------------------------
```
> to stop the terminal use `contrl + c`

### Turn into a template from static HTML file 
eleventy will look up for _includes folder by default
![](../1.JPG) 
- first install nunjunks 
```bash
npm install nunjucks
```
- Download 2 extensions `nunjucks` and `nunjucks template formatter`
- `_includes/base.njk` by using templating language `nunjucks`
- reformat `index.html` and convert it to `index.njk`. delete everything above head, </head> and <body>, </body>
- We want to update it certain content like the `header` in such that update once and it populates across all pages. so we create a file in `_includes` called `_includes/header.njk`. similarly we make file for footer `_includes/footer.njk`
- also we add these templates to `_includes/base.njk`
- Eleventy automatically takes markdown files present in `blog/xyz.md` and converts it to HTML in `public/xyz/index.html`

