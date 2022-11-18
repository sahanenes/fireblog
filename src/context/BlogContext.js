import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [info, setInfo] = useState("");

  return (
    <BlogContext.Provider value={{ info, setInfo }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
