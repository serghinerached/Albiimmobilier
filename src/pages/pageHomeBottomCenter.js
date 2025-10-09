import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageHomeBottomCenter({ onTextClick, tabSelect }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Charger toutes les annonces au démarrage
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("Annonce").select("*");

      if (error) {
        console.error("Erreur :", error);
      } else {
        setRows(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []); // ← [] : s'exécute UNE SEULE FOIS au montage

  // 🔹 Appliquer le filtre uniquement quand tabSelect change
  useEffect(() => {
    const handleFiltrer = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("Annonce")
        .select("*")
        .eq("type", tabSelect[1].trim());

      if (error) {
        console.error("Erreur Supabase :", error);
        alert("Erreur lors du chargement des annonces");
      } else {
        data.map((row) => (
          console.log(row)
        ))
        setRows(data);
      }

      setLoading(false);
    };

    if (tabSelect && tabSelect[0] === "filter") {
      handleFiltrer();
    }
  }, [tabSelect]); // ← dépendance : s’exécute SEULEMENT quand tabSelect change

  // -----------------------------------

  const images = require.context("../photos", false, /\.(png|jpe?g|svg)$/);
  const getImage = (id) => {
    const filename = `${id}-1.png`;
    return images.keys().includes(`./${filename}`)
      ? images(`./${filename}`)
      : images("./default.png"); // fallback
  };

  // -----------------------------------

  if (loading) return <div>Chargement...</div>;

  return (
    <>
      {rows.map((row) => (
        <table
          key={row.id}
          style={{
            border: "2px solid black",
            marginBottom: "20px",
            width: "80%",
          }}
        >
          <tbody>
            <tr style={{ color: "white", backgroundColor: "#D2691E" }}>
              <td style={{ padding: "5px", width: "37%" }}>{row.type}</td>
              <td colSpan={3} align="right" style={{ paddingRight: "10px" }}>
                {row.prix} €
              </td>
            </tr>

            <tr style={{ color: "black" }}>
              <td
                style={{
                  padding: "5px",
                  textAlign: "left",
                  backgroundColor: "lightgray",
                }}
              >
                Paru le {new Date(row.created).toLocaleDateString()} <br />
                {row.superficie} m² <br />
                {row.pieces} pièces <br />
                <img
                  src={getImage("x")}
                  alt="icone"
                  style={{
                    width: "70px",
                    height: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => onTextClick(row)}
                />
              </td>

              <td
                style={{
                  backgroundImage: `url(${getImage(row.id)})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100px",
                  height: "100px",
                }}
              ></td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

export default DivPageHomeBottomCenter;
