import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import ScrollReveal from 'scrollreveal';

// Inisialisasi ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 700,
});

// Menerapkan animasi ke semua elemen <section>
sr.reveal('.seksikepsek', {
    delay: 500,
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

// Kamu juga bisa menambahkan animasi spesifik lainnya di sini
// sr.reveal('.headline');

