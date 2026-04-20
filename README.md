# Whiteboard - Reykjavik University, Web Programming, jan 2017

Simple browser-based whiteboard built with HTML5 canvas, jQuery, and a Gulp-powered development workflow.

## Features

- Freehand pen drawing
- Shapes: line, rectangle, circle
- Text tool with font and size controls
- Color picker and quick color presets
- Stroke thickness slider
- Select and move existing objects
- Undo / redo
- Clear canvas

## Requirements

- Node.js 18+ (tested on modern Node, including v24)
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development mode:

```bash
npm run watch
```

This runs Gulp (default task), which:

- Compiles SCSS from app/scss into app/css
- Starts BrowserSync serving the app directory
- Watches SCSS, CSS, HTML, and JS files for changes

## Available Scripts

- npm run watch: Starts SCSS compile + BrowserSync + file watchers
- npm test: Placeholder test command

## Project Structure

```text
app/
	index.html         Main whiteboard UI
	js/
		index.js         Canvas interaction and toolbar behavior
		shape.js         Shape classes and drawing logic
		jscolor.js       Color picker helper
	scss/
		style.scss       Source styles
	css/
		style.css        Compiled styles output
gulpfile.js          Gulp build/watch tasks
index.js             Express API/static server (separate from BrowserSync)
```

## Troubleshooting

### ReferenceError: primordials is not defined

This project is configured for Gulp 4, which is compatible with modern Node versions. If you still see this error, clean and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Sass compilation errors

- Check SCSS syntax in app/scss/style.scss
- Ensure gulp-sass and sass are installed:

```bash
npm ls gulp-sass sass
```

## Notes

- The whiteboard runs fully in the browser.
- Data persistence/API endpoints in index.js are in-memory only unless you add storage.

