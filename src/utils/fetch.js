import { BACKEND_URL } from "../utils/constants"
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

export async function getCardsSerch(card, data) {
    try {
        const queryParams = new URLSearchParams({ term: data })
        const response = await fetch(`${BACKEND_URL}/api/${card}-search?${queryParams}`, { method: "GET" })
        if (/^2/.test(response.status))
            return response.json()
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
        return []
    }
}

export async function deleteCard(card, postId) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/${card}/${postId}?`, { method: "DELETE" })
        if (/^2/.test(response.status))
            return response
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
        return false
    }

};

export async function deleteCommentsWithPost(postId) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/comments/${postId}/comment?`, { method: "DELETE" })
        if (/^2/.test(response.status))
            return response
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
    }

};

export async function getCards(card) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/${card}?`, { method: "GET" })
        if (/^2/.test(response.status))
            return response.json()
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
        return []
    }
}

export async function getCardsFilter(card, postId) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/posts/${postId}/${card}?`, { method: "GET" })
        if (/^2/.test(response.status))
            return response.json()
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
        return []
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
            if (/^2/.test(response.status)) {
                response.json().then((data) => {
                    setDataPost(data);
                });
            }
            else throw Error()
        })
        .catch(
            (err) => {
                console.error("error >>>>>", err)
                return []
            }
        );

}

export function deleteCardDetail(id, card, navigate) {
    fetch(`${BACKEND_URL}/api/${card}/${id}?`, { method: "DELETE" })
        .then((response) => {
            if (/^2/.test(response.status)) {
                navigate(-1)
                if (card === "posts") {
                    deleteCommentsWithPost(id)
                }
            }
            else throw Error()
        })
        .catch((err) => console.error("error >>>>>", err));
};

export async function addCard(req) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/${req.card}?`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                title: req.Title,
                body: req.Description,
                url: req.Img_url,
                rate: req.Rating
            }),
        })
        if (/^2/.test(response.status)) {
            req.navigate(-1)
            return response.json()
        }
        else throw Error()
    }
    catch (err) {
        console.error("error >>>>>", err);
        return {}
    }

}



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
            if (/^2/.test(response.status))
                req.navigate(-1)
            else throw Error()
        })
        .catch((err) => console.error("error >>>>>", err));
};


export function updateCard(req) {
    fetch(`${BACKEND_URL}/api/posts/${req.id}?`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
            title: req.Title,
            body: req.Description,
            url: req.Img_url,
            rate: req.Rating
        }),
    })
        .then((response) => {
            if (/^2/.test(response.status))
                req.navigate(-1);
            else throw Error()
        })
        .catch((err) => console.error("error >>>>>", err));
};
