import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useSuntingStatusBuku = (dataTerpilih) => {
  const [status, setStatus] = useState(null);
  const [sedangMemuatSunting, setSedangMemuatSunting] = useState(false);

  const updateStatusPeminjaman = async () => {
    setSedangMemuatSunting(true);
    try {
      // Referensi dokumen pada koleksi "peminjaman"
      const docRef = doc(db, "peminjaman", dataTerpilih);

      // Update status di Firestore
      await updateDoc(docRef, {
        Status: status,
      });

      // Menampilkan toast sukses
      toast.success("Status berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal mengupdate status:", error);
      // Menampilkan toast error
      toast.error("Gagal memperbarui status. Silakan coba lagi.");
    } finally {
      setSedangMemuatSunting(false);
    }
  };

  return {
    status,
    setStatus,
    sedangMemuatSunting,
    updateStatusPeminjaman,
  };
};

export default useSuntingStatusBuku;
