declare namespace defines {
    enum events {
        on_tick
    }

    enum inventory {
        character_armor
    }
}

interface gameScript {
    connected_players: player[]
}

declare const game: gameScript

interface control {
    get_inventory(this: void, inventory: defines.inventory): inventory | null
    surface: surface
    position: position
}

interface player extends control {
    character?: entity
}

interface surface {
    create_entity(values: {
        name: string,
        position: position,
        force: forceSpecification,
    }): entity
}

type position = { x: number, y: number} | number[]

type forceSpecification = string | force

interface force {

}

interface entity {

}

interface inventory {
    get_item_count(this: void, name?: string): number
}

declare const table : {
    deepcopy<T>(this: void, value: T): T
}

declare const data : {
    raw: rawData
    extend(values: any[]): void
}

declare const script: {
    on_event(this: void, event: defines.events, callback: (this: void, event: event) => void): void
}

interface event {
    tick: number
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