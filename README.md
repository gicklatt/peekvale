# Peekvale

The official website for **Peekvale: Hidden Objects**, a cozy hidden-object adventure by Gicklatt.

[Website](https://gicklatt.github.io/peekvale/) · [Privacy policy](https://gicklatt.github.io/peekvale/privacy/) · [Support](https://gicklatt.github.io/peekvale/support/)

This repository contains the game's promotional website, artwork gallery, privacy policy, and support pages. It uses plain HTML, CSS, and JavaScript and is hosted on GitHub Pages. No package installation or build step is required.

## Local preview

From the repository root, start a local server with Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://127.0.0.1:8000/) in your browser.

The custom `404.html` page uses absolute `/peekvale/` paths for GitHub Pages. To preview its styles locally, serve the repository under that same path.

## Project structure

```text
index.html          Home page and world gallery
privacy/index.html  Privacy policy
support/index.html  Support and frequently asked questions
credits/index.html  Artwork and font credits
404.html            Custom error page
assets/             Styles, scripts, illustrations, and fonts
.nojekyll           Static GitHub Pages configuration
robots.txt          Sitemap reference
sitemap.xml         Public page URLs
```

## Credits and contact

The world previews show original Peekvale scenes from the development build. Headings use Gluten by The Gluten Project Authors, distributed under the [SIL Open Font License 1.1](assets/fonts/OFL.txt). See the [credits page](https://gicklatt.github.io/peekvale/credits/) for details.

For questions about Peekvale or this website, visit [Support](https://gicklatt.github.io/peekvale/support/) or email [gicklatt@gmail.com](mailto:gicklatt@gmail.com).
