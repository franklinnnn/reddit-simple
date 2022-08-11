// export const fetchPosts = async (subreddit) => {
//   const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
//   const json = await response.json();
//   const jsonList = json.data.children.map((post) => post.data);
//   return jsonList;
// };

// export const fetchSubreddits = async () => {
//   const response = await fetch(`https://www.reddit.com/subreddits.json`);
//   const json = await response.json();
//   const jsonList = json.data.children.map((subreddit) => subreddit.data);
//   return jsonList;
// };

// export const fetchComments = async (permalink) => {
//   const response = await fetch(`https://www.reddit.com/${permalink}.json`);
//   const json = await response.json();
//   const jsonList = json[1].data.children.map((subreddit) => subreddit.data);
//   return jsonList;
// };

export const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
