import { selectFrom, selectTo } from './elements.js'

const selectFromOptions = [...selectFrom.querySelectorAll('option')]
const selectToOptions = [...selectTo.querySelectorAll('option')]

function swapAttributes(option) {
  const isSelected = option.hasAttribute('selected')
  const isDisabled = option.hasAttribute('disabled')
  if(isSelected) {
    option.removeAttribute('selected')
    option.setAttribute('disabled', true)
  } else if(isDisabled) {
    option.removeAttribute('disabled')
    option.setAttribute('selected', false)
  }
}

export function handleSwap(e) {
  e.preventDefault()
  selectFromOptions.forEach(swapAttributes)
  selectToOptions.forEach(swapAttributes)
}

function disableAttribute(option, value) {
  const isDisabled = option.hasAttribute('disabled')
  const isSelected = option.value === value
  if(isDisabled)
    option.removeAttribute('disabled')
  else if(isSelected)
    option.setAttribute('disabled', true)
}

export function handleSelections(e) {
  if(e.target === selectFrom)
    selectToOptions.forEach(option => disableAttribute(option, e.target.value))
  else
    selectFromOptions.forEach(option => disableAttribute(option, e.target.value))
}