import type { UIUX } from "./types";

function getSystemTheme(): UIUX.Theme.Value {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) return 'dark';
    return 'light';
}

function savePreferences(payload: UIUX.Preferences) {
    const lang = payload.language === 'english' ? 'en' : 'es';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.className = payload.theme;
    localStorage.setItem('preferences', JSON.stringify(payload));
}

function getSavedPreferences(): UIUX.Preferences | null {
    const preferences = localStorage.getItem('preferences');
    
    if (preferences === null) return null;

    const parsed = JSON.parse(preferences);
    return parsed;
}

export { getSystemTheme, savePreferences, getSavedPreferences, };
