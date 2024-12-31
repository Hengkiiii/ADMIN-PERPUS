"use client";
import React, { useState } from "react";
import { FaPencilAlt, FaCheck, FaTimes } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
// HOOKS
import ModalSuntingBuku from "@/components/modalSuntingBuku";
import useTampilkanPeminjaman from "@/hooks/useTampilkanDataPeminjaman";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MembersTable = () => {
  const { sedangMemuat, daftarPeminjaman } = useTampilkanPeminjaman(); // Fetch data from the hook
  const [bukaModalSunting, setBukaModalSunting] = useState(false);
  const [bukuTerpilih, setBukuTerpilih] = useState(null);

  const [activeTab, setActiveTab] = useState("semuanya");

  const handleBackClick = () => {
    // Handle back button click (if needed)
  };

  const handleApproval = (namaLengkap, approved) => {
    // Handle approval or rejection of requests
    alert(
      `${approved ? "Disetujui" : "Ditolak"}: Permintaan dari ${namaLengkap}`
    );
  };
  const pengarah = useRouter();
  const gambarBawaan = require("@/assets/images/GambarBawaan.jpeg");

  if (sedangMemuat) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-full w-full shadow-lg border border-gray-200 rounded-lg">
      <ToastContainer />
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 p-6"
      >
        <div className="flex items-center justify-between">
          <Typography variant="h4" color="white">
            Daftar Peminjaman
          </Typography>
          <Button
            onClick={() => pengarah.push("/beranda")}
            color="white"
            variant="text"
            className="bg-green-500"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto px-4 py-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200">
                Anggota
              </th>
              <th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200">
                Judul Buku
              </th>
              <th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200">
                Status
              </th>
              <th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-200">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {daftarPeminjaman
              .filter(({ Status }) =>
                activeTab === "semuanya"
                  ? Status !== "Tolak"
                  : Status === activeTab
              )

              .map(({ id, pengguna, buku, Status, Tanggal_Pinjam }, index) => (
                <tr
                  key={id}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Image
                        src={gambarBawaan}
                        alt="Avatar"
                        width={40}
                        height={40}
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {pengguna.namaLengkap}
                      </Typography>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {buku.Nama_Buku}
                    </Typography>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={
                        Status === "Dipinjam"
                          ? "Dipinjam"
                          : Status === "Kembali"
                          ? "Dikembalikan"
                          : Status === "Pending"
                          ? "Pending Persetujuan"
                          : ""
                      }
                      color={
                        Status === "Dipinjam"
                          ? "green"
                          : Status === "Kembali"
                          ? "blue-gray"
                          : Status === "Pending"
                          ? " "
                          : "gray" // Optional fallback color
                      }
                      className="capitalize font-medium"
                    />
                  </td>

                  <td className="px-6 py-4 border-b border-gray-200">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {Tanggal_Pinjam}
                    </Typography>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <Tooltip content="Edit User">
                      <IconButton
                        onClick={() => {
                          setBukaModalSunting(true);
                          setBukuTerpilih(id);
                        }}
                        variant="text"
                        color="blue-gray"
                      >
                        <FaPencilAlt className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between bg-gray-100 px-4 py-2 border-t border-gray-200">
        <Typography variant="small" color="gray">
          Menampilkan 1-5 dari {daftarPeminjaman.length} data
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Sebelumnya
          </Button>
          <Button size="sm" variant="outlined">
            Selanjutnya
          </Button>
        </div>
      </CardFooter>

      <ModalSuntingBuku
        terbuka={bukaModalSunting}
        tertutup={setBukaModalSunting}
        bukuYangTerpilih={bukuTerpilih}
      />
    </Card>
  );
};

const Page = () => {
  return <MembersTable />;
};

export default Page;
