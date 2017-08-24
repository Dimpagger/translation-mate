'use babel';

import {CompositeDisposable} from 'atom';
import json from 'format-json';
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
        const queryUrl = "http://fanyi.youdao.com/openapi.do?keyfrom=translate-sublime&key=346426218&type=data&doctype=json&version=1.1&q=";
        let editor;
        if (editor = atom.workspace.getActiveTextEditor()) {
            let selection = editor.getSelectedText();
            this.download(queryUrl + selection).then((html) => {
                // editor.insertText(this.format(9, 4, JSON.parse(html)));
                editor.insertText(json.plain(JSON.parse(html)));
            }).catch((error) => {
                atom.notifications.addWarning(error.reason)
            })
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

    },

    format(x, y){
        let hline = "+" + this.line(x, "-") + "+\n";
        let vline = "|" + this.line(x, " ") + "|\n";
        return hline + new Array(y+1).join(vline) + hline;
    },

    line(n, item){
        return new Array(n+1).join(item);
    }

};
