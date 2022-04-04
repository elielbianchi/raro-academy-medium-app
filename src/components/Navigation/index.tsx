import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActivableLink } from "../ActivableLink";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate('/');
  }

  if(!isAuthenticated) { 
    return (
      <>
        <ActivableLink to="/">HOME</ActivableLink>
        <ActivableLink to="/login">LOGIN</ActivableLink>
      </>
    );
  }

  return (
    <>
      <ActivableLink to="/">HOME</ActivableLink>
      <ActivableLink to="/artigos">MEUS ARTIGOS</ActivableLink>
      <ActivableLink to="/artigos/novo">NOVO ARTIGO</ActivableLink>
      <ActivableLink to="/" onClick={logout} type="button">LOGOUT</ActivableLink>
    </>
  );
};
