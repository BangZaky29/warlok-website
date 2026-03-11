import type { PricingPlan } from '../types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'gratis',
    name: 'Paket Gratis',
    price: 'Gratis',
    period: '',
    features: [
      'Maksimal 30 warga',
      'Fitur Iuran',
      'Konsultasi Teknis (08.00 - 17.00 WIB)'
    ],
    isPopular: false,
  },
  {
    id: 'paket-50k',
    name: 'Paket 50.000',
    price: 'Rp 50.000',
    period: '/ bulan',
    features: [
      'Maksimal 50 warga',
      'Fitur Iuran',
      'Fitur Laporan',
      'Konsultasi Teknis (08.00 - 17.00 WIB)'
    ],
    isPopular: false,
  },
  {
    id: 'paket-80k',
    name: 'Paket 80.000',
    price: 'Rp 80.000',
    period: '/ bulan',
    features: [
      'Maksimal 100 warga',
      'Fitur Iuran',
      'Fitur Laporan',
      'Fitur Chating',
      'Fitur Panik Darurat',
      'Konsultasi Teknis (08.00 - 17.00 WIB)'
    ],
    isPopular: true,
  },
  {
    id: 'paket-125k',
    name: 'Paket 125.000',
    price: 'Rp 125.000',
    period: '/ bulan',
    features: [
      'Maksimal 150 warga',
      'Fitur Iuran',
      'Fitur Laporan',
      'Fitur Chating',
      'Fitur Panik Darurat',
      'Konsultasi Teknis (08.00 - 17.00 WIB)'
    ],
    isPopular: false,
  },
  {
    id: 'paket-150k',
    name: 'Paket 150.000',
    price: 'Rp 150.000',
    period: '/ bulan',
    features: [
      'Maksimal 200 warga',
      'Fitur Iuran',
      'Fitur Laporan',
      'Fitur Chating',
      'Fitur Panik Darurat',
      'Konsultasi Teknis (08.00 - 17.00 WIB)'
    ],
    isPopular: false,
  }
];
