// const scrollContainer = document.getElementById("scrollContainer");
// const nextBtn = document.getElementById("nextBtn");
// const sections = scrollContainer.querySelectorAll("section")

// let currentSection = 0;

// nextBtn.addEventListener("click", () => {
//  if(currentSection < sections.length - 1){
//     currentSection++;
//     scrollContainer.scrollTo({
//         left: sections[currentSection].offsetLeft,
//         behavior: "smooth"
//     })

//  } 
// })

// const scrollContainer = document.getElementById("scrollContainer");
// const nextBtn = document.getElementById("nextBtn");
// const sections = scrollContainer.querySelectorAll("section");
// const aboutText = document.getElementById("aboutText"); // ✅ NEW

// let currentSection = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentSection < sections.length - 1) {
//     currentSection++;
//     scrollContainer.scrollTo({
//       left: sections[currentSection].offsetLeft,
//       behavior: "smooth"
//     });

//     // ✅ NEW: Show About text when we reach the About section
//     if (sections[currentSection].id === "about") {
//       aboutText.style.display = "block";
//     }
//   }
// });


// const scrollContainer = document.getElementById("scrollContainer");
// const nextBtn = document.getElementById("nextBtn");
// const sections = scrollContainer.querySelectorAll("section");
// const aboutText = document.getElementById("aboutText");
// const homeText = document.querySelector(".main"); // ✅ select the home text

// let currentSection = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentSection < sections.length - 1) {
//     currentSection++;
//     scrollContainer.scrollTo({
//       left: sections[currentSection].offsetLeft,
//       behavior: "smooth"
//     });

//     // ✅ Show About text when About section is active
//     if (sections[currentSection].id === "about") {
//       aboutText.style.display = "block";
//     }

//     // ✅ Hide Home text once you're not on the Home section
//     if (sections[currentSection].id !== "home") {
//       homeText.classList.add("hidden");
//     }
//   }
// });


// const scrollContainer = document.getElementById("scrollContainer");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");   // NEW
// const sections = scrollContainer.querySelectorAll("section");
// const aboutText = document.getElementById("aboutText");
// const homeText = document.querySelector(".main");

// let currentSection = 0;

// function updateView() {
//   scrollContainer.scrollTo({
//     left: sections[currentSection].offsetLeft,
//     behavior: "smooth"
//   });

//   // Show/hide About text
//   if (sections[currentSection].id === "about") {
//     aboutText.style.display = "block";
//   } else {
//     aboutText.style.display = "none";
//   }

//   // Show/hide Home text
//   if (sections[currentSection].id === "home") {
//     homeText.classList.remove("hidden");
//   } else {
//     homeText.classList.add("hidden");
//   }
// }

// // Next button click
// nextBtn.addEventListener("click", () => {
//   if (currentSection < sections.length - 1) {
//     currentSection++;
//     updateView();
//   }
// });

// // Previous button click
// prevBtn.addEventListener("click", () => {
//   if (currentSection > 0) {
//     currentSection--;
//     updateView();
//   }
// });

// // Initial setup: Hide about text on page load
// aboutText.style.display = "none";



// const scrollContainer = document.getElementById("scrollContainer");
// const sections = document.querySelectorAll("section");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const mainText = document.getElementById("mainText");
// const aboutSection = document.getElementById("about");

// let currentIndex = 0;

// // Scroll to section by index
// function scrollToSection(index) {
//   if (index >= 0 && index < sections.length) {
//     sections[index].scrollIntoView({ behavior: "smooth" });
//     currentIndex = index;
//   }
// }

// // Button event listeners
// nextBtn.addEventListener("click", () => {
//   scrollToSection(currentIndex + 1);
// });

// prevBtn.addEventListener("click", () => {
//   scrollToSection(currentIndex - 1);
// });

// // Hide home text when About is in view
// scrollContainer.addEventListener("scroll", () => {
//   const scrollPosition = scrollContainer.scrollLeft;
//   const aboutOffset = aboutSection.offsetLeft;

//   if (scrollPosition >= aboutOffset - 100) {
//     mainText.classList.add("hidden");
//   } else {
//     mainText.classList.remove("hidden");
//   }
// });



const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const mainText = document.querySelector('.main');
const aboutSection = document.querySelector('.about');
const homeSection = document.querySelector('.home');
const projectSections = document.querySelectorAll('.project');
const skillsSection = document.querySelector('.skills');

let currentSectionIndex = 0;

// Function to update button visibility
function updateButtonVisibility() {
  // Hide previous button on home page (first section)
  if (currentSectionIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
  
  // Hide next button on last section
  if (currentSectionIndex === sections.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

// Scroll to section by index
function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSectionIndex = index;
    updateButtonVisibility();
  }
}

// Button navigation
nextBtn.addEventListener("click", () => {
  scrollToSection(currentSectionIndex + 1);
});

prevBtn.addEventListener("click", () => {
  scrollToSection(currentSectionIndex - 1);
});

// Update scroll event listener

scrollContainer.addEventListener('scroll', () => {
  const scrollPosition = scrollContainer.scrollLeft;
  const windowWidth = window.innerWidth;
  
  // Update current section index
  currentSectionIndex = Math.round(scrollPosition / windowWidth);
  
  // Handle visibility for all sections
  sections.forEach((section, index) => {
    if (index === currentSectionIndex) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
  
  updateButtonVisibility();
});

// Initialize section visibility and button state
window.addEventListener("load", () => {
  // Show first section initially
  sections[0].classList.add("visible");
  // Set initial button visibility
  updateButtonVisibility();
  
  // Add animation to certification items
  const certificationItems = document.querySelectorAll('.certification-item');
  certificationItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    // Add animation with delay for each item
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 300 * index);
  });
});

// Add hover effect for certification items
document.querySelectorAll('.certification-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-5px)';
    item.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.2)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
    item.style.boxShadow = 'none';
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

// Debug: Check if form is found
console.log('Contact form found:', contactForm);

// Add real-time validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Debug: Check if inputs are found
console.log('Name input found:', nameInput);
console.log('Email input found:', emailInput);
console.log('Message input found:', messageInput);

// Real-time validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateMessage(message) {
  return message.trim().length >= 10;
}

// Add validation feedback
function showError(input, message) {
  const formGroup = input.parentElement;
  let errorElement = formGroup.querySelector('.error-message');
  
  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ff4444';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';
    formGroup.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
  input.style.borderColor = '#ff4444';
}

function clearError(input) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.error-message');
  
  if (errorElement) {
    errorElement.remove();
  }
  input.style.borderColor = '';
}

// Real-time validation listeners
if (nameInput) {
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
      clearError(nameInput);
    } else if (!validateName(nameInput.value)) {
      showError(nameInput, 'Name must be at least 2 characters long');
    } else {
      clearError(nameInput);
    }
  });
}

if (emailInput) {
  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
      clearError(emailInput);
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
    } else {
      clearError(emailInput);
    }
  });
}

if (messageInput) {
  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() === '') {
      clearError(messageInput);
    } else if (!validateMessage(messageInput.value)) {
      showError(messageInput, 'Message must be at least 10 characters long');
    } else {
      clearError(messageInput);
    }
  });
}

// Form submission with improved validation
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    console.log('Form submit event triggered!');
    e.preventDefault();
    
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';
    
    console.log('Form values:', { name, email, message });
    
    // Clear any existing errors
    if (nameInput) clearError(nameInput);
    if (emailInput) clearError(emailInput);
    if (messageInput) clearError(messageInput);
    
    let isValid = true;
    
    // Validate name
    if (!name) {
      if (nameInput) showError(nameInput, 'Name is required');
      isValid = false;
    } else if (!validateName(name)) {
      if (nameInput) showError(nameInput, 'Name must be at least 2 characters long');
      isValid = false;
    }
    
    // Validate email
    if (!email) {
      if (emailInput) showError(emailInput, 'Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      if (emailInput) showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate message
    if (!message) {
      if (messageInput) showError(messageInput, 'Message is required');
      isValid = false;
    } else if (!validateMessage(message)) {
      if (messageInput) showError(messageInput, 'Message must be at least 10 characters long');
      isValid = false;
    }
    
    console.log('Validation result:', isValid);
    
    // If validation passes, submit the form
    if (isValid) {
      console.log('Form is valid, showing success message...');
      
      // Here you would typically send the form data to a server
      // For now, we'll just log it and show a success message
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Clear the form
      contactForm.reset();
      
      // Clear any error styling
      [nameInput, emailInput, messageInput].forEach(input => {
        if (input) input.style.borderColor = '';
      });
    } else {
      console.log('Form validation failed');
    }
  });
  
  console.log('Form submit event listener attached successfully');
} else {
  console.error('Contact form not found!');
}
