"use client";

import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import PageTitle from "@/components/PageTitle";

function AdminPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user || user.email !== "admin@tusitio.com") {
        router.push("/login"); // Redirigir si no es admin
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) return <p>Cargando...</p>;

  return (
    <>
      <PageTitle>Admin Panel</PageTitle>
      <p>Nombre de usuario: {user.email}</p>
      <p>Contraseña: ********</p>
    </>
  );
}

export default AdminPage;
