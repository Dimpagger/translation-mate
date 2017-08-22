'use babel';

import TranslationMateView from './translation-mate-view';
import { CompositeDisposable } from 'atom';

export default {

  translationMateView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.translationMateView = new TranslationMateView(state.translationMateViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.translationMateView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'translation-mate:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.translationMateView.destroy();
  },

  serialize() {
    return {
      translationMateViewState: this.translationMateView.serialize()
    };
  },

  toggle() {
    console.log('TranslationMate was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
