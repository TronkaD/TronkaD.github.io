//CLASS USER
class User{
    constructor (id, firstName,lastName,dateBirth,email,phone,sexe){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateBirth = dateBirth;
        this.email = email;
        this.phone = phone;
        this.sexe= sexe;

    };
};
//CLASS STORE

class store{
    static getusers(){
        let users;
        if(localStorage.getItem('users') === null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    };
    static addUser(user){
        const users = store.getusers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };
};

function getError(){
    document.getElementById('name-incorrect').textContent ='';
    document.getElementById('lastName-incorrect').textContent ='';
    document.getElementById('date-incorrect').textContent ='';
    document.getElementById('email-incorrect').textContent ='';
    document.getElementById('tel-incorrect').textContent ='';
    document.getElementById('sexe-incorrect').textContent ='';
    document.getElementById('firstName').textContent = '';
    document.getElementById('lastName').textContent ='';
    document.getElementById('dateOfBirth').textContent ='';
    document.getElementById('email').textContent ='';
    document.getElementById('yourNumber').textContent ='';
};

//CLASS USER INTERFACE 

class UI{
    static displayUsers(){
        const users = store.getusers()
        users.forEach((user)=>UI.addUserToList(user));
    };
    static addUserToList(user){
        const tbody = document.getElementById('tbody');
        let block = "";
        const tr = document.createElement("tr");
        tr.innerHTML =` 
                        <td><input type="checkbox"></td>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.dateBirth}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.sexe}</td>
                        <td>
                            <a href="#modal1"><i class="fa-solid fa-pen"></i></a>
                            <a href="#modal1"><i class="fa-solid fa-trash"></i></a>
                            <a href="#modal1"><i class="fa-solid fa-eye"></i></a>
                        </td>`;
        tbody.appendChild(tr);
    };
    static clearFields(){
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('dateOfBirth').value ="";
        document.getElementById('email').value ="";
        document.getElementById('yourNumber').value ="";
        document.getElementById('sexe2').value ="";
    };
};
document.addEventListener('DOMContentLoaded', UI.displayUsers);
//ADD FUNCTION
function Ajouter(){
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let dateBirth = document.getElementById('dateOfBirth').value;
        let email = document.getElementById('email').value;
        let phone= document.getElementById('yourNumber').value;
        let  sexe= document.getElementById('sexe2').value;


        //ERROR MANAGEMENT
        let name = document.getElementById('name-incorrect');
        let lastNames= document.getElementById('lastName-incorrect');
        let birthDate = document.getElementById('date-incorrect');
        let gmail = document.getElementById('email-incorrect');
        let phoneNumber = document.getElementById('tel-incorrect');
        let choixSexe = document.getElementById('sexe-incorrect');
        //POSSIBLE CONTROL ON THE FORMS
        if(firstName ==""){
            name.textContent = 'Veuillez remplir ce champ';
            name.focus();
            name.style.color = 'red';
        }else if(lastName ==""){
            lastNames.textContent = 'Veuillez remplir ce champ';
            lastNames.focus();
            lastNames.style.color = 'red';
        }else if(dateBirth == ""){
            birthDate.textContent = 'Veuillez remplir ce champ';
            birthDate.focus();
            birthDate.style.color = 'red';
        }else if(email ==""){
            gmail.textContent = 'Veuillez remplir ce champ';
            gmail.focus();
            gmail.style.color = 'red';
        }else if(phone ==""){
              phoneNumber.textContent = 'ce champ est incorrect'; 
              phoneNumber.focus();
              phoneNumber.style.color = 'red';
        }else if(!sexe){
            choixSexe.textContent = 'Veuillez checker un element';
            choixSexe.focus();
            choixSexe.style.color = 'red';
        }else{
            let users = store.getusers()
            let id = (users.length > 0)?users[users.length-1].id :0;
            id ++;
            const user = new User(id,firstName,lastName,dateBirth,email,phone,sexe);
            UI.addUserToList(user);
            store.addUser(user);
            UI.clearFields();
        };
    
};


 