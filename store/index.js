export default ({
    state: {
        defaultLocation: {
            lat: 55.7522200,
            lon: 37.6155600,
            name: 'Moscow'
        },
        locations: [{
            latitude: 55.7522200,
            longitude: 37.6155600,
            name: 'Moscow'
        },],
        index: 0
    },
    mutations: {
        addLocation(state, location) {
            state.locations.push(location);
        },
    },
    actions: {
        addLocation({ commit }, location) {
            commit("addLocation", location);
        },
    },
    getters: {},
    modules: {},
});