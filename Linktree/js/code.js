const translations = {
    ru: {
        "war-title": "Играй в War Thunder Прямо Сейчас!!!",
        "war-description": "War Thunder – это самая масштабная бесплатная кроссплатформенная многопользовательская онлайн-игра, посвященная боевой технике. Доступны образцы самых разных войн и конфликтов – с начала XX века и до наших дней. Авиация, наземные силы и флот сражаются вместе в одном бою, как это и происходило в настоящих сражениях.",
        "discord-sights": "Discord Прицелы",
        "discord-sights-description": "Кому нужны кадры из видео? (Дискорт не мой, он принадлежит художникам)",
        "tiktok-title": "TikTok War Thunder Toaster",
        "tiktok-description": "Иностранный канал TikTok",
        "shorts-title": "YouTube Short's War Thunder Toaster",
        "shorts-description": "Иностранный канал YouTube short's"
    },

    en: {
        "war-title": "Play War Thunder Now!!!",
        "war-description": "War Thunder is the largest free-to-play, cross-platform, multiplayer online game dedicated to military vehicles. It features images from a wide range of wars and historical events, from the early 20th century to the present day. Air forces, ground forces, and naval forces fight together in a single battle, as death awaits on real battlefields.",
        "discord-sights": "Discord Sights",
        "discord-sights-description": "Who needs the sights from the videos? (The Discord isn't mine, it's the artists')",
        "tiktok-title": "TikTok War Thunder Toaster",
        "tiktok-description": "",
        "shorts-title": "YouTube Short's War Thunder Toaster",
        "shorts-description": ""
    }
}

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n
        element.textContent = translations[lang][key]
    })

    document.documentElement.lang = lang

    localStorage.setItem("language", lang)
}

const savedLanguage = localStorage.getItem("language")

const browserLanguage = navigator.language.startsWith("ru")
    ? "ru"
    : "en"

const language = savedLanguage || browserLanguage

setLanguage(language)

document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang)
    })
})