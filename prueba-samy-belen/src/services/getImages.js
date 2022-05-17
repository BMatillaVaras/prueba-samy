const getImages = () => {
    return fetch("http://localhost:3100/images")
    .then((response) => response.json())
    .then((data) => {
        return data.map((image) => {
            return {
                id: image.id,
                price: image.price,
                title: image.title,
                author: image.author,
                image: image.main_attachment.big,
                likes_count: image.likes_count,
                liked: image.liked
            }
        })
    })
}

export default getImages; 