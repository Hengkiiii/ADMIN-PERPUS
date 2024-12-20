import React from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { FaUserFriends, FaPlus } from 'react-icons/fa';
import { List, ListItem, ListItemPrefix, } from "@material-tailwind/react";

const Sidebar = () => {
    const router = useRouter();

    const navigateToPeminjaman = () => {
        router.push('/peminjaman');
    };

    const navigateToAnggota = () => {
        router.push('/anggota');
    };
    const navigateToTambahData = () => {
        router.push('/tambahdata');
    };

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-green-800 to-blue-600 fixed top-0 left-0 flex flex-col text-white font-sans shadow-lg">
            <div className="p-5 text-center text-2xl font-extrabold border-b border-blue-500">
                <div className="flex flex-col items-center">
                    <div className="bg-white text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-md">
                        <span className="font-bold text-2xl">PI</span>
                    </div>
                    <span className="text-sm tracking-wide">Perpustakaan Informatika</span>
                </div>
            </div>

            <div className="flex-1 py-6">
                <List className="my-2 p-0">
                    <ListItem
                        onClick={() => router.push('/beranda')}
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
                    >
                        <ListItemPrefix>
                            <AiOutlineHome className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        </ListItemPrefix>
                        Halaman Utama
                    </ListItem>
                    <ListItem
                        onClick={navigateToPeminjaman}
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
                    >
                        <ListItemPrefix>
                            <AiOutlineUser className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        </ListItemPrefix>
                        Peminjaman
                    </ListItem>
                    <ListItem
                        onClick={navigateToAnggota}
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
                    >
                        <ListItemPrefix>
                            <FaUserFriends className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        </ListItemPrefix>
                        Anggota
                    </ListItem>
                    <ListItem
                        onClick={navigateToTambahData}
                        className="group rounded-none py-1.5 px-3 text-sm font-normal text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
                    >
                        <ListItemPrefix>
                            <FaPlus className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        </ListItemPrefix>
                        Tambah Data
                    </ListItem>

                </List>
            </div>

            <div className="p-5 text-center border-t border-blue-500">
                <ListItem
                    onClick={() => router.push('/')}
                    className="group rounded-none py-1.5 px-3 text-sm font-normal text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
                >
                    <ListItemPrefix>
                        <AiOutlineLogout className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    </ListItemPrefix>
                    Logout
                </ListItem>
            </div>
        </div>
    );
};

export default Sidebar;
