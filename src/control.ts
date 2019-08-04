export {};

script.on_event(defines.events.on_tick, e => {
    if (e.tick % 30 === 0) {
        for (let player of game.connected_players) {
            if (player.character && player.get_inventory(defines.inventory.character_armor)!.get_item_count('fire-armor') >= 1) {
                player.surface.create_entity({ name: 'fire-flame', position: player.position, force: 'neutral' })
            }
        }
    }
});