const translations = {
    ru: {
        "war-title": "Играй в War Thunder Прямо Сейчас!!!",
        "war-description": "Регистрация в War Thunder по моей ссылке.",

        "discord-sights": "Discord Прицелы",
        "discord-sights-description": "Прицелы из моих видео. Сервер принадлежит художникам.",

        "tiktok-title": "TikTok War Thunder Toaster",
        "tiktok-description": "Мой англоязычный TikTok с контентом по War Thunder.",

        "shorts-title": "YouTube Shorts War Thunder Toaster",
        "shorts-description": "Мой англоязычный канал с короткими видео по War Thunder.",

        "donationAlerts-title": "DonationAlerts",
        "donationAlerts-description": "Поддержать меня донатом ❤️",

        "steam-title": "Steam Обмен",
        "steam-description": "Обмен предметами Steam.",

        "twitch-title": "Twitch Канал",
        "twitch-description": "Стримы и другой контент.",

        "sifontv-title": "War Thunder Sifon TV",
        "sifontv-description": "Канал с контентом по War Thunder.",

        "telegram-title": "ТГК Deep Dark Fantasy",
        "telegram-description": "Мой Telegram-канал.",

        "discord-title": "♂300 Buckssss♂",
        "discord-description": "Мой Discord-сервер и сообщество."
    },

    en: {
        "war-title": "Play War Thunder Now!!!",
        "war-description": "Register for War Thunder using my link.",

        "discord-sights": "Discord Sights",
        "discord-sights-description": "Crosshairs from my videos. The server belongs to the artists.",

        "tiktok-title": "TikTok War Thunder Toaster",
        "tiktok-description": "My English-language TikTok with War Thunder content.",

        "shorts-title": "YouTube Shorts War Thunder Toaster",
        "shorts-description": "My English-language channel with short War Thunder videos.",

        "donationAlerts-title": "DonationAlerts",
        "donationAlerts-description": "Support me with a donation ❤️",

        "steam-title": "Steam Trade",
        "steam-description": "Trade Steam items with me.",

        "twitch-title": "Twitch Channel",
        "twitch-description": "Streams and other content.",

        "sifontv-title": "War Thunder Sifon TV",
        "sifontv-description": "A channel with War Thunder content.",

        "telegram-title": "Deep Dark Fantasy",
        "telegram-description": "My Telegram channel.",

        "discord-title": "♂300 Buckssss♂",
        "discord-description": "My Discord server and community."
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