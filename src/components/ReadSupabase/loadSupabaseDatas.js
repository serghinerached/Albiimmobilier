/*
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function fDataTableAnnonce() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("Annonce")
        .select("id, created, type");

      if (error) {
        console.error("Erreur :", error);
      } else {
        setRows(data);
      }
    };

    fetchData();
  }, []);

  return (rows);

}
  */