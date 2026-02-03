const casesData = {
    bleeding: {
        title: "النزيف الحاد",
        icon: "fas fa-droplet",
        description: "النزيف هو فقدان الدم من الأوعية الدموية. قد يكون خارجياً (مرئياً) أو داخلياً. النزيف الشديد يتطلب تدخلاً فورياً لمنع الصدمة الوعائية.",
        symptoms: [
            "تدفق سائل أحمر من الجرح.",
            "برودة في الأطراف وشحوب الجلد.",
            "ضعف النبض وتسارع التنفس.",
            "تشويش في الوعي أو دوخة شديدة."
        ],
        steps: [
            "تأكد من سلامة الموقع وارتدِ القفازات إن وجدت.",
            "اضغط مباشرة على الجرح بقطعة قماش نظيفة ومعقمة.",
            "إذا امتلأت القطعة بالدم، لا تنزعها بل ضع قطعة أخرى فوقها.",
            "ارفع العضو المصاب فوق مستوى القلب إن لم يكن هناك كسر.",
            "استخدم الضماد الضاغط لتثبيت القطع القماشية واستمر في الضغط المباشر."
        ],
        emergency: "اتصل بـ 997 فوراً إذا كان النزيف غزيراً (كالنافورة)، أو إذا فقد المصاب الوعي، أو إذا كان الجرح ناتجاً عن طلق ناري أو آلة حادة كبيرة.",
        videoId: "B7e5YlR6z-E"
    },
    burns: {
        title: "الحروق الحرارية",
        icon: "fas fa-fire-flame-curved",
        description: "إصابة الجلد نتيجة التعرض للحرارة، السوائل الساخنة، أو المواد الكيميائية. تنقسم لثلاث درجات حسب العمق.",
        symptoms: [
            "الدرجة الأولى: احمرار وألم بسيط (مثل حرق الشمس).",
            "الدرجة الثانية: فقاعات مائية وألم شديد.",
            "الدرجة الثالثة: تفحم الجلد أو بياضه التام مع فقدان الإحساس بالألم."
        ],
        steps: [
            "أبعد المصاب عن مصدر الحرارة فوراً.",
            "ضع منطقة الحرق تحت ماء جارٍ فاتر (ليس بارداً جداً) لمدة 15 دقيقة على الأقل.",
            "انزع الملابس أو الخواتم بحذر قبل حدوث تورم، إلا إذا كانت ملتصقة بالحرق.",
            "غطِ الحرق بضمادة شاش نظيفة وغير لاصقة.",
            "لا تضع الزبدة، الثلج، أو أي مواد منزلية على الحرق."
        ],
        emergency: "اتصل بـ 997 إذا كان الحرق في الوجه، الرقبة، المفاصل، الأعضاء التناسلية، أو إذا كان الحرق كيميائياً أو كهربائياً، أو من الدرجة الثالثة.",
        videoId: "Df8M_JdO_tI"
    },
    fractures: {
        title: "الكسور والإصابات العظمية",
        icon: "fas fa-bone",
        description: "انفصال أو شرخ في العظم. قد يكون الكسر مغلقاً (تحت الجلد) أو مفتوحاً (يبرز العظم للخارج).",
        symptoms: [
            "ألم شديد لا يطاق عند محاولة الحركة.",
            "تغير شكل العضو أو وجود التواء غير طبيعي.",
            "تورم سريع وزرقة في منطقة الإصابة.",
            "سماع صوت طقطقة لحظة الإصابة."
        ],
        steps: [
            "لا تحرك المصاب نهائياً إذا كان الكسر في الظهر، الرقبة، أو الحوض.",
            "ثبّت العضو المصاب على حالته باستخدام جبيرة (قطعة خشب أو كرتون مقوى).",
            "في الكسر المفتوح، غطِ الجرح بشاش معقم دون الضغط على العظم المكسور.",
            "استخدم كمادات ثلج (مغطاة بقماش) لتقليل التورم والألم.",
            "هدئ من روع المصاب وامنع الصدمة."
        ],
        emergency: "اتصل بـ 997 فوراً في حالات الكسور المفتوحة، أو إذا كان المصاب غير قادر على تحريك أطرافه، أو في حوادث السقوط من مكان مرتفع.",
        videoId: "p6p303M_6Gk"
    },
    choking: {
        title: "الغصة (الاختناق)",
        icon: "fas fa-hand-holding-medical",
        description: "انسداد كلي أو جزئي لمجرى الهواء بجسم غريب (طعام، لعبة صغيرة). حالة طارئة تهدد الحياة بالوفاة خلال دقائق.",
        symptoms: [
            "عدم القدرة على الكلام أو السعال أو التنفس.",
            "وضع اليدين حول الرقبة (العلامة العالمية للاختناق).",
            "تغير لون الوجه والشفاه إلى الأزرق.",
            "إصدار أصوات صفير عند محاولة التنفس."
        ],
        steps: [
            "قف خلف المصاب ولف ذراعيك حول خصره.",
            "أغلق قبضة يدك وضعها فوق السرة مباشرة (تحت القفص الصدري).",
            "أمسك قبضتك بيدك الأخرى وقم بضغطات قوية سريعة للداخل وللأعلى (مناورة هيمليك).",
            "كرر الضغطات حتى يخرج الجسم الغريب أو يفقد المصاب الوعي.",
            "بالنسبة للرضع: 5 ضربات ظهر و5 ضغطات صدر باستخدام إصبعين."
        ],
        emergency: "اتصل بـ 997 فوراً إذا فقد المصاب وعيه. ابدأ فوراً بعملية الإنعاش القلبي الرئوي (CPR) إذا توقف التنفس.",
        videoId: "dZ9-i_UpjlA"
    },
    fainting: {
        title: "الإغماء وفقدان الوعي",
        icon: "fas fa-user-injured",
        description: "فقدان مؤقت للوعي نتيجة نقص مفاجئ في وصول الدم للدماغ. قد يسبقه شعور بالدوار.",
        symptoms: [
            "سقوط مفاجئ على الأرض.",
            "شحوب في الوجه وبرودة في الجلد.",
            "ضعف النبض وتوسع حدقة العين.",
            "تعرق بارد."
        ],
        steps: [
            "استلقِ المصاب على ظهره وارفع قدميه عن الأرض بمسافة 30 سم.",
            "تأكد من مجرى التنفس (افحص النبض والتنفس).",
            "فك الملابس الضيقة (الياقة، الحزام).",
            "لا تعطِ المصاب أي شيء للأكل أو الشرب حتى يفيق تماماً.",
            "إذا تقيأ المصاب، ضعه في وضعية الإفاقة (على جنبه)."
        ],
        emergency: "اتصل بـ 997 إذا استمر الإغماء لأكثر من دقيقة، أو إذا تكرر الإغماء، أو إذا كان المصاب يعاني من السكري أو أمراض القلب.",
        videoId: "K-8P7H9oHNo"
    },
    bites: {
        title: "اللدغات والعضات",
        icon: "fas fa-spider",
        description: "إصابات ناتجة عن كائنات سامة (ثعابين، عقارب) أو حيوانات. الخطر يكمن في السم أو العدوى (السعار).",
        symptoms: [
            "ألم شديد وحرقان موضع اللدغ.",
            "تورم واحمرار سريع الانتشار.",
            "غثيان، تعرق، وصعوبة في التنفس (في حالات التسمم).",
            "رؤية آثار أنياب أو ثقوب في الجلد."
        ],
        steps: [
            "ابقِ المصاب هادئاً تماماً (الحركة تزيد من سرعة انتشار السم).",
            "اغسل مكان اللدغة بالماء والصابون.",
            "ثبّت الطرف المصاب واجعله في مستوى أقل من مستوى القلب.",
            "لا تستخدم الثلج، ولا تحاول مص السم بالفم، ولا تجرح مكان اللدغة.",
            "حاول تحديد نوع الكائن (أو تصويره) لمساعدة الأطباء في اختيار المصل."
        ],
        emergency: "اتصل بـ 997 فوراً في جميع حالات لدغات الثعابين والعقارب، أو إذا ظهرت علامات تحسس شديدة (ضيق تنفس، تورم اللسان).",
        videoId: "vP-e2QInWjU"
    },
    wounds: {
        title: "الجروح والخدوش",
        icon: "fas fa-band-aid",
        description: "تمزق في الجلد قد يسبب نزيفاً طفيفاً. الأولوية هنا هي منع التلوث والالتهاب.",
        symptoms: [
            "شق بسيط في طبقات الجلد.",
            "ألم موضعي.",
            "نزيف بسيط يتوقف بالضغط."
        ],
        steps: [
            "اغسل يديك جيداً قبل لمس الجرح.",
            "نظف الجرح بماء نظيف جارٍ لإزالة الأتربة.",
            "استخدم مطهراً طبياً (سافلون أو مسحات كحولية) للمنطقة المحيطة.",
            "غطِ الجرح بضمادة لاصقة أو شاش معقم.",
            "راقب الجرح؛ إذا ظهر صديد أو احمرار شديد أو حرارة، اطلب الاستشارة الطبية."
        ],
        emergency: "اذهب للمستشفى إذا كان الجرح عميقاً، أو إذا كان بسبب آلة صدئة (خطر التيتانوس)، أو إذا كان الجرح في الوجه.",
        videoId: "vWOfS2Nf8P0"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('case');

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    if (caseId && casesData[caseId]) {
        const data = casesData[caseId];

        // Populate case details page
        const update = (id, content, isHtml = false) => {
            const el = document.getElementById(id);
            if (el) {
                if (isHtml) el.innerHTML = content;
                else el.innerText = content;
            }
        };

        update('case-title', data.title);
        update('case-description', data.description);
        update('case-emergency', data.emergency);

        const iconEl = document.getElementById('case-icon');
        if (iconEl) iconEl.className = data.icon + " case-icon-large";

        const symptomsHtml = data.symptoms.map(s => `<li>${s}</li>`).join('');
        update('case-symptoms', symptomsHtml, true);

        const stepsHtml = data.steps.map(step => `<li>${step}</li>`).join('');
        update('case-steps', stepsHtml, true);

        // Handle Case Video
        const videoSection = document.getElementById('video-guide-section');
        const videoPlayer = document.getElementById('case-video-player');
        if (videoSection && videoPlayer && data.videoId) {
            videoPlayer.src = `https://www.youtube.com/embed/${data.videoId}`;
            videoSection.style.display = 'block';
        }

        // Set dynamic image based on case (optional placeholder logic)
        const imgEl = document.getElementById('case-image');
        if (imgEl) {
            const imgUrls = {
                bleeding: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                burns: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                fractures: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                choking: 'https://images.unsplash.com/photo-1582213726839-418422a27005?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                fainting: 'https://images.unsplash.com/photo-1579362842255-d222982d483c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                bites: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                wounds: 'https://images.unsplash.com/photo-1603398938378-e54eab446ddd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            };
            imgEl.src = imgUrls[caseId] || imgUrls.bleeding;
        }
    }

    // Animation on scroll observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .section, .animate').forEach(el => observer.observe(el));

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('nav');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Change icon
            if (navMenu.classList.contains('active')) {
                mobileNavToggle.classList.remove('fa-bars');
                mobileNavToggle.classList.add('fa-times');
            } else {
                mobileNavToggle.classList.remove('fa-times');
                mobileNavToggle.classList.add('fa-bars');
            }
        });
    }
});
