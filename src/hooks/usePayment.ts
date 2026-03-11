import { useState } from 'react';
import type { PricingPlan } from '../types/pricing';

interface PaymentFormData {
    fullName: string;
    phoneNumber: string;
    areaName: string; // RT/RW Name
    selectedPlan: PricingPlan | null;
}

export const usePayment = (initialPlan: PricingPlan | null) => {
    const [formData, setFormData] = useState<PaymentFormData>({
        fullName: '',
        phoneNumber: '',
        areaName: '',
        selectedPlan: initialPlan,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formatWhatsAppMessage = () => {
        const { fullName, phoneNumber, areaName, selectedPlan } = formData;
        const adminNumber = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || '6281995770190';

        const message = `*KONFIRMASI PEMBAYARAN WARLOK*
--------------------------------------------
*Data Pelanggan:*
Nama: ${fullName}
No. WA: ${phoneNumber}
Lingkungan: ${areaName}

*Paket Terpilih:*
Paket: ${selectedPlan?.name}
Harga: ${selectedPlan?.price}${selectedPlan?.period}

--------------------------------------------
_Mohon konfirmasi pendaftaran saya untuk aplikasi WARLOK._`;

        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${adminNumber}?text=${encodedMessage}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const whatsappUrl = formatWhatsAppMessage();
        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
    };

    return {
        formData,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
};
