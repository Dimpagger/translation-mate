'use babel';

import {CompositeDisposable} from 'atom';
import request from 'request'

export default {

    subscriptions: null,

    activate() {

        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'translation-mate:fetch': () => this.fetch()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    fetch() {
        let editor;
        if (editor = atom.workspace.getActiveTextEditor()) {
            let selection = editor.getSelectedText();
            this.download(selection).then((html) => {
                editor.insertText(html)
            }).catch((error) => {
                atom.notifications.addWarning(error.reason)
            })
            // selection = selection.split('').reverse().join('');
            // editor.insertText(selection);
        }
    },

    download(url){
        return new Promise((resolve, reject) =>{
         request(url, (error, response, body) => {
            if (!error && response.statusCode === 200){
                resolve(body);
                console.log(body)
            } else {
                reject({
                    reason: "Unable to download page"
                })
            }
        })
        })

    }

};
