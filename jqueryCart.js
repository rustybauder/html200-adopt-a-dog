 $("form").submit(function( event ) {
  event.preventDefault();
  let x = document.getElementById('checkout').elements;
  console.log("Name: ", x['name'].value);
  console.log("Email: ", x['email'].value);
  console.log("Phone: ", x['tel'].value);
  console.log("Address: ", x['address'].value);
  console.log("City: ", x['city'].value);
  console.log("State: ", x['state'].value);
  console.log("Zip Code: ", x['zip'].value);
  console.log("First Time Adopter: ", x['checkbox'].value);
  console.log("Pickup Location: ", x['pickup'].value);
});
