import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          // Verificación de autenticación mediante cookies
          const cookies = document.cookie.split(";");
          const userIdCookie = cookies.find((cookie) =>
            cookie.trim().startsWith("_id=")
          );
          const tokenCookie = cookies.find((cookie) =>
            cookie.trim().startsWith("token=")
          );
          const isAdminCookie = cookies.find((cookie) =>
            cookie.trim().startsWith("isAdmin=")
          );

          setIsLoggedIn(!!userIdCookie && !!tokenCookie);
          setIsAdmin(
            isAdminCookie ? isAdminCookie.trim().substring(8) === "true" : false
          );
          setLoading(false);
        } catch (error) {
          console.error("Error al verificar la autenticación:", error);
          setLoading(false);
        }
      };

      checkAuth();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (isLoggedIn && isAdmin) {
      return <WrappedComponent {...props} />;
    } else if (!isLoggedIn) {
      navigate("/acceso");
      return null;
    } else {
      navigate("/404");
      return null;
    }
  };
};

export default withAuth;
