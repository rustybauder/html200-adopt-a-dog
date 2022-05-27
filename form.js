let info = [];
const form = document.querySelector('checkout');
const submit = document.getElementById("submit");

function submitEvent() {
	event.preventDefault();
	info.push(document.getElementById('name').value);
	info.push(document.getElementById('email').value);
	info.push(document.getElementById('tel').value);
  info.push(document.getElementById('address').value);
	info.push(document.getElementById('city').value);
	info.push(document.getElementById('state').value);
	info.push(document.getElementById('zip').value);
	info.push(document.querySelector('input[name="first_time"]:checked').value);
	info.push(document.getElementById('pickup').value);
	info.push(document.getElementById('checkbox').value);
	console.log(info);
	alert("Thank you. The form information has been received");
}
