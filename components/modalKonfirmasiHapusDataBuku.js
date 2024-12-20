import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// KOMPONEN KAMI
import Memuat from "@/components/memuat";

const ModalKonfirmasiHapusBuku = ({
    terbuka,
    tertutup,
    bukuYangTerpilih,
    konfirmasiHapusBuku,
    sedangMemuatHapus,
}) => {
    return (
        <Dialog
            open={terbuka}
            handler={() => tertutup(false)}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            size="md"
            className="bg-[#fff] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
            <div className="absolute top-3 right-3">
                <IconButton variant="text" color="red" onClick={() => tertutup(false)}>
                    <XMarkIcon className="h-6 w-6" />
                </IconButton>
            </div>

            <DialogHeader className="text-black">
                Konfirmasi Hapus Data Buku
            </DialogHeader>

            <DialogBody className="text-black">
                <p>
                    Apakah Anda yakin ingin menghapus buku dengan judul
                    <strong className="font-bold"> {bukuYangTerpilih}</strong>?
                    Tindakan ini tidak dapat dibatalkan.
                </p>
            </DialogBody>

            <DialogFooter className="space-x-4">
                <Button
                    onClick={konfirmasiHapusBuku}
                    variant="gradient"
                    color="red"
                    disabled={sedangMemuatHapus}
                    className={`${sedangMemuatHapus ? "opacity-50 cursor-not-allowed" : "opacity-100"
                        }`}
                >
                    {sedangMemuatHapus ? <Memuat /> : "Hapus Buku"}
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default ModalKonfirmasiHapusBuku;
