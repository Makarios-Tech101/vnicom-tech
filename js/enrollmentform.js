document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      // Get form input values
      const delivery_type = document.getElementById("delivery_type").value;
      const firstname = document.getElementById("firstname").value;
      const surname = document.getElementById("surname").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const location = document.getElementById("location").value;
      const program = document.getElementById("program").value;
  
      // Validate the form inputs
      const errors = isValid(delivery_type, firstname, surname, phone, email, location, program);
      if (Object.keys(errors).length > 0) {
        // Display error messages
        displayErrors(errors);
        return;
      }
  
      // Clear any previous error messages
      clearErrors();
  
      // Form Object
      const formData = {
        delivery_type,
        firstname,
        surname,
        phone,
        email,
        location,
        program,
        status:'Interested',
      };
  
      // Endpoint
      fetch("https://vnicomhub-sms.netlify.app/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
           
            showToast("Registration successful!", false);
            window.location.href = "index.html";
          } else {
            // Registration failed
           
            showToast("Registration failed. Please try again.", true);
            console.log(formData);
          
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        
        showToast("An error occurred while registering. Please try again later.", true);
        console.log(formData);
        });
    });
  
    
    function isValid(delivery_type, firstname, surname, phone, email, location, program) {
      const errors = {};
  
      // Check if all fields are non-empty
      if (!delivery_type) {
        errors.delivery_type = "Delivery type is required.";
      }
      if (!firstname) {
        errors.firstname = "First name is required.";
      }
     
      if (!surname) {
        errors.surname = "Surname is required.";
      }
      if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (phone.length < 10) {
    errors.phone = "Phone number should be 10 digits long.";
  }
      if (!email) {
        errors.email = "Email is required.";
      } else {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          errors.email = "Invalid email format.";
        }
      }
      if (!location) {
        errors.location = "Location is required.";
      }
      if (!program) {
        errors.program = "Program is required.";
      }
  
      return errors;
    }

    
  
    // Display error messages
    function displayErrors(errors) {
      clearErrors();
      for (const field in errors) {
        const errorElement = document.getElementById(`${field}-error`);
        errorElement.textContent = errors[field];
      }
    }
    // Clear error messages
    function clearErrors() {
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach((element) => {
        element.textContent = "";
      });
      
    }
  });
  

  



  
  
  function showToast(message, isError) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${isError ? 'error' : 'success'}`;
    toast.textContent = message;
  
    toastContainer.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add("show");
  
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 500); 
      }, 3000); 
    }, 100); 
  }
  
  