window.addEventListener('load', () => {

    const sub = document.getElementById('send');


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
            vornamecontroll = 'Der Vorname wurde nicht eingegeben!';
        }
        else{
            vornamecontroll = '';
        }

        if(nachname.value === '') {
            nachnamecontroll = 'Der Nachname wurde nicht eingegeben!';
        }
        else{
            nachnamecontroll = '';
        }

        if(straße.value === '') {
            straßecontroll = 'Der Straße wurde nicht eingegeben!';

        }
        else{
            straßecontroll = '';
        }

        if(plz.value === ''){
            plzcontroll = 'Die Postleitzahl wurde nicht eingegeben!';
        }
        else {
            plzcontroll = '';
        }

        if(email.value === ""){
            emailcontroll = 'Die Mail Adresse wurde nicht eingegeben!';
        }
        else {
            emailcontroll = '';
        }

        // alert(vornamecontroll + nachnamecontroll + straßecontroll + plzcontroll + emailcontroll);


        info.textContent = vornamecontroll + nachnamecontroll + straßecontroll + plzcontroll + emailcontroll;
    })

    document.getElementById('preis').addEventListener('input', ausgeben);
        
})

function ausgeben(ev) {
    document.getElementById('preisanzeige').value = ev.target.value;
}


