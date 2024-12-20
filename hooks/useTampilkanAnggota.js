import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const useTampilkanAnggota = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);
    const [daftarAnggota, setDaftarAnggota] = useState([]);

    const ambilDataAnggota = async () => {
        setSedangMemuat(true);
        try {
            const querySnapshot = await getDocs(collection(db, "pengguna"));
            const dataAnggota = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setDaftarAnggota(dataAnggota);
        } catch (error) {
            console.error("Error mengambil data anggota:", error);
        } finally {
            setSedangMemuat(false);
        }
    };

    useEffect(() => {
        ambilDataAnggota();
    }, []);

    return {
        sedangMemuat,
        daftarAnggota,
    };
};

export default useTampilkanAnggota;
