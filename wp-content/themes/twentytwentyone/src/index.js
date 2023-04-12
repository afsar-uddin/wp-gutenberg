const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, MediaPlaceholder } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;

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
        titleColor: {
            type: 'string',
            default: 'black',
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        backgroundImage: {
            type: 'string',
            default: null
        },
        overlayColor: {
            type: 'string',
            default: 'black'
        },
        overlayOpacity: {
            type: 'number',
            default: 0.3
        }
    },
    
       
    //built in funtion
    edit({attributes, setAttributes }) {
        const {title, body, titleColor, descColor, backgroundImage, overlayColor, overlayOpacity} = attributes;

        //custom funtion 
        function onchangeTitle(newTitle) {
            setAttributes({title: newTitle});
        }

        function onchangeBody(newBody) {
            setAttributes({body: newBody});
        }

        function onTitleColorChange(newColor) {
            setAttributes({titleColor: newColor});
        }

        function onDescColorChange(newColor) {
            setAttributes({descColor: newColor});
        }

        function onSelectImage(newImage) {
            setAttributes({backgroundImage: newImage.sizes.full.url})
        }

        function onOverlayColorChange(newColor) {
            setAttributes({overlayColor: newColor})
        }

        function onOverlayOpacityChange(newOpacity) {
            setAttributes({overlayOpacity: newOpacity})
        }

        return([
            
            <InspectorControls style={{marginBottom: '40px'}}>
                <PanelBody title={'Title Style'}>
                    <p><strong>Select a title color: </strong></p>
                    <ColorPalette value={titleColor} onChange={onTitleColorChange}></ColorPalette>
                    <p><strong>Select description color: </strong></p>
                    <ColorPalette value={descColor} onChange={onDescColorChange}></ColorPalette>
                </PanelBody>

                <PanelBody title={'Background image settings'}>
                    <p><strong>Select a background image: </strong></p>
                 <MediaUpload onSelect={onSelectImage} 
                    allowedTypes={ ['image'] }
                    value={ backgroundImage }
                    render={ ( { open } ) => (
                        <IconButton onClick={ open }>Open Media Library</IconButton>
                    ) }
                />
                    <div style={{marginTop: '20px', marginBottom: '20px'}}>
                        <p><strong>Overlay Color: </strong></p>
                        <ColorPalette value={overlayColor} onChange={onOverlayColorChange}></ColorPalette>
                    </div>
                    <RangeControl 
                        label={'Overlay Opacity'} 
                        value={ overlayOpacity }
                        onChange={onOverlayOpacityChange} 
                        min={0} 
                        max={1} 
                        step={0.05} />
                </PanelBody>
            </InspectorControls>, 

            <div class="cta-container" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <RichText   key="editable"
                            tagName="h2"
                            placeholder="Your CTA title"
                            value={title}
                            onChange={onchangeTitle}
                            style={{title: titleColor}} />
                <RichText   key="editable"
                            tagName="p"
                            placeholder="Your CTA Description"
                            value={body}
                            onChange={onchangeBody} />
            </div>
        ]);
    },


    save({attributes}) { 

        const {title, body, titleColor, descColor, backgroundImage} = attributes;

         return(
            <div class="cta-container"  style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <h2 style={{color: titleColor}}>{title}</h2>
                <RichText.Content style={{color: descColor}} tagName="p" value={body} />
            </div>
         );
    }
});