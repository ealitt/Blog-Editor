const editor = new EditorJS({
    holderId: 'editorjs',

    autofocus: true,
    
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

        delimiter: Delimiter,

        image: {
            class: SimpleImage,
            inlineToolbar: true,
            config: {
              placeholder: 'Paste image URL'
            }
        },

        embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            },
        },

        raw: RawTool,

    }
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function(saveBtn) {
    editor.save().then((outputData) => {
        let fileBlob = new Blob([JSON.stringify(outputData, null, 1)], {type: "application/json"});
        saveAs(fileBlob, "content.json")
    }).catch((error) => {
        console.log('Save failed: ', error)
    }); 
})

window.onbeforeunload = function(event) {
    event.returnValue = "REFRESHING WILL LOSE YOUR DATA";
};