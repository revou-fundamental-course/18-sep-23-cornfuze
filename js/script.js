
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    function showNextImage() {
        sliderImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        sliderImages[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 3000); 

    const form = document.getElementById('form');
    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const ketertarikan = document.getElementById('ketertarikan');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        validateInputs();
    });
    
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        
        errorDisplay.innerText = message;
        inputControl.classList.add('error'); 
        inputControl.classList.remove('success');
    }
    
    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.remove('error');
        inputControl.classList.add('success');
    }
    
    const isEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    const validateInputs = () => {
        const namaValue = nama.value.trim();
        const emailValue = email.value.trim();
        const ketertarikanValue = ketertarikan.value;
    
        if (namaValue === '') {
            setError(nama, 'Nama tidak boleh kosong');
        } else {
            setSuccess(nama);
        }
    
        if (emailValue === '') {
            setError(email, 'Email tidak boleh kosong');
        } else if (!isEmail(emailValue)) {
            setError(email, 'Email tidak valid');
        } else {
            setSuccess(email);
        }
    
        if (ketertarikanValue === '') {
            setError(ketertarikan, 'Pilih salah satu ketertarikan');
        } else {
            setSuccess(ketertarikan);
        }
    }
    
    
