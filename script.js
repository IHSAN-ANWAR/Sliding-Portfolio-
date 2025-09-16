// script.js

// Select DOM elements
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
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


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
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
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
