function resetDropdownIcons() {
  const dropdownIconsRev = document.querySelectorAll('.dropdown-icon-rev');  // All - icons
  dropdownIconsRev.forEach(icon => {
      icon.style.display = 'none';  // Hide the '-' icon
      const originalIcon = icon.parentElement.querySelector('.dropdown-icon');
      if (originalIcon) {
          originalIcon.style.display = 'inline';  // Show the '+' icon
      }
  });
  
  // Also close all dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown.show');
  allDropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });
}

function toggleDropdown(event) {
  event.stopPropagation();
  
  const icon = event.target;
  const revIcon = event.target.parentElement.querySelector('.dropdown-icon-rev');
  const dropdown = event.target.parentElement.querySelector('.dropdown');

  icon.style.display = 'none';
  revIcon.style.display = 'inline'; 

  dropdown.classList.toggle('show');
}

function toggleUp(event) {
  event.stopPropagation();
  
  const revIcon = event.target;
  const icon = event.target.parentElement.querySelector('.dropdown-icon');
  const dropdown = event.target.parentElement.querySelector('.dropdown');
  
  revIcon.style.display = 'none';
  icon.style.display = 'inline'; 

  dropdown.classList.toggle('show');
}

function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  const toggleIcon = document.querySelector('.navbar-toggle');
  const dropdownIcons = document.querySelectorAll('.dropdown-icon-rev');

  menu.classList.toggle('show');
  
  // Reset dropdown icons to default state when the hamburger menu is toggled
  resetDropdownIcons();

  if (menu.classList.contains('show')) {
      toggleIcon.innerHTML = '&times;';
  } else {
      toggleIcon.innerHTML = '&#9776;';
  }
}

// Reset dropdown icons when the page loads
document.addEventListener('DOMContentLoaded', function() {
  resetDropdownIcons();
});

// Listen for clicks on the window
window.onclick = function(event) {
  const dropdownToggle = event.target.closest('.dropdown-icon, .dropdown-icon-rev');
  const dropdown = event.target.closest('.dropdown');

  // Check if the click is outside the dropdown and its icons
  if (!dropdownToggle && !dropdown) {
    // Call the reset function to close any open dropdown
    resetDropdownIcons();
  }

  const menu = document.querySelector('.navbar-menu');
  const toggleIcon = document.querySelector('.navbar-toggle');

  // If the hamburger menu is open and the click is outside the menu or toggle icon
  if (menu.classList.contains('show') && !event.target.closest('.navbar-menu') && !event.target.closest('.navbar-toggle')) {
    // Close the menu and reset the toggle icon
    menu.classList.remove('show');
    toggleIcon.innerHTML = '&#9776;';  // Change back to the hamburger icon
    resetDropdownIcons(); // Close all submenus and reset icons when clicking outside
  }
};
