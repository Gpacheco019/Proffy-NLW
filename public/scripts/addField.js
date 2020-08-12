//search button
document.querySelector("#add-time")

//when click at button 
.addEventListener('click', cloneField)


//action
function cloneField() {
    //clone fields
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //clear fields
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field){
        //take a field and clear 
        field.value =""
    })

    //put on page
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}

