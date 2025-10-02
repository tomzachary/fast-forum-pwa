import React, { useState } from 'react';
import styles from './login.module.scss';
import {createPasskey, promptforPasskey} from "./passkey.ts";
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setError('');
  };

  const handleBiometricLogin = async () => {
    setLoading(true);
    setError('');
    try {
      if (window.PublicKeyCredential) {
        promptforPasskey();
        setSuccess(true);
      } else {
        setError('Biometric authentication not supported on this device/browser.');
      }
    } catch (err) {
      console.error("Error while handling biometric authentication", err)
      setError('Biometric authentication failed or was cancelled.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <div className="card"><h2>Login Successful!</h2></div>;
  }

  return (
    <div className="card" style={{ maxWidth: 400, margin: '2em auto' }}>
      <h2>Login</h2>
      <h3 className={styles.warning}>NOTE: THIS IS NOT REAL. DO NOT ENTER INFORMATION!</h3>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ padding: '0.8em', borderRadius: 8, border: '1px solid #4f8cff' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '0.8em', borderRadius: 8, border: '1px solid #4f8cff' }}
        />
        <button type="submit" style={{ marginTop: 8 }}>Login</button>
      </form>
      <button
        type="button"
        onClick={() => createPasskey()}>
        Create Passkey (for demo)
      </button>
      <button
        type="button"
        onClick={handleBiometricLogin}
        disabled={loading}
        style={{ marginTop: 16, background: '#4f8cff', color: '#fff', border: 'none', borderRadius: 8, padding: '0.8em', fontWeight: 600 }}
      >
        {loading ? 'Checking Biometrics...' : 'Login with Biometrics'}
      </button>
      {error && <div style={{ color: '#ff4f4f', marginTop: 12 }}>{error}</div>}
    </div>
  );
};

export default Login;

