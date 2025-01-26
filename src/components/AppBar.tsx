import * as React from 'react';
import "../App.css"

const ResponsiveAppBar = () => {
  return (
    <div id="navbar">
      <a href="/1" class="navchild">
        Project
      </a>
      <a href="/2" class="navchild">
        Games
      </a>
      <a href="/3" class="navchild">
        Experiments
      </a>
      <a href="/4" class="navchild">
        Tips & Tricks
      </a>
      <a href="/5" class="navchild">
        Help
      </a>
    </div>
  );
};

export default ResponsiveAppBar;

