import {
  form,
  selectFrom,
  selectTo,
  swapButton,
  clear
} from './elements.js'

import {
  handleSwap,
  handleSelections
} from './handleSelections.js'

import {
  handleSubmit,
  handleClear
} from './handleButtons.js'

selectFrom.addEventListener('change', handleSelections)
selectTo.addEventListener('change', handleSelections)
swapButton.addEventListener('click', handleSwap)

form.addEventListener('submit', handleSubmit)
clear.addEventListener('click', handleClear)