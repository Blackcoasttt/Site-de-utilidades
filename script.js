document.getElementById('gerar-imagem-btn').addEventListener('click', function() {
    const sizeSelect = document.getElementById('size-select');
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].value;
  
    const imageInput = document.getElementById('image-input');
    const file = imageInput.files[0];
  
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const img = new Image();
  
      img.onload = function() {
        const cmToPx = function(cm) {
          const dpi = 96;
          return Math.round(cm * dpi / 2.54);
        };
  
        let width, height;
  
        if (selectedSize === '3x4') {
          const cmWidth = 3;
          const cmHeight = 4;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '5x9') {
          const cmWidth = 5;
          const cmHeight = 9;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '10x15') {
          const cmWidth = 10;
          const cmHeight = 15;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '6x9') {
          const cmWidth = 6;
          const cmHeight = 9;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '9x12') {
          const cmWidth = 9;
          const cmHeight = 12;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '13x18') {
          const cmWidth = 13;
          const cmHeight = 18;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '15x21') {
          const cmWidth = 15;
          const cmHeight = 21;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '20x30') {
          const cmWidth = 20;
          const cmHeight = 30;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        } else if (selectedSize === '30x45') {
          const cmWidth = 30;
          const cmHeight = 45;
          width = cmToPx(cmWidth);
          height = cmToPx(cmHeight);
        }
  
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = width;
        canvas.height = height;
  
        ctx.drawImage(img, 0, 0, width, height);
  
        const resizedImage = canvas.toDataURL('image/jpeg');
  
        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = ''; // Limpa o conteúdo anterior
        const imgElement = document.createElement('img');
        imgElement.src = resizedImage;
        imgElement.alt = 'Imagem Redimensionada';
        imageContainer.appendChild(imgElement);
      };
  
      img.onerror = function() {
        console.error('Erro ao carregar a imagem.');
      };
  
      img.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  });
  document.getElementById('image-input').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const imgPreview = document.getElementById('image-preview');
      imgPreview.style.backgroundImage = `url(${e.target.result})`;
    };
  
    reader.readAsDataURL(file);
  });
  const deepai = require('deepai');
