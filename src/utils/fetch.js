import { BACKEND_URL } from "../utils/constants"
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}


export function deleteCard(card, postId, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    fetch(`${BACKEND_URL}/api/${card}/${postId}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                getCards(card, setPagePostsList, setRecCount, pageCurrent, pageSize);
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function getCards(card, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    fetch(`${BACKEND_URL}/api/${card}?`, { method: "GET" })
        .then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
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
                    setDataPost(data);
                });
            }
        })
        .catch((err) => console.error("error >>>>>", err));
}

export function deleteCardDetail(id, card, navigate) {
    fetch(`${BACKEND_URL}/api/${card}/${id}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                navigate(`/${card}`)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function addCard(req) {
    fetch(`${BACKEND_URL}/api/${req.card}?`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            title: req.Title,
            body: req.Description,
            url: req.Img_url,
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                req.navigate(-1)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function updateCard(Title, Description, Img_url, navigate, id) {
    fetch(`${BACKEND_URL}/api/posts/${id}?`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
            title: Title,
            body: Description,
            url: Img_url,
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                navigate(-1);
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};
