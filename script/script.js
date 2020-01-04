window.addEventListener('load', () => {

    const sub = document.getElementById('sub');
    

    europa.addEventListener('click', () => {
        checkbox();
    })

    asien.addEventListener('click', () => {
        checkbox();
    })

    afrika.addEventListener('click', () => {
        checkbox();
    })

    usa.addEventListener('click', () => {
        checkbox();
    })

    alone.addEventListener('click', () => {
        ra(); 
    })

    aloneNO.addEventListener('click', () => {
        ra();
    })


    
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


        

        if(checkc === true && emailcontroll === '') {

            if(checkr === true) {
                hideAll();
                changeDisplayProperty('teilnahme', 'block');
            }  
            else {

            }
        }
        else{
            info.textContent = vornamecontroll + nachnamecontroll + straßecontroll + plzcontroll + emailcontroll;
        }

        
    })

    document.getElementById('preis').addEventListener('input', ausgeben);

    
        
})

let checkc = false;
let checkr = false;

function ausgeben(ev) {
    document.getElementById('preisanzeige').value = ev.target.value;
}

function checkbox() {

    let urlaubsziele = document.getElementsByClassName('urlaubsziele');

    if(urlaubsziele[0].checked) {
        checkc = true;
    }

    if(urlaubsziele[1].checked) {
        checkc = true;
    }

    if(urlaubsziele[2].checked) {
        checkc = true;
    }

    if(urlaubsziele[3].checked) {
        checkc = true;
    }

    if(checkc === false) {       
    }
}

// function select() {

//     checks = true;
//     // let unterkunft = document.getElementsByClassName('unterkunft');

//     // if(unterkunft[0].checked) {
//     //     checks = true;
//     // }

//     // if(unterkunft[1].checked) {
//     //     checks = true;
//     // }

//     // if(unterkunft[2].checked) {
//     //     checks = true;
//     // }

//     // if(unterkunft[3].checked) {
//     //     checks = true;
//     // }

//     // if(unterkunft[4].checked) {
//     //     checks = true;
//     // }

//     // if(checks === false){
//     //     checks = false;
//     // }
    
// }

// function range() {
//     checkr = true;
// }

function ra(){
    checkr = true;
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


    



