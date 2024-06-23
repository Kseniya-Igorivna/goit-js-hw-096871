import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
email: '',
message: ''
};

document.addEventListener('DOMContentLoaded', () => {
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
}
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
event.preventDefault();

if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
}

console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
});