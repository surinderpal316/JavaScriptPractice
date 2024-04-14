const form = document.querySelector('form');
form.addEventListener('submit' , function (e) {
    e.preventDefault();
    const height =   parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results  = document.querySelector('#result')
    const mess = document.querySelector('#mess')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give valid height ${weight}`;
    } else {
        const bmi = (weight/((height * height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }

    if(bmi<=18){
        mess.innerHTML = "less Weight"
    }
    else if( bmi >= 18.6 && bmi <=24) {
        mess.innerHTML = "Nomral Range"
    } else if (bmi >24) {
        mess.innerHTML="Over"

    }
}); 