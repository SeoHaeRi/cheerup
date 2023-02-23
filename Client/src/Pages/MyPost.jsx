import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Comment from '../components/Comment';
import '../static/Card.css';
import { Button } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ko';
import { jwtUtils } from '../utils/jwtUtils';
import { useSelector } from 'react-redux';

function MyPost() {
  const userID = useSelector((state) => state.user.user.data.user_id);
  const userNickname = useSelector(
    (state) => state.user.user.data.user_nickname,
  );
  const navigate = useNavigate();
  const postRef = useRef([]);
  const [posts, setPosts] = useState([]);

  let data = [];
  useEffect(() => {
    axios.get(`http://localhost:3030/board/mypost/${userID}`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        function formatDate(string) {
          var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          };
          return new Date(string).toLocaleDateString([], options);
        }

        const postData = res.data[i];

        const convertDate = formatDate(postData.date);

        const postDataArr = {
          post_id: postData.post_id,
          title: postData.title,
          content: postData.content,
          date: convertDate,
          userId: postData.userId,
        };

        data.push(postDataArr);
      }
      setPosts(data);
    });
  }, []);

  const onClickPost = (post_id) => {
    navigate(`/board/:${post_id}`, {
      state: {
        data: posts,
      },
    });
  };

  return (
    <>
      <MainHeader>나의 아우성들</MainHeader>
      <Container>
        {posts.map((post, index) => (
          <div
            className="card-wrapper"
            key={index}
            onClick={() => onClickPost(post.post_id)}
            ref={postRef}
          >
            <div className="card-body-text">
              <div className="card-body-text-title">{post.title}</div>
              <div className="card-body-text-content">{post.content}</div>
            </div>
            <div className="card-footer">
              {' '}
              작성 날짜
              <div className="date">{post.date}</div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
export default MyPost;
const Container = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: white;
  box-sizing: border-box;
  position: absoulte;
`;

const MainHeader = styled.div`
  background-color: #1363df;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  color: white;
  font-size: 1.75rem;
  text-align: center;
`;