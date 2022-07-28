import React, { useState } from "react";

const Header = () => {
  const [subreddit, setSubreddit] = useState([""]);
  return (
    <section>
      <header className="app-header">
        <input
          type="text"
          className="input"
          onChange={(e) => setSubreddit(e.target.value)}
          value={subreddit}
        />
      </header>
    </section>
  );
};

export default Header;
