import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

// MyMemory : gratuit, sans clé, 1000 mots/jour
const translateText = async (text: string, target: "en" | "fr"): Promise<string> => {
    if (!text.trim()) return text;
    try {
        const langPair = target === "en" ? "fr|en" : "en|fr";
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
        const res = await fetch(url);
        if (!res.ok) return text;
        const data = await res.json();
        return data.responseData?.translatedText ?? text;
    } catch {
        return text;
    }
};

type Lang = "FR" | "EN";

interface LangContextType {
    lang: Lang;
    toggleLang: () => void;
    t: (text: string) => string;
    loading: boolean;
}

const LangContext = createContext<LangContextType>({
    lang: "FR",
    toggleLang: () => {},
    t: (text) => text,
    loading: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("FR");
    const [loading, setLoading] = useState(false);
    const cache = useRef<Record<string, string>>({});
    const [translations, setTranslations] = useState<Record<string, string>>({});
    const allTexts = useRef<Set<string>>(new Set());

    // t() — enregistre le texte FR et retourne la traduction si dispo
    const t = useCallback((text: string): string => {
        allTexts.current.add(text);
        return translations[text] ?? text;
    }, [translations]);

    const translateAll = useCallback(async (target: "en" | "fr") => {
        if (target === "fr") {
            setTranslations({});
            return;
        }

        setLoading(true);

        // Petit délai pour laisser React finir le rendu et enregistrer tous les t()
        await new Promise((r) => setTimeout(r, 50));

        const texts = [...allTexts.current];

        const results = await Promise.all(
            texts.map(async (text) => {
                const cacheKey = `${text}__${target}`;
                if (cache.current[cacheKey]) {
                    return [text, cache.current[cacheKey]] as [string, string];
                }
                const translated = await translateText(text, target);
                cache.current[cacheKey] = translated;
                return [text, translated] as [string, string];
            })
        );

        setTranslations(Object.fromEntries(results));
        setLoading(false);
    }, []);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === "FR" ? "EN" : "FR";
            translateAll(next === "EN" ? "en" : "fr");
            return next;
        });
    }, [translateAll]);

    return (
        <LangContext.Provider value={{ lang, toggleLang, t, loading }}>
            {children}
        </LangContext.Provider>
    );
}

export const useLang = () => useContext(LangContext);