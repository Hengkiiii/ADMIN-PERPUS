'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPencilAlt, FaCheck, FaTimes } from 'react-icons/fa';
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Button,
    Input
} from "@material-tailwind/react";

const TABS = [
    { label: "Semuanya", value: "semuanya" },
    { label: "Dipinjam", value: "dipinjam" },
    { label: "Dikembalikan", value: "dikembalikan" },
    { label: "Pending", value: "pending" },
];

const TABLE_HEAD = ["Anggota", "Judul Buku", "Status", "Tanggal", "Aksi"];

const TABLE_ROWS = [
    { img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", name: "John Michael", judul: "React for Beginners", status: "pending", date: "23/04/18" },
    { img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg", name: "Alexa Liras", judul: "Advanced JavaScript", status: "dipinjam", date: "23/04/18" },
    { img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg", name: "Laurent Perrier", judul: "Node.js in Action", status: "dikembalikan", date: "19/09/17" },
    { img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg", name: "Michael Levi", judul: "CSS Mastery", status: "pending", date: "24/12/08" },
    { img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg", name: "Richard Gran", judul: "HTML & CSS for Web Developers", status: "dikembalikan", date: "04/10/21" },
];

const MembersTable = () => {
    const [activeTab, setActiveTab] = useState("semuanya");
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/beranda');
    };

    const handleApproval = (name, approval) => {
        alert(`${approval ? "Disetujui" : "Ditolak"}: Permintaan dari ${name}`);
    };

    return (
        <Card className="h-full w-full shadow-lg border border-gray-200 rounded-lg">
            <CardHeader floated={false} shadow={false} className="rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 p-6">
                <div className="flex items-center justify-between">
                    <Typography variant="h4" color="white">
                        Daftar Peminjaman
                    </Typography>
                    <Button onClick={handleBackClick} color="white" variant="text" className="bg-green-500">
                        Kembali ke Beranda
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-4 py-6">
                <div className="mb-4 flex items-center gap-4">
                </div>
                <Tabs value={activeTab} className="mb-6">
                    <TabsHeader>
                        {TABS.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className="rounded-lg text-gray-700 hover:text-green-600"
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.filter(({ status }) => activeTab === "semuanya" || status === activeTab).map(({ img, name, judul, status, date }, index) => (
                            <tr
                                key={name}
                                className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={img} alt={name} size="sm" />
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            {name}
                                        </Typography>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        {judul}
                                    </Typography>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <Chip
                                        variant="ghost"
                                        size="sm"
                                        value={status === "pending" ? "Pending Persetujuan" : status === "dipinjam" ? "Dipinjam" : "Dikembalikan"}
                                        color={status === "pending" ? "orange" : status === "dipinjam" ? "green" : "blue-gray"}
                                        className="capitalize font-medium"
                                    />
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        {date}
                                    </Typography>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    {status === "pending" ? (
                                        <div className="flex items-center gap-2">
                                            <Tooltip content="Setujui">
                                                <IconButton
                                                    variant="text"
                                                    color="green"
                                                    onClick={() => handleApproval(name, true)}
                                                >
                                                    <FaCheck className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip content="Tolak">
                                                <IconButton
                                                    variant="text"
                                                    color="red"
                                                    onClick={() => handleApproval(name, false)}
                                                >
                                                    <FaTimes className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    ) : (
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text" color="blue-gray">
                                                <FaPencilAlt className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between bg-gray-100 px-4 py-2 border-t border-gray-200">
                <Typography variant="small" color="gray">
                    Menampilkan 1-5 dari 5 data
                </Typography>
                <div className="flex gap-2">
                    <Button size="sm" variant="outlined">Sebelumnya</Button>
                    <Button size="sm" variant="outlined">Selanjutnya</Button>
                </div>
            </CardFooter>
        </Card>
    );
};

const Page = () => {
    return <MembersTable />;
};

export default Page;
