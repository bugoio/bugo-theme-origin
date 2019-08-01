# Bugo Origin Theme

Origin is meant to be used as a starter theme used by designers and developers alike. Origin is best used with Forestry.io for content management and Netlify.com for hosting.

> NOTE: Still in development. Use at your own risk. I do not consider this production ready.

## Website Features

* Responsive layouts
* Includes Foresty.io templates and install script
* Heros & Video Heros
* Landing page templates with content blocks
* Beautiful Typography based on modular scale
* CSS Grids for layouts and blocks
* Responsive Sliders
* SEO Ready
* Social Media Ready
* Google Maps
* Configurable Sidebar Widgets
* Forestry.io Cloudinary support
* Page/Post level galleries
    * Images
    * Videos
* Forestry enabled site options
* So much more…

## Dev Features

* Hugo 0.56.3
* Gulp
* SASS with tons of variables
* Hugo/Forestry theme enabled ```main.css```
* Transpiled Modern JS
* WooCommerce FlexSlider
* Sweet Alert 2
* Cloudindary image transformation support

## Easy New Installation

### Setup Forestry 

Follow the link below and follow the instructions. It will require a github or other git account.

[![Deploy to Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=bugoio/bugo-starter-origin&engine=hugo&version=0.56.3)

### Setup Netlify

Go to https://netlify.com and sign up for an account. 
* When asked link to the repository you created when you setup Forestry.io. 
* Use the build command below when asked.

```bash
hugo -d public -e staging
```
> NOTE: Staging sites deploy disallowing robots.txt. You can change ```staging``` to ```production``` if you're deploying a production site. This can also be useful if you want to build the site up before submitting to search engines.

## Developer Installation

Assuming you already have a Hugo project started, from your Hugo project root
```bash
# If your project is already using forestry.io back it up.
cp -r .forestry forestry

# Add to themes/bugo-theme-origin from within a Hugo project
cd themes
git submodule add https://github.com/bugoio/bugo-theme-origin.git

# Install dependencies
cd bugo-theme-origin
npm install

# Install Forestry.io templates. This will overwrite your .forestry folder. 
npm run theme-install
```

## Build Tools

### Local Development Environment

Origin uses Gulp to transpile the JS. SASS is processed by Hugo. 
So you have to run a Hugo server and Origin's build tool.

```bash
# From your project root
hugo server -d public --watch

# In a second terminal from your project root
cd themes/bugo-theme-origin && npm start
```
Now Hugo will watch for changes sitewide. Origin will watch for changes in ```/themes/bugo-theme-origin/assests/js/```.

Origin requires Hugo to build the site into the ```/public``` directory. Origin copies the compiled CSS into ```/themes/bugo-theme-origin/static/assets/css/``` when Hugo is done compiling the SASS.

### Production Build

```base
hugo server -d public -e production
```
Origin is environement sensitive and will use fingerprinted versions of the compiled Origin styles and javascript assets.
