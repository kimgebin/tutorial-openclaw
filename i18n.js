/**
 * OpenClaw Landing Page - Internationalization (i18n)
 * Supported Languages: Indonesian, English, Malay, Thai, Vietnamese, Chinese
 */

const translations = {
    // Indonesian (default)
    id: {
        // Meta & Head
        meta_title: "OpenClaw Tutorial - AI Assistant Pribadi",
        
        // Header
        nav_benefits: "Manfaat",
        nav_testimonials: "Testimoni",
        nav_buy: "Beli Sekarang",
        
        // Hero
        badge_flash: "Flash Sale - 50% OFF",
        hero_title_1: "Punya ",
        hero_title_2: "AI Assistant",
        hero_title_3: " Sendiri di Komputer dalam 30 Menit",
        hero_subtitle: "Tutorial lengkap install OpenClaw + Ollama. Tanpa coding, tanpa API key, 100% GRATIS & OFFLINE.",
        btn_get_now: "Dapatkan Akses Sekarang",
        guarantee_text: "Garansi 7 Hari Uang Kembali",
        stat_sold: "Terjual",
        stat_rating: "Rating",
        stat_support: "Support",
        
        // PDF Preview
        pdf_pages: "Halaman",
        pdf_step: "Step-by-Step",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        // Urgency
        urgency_title: "Penawaran Terbatas - Segera Berakhir!",
        hours: "Jam",
        minutes: "Menit",
        seconds: "Detik",
        urgency_text: "Diskon <strong>50%</strong> berlaku untuk 50 pembeli pertama hari ini",
        spots_left: "Tersisa",
        slot_text: "slot",
        
        // Benefits
        benefits_badge: "Kenapa Memilih Kami",
        benefits_title: "Apa yang Anda Dapatkan",
        benefits_subtitle: "Tutorial lengkap yang akan mengubah cara Anda menggunakan AI",
        benefit_1_title: "Privasi 100%",
        benefit_1_desc: "Data tetap di komputer sendiri. Tidak perlu khawatir data bocor ke pihak ketiga.",
        benefit_2_title: "Works Offline",
        benefit_2_desc: "Jalan tanpa internet. AI tetap responsif meski koneksi terputus.",
        benefit_3_title: "Multi-Platform",
        benefit_3_desc: "Connect ke Telegram, WhatsApp, Discord, dan Signal sekaligus.",
        benefit_4_title: "100% Gratis",
        benefit_4_desc: "Tanpa API key, tanpa biaya bulanan. Bayar sekali, pakai selamanya.",
        benefit_5_title: "Pemula Friendly",
        benefit_5_desc: "Tidak perlu coding. Ikuti langkah demi langkah dengan screenshot.",
        benefit_6_title: "30 Menit Setup",
        benefit_6_desc: "Dari nol sampai AI berjalan hanya dalam 30-45 menit.",
        
        // Testimonials
        testimonials_badge: "Testimoni",
        testimonials_title: "Apa Kata Mereka",
        testimonials_subtitle: "500+ orang sudah berhasil mengikuti tutorial ini",
        
        // Pricing
        pricing_badge: "Paket Lengkap",
        pricing_title: "Investasi untuk Masa Depan",
        pricing_subtitle: "Sekali bayar, akses selamanya",
        package_pro: "Pro",
        package_pro_desc: "Paling populer untuk profesional",
        original_price: "Rp 300.000",
        save_badge: "Hemat 50%",
        feature_pdf: "Ebook PDF lengkap",
        feature_scripts: "Automation scripts",
        feature_generator: "Content generator",
        feature_templates: "Caption templates",
        feature_priority: "Priority support",
        btn_select: "Pilih Pro",
        
        // Payment
        payment_title: "Pembayaran USDT",
        your_package: "Paket Anda",
        rate_label: "Rate: 1 USDT ≈ Rp 16.000",
        rate_update: "(Update:",
        just_now: "just now)",
        network_trc20: "TRC20",
        wallet_label: "Kirim USDT ke alamat ini:",
        copy_btn: "Copy",
        copied_btn: "Copied!",
        instruction_1: "Pilih paket di atas dan kirim USDT sesuai nominal",
        instruction_2: "Screenshot bukti pembayaran",
        instruction_3: "Isi form konfirmasi di bawah dengan data pembayaran Anda",
        form_name: "Nama Lengkap",
        form_name_placeholder: "Masukkan nama Anda",
        form_email: "Email",
        form_email_placeholder: "Masukkan email Anda",
        form_package: "Paket",
        form_txid: "Transaction ID / TxHash",
        form_txid_placeholder: "Masukkan Transaction ID",
        form_notes: "Catatan (Opsional)",
        form_notes_placeholder: "Tambahkan catatan jika diperlukan",
        btn_submit: "Kirim Konfirmasi",
        
        // Trust
        trust_secure: "Pembayaran Aman",
        trust_instant: "Pengiriman Instan",
        trust_guarantee: "Garansi 7 Hari",
        
        // FAQ
        faq_badge: "FAQ",
        faq_title: "Pertanyaan Umum",
        faq_1_q: "Apakah perlu coding untuk mengikuti tutorial?",
        faq_1_a: "Tidak perlu! Tutorial ini didesain untuk pemula. Semua langkah dijelaskan dengan screenshot detail. Cukup ikuti langkah demi langkah.",
        faq_2_q: "Berapa lama proses setup?",
        faq_2_a: "Untuk pemula, estimasi waktu 30-45 menit. Sudah termasuk download dan konfigurasi semua platform (Telegram, WhatsApp, dll).",
        faq_3_q: "Apakah bisa jalan di Windows?",
        faq_3_a: "Bisa! Tutorial mencakup Windows (WSL2), macOS, dan Linux. Semua sistem operasi populer didukung.",
        faq_4_q: "Apakah ada update berkala?",
        faq_4_a: "Ya! Untuk paket Pro dan Bundle, Anda akan mendapatkan update gratis seumur hidup. File akan dikirim via email setiap ada versi baru.",
        
        // CTA
        cta_title: "Siap Punya AI Assistant Sendiri?",
        cta_text: "Jangan lewatkan penawaran terbatas ini. Diskon 50% hanya untuk 50 pembeli pertama.",
        btn_cta: "Dapatkan Sekarang",
        cta_guarantee: "Garansi 7 hari uang kembali. No questions asked.",
        
        // Footer
        footer_desc: "Tutorial praktis untuk AI assistant pribadi. Belajar teknologi tanpa ribet.",
        footer_links: "Links",
        footer_contact: "Kontak",
        footer_rights: "All rights reserved.",
        
        // Sticky CTA
        sticky_cta: "Dapatkan Sekarang",
        
        // Live Notification
        notification_purchase: "baru saja membeli",
        notification_pro: "baru saja mendapatkan Pro",
        notification_bundle: "baru saja upgrade ke Bundle",
        
        // Language names
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    },
    
    // English
    en: {
        meta_title: "OpenClaw Tutorial - Personal AI Assistant",
        
        nav_benefits: "Benefits",
        nav_testimonials: "Testimonials",
        nav_buy: "Buy Now",
        
        badge_flash: "Flash Sale - 50% OFF",
        hero_title_1: "Have Your Own ",
        hero_title_2: "AI Assistant",
        hero_title_3: " on Your Computer in 30 Minutes",
        hero_subtitle: "Complete guide to install OpenClaw + Ollama. No coding, no API key, 100% FREE & OFFLINE.",
        btn_get_now: "Get Access Now",
        guarantee_text: "7-Day Money Back Guarantee",
        stat_sold: "Sold",
        stat_rating: "Rating",
        stat_support: "Support",
        
        pdf_pages: "Pages",
        pdf_step: "Step-by-Step",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        urgency_title: "Limited Offer - Ending Soon!",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        urgency_text: "<strong>50%</strong> discount for the first 50 buyers today",
        spots_left: "Only",
        slot_text: "spots left",
        
        benefits_badge: "Why Choose Us",
        benefits_title: "What You Get",
        benefits_subtitle: "Complete tutorial that will transform how you use AI",
        benefit_1_title: "100% Privacy",
        benefit_1_desc: "Your data stays on your own computer. No need to worry about data leaks.",
        benefit_2_title: "Works Offline",
        benefit_2_desc: "Works without internet. AI remains responsive even when disconnected.",
        benefit_3_title: "Multi-Platform",
        benefit_3_desc: "Connect to Telegram, WhatsApp, Discord, and Signal simultaneously.",
        benefit_4_title: "100% Free",
        benefit_4_desc: "No API key, no monthly fees. Pay once, use forever.",
        benefit_5_title: "Beginner Friendly",
        benefit_5_desc: "No coding needed. Follow step-by-step with detailed screenshots.",
        benefit_6_title: "30 Min Setup",
        benefit_6_desc: "From zero to AI running in just 30-45 minutes.",
        
        testimonials_badge: "Testimonials",
        testimonials_title: "What They Say",
        testimonials_subtitle: "500+ people have successfully followed this tutorial",
        
        pricing_badge: "Complete Packages",
        pricing_title: "Investment for the Future",
        pricing_subtitle: "One-time payment, lifetime access",
        package_pro: "Pro",
        package_pro_desc: "Most popular for professionals",
        original_price: "Rp 300.000",
        save_badge: "Save 50%",
        feature_pdf: "Complete PDF Ebook",
        feature_scripts: "Automation scripts",
        feature_generator: "Content generator",
        feature_templates: "Caption templates",
        feature_priority: "Priority support",
        btn_select: "Select Pro",
        
        payment_title: "USDT Payment",
        your_package: "Your Package",
        rate_label: "Rate: 1 USDT ≈ Rp 16.000",
        rate_update: "(Update:",
        just_now: "just now)",
        network_trc20: "TRC20",
        wallet_label: "Send USDT to this address:",
        copy_btn: "Copy",
        copied_btn: "Copied!",
        instruction_1: "Select package above and send USDT according to amount",
        instruction_2: "Screenshot payment proof",
        instruction_3: "Fill confirmation form below with your payment details",
        form_name: "Full Name",
        form_name_placeholder: "Enter your name",
        form_email: "Email",
        form_email_placeholder: "Enter your email",
        form_package: "Package",
        form_txid: "Transaction ID / TxHash",
        form_txid_placeholder: "Enter Transaction ID",
        form_notes: "Notes (Optional)",
        form_notes_placeholder: "Add notes if needed",
        btn_submit: "Submit Confirmation",
        
        trust_secure: "Secure Payment",
        trust_instant: "Instant Delivery",
        trust_guarantee: "7-Day Guarantee",
        
        faq_badge: "FAQ",
        faq_title: "Frequently Asked Questions",
        faq_1_q: "Do I need coding skills to follow the tutorial?",
        faq_1_a: "No! This tutorial is designed for beginners. All steps are explained with detailed screenshots. Just follow step by step.",
        faq_2_q: "How long does the setup take?",
        faq_2_a: "For beginners, estimated time is 30-45 minutes. Including download and configuration of all platforms (Telegram, WhatsApp, etc.).",
        faq_3_q: "Does it work on Windows?",
        faq_3_a: "Yes! Tutorial covers Windows (WSL2), macOS, and Linux. All popular operating systems are supported.",
        faq_4_q: "Are there regular updates?",
        faq_4_a: "Yes! For Pro and Bundle packages, you get free lifetime updates. Files will be sent via email whenever there's a new version.",
        
        cta_title: "Ready to Have Your Own AI Assistant?",
        cta_text: "Don't miss this limited offer. 50% discount only for the first 50 buyers.",
        btn_cta: "Get It Now",
        cta_guarantee: "7-day money back guarantee. No questions asked.",
        
        footer_desc: "Practical tutorial for personal AI assistant. Learn technology without the hassle.",
        footer_links: "Links",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        
        sticky_cta: "Get It Now",
        
        notification_purchase: "just purchased",
        notification_pro: "just got Pro",
        notification_bundle: "just upgraded to Bundle",
        
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    },
    
    // Malay
    ms: {
        meta_title: "OpenClaw Tutorial - AI Assistant Peribadi",
        
        nav_benefits: "Faedah",
        nav_testimonials: "Testimoni",
        nav_buy: "Beli Sekarang",
        
        badge_flash: "Flash Sale - 50% OFF",
        hero_title_1: "Miliki ",
        hero_title_2: "AI Assistant",
        hero_title_3: " Sendiri di Komputer dalam 30 Minit",
        hero_subtitle: "Panduan lengkap install OpenClaw + Ollama. Tanpa coding, tanpa API key, 100% GRATIS & OFFLINE.",
        btn_get_now: "Dapatkan Akses Sekarang",
        guarantee_text: "Jaminan Wang Balik 7 Hari",
        stat_sold: "Terjual",
        stat_rating: "Rating",
        stat_support: "Support",
        
        pdf_pages: "Halaman",
        pdf_step: "Step-by-Step",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        urgency_title: "Tawaran Terhad - Berakhir Soon!",
        hours: "Jam",
        minutes: "Minit",
        seconds: "Detik",
        urgency_text: "Diskaun <strong>50%</strong> untuk 50 pembeli pertama hari ini",
        spots_left: "Tinggal",
        slot_text: "slot",
        
        benefits_badge: "Mengapa Memilih Kami",
        benefits_title: "Apa Yang Anda Dapat",
        benefits_subtitle: "Tutorial lengkap yang akan mengubah cara anda menggunakan AI",
        benefit_1_title: "Privasi 100%",
        benefit_1_desc: "Data kekal di komputer sendiri. Tidak perlu risau data bocor.",
        benefit_2_title: "Works Offline",
        benefit_2_desc: "Berjalan tanpa internet. AI tetap responsif walau tanpa sambungan.",
        benefit_3_title: "Multi-Platform",
        benefit_3_desc: "Sambung ke Telegram, WhatsApp, Discord, dan Signal sekaligus.",
        benefit_4_title: "100% Gratis",
        benefit_4_desc: "Tanpa API key, tanpa yuran bulanan. Bayar sekali, guna selamanya.",
        benefit_5_title: "Pemula Friendly",
        benefit_5_desc: "Tidak perlu coding. Ikuti langkah demi langkah dengan screenshot.",
        benefit_6_title: "30 Minit Setup",
        benefit_6_desc: "Dari kosong sampai AI berjalan hanya dalam 30-45 minit.",
        
        testimonials_badge: "Testimoni",
        testimonials_title: "Apa Yang Mereka Cakap",
        testimonials_subtitle: "500+ orang telah berjaya mengikuti tutorial ini",
        
        pricing_badge: "Pakej Lengkap",
        pricing_title: "Pelaburan untuk Masa Hadapan",
        pricing_subtitle: "Bayar sekali, akses selamanya",
        package_pro: "Pro",
        package_pro_desc: "Paling popular untuk profesional",
        original_price: "Rp 300.000",
        save_badge: "Hemat 50%",
        feature_pdf: "Ebook PDF lengkap",
        feature_scripts: "Automation scripts",
        feature_generator: "Content generator",
        feature_templates: "Caption templates",
        feature_priority: "Priority support",
        btn_select: "Pilih Pro",
        
        payment_title: "Pembayaran USDT",
        your_package: "Pakej Anda",
        rate_label: "Rate: 1 USDT ≈ Rp 16.000",
        rate_update: "(Kemaskini:",
        just_now: "sekarang)",
        network_trc20: "TRC20",
        wallet_label: "Hantar USDT ke alamat ini:",
        copy_btn: "Salin",
        copied_btn: "Disalin!",
        instruction_1: "Pilih pakej di atas dan hantar USDT mengikut jumlah",
        instruction_2: "Screenshot bukti pembayaran",
        instruction_3: "Isi borang pengesahan di bawah dengan butiran pembayaran anda",
        form_name: "Nama Penuh",
        form_name_placeholder: "Masukkan nama anda",
        form_email: "Email",
        form_email_placeholder: "Masukkan email anda",
        form_package: "Pakej",
        form_txid: "Transaction ID / TxHash",
        form_txid_placeholder: "Masukkan Transaction ID",
        form_notes: "Catatan (Opsional)",
        form_notes_placeholder: "Tambah catatan jika perlu",
        btn_submit: "Hantar Pengesahan",
        
        trust_secure: "Pembayaran Selamat",
        trust_instant: "Penghantaran Segera",
        trust_guarantee: "Jaminan 7 Hari",
        
        faq_badge: "FAQ",
        faq_title: "Soalan Lazim",
        faq_1_q: "Adakah saya perlukan kemahiran coding untuk mengikuti tutorial?",
        faq_1_a: "Tidak! Tutorial ini direka untuk pemula. Semua langkah diterangkan dengan screenshot terperinci. Cuma ikut langkah demi langkah.",
        faq_2_q: "Berapa lama proses setup?",
        faq_2_a: "Untuk pemula, anggaran masa adalah 30-45 minit. Sudah termasuk download dan konfigurasi semua platform (Telegram, WhatsApp, dll).",
        faq_3_q: "Bolehkah ia berjalan di Windows?",
        faq_3_a: "Boleh! Tutorial merangkumi Windows (WSL2), macOS, dan Linux. Semua sistem operasi popular disokong.",
        faq_4_q: "Adakah terdapat kemas kini berkala?",
        faq_4_a: "Ya! Untuk pakej Pro dan Bundle, anda akan mendapat kemas kini percuma seumur hidup. Fail akan dihantar melalui email setiap kali ada versi baru.",
        
        cta_title: "Sedia Miliki AI Assistant Anda Sendiri?",
        cta_text: "Jangan terlepas tawaran terhad ini. Diskaun 50% hanya untuk 50 pembeli pertama.",
        btn_cta: "Dapatkan Sekarang",
        cta_guarantee: "Jaminan wang balik 7 hari. Tiada soalan ditanya.",
        
        footer_desc: "Tutorial praktikal untuk AI assistant peribadi. Belajar teknologi tanpa masalah.",
        footer_links: "Links",
        footer_contact: "Hubungi",
        footer_rights: "All rights reserved.",
        
        sticky_cta: "Dapatkan Sekarang",
        
        notification_purchase: "baru beli",
        notification_pro: "baru dapat Pro",
        notification_bundle: "baru naik taraf ke Bundle",
        
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    },
    
    // Thai
    th: {
        meta_title: "OpenClaw Tutorial - AI Assistant ส่วนตัว",
        
        nav_benefits: "ข้อดี",
        nav_testimonials: "รีวิว",
        nav_buy: "ซื้อเลย",
        
        badge_flash: "Flash Sale - ลด 50%",
        hero_title_1: "มี ",
        hero_title_2: "AI Assistant",
        hero_title_3: " ของตัวเองบนคอมพิวเตอร์ใน 30 นาที",
        hero_subtitle: "คู่มือฉบับสมบูรณ์ติดตั้ง OpenClaw + Ollama ไม่ต้องเขียนโค้ด ไม่ต้องมี API key ฟรี 100% และออฟไลน์ได้",
        btn_get_now: "เข้าถึงตอนนี้",
        guarantee_text: "รับประกันเงินคืน 7 วัน",
        stat_sold: "ขายแล้ว",
        stat_rating: "Rating",
        stat_support: "Support",
        
        pdf_pages: "หน้า",
        pdf_step: "Step-by-Step",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        urgency_title: "ข้อเสนอจำกัด - สิ้นสุดเร็วๆ นี้!",
        hours: "ชั่วโมง",
        minutes: "นาที",
        seconds: "วินาที",
        urgency_text: "ส่วนลด <strong>50%</strong> สำหรับผู้ซื้อ 50 คนแรกวันนี้",
        spots_left: "เหลือ",
        slot_text: "ช่อง",
        
        benefits_badge: "ทำไมต้องเลือกเรา",
        benefits_title: "คุณจะได้รับอะไร",
        benefits_subtitle: "คู่มือฉบับสมบูรณ์ที่จะเปลี่ยนวิธีการใช้ AI ของคุณ",
        benefit_1_title: "ความเป็นส่วนตัว 100%",
        benefit_1_desc: "ข้อมูลของคุณอยู่ในคอมพิวเตอร์ของคุณเอง ไม่ต้องกังวลเรื่องข้อมูลรั่วไหล",
        benefit_2_title: "ทำงานออฟไลน์",
        benefit_2_desc: "ใช้งานได้โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ต AI ยังคงตอบสนองได้แม้ไม่มีการเชื่อมต่อ",
        benefit_3_title: "หลายแพลตฟอร์ม",
        benefit_3_desc: "เชื่อมต่อกับ Telegram, WhatsApp, Discord และ Signalพร้อมกัน",
        benefit_4_title: "ฟรี 100%",
        benefit_4_desc: "ไม่ต้องมี API key ไม่มีค่าใช้จ่ายรายเดือน จ่ายครั้งเดียวใช้ได้ตลอดชีวิต",
        benefit_5_title: "เหมาะสำหรับมือใหม่",
        benefit_5_desc: "ไม่ต้องเขียนโค้ด ทำตามขั้นตอนที่มี screenshot ประกอบ",
        benefit_6_title: "ตั้งค่า 30 นาที",
        benefit_6_desc: "จากศูนย์จน AI ทำงานได้ในเวลา 30-45 นาที",
        
        testimonials_badge: "รีวิว",
        testimonials_title: "ลูกค้าพูดอะไร",
        testimonials_subtitle: "500+ คนที่ทำตาม tutorial นี้สำเร็จแล้ว",
        
        pricing_badge: "แพ็คเกจครบถ้วน",
        pricing_title: "การลงทุนสำหรับอนาคต",
        pricing_subtitle: "จ่ายครั้งเดียวเข้าถึงตลอดชีวิต",
        package_pro: "Pro",
        package_pro_desc: "ยอดนิยมสำหรับมืออาชีพ",
        original_price: "Rp 300.000",
        save_badge: "ประหยัด 50%",
        feature_pdf: "Ebook PDF ฉบับสมบูรณ์",
        feature_scripts: "Automation scripts",
        feature_generator: "Content generator",
        feature_templates: "Caption templates",
        feature_priority: "Priority support",
        btn_select: "เลือก Pro",
        
        payment_title: "ชำระเงิน USDT",
        your_package: "แพ็คเกจของคุณ",
        rate_label: "อัตรา: 1 USDT ≈ Rp 16.000",
        rate_update: "(อัปเดต:",
        just_now: "ตอนนี้)",
        network_trc20: "TRC20",
        wallet_label: "ส่ง USDT ไปที่อยู่นี้:",
        copy_btn: "คัดลอก",
        copied_btn: "คัดลอกแล้ว!",
        instruction_1: "เลือกแพ็คเกจด้านบนและส่ง USDT ตามจำนวน",
        instruction_2: "ถ่ายภาพหลักฐานการชำระเงิน",
        instruction_3: "กรอกแบบฟอร์มยืนยันด้านล่างพร้อมรายละเอียดการชำระเงินของคุณ",
        form_name: "ชื่อ-นามสกุล",
        form_name_placeholder: "ใส่ชื่อของคุณ",
        form_email: "อีเมล",
        form_email_placeholder: "ใส่อีเมลของคุณ",
        form_package: "แพ็คเกจ",
        form_txid: "Transaction ID / TxHash",
        form_txid_placeholder: "ใส่ Transaction ID",
        form_notes: "หมายเหตุ (ไม่บังคับ)",
        form_notes_placeholder: "เพิ่มหมายเหตุถ้าต้องการ",
        btn_submit: "ส่งการยืนยัน",
        
        trust_secure: "การชำระเงินปลอดภัย",
        trust_instant: "จัดส่งทันที",
        trust_guarantee: "รับประกัน 7 วัน",
        
        faq_badge: "FAQ",
        faq_title: "คำถามที่พบบ่อย",
        faq_1_q: "ต้องมีทักษะ coding ในการทำตาม tutorial ไหม?",
        faq_1_a: "ไม่ต้อง! Tutorial นี้ออกแบบสำหรับมือใหม่ ทุกขั้นตอนมี screenshot ประกอบอย่างละเอียด ทำตามได้เลย",
        faq_2_q: "ใช้เวลาตั้งค่านานแค่ไหน?",
        faq_2_a: "สำหรับมือใหม่ ใช้เวลาประมาณ 30-45 นาที รวมดาวน์โหลดและตั้งค่าทุกแพลตฟอร์ม (Telegram, WhatsApp ฯลฯ)",
        faq_3_q: "ใช้งานบน Windows ได้ไหม?",
        faq_3_a: "ได้! Tutorial ครอบคลุม Windows (WSL2), macOS และ Linux รองรับทุกระบบปฏิบัติการยอดนิยม",
        faq_4_q: "มีการอัปเดตเป็นประจำไหม?",
        faq_4_a: "มี! สำหรับแพ็คเกจ Pro และ Bundle คุณจะได้รับการอัปเดตฟรีตลอดชีวิต ไฟล์จะส่งทางอีเมลเมื่อมีเวอร์ชันใหม่",
        
        cta_title: "พร้อมมี AI Assistant ของตัวเองแล้วหรือยัง?",
        cta_text: "อย่าพลาดข้อเสนอพิเศษนี้ ส่วนลด 50% สำหรับผู้ซื้อ 50 คนแรกเท่านั้น",
        btn_cta: "รับเลย",
        cta_guarantee: "รับประกันเงินคืน 7 วัน ไม่มีคำถาม",
        
        footer_desc: "Tutorial ปฏิบัติสำหรับ AI assistant ส่วนตัว เรียนรู้เทคโนโลยีไม่ยุ่งยาก",
        footer_links: "Links",
        footer_contact: "ติดต่อ",
        footer_rights: "สงวนลิขสิทธิ์",
        
        sticky_cta: "รับเลย",
        
        notification_purchase: "เพิ่งซื้อ",
        notification_pro: "เพิ่งได้ Pro",
        notification_bundle: "เพิ่งอัปเกรดเป็น Bundle",
        
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    },
    
    // Vietnamese
    vi: {
        meta_title: "OpenClaw Tutorial - AI Assistant Cá Nhân",
        
        nav_benefits: "Lợi ích",
        nav_testimonials: "Đánh giá",
        nav_buy: "Mua Ngay",
        
        badge_flash: "Flash Sale - Giảm 50%",
        hero_title_1: "Sở Hữu ",
        hero_title_2: "AI Assistant",
        hero_title_3: " Riêng Trên Máy Tính Trong 30 Phút",
        hero_subtitle: "Hướng dẫn đầy đủ cài đặt OpenClaw + Ollama. Không cần code, không cần API key, 100% MIỄN PHÍ & OFFLINE.",
        btn_get_now: "Truy Cập Ngay",
        guarantee_text: "Bảo Đảm Hoàn Tiền 7 Ngày",
        stat_sold: "Đã Bán",
        stat_rating: "Rating",
        stat_support: "Hỗ trợ",
        
        pdf_pages: "Trang",
        pdf_step: "Step-by-Step",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        urgency_title: "Ưu Đãi Giới Hạn - Kết Thúc Sớm!",
        hours: "Giờ",
        minutes: "Phút",
        seconds: "Giây",
        urgency_text: "Giảm <strong>50%</strong> cho 50 khách hàng đầu tiên hôm nay",
        spots_left: "Còn",
        slot_text: "chỗ",
        
        benefits_badge: "Tại Sao Chọn Chúng Tôi",
        benefits_title: "Bạn Nhận Được Gì",
        benefits_subtitle: "Hướng dẫn đầy đủ sẽ thay đổi cách bạn sử dụng AI",
        benefit_1_title: "Bảo Mật 100%",
        benefit_1_desc: "Dữ liệu của bạn ở trên máy tính của bạn. Không cần lo lắng về việc rò rỉ dữ liệu.",
        benefit_2_title: "Hoạt Động Offline",
        benefit_2_desc: "Chạy mà không cần internet. AI vẫn phản hồi được ngay cả khi mất kết nối.",
        benefit_3_title: "Đa Nền Tảng",
        benefit_3_desc: "Kết nối với Telegram, WhatsApp, Discord và Signal cùng lúc.",
        benefit_4_title: "Miễn Phí 100%",
        benefit_4_desc: "Không cần API key, không phí hàng tháng. Trả một lần, dùng mãi mãi.",
        benefit_5_title: "Thân Thiện Với Người Mới",
        benefit_5_desc: "Không cần code. Làm theo từng bước với screenshot chi tiết.",
        benefit_6_title: "Setup 30 Phút",
        benefit_6_desc: "Từ con số 0 đến AI chạy được chỉ trong 30-45 phút.",
        
        testimonials_badge: "Đánh Giá",
        testimonials_title: "Họ Nói Gì",
        testimonials_subtitle: "500+ người đã thành công theo dõi tutorial này",
        
        pricing_badge: "Gói Đầy Đủ",
        pricing_title: "Đầu Tư Cho Tương Lai",
        pricing_subtitle: "Trả một lần, truy cập vĩnh viễn",
        package_pro: "Pro",
        package_pro_desc: "Phổ biến nhất cho chuyên gia",
        original_price: "Rp 300.000",
        save_badge: "Tiết kiệm 50%",
        feature_pdf: "Ebook PDF đầy đủ",
        feature_scripts: "Automation scripts",
        feature_generator: "Content generator",
        feature_templates: "Caption templates",
        feature_priority: "Priority support",
        btn_select: "Chọn Pro",
        
        payment_title: "Thanh Toán USDT",
        your_package: "Gói Của Bạn",
        rate_label: "Tỷ giá: 1 USDT ≈ Rp 16.000",
        rate_update: "(Cập nhật:",
        just_now: "bây giờ)",
        network_trc20: "TRC20",
        wallet_label: "Gửi USDT đến địa chỉ này:",
        copy_btn: "Sao chép",
        copied_btn: "Đã sao chép!",
        instruction_1: "Chọn gói bên trên và gửi USDT theo số tiền",
        instruction_2: "Chụp ảnh minh chứng thanh toán",
        instruction_3: "Điền form xác nhận bên dưới với thông tin thanh toán của bạn",
        form_name: "Họ Tên",
        form_name_placeholder: "Nhập tên của bạn",
        form_email: "Email",
        form_email_placeholder: "Nhập email của bạn",
        form_package: "Gói",
        form_txid: "Transaction ID / TxHash",
        form_txid_placeholder: "Nhập Transaction ID",
        form_notes: "Ghi Chú (Tùy Chọn)",
        form_notes_placeholder: "Thêm ghi chú nếu cần",
        btn_submit: "Gửi Xác Nhận",
        
        trust_secure: "Thanh Toán An Toàn",
        trust_instant: "Giao Hàng Tức Thì",
        trust_guarantee: "Bảo Đảm 7 Ngày",
        
        faq_badge: "FAQ",
        faq_title: "Câu Hỏi Thường Gặp",
        faq_1_q: "Cần có kỹ năng coding để theo dõi tutorial không?",
        faq_1_a: "Không! Tutorial này được thiết kế cho người mới bắt đầu. Tất cả các bước được giải thích với screenshot chi tiết. Chỉ cần làm theo từng bước.",
        faq_2_q: "Quá trình setup mất bao lâu?",
        faq_2_a: "Đối với người mới, ước tính 30-45 phút. Bao gồm tải xuống và cấu hình tất cả các nền tảng (Telegram, WhatsApp, v.v.).",
        faq_3_q: "Có hoạt động trên Windows không?",
        faq_3_a: "Có! Tutorial bao gồm Windows (WSL2), macOS và Linux. Tất cả các hệ điều hành phổ biến đều được hỗ trợ.",
        faq_4_q: "Có cập nhật thường xuyên không?",
        faq_4_a: "Có! Đối với gói Pro và Bundle, bạn sẽ nhận được cập nhật miễn phí trọn đời. File sẽ được gửi qua email mỗi khi có phiên bản mới.",
        
        cta_title: "Sẵn Sàng Có AI Assistant Riêng Chưa?",
        cta_text: "Đừng bỏ lỡ ưu đãi giới hạn này. Giảm 50% chỉ cho 50 khách hàng đầu tiên.",
        btn_cta: "Nhận Ngay",
        cta_guarantee: "Bảo đảm hoàn tiền 7 ngày. Không câu hỏi.",
        
        footer_desc: "Tutorial thực tế cho AI assistant cá nhân. Học công nghệ không rắc rối.",
        footer_links: "Links",
        footer_contact: "Liên hệ",
        footer_rights: "Đã đăng ký.",
        
        sticky_cta: "Nhận Ngay",
        
        notification_purchase: "vừa mua",
        notification_pro: "vừa nhận Pro",
        notification_bundle: "vừa nâng cấp lên Bundle",
        
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    },
    
    // Chinese (Simplified)
    zh: {
        meta_title: "OpenClaw教程 - 个人AI助手",
        
        nav_benefits: "优势",
        nav_testimonials: "评价",
        nav_buy: "立即购买",
        
        badge_flash: "限时特惠 - 5折",
        hero_title_1: "在30分钟内拥有自己的",
        hero_title_2: "AI助手",
        hero_title_3: "在您的电脑上",
        hero_subtitle: "完整安装OpenClaw + Ollama教程。无需编码，无需API密钥，100%免费和离线使用。",
        btn_get_now: "立即获取访问权限",
        guarantee_text: "7天退款保证",
        stat_sold: "已售",
        stat_rating: "评分",
        stat_support: "支持",
        
        pdf_pages: "页",
        pdf_step: "分步说明",
        pdf_lang: "Bahasa Indonesia",
        pdf_badge: "BEST SELLER",
        
        urgency_title: "限时优惠 - 即将结束！",
        hours: "小时",
        minutes: "分钟",
        seconds: "秒",
        urgency_text: "今日<strong>前50名</strong>买家可享受5折优惠",
        spots_left: "剩余",
        slot_text: "名额",
        
        benefits_badge: "为什么选择我们",
        benefits_title: "您将获得什么",
        benefits_subtitle: "完整的教程将改变您使用AI的方式",
        benefit_1_title: "100%隐私保护",
        benefit_1_desc: "您的数据保存在自己的电脑上。无需担心数据泄露。",
        benefit_2_title: "离线工作",
        benefit_2_desc: "无需互联网即可运行。即使断开连接，AI仍能响应。",
        benefit_3_title: "多平台支持",
        benefit_3_desc: "同时连接Telegram、WhatsApp、Discord和Signal。",
        benefit_4_title: "100%免费",
        benefit_4_desc: "无需API密钥，无月费。一次付款，终身使用。",
        benefit_5_title: "适合初学者",
        benefit_5_desc: "无需编码。跟随详细的截图一步步操作。",
        benefit_6_title: "30分钟设置",
        benefit_6_desc: "从零到AI运行仅需30-45分钟。",
        
        testimonials_badge: "评价",
        testimonials_title: "他们怎么说",
        testimonials_subtitle: "已有500多人成功完成本教程",
        
        pricing_badge: "完整套餐",
        pricing_title: "面向未来的投资",
        pricing_subtitle: "一次付款，终身访问",
        package_pro: "专业版",
        package_pro_desc: "专业人士最受欢迎的选择",
        original_price: "Rp 300.000",
        save_badge: "节省50%",
        feature_pdf: "完整PDF电子书",
        feature_scripts: "自动化脚本",
        feature_generator: "内容生成器",
        feature_templates: "文案模板",
        feature_priority: "优先支持",
        btn_select: "选择专业版",
        
        payment_title: "USDT支付",
        your_package: "您的套餐",
        rate_label: "汇率: 1 USDT ≈ Rp 16.000",
        rate_update: "(更新:",
        just_now: "刚刚)",
        network_trc20: "TRC20",
        wallet_label: "向此地址发送USDT:",
        copy_btn: "复制",
        copied_btn: "已复制！",
        instruction_1: "选择上方套餐并按金额发送USDT",
        instruction_2: "截图付款凭证",
        instruction_3: "填写下方确认表单，提供您的付款详情",
        form_name: "全名",
        form_name_placeholder: "输入您的姓名",
        form_email: "电子邮件",
        form_email_placeholder: "输入您的电子邮件",
        form_package: "套餐",
        form_txid: "交易ID / TxHash",
        form_txid_placeholder: "输入交易ID",
        form_notes: "备注（可选）",
        form_notes_placeholder: "如有需要请添加备注",
        btn_submit: "提交确认",
        
        trust_secure: "安全支付",
        trust_instant: "即时交付",
        trust_guarantee: "7天保证",
        
        faq_badge: "常见问题",
        faq_title: "常见问题解答",
        faq_1_q: "学习本教程需要编码技能吗？",
        faq_1_a: "不需要！本教程专为初学者设计。所有步骤都有详细的截图说明。只需按步骤操作即可。",
        faq_2_q: "设置需要多长时间？",
        faq_2_a: "对于初学者，预计时间为30-45分钟。包括下载和配置所有平台（Telegram、WhatsApp等）。",
        faq_3_q: "可以在Windows上运行吗？",
        faq_3_a: "可以！教程涵盖Windows（WSL2）、macOS和Linux。支持所有主流操作系统。",
        faq_4_q: "有定期更新吗？",
        faq_4_a: "有！对于专业版和捆绑包，您将获得终身免费更新。每次有新版本时，文件将通过电子邮件发送。",
        
        cta_title: "准备好拥有自己的AI助手了吗？",
        cta_text: "不要错过这个限时优惠。前50名买家可享受5折优惠。",
        btn_cta: "立即获取",
        cta_guarantee: "7天退款保证。无问题。",
        
        footer_desc: "个人AI助手实用教程。学习技术不再麻烦。",
        footer_links: "链接",
        footer_contact: "联系",
        footer_rights: "版权所有",
        
        sticky_cta: "立即获取",
        
        notification_purchase: "刚刚购买",
        notification_pro: "刚刚获得专业版",
        notification_bundle: "刚刚升级到捆绑包",
        
        lang_id: "Bahasa Indonesia",
        lang_en: "English",
        lang_ms: "Bahasa Malaysia",
        lang_th: "ภาษาไทย",
        lang_vi: "Tiếng Việt",
        lang_zh: "中文"
    }
};

// Current language
let currentLang = 'id';

/**
 * Set and apply language
 * @param {string} lang - Language code (id, en, ms, th, vi, zh)
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language '${lang}' not found, falling back to 'id'`);
        lang = 'id';
    }
    
    currentLang = lang;
    const t = translations[lang];
    
    // Update document title
    document.title = t.meta_title;
    
    // Apply translations to data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Store preference
    localStorage.setItem('openclaw_lang', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/**
 * Get current language
 */
function getCurrentLang() {
    return currentLang;
}

/**
 * Initialize language from storage or browser
 */
function initLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('openclaw_lang');
    if (saved && translations[saved]) {
        return saved;
    }
    
    // Try browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Default to Indonesian
    return 'id';
}

// Export for use
window.i18n = {
    setLanguage,
    getCurrentLang,
    initLanguage,
    translations
};
