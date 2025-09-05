// Menjalankan script setelah seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Fungsionalitas untuk Mobile Menu (Hamburger) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Menambahkan event listener 'click' pada tombol menu
    mobileMenuButton.addEventListener('click', function() {
        // Toggle class 'hidden' untuk menampilkan/menyembunyikan menu
        mobileMenu.classList.toggle('hidden');
    });

    // --- Fungsionalitas untuk FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // Menambahkan event listener 'click' pada setiap pertanyaan
        question.addEventListener('click', () => {
            // Cek apakah item yang diklik sudah aktif
            const isActive = item.classList.contains('active');
            
            // Tutup semua item lain yang mungkin terbuka
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Jika item yang diklik sebelumnya tidak aktif, maka buka
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
