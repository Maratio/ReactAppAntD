import { BACKEND_URL } from "../utils/constants"
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

export async function deleteCard(card, postId) {
    try {
         const response = await fetch(`${BACKEND_URL}/api/${card}/${postId}?`, { method: "DELETE" })
         return response
    }
    catch (err) {
        console.error("error >>>>>", err);
    }

};

export async function deleteCommentsWithPost(postId) {
    try {
         const response = await fetch(`${BACKEND_URL}/api/comments/${postId}/comment?`, { method: "DELETE" })
         const result = await response.json
         return result
    }
    catch (err) {
        console.error("error >>>>>", err);
    }

};

export async function getCards(card) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/${card}?`, { method: "GET" })
        const result = await response.json()
        return result
    }
    catch (err) {
        console.error("error >>>>>", err);
    }
}

export async function getCardsFilter(card, postId) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/posts/${postId}/${card}?`, { method: "GET" })
        const result = await response.json()
        return result
    }
    catch (err) {
        console.error("error >>>>>", err);
    }
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
                navigate(-1)
            }
            if(card === "posts"){
                deleteCommentsWithPost(id)
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
