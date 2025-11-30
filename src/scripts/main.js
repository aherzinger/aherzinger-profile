// Main initialization script
import { initTheme, toggleTheme } from './theme.js';
import { initLanguage, toggleLanguage } from './language.js';
import { filterProjects } from './projects.js';
import { initNavigation, toggleMobileMenu } from './navigation.js';
import { initScrollAnimations } from './animations.js';
// Chatbot - COMMENTED OUT FOR LATER USE
// import { toggleChat, sendMessage, initChatbot } from './chatbot.js';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initScrollAnimations();
    // initChatbot(); // COMMENTED OUT - chatbot HTML is hidden
});

// Make functions globally available for inline event handlers
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.filterProjects = filterProjects;
window.toggleMobileMenu = toggleMobileMenu;
// Chatbot functions - COMMENTED OUT FOR LATER USE
// window.toggleChat = toggleChat;
// window.sendMessage = sendMessage;

