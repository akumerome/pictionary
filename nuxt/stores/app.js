import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedColor: '#000000',
    eraseCanvas: false,
  }),

  actions: {

    //getters
    getSelectedColor() {
        return this.selectedColor
    },
    getEraseCanvas() {
      return this.eraseCanvas
  },

    //setters
    setSelectedColor(selectedColor) {
        this.selectedColor = selectedColor
    },
    setEraseCanvas(eraseCanvas) {
      this.eraseCanvas = eraseCanvas
  },

  }
})