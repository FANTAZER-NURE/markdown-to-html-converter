const marked = require('marked');

class MarkdownToHtmlConverter {
    constructor(options = {}) {
        // Configure the marked library with any provided options
        this.renderer = new marked.Renderer();
        marked.setOptions({
            renderer: this.renderer,
            ...options
        });
    }

    convert(markdownText) {
        return marked(markdownText);
    }
}

module.exports = MarkdownToHtmlConverter;
