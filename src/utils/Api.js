const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
    }

    getPostsList(){
        return fetch(`${this._baseUrl}posts`, {
            headers: {
                authorization: this._token, 
            },
        }).then(onResponce)
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}users/me`, {
            headers: {
                authorization: this._token, 
            },
        }).then(onResponce)
    }

    setUserInfo(userData){
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
            
        }).then(onResponce)
    }

    changeLikeStatus(postId, isLike){
        return fetch(`${this._baseUrl}posts/likes/${postId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token, 
            },
        }).then(onResponce)
    }

    deletePostList(postId){
        return fetch(`${this._baseUrl}posts/${postId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token, 
            },
        }).then(onResponce)
    }

    getPostById(postID){
        return fetch(`${this._baseUrl}posts/${postID}`, {
            headers: {
                authorization: this._token, 
            },
        }).then(onResponce)
    }

    addCreatePost(PostData) {
        return fetch(`${this._baseUrl}posts`, {
          method: "POST",
          headers: {
            authorization: this._token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(PostData),

        }).then(onResponce)
          
    }

    editProduct(postData, postId){
        return fetch(`${this._baseUrl}posts/${postId}`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(postData)
            
        }).then(onResponce)
    }

   

}

const config = {
    baseUrl: 'https://api.react-learning.ru/',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTEiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.9fO0K4QRr9is9NT9-WtE45vsy0CqhaQKWFysTOuTGFA',
}

const api = new Api(config);

export default api;