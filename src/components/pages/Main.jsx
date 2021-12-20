import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostList } from "../organisms";
import { getPostListMain } from "../../apis/post";

const Main = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async () => {
      const { postList } = await getPostListMain();
      setPostList(postList);
    })();
  }, []);

  return (
    <Wrapper>
      <PostList data={postList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 614px;
  margin: 0 auto;
`;

export default Main;
