import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function formatWhatsAppLink(data: {
    packageName: string;
    location: string;
    date: string;
    pax: number;
    name: string;
    phone: string;
}) {
    const phone = "6281222302050";
    const message = `Halo Paralayang Bandung, saya ingin booking:
- Paket: ${data.packageName}
- Lokasi: ${data.location}
- Tanggal: ${data.date}
- Jumlah: ${data.pax} orang
- Nama: ${data.name}
- No. HP: ${data.phone}

Mohon konfirmasi ketersediaan. Terima kasih!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
