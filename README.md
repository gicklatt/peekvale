# Peekvale web sitesi

Peekvale: Hidden Objects için bağımsız, İngilizce tanıtım, gizlilik ve destek sitesi. HTML/CSS/JavaScript ile çalışır; paket kurulumu, derleme, sunucu uygulaması veya API anahtarı gerektirmez.

## GitHub Pages ile yayımlama

1. [Peekvale deposunun Pages ayarlarını](https://github.com/gicklatt/peekvale/settings/pages) aç. Site dosyaları `main` dalında, depo kökünde bulunur; ayrıca dosya yüklemene gerek yok.
2. **Build and deployment** altında **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)** seç ve **Save** düğmesine bas.
3. GitHub'ın yayımlama işlemi tamamlanınca aşağıdaki adresleri açıp kontrol et. İlk yayın anında hazır olmayabilir; ilerleme deponun Actions sekmesinden görülebilir.

Depoda `index.html`, `assets/`, `privacy/` ve `support/` doğrudan köktedir. Gizli **`.nojekyll`** dosyası, siteyi Jekyll işlemesi olmadan sunmak içindir. İleride ZIP'ten dosya güncellersen önce arşivi aç ve dosyaları aynı düzende yükle; `website/` veya ZIP'in dış klasörü altında bırakma. Finder'da `Cmd + Shift + .` ile gizli dosyaları gösterebilirsin.

Bu paket yalnızca web sitesidir. Godot oyun projesini, mobil build'leri veya reklam yapılandırma dosyalarını bu depoya yükleme.

| Kullanım | Yayından sonra kullanılacak adres |
| --- | --- |
| Ana site / Marketing URL | `https://gicklatt.github.io/peekvale/` |
| Privacy Policy URL | `https://gicklatt.github.io/peekvale/privacy/` |
| Support URL | `https://gicklatt.github.io/peekvale/support/` |
| Görsel/font kaynakları | `https://gicklatt.github.io/peekvale/credits/` |

Bu adresler hedef adreslerdir; dosyaları hazırlamak onları otomatik olarak yayımlamaz. App Store Connect ve Google Play'de ilgili alanlara ancak yayın çalıştıktan sonra ekle.

Referans: [GitHub Pages yayın kaynağını seçme](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Gizlilik ve reklamlar

- İletişim adresi: **gicklatt@gmail.com**. Mevcut Gambitile sitesinde kullanılan geliştirici iletişim adresidir.
- Gizlilik metni **27 Eylül 2026'daki kaynak koduna** göre yazıldı. Yerel kayıt, hesap/bulut servisinin olmaması, AdMob + UMP, koşullu reklam gizlilik seçenekleri, destek e-postaları ve GitHub Pages barındırması anlatılır.
- Ana oyun sürümünde reklamlar kapalıdır. Metin bu durumu, test sürümlerini ve reklamlar etkin olduğundaki veri işlemeyi açıkça ayırır. Interstitial reklamlar da kapalıdır. Oyun yayımlanmadan veya reklamlar açılmadan önce bu durum bilgilerini güncelle.
- Hedef kitle/yaş sınıflandırmasını mağazada ve reklam yapılandırmasında kesinleştir. Politika, henüz verilmemiş bir çocuklara yönelik olma/olmama kararını varmış gibi göstermiyor.
- App Store App Privacy ve Google Play Data safety beyanları ayrıca doldurulmalı; bu web sayfası onların yerine geçmez. SDK, reklamlar, analitik, hesap veya bulut kayıt eklenirse metni ve son güncelleme tarihini birlikte değiştir.
- Sitede üçüncü taraf analitik, reklam, form, uzaktan font veya takip çerezi yok. E-posta bağlantısı kullanıcının e-posta uygulamasını açar; site mesaj toplamaz. GitHub'ın barındırma kayıtları gizlilik sayfasında açıklanır.

### app-ads.txt

Geliştirici alan adının kökünde mevcut bir dosya doğrulandı:

`https://gicklatt.github.io/app-ads.txt`

27 Eylül 2026'da görülen kayıt:

```text
google.com, pub-6645188065485339, DIRECT, f08c47fec0942fa0
```

Peekvale aynı AdMob yayıncı hesabını kullanırsa bu kök kayıt kullanılabilir. Mağazadaki geliştirici web sitesi alanını bu host üzerindeki Peekvale sitesine bağla; uygulamayı AdMob'da doğru mağaza kaydıyla ilişkilendir ve AdMob panelindeki tarama/doğrulama durumunu kontrol et. Kayıt farklı bir yayıncı hesabına aitse gerçek hesabın satırını kök dosyaya ekle/güncelle.

**Yalnızca `/peekvale/app-ads.txt` oluşturmak yeterli değildir.** Bu yüzden bu pakette yanıltıcı bir proje-alt-klasörü `app-ads.txt` kopyası yoktur. Mevcut kök siteye bu çalışma sırasında değişiklik yapılmadı. Dosyanın erişilebilir olması, yeni uygulamanın AdMob doğrulamasının tamamlandığı anlamına gelmez.

Referans: [AdMob app-ads.txt kurulumu](https://support.google.com/admob/answer/9363762?hl=en).

## Yerel önizleme

Bu README'nin bulunduğu klasörde:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Tarayıcıda `http://127.0.0.1:8000/` aç. Normal sayfalar göreli bağlantılar kullanır. Özel 404 sayfası, GitHub'ın bulunamayan iç içe adreslerde de doğru dosyaları yükleyebilmesi için `/peekvale/` kökünü kullanır; yerelde aynı alt dizini sunmadan onun stilleri yüklenmez.

## Sonraki güncellemeler

- **Mağaza yayını:** Ana sayfadaki “Coming soon” platform alanlarını gerçek App Store / Google Play bağlantılarıyla değiştir. Mevcut başka oyunun mağaza ID'lerini kullanma.
- **İçerik:** Ana sayfadaki 11 dünya / 43 bölüm sayıları geliştirme sürümüne aittir; çıkış kapsamı değişirse güncelle.
- **Depo adı / özel alan adı:** Tüm HTML dosyalarındaki canonical ve Open Graph adreslerini, `sitemap.xml`, `robots.txt` ve `404.html` içindeki `/peekvale/` yolunu yeni adrese göre değiştir.
- **Arama motorları:** Proje sitesindeki `robots.txt`, alan adı kökündeki robots dosyasının yerine geçmez. `sitemap.xml` adresini gerektiğinde Search Console'a ayrıca iletebilirsin; arama sıralaması garantisi yoktur.
- **Görseller:** `assets/worlds/` gerçek oyun sahnelerinin optimize edilmiş WebP önizlemeleridir. Kaynak çizimler veya referans oyun görselleri yüklenmez. `assets/social-preview.png` sosyal paylaşım önizlemesidir.
- **Font:** Gluten yerel sunulur. `assets/fonts/OFL.txt` lisansını koru.

## Dosya yapısı

```text
index.html          Tanıtım ve harita galerisi
privacy/index.html  Gizlilik politikası
support/index.html  Destek, iletişim ve sık sorulanlar
credits/index.html  Sanat ve font açıklamaları
404.html            Bulunamayan sayfa
assets/             CSS, küçük galeri JS'i, logo, font ve oyun görselleri
.nojekyll           Statik GitHub Pages yayını
robots.txt          Sitemap referansı
sitemap.xml         Sayfa adresleri
```

Galeri JavaScript açıkken erişilebilir bir büyük görsel penceresi açar; Escape ile kapanır ve odağı açan bağlantıya döndürür. JavaScript kapalıysa görsel bağlantısı doğrudan dosyayı açar. Destek soruları tarayıcının yerleşik `details` bileşenini kullanır. Hareket azaltma tercihi desteklenir.
