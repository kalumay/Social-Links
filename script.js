function toggleButtonColor(button) {
  const buttons = document.querySelectorAll('.button');
  const isActive = button.classList.contains('active');

  // If no button is active, or the clicked button is not active
  if (!isActive || isActive && buttons.length === 1) {
    buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    button.classList.add('active'); // Add 'active' class to the clicked button
  } else {
    button.classList.toggle('active'); // Toggle 'active' class for the clicked button
  }
}
