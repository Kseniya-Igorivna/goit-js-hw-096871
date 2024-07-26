
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-list-ul .list-faq');

    faqItems.forEach(item => {
    const question = item.querySelector('.title-list');
    const toggleBtn = item.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
        const answer = item.querySelector('.text-faq');
        const isOpen = answer.style.display === 'block';
        closeAllAnswers();
        if (!isOpen) {
        answer.style.display = 'block';
        item.setAttribute('aria-expanded', 'true');
        }
    });
    });

    function closeAllAnswers() {
    faqItems.forEach(item => {
        const answer = item.querySelector('.text-faq');
        answer.style.display = 'none';
        item.setAttribute('aria-expanded', 'false');
    });
    }
});
