// Language Toggle Logic
export function initLanguage() {
    // Default is German - only switch to English if user has explicitly saved that preference
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        document.body.classList.add('english-mode');
    }
    // If no saved preference or savedLang is 'de', German is shown by default (no class needed)
}

export function toggleLanguage() {
    document.body.classList.toggle('english-mode');
    
    const isEnglish = document.body.classList.contains('english-mode');
    localStorage.setItem('language', isEnglish ? 'en' : 'de');
    
    // Update Chatbot Welcome if chat is initialized
    if (window.initChatWelcome) {
        window.initChatWelcome();
    }
}

