export const CATEGORIES = [
    {
        id: 'yuz',
        slug: 'yuz',
        title: 'YÜZ',
        subtitle: 'TEKNOLOJİLERİ',
        description: 'Cilt gençleştirme, sıkılaştırma ve göz çevresi bakımı için ileri medikal estetik platformları.',
        longDescription: 'Yüz teknolojileri kategorimiz; soğutma, radyofrekans, lazer, HIFU ve mikroakım gibi kanıtlanmış modaliteleri bir araya getirerek cilt gençleştirme, leke ve kırışıklık tedavisi, göz çevresi bakımı ve non-invaziv yüz germe alanlarında kliniklerinize eksiksiz bir çözüm portföyü sunar.',
        image: 'assets/renders/face-tech.jpg',
        highlights: ['Cilt Gençleştirme', 'Göz Çevresi Bakımı', 'Leke & Kırışıklık', 'Non-invaziv Lifting'],
    },
    {
        id: 'vucut',
        slug: 'vucut',
        title: 'VÜCUT',
        subtitle: 'TEKNOLOJİLERİ',
        description: 'Bölgesel incelme, kas geliştirme ve selülit tedavisi için ameliyatsız vücut şekillendirme sistemleri.',
        longDescription: 'Vücut teknolojileri kategorimiz; cryolipolysis, EMS, akustik dalga ve ultrason temelli sistemlerle ameliyatsız yağ azaltma, kas güçlendirme, selülit tedavisi ve lenfatik drenaj protokollerini kapsar. Konforlu ve tekrarlanabilir sonuçlar için tasarlanmıştır.',
        image: 'assets/renders/body-tech.jpg',
        highlights: ['Bölgesel İncelme', 'Kas Geliştirme (EMS)', 'Selülit Tedavisi', 'Lenfatik Drenaj'],
    },
    {
        id: 'longevity',
        slug: 'longevity',
        title: 'LONGEVITY',
        subtitle: 'TEKNOLOJİLERİ',
        description: 'Hücresel yaşlanma karşıtı, bütünsel yenilenme ve sağlıklı yaşam odaklı yeni nesil platformlar.',
        longDescription: 'Longevity kategorimiz, cilt ve vücut yenilemesini bütünsel bir yaklaşımla ele alan yeni nesil sistemlerden oluşur. Hücresel düzeyde yaşlanma karşıtı protokolleri kliniğinize taşıyarak, sağlıklı yaşam ve estetik sonuçları bir araya getirir.',
        image: 'assets/renders/longevity-tech.jpg',
        highlights: ['Hücresel Yenilenme', 'Anti-aging Protokoller', 'Bütünsel Yaklaşım', 'Sağlıklı Yaşam'],
    },
    {
        id: 'global',
        slug: 'global',
        title: 'GLOBAL',
        subtitle: 'MARKALAR',
        description: 'Dünyanın lider üreticilerinin patentli platformları: Fotona, Lumenis, InMode, HydraFacial ve daha fazlası.',
        longDescription: 'Global markalar kategorimiz; Fotona, Lumenis, InMode ve HydraFacial gibi dünyanın en saygın üreticilerinin patentli cihazlarını, D2 Grup güvencesi, teknik servis ve klinik eğitim desteğiyle bir araya getirir.',
        image: 'assets/renders/device-white-tower.jpg',
        highlights: ['Fotona', 'Lumenis', 'InMode', 'HydraFacial'],
    },
];
export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
export const CATEGORY_LABEL = {
    yuz: 'Yüz Teknolojileri',
    vucut: 'Vücut Teknolojileri',
    longevity: 'Longevity',
    global: 'Global Markalar',
};
