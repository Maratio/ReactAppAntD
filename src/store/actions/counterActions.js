

export const incrementAction = (payload) => {
    // const newPostData = payload.map(e => ({...e, id: new Date().getTime()}))

    // some logic
    const data = payload * 10
  return {
    type: 'INCREMENT',
    payload: data,
  };
};

export const minusAction = (payload) => {
  return {
    type: 'MINUS',
    payload,
  };
};

