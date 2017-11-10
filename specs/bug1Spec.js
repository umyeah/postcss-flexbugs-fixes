var test = require('./test');

describe('bug 1', function() {
    it('set all immediate children shrink 0', function(done) {
        var input = 'div{display: flex;}';
        var output = 'div{display: flex;}div > *{flex-shrink: 0;}';
        test(input, output, {}, done);
    });
    it('set all immediate children shrink 0 for all selectors', function(done) {
        var input = 'div, a{display: flex;}';
        var output = 'div, a{display: flex;}div > *, a > *{flex-shrink: 0;}';
        test(input, output, {}, done);
    });
});
