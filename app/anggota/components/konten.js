"use client";

import React, { useEffect } from 'react';
import { FaEdit, FaTrash, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
//Hooks
import useTampilkanAnggota from '@/hooks/useTampilkanAnggota';
import useHapusAnggota from '@/hooks/useHapusAnggota';

const AnggotaRow = ({ index, namaLengkap, email, prodi, id, onEdit, onDelete }) => (
    <tr className="hover:bg-green-50 transition duration-200">
        <td className="px-6 py-4 text-center text-green-600">{index + 1}</td>
        <td className="px-6 py-4 flex items-center gap-3">
            <img
                src={`https://i.pravatar.cc/40?u=${id}`}
                alt={namaLengkap}
                className="w-10 h-10 rounded-full"
            />
            <span className="text-blue-700 font-medium">{namaLengkap}</span>
        </td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{prodi}</td>
        <td className="px-6 py-4 flex gap-3 justify-center">

            <button
                onClick={() => onDelete(id)}
                className="text-red-500 hover:text-red-700 transition duration-200"
            >
                <FaTrash size={18} />
            </button>
        </td>
    </tr>
);

const AnggotaTable = () => {
    const router = useRouter();
    const { sedangMemuat, daftarAnggota } = useTampilkanAnggota();  // Using the custom hook
    const { sedangMemuat: sedangMemuatHapus, hapusAnggota } = useHapusAnggota(); // Using the custom hook for deletion

    const handleEdit = (id) => {
        alert(`Sunting data anggota dengan ID: ${id}`);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm(`Yakin ingin menghapus anggota dengan ID: ${id}?`);
        if (confirm) {
            await hapusAnggota(id);  // Call the hook to delete the member
        }
    };

    const handleBackToHome = () => {
        router.push("/beranda");
    };

    if (sedangMemuat) {
        return <div>Memuat data anggota...</div>;
    }

    return (
        <div className="p-8">
            <div className="mb-6">
                <button
                    onClick={handleBackToHome}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
                >
                    <FaHome size={18} />
                    <span>Kembali ke Beranda</span>
                </button>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
                Daftar Anggota
            </h1>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700 rounded-lg">
                    <thead className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-center">#</th>
                            <th className="px-6 py-4 font-semibold">Nama Lengkap</th>
                            <th className="px-6 py-4 font-semibold">Email</th>
                            <th className="px-6 py-4 font-semibold">Program Studi</th>
                            <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {daftarAnggota.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    Tidak ada anggota yang ditemukan.
                                </td>
                            </tr>
                        ) : (
                            daftarAnggota.map((anggota, index) => (
                                <AnggotaRow
                                    key={anggota.id}
                                    index={index}
                                    {...anggota}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {sedangMemuatHapus && (
                <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="text-white">Memproses penghapusan...</div>
                </div>
            )}
        </div>
    );
};

export default AnggotaTable;
