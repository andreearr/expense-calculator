 var productObject = {};

/* Define function to reset chart */
 function resetChart() {
     productObject = {};
     document.getElementById('list').innerHTML = '';
     document.getElementById('chart').innerHTML = '';
     document.getElementById('total').innerHTML = '';
 }
 
 function validate(){
    if (document.forms.contact.firstname.value == '') {
         alert('Please insert your first name!')
         return false;
      }
      if (document.forms.contact.lastname.value == '') {
         alert('Please insert your last name!')
         return false;
      }
      if(document.forms.contact.useful.value == '') {
         alert('Please answer the question!')
         return false;
      }
      if (document.forms.contact.message.value == '') {
         alert('Don\'t forget to type the message!')
         return false;
      }
    alert('Thank you for your message, ' + document.forms.contact.firstname.value + '!');

    document.forms.contact.firstname.value ='';
    document.forms.contact.lastname.value = ''; 
    document.forms.contact.useful.value = '';
    document.forms.contact.message.value = '';
 }

/* Define function to create chart */

 function doChart() {
     var productCategory = [];
     var productPrice = [];
     var total = 0;
     var cat = document.forms[0].cat.value;

/* Validation of forms */
      if (document.forms[0].name.value == '') {
         alert('Please insert an item name!')
         return;
      }
      if (document.forms[0].price.value == ''  || document.forms[0].price.value <= 0){
        alert('Please insert an appropriate value for the price!')
        return;
      }
     
/* If the category does not exist in productObject, it is created with price=0, and added */
     if (!productObject[cat]) {
         productObject[cat] = 0;
     }
/* Price is transformed in integer */  
     productObject[cat] += parseInt(document.forms[0].price.value);

/* Creating product category and product price arrays, required by chartist library for chart */ 
     for (var cat in productObject) {
         productCategory.push(cat);
         productPrice.push(productObject[cat]);
         total += productObject[cat];
     }

    var data = {
         labels: productCategory,
         series: productPrice
     };
/* Drawing the chart using the created arrays*/  
     new Chartist.Pie('#chart', data);
  
/* Adding the list elements*/
     document.getElementById('list').innerHTML += '<li>' 
            + cat + ' - ' 
            + document.forms[0].name.value 
            + ', ' + document.forms[0].price.value;

/* Computing the total price*/
     document.getElementById('total').innerHTML = 'Total: ' + total;
     document.forms[0].price.value = '';
      document.forms[0].name.value = '';
 
 
 }