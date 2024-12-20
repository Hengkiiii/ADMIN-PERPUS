'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';
import TambahData from '@/app/tambahdata/components/konten';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function TambahDataPage() {
    return (
        <div className="flex">
            <ToastContainer />
            <div className="w-64 bg-gray-100 p-4">
                <Sidebar />
            </div>
            <div className="flex-1 p-4">
                <TambahData />
            </div>
        </div>
    );
}

export default TambahDataPage;
