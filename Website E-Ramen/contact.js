const button = document.getElementById("submit-button");

button.addEventListener("click", function() {
   const fullname = document.getElementById("fullname").value;
   if(fullname.length < 5) {
      alert("Username Error, Please input more Character.");
      return;
   }

   const email = document.getElementById("email").value;
   if(!email.endsWith('gmail.com')) {
      alert("Format Email Invalid");
      return;
   }

   const phone = document.getElementById("phone").value;
   if(phone.length < 1) {
      alert("Please Input your Phone ");
      return;
   }
   for(let i = 0; i < phone.length; i++) {
      if(phone[i] < '0' || phone[i] > '9') {
         alert("Invalid Phone Number");
         return;
      }
   }

   const ramen = document.getElementById("ramen");
   const dryRamen = document.getElementById("dry-ramen");
   if(!ramen.checked && !dryRamen.checked) {
      alert("Choose Your Ramen Preferences!");
      return;
   }

   const newspaper = document.getElementById("newspaper");
   if(!newspaper.checked) {
      alert("Agree to receive our newsletter");
      return;
   }

   alert("Thank you for Register your Account");
});