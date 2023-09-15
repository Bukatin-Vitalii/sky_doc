import ua from '@/plugins/localization/ua.js';
import en from '@/plugins/localization/en.js';

export default defineI18nConfig(() => {
	return {
		legacy: false,
		locale: 'ua',
		fallbackLocale: 'ua',
		messages: {
			en,
			ua,
		},
	};
});