# Origin Theme

Blogging with Hugo's Origin Theme is meant to be used as a starter theme used by designers and developers to create their own themes.

## Theme Features

* Responsive layouts based on modular scale
* Beautiful typography and grid based on modular scale
* Cloudinary support

## Dev Features
* Hugo Module
* SASS with tons of variables
* Cloudindary image transformation support

## Installation

From your Hugo site's root, you need to initialize your site as a Hugo module.

```bash
hugo mod init
```
Head over to your Hugo config file and add the module. Shown in yaml.

```yaml
module:
  imports:
  - disable: false
    ignoreConfig: false
    path: github.com/bugoio/bugo-theme-origin //repository
```
Start Hugo

```bash
hugo server -d public
```

That should do it.

## Usage

### Customization

#### Hugo Config
You can customize the basic features of your site in the Hugo Config File in the params section.



### Dependencies

#### Bugo Modules

* Bugo SASS Utilties
  https://github.com/bugoio/bugo-sass-utilities
* Bugo Typography
  https://github.com/bugoio/bugo-sass-typography
* Bugo Utilities
  https://github.com/bugoio/bugo-utility-partials
* Bugo Header
  https://github.com/bugoio/bugo-mod-header
* Bugo Footer
  https://github.com/bugoio/bugo-mod-footer
* Bugo Font Awesome
  https://github.com/bugoio/bugo-font-awesome
* Bugo Breadcrumbs
  https://github.com/bugoio/bugo-mod-breadcrumbs
* Bugo Article
  https://github.com/bugoio/bugo-mod-article
* Bugo Share
  https://github.com/bugoio/bugo-mod-share
* Bugo Search
  https://github.com/bugoio/bugo-mod-search
* Bugo Navigation
  https://github.com/bugoio/bugo-mod-navigation

