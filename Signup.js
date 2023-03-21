import React from 'react';

function LoginPage() {
  return (
<center>
    <div className='login'>
      <h1>Signup</h1>
      <form>
        <label>
          FirstName:</label><br/>
          <input type="firstname" name="firstname" required /><br/>
        
        <label>
          LastName:  </label><br/>
          <input type="LastName" name="LastName" required /><br/>
          <label>
          Email:  </label><br/>
          <input type="Email" name="Email" required /><br/>
          <label>
          Password:  </label><br/>
          <input type="Password" name="Password" required /><br/>
          <label>
          Conform Password:  </label><br/>
          <input type="Password" name="Password" required /><br/><br/>
          
          
      
        <button type="submit">Signup</button>
      </form>
    </div>
</center>
  );
}

export default LoginPage;
