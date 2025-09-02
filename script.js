// 99 Names of Allah Data
const allahNames = [
    { arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", meaning: "The Most Gracious" },
    { arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", meaning: "The Most Merciful" },
    { arabic: "الْمَلِكُ", transliteration: "Al-Malik", meaning: "The King" },
    { arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "The Most Sacred" },
    { arabic: "السَّلاَمُ", transliteration: "As-Salaam", meaning: "The Source of Peace" },
    { arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "The Guardian of Faith" },
    { arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Protector" },
    { arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaning: "The Mighty" },
    { arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller" },
    { arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "The Supreme" },
    { arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator" },
    { arabic: "الْبَارِئُ", transliteration: "Al-Bari", meaning: "The Maker" },
    { arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner" },
    { arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The Great Forgiver" },
    { arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The Subduer" },
    { arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Bestower" },
    { arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider" },
    { arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Opener" },
    { arabic: "اَلْعَلِيْمُ", transliteration: "Al-Aleem", meaning: "The All-Knowing" },
    { arabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Constrictor" },
    { arabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Extender" },
    { arabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Abaser" },
    { arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaning: "The Exalter" },
    { arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", meaning: "The Honorer" },
    { arabic: "الْمُذِلُّ", transliteration: "Al-Mudhill", meaning: "The Humiliator" },
    { arabic: "السَّمِيعُ", transliteration: "As-Samee", meaning: "The All-Hearing" },
    { arabic: "الْبَصِيرُ", transliteration: "Al-Baseer", meaning: "The All-Seeing" },
    { arabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Judge" },
    { arabic: "الْعَدْلُ", transliteration: "Al-Adl", meaning: "The Just" },
    { arabic: "اللَّطِيفُ", transliteration: "Al-Lateef", meaning: "The Gentle" },
    { arabic: "الْخَبِيرُ", transliteration: "Al-Khabeer", meaning: "The Aware" },
    { arabic: "الْحَلِيمُ", transliteration: "Al-Haleem", meaning: "The Forbearing" },
    { arabic: "الْعَظِيمُ", transliteration: "Al-Azeem", meaning: "The Magnificent" },
    { arabic: "الْغَفُورُ", transliteration: "Al-Ghafoor", meaning: "The Forgiving" },
    { arabic: "الشَّكُورُ", transliteration: "Ash-Shakoor", meaning: "The Appreciative" },
    { arabic: "الْعَلِيُّ", transliteration: "Al-Ali", meaning: "The Most High" },
    { arabic: "الْكَبِيرُ", transliteration: "Al-Kabeer", meaning: "The Most Great" },
    { arabic: "الْحَفِيظُ", transliteration: "Al-Hafeedh", meaning: "The Preserver" },
    { arabic: "الْمُقِيتُ", transliteration: "Al-Muqeet", meaning: "The Nourisher" },
    { arabic: "الْحسِيبُ", transliteration: "Al-Haseeb", meaning: "The Reckoner" },
    { arabic: "الْجَلِيلُ", transliteration: "Al-Jaleel", meaning: "The Majestic" },
    { arabic: "الْكَرِيمُ", transliteration: "Al-Kareem", meaning: "The Generous" },
    { arabic: "الرَّقِيبُ", transliteration: "Ar-Raqeeb", meaning: "The Watchful" },
    { arabic: "الْمُجِيبُ", transliteration: "Al-Mujeeb", meaning: "The Responsive" },
    { arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", meaning: "The All-Encompassing" },
    { arabic: "الْحَكِيمُ", transliteration: "Al-Hakeem", meaning: "The Wise" },
    { arabic: "الْوَدُودُ", transliteration: "Al-Wadood", meaning: "The Loving" },
    { arabic: "الْمَجِيدُ", transliteration: "Al-Majeed", meaning: "The Glorious" },
    { arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "The Resurrector" },
    { arabic: "الشَّهِيدُ", transliteration: "Ash-Shaheed", meaning: "The Witness" },
    { arabic: "الْحَقُّ", transliteration: "Al-Haqq", meaning: "The Truth" },
    { arabic: "الْوَكِيلُ", transliteration: "Al-Wakeel", meaning: "The Trustee" },
    { arabic: "الْقَوِيُّ", transliteration: "Al-Qawiyy", meaning: "The Strong" },
    { arabic: "الْمَتِينُ", transliteration: "Al-Mateen", meaning: "The Firm" },
    { arabic: "الْوَلِيُّ", transliteration: "Al-Waliyy", meaning: "The Friend" },
    { arabic: "الْحَمِيدُ", transliteration: "Al-Hameed", meaning: "The Praiseworthy" },
    { arabic: "الْمُحْصِي", transliteration: "Al-Muhsi", meaning: "The Counter" },
    { arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", meaning: "The Originator" },
    { arabic: "الْمُعِيدُ", transliteration: "Al-Mu'eed", meaning: "The Restorer" },
    { arabic: "الْمُحْيِي", transliteration: "Al-Muhyi", meaning: "The Giver of Life" },
    { arabic: "اَلْمُمِيتُ", transliteration: "Al-Mumeet", meaning: "The Bringer of Death" },
    { arabic: "الْحَيُّ", transliteration: "Al-Hayy", meaning: "The Living" },
    { arabic: "الْقَيُّومُ", transliteration: "Al-Qayyoom", meaning: "The Sustainer" },
    { arabic: "الْوَاجِدُ", transliteration: "Al-Wajid", meaning: "The Finder" },
    { arabic: "الْمَاجِدُ", transliteration: "Al-Majid", meaning: "The Noble" },
    { arabic: "الْواحِدُ", transliteration: "Al-Wahid", meaning: "The Unique" },
    { arabic: "اَلاَحَدُ", transliteration: "Al-Ahad", meaning: "The One" },
    { arabic: "الصَّمَدُ", transliteration: "As-Samad", meaning: "The Eternal" },
    { arabic: "الْقَادِرُ", transliteration: "Al-Qadir", meaning: "The Capable" },
    { arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "The Powerful" },
    { arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "The Expediter" },
    { arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", meaning: "The Delayer" },
    { arabic: "الأوَّلُ", transliteration: "Al-Awwal", meaning: "The First" },
    { arabic: "الآخِرُ", transliteration: "Al-Akhir", meaning: "The Last" },
    { arabic: "الظَّاهِرُ", transliteration: "Az-Zahir", meaning: "The Manifest" },
    { arabic: "الْبَاطِنُ", transliteration: "Al-Batin", meaning: "The Hidden" },
    { arabic: "الْوَالِي", transliteration: "Al-Wali", meaning: "The Governor" },
    { arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'ali", meaning: "The Most Exalted" },
    { arabic: "الْبَرُّ", transliteration: "Al-Barr", meaning: "The Source of Goodness" },
    { arabic: "التَّوَابُ", transliteration: "At-Tawwab", meaning: "The Acceptor of Repentance" },
    { arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "The Avenger" },
    { arabic: "العَفُوُّ", transliteration: "Al-Afuww", meaning: "The Pardoner" },
    { arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'oof", meaning: "The Compassionate" },
    { arabic: "مَالِكُ الْمُلْكِ", transliteration: "Malik-ul-Mulk", meaning: "Master of the Kingdom" },
    { arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ", transliteration: "Dhul-Jalali Wal-Ikram", meaning: "Lord of Majesty and Bounty" },
    { arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "The Equitable" },
    { arabic: "الْجَامِعُ", transliteration: "Al-Jami", meaning: "The Gatherer" },
    { arabic: "الْغَنِيُّ", transliteration: "Al-Ghaniyy", meaning: "The Independent" },
    { arabic: "الْمُغْنِي", transliteration: "Al-Mughni", meaning: "The Enricher" },
    { arabic: "الْمَانِعُ", transliteration: "Al-Mani'", meaning: "The Preventer" },
    { arabic: "الضَّارَّ", transliteration: "Ad-Darr", meaning: "The Distresser" },
    { arabic: "النَّافِعُ", transliteration: "An-Nafi'", meaning: "The Benefactor" },
    { arabic: "النُّورُ", transliteration: "An-Nur", meaning: "The Light" },
    { arabic: "الْهَادِي", transliteration: "Al-Hadi", meaning: "The Guide" },
    { arabic: "الْبَدِيعُ", transliteration: "Al-Badi", meaning: "The Incomparable" },
    { arabic: "الْبَاقِي", transliteration: "Al-Baqi", meaning: "The Everlasting" },
    { arabic: "الْوَارِثُ", transliteration: "Al-Warith", meaning: "The Inheritor" },
    { arabic: "الرَّشِيدُ", transliteration: "Ar-Rasheed", meaning: "The Guide to Right Path" },
    { arabic: "الصَّبُورُ", transliteration: "As-Saboor", meaning: "The Patient" }
];

// Application State
let currentPage = 1;
const itemsPerPage = 10;
let filteredNames = [...allahNames];
let currentSort = 'default';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    prevBtn.addEventListener('click', goToPreviousPage);
    nextBtn.addEventListener('click', goToNextPage);
    searchInput.addEventListener('input', handleSearch);
    sortSelect.addEventListener('change', handleSort);
    closeModal.addEventListener('click', closeProductModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProductModal();
        }
    });
}

// Render products for current page
function renderProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredNames.slice(startIndex, endIndex);
    
    // Show loading animation
    productGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    // Simulate loading delay for smooth animation
    setTimeout(() => {
        productGrid.innerHTML = '';
        
        currentItems.forEach((name, index) => {
            const actualIndex = startIndex + index + 1;
            const productCard = createProductCard(name, actualIndex);
            productGrid.appendChild(productCard);
            
            // Add fade-in animation with staggered delay
            setTimeout(() => {
                productCard.classList.add('fade-in');
            }, index * 100);
        });
        
        updatePaginationInfo();
        updateNavigationButtons();
    }, 300);
}

// Create individual product card
function createProductCard(name, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-number">${index}</div>
        <div class="product-title">Name ${index}</div>
        <div class="product-arabic">${name.arabic}</div>
        <div class="product-transliteration">${name.transliteration}</div>
        <div class="product-meaning">"${name.meaning}"</div>
        <div class="product-info">
            <div class="product-owner">By Khansa Younas</div>
            <div class="product-price">$100</div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => openProductModal(name, index));
    
    return card;
}

// Open product modal
function openProductModal(name, index) {
    document.getElementById('modalTitle').textContent = `Name ${index}`;
    document.getElementById('modalArabic').textContent = name.arabic;
    document.getElementById('modalTransliteration').textContent = name.transliteration;
    document.getElementById('modalMeaning').textContent = name.meaning;
    document.getElementById('modalOwner').textContent = 'Khansa Younas';
    document.getElementById('modalPrice').textContent = '$100';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close product modal
function closeProductModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Navigation functions
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(filteredNames.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
    }
}

// Update pagination information
function updatePaginationInfo() {
    const totalPages = Math.ceil(filteredNames.length / itemsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Update navigation button states
function updateNavigationButtons() {
    const totalPages = Math.ceil(filteredNames.length / itemsPerPage);
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredNames = [...allahNames];
    } else {
        filteredNames = allahNames.filter(name => 
            name.transliteration.toLowerCase().includes(searchTerm) ||
            name.meaning.toLowerCase().includes(searchTerm) ||
            name.arabic.includes(searchTerm)
        );
    }
    
    // Apply current sort to filtered results
    applySorting();
    
    // Reset to first page
    currentPage = 1;
    renderProducts();
}

// Sort functionality
function handleSort(event) {
    currentSort = event.target.value;
    applySorting();
    currentPage = 1;
    renderProducts();
}

// Apply sorting to current filtered names
function applySorting() {
    switch (currentSort) {
        case 'alphabetical':
            filteredNames.sort((a, b) => a.transliteration.localeCompare(b.transliteration));
            break;
        case 'reverse':
            filteredNames.sort((a, b) => b.transliteration.localeCompare(a.transliteration));
            break;
        case 'default':
        default:
            // Reset to original order based on allahNames array
            const originalOrder = allahNames.map(name => name.transliteration);
            filteredNames.sort((a, b) => {
                return originalOrder.indexOf(a.transliteration) - originalOrder.indexOf(b.transliteration);
            });
            break;
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'block') {
        if (event.key === 'Escape') {
            closeProductModal();
        }
        return;
    }
    
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (!prevBtn.disabled) goToPreviousPage();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (!nextBtn.disabled) goToNextPage();
    }
});

// Add smooth scrolling to top when changing pages
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Override navigation functions to include scroll to top
const originalGoToPreviousPage = goToPreviousPage;
const originalGoToNextPage = goToNextPage;

goToPreviousPage = function() {
    originalGoToPreviousPage();
    scrollToTop();
};

goToNextPage = function() {
    originalGoToNextPage();
    scrollToTop();
};
