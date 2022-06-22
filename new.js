(function() {
    function display(tableau){
        let tbody = document.getElementById("tbody");
        let block = "";

        /*PARCOURS DU TABLEAU*/
        tableau.forEach(element=>{
            let tr = document.createElement("tr");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            let btnSupprimer = document.createElement('div');
            btnSupprimer.setAttribute("class","fa-solid fa-trash");
            let btnModifier = document.createElement('div');
            btnModifier.setAttribute("class","fa-solid fa-pen");
            let btnVoir = document.createElement('div');
            btnVoir.setAttribute("class","fa-solid fa-eye")

            //CREATION DES COLOMUNS
            let td0 = document.createElement("td");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
            let td9 = document.createElement("td");
            let td10 = document.createElement("td");

            //
            td0.appendChild(checkbox);
            td1.appendChild(document.createTextNode(element.id));
            td2.appendChild(document.createTextNode(element.firstName));
            td3.appendChild(document.createTextNode(element.lastName));
            td4.appendChild(document.createTextNode(element.dateBirth));
            td5.appendChild(document.createTextNode(element.email));
            td6.appendChild(document.createTextNode(element.phone));
            td7.appendChild(document.createTextNode(element.sexe));
            td8.appendChild(btnModifier);
            td9.appendChild(btnSupprimer);
            td10.appendChild(btnVoir);


            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);

            tbody.appendChild(tr);
        });
    }




    let users = [];
    users = JSON.parse(localStorage.getItem("users")) || [];
    /*console.log(users)*/;
    display(users);

});
//<script>
function display(tableau){
    let tbody = document.getElementById("tbody");
    let block = "";

    /*PARCOURS DU TABLEAU*/
    tableau.forEach(element=>{
        let tr = document.createElement("tr");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        let btnSupprimer = document.createElement('div');
        btnSupprimer.setAttribute("class","fa-solid fa-trash");
        let btnModifier = document.createElement('div');
        btnModifier.setAttribute("class","fa-solid fa-pen");
        let btnVoir = document.createElement('div');
        btnVoir.setAttribute("class","fa-solid fa-eye")

        //CREATION DES COLOMUNS
        let td0 = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let td10 = document.createElement("td");

        //
        td0.appendChild(checkbox);
        td1.appendChild(document.createTextNode(element.id));
        td2.appendChild(document.createTextNode(element.firstName));
        td3.appendChild(document.createTextNode(element.lastName));
        td4.appendChild(document.createTextNode(element.dateBirth));
        td5.appendChild(document.createTextNode(element.email));
        td6.appendChild(document.createTextNode(element.phone));
        td7.appendChild(document.createTextNode(element.sexe));
        td8.appendChild(btnModifier);
        td9.appendChild(btnSupprimer);
        td10.appendChild(btnVoir);


        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);

        tbody.appendChild(tr);
    });
}
