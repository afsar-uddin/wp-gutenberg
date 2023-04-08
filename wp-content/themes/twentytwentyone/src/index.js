const { registerBlockType } = wp.blocks;

registerBlockType('afsarina/custom-cta', {
    //built in attributes
    title: 'Afsarina call to action',
    description: 'Block generate for call to action',
    icon: 'format-image',
    category: 'patterns',

    //custom attribute
    attributes: {
        author: {
            type: 'string'
        }
    },
    
    
    
    
    //built in funtion
    edit({attributes, setAttributes }) {
        //custom funtion 
        function updateAuthor(event) {
            setAttributes({author: event.target.value})
        }

        return <input value={attributes.author} type="text" onChange={ updateAuthor } />;
    },


    save({attributes}) { 
         return <p>Author name: {attributes.author}</p>;
    }
});