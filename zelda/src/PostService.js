import axios from 'axios';

const url = 'http://localhost:5000/api/posts';

class PostService {
    // Get Posts
    static async getPosts() {
        const res = await fetch(url)

        const data = await res.json()
        return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
    }
    /*
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }
    */
    // Create Post
    static async insertPost(tex, i) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                'id': i,
                'text': tex
            })
        })
    }
    /*
    static insertPost(text, id) {
        return axios.post(url, {
            text,
            id
        })
    }
    */
    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default PostService;