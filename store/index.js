export default ({
    state: {
        locations: [
            {
                latitude: 55.7522200,
                longitude: 37.6155600,
                name: 'Moscow'
            },
        ],
        index: 0,
        isDarkMode: true,
    },
    mutations: {
        addLocation(state, location) {
            if (state.locations.length >= 4) {
                state.locations.splice(4, 1)
            }
            state.locations.unshift(location);
        },
        deleteLocation(state, index) {
            if (state.locations.length > 1) {
                state.locations.splice(index, 1);
            }
        },
        changeIndex(state, i) {
            state.index = i;
        },
        toogleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode
        }

    },
    actions: {
        addLocation({ commit }, location) {
            commit("addLocation", location);
        },
        changeIndex({ commit }, i) {
            commit("changeIndex", i);
        },
        deleteLocation({ commit }, index) {
            commit("deleteLocation", index);
        },
        toogleDarkMode({ commit }) {
            commit("toogleDarkMode");
        }
    },
    getters: {},
    modules: {},
});