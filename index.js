let btnAdd = document.getElementById('btn')
let elTable = document.getElementById('list')
let elForm= document.getElementById('myForm')

let cityInput = document.getElementById('city')
let countryInput= document.getElementById('country')

btnAdd.addEventListener('click' , event => {
    event.preventDefault();
    let city = cityInput.value
    let country = countryInput.value

    let template = `
                  <tr>
                    <td>${city}</td>
                    <td>${country}</td>
                  </tr> `
                  elTable.innerHTML += template;
})
