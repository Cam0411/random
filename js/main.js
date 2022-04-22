const max = document.querySelector('.max__value')
const min = document.querySelector('.min__value')
const ger = document.querySelector('.ger')
const res = document.querySelector('.result')

function renderValue(){
    ger.addEventListener('click',() => {
        
        const minValue = parseInt(min.value)
        const maxValue = parseInt(max.value) 
        if (minValue < maxValue){

          const random = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
        
          res.innerHTML = random
          if (res.innerHTML == NaN){
            res.innerHTML = 'Error'
        }
        }else {
            res.innerHTML = 'Error'
        }

    })
    function resetValue(){
        max.addEventListener('click',() => {
            max.value = ''
        })
        min.addEventListener('click',() => {
            min.value = ''
        })
    }
    resetValue()
}
renderValue()

