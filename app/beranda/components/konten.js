'use client'
import React from 'react';
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const books = [
    {
        title: 'Pemrograman Web Dasar',
        author: 'John Doe',
        description: 'Belajar dasar-dasar pemrograman web menggunakan HTnpm runML, CSS, dan JavaScript.',
        image: '/buku1.jpg',

    },
    {
        title: 'Algoritma dan Struktur Data',
        author: 'Jane Smith',
        description: 'Pelajari algoritma dan struktur data yang digunakan dalam pengembangan perangkat lunak.',
        image: '/buku2.jpg',
    },
    {
        title: 'Design Pattern',
        author: 'Robert Johnson',
        description: 'Memahami berbagai pola desain dalam pengembangan perangkat lunak untuk meningkatkan kode yang dapat digunakan kembali.',
        image: '/buku3.jpg',
    },
    {
        title: 'React untuk Pemula',
        author: 'Sarah Lee',
        description: 'Pelajari dasar-dasar React, pustaka JavaScript untuk membangun antarmuka pengguna.',
        image: '/buku1.jpg',
    },
    {
        title: 'Node.js dan Express',
        author: 'David Kim',
        description: 'Membangun aplikasi backend menggunakan Node.js dan Express framework.',
        image: '/buku2.jpg',
    },
    {
        title: 'Pengantar AI',
        author: 'Emily Brown',
        description: 'Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.',
        image: '/buku3.jpg',
    },
    {
        title: 'Node.js dan Express',
        author: 'David Kim',
        description: 'Membangun aplikasi backend menggunakan Node.js dan Express framework.',
        image: '/buku2.jpg',
    },
    {
        title: 'Pengantar AI',
        author: 'Emily Brown',
        description: 'Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.',
        image: '/buku3.jpg',
    },



];

function Konten() {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className='h-[950px] flex flex-col justify-center mt-5 px-10'>
            <Typography className='text-3xl font-bold text-gray-800 mb-8 self-start mx-6'>Daftar Buku</Typography>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-8'>
                {books.map((book, index) => (
                    <div key={index} className='bg-gray-700 bg-opacity-10 p-6 w-80 h-96 rounded-lg shadow-lg border border-black border-opacity-15'>
                        <img
                            src={book.image}
                            alt={book.title}
                            className='w-full h-[200px] object-contain rounded-md mb-4'
                        />
                        <h2 className='text-xl font-semibold text-gray-800'>{book.title}</h2>
                        <p className='text-sm text-gray-600 mb-2'>{book.author}</p>
                        <p className='text-gray-600 mb-4'>{book.description}</p>
                    </div>
                ))}
            </div>

            <div className=" my-6 flex self-end gap-4">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </div>

    );
}

export default Konten;
