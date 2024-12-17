'use client'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Konten from '@/app/beranda/components/konten'


function page() {
    return (
        <div className="flex">
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