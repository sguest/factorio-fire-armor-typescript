let fireArmor = table.deepcopy(data.raw.armor['heavy-armor']);
fireArmor.name = 'fire-armor';
fireArmor.icons = [
    {
        icon: fireArmor.icon,
        tint: { r: 1, g: 0, b: 0, a: 0.3, },
        icon_size: fireArmor.icon_size,
    },
]
fireArmor.resistances = [
    {
        type: 'physical',
        decrease: 6,
        percent: 10,
    },
    {
        type: 'explosion',
        decrease: 10,
        percent: 30,
    },
    {
        type: 'acid',
        decrease: 5,
        percent: 30,
    },
    {
        type: 'fire',
        decrease: 0,
        percent: 100,
    },
];

let recipe = table.deepcopy(data.raw.recipe['heavy-armor']);
recipe.enabled = true;
recipe.name = 'fire-armor';
recipe.ingredients = [{name: 'copper-plate', amount: 200}, {name: 'steel-plate', amount: 200}];
recipe.result = 'fire-armor';

data.extend([fireArmor, recipe]);