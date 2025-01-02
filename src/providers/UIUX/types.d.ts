export namespace UIUX {
	namespace Theme {
		type Value = 'light' | 'dark';
	}

	namespace Language {
		type Value = 'english' | 'spanish';
	}

	type Preferences = {
		theme: Theme.Value;
		language: Language.Value;
	};

	interface UIUXContextValue {
		theme: {
			current: Theme.Value;
			opposite: Theme.Value;
		};
		language: {
			current: Language.Value;
			opposite: Language.Value;
		};
	}

	interface UIUXContextAction {
		theme: {
			switch: () => void;
		};
		language: {
			switch: () => void;
		};
	}

	type Context = readonly [
		value: UIUXContextValue,
		action: UIUXContextAction,
	];
}
