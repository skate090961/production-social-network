import {lazy} from "react";

export const MainPageLazy = lazy(() => new Promise((res) => {
    // @ts-ignore
    // Убрать искусственную задержку перед деплоем
    setTimeout(() => res(import('./MainPage')), 1000)
}))