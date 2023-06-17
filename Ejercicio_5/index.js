let diaSemana = prompt("Indica un día de la semana").toUpperCase();

if(diaSemana == 'DOMINGO'){
    alert("Ve a descansar");
}else{
    while (diaSemana != 'DOMINGO') {

        if (diaSemana == 'LUNES'){
            alert("Hola mundo es hoy es: " + diaSemana);  
        }else if (diaSemana == 'VIERNES'){
            alert("Ya estamos a " + diaSemana + " Siiii!!!");
        }else if (diaSemana == 'SABADO') {
            alert("Llego el momento de descansar porque hoy es " +  diaSemana);
        }else{
            alert(`hoy va a ser un gran día, hoy es ${diaSemana}`);
        }

        diaSemana = prompt("Indica un día de la semana").toUpperCase();
        if(diaSemana == 'DOMINGO'){
            alert("Ve a descansar");
        }
    }
}