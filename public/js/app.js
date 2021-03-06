console.log('Client side javascript is loaded');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error                
                
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = "Current temperature: " + data.forecast.current_temperature + ", feels like: " + data.forecast.feels + ", Latitude: " + data.forecast.latitude + ", Longitude: " + data.forecast.longitude
               
                console.log(data.location)
                console.log(data.forecast)
                
            }
        })
    })
    
})
