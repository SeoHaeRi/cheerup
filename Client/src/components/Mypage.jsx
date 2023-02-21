import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import '../static/Signup.css';
import axios from 'axios';

export default function Signin() {
  return (
    <div className="scene flex">
      <section className="card">
        <h1 className="card__heading">
          <Logo />
          <p style={{ marginTop: '20px' }}>Login</p>
        </h1>
       

          <button className="card__button" type="button">
            <span>Welcome</span>
          </button>

          <button className="card__button1" type="button">
            <span>카카오로 로그인 하기</span>
          </button>
      </section>
    </div>
  );
}
