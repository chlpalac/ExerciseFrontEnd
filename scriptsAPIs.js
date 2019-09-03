const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(user => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

	var userID = user.userId;
	  

	var request2 = new XMLHttpRequest();
	var contenidosRecibidos = new Array();
	var userName;
	var url;
	
	request2.open('GET', 'https://jsonplaceholder.typicode.com/users?id='+userID, true);
	request2.onload = function () {
	
	contenidosRecibidos = request2.responseText.split(",");
	userName= contenidosRecibidos[1];
	contenidosRecibidos = userName.split(":");
	userName = contenidosRecibidos[1];
	//userName = userName.replace("\"\"", "");

	  
	url = 'https://joeschmoe.io/api/v1/'+userName;
	
	const logo = document.createElement('img');
	logo.src = url;
	
	const h1 = document.createElement('h1');
    h1.textContent = userName;

	card.appendChild(logo);
	card.appendChild(h1);
	
	const p = document.createElement('p');
    user.body = user.body.substring(0, 300);
    p.textContent = `${user.body}...`;
    card.appendChild(p);
	
    container.appendChild(card);

	}
	 request2.send();

    });
  } 
}

request.send();