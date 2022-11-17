function showTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM" 

	if(h==0){
		h=12;
	}

	if(h>12){
		h = h - 12;
		session = "PM";
	}

	h = (h<10) ? "0" + h : h;
	m = (m<10) ? "0" + m : m;
	s = (s<10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerHTML = time;
	document.getElementById("MyClockDisplay").textContent = time;

	setTimeout(showTime, 1000);
}		

	showTime();

   
    var agora = new Date();
    var diaSem = agora.getDay();

switch (diaSem) {
    case 0:
        document.write('Domingo')
        break
    case 1:
        document.write('Segunda-Feira')
        break    
    case 2:
        document.write('Terça-Feira')
        break 
    case 3:
        document.write('Quarta-Feira')
        break     
    case 4:
        document.write('Quinta-Feira')
        break    
    case 5:
        document.write('Sexta-Feira')
        break 
    case 6:
        document.write('Sábado')
        break     
    default:
        document.write('[ERRO] Dia inválido!!')
        break
}



