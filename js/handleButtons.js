import * as Elements from './elements.js'

function translateRequest(data) {
  const url = 'https://deepl-scraper.azurewebsites.net/api/deepl-scraper?code=pgX1Jh1h3O8AaLjA3LaawUp08GW9Zf7MLPmYFBD7lm6jKnGBy49ISQ=='
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(x => x.json())
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}

function setDisabled(disabled) {
  const { form, textareaFrom, textareaTo, ...rest } = Elements
  const elementsArray = Object.values(rest)
  if(disabled) {
    textareaFrom.setAttribute('disabled', true)
    for(let element of elementsArray) {
      element.setAttribute('disabled', true)
      element.classList.add('disabled')
    }
  }
  else {
    textareaFrom.removeAttribute('disabled')
    for(let element of elementsArray) {
      element.removeAttribute('disabled')
      element.classList.remove('disabled')
    }
  }
}

export async function handleSubmit(e) {
  e.preventDefault()
  const { textareaFrom, selectFrom, selectTo, textareaTo } = Elements
  const text = textareaFrom.value
  if(text.length > 0) {
    setDisabled(true)
    const from = selectFrom.value
    const to = selectTo.value
    const response = await translateRequest({ text, from, to })
    textareaTo.value = response.translation
    setDisabled(false)
  }
}

export function handleClear(e) {
  e.preventDefault()
  const { textareaFrom, textareaTo } = Elements
  textareaFrom.value = ''
  textareaTo.value = ''
}