// export default {
//     namespaced: true,
//
//     actions: {
//         async getMovie({ commit }, options) {
//             if (options.title) {
//                 console.log(options.title);
//                 const getMovie = await fetch('/functions/getMovie', {
//                     method: 'POST',
//                     body: JSON.stringify(options),
//                 }).then((res) => res.json())
//
//                 console.log(getMovie);
//                 const movieList = getMovie.Search
//                 commit('movieListState', {
//                     movieList,
//                 })
//             }
//         },
//
//         async getDetail({ commit }, options) {
//             options = { id: options }
//             const getDetail = await fetch('/functions/getDetail', {
//                 method: 'POST',
//                 body: JSON.stringify(options),
//             }).then((res) => res.json())
//
//             commit('movieDetailState', {
//                 getDetail,
//             })
//         },
//     },
// }
{}