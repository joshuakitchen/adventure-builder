

export default class RaceCardData
{
    constructor(data)
    {


        if(typeof RaceCardData.CARDS === 'undefined')
        {
            RaceCardData.CARDS = [];
        }
        RaceCardData.CARDS.push(this);
    }
}

new RaceCardData({
    'name': 'Gentle Eyes',
    'description': 'Gentler eyes that comfort those around them.',
    'type': 'eyes',
    'icon': 'eye',
    'stats': [
        '+2 CHA.',
        '-1 ACC.'
    ]
});

new RaceCardData({
    'name': 'Piercing Eyes',
    'description': 'Piercing eyes that are able to gaze far away',
    'type': 'eyes',
    'icon': 'eye',
    'stats': [
        '+2 ACC.',
        '-1 CHA.'
    ]
});