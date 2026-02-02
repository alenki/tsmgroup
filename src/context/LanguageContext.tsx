import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

export type Lang = 'en' | 'ar';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  dir: 'ltr',
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('tsm-lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('tsm-lang', newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}
