import React from 'react';

function LoginPage() {
  return (
<center>
    <div className='login'>
      <h1>Login</h1>
      <form>
        <label>
          Email:</label><br/>
          <input type="email" name="email" required /><br/>
        
        <label>
          Password:  </label><br/>
          <input type="password" name="password" required /><br/>
      
        <button type="submit">Login</button>
      </form>
    </div>
</center>
  );
}

export default LoginPage;
