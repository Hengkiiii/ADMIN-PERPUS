'use client'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Konten from '@/app/beranda/components/konten'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function page() {
    return (
        <div className="flex">
            <ToastContainer />
            <div className="w-64 bg-gray-100 p-4">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Konten />
            </div>
        </div>


    )
}

export default page