function Register() {
    return (
        <div className="register-container">

            <h1 className="title">Lost And Found</h1>
            <h2 className="sub">Create Account</h2>

            <label className="label">Username</label>
            <input type="text" placeholder="username" />

            <label className="label">Email</label>
            <input type="email" placeholder="email" />

            <label className="label">Password</label>
            <input type="password" placeholder="password" />

            <button className="button">Register</button>

        </div>
    );
}

export default Register;