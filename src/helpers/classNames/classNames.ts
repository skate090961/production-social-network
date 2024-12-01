type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): any {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls, _]) => cls)
    ]
        .join(' ')
}