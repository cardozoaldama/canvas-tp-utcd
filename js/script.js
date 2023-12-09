// Include reveal.js as an ES module.
// Import Reveal:
import Reveal from 'reveal.js';
// Import Markdown:
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// New deck initialize:
let deck = new Reveal ({
    plugins: [Markdown]
})
// Initialize:
deck.initialize();