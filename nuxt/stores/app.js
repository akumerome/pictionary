import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedColor: '#000000',
    eraseCanvas: false,
    brushThickness: 10,
    brushStroke: {},
    messages: [
      {
        user: {
          id: 1,
          name: "Vincent",
          color: '#FF0000',
        },
        message: 'First message'
      },
      {
        user: {
          id: 2,
          name: "Frida",
          color: '#FF00FF',
        },
        message: 'Second message'
      },
      {
        user: {
          id: 3,
          name: "Leonardo",
          color: '#F0F0FF',
        },
        message: 'Third message'
      },
      {
        user: {
          id: 1,
          name: "Vincent",
          color: '#FF0000',
        },
        message: 'Fourth message'
      },
      {
        user: {
          id: 4,
          name: "Rosa",
          color: '#00FFFF',
        },
        message: 'Fifth message'
      },
      {
        user: {
          id: 3,
          name: "Leonardo",
          color: '#F0F0FF',
        },
        message: 'Sixth message'
      },
    ],
    words: {
      options: [],
      selected: null,
    }
  }),

  actions: {

    //getters
    getSelectedColor() {
      return this.selectedColor
    },
    getEraseCanvas() {
      return this.eraseCanvas
    },
    getBrushThickness() {
      return this.brushThickness
    },
    getBrushStroke() {
      return this.brushStroke
    },
    get_messages() {
      return this.messages
    },
    get_words_options() {
      return this.words.options
    },

    //setters
    setSelectedColor(selectedColor) {
      this.selectedColor = selectedColor
    },
    setEraseCanvas(eraseCanvas) {
      this.eraseCanvas = eraseCanvas
    },
    setBrushThickness(brushThickness) {
      this.brushThickness = brushThickness
    },
    setBrushStroke(brushStroke) {
      this.brushStroke = brushStroke
    },
    set_messages(messages) {
      this.messages = messages
    },
    set_words_options(options) {
      this.words.options = options
    },

  }
})