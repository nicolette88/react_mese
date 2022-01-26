import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../database";
import "../scss/resetpassword.scss";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="resetpassword">
      <button className="vissza_btn" onClick={() => navigate('/login')}>
        Vissza
      </button>
      <div className="reset_container">
        <h3>Jelszó visszaállítás</h3>
        <input
          type="text"
          className="reset_textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail cím"
        />
        <button className="reset_btn" onClick={() => sendPasswordReset(email)}>
          E-mail küldése
        </button>

        <div>
          Nincs még felhasználói fiókod? <Link to="/register">Regisztráció</Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;