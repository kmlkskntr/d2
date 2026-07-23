// ============================================================
// D2 GRUP — Ürün kataloğu (müşteri klasörlerinden yeniden oluşturuldu)
// Kaynak: d2grup/urunler/<19 klasör>. İçerik yalnızca müşteri dokümanlarından
// derlenmiştir; eksik alanlar "Daha sonra eklenecek" olarak işaretlenmiştir.
// Eski ürünler products.legacy.ts içinde arşivlenmiştir (silinmedi).
// ============================================================
import { Product, CategoryId } from '../types';

export const PRODUCTS: Product[] = [
  {
    "slug": "frozen-face",
    "name": "FROZEN FACE",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Soğuk başlıklı, iğnesiz mezoterapi ve yüz kaldırma cihazı; aktif serumları acısız şekilde cilt altına iletir.",
    "description": "Soğuk başlığı ile acısız uygulanan, aktif içerikli serumları iğnesiz şekilde cilt altına ileten yüz kaldırma ve sıkılaştırma cihazı.",
    "longDescription": "Frozen Face, cilt üzerinde hareket ettirilen soğuk başlığı ile uygulama yapabilen bir yüz kaldırma ve iğnesiz mezoterapi cihazıdır. İğneli işlemlerdeki gibi bölge bölge noktalardan ürün göndermek yerine, cihaz başlığı üzerinden dağılan serumu homojen olarak cilde yedirir ve dağıtır; bu da daha etkili bir sonuç sağlar. Uygulama önce soğuk radyofrekans ve aktif içerikli serumlar ile kolajen artışını ve cildin sıkılaşmasını sağlar (~20 dk). Devamında elektroporasyon yardımıyla ciltte mikro kanallar oluşturularak aktif serumların alt tabakalara nüfuz etmesine yardımcı olunur (toplam ~40 dk). Dolgu işlemi tercih etmeyen kişiler için dolgu ve botoks etkisi veren bir yöntemdir.",
    "sections": [
      {
        "title": "Frozen Face Uygulaması Nedir?",
        "body": "İğnesiz mezoterapi olarak da bilinen bu yöntem, soğuk başlığı sayesinde konforlu bir işlem sunar. Cilt yüzeyindeki ince kırışıklıklarda azalma görülür, cilt daha sıkı ve dolgun hale gelir. Serum tek tek noktalardan değil, başlık üzerinden eşit olarak cilde dağıtılır."
      },
      {
        "title": "Nasıl Uygulanır?",
        "body": "Analiz sonucuna göre cildin ihtiyacına uygun serumlar belirlenir. Cilt temizliği sonrası önce soğuk radyofrekans ve aktif serumlarla kolajen artışı ve sıkılaşma sağlanır (20 dk). Ardından elektroporasyon ile mikro kanallar oluşturularak serumlar alt tabakaya iletilir (toplam ~40 dk). Son adımda güneş koruyucu krem uygulanır."
      },
      {
        "title": "Teknolojiler",
        "body": "Elektroporasyon · Ultrasound (Ultra) · Cryo (soğuk terapi) · Radyofrekans (RF)"
      },
      {
        "title": "Avantajlar",
        "body": "Acısız ve konforlu · İğnesiz ve cerrahisiz · Dolgu işlemine alternatif · Serumun homojen dağılımıyla daha etkili sonuç · Kolajen üretimini artırır"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Birer hafta aralıklarla 4 seans peş peşe uygulanır; her seans yaklaşık 40 dakika sürer. Sonrasında etkinin devamı için koruma seansları önerilir. Uygulanan bölgede açık yara/enfeksiyon varsa uygulanmaz."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cildinde sıkılaşma, gençleşme, ince kırışıklık ve kolajen kaybı olan; dolgu/iğneli işlem tercih etmeyen, acısız ve iğnesiz bir bakım isteyen kişiler."
      }
    ],
    "image": "assets/products/frozen-face/main.jpg",
    "gallery": [
      "assets/products/frozen-face/main.jpg",
      "assets/products/frozen-face/g1.jpg",
      "assets/products/frozen-face/g2.jpg",
      "assets/products/frozen-face/g3.png",
      "assets/products/frozen-face/g4.jpg",
      "assets/products/frozen-face/g5.png",
      "assets/products/frozen-face/g6.png"
    ],
    "tags": [
      "İğnesiz Mezoterapi",
      "RF",
      "Cryo"
    ],
    "technologies": [],
    "features": [
      "Soğuk (buz) başlıkla acısız ve konforlu uygulama",
      "İğnesiz mezoterapi - iğne ve cerrahi işleme gerek yok",
      "Serumu cilde homojen ve eşit dağıtan hareketli başlık",
      "Dolgu ve botoks etkisi",
      "Başlıkla yüz kaldırma etkisi",
      "Frozen Eyes başlığı ile göz altı/üstü uygulama seçeneği"
    ],
    "indications": [
      "İnce kırışıklıklar ve ince çizgiler",
      "Cilt sıkılaşması ve gençleşme",
      "Kolajen kaybı",
      "Cilt lekelerinin azaltılması",
      "Nem kaybı / cansız cilt",
      "Dolgunluk ve canlılık kazandırma"
    ],
    "specs": [],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "beforeAfter": [
      "assets/products/frozen-face/ba1.jpg",
      "assets/products/frozen-face/ba2.jpg",
      "assets/products/frozen-face/ba3.jpg",
      "assets/products/frozen-face/ba4.jpg",
      "assets/products/frozen-face/ba5.jpg",
      "assets/products/frozen-face/ba6.jpg",
      "assets/products/frozen-face/ba7.jpg",
      "assets/products/frozen-face/ba8.jpg",
      "assets/products/frozen-face/ba9.jpg",
      "assets/products/frozen-face/ba10.jpg"
    ]
  },
  {
    "slug": "frozen-face-o2",
    "name": "FROZEN FACE O2",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Şeffaf oksijen kubbesi ve el aplikatörü ile cildi canlandıran oksijen bazlı yüz bakım cihazı.",
    "description": "Dokunmatik ekranlı ana ünite, oksijen kubbesi (dome) ve serum aplikatörü ile oksijen odaklı yüz bakımı sunan cihaz.",
    "longDescription": "FROZEN FACE O2, medikal estetik uygulamalarında kullanılan bir yüz bakım cihazıdır. Sistem; dokunmatik ekranlı ana ünite, cildin üzerine oksijen bazlı uygulama yapmayı sağlayan şeffaf yüz kubbesi (dome) ve serum/uygulama başlıklı bir el aplikatöründen oluşur. Cihazın adındaki O2 vurgusu oksijen odaklı bir cilt bakımı konseptine işaret eder. (Bu açıklama yalnızca klasördeki görsellere dayanmaktadır; teknik parametreler doğrulanamamıştır.)",
    "sections": [
      {
        "title": "Teknolojiler",
        "body": "Oksijen (O2) bazlı yüz bakımı"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Yüz cildine yönelik bakım arayan bireyler ile medikal estetik/güzellik merkezleri."
      },
      {
        "title": "Not",
        "body": "Teknik özellikler, endikasyonlar ve kullanım protokolü klasörde metin bulunmadığından daha sonra eklenecektir."
      }
    ],
    "image": "assets/products/frozen-face-o2/main.jpg",
    "gallery": [
      "assets/products/frozen-face-o2/main.jpg",
      "assets/products/frozen-face-o2/g1.png",
      "assets/products/frozen-face-o2/g2.png"
    ],
    "tags": [
      "Oksijen",
      "O2 Terapi"
    ],
    "technologies": [],
    "features": [
      "Dokunmatik ekranlı ana kontrol ünitesi",
      "Şeffaf yüz kubbesi (oksijen uygulama başlığı)",
      "Serum/uygulama hazneli el aplikatörü"
    ],
    "indications": [],
    "specs": [],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "isNew": true,
    "beforeAfter": [
      "assets/products/frozen-face-o2/ba1.jpg",
      "assets/products/frozen-face-o2/ba2.jpg",
      "assets/products/frozen-face-o2/ba3.jpg",
      "assets/products/frozen-face-o2/ba4.jpg",
      "assets/products/frozen-face-o2/ba5.jpg",
      "assets/products/frozen-face-o2/ba6.jpg",
      "assets/products/frozen-face-o2/ba7.jpg",
      "assets/products/frozen-face-o2/ba8.jpg",
      "assets/products/frozen-face-o2/ba9.jpg",
      "assets/products/frozen-face-o2/ba10.jpg"
    ]
  },
  {
    "slug": "frozen-face-pro-max",
    "name": "FROZEN FACE PRO MAX",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "6 farklı teknolojiyi tek sistemde birleştiren; hidrojen ve oksijen fanuslu, 4 mevsim uygulanabilen anti-aging yüz bakım cihazı.",
    "description": "Hidrojen terapi, oksijen fanusu, vakumlu peeling, elektromanyetik, elektroporasyon, cryo, RF ve ultrasound teknolojilerini bir arada sunan çok fonksiyonlu yüz bakım platformu.",
    "longDescription": "Frozen Face Pro Max, gelişen 6 farklı teknolojiyi tek bir sistemde birleştiren, 4 mevsim güvenle uygulanabilen bir medikal estetik cihazıdır. Hidrojen ve oksijen fanusu sayesinde ciltteki lekelerin en derinine inerek, serbest radikaller ile oluşan aktif oksijeni hidrojen ile birleştirir ve vücuttaki zararlı oksijeni ter yoluyla ciltten arındırır; aynı zamanda cildi dezenfekte eder. Vakumlu peeling, elektromanyetik, elektroporasyon, cryo, radyofrekans ve ultrasound teknolojilerini bir arada sunarak iğnesiz şekilde daha genç, sıkı ve gergin bir cilt hedefler.",
    "sections": [
      {
        "title": "Yaşlanmayı Durdurun",
        "body": "Serbest radikallerin ve doğal yaşlanma sürecinin cilt üzerindeki etkilerine karşı tedavi edici özellikte, yaşlanmayı durduran teknoloji deneyimi. 4 mevsim uygulanabilir özelliği sayesinde güvenli ve etkili bir bakım sunar."
      },
      {
        "title": "Hidrojen Tedavisi",
        "body": "Zararlı aktif oksijeni hidrojenle birleştirerek çalışır ve ardından vücuttaki zararlı oksijeni ter yoluyla ortadan kaldırır. Canlılık, beyazlatma, nemlendirme, iltihabı azaltma ve güçlü antioksidan etki sağlar. Serbest radikallerle oluşan aktif oksijeni ciltteki toksinlerle birlikte ter yoluyla arındırır ve cildi dezenfekte eder."
      },
      {
        "title": "Vakumlu Peeling",
        "body": "Cilt tipine uygun 3 ayrı solüsyon sayesinde cildin ihtiyacı olan gözenek temizliğini sağlar; derinlemesine temizlik yaparak cildi detokslar."
      },
      {
        "title": "Elektromanyetik ve Çoklu Teknoloji Başlığı",
        "body": "Elektromanyetik teknoloji ile yüzdeki sarkan ya da azalan kasları yeniden yapılandırır; yüz ovalini düzeltir. Aynı başlıkta elektroporasyon, cryo, radyofrekans ve ultrasound teknolojilerini kullanarak iğnesiz şekilde daha genç, sıkı ve gergin bir cilt sağlar."
      },
      {
        "title": "Teknolojiler",
        "body": "Hidrojen terapi (H2) · Oksijen fanusu · Vakumlu peeling · Elektromanyetik · Elektroporasyon · Cryo · Radyofrekans (RF) · Ultrasound"
      },
      {
        "title": "Avantajlar",
        "body": "İğnesiz uygulama · 4 mevsim güvenle kullanılabilir · Uygulama sonrası sosyal yaşamı etkilemez · Tek seansta çoklu teknoloji · Cildi dezenfekte eder ve detoks sağlar"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cilt yaşlanması, leke, cilt gevşekliği/sarkması sorunlarına iğnesiz ve non-invaziv çözüm arayan yetişkinler."
      }
    ],
    "image": "assets/products/frozen-face-pro-max/main.png",
    "gallery": [
      "assets/products/frozen-face-pro-max/main.png",
      "assets/products/frozen-face-pro-max/g1.png",
      "assets/products/frozen-face-pro-max/g2.png",
      "assets/products/frozen-face-pro-max/g3.png",
      "assets/products/frozen-face-pro-max/g4.png",
      "assets/products/frozen-face-pro-max/g5.png",
      "assets/products/frozen-face-pro-max/g6.png"
    ],
    "tags": [
      "6 Teknoloji",
      "Hidrojen",
      "Anti-Aging"
    ],
    "technologies": [],
    "features": [
      "6 farklı teknoloji tek sistemde",
      "4 mevsim uygulanabilir",
      "Hidrojen terapi sistemi",
      "Hidrojen ve oksijen fanusu",
      "Vakumlu peeling (3 ayrı solüsyon)",
      "Elektromanyetik kas yapılandırma",
      "Tek başlıkta elektroporasyon, cryo, RF ve ultrasound",
      "İğnesiz uygulama",
      "Dermolift MH ve Dermolift ION el başlıkları"
    ],
    "indications": [
      "Ciltteki leke ve cilt problemleri",
      "Cilt yaşlanması ve anti-aging",
      "Cilt gerginliği ve sıkılaştırma",
      "Yüz ovali / sarkan kaslar",
      "Gözenek temizliği ve detoks"
    ],
    "specs": [
      {
        "label": "Peeling solüsyonu",
        "value": "Cilt tipine uygun 3 ayrı solüsyon"
      },
      {
        "label": "El başlıkları",
        "value": "Dermolift MH, Dermolift ION, Hidrojen/Oksijen fanusu"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "isNew": true,
    "beforeAfter": [
      "assets/products/frozen-face-pro-max/ba1.jpg",
      "assets/products/frozen-face-pro-max/ba2.jpg",
      "assets/products/frozen-face-pro-max/ba3.jpg",
      "assets/products/frozen-face-pro-max/ba4.jpg",
      "assets/products/frozen-face-pro-max/ba5.jpg",
      "assets/products/frozen-face-pro-max/ba6.jpg",
      "assets/products/frozen-face-pro-max/ba7.jpg",
      "assets/products/frozen-face-pro-max/ba8.jpg",
      "assets/products/frozen-face-pro-max/ba9.jpg",
      "assets/products/frozen-face-pro-max/ba10.jpg"
    ]
  },
  {
    "slug": "frozen-eyes",
    "name": "FROZEN EYES",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Göz çevresine özel başlığıyla iğnesiz mezoterapi uygulayan, göz altı ve göz kapağı problemlerine yönelik bakım cihazı.",
    "description": "Göz çevresinin hassas anatomisine uyumlu özel başlığı ile iğnesiz mezoterapi uygulayan göz bakım ve tedavi cihazı.",
    "longDescription": "Frozen Eyes, göz çevresinin hassas anatomisine uyumlu özel başlığı sayesinde göz altı ve göz üstü bölgesinde rahatça gezdirilerek uygulama yapılabilen yeni nesil bir iğnesiz mezoterapi cihazıdır. İğneli işlemlerde olduğu gibi ürünü tek tek noktalardan değil, cihaz başlığı üzerinden dağıtılan serumu cilde eşit ve homojen olarak yedirerek uygular. Cihaz, oluşturduğu elektriksel alan ile cilt yüzeyinde mikro kanallar açar; bu kanallar, aktif içerikli serumların hasar görmüş ve neme ihtiyaç duyan alt tabakalara nüfuz etmesine yardımcı olur. İğnesiz, cerrahi işlem gerektirmeyen yapısıyla göz çevresi bakımında güvenli ve konforlu bir alternatif sunar.",
    "sections": [
      {
        "title": "Nasıl Çalışır?",
        "body": "Frozen Eyes, elektriksel alan yaratarak cilt üzerinde mikro kanallar oluşturur. Bu mikro kanallar, cildin ihtiyacına yönelik aktif içerikli serumların, hasar görmüş ve neme ihtiyaç duyan alt tabakaya nüfuz etmesine yardımcı olur."
      },
      {
        "title": "İğnesiz Mezoterapi Avantajı",
        "body": "İğneli işlemlerin aksine ürünü tek tek noktalardan göndermek yerine, başlık üzerinden dağıtılan serumu cilde eşit şekilde yayar. Bu homojen uygulama, göz altı ve göz kapaklarında daha etkili ve konforlu sonuçlar sunar."
      },
      {
        "title": "Teknolojiler",
        "body": "İğnesiz mezoterapi · RF (Radyofrekans) · Titreşim (Vibration)"
      },
      {
        "title": "Avantajlar",
        "body": "İlk seansta gözle görülür etki · Tüm göz çevresi problemlerini tek başlıkla ele alma · İğnesiz ve cerrahi olmayan güvenli uygulama · Serumun homojen dağılımıyla daha etkili sonuç"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Serum uygulandıktan sonra özel başlık göz altı ve göz kapağı bölgesinde gezdirilir; cihaz mikro kanallar aracılığıyla serumu alt tabakalara yedirir. Uygulanan bölgede açık yara veya enfeksiyon varsa işlem uygulanmaz."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Göz altı morluğu, torbalanma, renk eşitsizliği, ince çizgiler ve göz kapağı düşüklüğü gibi göz çevresi problemlerini iğnesiz yöntemlerle gidermek isteyen kişiler."
      }
    ],
    "image": "assets/products/frozen-eyes/main.png",
    "gallery": [
      "assets/products/frozen-eyes/main.png",
      "assets/products/frozen-eyes/g1.png",
      "assets/products/frozen-eyes/g2.png",
      "assets/products/frozen-eyes/g3.png"
    ],
    "tags": [
      "Göz Çevresi",
      "İğnesiz Mezoterapi"
    ],
    "technologies": [],
    "features": [
      "Göz çevresine uyumlu özel tasarım başlık",
      "İğnesiz mezoterapi teknolojisi",
      "RF (radyofrekans) ve titreşim (vibrasyon) fonksiyonları",
      "Serumu cilde homojen dağıtma",
      "Mikro kanallarla aktif serumların derinlemesine emilimi",
      "ON/OFF, RF ve Vibration kontrolleri"
    ],
    "indications": [
      "Göz altı morluğu",
      "Göz altı torbalanması",
      "Renk eşitsizliği",
      "İnce çizgiler",
      "Göz kapağı düşüklüğü"
    ],
    "specs": [
      {
        "label": "Fonksiyonlar",
        "value": "RF, Vibration (Titreşim)"
      },
      {
        "label": "Uygulama Yöntemi",
        "value": "İğnesiz mezoterapi"
      },
      {
        "label": "Uygulama Bölgesi",
        "value": "Göz altı ve göz üstü / göz kapağı"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "beforeAfter": [
      "assets/products/frozen-eyes/ba1.jpg",
      "assets/products/frozen-eyes/ba2.jpg",
      "assets/products/frozen-eyes/ba3.jpg",
      "assets/products/frozen-eyes/ba4.jpg",
      "assets/products/frozen-eyes/ba5.jpg",
      "assets/products/frozen-eyes/ba6.jpg",
      "assets/products/frozen-eyes/ba7.jpg",
      "assets/products/frozen-eyes/ba8.jpg",
      "assets/products/frozen-eyes/ba9.jpg",
      "assets/products/frozen-eyes/ba10.jpg"
    ]
  },
  {
    "slug": "frozen-eyes-pro",
    "name": "FROZEN EYES PRO",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "2.0 MHz radyofrekans, titreşim masajı ve serum infüzyonunu birleştiren non-invaziv göz bakım sistemi.",
    "description": "Radyofrekans, titreşimli masaj ve serum infüzyonunu tek cihazda birleştiren göz çevresi bakım cihazı.",
    "longDescription": "Frozen Eyes PRO, göz çevresindeki tüm problemlere odaklanan ileri teknolojili bir estetik cihazıdır. 2.0 MHz mono-polar radyofrekans enerjisini yüksek frekanslı titreşim ve serum infüzyonu fonksiyonuyla birleştirir. RF dalgası dermal kolajen lifini kontrollü şekilde ısıtarak kolajen yenilenmesini teşvik eder ve zamanla cilt elastikiyetini geri kazandırır; yüksek frekanslı titreşim ise kan dolaşımını ve metabolizmayı hızlandırarak yorgun, şişkin göz çevresini rahatlatır. Özel başlık göz altı ve üstü bölgelerinde rahatça gezdirilebilir. Ameliyat, iğne ve anestezi gerektirmeyen güvenli bir uygulamadır.",
    "sections": [
      {
        "title": "Çalışma Prensibi",
        "body": "2.0 MHz mono-polar RF dalgası dermal kolajen lifini 55-65°C aralığına kadar ısıtarak gevşek cildi sıkılaştırır ve kolajen yenilenmesini teşvik eder. Yüksek frekanslı titreşim masajı kan dolaşımını ve metabolizmayı hızlandırır. Serum infüzyonu ile aktif bakım içeriklerinin cilde daha derin iletilmesi sağlanır."
      },
      {
        "title": "Tedavi Sonrası Bakım",
        "body": "Uygulamadan sonra onarıcı serum veya göz maskesi uygulanabilir, soğuk kompres yapılabilir. Bir hafta boyunca günlük onarıcı/nemlendirici göz maskesi ve güneş koruması önerilir."
      },
      {
        "title": "Teknolojiler",
        "body": "2.0 MHz Mono-Polar Radyofrekans · Yüksek frekanslı titreşim masajı · Serum infüzyonu"
      },
      {
        "title": "Avantajlar",
        "body": "Göz bölgesi için özel tasarım; birden fazla problemi tek adımda hedefler · Ameliyatsız, iğnesiz ve anestezisiz uygulama · Güvenli ve ağrısız; seans sonrası günlük yaşama hemen dönüş · İlk seanstan itibaren gözle görülür sonuçlar"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Sap üzerindeki hazneye serum doldurulur; başlık göz torbası ve koyu halka bölgesinden kaş ucuna doğru dairesel hareketlerle, cildi yukarı kaldıracak şekilde her adım 3-5 kez gezdirilir. Her iki göz için toplam ~30 dakika. Seans aralığı 7-10 gün, ayda 3-4 seans önerilir."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Göz çevresinde kırışıklık, ince çizgi, koyu halka, göz torbası, şişlik ve elastikiyet kaybı yaşayan; ameliyatsız bir göz çevresi bakımı arayan kişiler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Aktif bulaşıcı hastalık (herpes vb.) · Ağır sistemik hastalık (kalp hastalığı, diyabet, yüksek tansiyon) · Hamilelik ve emzirme · Son bir ay içinde lazer tedavisi görmüş olmak"
      }
    ],
    "image": "assets/products/frozen-eyes-pro/main.png",
    "gallery": [
      "assets/products/frozen-eyes-pro/main.png",
      "assets/products/frozen-eyes-pro/g1.png",
      "assets/products/frozen-eyes-pro/g2.jpg",
      "assets/products/frozen-eyes-pro/g3.png",
      "assets/products/frozen-eyes-pro/g4.jpg",
      "assets/products/frozen-eyes-pro/g5.png",
      "assets/products/frozen-eyes-pro/g6.png"
    ],
    "tags": [
      "Göz Çevresi",
      "RF 2.0 MHz"
    ],
    "technologies": [],
    "features": [
      "Göz kırışıklıklarının giderilmesine yardımcı olur",
      "Göz torbaları ve göz çevresi görünümünü iyileştirir",
      "Serum ve aktif içeriklerin cilde daha iyi emilmesini sağlar",
      "Göz çevresi cildini sıkılaştırır",
      "Göz ödemini azaltır",
      "Masaj başlığı ile etkili göz çevresi masajı"
    ],
    "indications": [
      "Göz torbaları",
      "Göz kırışıklıkları",
      "İnce çizgiler",
      "Şiş gözler (ödem)",
      "Koyu halkalar",
      "Yüz germe / sıkılaştırma"
    ],
    "specs": [
      {
        "label": "Frekans",
        "value": "2.0 MHz"
      },
      {
        "label": "Çalışma modu",
        "value": "RF + Titreşim + Serum infüzyonu"
      },
      {
        "label": "Giriş gücü",
        "value": "6W - 36W"
      },
      {
        "label": "Çıkış gücü",
        "value": "0W - 25W"
      },
      {
        "label": "Güç kaynağı",
        "value": "110/220V AC"
      },
      {
        "label": "Soğutma",
        "value": "Hava (fan) soğutma"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "beforeAfter": [
      "assets/products/frozen-eyes-pro/ba1.jpg",
      "assets/products/frozen-eyes-pro/ba2.jpg",
      "assets/products/frozen-eyes-pro/ba3.jpg",
      "assets/products/frozen-eyes-pro/ba4.jpg",
      "assets/products/frozen-eyes-pro/ba5.jpg",
      "assets/products/frozen-eyes-pro/ba6.jpg",
      "assets/products/frozen-eyes-pro/ba7.jpg",
      "assets/products/frozen-eyes-pro/ba8.jpg",
      "assets/products/frozen-eyes-pro/ba9.jpg"
    ]
  },
  {
    "slug": "frozen-eyes-pro-plus",
    "name": "FROZEN EYES PRO PLUS",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Yeni masaj başlığı ve dijital ekranıyla RF, titreşimli masaj ve serum infüzyonunu birleştiren göz gençleştirme cihazı.",
    "description": "Radyofrekans, titreşimli masaj ve serum infüzyonunu tek başlıkta birleştiren, göz altı torbaları, koyu halkalar ve ödeme odaklanan göz bakım cihazı.",
    "longDescription": "Frozen Eyes PRO PLUS, göz çevresindeki hassas cilde özel geliştirilmiş çok fonksiyonlu bir estetik cihazdır. Mono-polar radyofrekans (2.0 MHz) teknolojisi ile dermal kolajen liflerini kontrollü şekilde ısıtarak kolajen liflerinin büzülmesini, yeni kolajen üretimini ve cildin kademeli olarak yeniden elastikiyet kazanmasını hedefler. Radyofrekansın güçlü ürün iletim özelliği sayesinde uygulanan serum ve bakım ürünlerinin daha derin emilmesini destekler. Yüksek frekanslı titreşimli masaj başlığı kan dolaşımını ve metabolizmayı hızlandırarak yorgun ve şişkin göz çevresini rahatlatır. Yeni masaj başlığı ve dijital ekranı ile ilk seanstan itibaren daha yoğun hyalüronik asit etkisi, azalan kırışıklıklar ve ışıltılı cilt görünümü hedeflenir.",
    "sections": [
      {
        "title": "Çalışma Prensibi",
        "body": "Radyofrekans dalgaları epidermal bariyeri aşarak dermal kolajen liflerini 55-65°C aralığına ısıtır; bu ısı kolajen liflerinin büzülmesini sağlayarak gevşemiş cildi sıkılaştırır, kolajen yenilenmesini uyarır ve elastikiyeti kademeli olarak geri kazandırır. RF ayrıca serum ve bakım ürünlerinin cilde derinlemesine iletilmesini sağlar."
      },
      {
        "title": "Titreşimli Masaj",
        "body": "Yüksek frekanslı titreşim, kan dolaşımını ve metabolizmayı hızlandırır; göz çevresindeki yorgunluk, gerginlik ve şişkinliğin giderilmesine yardımcı olur."
      },
      {
        "title": "Teknolojiler",
        "body": "Mono-polar radyofrekans (2.0 MHz) · Titreşimli masaj · Ürün infüzyonu / serum iletimi"
      },
      {
        "title": "Avantajlar",
        "body": "Göz çevresine özel tasarımla birden fazla probleme tek adımda çözüm · Cerrahi, enjeksiyon ve anestezi gerektirmeyen non-invaziv uygulama · Güvenli ve ağrısız; seans sonrası günlük yaşama hızlı dönüş · İlk seanstan itibaren gözle görülür sonuçlar"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Başlık haznesine serum doldurulur; göz altı ve koyu halka bölgesinden kaş ucuna doğru dairesel hareketlerle en az 3-5 kez gezdirilir. Her iki gözün tamamlanması ~30 dakika sürer. Önerilen RF enerjisi 2-3, titreşim 1-2. Seanslar 7-10 gün arayla, ayda 3-4 kez. Uygulama sonrası onarıcı göz maskesi, soğuk kompres ve güneş koruması önerilir."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Göz altı torbaları, koyu halkalar, ince çizgiler, kırışıklıklar, ödem ve göz çevresinde gevşeme problemine sahip; cerrahi olmayan bir göz bakımı arayan kişiler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Hamilelik ve emzirme · Kalp hastalığı, diyabet, yüksek tansiyon · Aktif enfeksiyon veya herpes dönemi · Yakın zamanda yoğun güneşe maruz kalma"
      }
    ],
    "image": "assets/products/frozen-eyes-pro-plus/main.jpg",
    "gallery": [
      "assets/products/frozen-eyes-pro-plus/main.jpg",
      "assets/products/frozen-eyes-pro-plus/g1.jpg",
      "assets/products/frozen-eyes-pro-plus/g2.png",
      "assets/products/frozen-eyes-pro-plus/g3.jpg",
      "assets/products/frozen-eyes-pro-plus/g4.jpg",
      "assets/products/frozen-eyes-pro-plus/g5.jpg"
    ],
    "tags": [
      "Göz Çevresi",
      "RF",
      "Masaj"
    ],
    "technologies": [],
    "features": [
      "Göz çevresine özel tasarlanmış çok fonksiyonlu başlık",
      "Yeni masaj başlığı ve dijital ekran",
      "Mono-polar radyofrekans (2.0 MHz)",
      "Titreşimli masaj fonksiyonu",
      "Serum ve bakım ürünü infüzyonu",
      "Uygulama başlığında döner (roller) masaj yapısı",
      "Non-invaziv, ağrısız ve konforlu bakım"
    ],
    "indications": [
      "Göz çevresi kırışıklıkları",
      "Göz altı torbaları",
      "Göz altı koyu halkaları",
      "İnce çizgiler",
      "Göz çevresi ödemi ve şişkinlik",
      "Cilt sıkılaştırma ve toparlama"
    ],
    "specs": [
      {
        "label": "Cihaz Adı",
        "value": "Frozen Eyes 2.0"
      },
      {
        "label": "Radyofrekans",
        "value": "2.0 MHz"
      },
      {
        "label": "Çalışma Modu",
        "value": "RF + Titreşim + Ürün İnfüzyonu"
      },
      {
        "label": "Giriş Gücü",
        "value": "6W - 36W"
      },
      {
        "label": "Çıkış Gücü",
        "value": "0W - 25W"
      },
      {
        "label": "Güç Kaynağı",
        "value": "110/220V AC"
      },
      {
        "label": "Soğutma",
        "value": "Hava (fan) soğutma"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "beforeAfter": [
      "assets/products/frozen-eyes-pro-plus/ba1.jpg",
      "assets/products/frozen-eyes-pro-plus/ba2.jpg",
      "assets/products/frozen-eyes-pro-plus/ba3.jpg",
      "assets/products/frozen-eyes-pro-plus/ba4.jpg",
      "assets/products/frozen-eyes-pro-plus/ba5.jpg",
      "assets/products/frozen-eyes-pro-plus/ba6.jpg",
      "assets/products/frozen-eyes-pro-plus/ba7.jpg",
      "assets/products/frozen-eyes-pro-plus/ba8.jpg",
      "assets/products/frozen-eyes-pro-plus/ba9.jpg",
      "assets/products/frozen-eyes-pro-plus/ba10.jpg"
    ]
  },
  {
    "slug": "frozen-cilt-analizi",
    "name": "FROZEN CİLT ANALİZİ",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Yapay zeka destekli, 8 ışık kaynağı ve spektral görüntüleme ile 14 cilt göstergesini analiz eden profesyonel cilt analiz cihazı.",
    "description": "Gelişmiş görüntüleme ile yapay zekayı birleştirerek cildin yüzeysel ve derin katmanlarını analiz eden profesyonel cilt analiz sistemi.",
    "longDescription": "Frozen Cilt Analiz Cihazı, yüz cildini yüksek çözünürlüklü görüntülerle yakalayan yapay zeka destekli bir analiz sistemidir. Beyaz ışık, pozitif/negatif polarize ışık, UV, mavi, Wood, kahverengi ve kırmızı ışık olmak üzere 8 ayrı ışık kaynağı kullanır. Spektral görüntüleme, AI yüz tanıma, derin öğrenme, 3D cilt simülasyonu ve bulut bilişim teknolojilerini bir araya getirerek cildin yüzeysel ve derin katmanlarını niceliksel olarak analiz eder ve cilt sağlığına yönelik 14 göstergeyi kapsamlı biçimde raporlar. Elde edilen görüntüler bulut sunucusunda AI analizinden geçirilir; her boyut için kantitatif analiz, önlemler ve önerilen bakım çözümleri sunulur.",
    "sections": [
      {
        "title": "Yüzeysel Analiz",
        "body": "Sebum, gözenekler, pigmentasyon (leke), kırışıklıklar, akne, siyah nokta, koyu halka ve cilt tonu gibi boyutlar değerlendirilir. Her boyut için görüntü analizi, kantitatif değerlendirme, önlemler ve önerilen çözümler görüntülenir. Her rapor QR kod ile mobilden görüntülenebilir."
      },
      {
        "title": "Derin Katman Analizi",
        "body": "Cilt hassasiyeti, UV lekeleri, UV aknesi (P. acnes florası) ve kolajen/elastik lif kaybı gibi boyutlar polarize, UV ve kahverengi ışık modlarıyla incelenir; melanin birikimi, kan damarı dağılımı ve kolajen kaybı görsel olarak değerlendirilir."
      },
      {
        "title": "3D Simülasyon ve Yaşlanma Tahmini",
        "body": "Sorunlu bölgeler 3D olarak incelenebilir; Cilt Yaşlanma Tahmini özelliği, uygun bakım yapılmadığında cildin 5-10 yıl sonraki durumunu görsel olarak simüle eder."
      },
      {
        "title": "Raporlama ve Yönetim",
        "body": "Detaylı rapor; cilt tipi, cilt yaşı tahmini ve kapsamlı bakım programı önerilerini içerir. Bağımsız arka plan paneliyle ürün eşleştirme, çok mağazalı alt hesap yönetimi ve pazarlama araçları (anket, çekiliş) sunulur."
      },
      {
        "title": "Teknolojiler",
        "body": "Yapay Zeka (AI) yüz tanıma · Derin Öğrenme · Spektral görüntüleme · Çoklu ışık spektrumu (polarize, UV, Wood) · 3D cilt simülasyonu · Bulut bilişim"
      },
      {
        "title": "Avantajlar",
        "body": "Yüksek çözünürlükle bilimsel ve doğru analiz · Yüzeysel ve derin cilt sorunlarının kapsamlı değerlendirilmesi · Görsel ve niceliksel raporlarla müşteri güvenini artırma · Otomatik ürün eşleştirmesiyle satış desteği · 5-10 yıllık yaşlanma projeksiyonuyla ikna edici sunum"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Müşteri için dosya oluşturulur; yüz temizlenir, çene ve alın desteklere yerleştirilir. Akıllı cilt testinde ışık 8 kez yanıp sönerek görüntüleri toplar ve buluta yükler. Yüzeysel ve derin sonuçlar, 3D simülasyon ve yaşlanma tahmini incelenir; detaylı rapor QR kod ile paylaşılır veya yazdırılır."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Güzellik salonları, medikal estetik merkezleri ve cilt bakımı hizmeti veren profesyonel işletmeler; kişiselleştirilmiş bakım ve ürün önerisi sunmak isteyen uzmanlar."
      }
    ],
    "image": "assets/products/_placeholder.svg",
    "gallery": [
      "assets/products/_placeholder.svg"
    ],
    "tags": [
      "Cilt Analizi",
      "Yapay Zeka"
    ],
    "technologies": [],
    "features": [
      "8 ışık kaynağı (Beyaz, PPL, XPL, UV, Wood, Mavi, Kahverengi, Kırmızı)",
      "Yüksek çözünürlüklü yüz görüntüleme",
      "AI yüz tanıma ve derin öğrenme tabanlı analiz",
      "Spektral görüntüleme ve 3D cilt simülasyonu",
      "Bulut bilişim ve bulut depolama",
      "14 cilt sağlığı göstergesinin analizi",
      "Cilt yaşlanma tahmini (5-10 yıl projeksiyon)",
      "QR kod ile mobil rapor paylaşımı",
      "Bağımsız arka plan yönetim paneli"
    ],
    "indications": [
      "Sebum ve gözenek analizi",
      "Pigmentasyon ve leke tespiti",
      "Kırışıklık ve ince çizgi değerlendirmesi",
      "Akne ve siyah nokta analizi",
      "Koyu halka değerlendirmesi",
      "Cilt hassasiyeti ve UV hasarı analizi",
      "Kolajen/elastik lif kaybı analizi",
      "Cilt tipi belirleme ve cilt yaşı tahmini"
    ],
    "specs": [
      {
        "label": "Işık kaynağı",
        "value": "8 (Beyaz, PPL, XPL, UV, Wood, Mavi, Kahverengi, Kırmızı)"
      },
      {
        "label": "Analiz göstergesi",
        "value": "14 cilt sağlığı göstergesi"
      },
      {
        "label": "Analiz katmanı",
        "value": "Yüzeysel ve derin katman"
      },
      {
        "label": "Arayüz",
        "value": "Tablet tabanlı"
      },
      {
        "label": "Bağlantı",
        "value": "WiFi ve kablolu ağ"
      },
      {
        "label": "Veri işleme",
        "value": "Bulut sunucu tabanlı AI"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın."
  },
  {
    "slug": "caci-synergy",
    "name": "CACI SYNERGY",
    "brand": "CACI",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "tagline": "İngiliz CACI International markasının mikroakım teknolojisiyle yüz kaslarını yeniden eğiten, cerrahi olmayan yüz gençleştirme sistemi.",
    "description": "Mikroakım tabanlı yüz bakım teknolojisinde dünya çapında referans kabul edilen CACI International markasının ileri seviye yüz platformu.",
    "longDescription": "CACI Synergy, mikroakım tabanlı yüz bakım teknolojisinde dünya çapında referans kabul edilen İngiliz CACI International markasının ileri seviye yüz platformudur. Sistem, yüzün belirli kas gruplarını hafif elektriksel uyarılarla çalıştırarak kasların yeniden eğitilmesini (muscle re-education) sağlar; böylece iğnesiz, cerrahisiz ve konfor içinde bir yüz germe ve sıkılaştırma etkisi hedeflenir. Uygulama; sabit ve hareketli problar ile çene hattı için özel T-Bar başlığı ve firming gel konsantresi kullanılarak, haritalanmış hareket protokolü (FACEMAP) doğrultusunda yapılır.",
    "sections": [
      {
        "title": "Nasıl Çalışır?",
        "body": "CACI Synergy, cilde zarar vermeyen düşük yoğunluklu mikroakımlarla yüz kaslarını uyarır. Firming gel konsantresi sürüldükten sonra sabit veya hareketli problarla kas grupları çalıştırılır. Gliding Golgi (GG) hareketinde prob 4-6 saniye tutulur, Quick Stroke (QS) hareketinde duraksamadan çift hareket uygulanır. Çene hattı için yalnızca T-Bar başlığı kullanılır."
      },
      {
        "title": "Tedavi Haritası (FACEMAP)",
        "body": "Uygulama, yüzü bölge bölge ele alan haritalı bir protokolle yapılır: boğaz kaydırma, yanak kaldırma, çene germe, ağız köşesi germe, kaz ayağı germe, göz altı ve kaş bölgesi hareketleri ile boyun bölgesi. Göz çevresi çalışılırken göz koruyucuları uygulanır."
      },
      {
        "title": "Boyun Bölgesi Uyarısı",
        "body": "Boyun hareketleri 8. seanstan önce uygulanmaz. Boyun kasları daha büyük ve güçlü olduğundan erken çalışıldığında yüz kasları üzerinde olumsuz etki oluşturabilir."
      },
      {
        "title": "Teknolojiler",
        "body": "Mikroakım (Microcurrent) kas re-edukasyonu"
      },
      {
        "title": "Avantajlar",
        "body": "İğnesiz, cerrahisiz ve konforlu uygulama · Dünyaca tanınan İngiliz CACI teknolojisi · Yüzün her bölgesine özel haritalanmış protokol · Kasları yeniden eğiterek doğal görünümlü sıkılaşma"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Firming gel konsantresi uygulandıktan sonra FACEMAP haritasına göre bölge bölge çalışılır. Her harekette Gliding Golgi (4-6 sn bekletmeli) ve Quick Stroke (duraksamasız çift hareket) teknikleri uygulanır. Çene hattında yalnızca T-Bar başlığı kullanılır; göz çevresinde göz koruyucuları takılır. Maksimum akım 320 µA. Boyun hareketleri 8. seanstan önce uygulanmaz."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cerrahi müdahale istemeden yüzünde sıkılaşma, tonus artışı ve gençleşme etkisi arayan; kas gevşemesi, sarkma ve ince çizgilerden şikayetçi kişiler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Kalp pili, epilepsi, tümör, hamilelik, tromboz, damar iltihabı (mutlak) · Botoks/ip askı (3 ay), enjeksiyonlar (2 hafta), metal pin/protez/silikon implant · Aktif enfeksiyon/cilt hastalığı; boyun bölgesinde tiroid; yakın zamanda IPL/lazer veya mikroiğneleme"
      }
    ],
    "image": "assets/products/_placeholder.svg",
    "gallery": [
      "assets/products/_placeholder.svg"
    ],
    "tags": [
      "Mikroakım",
      "CACI"
    ],
    "technologies": [],
    "features": [
      "Mikroakım ile yüz kası yeniden eğitimi",
      "İğnesiz ve cerrahisiz yüz sıkılaştırma",
      "Sabit ve hareketli problarla bölgesel uygulama",
      "Çene hattı için özel T-Bar başlığı",
      "Haritalanmış (FACEMAP) hareket protokolü",
      "Göz çevresi için koruyucu ile güvenli uygulama"
    ],
    "indications": [
      "Yüz kaslarında gevşeme ve sarkma",
      "Cilt tonusu ve sıkılık kaybı",
      "Yüz hatlarının belirginliğini yitirmesi",
      "İnce çizgiler ve yaşlanma belirtileri",
      "Çene hattı tanımının azalması"
    ],
    "specs": [
      {
        "label": "Marka",
        "value": "CACI International (İngiltere)"
      },
      {
        "label": "Teknoloji",
        "value": "Mikroakım (microcurrent)"
      },
      {
        "label": "Maksimum akım",
        "value": "320 µA"
      },
      {
        "label": "Uygulama bölgesi",
        "value": "Yüz ve boyun"
      },
      {
        "label": "Başlıklar",
        "value": "Sabit prob, hareketli prob, T-Bar (çene hattı)"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true
  },
  {
    "slug": "face-up",
    "name": "FACE UP",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "yuz",
    "categoryLabel": "Yüz Teknolojileri",
    "tagline": "Yüz kaslarını çalıştırarak cildi sıkılaştıran, kollajen ve elastin üretimini destekleyen profesyonel yüz gençleştirme cihazı.",
    "description": "Alın, göz çevresi, yanak ve çene bölgelerine özel aplikatörlerle hedefli uygulama yapan yüz gençleştirme ve kas uyarım cihazı.",
    "longDescription": "Face Up, yüz dokularının yapısal desteğini yeniden sağlamak ve geliştirmek amacıyla tasarlanmış profesyonel bir yüz gençleştirme cihazıdır. Yüz kaslarının gücünü ve gerginliğini artırırken, aynı zamanda kollajen, elastin ve bağ dokusunun yeniden yapılanmasını destekleyerek yüzün kas yapısını iyileştirir. Farklı bölgelere özel geliştirilmiş aplikatörleri sayesinde alın, göz çevresi, yanaklar ve çene gibi bölgelerin her birine hedefli uygulama yapılabilir.",
    "sections": [
      {
        "title": "Nasıl Çalışır?",
        "body": "Face Up, yüz kaslarını uyararak kas gücünü ve tonusunu artırır. Bu uyarım, ciltteki kollajen, elastin ve bağ dokusunun yeniden yapılanmasını destekleyerek yüz dokularının doğal desteğini güçlendirir ve daha sıkı bir cilt görünümü oluşturur."
      },
      {
        "title": "Uygulama Bölgeleri",
        "body": "Cihaz; alın, sol ve sağ göz çevresi, sağ ve sol yanak ve çene bölgelerine özel konumlandırılabilen aplikatörlerle çalışır. Bu sayede yüzün farklı bölgelerine bölgesel ve hedefli uygulama gerçekleştirilir."
      },
      {
        "title": "Teknolojiler",
        "body": "Yüz kas uyarımı · Kollajen ve elastin yeniden yapılanma desteği"
      },
      {
        "title": "Avantajlar",
        "body": "Yeniden genç ve sıkı bir cilt görünümü için etkili çözüm · Yüz kaslarını güçlendirerek doğal dokusal desteği artırma · Bölgeye özel aplikatörlerle hedefli uygulama · Cerrahi olmayan yüz gençleştirme yaklaşımı"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cerrahi müdahaleye gerek kalmadan yüz cildinde sıkılaşma, gençleşme ve kas tonusunda iyileşme isteyen kişiler ile güzellik merkezleri ve klinikler."
      }
    ],
    "image": "assets/products/face-up/main.jpg",
    "gallery": [
      "assets/products/face-up/main.jpg",
      "assets/products/face-up/g1.jpg",
      "assets/products/face-up/g2.jpg"
    ],
    "tags": [
      "Yüz Gençleştirme",
      "Kas Uyarımı"
    ],
    "technologies": [],
    "features": [
      "Farklı yüz bölgelerine özel geliştirilmiş çok sayıda aplikatör",
      "Alın, göz çevresi, yanak ve çene bölgelerine hedefli uygulama",
      "Dokunmatik ekranlı kontrol paneli",
      "Tekerlekli, hareket ettirilebilir kabin tasarımı",
      "Kolay kullanım ve geniş uygulama alanı"
    ],
    "indications": [
      "Yüz cildinde gevşeme ve sarkma",
      "Cilt tonusu ve sıkılığında azalma",
      "Kollajen ve elastin kaybına bağlı yaşlanma belirtileri",
      "Yüz kas yapısının zayıflaması"
    ],
    "specs": [],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "beforeAfter": [
      "assets/products/face-up/ba1.jpg",
      "assets/products/face-up/ba2.jpg"
    ]
  },
  {
    "slug": "bubble-up",
    "name": "BUBBLE UP",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "Sıkıştırıcı mikrovibrasyon teknolojisiyle selülit, vücut şekillendirme ve cilt gençleştirme sağlayan silikon küreli bakım cihazı.",
    "description": "Silikon kürelerden oluşan dönen silindir başlıklarıyla dokuya ritmik basınç ve mikro titreşim uygulayan, lenfatik drenaj ve kolajen üretimini destekleyen vücut ve yüz bakım cihazı.",
    "longDescription": "Bubble Up, geleneksel vakum-çekme masajının yerini alan yenilikçi \"Sıkıştırıcı Mikrovibrasyon\" teknolojisini kullanan, invaziv olmayan bir vücut ve yüz bakım sistemidir. Cihaz, bal peteği düzeninde yerleştirilmiş silikon kürelerden oluşan 360° dönen silindir başlıklar aracılığıyla düşük frekanslı mekanik titreşim ve kontrollü basınç üretir. Küreler cilt üzerinde sürekli itme, çekme ve yoğurma hareketi oluşturarak dokuyu sıkıştırıp kaldırır; bu \"damar jimnastiği\" etkisi sıvıların boşaltılmasını, yerel kan dolaşımının ve oksijenlenmenin artmasını ve lenfatik drenajın iyileşmesini sağlar. Vücutta selülit görünümünü azaltır ve hatları şekillendirir; yüz ve boyunda ise fibroblastları uyararak kolajen ve elastin üretimini destekler.",
    "sections": [
      {
        "title": "Çalışma Prensibi",
        "body": "Silindirin 360° dönüşü boyunca yuvarlanan silikon kürelerle sıkıştırıcı mikro titreşim üretilir. Ortaya çıkan nabız benzeri sıkıştırma etkisi dokuda sürekli itme-çekme-yoğurma hareketi oluşturur; hücre aktivitesini, kan akışını ve oksijenlenmeyi uyarır, yağ birikimleri gevşetilir. Kürelerin dönüş yönü ayarlanarak lenfatik sistem aktivitesi güçlendirilir."
      },
      {
        "title": "Beş Sinerjik Etki",
        "body": "Yeniden şekillendirme (hatları düzeltir), kas etkisi (dokuyu sıkılaştırır), sedasyon (oksijeni artırır, ağrıyı azaltır), drenaj (toksinleri uzaklaştırır) ve vasküler etki (kan dolaşımını iyileştirir)."
      },
      {
        "title": "Vücut ve Yüz Uygulamaları",
        "body": "Vücut bakımı için büyük başlık; yüz, boyun ve omuz bakımı için silikon küreli küçük başlık kullanılır. En sık kalçalar, uyluklar ve kolların üst kısmı tercih edilir; yüz, boyun, sırt, karın ve bacaklar dahil neredeyse tüm bölgelerde uygulanabilir."
      },
      {
        "title": "Teknolojiler",
        "body": "Sıkıştırıcı Mikrovibrasyon (Compression Micro-Vibration) · 360° dönen silikon küre silindir başlık · Bal peteği (honeycomb) küre dizilimi"
      },
      {
        "title": "Avantajlar",
        "body": "%100 invaziv olmayan, cerrahi gerektirmeyen uygulama · Ağrısız ve yan etkisiz; seans sonrası günlük yaşama hemen dönüş · Vakum-çekme masajının aksine cildi çekmez, iz bırakmaz · Manuel lenfatik drenajdan daha etkili ve derin etki · Hem vücut hem yüz için tek cihazda çift başlık"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Uygulama öncesi bölge temizlenir ve masaj kremi/yağı sürülür. Dönüş yönü uygulama yönünün tersine ayarlanır; başlık iki elle tutularak yavaş itme-çekme hareketiyle tüm bölge geçilir. Tek seans ~45 dakika ile 1,5 saat sürer. Haftada 2-3 seans (arası en az 48 saat) önerilir; bir kür 12-18 seanstan oluşur. İlk sonuçlar 6-12 seans sonrasında görülür."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Selülit, portakal kabuğu görünümü, bölgesel yağlanma ve vücut hattı bozukluğu yaşayan; ödem ve lenfatik dolaşım sorunları olan; yüz ve boyunda cilt sarkması ve tonus kaybını invaziv olmayan yöntemlerle gidermek isteyen kişiler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Gebelik · Açık yara ve cilt hastalığı · Tromboflebit · Pacemaker / metal implant · Tümör"
      }
    ],
    "image": "assets/products/bubble-up/main.png",
    "gallery": [
      "assets/products/bubble-up/main.png",
      "assets/products/bubble-up/g1.jpg",
      "assets/products/bubble-up/g2.jpg",
      "assets/products/bubble-up/g3.jpg"
    ],
    "tags": [
      "Mikrovibrasyon",
      "Selülit",
      "Lenfatik Drenaj"
    ],
    "technologies": [],
    "features": [
      "360° dönen silindir başlık, kesintisiz ve stabil çalışma",
      "Başlık üzerinde süre ve hızı gösteren LED gösterge",
      "Tek tuşla ileri/geri dönüş yönü değiştirme",
      "Bal peteği düzeninde esnek silikon küreler",
      "İki ayrı başlık: vücut için büyük, yüz/boyun için küçük",
      "5 inç LCD dokunmatik ekran ve hafıza modları",
      "9 kademeli hız ayarı",
      "Ağrısız ve güvenli uygulama"
    ],
    "indications": [
      "Selülit ve portakal kabuğu görünümü",
      "Vücut şekillendirme ve hat düzeltme",
      "Bölgesel yağ birikimleri",
      "Lenfatik staz, ödem ve sıvı birikimi",
      "Kas sertliği, gerginlik ve ağrı",
      "Yüz ve boyunda cilt sarkması",
      "İfade çizgileri ve kırışıklıklar"
    ],
    "specs": [
      {
        "label": "Dokunmatik ekran",
        "value": "5 inç LCD"
      },
      {
        "label": "Başlık hızı",
        "value": "675 rpm'e kadar (9 kademe)"
      },
      {
        "label": "Vücut başlığı küre sayısı",
        "value": "50 silikon küre"
      },
      {
        "label": "Yüz başlığı küre sayısı",
        "value": "60 silikon küre"
      },
      {
        "label": "Giriş voltajı",
        "value": "AC 110V/220V"
      },
      {
        "label": "Çıkış gücü",
        "value": "10-300W"
      },
      {
        "label": "Çalışma süresi",
        "value": "90 dakikaya kadar ayarlanabilir"
      },
      {
        "label": "Toplam ağırlık",
        "value": "34 kg"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "beforeAfter": [
      "assets/products/bubble-up/ba1.webp",
      "assets/products/bubble-up/ba2.png",
      "assets/products/bubble-up/ba3.webp",
      "assets/products/bubble-up/ba4.png",
      "assets/products/bubble-up/ba5.webp"
    ]
  },
  {
    "slug": "frozen-body",
    "name": "FROZEN BODY",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Aynı anda 4 bölgeye uygulanabilen, kriyolipoliz teknolojisiyle yağ hücrelerini dondurarak bölgesel incelme sağlayan cihaz.",
    "description": "Soğuk-sıcak (kriyolipoliz) teknolojisiyle yağ hücrelerini dondurarak bölgesel incelme sağlayan, ağrısız vücut şekillendirme cihazı.",
    "longDescription": "Frozen Body, vücut şekillendirme ve estetik alanında yenilikçi bir soğuk-sıcak tedavi yöntemidir. Aşırı soğutulan yağ hücreleri aracılığıyla istenen bölgede boyut küçültme sağlar; etkisi doğal yağ yakma sürecine girer. Cihazın tedavi pedleri, iç kısımda -5°C sabit soğukluğa sahip bir sıvı akışı içeren benzersiz bir soğutma elementi barındırır; bu element +45°C'ye kadar da ısıtılabilir. Yağ hücreleri -5°C'de 30 ila 60 dakika boyunca çevre dokuya zarar vermeden soğutulur. Tek bir seansta karın, kollar, arka bel, kalça ve bacak bölgeleri aynı anda tedavi edilebilir.",
    "sections": [
      {
        "title": "Nasıl Çalışır?",
        "body": "Frozen Body, soğuk-sıcak-kompresyon prensibine dayanır. Tedavi pedlerinin içindeki soğutma elementi -5°C sabit soğuklukta sıvı taşır ve +45°C'ye kadar ısıtılabilir. Yağ hücreleri çevre dokulara zarar vermeden aşırı soğutularak doğal yağ yıkım (apoptoz) sürecine sokulur."
      },
      {
        "title": "Aynı Anda 4 Bölge",
        "body": "Cihaz, 4 tedavi pedini aynı anda kullanma imkânı sunar. Böylece karın, kollar, arka bel, kalça ve bacak gibi bölgeler tek seansta eş zamanlı tedavi edilebilir."
      },
      {
        "title": "Tedavi Süresi ve Sonuçları",
        "body": "İstenen sonuç için ortalama 3 ila 6 seans gereklidir; seanslar haftada 1-2 kez uygulanır. Nihai etki birkaç hafta sonra en iyi şekilde görülür; yeterli egzersiz ve sağlıklı beslenme ile en iyi sonuçlar elde edilir."
      },
      {
        "title": "Teknolojiler",
        "body": "Kriyolipoliz (soğukla yağ dondurma) · Soğuk-sıcak (kryo + termo) tedavi · Kompresyon tedavisi"
      },
      {
        "title": "Avantajlar",
        "body": "Nihai yağ giderme etkisi · En geniş tedavi yüzeyi · Tamamen ağrısız ve güvenli · İyileşme süresi olmadan günlük hayata dönüş · Aynı anda birden fazla bölge ile zaman tasarrufu"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Tedavi pedleri hedef bölgelere yerleştirilir ve aynı anda 4 bölgeye kadar uygulanabilir. Yağ hücreleri -5°C'de 30-60 dakika soğutulur. Seanslar haftada 1-2 kez, ortalama 3-6 seans. Nihai sonuç birkaç hafta içinde belirginleşir."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Bölgesel yağlanmasından şikâyetçi olan, cerrahi olmayan ve iyileşme süresi gerektirmeyen bir vücut şekillendirme yöntemi arayan kadın ve erkek danışanlar."
      }
    ],
    "image": "assets/products/frozen-body/main.jpg",
    "gallery": [
      "assets/products/frozen-body/main.jpg",
      "assets/products/frozen-body/g1.png",
      "assets/products/frozen-body/g2.png"
    ],
    "tags": [
      "Kriyolipoliz",
      "Vücut Şekillendirme"
    ],
    "technologies": [],
    "features": [
      "Aynı anda 4 bölgeye uygulama imkânı",
      "-5°C ile +45°C arası hassas sıcaklık ayarı",
      "Soğuk-sıcak-kompresyon tedavisi",
      "Çok geniş tedavi yüzeyi",
      "Glikol ile önceden yüklenmiş kapalı ve temiz sistem",
      "Vücuda özel farklı ped ve sargılar",
      "Tamamen ağrısız uygulama",
      "Dokunmatik ekran ve tekerlekli gövde"
    ],
    "indications": [
      "Bölgesel yağlanma ve inatçı yağ birikimleri",
      "Karın bölgesi yağ fazlalığı",
      "Arka bel bölgesi",
      "Kol bölgesi yağlanması",
      "Kalça ve basen bölgesi",
      "Bacak/uyluk bölgesi"
    ],
    "specs": [
      {
        "label": "Minimum sıcaklık",
        "value": "-5°C"
      },
      {
        "label": "Maksimum sıcaklık",
        "value": "+45°C"
      },
      {
        "label": "Aynı anda tedavi bölgesi",
        "value": "4 bölge"
      },
      {
        "label": "Yağ hücresi soğutma süresi",
        "value": "30-60 dakika"
      },
      {
        "label": "Çalışma sıvısı",
        "value": "Glikol (önceden yüklü, kapalı devre)"
      },
      {
        "label": "Önerilen seans",
        "value": "Ortalama 3-6 seans"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "beforeAfter": [
      "assets/products/frozen-body/ba1.jpg",
      "assets/products/frozen-body/ba2.jpg",
      "assets/products/frozen-body/ba3.jpg",
      "assets/products/frozen-body/ba4.jpg"
    ]
  },
  {
    "slug": "frozen-shock-wave-awt",
    "name": "FROZEN SHOCK WAVE AWT",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "series": "FROZEN Serisi",
    "tagline": "Akustik dalga terapisi (AWT) ile bölgesel yağlanma, selülit ve cilt sarkıklığına yönelik non-invaziv vücut şekillendirme cihazı.",
    "description": "Odaklı olmayan yüksek enerjili ses dalgalarıyla tam kat doku aktivasyonu sağlayan, selülit ve vücut şekillendirme cihazı.",
    "longDescription": "Frozen Shock Wave, akustik dalga tedavisi (AWT) prensibiyle çalışan bir vücut şekillendirme ve selülit tedavi cihazıdır. AWT, vücut içinde titreşime sebep olan, odaklı olmayan güçlü ses dalgalarıdır; estetik tıpta düşük enerjiyle doku hasarını önleyerek geniş bir tedavi alanında etkili olacak şekilde kullanılır. Cihaz; cilt, cilt altı yağ dokusu, bağ dokusu, dolaşım sistemi, kaslar ve metabolik sistemi düzenleyen tam kat doku aktivasyon terapisi sağlar.",
    "sections": [
      {
        "title": "Etki Mekanizması",
        "body": "Artan kan dolaşımı: etkilenen bölgede yeni kılcal damarlar, artan mikrosirkülasyon ve oksijen tedariki. Kolajenin yeniden yapılanması: akustik titreşimler fibroblastların çoğalmasına neden olur, yeni kolajen bandı oluşur. Atıkların giderilmesi: lenfatik sistemin mekanik uyarımı ödem ve lipid atımına yol açar."
      },
      {
        "title": "Tam Kat Doku Aktivasyonu",
        "body": "Özel bir cihaz tarafından üretilen akustik ses dalgaları ile cilt, cilt altı yağ dokusu, bağ dokusu, dolaşım sistemi, kaslar ve metabolik sistemi düzenleyen tam kat doku aktivasyon terapisi sağlanır. Güvenli ve etkili bir uygulama olduğu klinik testlerle belirtilmiştir."
      },
      {
        "title": "Teknolojiler",
        "body": "Akustik Dalga Terapisi (AWT / Acoustic Wave Therapy)"
      },
      {
        "title": "Avantajlar",
        "body": "Doku hasarını önlemek için düşük enerji kullanımı · Klinik testlerle desteklenen güvenli uygulama · Kan dolaşımını ve mikrosirkülasyonu artırma · Kolajen yeniden yapılanmasını uyarma · Lenfatik drenaj ile ödem ve yağ atımı desteği"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Bölgesel yağlanma, selülit, cilt sarkıklığı ve bölgesel sıkılaştırma isteyen kişiler; liposuction sonrası düzensiz görünüm düzeltilmek istenen danışanlar."
      }
    ],
    "image": "assets/products/frozen-shock-wave-awt/main.png",
    "gallery": [
      "assets/products/frozen-shock-wave-awt/main.png",
      "assets/products/frozen-shock-wave-awt/g1.png",
      "assets/products/frozen-shock-wave-awt/g2.png",
      "assets/products/frozen-shock-wave-awt/g3.png",
      "assets/products/frozen-shock-wave-awt/g4.png"
    ],
    "tags": [
      "Akustik Dalga",
      "Selülit",
      "AWT"
    ],
    "technologies": [],
    "features": [
      "Non-invaziv akustik dalga (AWT) uygulaması",
      "Odaklı olmayan, düşük enerjili güçlü ses dalgaları",
      "Tam kat doku aktivasyon terapisi",
      "Farklı boyutlarda değiştirilebilir aplikatör başlıkları",
      "Geniş tedavi alanına uygulama"
    ],
    "indications": [
      "Selülit tedavisi",
      "Bölgesel incelme",
      "Bölgesel sıkılaştırma",
      "Liposuction sonrası düzensiz görünümün düzeltilmesi",
      "Gıdı veya kol sarkması",
      "Bölgesel yağlanma ve cilt sarkıklıkları"
    ],
    "specs": [
      {
        "label": "Aplikatör başlığı 1",
        "value": "0-50 mm"
      },
      {
        "label": "Aplikatör başlığı 2",
        "value": "0-40 mm"
      },
      {
        "label": "Aplikatör başlığı 3",
        "value": "0-35 mm"
      },
      {
        "label": "Aplikatör başlığı 4",
        "value": "0-20 mm"
      },
      {
        "label": "Aplikatör başlığı 5",
        "value": "0-20 mm"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın."
  },
  {
    "slug": "twin-body-ems-2",
    "name": "TWIN BODY EMS 2",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "HIFEM/EMS teknolojisiyle kas dokusunu aktive ederek yağ yakımı ve kas şekillendirmesi sağlayan vücut şekillendirme cihazı.",
    "description": "Yüksek yoğunluklu odaklanmış elektromanyetik enerji (HIFEM/EMS) ile kas yapan ve yağ yakan çift aplikatörlü vücut şekillendirme cihazı.",
    "longDescription": "Twin Body EMS 2, yüksek yoğunluklu odaklanmış elektromanyetik enerji (HIFEM/EMS) prensibiyle çalışan bir vücut şekillendirme cihazıdır. Cihaz, hiçbir cerrahi müdahaleye gerek kalmadan vücudun yağ yakımını, kas dokusunu supramaksimal kasılmalarla harekete geçirerek gerçekleştirme prensibine dayanır. Aynı anda iki aplikatör (twin) ile çalışabilen sistem, karın ve kollar gibi bölgelerde uygulanabilecek özel başlıklara sahiptir.",
    "sections": [
      {
        "title": "Kas Yapan Yağ Yakan Teknoloji",
        "body": "Hiçbir cerrahi müdahale olmadan vücudun yağ yakımını, kas dokusunu harekete geçirerek yapması prensibine dayanır. Yağ yakımı ve kas oluşumu aynı seansta hedeflenir."
      },
      {
        "title": "Çift Aplikatör (Twin) Kullanımı",
        "body": "İki aplikatör ile aynı seansta iki farklı bölgeye eş zamanlı uygulama yapılabilir; kollar için özel tasarlanmış yeni başlık ile farklı bölgelerde çalışılabilir."
      },
      {
        "title": "Teknolojiler",
        "body": "HIFEM (Yüksek Yoğunluklu Odaklanmış Elektromanyetik Enerji) / EMS"
      },
      {
        "title": "Avantajlar",
        "body": "Cerrahi müdahale gerektirmez · Aynı seansta hem kas yapımı hem yağ yakımı · Non-invaziv ve iğnesiz uygulama · İki aplikatör ile eş zamanlı çalışma"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cerrahi olmadan karın ve kol gibi bölgelerde kas tonusunu artırmak ve yağ oranını azaltmak isteyen, vücut şekillendirme arayan kişiler."
      }
    ],
    "image": "assets/products/twin-body-ems-2/main.jpg",
    "gallery": [
      "assets/products/twin-body-ems-2/main.jpg",
      "assets/products/twin-body-ems-2/g1.jpg",
      "assets/products/twin-body-ems-2/g2.jpg",
      "assets/products/twin-body-ems-2/g3.png",
      "assets/products/twin-body-ems-2/g4.jpg",
      "assets/products/twin-body-ems-2/g5.jpg"
    ],
    "tags": [
      "HIFEM",
      "EMS",
      "Kas & Yağ"
    ],
    "technologies": [],
    "features": [
      "Aynı anda iki aplikatör (twin) ile çalışma",
      "Kas yapan ve yağ yakan HIFEM/EMS teknolojisi",
      "Kollar için özel tasarlanmış başlık",
      "Dokunmatik ekranlı, tekerlekli ana ünite",
      "Bölgeye sabitlemek için kayış sistemi"
    ],
    "indications": [
      "Karın bölgesi kas şekillendirme ve yağ azaltma",
      "Kol bölgesi şekillendirme",
      "Vücut kontürleme / sıkılaştırma"
    ],
    "specs": [
      {
        "label": "Derinlik",
        "value": "8 cm"
      },
      {
        "label": "Yoğunluk",
        "value": "4 Tesla"
      },
      {
        "label": "Kas kasılması",
        "value": "20.000"
      },
      {
        "label": "Seans eşdeğeri",
        "value": "30 dakikada 20.000 squat"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "beforeAfter": [
      "assets/products/twin-body-ems-2/ba1.png",
      "assets/products/twin-body-ems-2/ba2.png",
      "assets/products/twin-body-ems-2/ba3.png",
      "assets/products/twin-body-ems-2/ba4.png"
    ]
  },
  {
    "slug": "twin-body-ems-5",
    "name": "TWIN BODY EMS 5",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "Yüksek yoğunluklu elektromanyetik (HI-EMT/EMS) enerjiyle kas güçlendiren ve yağ yakımını destekleyen çift aplikatörlü vücut şekillendirme cihazı.",
    "description": "Süper-maksimal kasılmalarla kas dokusunu güçlendiren, çift aplikatör ve kollar için özel başlığa sahip HIFEM/EMS vücut şekillendirme cihazı.",
    "longDescription": "Twin Body EMS 5, yüksek yoğunluklu odaklanmış elektromanyetik enerji (HI-EMT/EMS) prensibiyle çalışan bir vücut şekillendirme cihazıdır. Kaslarda istemli egzersizle ulaşılamayan süper-maksimal kasılmalar oluşturarak kas dokusunun aktive edilmesini ve güçlendirilmesini, aynı zamanda bölgesel yağ yakımının desteklenmesini hedefler. Cihaz çift (twin) aplikatör ile aynı anda iki bölgeye uygulama yapılabilmesini sağlar; kollar için özel tasarlanmış başlığı ile küçük ve şekillendirilmesi zor bölgelere de uyum sağlar.",
    "sections": [
      {
        "title": "Kas Oluşturan Yağ Yakan Teknoloji",
        "body": "Herhangi bir cerrahi müdahaleye gerek kalmadan, yüksek yoğunluklu elektromanyetik uyarımla kas dokusunu aktive eder ve vücudun yağ yakımı prensibini destekler."
      },
      {
        "title": "Çift Aplikatör ve Kollar İçin Özel Başlık",
        "body": "İki aplikatör ile aynı seansta iki farklı bölgeye eş zamanlı uygulama yapılabilir; bu da uygulama süresini kısaltır ve simetrik çalışmayı kolaylaştırır. Kollar gibi küçük ve şekillendirilmesi zor bölgeler için özel tasarlanmış başlık ile daha hedefli uygulama sunar."
      },
      {
        "title": "Teknolojiler",
        "body": "Yüksek Yoğunluklu Elektromanyetik Teknoloji (HI-EMT / EMS) · 4 Tesla manyetik alan yoğunluğu · Çift aplikatör (Twin) sistemi"
      },
      {
        "title": "Avantajlar",
        "body": "Cerrahi müdahale gerektirmez · Tek seansta çift bölge uygulaması · İstemli egzersizle ulaşılamayan yoğunlukta kas kasılması · Kollar dahil zor bölgelere uygun özel başlık"
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Cerrahi olmadan bölgesel kas tonusunu artırmak, karın-kalça-kol bölgelerini şekillendirmek ve yağ yakımını desteklemek isteyen bireyler."
      }
    ],
    "image": "assets/products/twin-body-ems-5/main.png",
    "gallery": [
      "assets/products/twin-body-ems-5/main.png",
      "assets/products/twin-body-ems-5/g1.png",
      "assets/products/twin-body-ems-5/g2.png",
      "assets/products/twin-body-ems-5/g3.jpg",
      "assets/products/twin-body-ems-5/g4.jpg",
      "assets/products/twin-body-ems-5/g5.jpg"
    ],
    "tags": [
      "HIFEM",
      "EMS",
      "4 Tesla"
    ],
    "technologies": [],
    "features": [
      "Çift (twin) aplikatör ile aynı anda iki bölgeye uygulama",
      "Kollar için özel tasarlanmış ek başlık",
      "Yüksek yoğunluklu elektromanyetik (HI-EMT/EMS) enerji",
      "4 Tesla yüksek yoğunluk",
      "8 cm etki derinliği",
      "Tekerlekli, mobil gövde ve dokunmatik ekran"
    ],
    "indications": [
      "Bölgesel kas güçlendirme ve şekillendirme",
      "Bölgesel yağ yakımının desteklenmesi",
      "Karın bölgesi sıkılaştırma",
      "Kalça şekillendirme",
      "Kol şekillendirme (özel başlık ile)"
    ],
    "specs": [
      {
        "label": "Manyetik alan yoğunluğu",
        "value": "4 Tesla"
      },
      {
        "label": "Etki derinliği",
        "value": "8 cm"
      },
      {
        "label": "Kas kasılması",
        "value": "20.000 kasılma"
      },
      {
        "label": "Aplikatör",
        "value": "Çift (twin) + kollar için özel başlık"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "beforeAfter": [
      "assets/products/twin-body-ems-5/ba1.png",
      "assets/products/twin-body-ems-5/ba2.png",
      "assets/products/twin-body-ems-5/ba3.png",
      "assets/products/twin-body-ems-5/ba4.png",
      "assets/products/twin-body-ems-5/ba5.jpg"
    ]
  },
  {
    "slug": "ross",
    "name": "ROSS ROLLSYSTEMIC",
    "brand": "RÖS'S",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "ROLL kompresyon masajı ile 448 kHz kapasitif-rezistif sistemik diatermiyi birleştiren, yüz ve vücut için endoaktivasyon cihazı.",
    "description": "ROLL kompresyon masajı ve sistemik diatermiyi tek sistemde birleştiren, non-invaziv yüz ve vücut şekillendirme teknolojisi.",
    "longDescription": "ROSS Rollsystemic, klasik ROLL kompresyon masajı ile sistemik diatermiyi (448 kHz kapasitif-rezistif monopolar radyofrekans) tek bir sistemde bir araya getiren, non-invaziv ve kişiselleştirilebilir bir yüz ve vücut şekillendirme teknolojisidir. Cihaz, bu iki teknolojinin sinerjisiyle \"endoaktivasyon\" adı verilen bir etki oluşturur: içeriden hücre yenilenmesi ve dengelenmesini teşvik ederken, odaklanmış kompresyon ile dokuları yeniden şekillendirir. 535 Ncm tork gücündeki ROLL kompresyonu üç santimetre derinliğe kadar etki eder. Sistem; kan akışının artması, doku oksijenlenmesi, metabolik aktivitenin yükselmesi, lenfatik drenajın uyarılması ve toksin atımının hızlanması gibi etkiler oluşturur. İspanya'da üretilmekte olup CE ve ISO 9001:2015 standartlarına uygundur.",
    "sections": [
      {
        "title": "Endoaktivasyon: İki Teknolojinin Sinerjisi",
        "body": "Rollsystemic, ROLL yoğun kompresyon ve sistemik diaterminin birleşiminden doğan endoaktivasyon etkisiyle çalışır. ROLL kompresyonu yeniden şekillendirici bir baskı uygularken; sistemik rezistif diatermi tüm dokularda hızlı toparlanma sağlayan güçlü bir hücre yenileme teknolojisidir."
      },
      {
        "title": "Sistemik Diatermi ile İçeriden Dengeleme",
        "body": "448 kHz kapasitif-rezistif teknoloji hücre metabolik aktivitesini artırır, mezenkimal hücrelerin çoğalmasını uyararak kolajen ve elastin üretimini destekler, doku beslenmesini ve oksijenlenmesini geliştirerek kas tonusunu ve cilt sıkılığını iyileştirir."
      },
      {
        "title": "Vücut Uygulamaları: ENDO-Sculpting",
        "body": "Sistemik bileklikler dolaşım ve drenajın içsel aktive edici ajanı olarak çalışır; venöz ve geri dönüş dolaşımını uyararak sonuçları hızlandırır. Rahatsızlık vermeden ROLL şekillendirme ve ekstra drenaj aktivasyonu sunar."
      },
      {
        "title": "Yüz Uygulamaları",
        "body": "Yüz protokolleri kozmetik aktifler, sistemik teknoloji, ROLL teknolojisi ve yüz manevralarının birleşiminden doğar; temizleme, şekillendirme, rahatlatma ve yüz yogası (hands-free diatermi) programlarını destekler."
      },
      {
        "title": "Teknolojiler",
        "body": "Sistemik diatermi (448 kHz kapasitif-rezistif monopolar RF) · ROLL yoğun kompresyon masaj teknolojisi · Endoaktivasyon (iki teknolojinin sinerjisi) · 12 renkli kromoterapi (LED ışık terapisi)"
      },
      {
        "title": "Avantajlar",
        "body": "Tek cihazda mekanik kompresyon ve radyofrekans diaterminin birleşimi · Non-invaziv ve kişiselleştirilebilir yüz ve vücut protokolleri · Isı etkisinin uygulama sonrası 45 dakikaya kadar sürmesi · Esnek bileklik elektrotları ile yüksek uyum ve çok yönlülük · Bilimsel çalışmalarla desteklenen kanıta dayalı teknoloji"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Uygulama bölgesine göre sistemik elektrotlar (bileklik) ve ROLL ruloları seçilir. Vücut için ön ayarlı programlar mevcuttur (Detox/drenaj, Aktif şekillendirme, Maintenance). Rulo başlıkları (16/21/30/45 mm) hedefe göre seçilir ve iletken emülsiyon/jel ile uygulanır."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Güzellik ve estetik merkezleri, estetik tıp klinikleri ve fizyoterapi uygulayıcıları; vücut şekillendirme, drenaj, cilt sıkılaştırma ve wellness hizmeti sunan profesyoneller."
      }
    ],
    "image": "assets/products/_placeholder.svg",
    "gallery": [
      "assets/products/_placeholder.svg"
    ],
    "tags": [
      "Diatermi",
      "ROLL Masaj",
      "448 kHz"
    ],
    "technologies": [],
    "features": [
      "ROLL kompresyon masajı ve sistemik diaterminin birleşik teknolojisi",
      "448 kHz kapasitif-rezistif monopolar radyofrekans",
      "535 Ncm güçlü tork; 3 cm derinliğe kadar etkili kompresyon",
      "Bileklik formatında esnek, biyouyumlu sistemik elektrotlar",
      "12 renkli kromoterapi LED ışık",
      "10 inç dokunmatik ekran ve Bluetooth uzaktan kumanda",
      "Ön ayarlı vücut/yüz programları ve serbest programlama",
      "6 hız kademesi ve 4 vücut rulosu (16/21/30/45 mm)"
    ],
    "indications": [
      "Vücut şekillendirme ve kontur düzeltme (ENDO-sculpting)",
      "Lenfatik drenaj ve sıvı retansiyonunun giderilmesi",
      "Selülit görünümünün azaltılmasına destek",
      "Kas tonusu ve cilt sıkılığının iyileştirilmesi",
      "Ödem ve inflamasyonun azaltılması",
      "Doku yenilenmesi ve hızlı toparlanma",
      "Yüz bakımı ve yüz sıkılaştırma"
    ],
    "specs": [
      {
        "label": "Frekans",
        "value": "448 kHz"
      },
      {
        "label": "Güç",
        "value": "200 W"
      },
      {
        "label": "Tork",
        "value": "535 Ncm"
      },
      {
        "label": "Hız kademesi",
        "value": "6 hız"
      },
      {
        "label": "LED ışık",
        "value": "12 renkli kromoterapi"
      },
      {
        "label": "Ekran",
        "value": "10 inç dokunmatik"
      },
      {
        "label": "Vücut ruloları",
        "value": "16 / 21 / 30 / 45 mm (4 adet)"
      },
      {
        "label": "Kompresyon derinliği",
        "value": "3 cm'ye kadar"
      },
      {
        "label": "Üretim / Standart",
        "value": "İspanya üretimi, CE ve ISO 9001:2015"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın."
  },
  {
    "slug": "eximia",
    "name": "EXIMIA HR77 PLATINUM",
    "brand": "Eximia",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "EXIMIA HR77 PLATINUM",
    "description": "",
    "sections": [
      {
        "title": "Not",
        "body": "Bu ürünün klasöründe tanıtım/teknik doküman bulunmadığından açıklama, özellik, teknik veri ve görsel içeriği daha sonra eklenecektir."
      }
    ],
    "image": "assets/products/_placeholder.svg",
    "gallery": [
      "assets/products/_placeholder.svg"
    ],
    "tags": [
      "Vücut Şekillendirme"
    ],
    "technologies": [],
    "features": [],
    "indications": [],
    "specs": [],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın."
  },
  {
    "slug": "emchair-mini",
    "name": "EMCHAIR MINI",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "İdrar kaçırma ve prostat stimülasyonu için tasarlanmış, non-invaziv pelvik taban kası güçlendirme koltuğu.",
    "description": "Pelvik taban kaslarını uyararak güçlendiren, iğnesiz ve ameliyatsız, giyinik uygulanan tedavi sistemi.",
    "longDescription": "EMChair Mini, pelvik taban kaslarını uyararak güçlendiren, iğnesiz ve ameliyatsız bir tedavi sistemidir. Doğum sonrası dönemde, yaşlanma ve menopoz sürecinde pelvik taban sisteminde meydana gelen değişiklikler; kas tonusunun azalmasına, doku elastikiyetinin kaybına ve mesane kontrolünün zayıflamasına yol açabilir. EMChair, zayıflamış pelvik kasları yeniden güçlendirmek ve mesane sızıntısını önlemek için nöromüsküler kontrolü yeniden sağlamayı hedefler. Hem kadınlar hem de erkekler için uygulanabilen sistemde hasta, giysilerini çıkarmadan oturur pozisyonda tedavi görür.",
    "sections": [
      {
        "title": "Kadınlar İçin EMChair",
        "body": "Doğum sonrası dönemde ve yaşlanma sırasında pelvik taban sisteminde meydana gelen değişiklikler kas tonusu ve doku elastikiyeti kaybına yol açabilir. EMChair, zayıf pelvik kasları iyileştirmek ve mesane sızıntısını önlemek için nöromüsküler kontrolü yeniden sağlamak amacıyla kasları uyarır."
      },
      {
        "title": "Erkekler İçin EMChair",
        "body": "Prostat, rektum ve mesaneye destek sağlayan pelvik taban kaslarının güçlendirilmesine yardımcı olur. Tedavi sırasında bölgedeki kan akışının artması sağlıklı bir prostat oluşumunu destekler; idrar/dışkı kaçırmayı önlemeye ve cinsel fonksiyon ile boşalma kontrolünün iyileşmesine yardımcı olur."
      },
      {
        "title": "Tedavi Mekanizması",
        "body": "ÖNCE: zayıflamış pelvik taban kasları organları yeterince destekleyemez ve mesane kontrolünü olumsuz etkiler. TEDAVİ: EMChair pelvik taban kaslarını etkili şekilde uyarır. SONRA: pelvik taban kasları ve mesane kontrolü yeniden kazanılmaya başlar."
      },
      {
        "title": "Teknolojiler",
        "body": "Pelvik taban kaslarına yönelik nöromüsküler elektromanyetik stimülasyon"
      },
      {
        "title": "Avantajlar",
        "body": "Müdahale gerektirmez · Non-invaziv uygulama · Anestezi gerektirmez · Soyunmaya gerek yoktur · Hem kadınlar hem erkekler için kullanılabilir · Cinsel fonksiyon ve yaşam kalitesine katkı"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Hasta, giysilerini çıkarmadan cihazın üzerine oturur pozisyonda tedavi görür; uygulama boyunca pelvik taban kasları nöromüsküler olarak uyarılır. Seans süresi ve tekrar sayısı uygulayıcı tarafından belirlenir."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Doğum sonrası, yaşlanma veya menopoz sürecinde pelvik taban kasları zayıflayan kadınlar; idrar/dışkı kaçırma, prostat şikayetleri veya ED semptomları yaşayan erkekler."
      },
      {
        "title": "Not",
        "body": "Teknik özellikler ve seans protokolü katalogda sayısal olarak yer almadığından daha sonra eklenecektir."
      }
    ],
    "image": "assets/products/_placeholder.svg",
    "gallery": [
      "assets/products/_placeholder.svg"
    ],
    "tags": [
      "Pelvik Taban",
      "İnkontinans"
    ],
    "technologies": [],
    "features": [
      "Küçük, akıllı ve güçlü kompakt tasarım",
      "Non-invaziv (cerrahi gerektirmez)",
      "Anestezi gerektirmez",
      "Uygulama sırasında soyunma gerekmez",
      "Oturur pozisyonda konforlu uygulama",
      "Kadın ve erkek hastalar için uygun"
    ],
    "indications": [
      "İdrar kaçırma (üriner inkontinans)",
      "Dışkı kaçırma (fekal inkontinans)",
      "Zayıflamış pelvik taban kasları",
      "Doğum sonrası pelvik taban gevşemesi",
      "Yaşlanma ve menopoza bağlı pelvik değişiklikler",
      "Erektil disfonksiyon (ED) semptomları",
      "Zayıf mesane kontrolü"
    ],
    "specs": [],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın."
  },
  {
    "slug": "ultrawave",
    "name": "ULTRAWAVE LİPOLİZ",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "vucut",
    "categoryLabel": "Vücut Teknolojileri",
    "tagline": "Radyofrekans, ultrason (kavitasyon), vakum ve kızılötesi ışığı tek platformda birleştiren ameliyatsız bölgesel incelme ve vücut şekillendirme sistemi.",
    "description": "Yağ hücrelerini parçalayarak selülit görünümünü azaltan, cildi sıkılaştıran ve kolajen üretimini destekleyen çok fonksiyonlu vücut şekillendirme cihazı.",
    "longDescription": "ULTRAWAVE Lipoliz; radyofrekans, güçlü odaklanmış ses dalgası (kavitasyon), vakum ve kızılötesi ışık teknolojilerini bir arada sunan çok fonksiyonlu bir vücut şekillendirme cihazıdır. 40 kHz odaklanmış ses dalgaları yağ hücrelerini yüksek hızda titreştirerek hücre zarının parçalanmasını ve trigliseritlerin ayrışmasını sağlar; radyofrekans dalgaları ise dermis kolajenini ısıtarak kolajen liflerinin büzülmesini ve zamanla yeniden üretimini tetikler. Vakumlu ve döner rulolu başlıklar mekanik masaj ve lenf drenajı yaparak mikrodolaşımı hızlandırır. Diyet ve sporla atılamayan bölgesel yağların cilde zarar vermeden azaltılmasını hedefler.",
    "sections": [
      {
        "title": "Radyofrekans",
        "body": "Diyet ve sporla atılamayan yağların ve cilt sağlığının iyileştirilmesinde kullanılan bir yöntemdir. Cilde zarar vermeden doku içerisinde ısı oluşturarak onarılmasını sağlar; özellikle kollar, göğüsler ve iç bacaklar gibi bölgelerdeki sarkmayı toparlayan ve lifting etkisi yaratan bir uygulamadır."
      },
      {
        "title": "Ultrasound (Kavitasyon)",
        "body": "İnsanın duyabileceği frekansın üzerindeki yüksek frekanslı ses dalgaları yağ hücrelerini birbirinden ayırıp yağların yakılmasını sağlar. Ayrıca cildin üst tabakasındaki dalgalanmaları toparlayıp kolajen artışını sağlayarak hem yağları hem de selülit görünümünü azaltır."
      },
      {
        "title": "Vakumlu Başlık",
        "body": "Radyofrekans ve vakum kombine edilerek cildin alt tabakasına ulaşılır. Hem masaj hem lenf drenajı yaparak kan akışını hızlandırır; yakılan yağların vücuttan atılmasını destekler."
      },
      {
        "title": "Teknolojiler",
        "body": "Radyofrekans (RF) · Ultrason / kavitasyon (40 kHz) · Vakum (negatif basınç) ve rulolu mekanik masaj · Kızılötesi (IR) ışık"
      },
      {
        "title": "Avantajlar",
        "body": "Ameliyatsız, iğnesiz bölgesel incelme çözümü · Diyet ve sporla gitmeyen inatçı bölgesel yağlara etki · Aynı seansta yağ parçalama, cilt sıkılaştırma ve lenf drenajı · Cilde zarar vermeden konforlu uygulama · Farklı vücut bölgelerine uygun başlık ve mod seçenekleri"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "Enerji ve süre kişinin durumuna göre ayarlanır; bölgeye göre başlık seçilir ve cilt üzerinde yavaşça kaydırılarak hareket ettirilir, tek noktada bekletilmez. Cihaz kesintisiz 1 saatten fazla çalıştırılmamalıdır. Boyun üstü bölge 40 kHz başlık için kullanılmaz."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Bölgesel yağlanma, selülit ve cilt gevşekliği bulunan; diyet ve sporla istediği inceliğe ulaşamayan, ameliyatsız vücut şekillendirme arayan yetişkinler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Hamilelik · Kalp pili / metal implant · Epilepsi · Ciddi kronik hastalık"
      }
    ],
    "image": "assets/products/ultrawave/main.jpg",
    "gallery": [
      "assets/products/ultrawave/main.jpg",
      "assets/products/ultrawave/g1.jpg",
      "assets/products/ultrawave/g2.jpg",
      "assets/products/ultrawave/g3.png",
      "assets/products/ultrawave/g4.jpg"
    ],
    "tags": [
      "Kavitasyon",
      "RF",
      "Vakum"
    ],
    "technologies": [],
    "features": [
      "RF, ultrason (kavitasyon), vakum ve kızılötesi ışığı tek cihazda birleştirir",
      "40 kHz odaklanmış ses dalgası ile yağ hücrelerinin parçalanması",
      "Radyofrekans ile kolajen üretimi ve cilt sıkılaştırma",
      "Döner rulolu mekanik masaj ile lenf drenajı",
      "8 kg'a kadar vakum emiş gücü",
      "Büyük/küçük vakum ve 40K ultrason başlıkları",
      "15,6 inç TFT dokunmatik ekran"
    ],
    "indications": [
      "Bölgesel yağlanma ve bölgesel incelme",
      "Selülit ve portakal kabuğu görünümü",
      "Cilt gevşekliği ve sarkma (kol, göğüs, iç bacak, kalça, bel)",
      "Doğum sonrası vücut şekillenme bozuklukları",
      "Cilt sıkılaştırma ve vücut şekillendirme"
    ],
    "specs": [
      {
        "label": "Ekran",
        "value": "15,6 inç TFT dokunmatik"
      },
      {
        "label": "Ultrason frekansı",
        "value": "35 kHz - 45 kHz"
      },
      {
        "label": "Vakum emiş",
        "value": "8 kg'a kadar"
      },
      {
        "label": "Pompa debisi",
        "value": "60 L/dk"
      },
      {
        "label": "Rulo hızı",
        "value": "0 - 55 rpm"
      },
      {
        "label": "Güç",
        "value": "300 W - 500 W"
      },
      {
        "label": "Besleme",
        "value": "AC 230V / 110V"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true
  },
  {
    "slug": "infinite-young",
    "name": "INFINITE YOUNG",
    "brand": "D2 GRUP",
    "brandId": "d2-frozen",
    "category": "longevity",
    "categoryLabel": "Longevity",
    "tagline": "Cildin dört katmanını hedefleyen; plazma-iyon, radyofrekans, odaklı ultrason ve elektroporasyonu tek platformda birleştiren iğnesiz yüz gençleştirme sistemi.",
    "description": "Epidermis, dermis, SMAS ve kas katmanlarına ayrı ayrı etki eden dört teknolojiyi tek cihazda toplayan medikal estetik gençleştirme platformu.",
    "longDescription": "INFINITE Young, cildin epidermis, dermis, SMAS ve kas katmanlarının her birine ayrı ayrı etki eden dört farklı teknolojiyi tek bir cihazda toplayan medikal estetik gençleştirme platformudur. Dört özel uygulama başlığı sayesinde yüz ve gıdı bölgesinin toparlanmasını sağlar: iyon ve plazma enerjisiyle cildin en üst katmanı yenilenir, radyofrekans teknolojisiyle orta katmandaki kolajen ve elastin harekete geçirilerek cilt hacimlenip sıkılaşır, soğuk odaklı (SMAS-fokus) ultrasonla yüz ve boyun bölgesi yeniden şekillendirilir, elektroporasyon başlığındaki enerjiyle de bölgedeki kaslar güçlendirilir. Böylece ameliyat veya iğne işlemine gerek kalmadan cildin dört katmanına birden fayda sağlayan bir çözüm sunulur.",
    "sections": [
      {
        "title": "Cildin Tüm Katmanlarını Hedefleyen 4 Teknoloji",
        "body": "INFINITE Young dört ayrı başlıkla cildin farklı katmanlarına etki eder: Fractional Ablasion (epidermis yenilenmesi), Jet RF (dermis kaldırma), VDFU Vaser (SMAS yeniden şekillenmesi) ve Electroporation (kas güçlendirme ve cilt sıkılaşması)."
      },
      {
        "title": "Fractional Ablasion – Yeni Epidermis Oluşumu",
        "body": "Plazma ve iyonların uygulanmasıyla fraksiyonel ablasyon ve terapötik etki oluşturulur; cilt dokusu iyileşir ve hücre aktivasyonu sağlanır. Temassız tasarımı cildin elastikiyetini, tonunu ve parlaklığını iyileştirir. Tüm yüz bölgesinde 5-10 dakikada yüzey yenileme tamamlanır."
      },
      {
        "title": "Jet RF – Dermis Lifting",
        "body": "Radyofrekans ile fotodinamik terapinin (PDT) kombinasyonu derin termal ısıtma sağlar; deri altı dokuda metabolizmayı artırırken kolajen ve elastin liflerinin yenilenmesini tetikler ve masaj başlığıyla lenfatik drenajı destekler."
      },
      {
        "title": "VDFU Vaser – SMAS Yeniden Modelleme",
        "body": "Merkezcil olmayan fokus ultrason ve koruyucu soğukluk kombinasyonu ile SMAS tabakasına stimülasyon gönderilerek yüz germe, kaldırma ve sıkılaşma etkisi elde edilir; koruyucu soğukluk epidermal tabakayı korur."
      },
      {
        "title": "Electroporation – Kas Güçlendirme",
        "body": "Soğuk bipolar RF ve dinamik kas stimülasyonu kombinasyonu, kontrollü derin dermis ısınması ve elektriksel akım ile cilt sıkılaşması ve güçlenmesi sağlar; koruyucu soğukluk epidermal hasarı önler."
      },
      {
        "title": "Teknolojiler",
        "body": "Fractional Ablasion (Plazma & İyon) · Jet RF (Radyofrekans + Fotodinamik Terapi) · VDFU Vaser (odaklı ultrason – SMAS) · Electroporation (Soğuk Bipolar RF + Kas Stimülasyonu)"
      },
      {
        "title": "Avantajlar",
        "body": "Ameliyatsız ve iğnesiz çözüm · Tek platformda 4 farklı teknoloji · İlk seanstan itibaren cildin 4 katmanına birden fayda · Her mevsim uygulanabilir, minimum sosyal iyileşme süresi · Koruyucu soğukluk sayesinde konforlu ve güvenli uygulama"
      },
      {
        "title": "Kullanım Protokolü",
        "body": "İdeal tedavi 3'er gün aralıklarla toplam 6 seanstır (bazı başlıklar için haftada 2 seans, toplam 6-8 uygulama). VDFU uygulamasında seanslar arası ~1 ay bırakılması önerilir. Uygulama her mevsim yapılabilir ve invaziv olmadığından kişi kısa sürede günlük yaşamına döner."
      },
      {
        "title": "Kimler İçin Uygun",
        "body": "Yüz, gıdı ve dekolte bölgesinde cilt gençleştirme, sıkılaştırma, yüz germe ve yaşlanma karşıtı bakım isteyen; ameliyat veya dolgu/iğne işlemi istemeyen kişiler."
      },
      {
        "title": "Kontrendikasyonlar (Uygulanmaması Gereken Durumlar)",
        "body": "Hamilelik veya hamile olma ihtimali · Kalp rahatsızlığı ve damar hastalığı · Kalp pili (pacemaker) · Tromboz / tromboflebit · Antikoagülan tedavi · Organ nakli geçirmiş olmak · Büyük metal protez · Diyabet · Epilepsi"
      }
    ],
    "image": "assets/products/infinite-young/main.png",
    "gallery": [
      "assets/products/infinite-young/main.png",
      "assets/products/infinite-young/g1.png",
      "assets/products/infinite-young/g2.png",
      "assets/products/infinite-young/g3.png",
      "assets/products/infinite-young/g4.png"
    ],
    "tags": [
      "4 Katman",
      "Yüz Germe",
      "Anti-Aging"
    ],
    "technologies": [],
    "features": [
      "Cildin 4 katmanına (epidermis, dermis, SMAS, kas) etki eden 4 özel başlık",
      "İğnesiz ve ameliyatsız uygulama",
      "Temassız (no-contact) fraksiyonel ablasyon başlığı",
      "Koruyucu soğukluk ile konforlu ve epidermisi koruyan uygulama",
      "Değiştirilebilir/ergonomik başlık tasarımı",
      "Her mevsim uygulanabilir, hızlı iyileşme",
      "Tekerlekli, dokunmatik ekranlı konsol"
    ],
    "indications": [
      "Cilt yenileme ve gençleştirme",
      "Cilt tonu ve parlaklığının iyileştirilmesi",
      "Kolajen ve elastin üretiminin uyarılması",
      "Yüz germe ve kaldırma (lifting)",
      "SMAS tabakasında sıkılaşma",
      "Yüz ve gıdı (çene altı) bölgesinin toparlanması",
      "Dekolte bölgesi gençleştirme",
      "Cilt sarkması ve yaşlanma karşıtı bakım"
    ],
    "specs": [
      {
        "label": "Uygulama başlıkları",
        "value": "iRoller, TEMF Sculpting, VDFU Ice, Dermolift Ice (4 başlık)"
      },
      {
        "label": "Konsol",
        "value": "Dokunmatik ekranlı, tekerlekli dik kabin"
      }
    ],
    "priceLabel": "Bayiye Özel Fiyat",
    "priceNote": "Klinik, güzellik merkezi ve bayi fiyatlandırması için teklif alın.",
    "featured": true,
    "isNew": true,
    "beforeAfter": [
      "assets/products/infinite-young/ba1.jpg",
      "assets/products/infinite-young/ba2.jpg",
      "assets/products/infinite-young/ba3.jpg"
    ]
  }
];

// ---------------------------------------------------------- Yardımcılar
export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const getProductsByCategory = (cat: CategoryId): Product[] =>
  PRODUCTS.filter((p) => p.category === cat);

export const getFeaturedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.featured);

export const getRelatedProducts = (product: Product, limit = 3): Product[] =>
  PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, limit);

export const ALL_TAGS: string[] = Array.from(new Set(PRODUCTS.flatMap((p) => p.tags))).sort();

export const ALL_BRANDS: string[] = Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort();
