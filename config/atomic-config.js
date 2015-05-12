module.exports = {
    // 'custom' maps custom suffixes to values and it is specially useful for theming
    // or things that you need to change globally in many different atomic classes.
    // these key/value pairs map to the custom suffixes in 'classNames'.
    // i.e. H-uh will get height: 79px and C-primary will get color: #f6a1e1
    'custom': {
        title: '#5a96b9',
        overlayBg: '#282b2c',
        subtitle: '#FFFFFF',
        filters: '#2B2E31',
        border: '#DBE3E7'
    },
    // breakpoints define media queries and is used to contain the style of a class
    // only when that media query is active.
    // i.e. given the breakpoint below, `D-b--sm` will be inside of the media query
    // `@media(min-width:500px)`, meaning that it will only apply `display:block`
    // once the viewport has at least 500px.
    breakPoints: {
        'sm': '@media(min-width:500px)', // breakpoint 1 (see classNames below)
        'md': '@media(min-width:900px)', // breakpoint 2
        'lg': '@media(min-width:1200px)' // breakpoint 3
    }
};