import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Option,
  Select,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Memuat from "@/components/memuat";
import useSuntingStatusBuku from "@/hooks/useSuntingStatusBuku";

const ModalSuntingBuku = ({ terbuka, tertutup, bukuYangTerpilih }) => {
  const { status, setStatus, sedangMemuatSunting, updateStatusPeminjaman } =
    useSuntingStatusBuku(bukuYangTerpilih);

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

      <DialogHeader className="text-black">Sunting Buku</DialogHeader>

      <DialogBody className="text-black">
        <form>
          <Select
            value={status}
            onChange={(e) => setStatus(e)}
            label="Pilih Status"
          >
            <Option value="Dipinjam">Dipinjam</Option>
            <Option value="Tolak">Tolak</Option>
          </Select>
        </form>
      </DialogBody>

      <DialogFooter className="space-x-4">
        <Button
          onClick={async () => {
            await updateStatusPeminjaman();
            tertutup(false);
          }}
          variant="gradient"
          color="blue"
          className={`${
            sedangMemuatSunting
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          disabled={sedangMemuatSunting}
        >
          {sedangMemuatSunting ? <Memuat /> : "Sunting"}
        </Button>
        <Button onClick={() => tertutup(false)} variant="text" color="red">
          Batal
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalSuntingBuku;
