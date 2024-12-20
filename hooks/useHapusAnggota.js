import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useHapusAnggota = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);

    const hapusAnggota = async (id) => {
        setSedangMemuat(true);
        try {
            const anggotaRef = doc(db, "pengguna", id);
            await deleteDoc(anggotaRef);

            toast.success("Anggota berhasil dihapus!");
        } catch (error) {
            console.error("Error menghapus anggota:", error);
            toast.error("Gagal menghapus anggota.");
        } finally {
            setSedangMemuat(false);
        }
    };

    return {
        sedangMemuat,
        hapusAnggota,
    };
};

export default useHapusAnggota;
