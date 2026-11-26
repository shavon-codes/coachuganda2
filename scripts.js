(function () {
  'use strict';

  /* ---------- TYPEWRITER ---------- */
  function startTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    el.innerHTML = '';
    const text = 'COACH UGANDA';
    let i = 0;

    setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 150);
    }, 300);
  }

  /* ---------- LOADER ---------- */
  function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }
  window.addEventListener('load', () => { setTimeout(hideLoader, 1100); });
  setTimeout(hideLoader, 3000);

  function triggerHomeAnimations() {
    const els = document.querySelectorAll('#home .reveal-up');
    els.forEach((el, idx) => {
      setTimeout(() => { el.classList.add('show'); }, idx * 200 + 400);
    });
  }

  /* ---------- READ MORE (ABOUT) ---------- */
  function initReadMore() {
    const box = document.getElementById('readMoreBox');
    if (!box) return;

    const head = box.querySelector('.read-more-head');
    const content = box.querySelector('.read-more-content');
    if (!head || !content) return;

    content.style.overflow = 'hidden';
    content.style.maxHeight = '0px';
    content.style.transition = 'max-height 0.5s ease';

    head.setAttribute('role', 'button');
    head.setAttribute('tabindex', '0');
    head.setAttribute('aria-expanded', 'false');
    head.setAttribute('aria-controls', 'readMoreBox');

    function setOpen(open) {
      box.classList.toggle('open', open);
      content.style.maxHeight = open ? content.scrollHeight + 'px' : '0px';
      head.setAttribute('aria-expanded', open ? 'true' : 'false');

      const icon = head.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-plus', !open);
        icon.classList.toggle('fa-minus', open);
      }
    }

    setOpen(false);

    head.addEventListener('click', () => {
      setOpen(!box.classList.contains('open'));
    });

    head.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        head.click();
      }
    });

    window.addEventListener('resize', () => {
      if (box.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    window.__recalcReadMore = function () {
      if (box.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    };
  }

  /* ---------- NAV & LANGUAGE ---------- */
  function initNavAndLang() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      });
    }

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        hamburger.innerHTML = navLinks.classList.contains('open')
          ? '<i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-solid fa-bars"></i>';
      });
    }

    const wrap = document.querySelector('.lang-wrap');
    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    const cur = document.getElementById('langCurrent');

    if (!wrap || !btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', wrap.classList.contains('open'));
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    const T = {
      en: {
        'nav.home': 'Home','nav.about': 'About','nav.mission': 'Mission','nav.services': 'Services',
        'nav.gives': 'Gives ❤️','nav.updates': 'Updates','nav.journal': 'Journal','nav.contact': 'Contact',
        'home.greet': 'Hello, it\'s me','home.cta': 'Explore My Work',
        'about.tag': 'WHO I AM','about.title1': 'About','about.title2': 'Me','about.hi': 'Hi, I\'m',
        'about.readMore': 'Read More',
        'about.p1': 'I was born on 2 May 1995 in Jinja, Uganda, and my journey has taken me from Uganda to Germany and across many parts of the world — shaped by education, professional football, business, social care, travel, and my passion for connecting with people.',
        'about.p2': 'Today I work as a caregiver in Germany, supporting people in their daily lives, while building businesses, hosting guests, and creating content as Coach Uganda. Every service I offer is built on integrity, warmth, and a genuine desire to serve.',
        'about.p3': 'I began my education at Kirinya Church of Uganda and later attended London High School, Namagabi Secondary School, Nakifuma Secondary School, and Green Valley High School and Busunju High School. I went on to study Education Administration at Kampala International University and Stanford University, gaining the knowledge, discipline, and leadership skills that shape my work today.',
        'about.p4': 'Football has always been part of my life. I played at competitive and professional club level, representing SC Villa, Soana, Vitoria University, Kyerima Lions, and African Youth Soccer Academy. The game taught me discipline, teamwork, perseverance, leadership, and consistency. In Uganda I also worked for Cooper and Company as a Sales Manager for two years, before moving to Germany, where I completed two years of social care training and a further year of professional development at Franziskuswerk Akademie.',
        'about.p5': 'Travel has broadened my perspective — from Italy, France, Poland, Spain, Croatia, the United States, the United Kingdom, Portugal, and Saudi Arabia to many other destinations. As Coach Uganda, I am also a content creator and influencer, connecting with a growing community across Facebook, TikTok, YouTube, and Instagram. My goal is to keep growing, inspiring others, creating opportunities, and using my experiences and platforms to make a positive impact. I am Waiswa Sulaiman. I am Coach Uganda — and this is my journey.',
        'journal.tag': 'The Journal','journal.title': 'Stories, Tips & Inspiration',
        'journal.sub': 'Exploring health, food, and lifestyle from around the world.',
        'journal.cat.health': 'Health & Wellness','journal.health.title': 'The Power of Everyday Movement',
        'journal.health.desc': "Discover how small, daily habits can transform your physical and mental well-being. It's not always about the gym—it's about how you live.",
        'journal.cat.remedies': 'Home Remedies','journal.remedies.title': "Nature's Natural Pharmacy",
        'journal.remedies.desc': 'From ginger teas to herbal compresses, explore traditional and natural remedies that have been used for generations to soothe everyday ailments.',
        'journal.cat.food': 'Food Around the World','journal.food.title': 'A Taste of Global Culture',
        'journal.food.desc': 'Food is the universal language. Join me as we explore delicious dishes, traditional recipes, and the stories behind the meals that bring people together.',
        'journal.cat.lifestyle': 'Lifestyle & Experience','journal.lifestyle.title ein': 'Living Life with Purpose',
        'journal.lifestyle.desc': 'Reflections on travel, personal growth, and embracing new experiences. Life is a journey und, and every day is a chance to learn something new.',
        'journal.explore': 'Explore More',
        'stay.title wir': 'Stay Connected with Coach Uganda',
        'stay.sub': "Don't miss the next update. Subscribe with your personal email to receive our newsletter directly gener in your inbox.",
        'stay.placeholder': 'Your personal email address','stay.btn': 'Subscribe',

        'give.hero.title': 'Coach Uganda Gives',
        'give.hero.lead1': "I believe even a small act of kindness can make a meaningful difference in someone's life. Through Coach Uganda Gives, I support children, families, and Communities with practical acts of care that bring hope and create opportunities for a better tomorrow.",
        'give.hero.lead2': 'My goal is simple: to use what I can whenever I can to encourage a child, support a family, and make a positive difference in the Community.',
        'give.hero.lead3': 'One act of care. One moment of hope. One step towards a brighter future.',
        'give.food.title': 'Food and Family Support',
        'give.food.desc': 'Providing food and essential household supplies to children and families, bringing practical support, care, and encouragement during difficult times.',
        'give.edu.title': 'Education and School Support',
        'give.edu.desc': 'Helping children access learning materials, school supplies, uniforms and other essentials that encourage their education and help them continue learning with confidence.',
        'give.clothing.title': 'Clothing and Essentials Needs',
        'give.clothing.desc': 'Providing children and families with clothing, shoes, and other everyday essentials that bring comfort, dignity, and practical support when they need it most.',
        'give.housing.title': 'Housing and Home Support',
        'give.housing.desc': 'Supporting families with beds, mattresses, bedsheets, and other essential household items that can help make their homes more comfortable and welcoming.',
        'give.readmore': 'Read More & See Updates',
        'give.support.title': 'Support Coach Uganda Work',
        'give.support.desc': 'Through Coach Uganda Gives, I continue supporting children and other practical Community needs. If you believe in this work, you are welcome to make a voluntary contribution. No act of kindness is too small to make a difference.',
        'give.voluntary': 'All contributions are voluntary',
        'modal.donate.title': 'Donate with Airtel Money',
        'modal.donate.sub': "Fill in your details and we'll generate a USSD code for your phone.",
        'modal.name': 'Your Name',
        'modal.amount': 'Amount (UGX)',
        'modal.reason': 'Reason for donation',
        'modal.phone': 'Your phone number (sending from)',
        'modal.continue': 'Continue',
        'modal.almost': 'Almost there!',
        'modal.almost.sub': 'Dial this code on your phone to complete your donation.',
        'modal.ussd': 'USSD code',
        'modal.copy': 'Copy',
        'modal.dial': 'Open Dialer',
        'modal.back': 'Make another donation',

        'explore.tag': 'Explore The Journal',
        'explore.title': 'Dive Deeper Into Life',
        'explore.sub': 'From natural remedies to global cuisines, discover the stories that shape our health, our food, and our world.',
        'explore.health.tag': 'Health & Wellness',
        'explore.health.title': 'Feel good. Live well. Take care of you. 🌿',
        'explore.health.desc': '<p>Your well-being deserves a little attention every day. Explore inspiring articles on healthy living, nutrition, movement, self-care, mental wellness, better sleep, and finding balance in everyday life.</p><p>Come in, explore, and discover simple ideas that can help you build a happier, healthier lifestyle—one step at a time.</p>',
        'explore.remedies.tag': 'Home Remedies',
        'explore.remedies.title': 'Natural wisdom for everyday well-being.',
        'explore.remedies.desc': '<p>Discover simple home remedies, time-honored traditions, and everyday ingredients used for generations to support comfort and wellness. Explore their traditional uses, practical tips, what research may tell us, and important precautions—all explained in an easy-to-understand way.</p><p>Sometimes, the simplest ingredients have the most interesting stories. Explore our latest articles and discover what nature and tradition have to offer.</p><p class="disclaimer"><em><strong>For educational purposes only.</strong> This content is not a substitute for professional medical advice, diagnosis, or treatment.</em></p>',
        'explore.food.tag': 'Food Around the World',
        'explore.food.title': 'Food is a journey.',
        'explore.food.desc': '<p>Food is a journey — one that connects us to people, cultures, and places around the world.</p><p>Discover authentic flavors, local favorites, vibrant street food, traditional dishes, and the stories behind them. From hidden culinary gems to unforgettable dining experiences, every article brings you closer to the heart of a destination.</p><p><strong>Taste the culture. Discover the stories. Explore the world, one bite at a time.</strong></p>',
        'explore.lifestyle.tag': 'Lifestyle & Experience',
        'explore.lifestyle.title': 'Life is made of moments worth experiencing.',
        'explore.lifestyle.desc': '<p>Life is made of moments worth experiencing, stories worth sharing, and places worth discovering.</p><p>Explore inspiring stories, travel, culture, wellness, food, personal growth, and everyday experiences that bring fresh perspectives to life.</p><p><strong>Discover. Experience. Be inspired.</strong></p>'
      },
      fr: {
        'nav.home': 'Accueil','nav.about': 'A propos','nav.mission': 'Mission','nav.services': 'Services',
        'nav.gives': 'Dons ❤️','nav.updates': 'Mises à jour','nav.journal': 'Journal','nav.contact': 'Contact',
        'home.greet': "Bonjour, c'est moi",'home.cta': 'Découvrir mon travail',
        'about.tag': 'QUI SUIS-JE','about.title1': 'À propos','about.title2': 'de moi','about.hi': 'Salut, je suis',
        'about.readMore': 'Lire plus',
        'about.p1': "Je suis né le 2 mai 1995 à Jinja, en Ouganda, et mon parcours m'a emmené de l'Ouganda à l'Allemagne et dans de nombreuses régions du monde — façonné par l'éducation, le football professionnel, les affaires, le soin social, les voyages et ma passion de créer des liens avec les gens.",
        'about.p2': "Aujourd'hui, je travaille comme soignant en Allemagne, en soutenant les gens dans leur vie quotidienne, tout en développant des entreprises, en accueillant des invités et en créant du contenu en tant que Coach Uganda. Chaque service que j'offre est fondé sur l'intégrité, la chaleur et un désir sincère de servir.",
        'about.p3': "J'ai commencé mon éducation à Kirinya Church of Uganda puis j'ai fréquenté London High School, Namagabi Secondary School, Nakifuma Secondary School et Green Valley High School. J'ai ensuite étudié l'administration de l'éducation à l'Université Internationale de Kampala et à l'Université Stanford, acquérant les connaissances, la discipline et les compétences de leadership qui façonnent mon travail aujourd'hui.",
        'about.p4': "Le football a toujours fait partie de ma vie. J'ai joué au niveau compétitif et professionnel, représentant SC Villa, Soana, Vitoria University, Kyerima Lions et African Youth Soccer Academy. Le jeu m'a enseigné la discipline, le travail d'équipe, la persévérance, le leadership et la constance. En Ouganda, j'ai aussi travaillé pour Cooper and Company comme chef des ventes pendant deux ans, avant de déménager en Allemagne, où j'ai suivi deux ans de formation en soin social et une année supplémentaire de développement professionnel à la Franziskuswerk Akademie.",
        'about.p5': "Les voyages ont élargi ma perspective — de l'Italie, la France, la Pologne, l'Espagne, la Croatie, les États-Unis, le Royaume-Uni, le Portugal et l'Arabie saoudite à bien d'autres destinations. En tant que Coach Uganda, je suis aussi créateur de contenu et influenceur, connecté à une communauté grandissante sur Facebook, TikTok, YouTube et Instagram. Mon objectif est de continuer à grandir, inspirer les autres, créer des opportunités et utiliser mes expériences et plateformes pour avoir un impact positif. Je suis Waiswa Sulaiman. Je suis Coach Uganda — et voici mon parcours.",
        'journal.tag': 'Le Journal','journal.title': 'Histoires, Conseils & Inspiration',
        'journal.sub': 'Explorer la santé, la nourriture et le mode de vie à travers le monde.',
        'journal.cat.health': 'Santé & Bien-être','journal.health.title': 'Le Pouvoir du Mouvement Quotidien',
        'journal.health.desc': "Découvrez comment de petites habitudes quotidiennes peuvent transformer votre bien-être physique et mental. Il ne s'agit pas toujours de la salle de sport, mais de votre mode de vie.",
        'journal.cat.remedies': 'Remèdes Maison','journal.remedies.title': 'La Pharmacie Naturelle de la Nature',
        'journal.remedies.desc': 'Des thés au gingembre aux compresses à base de plantes, explorez les remèdes traditionnels et naturels utilisés depuis des générations.',
        'journal.cat.food': 'Nourriture du Monde','journal.food.title': 'Un Goût de Culture Globale',
        'journal.food.desc': "La nourriture est le langage universel. Rejoignez-moi pour explorer des plats délicieux et les histoires derrière les repas.",
        'journal.cat.lifestyle': 'Mode de Vie & Expérience','journal.lifestyle.title': 'Vivre sa Vie avec un But',
        'journal.lifestyle.desc': "Réflexions sur les voyages, la croissance personnelle et l'acceptation de nouvelles expériences.",
        'journal.explore': 'Explorer Plus',
        'stay.title': 'Restez Connecté avec Coach Uganda',
        'stay.sub': "Ne manquez pas la prochaine mise à jour. Abonnez-vous avec votre email personnel.",
        'stay.placeholder': 'Votre adresse email personnelle','stay.btn': "S'abonner",

        'give.hero.title': 'Coach Uganda Donne',
        'give.hero.lead1': "Je crois que même un petit acte de gentillesse peut faire une différence significative dans la vie de quelqu'un. Grâce à Coach Uganda Gives, je soutiens les enfants, les familles et les communautés avec des actes de soin pratiques qui apportent de l'espoir et créent des opportunités pour un avenir meilleur.",
        'give.hero.lead2': "Mon objectif est simple : utiliser ce que je peux quand je peux pour encourager un enfant, soutenir une famille et faire une différence positive dans la communauté.",
        'give.hero.lead3': "Un acte de soin. Un moment d'espoir. Un pas vers un avenir meilleur.",
        'give.food.title': 'Nourriture et Soutien Familial',
        'give.food.desc': 'Fournir de la nourriture et des fournitures ménagères essentielles aux enfants et aux familles, apportant un soutien pratique, des soins et des encouragements pendant les moments difficiles.',
        'give.edu.title': 'Éducation et Soutien Scolaire',
        'give.edu.desc': "Aider les enfants à accéder à du matériel d'apprentissage, des fournitures scolaires, des uniformes et d'autres essentiels qui encouragent leur éducation.",
        'give.clothing.title': 'Vêtements et Besoins Essentiels',
        'give.clothing.desc': 'Fournir aux enfants et aux familles des vêtements, des chaussures et d\'autres essentiels quotidiens qui apportent confort, dignité et soutien pratique.',
        'give.housing.title': 'Logement et Soutien à Domicile',
        'give.housing.desc': 'Soutenir les familles avec des lits, des matelas, des draps et d\'autres articles ménagers essentiels qui peuvent aider à rendre leurs maisons plus confortables.',
        'give.readmore': 'Lire la Suite & Voir les Mises à jour',
        'give.support.title': 'Soutenir le Travail de Coach Uganda',
        'give.support.desc': 'Grâce à Coach Uganda Gives, je continue à soutenir les enfants et d\'autres besoins communautaires pratiques. Si vous croyez en ce travail, vous êtes invités à faire une contribution volontaire. Aucun acte de gentillesse n\'est trop petit.',
        'give.voluntary': 'Toutes les contributions sont volontaires',
        'modal.donate.title': 'Faire un don avec Airtel Money',
        'modal.donate.sub': 'Remplissez vos coordonnées et nous générerons un code USSD pour votre téléphone.',
        'modal.name': 'Votre Nom',
        'modal.amount': 'Montant (UGX)',
        'modal.reason': 'Raison du don',
        'modal.phone': 'Votre numéro de téléphone',
        'modal.continue': 'Continuer',
        'modal.almost': 'Presque fini !',
        'modal.almost.sub': 'Composez ce code sur votre téléphone pour terminer votre don.',
        'modal.ussd': 'Code USSD',
        'modal.copy': 'Copier',
        'modal.dial': 'Ouvrir le Clavier',
        'modal.back': 'Faire un autre don',

        'explore.tag': 'Explorer Le Journal',
        'explore.title': 'Plongez Plus Profondément Dans La Vie',
        'explore.sub': 'Des remèdes naturels aux cuisines du monde, découvrez les histoires qui façonnent notre santé, notre nourriture et notre monde.',
        'explore.health.tag': 'Santé & Bien-être',
        'explore.health.title': 'Sentez-vous bien. Vivez bien. Prenez soin de vous. 🌿',
        'explore.health.desc': '<p>Votre bien-être mérite un peu d\'attention chaque jour. Explorez des articles inspirants sur la vie saine, la nutrition, le mouvement, les soins personnels, le bien-être mental et le sommeil.</p><p>Entrez, explorez et découvrez des idées simples pour un mode de vie plus sain, une étape à la fois.</p>',
        'explore.remedies.tag': 'Remèdes Maison',
        'explore.remedies.title': 'Sagesse naturelle pour le bien-être quotidien.',
        'explore.remedies.desc': '<p>Découvrez des remèdes maison simples, des traditions séculaires et des ingrédients du quotidien utilisés depuis des générations pour soutenir le confort et le bien-être.</p><p>Parfois, les ingrédients les plus simples ont les histoires les plus intéressantes.</p><p class="disclaimer"><em><strong>À des fins éducatives uniquement.</strong> Ce contenu ne remplace pas un avis médical professionnel.</em></p>',
        'explore.food.tag': 'Nourriture du Monde',
        'explore.food.title': 'La nourriture est un voyage.',
        'explore.food.desc': '<p>La nourriture est un voyage - un voyage qui nous connecte aux personnes, aux cultures et aux lieux du monde entier.</p><p>Découvrez des saveurs authentiques, des plats locaux et de la street food vibrante.</p><p><strong>Goûtez à la culture. Découvrez les histoires. Explorez le monde, bouchée par bouchée.</strong></p>',
        'explore.lifestyle.tag': 'Mode de Vie & Expérience',
        'explore.lifestyle.title': 'La vie est faite de moments qui valent la peine d\'être vécus.',
        'explore.lifestyle.desc': '<p>La vie est faite de moments qui valent la peine d\'être vécus, d\'histoires qui valent la peine d\'être partagées et de lieux qui valent la peine d\'être découverts.</p><p>Explorez des histoires inspirantes, des voyages, la culture et le bien-être.</p><p><strong>Découvrez. Vivez. Soyez inspiré.</strong></p>'
      },
      de: {
        'nav.home': 'Startseite','nav.about': 'Über mich','nav.mission': 'Mission','nav.services': 'Dienstleistungen',
        'nav.gives': 'Spenden ❤️','nav.updates': 'Updates','nav.journal': 'Tagebuch','nav.contact': 'Kontakt',
        'home.greet': 'Hallo, ich bin es','home.cta': 'Meine Arbeit entdecken',
        'about.tag': 'WER ICH BIN','about.title1': 'Über','about.title2': 'mich','about.hi': 'Hi, ich bin',
        'about.readMore': 'Mehr lesen',
        'about.p1': 'Ich wurde am 2. Mai 1995 in Jinja, Uganda, geboren, und meine Reise hat mich von Uganda nach Deutschland und in viele Teile der Welt geführt — geprägt von Bildung, professionellem Fußball, Business, sozialer Pflege, Reisen und meiner Leidenschaft, Menschen zu verbinden.',
        'about.p2': 'Heute arbeite ich als Pfleger in Deutschland, unterstütze Menschen in ihrem Alltag und baue gleichzeitig Unternehmen auf, beherberge Gäste und erstelle Inhalte als Coach Uganda. Jeder Service, den ich anbiete, basiert auf Integrität, Wärme und dem echten Wunsch zu dienen.',
        'about.p3': 'Meine Ausbildung begann an der Kirinya Church of Uganda, später besuchte ich die London High School, die Namagabi Secondary School, die Nakifuma Secondary School und die Green Valley High School. Danach studierte ich Bildungsmanagement an der Kampala International University und der Stanford University.',
        'about.p4': 'Fußball war immer Teil meines Lebens. Ich spielte auf wettbewerbs- und profifähigem Vereinsniveau für SC Villa, Soana, Vitoria University, Kyerima Lions und die African Youth Soccer Academy. Das Spiel lehrte mich Disziplin, Teamwork, Ausdauer, Führung und Beständigkeit. In Uganda arbeitete ich zwei Jahre als Sales Manager für Cooper and Company, bevor ich nach Deutschland zog.',
        'about.p5': 'Reisen haben meinen Horizont erweitert — von Italien, Frankreich, Polen, Spanien, Kroatien, den USA, Großbritannien, Portugal und Saudi-Arabien bis zu vielen weiteren Zielen. Als Coach Uganda bin ich auch Content Creator und Influencer. Ich bin Waiswa Sulaiman. Ich bin Coach Uganda — und das ist meine Reise.',
        'journal.tag': 'Das Tagebuch','journal.title': 'Geschichten, Tipps & Inspiration',
        'journal.sub': 'Gesundheit, Essen und Lebensstil aus aller Welt erkunden.',
        'journal.cat.health': 'Gesundheit & Wellness','journal.health.title': 'Die Kraft der täglichen Bewegung',
        'journal.health.desc': 'Entdecken Sie, wie kleine tägliche Gewohnheiten Ihr körperliches und geistiges Wohlbefinden verändern können. Es geht nicht immer ums Fitnessstudio, sondern darum, wie Sie leben.',
        'journal.cat.remedies': 'Hausmittel','journal.remedies.title': 'Mutter Naturs Apotheke',
        'journal.remedies.desc': 'Von Ingwertees bis hin zu Kräuterkompressen: Entdecken Sie traditionelle und natürliche Heilmittel, die seit Generationen zur Linderung alltäglicher Beschwerden eingesetzt werden.',
        'journal.cat.food': 'Essen aus aller Welt','journal.food.title': 'Ein Hauch globaler Kultur',
        'journal.food.desc': 'Essen ist die universelle Sprache. Begleiten Sie mich auf der Suche nach köstlichen Gerichten, traditionellen Rezepten und den Geschichten hinter den Mahlzeiten.',
        'journal.cat.lifestyle': 'Lebensstil & Erfahrung','journal.lifestyle.title': 'Leben mit einem Ziel',
        'journal.lifestyle.desc': 'Gedanken zu Reisen, persönlichem Wachstum und neuen Erfahrungen. Das Leben ist eine Reise und jeder Tag eine Chance, etwas Neues zu lernen.',
        'journal.explore': 'Mehr entdecken',
        'stay.title': 'Bleiben Sie in Kontakt mit Coach Uganda',
        'stay.sub': "Verpassen Sie nicht das nächste Update. Abonnieren Sie mit Ihrer persönlichen E-Mail-Adresse.",
        'stay.placeholder': 'Ihre persönliche E-Mail-Adresse','stay.btn': 'Abonnieren',

        'give.hero.title': 'Coach Uganda Gibt',
        'give.hero.lead1': "Ich glaube, dass selbst eine kleine Freundlichkeit einen bedeutenden Unterschied im Leben eines Menschen machen kann. Durch Coach Uganda Gives unterstütze ich Kinder, Familien und Gemeinschaften mit praktischen Fürsorgeakten, die Hoffnung bringen.",
        'give.hero.lead2': "Mein Ziel ist einfach: zu nutzen, was ich kann, wann immer ich kann, um ein Kind zu ermutigen, eine Familie zu unterstützen und einen positiven Unterschied in der Gemeinschaft zu bewirken.",
        'give.hero.lead3': "Ein Akt der Fürsorge. Ein Moment der Hoffnung. Ein Schritt in eine hellere Zukunft.",
        'give.food.title': 'Essen & Familienunterstützung',
        'give.food.desc': 'Bereitstellung von Lebensmitteln und wichtigen Haushaltsvorräten für Kinder und Familien, praktische Unterstützung, Pflege und Ermutigung in schwierigen Zeiten.',
        'give.edu.title': 'Bildung & Schulförderung',
        'give.edu.desc': 'Kindern den Zugang zu Lernmaterialien, Schulsachen, Uniformen und anderen wichtigen Dingen zu ermöglichen, die ihre Bildung fördern.',
        'give.clothing.title': 'Kleidung & Grundbedürfnisse',
        'give.clothing.desc': 'Bereitstellung von Kleidung, Schuhen und anderen Dingen des täglichen Bedarfs für Kinder und Familien, die Komfort, Würde und praktische Unterstützung bieten.',
        'give.housing.title': 'Wohnen & Haushaltshilfe',
        'give.housing.desc': 'Unterstützung von Familien mit Betten, Matratzen, Bettwäsche und anderen wichtigen Haushaltsgegenständen, die ihre Häuser komfortabler machen.',
        'give.readmore': 'Mehr lesen & Updates sehen',
        'give.support.title': 'Unterstützen Sie Coach Uganda',
        'give.support.desc': 'Durch Coach Uganda Gives unterstütze ich weiterhin Kinder und andere praktische Bedürfnisse in der Gemeinschaft. Wenn Sie an diese Arbeit glauben, können Sie einen freiwilligen Beitrag leisten.',
        'give.voluntary': 'Alle Beiträge sind freiwillig',
        'modal.donate.title': 'Mit Airtel Money spenden',
        'modal.donate.sub': 'Geben Sie Ihre Datenieren einen USSD-Code für Ihr Telefon.',
        'modal.name': 'Ihr Name',
        'modal.amount': 'Betrag (UGX)',
        'modal.reason': 'Grund der Spende',
        'modal.phone': 'Ihre Telefonnummer (Absender)',
        'modal.continue': 'Weiter',
        'modal.almost': 'Fast geschafft!',
        'modal.almost.sub': 'Wählen Sie diesen Code auf Ihrem Telefon, um Ihre Spende abzuschließen.',
        'modal.ussd': 'USSD-Code',
        'modal.copy': 'Kopieren',
        'modal.dial': 'Wählhilfe öffnen',
        'modal.back': 'Eine weitere Spende leisten',

        'explore.tag': 'Tagebuch Entdecken',
        'explore.title': 'Tauchen Sie Tiefer Ins Leben Ein',
        'explore.sub': 'Von natürlichen Heilmitteln bis zu globalen Küchen – entdecken Sie die Geschichten, die unsere Gesundheit, unser Essen und unsere Welt prägen.',
        'explore.health.tag': 'Gesundheit & Wellness',
        'explore.health.title': 'Fühl dich gut. Lebe gut. Kümmere dich um dich. 🌿',
        'explore.health.desc': '<p>Ihr Wohlbefinden verdient jeden Tag ein wenig Aufmerksamkeit. Entdecken Sie inspirierende Artikel über gesunde Lebensweise, Ernährung, Bewegung und Selbstfürsorge.</p><p>Kommen Sie herein und entdecken Sie einfache Ideen für einen gesünderen Lebensstil.</p>',
        'explore.remedies.tag': 'Hausmittel',
        'explore.remedies.title': 'Natürliche Weisheit für das tägliche Wohlbefinden.',
        'explore.remedies.desc': '<p>Entdecken Sie einfache Hausmittel und jahrhundertealte Traditionen, die seit Generationen zur Unterstützung von Komfort und Wohlbefinden verwendet werden.</p><p>Manchmal haben die einfachsten Zutaten die interessantesten Geschichten.</p><p class="disclaimer"><em><strong>Nur zu Bildungszwecken.</strong> Dieser Inhalt ersetzt keine professionelle medizinische Beratung.</em></p>',
        'explore.food.tag': 'Essen aus aller Welt',
        'explore.food.title': 'Essen ist eine Reise.',
        'explore.food.desc': '<p>Essen ist eine Reise – eine, die uns mit Menschen, Kulturen und Orten auf der ganzen Welt verbindet.</p><p>Entdecken Sie authentische Aromen, lokale Favoriten und lebendiges Streetfood.</p><p><strong>Schmecken Sie die Kultur. Entdecken Sie die Geschichten. Erkunden Sie die Welt, Bissen für Bissen.</strong></p>',
        'explore.lifestyle.tag': 'Lebensstil & Erfahrung',
        'explore.lifestyle.title': 'Das Leben besteht aus Momenten, die es wert sind, erlebt zu werden.',
        'explore.lifestyle.desc': '<p>Das Leben besteht aus Momenten, die es wert sind, erlebt zu werden, Geschichten, die es wert sind, geteilt zu werden, und Orten, die es wert sind, entdeckt zu werden.</p><p>Entdecken Sie inspirierende Geschichten, Reisen und Kultur.</p><p><strong>Entdecken. Erleben. Inspiriert werden.</strong></p>'
      },
      es: {
        'nav.home': 'Inicio','nav.about': 'Sobre mí','nav.mission': 'Misión','nav.services': 'Servicios',
        'nav.gives': 'Donaciones ❤️','nav.updates': 'Actualizaciones','nav.journal': 'Diario','nav.contact': 'Contacto',
        'home.greet': 'Hola, soy yo','home.cta': 'Explorar mi trabajo',
        'about.tag': 'QUIÉN SOY','about.title1': 'Sobre','about.title2': 'mí','about.hi': 'Hola, soy',
        'about.readMore': 'Leer más',
        'about.p1': 'Nací el 2 de mayo de 1995 en Jinja, Uganda, y mi viaje me ha llevado de Uganda a Alemania y a muchas partes del mundo — moldeado por la educación, el fútbol profesional, los negocios, el cuidado social, los viajes y mi pasión por conectar con las personas.',
        'about.p2': 'Hoy trabajo como cuidador en Alemania, apoyando a las personas en su vida diaria, mientras construyo negocios, recibo invitados y creo contenido como Coach Uganda. Cada servicio que ofrezco se basa en la integridad, la calidez y un deseo genuino de servir.',
        'about.p3': 'Comencé mi educación en Kirinya Church of Uganda y luego asistí a London High School, Namagabi Secondary School, Nakifuma Secondary School y Green Valley High School. Después estudié Administración de la Educación en la Universidad Internacional de Kampala y la Universidad de Stanford.',
        'about.p4': 'El fútbol siempre ha sido parte de mi vida. Jugué a nivel de club competitivo y profesional, representando a SC Villa, Soana, Vitoria University, Kyerima Lions y African Youth Soccer Academy. El juego me enseñó disciplina, trabajo en equipo, perseverancia, liderazgo y constancia. En Uganda también trabajé para Cooper and Company como Gerente de Ventas durante dos años, antes de mudarme a Alemania.',
        'about.p5': 'Viajar ha ampliado mi perspectiva — desde Italia, Francia, Polonia, España, Croacia, Estados Unidos, Reino Unido, Portugal y Arabia Saudita hasta muchos otros destinos. Como Coach Uganda, también soy creador de contenido e influencer. Soy Waiswa Sulaiman. Soy Coach Uganda — y este es mi viaje.',
        'journal.tag': 'El Diario','journal.title': 'Historias, Consejos e Inspiración',
        'journal.sub': 'Explorando la salud, la comida y el estilo de vida de todo el mundo.',
        'journal.cat.health': 'Salud y Bienestar','journal.health.title': 'El poder del movimiento diario',
        'journal.health.desc': 'Descubre cómo los pequeños hábitos diarios pueden transformar tu bienestar físico y mental. No siempre se trata del gimnasio, sino de cómo vives.',
        'journal.cat.remedies': 'Remedios Caseros','journal.remedies.title': 'La farmacia natural de la naturaleza',
        'journal.remedies.desc': 'Desde tés de jengibre hasta compresas de hierbas, explora remedios tradicionales y naturales que se han utilizado durante generaciones.',
        'journal.cat.food': 'Comida por el Mundo','journal.food.title': 'Un sabor de la cultura global',
        'journal.food.desc': 'La comida es el lenguaje universal. Únete a mí mientras exploramos platos deliciosos, recetas tradicionales y las historias detrás de las comidas.',
        'journal.cat.lifestyle': 'Estilo de Vida y Experiencia','journal.lifestyle.title': 'Vivir la vida con propósito',
        'journal.lifestyle.desc': 'Reflexiones sobre viajes, crecimiento personal y la aceptación de nuevas experiencias. La vida es un viaje y cada día es una oportunidad.',
        'journal.explore': 'Explorar más',
        'stay.title': 'Mantente conectado con Coach Uganda',
        'stay.sub': "No te pierdas la próxima actualización. Suscríbete con tu correo electrónico personal.",
        'stay.placeholder': 'Tu correo electrónico personal','stay.btn': 'Suscribirse',

        'give.hero.title': 'Coach Uganda Da',
        'give.hero.lead1': "Creo que incluso un pequeño acto de bondad puede marcar una diferencia significativa en la vida de alguien. A través de Coach Uganda Gives, apoyo a niños, familias y comunidades con actos prácticos de cuidado que brindan esperanza.",
        'give.hero.lead2': "Mi objetivo es simple: usar lo que puedo cuando puedo para alentar a un niño, apoyar a una familia y marcar una diferencia positiva en la comunidad.",
        'give.hero.lead3': "Un acto de cuidado. Un momento de esperanza. Un paso hacia un futuro más brillante.",
        'give.food.title': 'Apoyo Alimentario y Familiar',
        'give.food.desc': 'Proporcionar alimentos y suministros esenciales para el hogar a niños y familias, brindando apoyo práctico, cuidado y aliento durante momentos difíciles.',
        'give.edu.title': 'Educación y Apoyo Escolar',
        'give.edu.desc': 'Ayudar a los niños a acceder a materiales de aprendizaje, útiles escolares, uniformes y otros elementos esenciales que fomenten su educación.',
        'give.clothing.title': 'Ropa y Necesidades Esenciales',
        'give.clothing.desc': 'Proporcionar a los niños y familias ropa, zapatos y otros artículos esenciales diarios que brinden comodidad, dignidad y apoyo práctico.',
        'give.housing.title': 'Vivienda y Apoyo en el Hogar',
        'give.housing.desc': 'Apoyar a las familias con camas, colchones, sábanas y otros artículos esenciales para el hogar que pueden ayudar a hacer sus hogares más cómodos.',
        'give.readmore': 'Leer Más y Ver Actualizaciones',
        'give.support.title': 'Apoyar el Trabajo de Coach Uganda',
        'give.support.desc': 'A través de Coach Uganda Gives, sigo apoyando a niños y otras necesidades comunitarias prácticas. Si crees en este trabajo, puedes hacer una contribución voluntaria.',
        'give.voluntary': 'Todas las contribuciones son voluntarias',
        'modal.donate.title': 'Donar con Airtel Money',
        'modal.donate.sub': 'Complete sus datos y generaremos un código USSD para su teléfono.',
        'modal.name': 'Tu Nombre',
        'modal.amount': 'Monto (UGX)',
        'modal.reason': 'Razón de la donación',
        'modal.phone': 'Tu número de teléfono',
        'modal.continue': 'Continuar',
        'modal.almost': '¡Casi listo!',
        'modal.almost.sub': 'Marque este código en su teléfono para completar su donación.',
        'modal.ussd': 'Código USSD',
        'modal.copy': 'Copiar',
        'modal.dial': 'Abrir Marcador',
        'modal.back': 'Hacer otra donación',

        'explore.tag': 'Explorar El Diario',
        'explore.title': 'Sumérgete Más Profundo En La Vida',
        'explore.sub': 'Desde remedios naturales hasta cocinas globales, descubre las historias que dan forma a nuestra salud, nuestra comida y nuestro mundo.',
        'explore.health.tag': 'Salud y Bienestar',
        'explore.health.title': 'Siéntete bien. Vive bien. Cuídate. 🌿',
        'explore.health.desc': '<p>Tu bienestar merece un poco de atención cada día. Explora artículos inspiradores sobre vida saludable, nutrición, movimiento y autocuidado.</p><p>Entra, explora y descubre ideas simples que te ayuden a construir un estilo de vida más saludable.</p>',
        'explore.remedies.tag': 'Remedios Caseros',
        'explore.remedies.title': 'Sabiduría natural para el bienestar diario.',
        'explore.remedies.desc': '<p>Descubre remedios caseros simples e ingredientes cotidianos utilizados durante generaciones para apoyar el bienestar.</p><p>A veces, los ingredientes más simples tienen las historias más interesantes.</p><p class="disclaimer"><em><strong>Solo con fines educativos.</strong> Este contenido no sustituye el consejo médico profesional.</em></p>',
        'explore.food.tag': 'Comida por el Mundo',
        'explore.food.title': 'La comida es un viaje.',
        'explore.food.desc': '<p>La comida es un viaje, uno que nos conecta con personas, culturas y lugares de todo el mundo.</p><p>Descubre sabores auténticos, favoritos locales y comida callejera vibrante.</p><p><strong>Prueba la cultura. Descubre las historias. Explora el mundo, bocado a bocado.</strong></p>',
        'explore.lifestyle.tag': 'Estilo de Vida y Experiencia',
        'explore.lifestyle.title': 'La vida está hecha de momentos que vale la pena experimentar.',
        'explore.lifestyle.desc': '<p>La vida está hecha de momentos que vale la pena experimentar, historias que vale la pena compartir y lugares que vale la pena descubrir.</p><p>Explora historias inspiradoras, viajes y cultura.</p><p><strong>Descubre. Experimenta. Inspírate.</strong></p>'
      },
      it: {
        'nav.home': 'Home','nav.about': 'Chi sono','nav.mission': 'Missione','nav.services': 'Servizi',
        'nav.gives': 'Donazioni ❤️','nav.updates': 'Aggiornamenti','nav.journal': 'Diario','nav.contact': 'Contatti',
        'home.greet': 'Ciao, sono io','home.cta': 'Esplora il mio lavoro',
        'about.tag': 'CHI SONO','about.title1': 'Su','about.title2': 'di me','about.hi': 'Ciao, sono',
        'about.readMore': 'Leggi di più',
        'about.p1': 'Sono nato il 2 maggio 1995 a Jinja, in Uganda, e il mio viaggio mi ha portato dall\'Uganda alla Germania e in molte parti del mondo — plasmato dall\'istruzione, dal calcio professionistico, dagli affari, dalla cura sociale, dai viaggi e dalla mia passione per connettermi con le persone.',
        'about.p2': 'Oggi lavoro come assistente sociale in Germania, supportando le persone nella loro vita quotidiana, mentre costruisco attività, ospito ospiti e creo contenuti come Coach Uganda. Ogni servizio che offro si basa su integrità, calore e un desiderio genuino di servire.',
        'about.p3': 'Ho iniziato la mia educazione a Kirinya Church of Uganda e poi ho frequentato London High School, Namagabi Secondary School, Nakifuma Secondary School e Green Valley High School. Ho poi studiato Amministrazione Educativa alla Kampala International University e alla Stanford University.',
        'about.p4': 'Il calcio è sempre stato parte della mia vita. Ho giocato a livello competitivo e professionistico, rappresentando SC Villa, Soana, Vitoria University, Kyerima Lions e African Youth Soccer Academy. Il gioco mi ha insegnato disciplina, lavoro di squadra, perseveranza, leadership e costanza. In Uganda ho anche lavorato per Cooper and Company come Sales Manager per due anni, prima di trasferirmi in Germania.',
        'about.p5': 'Viaggiare ha ampliato la mia prospettiva — dall\'Italia, Francia, Polonia, Spagna, Croazia, Stati Uniti, Regno Unito, Portogallo e Arabia Saudita a molte altre destinazioni. Come Coach Uganda, sono anche creatore di contenuti e influencer. Sono Waiswa Sulaiman. Sono Coach Uganda — e questo è il mio viaggio.',
        'journal.tag': 'Il Diario','journal.title': 'Storie, Consigli e Ispirazione',
        'journal.sub': 'Esplorare salute, cibo e stile di vita da tutto il mondo.',
        'journal.cat.health': 'Salute e Benessere','journal.health.title': 'Il potere del movimento quotidiano',
        'journal.health.desc': 'Scopri come le piccole abitudini quotidiane possono trasformare il tuo benessere fisico e mentale. Non si tratta sempre della palestra, ma di come vivi.',
        'journal.cat.remedies': 'Rimedi Casalinghi','journal.remedies.title': 'La farmacia naturale della natura',
        'journal.remedies.desc': 'Dai tè allo zenzero agli impacchi alle erbe, esplora rimedi tradizionali e naturali usati per generazioni.',
        'journal.cat.food': 'Cibo dal Mondo','journal.food.title': 'Un assaggio di cultura globale',
        'journal.food.desc': 'Il cibo è il linguaggio universale. Unisciti a me mentre esploriamo piatti deliziosi, ricette tradizionali e le storie dietro i pasti.',
        'journal.cat.lifestyle': 'Stile di Vita ed Esperienza','journal.lifestyle.title': 'Vivere la vita con uno scopo',
        'journal.lifestyle.desc': 'Riflessioni su viaggi, crescita personale e nuove esperienze. La vita è un viaggio e ogni giorno è un\'opportunità per imparare.',
        'journal.explore': 'Esplora di più',
        'stay.title': 'Rimani connesso con Coach Uganda',
        'stay.sub': "Non perdere il prossimo aggiornamento. Iscriviti con la tua email personale.",
        'stay.placeholder': 'La tua email personale','stay.btn': 'Iscriviti',

        'give.hero.title': 'Coach Uganda Dona',
        'give.hero.lead1': "Credo che anche un piccolo atto di gentilezza possa fare una differenza significativa nella vita di qualcuno. Attraverso Coach Uganda Gives, supporto bambini, famiglie e comunità con atti pratici di cura che portano speranza.",
        'give.hero.lead2': "Il mio obiettivo è semplice: usare ciò che posso quando posso per incoraggiare un bambino, sostenere una famiglia e fare una differenza positiva nella comunità.",
        'give.hero.lead3': "Un atto di cura. Un momento di speranza. Un passo verso un futuro più luminoso.",
        'give.food.title': 'Cibo e Sostegno Familiare',
        'give.food.desc': 'Fornire cibo e forniture domestiche essenziali a bambini e famiglie, offrendo supporto pratico, cura e incoraggiamento durante i momenti difficili.',
        'give.edu.title': 'Istruzione e Sostegno Scolastico',
        'give.edu.desc': 'Aiutare i bambini ad accedere a materiali di apprendimento, forniture scolastiche, uniformi e altri elementi essenziali che incoraggiano la loro istruzione.',
        'give.clothing.title': 'Abbigliamento e Bisogni Essenziali',
        'give.clothing.desc': 'Fornire a bambini e famiglie abbigliamento, scarpe e altri elementi essenziali quotidiani che portano comfort, dignità e supporto pratico.',
        'give.housing.title': 'Alloggio e Sostegno Domestico',
        'give.housing.desc': 'Supportare le famiglie con letti, materassi, lenzuola e altri articoli domestici essenziali che possono aiutare a rendere le loro case più confortevoli.',
        'give.readmore': 'Leggi di Più e Vedi Aggiornamenti',
        'give.support.title': 'Sostieni il Lavoro di Coach Uganda',
        'give.support.desc': 'Attraverso Coach Uganda Gives, continuo a sostenere bambini e altre esigenze pratiche della comunità. Se credi in questo lavoro, sei il benvenuto a fare un contributo volontario.',
        'give.voluntary': 'Tutti i contributi sono volontari',
        'modal.donate.title': 'Dona con Airtel Money',
        'modal.donate.sub': 'Compila i tuoi dati e genereremo un codice USSD per il tuo telefono.',
        'modal.name': 'Il Tuo Nome',
        'modal.amount': 'Importo (UGX)',
        'modal.reason': 'Motivo della donazione',
        'modal.phone': 'Il tuo numero di telefono',
        'modal.continue': 'Continua',
        'modal.almost': 'Quasi fatto!',
        'modal.almost.sub': 'Digita questo codice sul tuo telefono per completare la donazione.',
        'modal.ussd': 'Codice USSD',
        'modal.copy': 'Copia',
        'modal.dial': 'Apri Tastierino',
        'modal.back': 'Fai un\'altra donazione',

        'explore.tag': 'Esplora Il Diario',
        'explore.title': 'Immergiti Più A Fondo Nella Vita',
        'explore.sub': 'Dai rimedi naturali alle cucine globali, scopri le storie che plasmano la nostra salute, il nostro cibo e il nostro mondo.',
        'explore.health.tag': 'Salute e Benessere',
        'explore.health.title': 'Sentiti bene. Vivi bene. Prenditi cura di te. 🌿',
        'explore.health.desc': '<p>Il tuo benessere merita un po\' di attenzione ogni giorno. Esplora articoli stimolanti su vita sana, nutrizione e cura di sé.</p><p>Entra, esplora e scopri idee semplici per uno stile di vita più sano.</p>',
        'explore.remedies.tag': 'Rimedi Casalinghi',
        'explore.remedies.title': 'Saggezza naturale per il benessere quotidiano.',
        'explore.remedies.desc': '<p>Scopri semplici rimedi casalinghi e ingredienti quotidiani usati per generazioni per sostenere il benessere.</p><p>A volte, gli ingredienti più semplici hanno le storie più interessanti.</p><p class="disclaimer"><em><strong>Solo a scopo educativo.</strong> Questo contenuto non sostituisce il parere medico professionale.</em></p>',
        'explore.food.tag': 'Cibo dal Mondo',
        'explore.food.title': 'Il cibo è un viaggio.',
        'explore.food.desc': '<p>Il cibo è un viaggio, uno che ci connette a persone, culture e luoghi in tutto il mondo.</p><p>Scopri sapori autentici, preferiti locali e street food vivace.</p><p><strong>Assapora la cultura. Scopri le storie. Esplora il mondo, un morso alla volta.</strong></p>',
        'explore.lifestyle.tag': 'Stile di Vita ed Esperienza',
        'explore.lifestyle.title': 'La vita è fatta di momenti che vale la pena vivere.',
        'explore.lifestyle.desc': '<p>La vita è fatta di momenti che vale la pena vivere, storie che vale la pena condividere e luoghi che vale la pena scoprire.</p><p>Esplora storie stimolanti, viaggi e cultura.</p><p><strong>Scopri. Vivi. Ispirati.</strong></p>'
      },
      ar: {
        'nav.home': 'الرئيسية','nav.about': 'نبذة','nav.mission': 'رسالتنا','nav.services': 'الخدمات',
        'nav.gives': 'التبرعات ❤️','nav.updates': 'التحديثات','nav.journal': 'المجلة','nav.contact': 'اتصل',
        'home.greet': 'مرحبا، إنه أنا','home.cta': 'استكشف عملي',
        'about.tag': 'من أنا','about.title1': 'نبذة','about.title2': 'عني','about.hi': 'مرحبا، أنا',
        'about.readMore': 'اقرأ المزيد',
        'about.p1': 'ولدت في 2 مايو 1995 في جاجا، أوغندا، وأخذتني رحلتي من أوغندا إلى ألمانيا وإلى أجزاء كثيرة من العالم — تشكلت بالتعليم وكرة القدم الاحترافية والعمل التجاري والرعاية الاجتماعية والسفر وشغفي بالتواصل مع الناس.',
        'about.p2': 'اليوم أعمل كمقدم رعاية في ألمانيا، أدعم الناس في حياتهم اليومية، بينما أبني الأعمال وأستضيف الضيوف وأنشئ محتوى باسم كوتش أوغندا. كل خدمة أقدمها مبنية على النزاهة والدفء والرغبة الصادقة في خدمة الآخرين.',
        'about.p3': 'بدأت تعليمي في كنيسة كيرينيا أوغندا ثم التحقت بمدرسة لندن الثانوية ومدرسة ناماجابي الثانوية ومدرسة ناكيفوما الثانوية ومدرسة جرين فالي الثانوية. ثم درست إدارة التعليم في جامعة كامبالا الدولية وجامعة ستانفورد.',
        'about.p4': 'كانت كرة القدم دائما جزءا من حياتي. لعبت على مستوى الأندية التنافسية والاحترافية، ممثلا SC Villa وSoana وجامعة فيتوريا وأسود كيريما وأكاديمية الشباب الأفريقي لكرة القدم. علمتني اللعبة الانضباط والعمل الجماعي والمثابرة والقيادة والثبات. في أوغندا عملت أيضا لدى Cooper and Company كمدير مبيعات لمدة عامين قبل الانتقال إلى ألمانيا.',
        'about.p5': 'وسع السفر منظوري — من إيطاليا وفرنسا وبولندا وإسبانيا وكرواتيا والولايات المتحدة والمملكة المتحدة والبرتغال والمملكة العربية السعودية إلى وجهات أخرى كثيرة. بصفتي كوتش أوغندا، أنا أيضا صانع محتوى ومؤثر. أنا ويسوا سليمان. أنا كوتش أوغندا — وهذه رحلتي.',
        'journal.tag': 'المجلة','journal.title': 'قصص، نصائح وإلهام',
        'journal.sub': 'استكشاف الصحة والطعام ونمط الحياة من جميع أنحاء العالم.',
        'journal.cat.health': 'الصحة والعافية','journal.health.title': 'قوة الحركة اليومية',
        'journal.health.desc': 'اكتشف كيف يمكن للعادات اليومية الصغيرة أن تحول صحتك الجسدية والعقلية. الأمر لا يتعلق دائمًا بالصالة الرياضية، بل بكيفية عيشك.',
        'journal.cat.remedies': 'علاجات منزلية','journal.remedies.title': 'صيدلية الطبيعة',
        'journal.remedies.desc': 'من شاي الزنجبيل إلى الكمادات العشبية، استكشف العلاجات التقليدية والطبيعية المستخدمة منذ أجيال.',
        'journal.cat.food': 'طعام حول العالم','journal.food.title': 'تذوق للثقافة العالمية',
        'journal.food.desc': 'الطعام هو اللغة العالمية. انضم إلي في استكشاف الأطباق اللذيذة والقصص وراء الوجبات.',
        'journal.cat.lifestyle': 'نمط الحياة والتجربة','journal.lifestyle.title': 'عيش الحياة بهدف',
        'journal.lifestyle.desc': 'تأملات في السفر والنمو الشخصي واحتضان التجارب الجديدة. الحياة رحلة وكل يوم فرصة لتعلم شيء جديد.',
        'journal.explore': 'استكشف المزيد',
        'stay.title': 'ابق على تواصل مع كوتش أوغندا',
        'stay.sub': 'لا تفوت التحديث القادم. اشترك ببريدك الإلكتروني الشخصي.',
        'stay.placeholder': 'بريدك الإلكتروني الشخصي','stay.btn': 'اشترك',

        'give.hero.title': 'كوتش أوغندا يعطي',
        'give.hero.lead1': 'أؤمن بأن حتى أصغر عمل لطيف يمكن أن يحدث فرقًا ذا مغزى في حياة شخص ما. من خلال كوتش أوغندا يعطي، أدعم الأطفال والعائلات والمجتمعات بأعمال رعاية عملية تبعث الأمل.',
        'give.hero.lead2': 'هدفي بسيط: استخدام ما أستطيع وقتما أستطيع لتشجيع طفل، ودعم أسرة، وإحداث فرق إيجابي في المجتمع.',
        'give.hero.lead3': 'عمل رعاية واحد. لحظة أمل واحدة. خطوة واحدة نحو مستقبل أكثر إشراقًا.',
        'give.food.title': 'دعم الغذاء والأسرة',
        'give.food.desc': 'توفير الغذاء واللوازم المنزلية الأساسية للأطفال والعائلات، وتقديم الدعم العملي والرعاية والتشجيع خلال الأوقات الصعبة.',
        'give.edu.title': 'دعم التعليم والمدارس',
        'give.edu.desc': 'مساعدة الأطفال في الحصول على مواد التعلم واللوازم المدرسية والزي المدرسي وغيرها من الضروريات التي تشجع تعليمهم.',
        'give.clothing.title': 'الملابس والاحتياجات الأساسية',
        'give.clothing.desc': 'تزويد الأطفال والعائلات بالملابس والأحذية وغيرها من الضروريات اليومية التي توفر الراحة والكرامة والدعم العملي.',
        'give.housing.title': 'دعم الإسكان والمنزل',
        'give.housing.desc': 'دعم الأسر بالأسرة والمراتب والملاءات وغيرها من الأدوات المنزلية الأساسية التي يمكن أن تساعد في جعل منازلهم أكثر راحة.',
        'give.readmore': 'اقرأ المزيد وشاهد التحديثات',
        'give.support.title': 'دعم عمل كوتش أوغندا',
        'give.support.desc': 'من خلال كوتش أوغندا يعطي، أواصل دعم الأطفال وغيرها من الاحتياجات المجتمعية العملية. إذا كنت تؤمن بهذا العمل، فأنت مدعو لتقديم مساهمة طوعية.',
        'give.voluntary': 'جميع المساهمات طوعية',
        'modal.donate.title': 'تبرع عبر إيرتل موني',
        'modal.donate.sub': 'املأ بياناتك وسنقوم بإنشاء رمز USSD لهاتفك.',
        'modal.name': 'اسمك',
        'modal.amount': 'المبلغ (UGX)',
        'modal.reason': 'سبب التبرع',
        'modal.phone': 'رقم هاتفك (المرسل من)',
        'modal.continue': 'متابعة',
        'modal.almost': 'على وشك الانتهاء!',
        'modal.almost.sub': 'اطلب هذا الرمز على هاتفك لإكمال تبرعك.',
        'modal.ussd': 'رمز USSD',
        'modal.copy': 'نسخ',
        'modal.dial': 'فتح لوحة الاتصال',
        'modal.back': 'تقديم تبرع آخر',

        'explore.tag': 'استكشف المجلة',
        'explore.title': 'اغوص أعمق في الحياة',
        'explore.sub': 'من العلاجات الطبيعية إلى المأكولات العالمية، اكتشف القصص التي تشكل صحتنا وطعامنا وعالمنا.',
        'explore.health.tag': 'الصحة والعافية',
        'explore.health.title': 'اشعر بالراحة. عش جيدًا. اعتني بنفسك. 🌿',
        'explore.health.desc': '<p>رفاهيتك تستحق القليل من الاهتمام كل يوم. استكشف مقالات ملهمة حول الحياة الصحية والتغذية والحركة.</p><p>ادخل واستكشف واكتشف أفكارًا بسيطة لأسلوب حياة أكثر صحة.</p>',
        'explore.remedies.tag': 'علاجات منزلية',
        'explore.remedies.title': 'حكمة طبيعية للرفاهية اليومية.',
        'explore.remedies.desc': '<p>اكتشف العلاجات المنزلية البسيطة والمكونات اليومية المستخدمة منذ أجيال لدعم العافية.</p><p>في بعض الأحيان، المكونات الأبسط لها القصص الأكثر إثارة للاهتمام.</p><p class="disclaimer"><em><strong>لأغراض تعليمية فقط.</strong> هذا المحتوى ليس بديلاً عن المشورة الطبية المهنية.</em></p>',
        'explore.food.tag': 'طعام حول العالم',
        'explore.food.title': 'الطعام رحلة.',
        'explore.food.desc': '<p>الطعام رحلة - رحلة تربطنا بالأشخاص والثقافات والأماكن حول العالم.</p><p>اكتشف النكهات الأصيلة والأطباق المحلية المفضلة.</p><p><strong>تذوق الثقافة. اكتشف القصص. استكشف العالم، لقمة تلو الأخرى.</strong></p>',
        'explore.lifestyle.tag': 'نمط الحياة والتجربة',
        'explore.lifestyle.title': 'الحياة مصنوعة من لحظات تستحق التجربة.',
        'explore.lifestyle.desc': '<p>الحياة مصنوعة من لحظات تستحق التجربة، وقصص تستحق المشاركة، وأماكن تستحق الاكتشاف.</p><p>استكشف قصصًا ملهمة، والسفر، والثقافة.</p><p><strong>اكتشف. جرب. كن ملهمًا.</strong></p>'
      }
    };

    function applyLang(lang) {
      const dict = T[lang] || T.en;

      document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
        if (dict[key] === undefined) return;

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      });

      const rtl = (lang === 'ar');
      document.documentElement.lang = lang;
      document.documentElement.dir = rtl ? 'rtl' : 'ltr';
      document.body.dir = rtl ? 'rtl' : 'ltr';

      if (cur) cur.textContent = lang.toUpperCase();

      try { localStorage.setItem('cu_lang', lang); } catch (e) {}

      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');

      if (typeof window.__recalcReadMore === 'function') {
        window.__recalcReadMore();
      }
    }

    menu.querySelectorAll('[data-lang]').forEach(opt => {
      opt.addEventListener('click', () => applyLang(opt.getAttribute('data-lang')));
    });

    let saved = null;
    try { saved = localStorage.getItem('cu_lang'); } catch (e) {}
    if (!saved) {
      const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
      saved = T[browser] ? browser : 'en';
    }
    applyLang(saved);
  }

  /* ---------- REVEAL ---------- */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-up, .reveal-pop, .reveal-zoom').forEach(el => el.classList.add('show'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-up, .reveal-pop, .reveal-zoom').forEach(el => obs.observe(el));
  }

  /* ---------- FORMS ---------- */
  function initForms() {
    const forms = document.querySelectorAll('.stay-form, #newsletterForm');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const msg = form.querySelector('.form-message');
        const btn = form.querySelector('button[type="submit"]');
        if (!emailInput || !msg) return;

        const val = emailInput.value.trim();
        const RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        msg.textContent = '';
        msg.className = 'form-message';

        if (!val || !RE.test(val)) {
          msg.textContent = 'Please enter a valid email.';
          msg.classList.add('error');
          emailInput.focus();
          return;
        }

        if (btn) btn.disabled = true;
        form.classList.add('loading');

        setTimeout(() => {
          form.classList.remove('loading');
          if (btn) btn.disabled = false;
          msg.textContent = 'Thanks! Check your inbox to confirm.';
          msg.classList.add('success');
          form.reset();
        }, 900);
      });
    });
  }

  /* ---------- DONATION MODAL ---------- */
  function initDonationModal() {
    const modal = document.getElementById('donateModal');
    if (!modal) return;

    const closeBtn = document.getElementById('closeDonate');
    const formStep = document.getElementById('donateFormStep');
    const resultStep = document.getElementById('donateResultStep');
    const donateForm = document.getElementById('donationForm');
    const donateTitle = document.getElementById('donateTitle');
    const donateLogo = document.getElementById('donateLogo');
    const logoText = document.getElementById('donateLogoText');
    const ussdCode = document.getElementById('ussdCode');
    const copyUssd = document.getElementById('copyUssd');
    const dialBtn = document.getElementById('dialBtn');
    const summary = document.getElementById('donateSummary');
    const backBtn = document.getElementById('backToDonate');

    const labels = { airtel: 'Airtel Money', mtn: 'MTN Mobile Money' };
    let method = 'airtel';

    function prefix(m) {
      return m === 'airtel' ? '*185*1*1*256759862493*' : '*165*3*256759862493*';
    }

    function setBrand(m) {
      if (!donateLogo || !logoText) return;
      if (m === 'airtel') {
        donateLogo.className = 'donate-logo airtel-logo';
        logoText.textContent = 'airtel';
      } else {
        donateLogo.className = 'donate-logo mtn-logo';
        logoText.textContent = 'MTN';
      }
    }

    function openModal(m) {
      method = m;
      if (donateTitle) donateTitle.textContent = 'Donate with ' + labels[m];
      setBrand(m);
      if (formStep) formStep.hidden = false;
      if (resultStep) resultStep.hidden = true;
      if (donateForm) donateForm.reset();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.pay-card[data-method]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.method || 'airtel'));
    });

    document.querySelectorAll('.quick-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        const amt = document.getElementById('donAmount');
        if (amt) amt.value = btn.dataset.amt;
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    if (donateForm) {
      donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('donName')?.value.trim();
        const amount = parseInt(document.getElementById('donAmount')?.value, 10);
        const reason = document.getElementById('donReason')?.value.trim();
        const phone = document.getElementById('donPhone')?.value.trim();

        if (!name || !amount || amount < 1000 || !reason || !phone) {
          alert('Please fill in all fields. Minimum amount is 1000 UGX.');
          return;
        }

        const code = prefix(method) + amount + '#';
        if (ussdCode) ussdCode.textContent = code;
        if (dialBtn) dialBtn.href = 'tel:' + encodeURIComponent(code);

        if (summary) {
          summary.innerHTML = `<strong>${labels[method]}</strong><br>From: ${esc(name)} — ${esc(phone)}<br>Amount: <strong>${amount.toLocaleString()} UGX</strong><br>Reason: ${esc(reason)}`;
        }

        if (formStep) formStep.hidden = true;
        if (resultStep) resultStep.hidden = false;
      });
    }

    if (copyUssd && ussdCode) {
      copyUssd.addEventListener('click', () => {
        const text = ussdCode.textContent;
        const done = () => {
          const orig = copyUssd.innerHTML;
          copyUssd.classList.add('copied');
          copyUssd.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
          setTimeout(() => {
            copyUssd.classList.remove('copied');
            copyUssd.innerHTML = orig;
          }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (err) {}
          document.body.removeChild(ta);
          done();
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (formStep) formStep.hidden = false;
        if (resultStep) resultStep.hidden = true;
      });
    }

    function esc(s) {
      return String(s).replace(/[&<>"']/g, (c) => {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return map[c];
      });
    }
  }

  /* ---------- SCROLLSPY (NAV HIGHLIGHT) ---------- */
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (!navLinks.length || !sections.length) return;

    function updateActiveLink() {
      let currentId = '';
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // This checks if the section is currently in the middle of the screen
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          currentId = section.getAttribute('id');
        }
      });

      // Fallback for when you are at the very top of the page
      if (window.scrollY < 100) {
        currentId = 'home';
      }

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink(); // Trigger on load
  }

  /* ---------- BOOT ---------- */
  function boot() {
    try { startTypewriter(); } catch (e) { console.error(e); }
    try { triggerHomeAnimations(); } catch (e) { console.error(e); }
    try { initReadMore(); } catch (e) { console.error(e); }
    try { initNavAndLang(); } catch (e) { console.error(e); }
    try { initReveal(); } catch (e) { console.error(e); }
    try { initForms(); } catch (e) { console.error(e); }
    try { initDonationModal(); } catch (e) { console.error(e); }
    try { initScrollSpy(); } catch (e) { console.error(e); } /* New logic added */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

