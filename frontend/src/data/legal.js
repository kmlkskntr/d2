// ============================================================
// D2 GRUP — Yasal doküman içerikleri
// ============================================================
const COMPANY = 'D2 Grup';
const CONTACT = 'info@d2grup.com';
export const LEGAL_DOCS = {
    gizlilik: {
        title: 'GİZLİLİK POLİTİKASI',
        eyebrow: 'YASAL',
        updated: '11 Temmuz 2026',
        intro: `${COMPANY} olarak, web sitemizi ziyaret eden kullanıcıların gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, hangi verileri topladığımızı, bu verileri nasıl kullandığımızı ve haklarınızı açıklar.`,
        sections: [
            {
                heading: '1. Toplanan Bilgiler',
                body: [
                    'İletişim formları aracılığıyla ilettiğiniz ad, soyad, e-posta, telefon ve mesaj içeriği gibi bilgileri topluyoruz.',
                    'Ayrıca site kullanımını iyileştirmek amacıyla çerezler ve benzeri teknolojiler üzerinden anonim kullanım verileri toplanabilir.',
                ],
            },
            {
                heading: '2. Bilgilerin Kullanımı',
                body: [
                    'Toplanan bilgiler; taleplerinizi yanıtlamak, ürün ve hizmetlerimiz hakkında bilgilendirme yapmak, teknik destek sağlamak ve yasal yükümlülükleri yerine getirmek amacıyla kullanılır.',
                    'Bilgileriniz, açık rızanız olmadan pazarlama amacıyla üçüncü taraflarla paylaşılmaz.',
                ],
            },
            {
                heading: '3. Bilgilerin Korunması',
                body: [
                    'Kişisel verileriniz, yetkisiz erişime karşı uygun teknik ve idari güvenlik önlemleriyle korunur.',
                ],
            },
            {
                heading: '4. Üçüncü Taraf Bağlantıları',
                body: [
                    'Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz.',
                ],
            },
            {
                heading: '5. İletişim',
                body: [
                    `Gizlilik politikamızla ilgili sorularınız için ${CONTACT} adresinden bizimle iletişime geçebilirsiniz.`,
                ],
            },
        ],
    },
    kullanim: {
        title: 'KULLANIM KOŞULLARI',
        eyebrow: 'YASAL',
        updated: '11 Temmuz 2026',
        intro: `Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Lütfen siteyi kullanmadan önce bu koşulları dikkatlice okuyunuz.`,
        sections: [
            {
                heading: '1. Genel Hükümler',
                body: [
                    `Bu site ${COMPANY} tarafından işletilmektedir. Sitedeki içerikler bilgilendirme amaçlıdır ve önceden haber verilmeksizin değiştirilebilir.`,
                ],
            },
            {
                heading: '2. Fikri Mülkiyet',
                body: [
                    'Sitedeki tüm metin, görsel, logo ve tasarım öğeleri telif hakkı ve ilgili fikri mülkiyet mevzuatı ile korunmaktadır. İzinsiz kullanılamaz ve çoğaltılamaz.',
                ],
            },
            {
                heading: '3. Ürün ve Hizmet Bilgileri',
                body: [
                    'Cihaz ve ürün bilgileri profesyonel medikal estetik kullanımına yöneliktir. Görseller temsili olabilir; teknik özellikler üretici güncellemelerine göre değişebilir.',
                ],
            },
            {
                heading: '4. Sorumluluğun Sınırlandırılması',
                body: [
                    `${COMPANY}, sitenin kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamaz.`,
                ],
            },
            {
                heading: '5. Değişiklikler',
                body: [
                    'Bu koşullar zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlandığı andan itibaren geçerlidir.',
                ],
            },
        ],
    },
    kvkk: {
        title: 'KVKK AYDINLATMA METNİ',
        eyebrow: 'YASAL',
        updated: '11 Temmuz 2026',
        intro: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri sorumlusu sıfatıyla ${COMPANY} tarafından kişisel verilerinizin işlenmesine ilişkin aydınlatma metnidir.`,
        sections: [
            {
                heading: '1. Veri Sorumlusu',
                body: [
                    `Kişisel verileriniz, veri sorumlusu ${COMPANY} tarafından aşağıda açıklanan kapsamda işlenmektedir.`,
                ],
            },
            {
                heading: '2. İşlenen Kişisel Veriler',
                body: [
                    'Kimlik ve iletişim bilgileri (ad, soyad, telefon, e-posta) ile talep/şikâyet içeriğiniz işlenebilir.',
                ],
            },
            {
                heading: '3. İşleme Amaçları',
                body: [
                    'Verileriniz; taleplerinizin karşılanması, ürün ve hizmet sunumu, sözleşme süreçlerinin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.',
                ],
            },
            {
                heading: '4. Haklarınız',
                body: [
                    'KVKK madde 11 uyarınca; verilerinize erişme, düzeltilmesini veya silinmesini talep etme, işlemeye itiraz etme haklarına sahipsiniz.',
                    `Taleplerinizi ${CONTACT} adresine iletebilirsiniz.`,
                ],
            },
        ],
    },
    cerez: {
        title: 'ÇEREZ POLİTİKASI',
        eyebrow: 'YASAL',
        updated: '11 Temmuz 2026',
        intro: `Bu Çerez Politikası, ${COMPANY} web sitesinde çerezlerin nasıl kullanıldığını açıklar.`,
        sections: [
            {
                heading: '1. Çerez Nedir?',
                body: [
                    'Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını ve kullanıcı deneyiminin iyileştirilmesini sağlar.',
                ],
            },
            {
                heading: '2. Kullanılan Çerez Türleri',
                body: [
                    'Zorunlu çerezler: Sitenin temel işlevleri için gereklidir.',
                    'Performans/analiz çerezleri: Site kullanımını anonim olarak ölçer ve iyileştirmemize yardımcı olur.',
                ],
            },
            {
                heading: '3. Çerezlerin Yönetimi',
                body: [
                    'Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Ancak bazı çerezlerin engellenmesi sitenin işlevselliğini etkileyebilir.',
                ],
            },
            {
                heading: '4. İletişim',
                body: [
                    `Çerez politikamızla ilgili sorularınız için ${CONTACT} adresine yazabilirsiniz.`,
                ],
            },
        ],
    },
};
