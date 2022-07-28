export const getPost = async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    if(response.status !== 200){
        console.log("fetch error")
        return;
    }
    const jsonData = await response.json();
    if(jsonData != null){
        const posts = jsonData.data.data.children
    }
}