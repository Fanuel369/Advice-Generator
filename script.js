async function display() {
    var advice = document.getElementById("advice");

    var id = document.getElementById("id");

    var url = 'https://api.adviceslip.com/advice'

    var data = await (await fetch(url)).json();

    var advice_generated = data.slip.advice;

    var advice_id = data.slip.id;

    advice.innerHTML = advice_generated;
    
    id.innerHTML =  advice_id;

}

