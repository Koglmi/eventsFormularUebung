window.addEventListener('load', () => {

    const sub = document.getElementById('sub');
    

    
    sub.addEventListener('click', () => {
        const vorname = document.getElementById('firstname');
        const nachname =document.getElementById('surname');
        const straße = document.getElementById('street');
        const plz = document.getElementById('plz');
        const email = document.getElementById('email');

        let vornamecontroll;
        let nachnamecontroll;
        let straßecontroll;
        let plzcontroll;
        let emailcontroll;
        
        const info = document.getElementById('info');

        if(vorname.value === '') {
            vornamecontroll = 'Der Vorname wurde nicht eingegeben! ';
        }
        else{
            vornamecontroll = '';
        }

        if(nachname.value === '') {
            nachnamecontroll = 'Der Nachname wurde nicht eingegeben! ';
        }
        else{
            nachnamecontroll = '';
        }

        if(straße.value === '') {
            straßecontroll = 'Die Straße wurde nicht eingegeben! ';
        }
        else{
            straßecontroll = '';
        }

        if(plz.value === ''){
            plzcontroll = 'Die Postleitzahl wurde nicht eingegeben! ';
        }
        else {
            plzcontroll = '';
        }

        if(email.value === ""){
            emailcontroll = 'Die Mail Adresse wurde nicht eingegeben! ';
        }
        else {
            emailcontroll = '';
        }

    
        


        // alert(vornamecontroll + nachnamecontroll + straßecontroll + plzcontroll + emailcontroll);


        info.textContent = vornamecontroll + nachnamecontroll + straßecontroll + plzcontroll + emailcontroll;

        if(check === true) {
            hideAll();
            changeDisplayProperty('teilnahme', 'block');
        }

        
    })

    document.getElementById('preis').addEventListener('input', ausgeben);

    
        
})

let check = false;

function ausgeben(ev) {
    document.getElementById('preisanzeige').value = ev.target.value;
}

function checkbox() {
    let urlaubsziele = document.getElementsByClassName('urlaubsziele');

    if(urlaubsziele[0].checked) {
        check = true;
    }

    if(urlaubsziele[1].checked) {
        check = true;
    }

    if(urlaubsziele[2].checked) {
        check = true;
    }

    if(urlaubsziele[3].checked) {
        check = true;
    }

    if(check === false) {       
    }

}

function changeDisplayProperty(id, property) {
    document.getElementById(id).style.display = property;
}

function hideAll() {

    const elements = [document.getElementById('content'),
                      document.getElementById('teilnahme'),
                    ];
  
    for (const element of elements) {
      element.style.display = 'none';
    }
  }


    



