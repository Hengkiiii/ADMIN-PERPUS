// hooks/useTambahDataBukuBaru.js

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "@/lib/firebaseConfig";


const useTambahDataBukuBaru = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);

    const tambahDataBuku = async (dataBuku) => {
        setSedangMemuat(true);

        try {
            const koleksiBuku = collection(db, "buku");
            await addDoc(koleksiBuku, {
                Nama_Buku: dataBuku.namaBuku,
                Deskripsi: dataBuku.deskripsi,
                Pengarang: dataBuku.pengarang,
                Tahun_Terbit: parseInt(dataBuku.tahunTerbit),
                ISBN: dataBuku.isbn,
                dibuatPada: serverTimestamp(),
            });

            toast.success("Data Buku berhasil ditambahkan!");
        } catch (error) {
            console.error("Gagal menambahkan data buku:", error);
            toast.error("Terjadi kesalahan saat menambahkan data buku.");
        } finally {
            setSedangMemuat(false);
        }
    };

    return { sedangMemuat, tambahDataBuku };
};

export default useTambahDataBukuBaru;
