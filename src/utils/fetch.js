import { BACKEND_URL } from "../constants.js"

export function deleteCardCall(card, postId, setPagePostsList, setRecCount, pageCurrent, pageSize) {
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

export function deleteCardDetailCall(id, card, navigate) {
    fetch(`${BACKEND_URL}/api/${card}/${id}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                navigate(`/${card}`)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function addCardCall(Title, Img_url, navigate, card, Description = "") {
    fetch(`${BACKEND_URL}/api/${card}?`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: Title,
            body: Description,
            url: Img_url,
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                navigate(`/${card}`)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function updateCardCall(Title, Description, Img_url, navigate, id) {
    fetch(`${BACKEND_URL}/api/posts/${id}?`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: Title,
            body: Description,
            url: Img_url,
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                navigate(`/posts/${id}`);
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};
