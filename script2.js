  function sendEmailNo() {
        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "parnasoreignjoshua@gmail.com",
    Password : "157FF7E4DA37CA98CCB3DE8ED382DF188317",
    To : 'reignjoshua.parnaso@unc.edu.ph',
    From : "parnasoreignjoshua@gmail.com",
    Subject : "Her Response",
    Body : "MAN DOWN! I REPEAT MAN DOWN!!"
}).then(
  message => 
    {
      Swal.fire("REIGN IS VERY SAD");
    }
    
    function sendEmailYes() {
        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "parnasoreignjoshua@gmail.com",
    Password : "157FF7E4DA37CA98CCB3DE8ED382DF188317",
    To : 'reignjoshua.parnaso@unc.edu.ph',
    From : "parnasoreignjoshua@gmail.com",
    Subject : "Her Response",
    Body : "DRESS UP, SHE SAID YES!!!"
}).then(
  message => 
    {
      Swal.fire("REIGN IS VERY HAPPY");
    }

   
    
