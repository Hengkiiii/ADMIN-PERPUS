import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// PERPUSTAKAAN KAMI
import { db } from "@/lib/firebaseConfig";

const useHapusBuku = () => {
    const [sedangMemuatHapusBuku, setSedangMemuatHapusBuku] = useState(false);

    const hapusBuku = async (id) => {
        try {
            setSedangMemuatHapusBuku(true);
            const referensiBuku = doc(db, "buku", id);
            await deleteDoc(referensiBuku);
            toast.success("Buku berhasil dihapus!");
        } catch (error) {
            toast.error("Terjadi kesalahan saat menghapus buku: " + error.message);
        } finally {
            setSedangMemuatHapusBuku(false);
        }
    };

    return {
        sedangMemuatHapusBuku,
        hapusBuku,
    };
};

export default useHapusBuku;
