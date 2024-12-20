import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const useTampilkanBuku = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);
    const [daftarBuku, setDaftarBuku] = useState([]);

    const ambilDataBuku = async () => {
        setSedangMemuat(true);
        try {
            const querySnapshot = await getDocs(collection(db, "buku"));
            const dataBuku = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setDaftarBuku(dataBuku);
        } catch (error) {
            console.error("Error mengambil data buku:", error);
        } finally {
            setSedangMemuat(false);
        }
    };

    useEffect(() => {
        ambilDataBuku();
    }, []);

    return {
        sedangMemuat,
        daftarBuku,
    };
};

export default useTampilkanBuku;
