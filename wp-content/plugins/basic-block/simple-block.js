wp.blocks.registerBlockType('basic-block/simple-block', {

    title: wp.i18n.__('Basic simple block'),
    description: wp.i18n.__('This is the simple description of the block'),
    icon: 'universal-access-alt',
    category: 'common',

    edit: function() {
        return wp.element.createElement('p', {className: 'custom-bock'}, 'Hello Guten Block')
    },

    save: function() {
        return wp.element.createElement('p', {className: 'custom-bock'}, 'This is the basick blog content')
    },

});