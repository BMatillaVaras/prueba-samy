const countLikesPost = (id) => {
    return fetch(`http://localhost:3100/images/:${id}/likes`,
    {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: ""
    })
    .then((response) => response.json())
}

export default countLikesPost; 