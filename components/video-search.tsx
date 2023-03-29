'use client';

import { useRef } from 'react';

const VideoSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2>Video search</h2>
      <form name="searchForm">
        <h1>tgest</h1>
        <input
          type="text"
          value="test"
          name="search"
          id="search"
          ref={searchRef}
        ></input>
      </form>
    </>
  );
};

export { VideoSearch as default };
