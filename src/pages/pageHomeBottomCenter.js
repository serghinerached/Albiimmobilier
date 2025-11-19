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
      const { data, error } = await supabase
        .from("Annonce")
        .select("*")
        .eq("valide", "Oui");   

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

      const type = tabSelect[1];      
      const chauffage = tabSelect[2];  
      const pieces = tabSelect[3];     
      const superficie = tabSelect[4]; 
      const prix = tabSelect[5]; 

      let query = supabase.from("Annonce").select("*").eq("valide", "Oui");

      // 🔹 Appliquer le filtre sur le type si différent de "Tous"
      if (type !== "Tous") {
        query = query.eq("type", type.trim());
      }

      // 🔹 Appliquer le filtre sur le chauffage si différent de "Tous"
      if (chauffage !== "Tous") {
        query = query.eq("chauffage", chauffage.trim());
      }

      // 🔹 Filtre "pièces"
      if (pieces !== "Tous") {
        if (pieces === "+6") {
          // ⚙️ Supabase -> .gt = "greater than"
          query = query.gt("pieces", 6);
        } else {
          query = query.eq("pieces", parseInt(pieces, 10));
        }
      }

      // 🔹 Filtre "superficie"
      if (superficie !== "Tous") {
        query = query.gte("superficie", parseInt(superficie, 10));
      }

      // 🔹 Filtre "prix"
      if (prix !== "Tous") {
        console.log(parseInt(prix, 10), typeof(parseInt(prix, 10)))
        query = query.lte("prix", parseInt(prix, 10));
      }

      const { data, error } = await query;

      if (error) {
        console.error("Erreur Supabase :", error);
        alert("Erreur lors du chargement des annonces");
      } else {
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

  function formatPrix(valeur) {
    const num = Number(String(valeur).replace(/[^\d.-]/g, ""));
    return isNaN(num) ? "" : `${num.toLocaleString("fr-FR")} €`;
  }

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
                {formatPrix(row.prix)}
              </td>
            </tr>

            <tr style={{ color: "black" }}>
              <td
                style={{
                  padding: "5px",
                  textAlign: "left",
                  backgroundColor: "white",
                }}
              >
                Annonce n° {row.id} <br />
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
