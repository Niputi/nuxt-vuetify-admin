export const state = () => ({
  sidebar: false
});

export const mutations = {
  SIDEBAR(state, payload) {
    state.sidebar = payload;
  }
};
