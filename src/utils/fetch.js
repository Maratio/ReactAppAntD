import { BACKEND_URL } from "../utils/constants"
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

export function deleteCard(card, postId, navigate, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    console.log(card, postId);
    fetch(`${BACKEND_URL}/api/${card}/${postId}?`, { method: "DELETE" })
        .then((response) => {
            if (response.status === 204) {
                if (card === "comments" )
                    navigate(-1)

                else
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

export function getCardsFilter(card, postId, setPagePostsList, setRecCount, pageCurrent, pageSize) {
    fetch(`${BACKEND_URL}/api/posts/${postId}/${card}?`, { method: "GET" })
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
    console.log(id);
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
                navigate(-1)
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
            rate: req.Rating
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                req.navigate(-1)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};

export function addCardComment(req) {
    fetch(`${BACKEND_URL}/api/posts/${req.postId}/${req.card}?`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            title: req.Title,
            body: req.Description,
            rate: req.Rating,
            postId: req.postId
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                req.navigate(-1)
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};


export function updateCard(Rating, Title, Description, Img_url, navigate, id) {
    fetch(`${BACKEND_URL}/api/posts/${id}?`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
            title: Title,
            body: Description,
            url: Img_url,
            rate: Rating
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                navigate(-1);
            }
        })
        .catch((err) => console.error("error >>>>>", err));
};
