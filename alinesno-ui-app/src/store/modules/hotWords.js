export default {
	namespaced: true,
	state: {
		// 搜索关键字
		hotWord: [],
		nameIndex: ''
	},
	getters: {},
	mutations: {
		setHotWord(state, hotWordList) {
			state.hotWord = hotWordList;
		},
		setnameIndex(state, data){
			console.log('kkkkkkkkkkkjjjj',data);
			state.nameIndex = data;
		}
	}
}
