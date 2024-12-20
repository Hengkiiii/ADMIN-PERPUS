import React, { useState } from 'react';
// hooks
import useTambahDataBukuBaru from "@/hooks/useTambahDataBukuBaru";

const TambahData = () => {
    const [dataForm, setDataForm] = useState({
        namaBuku: '',
        deskripsi: '',
        pengarang: '',
        tahunTerbit: '',
        isbn: '',
    });

    const { sedangMemuat, tambahDataBuku } = useTambahDataBukuBaru();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dataForm.namaBuku || !dataForm.deskripsi || !dataForm.pengarang || !dataForm.tahunTerbit || !dataForm.isbn) {
            toast.error("Semua field wajib diisi!");
            return;
        }

        await tambahDataBuku(dataForm);
        setDataForm({
            namaBuku: '',
            deskripsi: '',
            pengarang: '',
            tahunTerbit: '',
            isbn: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-green-400 to-blue-600 p-6">
            <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Tambah Data Buku</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="namaBuku" className="block text-lg font-medium text-gray-700">Nama Buku</label>
                        <input
                            type="text"
                            id="namaBuku"
                            name="namaBuku"
                            value={dataForm.namaBuku}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-4"
                        />
                    </div>

                    <div>
                        <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700">Deskripsi</label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={dataForm.deskripsi}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-4"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="pengarang" className="block text-lg font-medium text-gray-700">Pengarang</label>
                        <input
                            type="text"
                            id="pengarang"
                            name="pengarang"
                            value={dataForm.pengarang}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-4"
                        />
                    </div>

                    <div>
                        <label htmlFor="tahunTerbit" className="block text-lg font-medium text-gray-700">Tahun Terbit</label>
                        <input
                            type="number"
                            id="tahunTerbit"
                            name="tahunTerbit"
                            value={dataForm.tahunTerbit}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-4"
                        />
                    </div>

                    <div>
                        <label htmlFor="isbn" className="block text-lg font-medium text-gray-700">Nomor ISBN</label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            value={dataForm.isbn}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-4"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={sedangMemuat}
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-xl shadow-md text-lg font-semibold hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400"
                    >
                        {sedangMemuat ? "Memuat..." : "Simpan Data"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TambahData;
