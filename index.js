const editor = new EditorJS({
    holderId: 'editorjs',

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },

        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        },

        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            },
        }
    }
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function() {
    editor.save().then((outputData) => {
        console.log('Outputing Blog Data: ', outputData)
    }).catch((error) => {
        console.log('Save failed: ', error)
    }); 
})