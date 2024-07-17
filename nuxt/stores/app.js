import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedColor: '#000000',
    eraseCanvas: false,
    brushThickness: 10,
    brushStroke: {}
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

  }
})