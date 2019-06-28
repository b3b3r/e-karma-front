const initialState = [
    {
        id: 1,
        titre: 'Pourquoi mon chat est moche ?',
        tags: ['#animaux', '#questions con'],
        commentaires: 25,
    },
    {
        id: 2,
        titre: 'Pourquoi mon chien est moche ?',
        tags: ['#animaux', '#questions con'],
        commentaires: 2,
    },
    {
        id: 3,
        titre: 'Pourquoi LoL est mort ?',
        tags: ['#jeux vidéos', '#deadgames'],
        commentaires: 16,
    },
    {
        id: 4,
        titre: 'Pourquoi Fortnite est bien ?',
        tags: ['#jeux vidéos', '#Battle Royal'],
        commentaires: 52,
    }
]

const topics = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default topics;