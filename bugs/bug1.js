var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'display' && decl.value === 'flex') {
        var shrink = postcss.decl({
            prop: 'flex-shrink',
            value: 0,
            source: decl.source
        });

        var parentRule = decl.parent;
        var newSelector = parentRule.selector
                                    .split(',')
                                    .map(function(s){return s + ' > *';})
                                    .join(',');
        var clonedRule = parentRule.cloneAfter({selector: newSelector});
        clonedRule.removeAll();
        clonedRule.insertAfter(decl, shrink);
    }
};
