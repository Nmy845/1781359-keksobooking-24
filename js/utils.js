const ALERT_TIME = 3000;

function showError(text) {
  const errorContainer = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorContainer.appendChild(errorMessage);
  errorMessage.textContent = text;
  errorContainer.style.position = 'fixed';
  errorContainer.style.width = '100%';
  errorContainer.style.height = '40px';
  errorContainer.style.backgroundColor = '#FFCDD2';
  errorContainer.style.color = '#BF360C';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.zIndex = '1000';
  errorMessage.style.margin = '10px';

  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  },
  ALERT_TIME);
}

export {showError};
