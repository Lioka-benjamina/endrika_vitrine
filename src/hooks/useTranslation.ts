import { useState, useCallback, useRef } from "react";

const LIBRE_TRANSLATE_URL = "https://libretranslate.de/translate";

export function useTranslation() {
    const cache = useRef<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const translate = useCallback(async (text: string, target: "en" | "fr"): Promise<string> => {
        if (!text.trim()) return text;
        const key = `${text}__${target}`;
        if (cache.current[key]) return cache.current[key];

        try {
            const res = await fetch(LIBRE_TRANSLATE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    q: text,
                    source: target === "en" ? "fr" : "en",
                    target,
                    format: "text",
                }),
            });
            if (!res.ok) return text;
            const data = await res.json();
            const result = data.translatedText ?? text;
            cache.current[key] = result;
            return result;
        } catch {
            return text;
        }
    }, []);

    const translateBatch = useCallback(async (
        texts: Record<string, string>,
        target: "en" | "fr"
    ): Promise<Record<string, string>> => {
        if (target === "fr") return texts;
        setLoading(true);
        try {
            const entries = await Promise.all(
                Object.entries(texts).map(async ([key, val]) => {
                    const translated = await translate(val, target);
                    return [key, translated] as [string, string];
                })
            );
            return Object.fromEntries(entries);
        } finally {
            setLoading(false);
        }
    }, [translate]);

    return { translate, translateBatch, loading };
}