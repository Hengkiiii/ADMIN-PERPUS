import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
// Hooks
import useTampilkanDataBuku from "@/hooks/useTampilkanDataBuku";
import useHapusBuku from "@/hooks/useHapusDataBuku";
// Import modal
import ModalKonfirmasiHapusBuku from "@/components/modalKonfirmasiHapusDataBuku";

function Konten() {
    const { sedangMemuatTampilkanBuku, daftarBuku } = useTampilkanDataBuku();
    const { sedangMemuatHapusBuku, hapusBuku } = useHapusBuku();
    const [halamanAktif, setHalamanAktif] = React.useState(1);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [bookToDelete, setBookToDelete] = React.useState(null);

    const bukuPerHalaman = 10;
    const indeksMulai = (halamanAktif - 1) * bukuPerHalaman;
    const indeksAkhir = indeksMulai + bukuPerHalaman;
    const bukuYangDitampilkan = daftarBuku.slice(indeksMulai, indeksAkhir);

    const berikutnya = () => {
        if (halamanAktif === Math.ceil(daftarBuku.length / bukuPerHalaman)) return;
        setHalamanAktif(halamanAktif + 1);
    };

    const sebelumnya = () => {
        if (halamanAktif === 1) return;
        setHalamanAktif(halamanAktif - 1);
    };

    const handleDelete = (book) => {
        setBookToDelete(book); // Menyimpan buku yang akan dihapus
        setOpenDialog(true); // Menampilkan modal
    };

    const confirmDelete = () => {
        if (bookToDelete) {
            hapusBuku(bookToDelete.id); // Menghapus buku berdasarkan ID
            setOpenDialog(false); // Menutup modal setelah konfirmasi
            setBookToDelete(null); // Reset data buku yang akan dihapus
        }
    };

    return (
        <div className="h-auto flex flex-col justify-between mt-5 px-10">
            <Typography className="text-3xl font-bold text-gray-800 mb-8 self-start mx-6">
                Daftar Buku
            </Typography>

            {sedangMemuatTampilkanBuku ? (
                <p className="text-gray-700">Memuat data buku...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-800 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Nama Buku</th>
                                <th className="py-3 px-6 text-left">Pengarang</th>
                                <th className="py-3 px-6 text-left">Deskripsi</th>
                                <th className="py-3 px-6 text-left">Tahun Terbit</th>
                                <th className="py-3 px-6 text-left">ISBN</th>
                                <th className="py-3 px-6 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {bukuYangDitampilkan.length > 0 ? (
                                bukuYangDitampilkan.map((book) => (
                                    <tr
                                        key={book.id}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap font-medium text-gray-800">
                                            {book.Nama_Buku}
                                        </td>
                                        <td className="py-3 px-6 text-left">{book.Pengarang}</td>
                                        <td className="py-3 px-6 text-left truncate max-w-md">
                                            {book.Deskripsi}
                                        </td>
                                        <td className="py-3 px-6 text-left truncate max-w-md">
                                            {book.Tahun_Terbit}
                                        </td>
                                        <td className="py-3 px-6 text-left truncate max-w-md">
                                            {book.ISBN}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <IconButton
                                                onClick={() => handleDelete(book)} // Mengarahkan ke handleDelete
                                                color="red"
                                                variant="text"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </IconButton>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-500">
                                        Tidak ada buku yang tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Navigasi Halaman */}
            <div className="flex justify-center gap-4 my-8">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={sebelumnya}
                    disabled={halamanAktif === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Sebelumnya
                </Button>
                <div className="flex items-center gap-2">
                    {Array.from({ length: Math.ceil(daftarBuku.length / bukuPerHalaman) }, (_, index) => (
                        <IconButton
                            key={index + 1}
                            variant={halamanAktif === index + 1 ? "filled" : "text"}
                            color="gray"
                            onClick={() => setHalamanAktif(index + 1)}
                        >
                            {index + 1}
                        </IconButton>
                    ))}
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={berikutnya}
                    disabled={halamanAktif === Math.ceil(daftarBuku.length / bukuPerHalaman)}
                >
                    Berikutnya
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>

            {/* Modal Konfirmasi Hapus Buku */}
            <ModalKonfirmasiHapusBuku
                terbuka={openDialog}
                tertutup={setOpenDialog}
                bukuYangTerpilih={bookToDelete ? bookToDelete.Nama_Buku : ""}
                konfirmasiHapusBuku={confirmDelete}
                sedangMemuatHapus={sedangMemuatHapusBuku}
            />
        </div>
    );
}

export default Konten;
