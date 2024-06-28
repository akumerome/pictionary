import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedColor: '#000000',
  }),

  actions: {

    //getters
    getSelectedColor() {
        return this.selectedColor
    },

    //setters
    setSelectedColor(selectedColor) {
        this.selectedColor = selectedColor
    },

  }
})