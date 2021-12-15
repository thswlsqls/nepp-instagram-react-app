import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostList from '../organisms/PostList';
import { getPostListMain } from '../../apis/post';

const Main = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async () => {
      const { postList } = await getPostListMain();
      setPostList(postList);
    })();
  }, []);

  return (
    <div>
      <PostList data={postList} />
    </div>
  );
};

// const Main = styled.main``;

export default Main;
