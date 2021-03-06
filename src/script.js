let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");

const Submit = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let error = document.getElementById('error_contact');
    let success = document.getElementById('success_contact')

    if(name === '' || email === '' || message === ''){
        console.log('Error: Llenar todos los campos')
        error.style.display = 'block'
        success.style.display = 'none'
    } else {
        fetch("https://PW2021-APINode-ArmandoHEV.armandohernan11.repl.co/contacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombreContacto: name,
                email: email,
                message: message
            })
        })
            .then(res => {
                return res.json();
            })
            .then( data => {
                //success.innerHTML = data.body;
                console.log(data)
                if(data){
                    alert(data.message);
                    closeModal();
                }else{
                    alert(data.message);
                    closeModal();
                }
            });
    }
}

const openModal = () => {
    overlay.style.visibility = "visible";
    overlay.style.opacity = "100%";
    modal.style.visibility = "visible";
    modal.style.opacity = "100%";
}

const closeModal = () => {
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}

const generateExperience = () => {
    fetch("https://PW2021-APINode-ArmandoHEV.armandohernan11.repl.co/getExperience")
        .then(res => {
            return res.json();
        })
        .then( data => {
            //success.innerHTML = data.body;
            console.log(data)

            const list = document.getElementById("left_section");
            data.experienciaLaboral.map((item, index) => {

                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                h2.innerText = item.position;
                let h4 = document.createElement('h4');
                h4.innerText =
                    `${item.company}, ${item.city}, ${item.country}, ${new Date(item.initialDate.seconds).toString().substring(0, 10)} - ${item.endDate === "present" ? "Presente" : new Date(item.endDate.seconds).toString().substring(0, 10)}`;

                let p = document.createElement('p');
                p.innerText = item.description;
                div.classList.add("experience_item");
                div.appendChild(h2)
                div.appendChild(h4)
                div.appendChild(p)
                list.appendChild(div)
            })
        });
}

const generateEdu = () => {
    fetch("https://PW2021-APINode-ArmandoHEV.armandohernan11.repl.co/getEducation")
        .then(res => {
            return res.json();
        })
        .then( data => {
            //success.innerHTML = data.body;
            console.log(data)

            const list = document.getElementById("education");
            data.map((item, index) => {

                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                h2.innerText = item.university;
                let h3 = document.createElement('h3');
                h3.innerText = item.city
                let p = document.createElement('p');
                p.innerText = `${item.degree}, (${new Date(item.ending.seconds).getMonth().toString()+1} ${new Date(item.ending.seconds).getFullYear().toString()})`;
                div.classList.add("edu_item");
                div.appendChild(h2)
                div.appendChild(h3)
                div.appendChild(p)
                list.appendChild(div)
            })
        });
}

const generateAbilities = () => {
    fetch("https://PW2021-APINode-ArmandoHEV.armandohernan11.repl.co/getAbilities")
        .then(res => {
            return res.json();
        })
        .then( data => {
            //success.innerHTML = data.body;
            console.log(data)

            const list = document.getElementById("abilities");
            data.map((item, index) => {
                let h5 = document.createElement('h5');
                h5.innerText = item.label;
                list.appendChild(h5)
            })
        });
}

window.onload = () => {
    generateExperience();
    generateEdu();
    generateAbilities();
}