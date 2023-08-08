import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import SenoritaHotel from './SenoritaHotel'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('https://64c8c6c9a1fe0128fbd63034.mockapi.io/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setError('Đăng nhập không thành công. Vui lòng thử lại sau.');
        return;
      }

      const data = await response.json();
      const user = data.find((u) => u.email === email && u.password === password);

      if (user) {
        // Đăng nhập thành công
        setError('');
        console.log('Đăng nhập thành công! Người dùng:', user);
        
        history.push('/senorita-hotel');
      } else {
        
        setError('Email hoặc mật khẩu không chính xác.');
      }
    } catch (error) {
      setError('Đăng nhập không thành công. Vui lòng thử lại sau.');
      console.error('Lỗi khi gọi API đăng nhập:', error);
    }
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', padding: '20px', 
        border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Đăng nhập</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} 
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Mật khẩu:</label>
          <input type="password" value={password} onChange={handlePasswordChange} 
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        
        <button type="submit" 
            style={{ padding: '8px 12px', backgroundColor: '#007bff', 
                color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};
export default Login;