export namespace UIUX {
    namespace Theme {
        type Value = 'light' | 'dark';
    };

    namespace Language {
        type Value = 'english' | 'spanish';
    };

    type Preferences = {
        theme: Theme;
        language: Language;
    };

    interface UIUXContextValue {
        theme: {
            current: Theme;
            opposite: Theme;
        };
        language: {
            current: Value;
            opposite: Value;
        };
    };

    interface UIUXContextAction {
        theme: {
            switch: () => void;
        };
        language: {
            switch: () => void;
        };
    };

    type Context = readonly [
        value: UIUXContextValue,
        action: UIUXContextAction,
    ];
};
