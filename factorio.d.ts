declare const table : {
    deepcopy<T>(this: void, value: T): T
}

declare const data : {
    raw: rawData
    extend(values: any[]): void
}

interface rawData {
    armor: { [key: string]: itemPrototype }
    recipe: { [key: string]: recipePrototype }
}

interface itemPrototype {
    name: string
    icons: icon[]
    icon: string
    resistances: resistance[]
}

interface icon {
    icon: string
    tint: color
}

interface color {
    r?: number
    g?: number
    b?: number
    a?: number
}

interface resistance {
    type: damageType
    decrease: number
    percent: number
}

type damageType = 'physical' | 'impact' | 'poison' | 'explosion' | 'fire' | 'laser' | 'acid' | 'electric'

interface recipePrototype {
    enabled: boolean
    name: string
    result: string
    ingredients: ingredient[]
}

interface ingredient {
    type?: 'item' | 'fluid'
    name: string
    amount: number
    minimum_temperature?: number
    maximum_temperature?: number
    catalyst_amount?: number
}