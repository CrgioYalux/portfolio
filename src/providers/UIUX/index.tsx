import { UIUX } from './types';

import { createContext, useContext, useState, useEffect } from 'react';
import { getSystemTheme, getSavedPreferences, savePreferences } from './helpers';

const Context = createContext<UIUX.Context>({} as UIUX.Context);

const UIUXContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<UIUX.Preferences>(() => {
        const savedPreferences = getSavedPreferences();
        const theme = savedPreferences?.theme ?? getSystemTheme();
        const language = savedPreferences?.language ?? 'english';
        savePreferences({ theme, language });
        return { theme, language };
    });

    useEffect(() => {
        savePreferences(preferences);
    }, [preferences.theme, preferences.language]);

    const switchTheme = (): void => {
        setPreferences((prev) => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
    };

    const switchLanguage = (): void => {
        setPreferences((prev) => ({ ...prev, language: preferences.language === 'english' ? 'spanish' : 'english' }));
    };

    const value: UIUX.UIUXContextValue = {
        theme: { current: preferences.theme, opposite: preferences.theme === 'dark' ? 'light' : 'dark', },
        language: { current: preferences.language, opposite: preferences.language === 'english' ? 'light' : 'dark', },
    };
    
    const action: UIUX.UIUXContextAction = {
        theme: { switch: switchTheme, },
        language: { switch: switchLanguage, },
    };

    const context: UIUX.Context = [value, action];

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
};

export default UIUXContextProvider;
export const useUIUX = () => useContext<UIUX.Context>(Context);
