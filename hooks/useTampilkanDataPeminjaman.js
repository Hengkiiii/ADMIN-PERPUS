import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const useTampilkanPeminjaman = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);
    const [daftarPeminjaman, setDaftarPeminjaman] = useState([]);

    const ambilDataPeminjaman = async () => {
        setSedangMemuat(true);
        try {
            const querySnapshot = await getDocs(collection(db, "peminjaman"));
            const dataPeminjaman = [];

            // Loop through each "peminjaman" document
            for (const docSnapshot of querySnapshot.docs) {
                const peminjamanData = docSnapshot.data();
                const ID_Pengguna = peminjamanData.ID_Pengguna;
                const ID_Buku = peminjamanData.ID_Buku;

                // Fetch the user data from the "pengguna" collection based on ID_Pengguna
                const penggunaRef = doc(db, "pengguna", ID_Pengguna);
                const penggunaSnapshot = await getDoc(penggunaRef);
                const penggunaData = penggunaSnapshot.exists() ? penggunaSnapshot.data() : {};

                // Fetch the book data from the "buku" collection based on ID_Buku
                const bukuRef = doc(db, "buku", ID_Buku);
                const bukuSnapshot = await getDoc(bukuRef);
                const bukuData = bukuSnapshot.exists() ? bukuSnapshot.data() : {};

                // Combine the peminjaman, pengguna, and buku data
                dataPeminjaman.push({
                    id: docSnapshot.id,
                    ...peminjamanData,
                    pengguna: penggunaData, // Add user data
                    buku: bukuData,         // Add book data
                });
            }

            setDaftarPeminjaman(dataPeminjaman);
        } catch (error) {
            console.error("Error mengambil data peminjaman:", error);
        } finally {
            setSedangMemuat(false);
        }
    };

    useEffect(() => {
        ambilDataPeminjaman();
    }, []);

    return {
        sedangMemuat,
        daftarPeminjaman,
    };
};

export default useTampilkanPeminjaman;
