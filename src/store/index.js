import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: 'm1',
          image:
            'https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80',
          title: 'A trip to Hawaii',
          description: 'It was a nice trip',
        },
        {
          id: 'm2',
          image:
            'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          title: 'Surfing the sea side',
          description: 'It Was a nice blue and clear water',
        },
        {
          id: 'm3',
          image:
            'https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
          title: 'Cruise trip',
          description: 'It Was a nice destination and food',
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
