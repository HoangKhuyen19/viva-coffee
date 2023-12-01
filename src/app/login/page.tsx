"use client"
import React from 'react';


function login() {
  return (

    <div className='container'>
      <div className='loginForm'>
        <h2 className='heading'>ĐĂNG NHẬP</h2>
        <form>
            <div className='formGroup'>
              <input className='inplogin' type="text" id="username" name="username" placeholder="Tài Khoản" />
            </div>
            <div className='formGroup'>
              <input className='inplogin'type="password" id="password" name="password" placeholder="Mật Khẩu" />
            </div>
            <div className='buttonContainer'>
              <button type="submit">Đăng Nhập</button>
            </div>
        </form>
      </div>
    </div>
  );


}

export default login;
