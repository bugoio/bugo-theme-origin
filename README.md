# Bugo Origin Theme

Origin is meant to be used as a starter theme used by designers and developers alike. Origin is best used with Forestry.io for content management and Netlify.com for hosting.

> NOTE: Still in development. Use at your own risk. I do not consider this production ready.

## Theme Features

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

* Hugo Module
* SASS with tons of variables
* Hugo/Forestry theme enabled SASS. 
* WooCommerce FlexSlider
* Validator
* Sweet Alert 2
* Cloudindary image transformation support

## Installation
From your Hugo site's root, you need to initialize your site as a Hugo module.

```bash
# hugo mod init
```bash

Next creae a directory and add the latest realease of Origin to your site's module configuration

```bash
# hugo mkdir themes/bugo-theme-origin
# hugo mod get github.com/bugoio/bugo-theme-origin
```

Head over to your Hugo config file and add the module. Shown in yaml.

```yaml
module:
  imports:
  - disable: false
    ignoreConfig: false
    path: github.com/bugoio/bugo-theme-origin //repository
  - path: bugo-theme-origin                   //stored in themes/
```

That should do it. 
