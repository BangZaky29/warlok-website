import type { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import { Button } from '../ui/Button';
import type { PricingPlan } from '../../types/pricing';

interface PaymentFormProps {
    selectedPlan: PricingPlan;
    onCancel: () => void;
}

export const PaymentForm: FC<PaymentFormProps> = ({ selectedPlan, onCancel }) => {
    const { formData, isSubmitting, handleChange, handleSubmit } = usePayment(selectedPlan);

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Formulir Pendaftaran</h2>
                <p className="text-gray-600">
                    Silakan isi data di bawah ini untuk mengonfirmasi paket <span className="font-semibold text-blue-600">{selectedPlan.name}</span>.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap Pengurus
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Contoh: 08123456789"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="areaName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama RT/RW / Lingkungan
                    </label>
                    <input
                        type="text"
                        id="areaName"
                        name="areaName"
                        required
                        value={formData.areaName}
                        onChange={handleChange}
                        placeholder="Contoh: RT 01 RW 05 Desa Makmur"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full flex-1"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Memproses...' : 'Konfirmasi via WhatsApp'}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onCancel}
                        className="w-full sm:w-auto"
                    >
                        Batal
                    </Button>
                </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500 italic">
                * Setelah menekan tombol konfirmasi, Anda akan diarahkan ke WhatsApp untuk mengirim pesan kepada admin kami.
            </p>
        </div>
    );
};
