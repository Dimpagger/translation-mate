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

    serialize() {
        return {
            translationMateViewState: this.translationMateView.serialize()
        };
    },

    fetch() {
        let editor;
        if (editor = atom.workspace.getActiveTextEditor()) {
            let selection = editor.getSelectedText();
            selection = selection.split('').reverse().join('');
            editor.insertText(selection);
        }
    }

};
