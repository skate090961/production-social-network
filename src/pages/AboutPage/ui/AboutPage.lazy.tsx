import {lazy} from "react";

export const AboutPageLazy = lazy(() => new Promise((res) => {
    // @ts-ignore
    // Убрать искусственную задержку перед деплоем
    setTimeout(() => res(import('./AboutPage')), 1000)
}))