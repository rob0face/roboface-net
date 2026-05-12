/* Angular */
import { Injectable, signal } from '@angular/core';
/* Constants */
export const SUPPORTED_LANGUAGES = ['ko', 'en'];
export const LANGUAGE_SPEC = {
    ko: { name: '한국어', default: true, translationStatus: '100%', translationStatusWarning: '' },
    en: { name: 'English', default: false, translationStatus: '0%', translationStatusWarning: 'Please mind that this website is not fully translated to this language. Feedbacks are welcome.' }
};
export const TRANSLATION_APP = {
    headerHome: { ko: '홈', en: 'Home' },
    headerAbout: { ko: '소개', en: 'About' },
    headerRecent: { ko: '근황', en: 'Recent' },
    headerDesign: { ko: '디자인', en: 'Design' },
    headerLanguage: { ko: '언어/Language', en: 'Language' },
    footerCopyright: { ko: '2026 (c) 건중 Dave Lee.', en: '2026 (c) G. Dave Lee.' },
    footerCopyrightNotice: { ko: '모든 권리 보유.', en: 'All rights reserved.' },
    footerRepo: { ko: 'GitHub 리포지토리', en: 'GitHub Repository' }
};

@Injectable({
    providedIn: 'root'
})
export class I18n {
    language = signal('ko');
}