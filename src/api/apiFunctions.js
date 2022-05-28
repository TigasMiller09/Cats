export const fetchCats = () => {
  return fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
    }
  })
};

export const fetchImage = (id) => {
  return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + id, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
    }
  })
};

export const sendUpVote = (image_id) => {
  fetch('https://api.thecatapi.com/v1/votes/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
    },
    body: JSON.stringify({
      image_id: image_id,
      value: 1,
    })
  }).then((response) => {
    if(response.status === 200)
      console.log("sent")
    else
      console.log("error")
  })
}

