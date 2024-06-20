import { BACKEND_URL } from "../constants.js"




export function deleteCardCall(card, postId, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    console.log(card, postId);
    fetch(`${BACKEND_URL}/api/${card}/${postId}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                getCardsCall(card, setPagePostsList, setRecCount, pageCurrent, pageSize);
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function getCardsCall(card, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    fetch(`${BACKEND_URL}/api/${card}?`, { method: "GET" })
        .then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data);
                    const response = getPagesPost(
                        { page: pageCurrent, limit: pageSize },
                        data
                    );
                    setPagePostsList(response.tripPosts);
                    setRecCount(response.recCount);
                });
            }
        })
        .catch((err) => console.error("error >>>>>", err));
}

export function getPagesPost({ limit = 5, page = 1 }, data) {
    return {
        recCount: data.length,
        tripPosts: data.slice((page - 1) * limit, page * limit),
    };
}

export function getCardDetail(card, setDataPost, id) {
    fetch(`${BACKEND_URL}/api/${card}/${id}?`, { method: "GET" })
        .then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data);
                    setDataPost(data);
                });
            }
        })
        .catch((err) => console.error("error >>>>>", err));
}

export function deleteCardDetailCall(id, card, navigate) {
    fetch(`${BACKEND_URL}/api/${card}/${id}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                navigate(`/${card}`)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

// function paginateResults(data, page, limit) {
//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;

//   const results = {};
//   if (endIndex < data.length) {
//     results.next = {
//       page: page + 1,
//       limit: limit,
//     };
//   }
//   if (startIndex > 0) {
//     results.previous = {
//       page: page - 1,
//       limit: limit,
//     };
//   }
//   results.posts = data.slice(startIndex, endIndex);
//   return results;
// }

// exports.paginateResults = paginateResults;
