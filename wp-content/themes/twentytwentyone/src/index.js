const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType('afsarina/custom-cta', {
    //built in attributes
    title: 'Afsarina call to action',
    description: 'Block generate for call to action',
    icon: 'format-image',
    category: 'patterns',

    //custom attribute
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },
    
    
    
    
    //built in funtion
    edit({attributes, setAttributes }) {
        const {title, body} = attributes;

        //custom funtion 
        function onchangeTitle(newTitle) {
            setAttributes({title: newTitle});
        }

        function onchangeBody(newBody) {
            setAttributes({body: newBody});
        }
        
        return([
            <div class="cta-container">
                <RichText   key="editable"
                            tagName="h2"
                            placeholder="Your CTA title"
                            value={title}
                            onChange={onchangeTitle} />
                <RichText   key="editable"
                            tagName="p"
                            placeholder="Your CTA Description"
                            value={body}
                            onChange={onchangeBody} />
            </div>
        ]);
    },


    save({attributes}) { 

        const {title, body} = attributes;

         return(
            <div class="cta-container">
                <h2>{title}</h2>
                <RichText.Content tagName="p" value={body} />
            </div>
         );
    }
});