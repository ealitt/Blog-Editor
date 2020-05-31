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