import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPostList } from "../../apis/post";

const UserName = () => {
  const { userName } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      const { postList } = await getPostList({ userName });
      setPostList(postList);
    })();
  }, [userName]);

  return (
    <div>
      <PostList>
        {postList.map(({ id, imageList }) => (
          <PostThumbnail key={id} src={imageList[0]} />
        ))}
      </PostList>
    </div>
  );
};

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
`;
const PostThumbnail = styled.img`
  width: 100%;
  height: 300px;
`;

export default UserName;
