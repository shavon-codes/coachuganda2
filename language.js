/* =========================================================
   COACH UGANDA — LANGUAGE ENGINE (v8 - All Pages)
   ========================================================= */
(function () {
  'use strict';

  const translations = {
    en: {
      'nav.home':'Home','nav.gives':'Gives ❤️','nav.updates':'Updates','nav.journal':'Journal',
      'lang.select':'Select language',
      'hero.back':'All Topics',
      'stay.title':'Stay Connected with Coach Uganda',
      'stay.sub':"Don't miss the next update. Subscribe with your personal email to receive our newsletter directly in your inbox.",
      'stay.placeholder':'Your personal email address','stay.btn':'Subscribe',
      'footer.rights':'© 2026 Coach Uganda. All rights reserved.',
      
      /* Home Remedies */
      'rem.hero.tag':'Home Remedies','rem.hero.title':'Natural wisdom for everyday well-being.','rem.hero.sub':'Time-honored traditions, everyday ingredients, simple comfort.',
      'rem.main.eyebrow':'From nature, with care','rem.main.title':'Old wisdom, new curiosity.',
      'rem.main.p1':'Discover simple home remedies, time-honored traditions, and everyday ingredients used for generations to support comfort and wellness. Explore their traditional uses, practical tips, what research may tell us, and important precautions — all explained in an easy-to-understand way.',
      'rem.main.p2':'Sometimes, the simplest ingredients have the most interesting stories. Explore our latest articles and discover what nature and tradition have to offer.',
      'rem.disclaimer':'For educational purposes only. This content is not a substitute for professional medical advice, diagnosis, or treatment.',
      'rem.badge.label':'Natural ingredients','rem.discover.kicker':"What you'll discover",'rem.discover.title':'Explore the world of remedies','rem.discover.sub':'Traditions, ingredients, and practical guidance — explained simply.',
      'rem.tile1.title':'Herbs & Plants','rem.tile1.text':'Everyday herbs and plants traditionally used for comfort and wellness.',
      'rem.tile2.title':'Kitchen Remedies','rem.tile2.text':'Simple ingredients from your pantry with surprising traditional uses.',
      'rem.tile3.title':'What Research Says','rem.tile3.text':'Balanced, easy-to-understand summaries of what modern science suggests.',
      'rem.tile4.title':'Safety & Precautions','rem.tile4.text':'Important guidance on safe use and when to speak with a professional.',

      /* Food Around the World */
      'food.hero.tag':'Food Around the World','food.hero.title':'Food is a journey.','food.hero.sub':'Connecting us to people, cultures, and places around the world.',
      'food.main.eyebrow':'Taste the culture','food.main.title':'Every dish has a story.',
      'food.main.p1':'Food is a journey — one that connects us to people, cultures, and places around the world.',
      'food.main.p2':'Discover authentic flavors, local favorites, vibrant street food, traditional dishes, and the stories behind them. From hidden culinary gems to unforgettable dining experiences, every article brings you closer to the heart of a destination.',
      'food.main.p3':'Taste the culture. Discover the stories. Explore the world, one bite at a time.',
      'food.badge.label':'Cuisines to explore','food.discover.kicker':"What you'll discover",'food.discover.title':'A world of flavor','food.discover.sub':'Flavors, cultures, and stories from every corner of the world.',
      'food.tile1.title':'Local Favorites','food.tile1.text':'Iconic dishes and beloved recipes from around the world.',
      'food.tile2.title':'Street Food','food.tile2.text':'Vibrant markets, food trucks, and unforgettable bites on the go.',
      'food.tile3.title':'Hidden Gems','food.tile3.text':'Off-the-beaten-path spots where locals actually eat.',
      'food.tile4.title':'Stories Behind Dishes','food.tile4.text':'The people, history, and traditions behind every recipe.',

      /* Lifestyle & Experience */
      'life.hero.tag':'Lifestyle & Experience','life.hero.title':'Life is made of moments worth experiencing.','life.hero.sub':'Stories, places, and personal growth — all in one place.',
      'life.main.eyebrow':'Discover. Experience.','life.main.title':'Every moment has a story.',
      'life.main.p1':'Life is made of moments worth experiencing, stories worth sharing, and places worth discovering.',
      'life.main.p2':'Explore inspiring stories, travel, culture, wellness, food, personal growth, and everyday experiences that bring fresh perspectives to life.',
      'life.main.p3':'Discover. Experience. Be inspired.',
      'life.badge.label':'Moments to live','life.discover.kicker':"What you'll discover",'life.discover.title':'Stories, places, and growth','life.discover.sub':'Fresh perspectives, meaningful moments, and everyday inspiration.',
      'life.tile1.title':'Travel','life.tile1.text':'Places worth discovering and the moments that stay with us.',
      'life.tile2.title':'Culture','life.tile2.text':'Stories, traditions, and communities that shape our world.',
      'life.tile3.title':'Personal Growth','life.tile3.text':'Reflections, lessons, and ideas to help you grow every day.',
      'life.tile4.title':'Everyday Life','life.tile4.text':'Simple, beautiful, real — the moments in between it all.'
    },
    fr: {
      'nav.home':'Accueil','nav.gives':'Dons ❤️','nav.updates':'Actualités','nav.journal':'Journal',
      'lang.select':'Choisir la langue',
      'hero.back':'Tous les sujets',
      'stay.title':'Restez connecté avec Coach Uganda',
      'stay.sub':'Ne manquez pas la prochaine mise à jour. Abonnez-vous avec votre e-mail personnel pour recevoir notre newsletter directement dans votre boîte de réception.',
      'stay.placeholder':'Votre adresse e-mail personnelle','stay.btn':"S'abonner",
      'footer.rights':'© 2026 Coach Uganda. Tous droits réservés.',
      
      'rem.hero.tag':'Remèdes maison','rem.hero.title':'Sagesse naturelle pour le bien-être quotidien.','rem.hero.sub':'Traditions séculaires, ingrédients du quotidien, confort simple.',
      'rem.main.eyebrow':'De la nature, avec soin','rem.main.title':'Vieille sagesse, nouvelle curiosité.',
      'rem.main.p1':'Découvrez de simples remèdes maison, des traditions séculaires et des ingrédients du quotidien utilisés depuis des générations pour soutenir le confort et le bien-être. Explorez leurs utilisations traditionnelles, des conseils pratiques, ce que la recherche peut nous dire et d\'importantes précautions — le tout expliqué de manière simple.',
      'rem.main.p2':'Parfois, les ingrédients les plus simples ont les histoires les plus intéressantes. Explorez nos derniers articles et découvrez ce que la nature et la tradition ont à offrir.',
      'rem.disclaimer':'À des fins éducatives uniquement. Ce contenu ne remplace pas les conseils médicaux professionnels, le diagnostic ou le traitement.',
      'rem.badge.label':'Ingrédients naturels','rem.discover.kicker':'Ce que vous allez découvrir','rem.discover.title':'Explorez le monde des remèdes','rem.discover.sub':'Traditions, ingrédients et conseils pratiques — expliqués simplement.',
      'rem.tile1.title':'Herbes et plantes','rem.tile1.text':'Herbes et plantes du quotidien traditionnellement utilisées pour le confort et le bien-être.',
      'rem.tile2.title':'Remèdes de cuisine','rem.tile2.text':'Ingrédients simples de votre garde-manger aux utilisations traditionnelles surprenantes.',
      'rem.tile3.title':'Ce que dit la recherche','rem.tile3.text':'Des résumés équilibrés et faciles à comprendre de ce que suggère la science moderne.',
      'rem.tile4.title':'Sécurité et précautions','rem.tile4.text':'Conseils importants sur l\'utilisation sûre et quand consulter un professionnel.',

      'food.hero.tag':'Cuisine du monde','food.hero.title':'La nourriture est un voyage.','food.hero.sub':'Nous connectant aux gens, aux cultures et aux lieux du monde entier.',
      'food.main.eyebrow':'Goûtez à la culture','food.main.title':'Chaque plat a une histoire.',
      'food.main.p1':'La nourriture est un voyage — un voyage qui nous connecte aux gens, aux cultures et aux lieux du monde entier.',
      'food.main.p2':'Découvrez des saveurs authentiques, des favoris locaux, une street food dynamique, des plats traditionnels et les histoires qui se cachent derrière. Des joyaux culinaires cachés aux expériences gastronomiques inoubliables, chaque article vous rapproche du cœur d\'une destination.',
      'food.main.p3':'Goûtez à la culture. Découvrez les histoires. Explorez le monde, une bouchée à la fois.',
      'food.badge.label':'Cuisines à explorer','food.discover.kicker':'Ce que vous allez découvrir','food.discover.title':'Un monde de saveurs','food.discover.sub':'Saveurs, cultures et histoires des quatre coins du monde.',
      'food.tile1.title':'Favoris locaux','food.tile1.text':'Des plats emblématiques et des recettes bien-aimées du monde entier.',
      'food.tile2.title':'Street Food','food.tile2.text':'Des marchés dynamiques, des food trucks et des bouchées inoubliables sur le pouce.',
      'food.tile3.title':'Joyaux cachés','food.tile3.text':'Des endroits hors des sentiers battus où les locaux mangent vraiment.',
      'food.tile4.title':'Histoires derrière les plats','food.tile4.text':'Les personnes, l\'histoire et les traditions derrière chaque recette.',

      'life.hero.tag':'Style de vie & Expérience','life.hero.title':"La vie est faite de moments qui valent la peine d'être vécus.",'life.hero.sub':'Histoires, lieux et développement personnel — tout au même endroit.',
      'life.main.eyebrow':'Découvrir. Expérimenter.','life.main.title':'Chaque moment a une histoire.',
      'life.main.p1':"La vie est faite de moments qui valent la peine d'être vécus, d'histoires qui valent la peine d'être partagées et de lieux qui valent la peine d'être découverts.",
      'life.main.p2':'Explorez des histoires inspirantes, des voyages, la culture, le bien-être, la nourriture, le développement personnel et des expériences quotidiennes qui apportent de nouvelles perspectives à la vie.',
      'life.main.p3':'Découvrez. Expérimentez. Soyez inspiré.',
      'life.badge.label':'Moments à vivre','life.discover.kicker':'Ce que vous allez découvrir','life.discover.title':'Histoires, lieux et croissance','life.discover.sub':'Nouvelles perspectives, moments significatifs et inspiration quotidienne.',
      'life.tile1.title':'Voyage','life.tile1.text':"Des lieux qui valent la peine d'être découverts et les moments qui restent avec nous.",
      'life.tile2.title':'Culture','life.tile2.text':'Histoires, traditions et communautés qui façonnent notre monde.',
      'life.tile3.title':'Développement personnel','life.tile3.text':'Réflexions, leçons et idées pour vous aider à grandir chaque jour.',
      'life.tile4.title':'Vie quotidienne','life.tile4.text':'Simple, beau, réel — les moments entre tout cela.'
    },
    de: {
      'nav.home':'Startseite','nav.gives':'Spenden ❤️','nav.updates':'Updates','nav.journal':'Journal',
      'lang.select':'Sprache wählen',
      'hero.back':'Alle Themen',
      'stay.title':'Bleib mit Coach Uganda verbunden',
      'stay.sub':'Verpasse nicht das nächste Update. Abonniere mit deiner persönlichen E-Mail, um unseren Newsletter direkt in deinem Posteingang zu erhalten.',
      'stay.placeholder':'Deine persönliche E-Mail-Adresse','stay.btn':'Abonnieren',
      'footer.rights':'© 2026 Coach Uganda. Alle Rechte vorbehalten.',
      
      'rem.hero.tag':'Hausmittel','rem.hero.title':'Natürliche Weisheit für das tägliche Wohlbefinden.','rem.hero.sub':'Althergebrachte Traditionen, alltägliche Zutaten, einfacher Komfort.',
      'rem.main.eyebrow':'Aus der Natur, mit Sorgfalt','rem.main.title':'Alte Weisheit, neue Neugier.',
      'rem.main.p1':'Entdecke einfache Hausmittel, althergebrachte Traditionen und alltägliche Zutaten, die seit Generationen zur Unterstützung von Komfort und Wohlbefinden verwendet werden. Erkunde ihre traditionellen Verwendungen, praktische Tipps, was die Forschung sagt und wichtige Vorsichtsmaßnahmen — alles einfach erklärt.',
      'rem.main.p2':'Manchmal haben die einfachsten Zutaten die interessantesten Geschichten. Erkunde unsere neuesten Artikel und entdecke, was Natur und Tradition zu bieten haben.',
      'rem.disclaimer':'Nur für Bildungszwecke. Dieser Inhalt ist kein Ersatz für professionelle medizinische Beratung, Diagnose oder Behandlung.',
      'rem.badge.label':'Natürliche Zutaten','rem.discover.kicker':'Was du entdecken wirst','rem.discover.title':'Entdecke die Welt der Heilmittel','rem.discover.sub':'Traditionen, Zutaten und praktische Anleitung — einfach erklärt.',
      'rem.tile1.title':'Kräuter & Pflanzen','rem.tile1.text':'Alltägliche Kräuter und Pflanzen, die traditionell für Komfort und Wohlbefinden verwendet werden.',
      'rem.tile2.title':'Küchenheilmittel','rem.tile2.text':'Einfache Zutaten aus deiner Speisekammer mit überraschenden traditionellen Verwendungen.',
      'rem.tile3.title':'Was die Forschung sagt','rem.tile3.text':'Ausgewogene, leicht verständliche Zusammenfassungen dessen, was die moderne Wissenschaft vermuten lässt.',
      'rem.tile4.title':'Sicherheit & Vorsicht','rem.tile4.text':'Wichtige Hinweise zur sicheren Anwendung und wann du mit einem Fachmann sprechen solltest.',

      'food.hero.tag':'Essen aus aller Welt','food.hero.title':'Essen ist eine Reise.','food.hero.sub':'Verbinde uns mit Menschen, Kulturen und Orten auf der ganzen Welt.',
      'food.main.eyebrow':'Koste die Kultur','food.main.title':'Jedes Gericht hat eine Geschichte.',
      'food.main.p1':'Essen ist eine Reise — eine Reise, die uns mit Menschen, Kulturen und Orten auf der ganzen Welt verbindet.',
      'food.main.p2':'Entdecke authentische Aromen, lokale Favoriten, lebendiges Street Food, traditionelle Gerichte und die Geschichten dahinter. Von verborgenen kulinarischen Schätzen bis hin zu unvergesslichen Essenserlebnissen bringt dich jeder Artikel dem Herzen eines Reiseziels näher.',
      'food.main.p3':'Koste die Kultur. Entdecke die Geschichten. Erkunde die Welt, Bissen für Bissen.',
      'food.badge.label':'Küchen zu entdecken','food.discover.kicker':'Was du entdecken wirst','food.discover.title':'Eine Welt voller Geschmack','food.discover.sub':'Aromen, Kulturen und Geschichten aus allen Ecken der Welt.',
      'food.tile1.title':'Lokale Favoriten','food.tile1.text':'Ikonische Gerichte und beliebte Rezepte aus aller Welt.',
      'food.tile2.title':'Street Food','food.tile2.text':'Lebhafte Märkte, Food Trucks und unvergessliche Häppchen für unterwegs.',
      'food.tile3.title':'Verborgene Schätze','food.tile3.text':'Orte abseits der ausgetretenen Pfade, an denen Einheimische tatsächlich essen.',
      'food.tile4.title':'Geschichten hinter Gerichten','food.tile4.text':'Die Menschen, Geschichte und Traditionen hinter jedem Rezept.',

      'life.hero.tag':'Lifestyle & Erlebnis','life.hero.title':'Das Leben besteht aus Momenten, die es wert sind, erlebt zu werden.','life.hero.sub':'Geschichten, Orte und persönliches Wachstum — alles an einem Ort.',
      'life.main.eyebrow':'Entdecken. Erleben.','life.main.title':'Jeder Moment hat eine Geschichte.',
      'life.main.p1':'Das Leben besteht aus Momenten, die es wert sind, erlebt zu werden, Geschichten, die es wert sind, geteilt zu werden, und Orten, die es wert sind, entdeckt zu werden.',
      'life.main.p2':'Entdecke inspirierende Geschichten, Reisen, Kultur, Wellness, Essen, persönliches Wachstum und alltägliche Erfahrungen, die neue Perspektiven ins Leben bringen.',
      'life.main.p3':'Entdecken. Erleben. Inspiriert werden.',
      'life.badge.label':'Momente zu leben','life.discover.kicker':'Was du entdecken wirst','life.discover.title':'Geschichten, Orte und Wachstum','life.discover.sub':'Neue Perspektiven, bedeutungsvolle Momente und alltägliche Inspiration.',
      'life.tile1.title':'Reisen','life.tile1.text':'Orte, die es wert sind, entdeckt zu werden, und die Momente, die uns begleiten.',
      'life.tile2.title':'Kultur','life.tile2.text':'Geschichten, Traditionen und Gemeinschaften, die unsere Welt prägen.',
      'life.tile3.title':'Persönliches Wachstum','life.tile3.text':'Reflexionen, Lektionen und Ideen, die dir helfen, jeden Tag zu wachsen.',
      'life.tile4.title':'Alltagsleben','life.tile4.text':'Einfach, schön, echt — die Momente dazwischen.'
    },
    es: {
      'nav.home':'Inicio','nav.gives':'Donaciones ❤️','nav.updates':'Novedades','nav.journal':'Diario',
      'lang.select':'Seleccionar idioma',
      'hero.back':'Todos los temas',
      'stay.title':'Mantente conectado con Coach Uganda',
      'stay.sub':'No te pierdas la próxima actualización. Suscríbete con tu correo personal para recibir nuestro boletín directamente en tu bandeja de entrada.',
      'stay.placeholder':'Tu correo electrónico personal','stay.btn':'Suscribirse',
      'footer.rights':'© 2026 Coach Uganda. Todos los derechos reservados.',
      
      'rem.hero.tag':'Remedios caseros','rem.hero.title':'Sabiduría natural para el bienestar diario.','rem.hero.sub':'Tradiciones centenarias, ingredientes cotidianos, confort sencillo.',
      'rem.main.eyebrow':'De la naturaleza, con cuidado','rem.main.title':'Vieja sabiduría, nueva curiosidad.',
      'rem.main.p1':'Descubre remedios caseros sencillos, tradiciones centenarias e ingredientes cotidianos utilizados durante generaciones para apoyar el confort y el bienestar. Explora sus usos tradicionales, consejos prácticos, lo que la investigación puede decirnos e importantes precauciones, todo explicado de forma sencilla.',
      'rem.main.p2':'A veces, los ingredientes más sencillos tienen las historias más interesantes. Explora nuestros últimos artículos y descubre lo que la naturaleza y la tradición tienen para ofrecer.',
      'rem.disclaimer':'Solo con fines educativos. Este contenido no sustituye el consejo médico profesional, el diagnóstico o el tratamiento.',
      'rem.badge.label':'Ingredientes naturales','rem.discover.kicker':'Lo que descubrirás','rem.discover.title':'Explora el mundo de los remedios','rem.discover.sub':'Tradiciones, ingredientes y orientación práctica, explicados de forma sencilla.',
      'rem.tile1.title':'Hierbas y plantas','rem.tile1.text':'Hierbas y plantas cotidianas utilizadas tradicionalmente para el confort y el bienestar.',
      'rem.tile2.title':'Remedios de cocina','rem.tile2.text':'Ingredientes sencillos de tu despensa con sorprendentes usos tradicionales.',
      'rem.tile3.title':'Lo que dice la ciencia','rem.tile3.text':'Resúmenes equilibrados y fáciles de entender de lo que sugiere la ciencia moderna.',
      'rem.tile4.title':'Seguridad y precauciones','rem.tile4.text':'Orientación importante sobre el uso seguro y cuándo hablar con un profesional.',

      'food.hero.tag':'Comida por el mundo','food.hero.title':'La comida es un viaje.','food.hero.sub':'Conectándonos con personas, culturas y lugares de todo el mundo.',
      'food.main.eyebrow':'Prueba la cultura','food.main.title':'Cada plato tiene una historia.',
      'food.main.p1':'La comida es un viaje, uno que nos conecta con personas, culturas y lugares de todo el mundo.',
      'food.main.p2':'Descubre sabores auténticos, favoritos locales, vibrante comida callejera, platos tradicionales y las historias detrás de ellos. Desde joyas culinarias ocultas hasta experiencias gastronómicas inolvidables, cada artículo te acerca al corazón de un destino.',
      'food.main.p3':'Prueba la cultura. Descubre las historias. Explora el mundo, bocado a bocado.',
      'food.badge.label':'Cocinas por explorar','food.discover.kicker':'Lo que descubrirás','food.discover.title':'Un mundo de sabor','food.discover.sub':'Sabores, culturas e historias de todos los rincones del mundo.',
      'food.tile1.title':'Favoritos locales','food.tile1.text':'Platos icónicos y recetas queridas de todo el mundo.',
      'food.tile2.title':'Comida callejera','food.tile2.text':'Mercados vibrantes, food trucks y bocados inolvidables sobre la marcha.',
      'food.tile3.title':'Joyas ocultas','food.tile3.text':'Lugares fuera de lo común donde los locales realmente comen.',
      'food.tile4.title':'Historias detrás de los platos','food.tile4.text':'Las personas, la historia y las tradiciones detrás de cada receta.',

      'life.hero.tag':'Estilo de vida y Experiencia','life.hero.title':'La vida está hecha de momentos que vale la pena experimentar.','life.hero.sub':'Historias, lugares y crecimiento personal, todo en un mismo lugar.',
      'life.main.eyebrow':'Descubre. Experimenta.','life.main.title':'Cada momento tiene una historia.',
      'life.main.p1':'La vida está hecha de momentos que vale la pena experimentar, historias que vale la pena compartir y lugares que vale la pena descubrir.',
      'life.main.p2':'Explora historias inspiradoras, viajes, cultura, bienestar, comida, crecimiento personal y experiencias cotidianas que aportan nuevas perspectivas a la vida.',
      'life.main.p3':'Descubre. Experimenta. Inspírate.',
      'life.badge.label':'Momentos para vivir','life.discover.kicker':'Lo que descubrirás','life.discover.title':'Historias, lugares y crecimiento','life.discover.sub':'Perspectivas frescas, momentos significativos e inspiración diaria.',
      'life.tile1.title':'Viajes','life.tile1.text':'Lugares que vale la pena descubrir y los momentos que se quedan con nosotros.',
      'life.tile2.title':'Cultura','life.tile2.text':'Historias, tradiciones y comunidades que dan forma a nuestro mundo.',
      'life.tile3.title':'Crecimiento personal','life.tile3.text':'Reflexiones, lecciones e ideas para ayudarte a crecer cada día.',
      'life.tile4.title':'Vida cotidiana','life.tile4.text':'Simple, hermoso, real: los momentos intermedios.'
    },
    it: {
      'nav.home':'Home','nav.gives':'Donazioni ❤️','nav.updates':'Aggiornamenti','nav.journal':'Diario',
      'lang.select':'Seleziona lingua',
      'hero.back':'Tutti gli argomenti',
      'stay.title':'Rimani connesso con Coach Uganda',
      'stay.sub':'Non perdere il prossimo aggiornamento. Iscriviti con la tua email personale per ricevere la nostra newsletter direttamente nella tua casella di posta.',
      'stay.placeholder':'Il tuo indirizzo email personale','stay.btn':'Iscriviti',
      'footer.rights':'© 2026 Coach Uganda. Tutti i diritti riservati.',
      
      'rem.hero.tag':'Rimedi della nonna','rem.hero.title':'Saggezza naturale per il benessere quotidiano.','rem.hero.sub':'Tradizioni secolari, ingredienti quotidiani, semplice comfort.',
      'rem.main.eyebrow':'Dalla natura, con cura','rem.main.title':'Vecchia saggezza, nuova curiosità.',
      'rem.main.p1':'Scopri semplici rimedi casalinghi, tradizioni secolari e ingredienti quotidiani usati da generazioni per sostenere il comfort e il benessere. Esplora i loro usi tradizionali, consigli pratici, cosa può dirci la ricerca e importanti precauzioni — tutto spiegato in modo semplice.',
      'rem.main.p2':'A volte, gli ingredienti più semplici hanno le storie più interessanti. Esplora i nostri ultimi articoli e scopri cosa hanno da offrire la natura e la tradizione.',
      'rem.disclaimer':'Solo a scopo educativo. Questo contenuto non sostituisce il parere medico professionale, la diagnosi o il trattamento.',
      'rem.badge.label':'Ingredienti naturali','rem.discover.kicker':'Cosa scoprirai','rem.discover.title':'Esplora il mondo dei rimedi','rem.discover.sub':'Tradizioni, ingredienti e guida pratica — spiegati semplicemente.',
      'rem.tile1.title':'Erbe e piante','rem.tile1.text':'Erbe e piante quotidiane tradizionalmente usate per comfort e benessere.',
      'rem.tile2.title':'Rimedi da cucina','rem.tile2.text':'Ingredienti semplici dalla tua dispensa con sorprendenti usi tradizionali.',
      'rem.tile3.title':'Cosa dice la ricerca','rem.tile3.text':'Riepiloghi equilibrati e facili da capire di ciò che suggerisce la scienza moderna.',
      'rem.tile4.title':'Sicurezza e precauzioni','rem.tile4.text':'Indicazioni importanti sull\'uso sicuro e su quando parlare con un professionista.',

      'food.hero.tag':'Cibo da tutto il mondo','food.hero.title':'Il cibo è un viaggio.','food.hero.sub':'Ci connette a persone, culture e luoghi in tutto il mondo.',
      'food.main.eyebrow':'Assapora la cultura','food.main.title':'Ogni piatto ha una storia.',
      'food.main.p1':'Il cibo è un viaggio — uno che ci connette a persone, culture e luoghi in tutto il mondo.',
      'food.main.p2':'Scopri sapori autentici, preferiti locali, vivace street food, piatti tradizionali e le storie che ci sono dietro. Dai gioielli culinari nascosti a esperienze culinarie indimenticabili, ogni articolo ti avvicina al cuore di una destinazione.',
      'food.main.p3':'Assapora la cultura. Scopri le storie. Esplora il mondo, un morso alla volta.',
      'food.badge.label':'Cucine da esplorare','food.discover.kicker':'Cosa scoprirai','food.discover.title':'Un mondo di sapori','food.discover.sub':'Sapori, culture e storie da ogni angolo del mondo.',
      'food.tile1.title':'Preferiti locali','food.tile1.text':'Piatti iconici e ricette amate da tutto il mondo.',
      'food.tile2.title':'Street Food','food.tile2.text':'Mercati vivaci, food truck e bocconi indimenticabili in movimento.',
      'food.tile3.title':'Gemme nascoste','food.tile3.text':'Luoghi fuori dai sentieri battuti dove mangiano davvero i locali.',
      'food.tile4.title':'Storie dietro i piatti','food.tile4.text':'Le persone, la storia e le tradizioni dietro ogni ricetta.',

      'life.hero.tag':'Stile di vita ed Esperienza','life.hero.title':'La vita è fatta di momenti che vale la pena vivere.','life.hero.sub':'Storie, luoghi e crescita personale — tutto in un unico posto.',
      'life.main.eyebrow':'Scopri. Vivi.','life.main.title':'Ogni momento ha una storia.',
      'life.main.p1':'La vita è fatta di momenti che vale la pena vivere, storie che vale la pena condividere e luoghi che vale la pena scoprire.',
      'life.main.p2':'Esplora storie stimolanti, viaggi, cultura, benessere, cibo, crescita personale ed esperienze quotidiane che portano nuove prospettive nella vita.',
      'life.main.p3':'Scopri. Vivi. Lasciati ispirare.',
      'life.badge.label':'Momenti da vivere','life.discover.kicker':'Cosa scoprirai','life.discover.title':'Storie, luoghi e crescita','life.discover.sub':'Prospettive fresche, momenti significativi e ispirazione quotidiana.',
      'life.tile1.title':'Viaggi','life.tile1.text':'Luoghi che vale la pena scoprire e i momenti che restano con noi.',
      'life.tile2.title':'Cultura','life.tile2.text':'Storie, tradizioni e comunità che plasmano il nostro mondo.',
      'life.tile3.title':'Crescita personale','life.tile3.text':'Riflessioni, lezioni e idee per aiutarti a crescere ogni giorno.',
      'life.tile4.title':'Vita quotidiana','life.tile4.text':'Semplice, bello, reale — i momenti nel mezzo.'
    },
    ar: {
      'nav.home':'الرئيسية','nav.gives':'تبرعات ❤️','nav.updates':'التحديثات','nav.journal':'المجلة',
      'lang.select':'اختر اللغة',
      'hero.back':'كل المواضيع',
      'stay.title':'ابقَ على تواصل مع كوتش أوغندا',
      'stay.sub':'لا تفوّت التحديث القادم. اشترك ببريدك الشخصي لتلقي نشرتنا الإخبارية مباشرة في صندوق بريدك.',
      'stay.placeholder':'بريدك الإلكتروني الشخصي','stay.btn':'اشترك',
      'footer.rights':'© 2026 كوتش أوغندا. جميع الحقوق محفوظة.',
      
      'rem.hero.tag':'العلاجات المنزلية','rem.hero.title':'حكمة طبيعية للعافية اليومية.','rem.hero.sub':'تقاليد عريقة، مكونات يومية، راحة بسيطة.',
      'rem.main.eyebrow':'من الطبيعة، بعناية','rem.main.title':'حكمة قديمة، فضول جديد.',
      'rem.main.p1':'اكتشف علاجات منزلية بسيطة، وتقاليد عريقة، ومكونات يومية استخدمت لأجيال لدعم الراحة والعافية. استكشف استخداماتها التقليدية، والنصائح العملية، وما قد يخبرنا به البحث، والاحتياطات المهمة — كل ذلك مشروح بطريقة سهلة الفهم.',
      'rem.main.p2':'في بعض الأحيان، تحتوي أبسط المكونات على أكثر القصص إثارة للاهتمام. استكشف أحدث مقالاتنا واكتشف ما تقدمه الطبيعة والتقاليد.',
      'rem.disclaimer':'للأغراض التعليمية فقط. هذا المحتوى ليس بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج.',
      'rem.badge.label':'مكونات طبيعية','rem.discover.kicker':'ما ستكتشفه','rem.discover.title':'استكشف عالم العلاجات','rem.discover.sub':'تقاليد ومكونات وإرشادات عملية — مشروحة ببساطة.',
      'rem.tile1.title':'الأعشاب والنباتات','rem.tile1.text':'أعشاب ونباتات يومية تستخدم تقليديًا للراحة والعافية.',
      'rem.tile2.title':'علاجات المطبخ','rem.tile2.text':'مكونات بسيطة من مخزنك مع استخدامات تقليدية مفاجئة.',
      'rem.tile3.title':'ما يقوله البحث','rem.tile3.text':'ملخصات متوازنة وسهلة الفهم لما يقترحه العلم الحديث.',
      'rem.tile4.title':'السلامة والاحتياطات','rem.tile4.text':'إرشادات مهمة حول الاستخدام الآمن ومتى يجب التحدث مع متخصص.',

      'food.hero.tag':'طعام من جميع أنحاء العالم','food.hero.title':'الطعام رحلة.','food.hero.sub':'يربطنا بالأشخاص والثقافات والأماكن حول العالم.',
      'food.main.eyebrow':'تذوق الثقافة','food.main.title':'كل طبق له قصة.',
      'food.main.p1':'الطعام رحلة — رحلة تربطنا بالأشخاص والثقافات والأماكن حول العالم.',
      'food.main.p2':'اكتشف النكهات الأصيلة، والمفضلات المحلية، وطعام الشارع النابض بالحياة، والأطباق التقليدية، والقصص التي تقف خلفها. من الجواهر الطهوية المخفية إلى تجارب تناول الطعام التي لا تنسى، كل مقال يقربك من قلب الوجهة.',
      'food.main.p3':'تذوق الثقافة. اكتشف القصص. استكشف العالم، لقمة واحدة في كل مرة.',
      'food.badge.label':'مطابخ لاستكشافها','food.discover.kicker':'ما ستكتشفه','food.discover.title':'عالم من النكهات','food.discover.sub':'نكهات وثقافات وقصص من كل ركن من أركان العالم.',
      'food.tile1.title':'المفضلات المحلية','food.tile1.text':'أطباق أيقونية ووصفات محبوبة من جميع أنحاء العالم.',
      'food.tile2.title':'طعام الشارع','food.tile2.text':'أسواق نابضة بالحياة وعربات طعام ولقمات لا تنسى أثناء التنقل.',
      'food.tile3.title':'جواهر خفية','food.tile3.text':'أماكن بعيدة عن المسارات المطروقة حيث يأكل السكان المحليون بالفعل.',
      'food.tile4.title':'قصص خلف الأطباق','food.tile4.text':'الأشخاص والتاريخ والتقاليد وراء كل وصفة.',

      'life.hero.tag':'أسلوب الحياة والتجربة','life.hero.title':'الحياة مصنوعة من لحظات تستحق التجربة.','life.hero.sub':'قصص وأماكن ونمو شخصي — كل ذلك في مكان واحد.',
      'life.main.eyebrow':'اكتشف. جرب.','life.main.title':'كل لحظة لها قصة.',
      'life.main.p1':'الحياة مصنوعة من لحظات تستحق التجربة، وقصص تستحق المشاركة، وأماكن تستحق الاكتشاف.',
      'life.main.p2':'استكشف قصصًا ملهمة، وسفرًا، وثقافة، وعافية، وطعامًا، ونموًا شخصيًا، وتجارب يومية تقدم وجهات نظر جديدة للحياة.',
      'life.main.p3':'اكتشف. جرب. كن ملهمًا.',
      'life.badge.label':'لحظات لنعيشها','life.discover.kicker':'ما ستكتشفه','life.discover.title':'قصص وأماكن ونمو','life.discover.sub':'وجهات نظر جديدة، ولحظات ذات معنى، وإلهام يومي.',
      'life.tile1.title':'السفر','life.tile1.text':'أماكن تستحق الاكتشاف واللحظات التي تبقى معنا.',
      'life.tile2.title':'الثقافة','life.tile2.text':'قصص وتقاليد ومجتمعات تشكل عالمنا.',
      'life.tile3.title':'النمو الشخصي','life.tile3.text':'تأملات ودروس وأفكار تساعدك على النمو كل يوم.',
      'life.tile4.title':'الحياة اليومية','life.tile4.text':'بسيطة وجميلة وحقيقية — اللحظات التي بين كل شيء.'
    }
  };

  const LANG_NAMES = { en:'English', fr:'Français', de:'Deutsch', es:'Español', it:'Italiano', ar:'العربية' };
  const SUPPORTED  = ['en','fr','de','es','it','ar'];
  const DEFAULT    = 'en';
  const STORAGE_KEY = 'cu-lang';

  function init() {
    /* LANGUAGE SWITCHER */
    const langBtn   = document.getElementById('langBtn');
    const langMenu  = document.getElementById('langMenu');
    const langLabel = document.getElementById('langLabel');

    if (langBtn && langMenu) {
      const isRTL = () => document.documentElement.dir === 'rtl';
      const baseMenuStyles = () =>
        'position:absolute;top:calc(100% + 10px);min-width:210px;list-style:none;' +
        'background:#211B16;border:1px solid rgba(255,198,51,.25);border-radius:14px;' +
        'padding:8px;box-shadow:0 20px 40px -12px rgba(0,0,0,.55);z-index:99999;' +
        'transition:opacity .25s ease,visibility .25s ease,transform .25s ease;display:block;' +
        (isRTL() ? 'left:0;right:auto;' : 'right:0;left:auto;');

      function openMenu() {
        langMenu.classList.add('open');
        langMenu.style.cssText = baseMenuStyles() + 'opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;';
        langBtn.setAttribute('aria-expanded', 'true');
      }
      function closeMenu() {
        langMenu.classList.remove('open');
        langMenu.style.cssText = baseMenuStyles() + 'opacity:0;visibility:hidden;transform:translateY(-8px);pointer-events:none;';
        langBtn.setAttribute('aria-expanded', 'false');
      }
      function toggleMenu() {
        langMenu.classList.contains('open') ? closeMenu() : openMenu();
      }

      closeMenu();
      langBtn.addEventListener('click', function (e) { e.stopPropagation(); toggleMenu(); });
      langMenu.querySelectorAll('.lang-option').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          applyLanguage(btn.getAttribute('data-lang'));
          closeMenu();
        });
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.lang-switcher')) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });

      function applyLanguage(code) {
        if (!translations[code]) code = DEFAULT;
        const dict = translations[code];
        document.documentElement.lang = code;
        document.documentElement.dir  = (code === 'ar') ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return; // Skip inputs
          const k = el.getAttribute('data-i18n');
          if (dict[k] != null) el.textContent = dict[k];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          const k = el.getAttribute('data-i18n-placeholder');
          if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
          const k = el.getAttribute('data-i18n-aria');
          if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
        });
        if (langLabel) langLabel.textContent = LANG_NAMES[code] || LANG_NAMES[DEFAULT];
        langMenu.querySelectorAll('.lang-option').forEach(function (b) {
          const active = b.getAttribute('data-lang') === code;
          b.classList.toggle('active', active);
          b.setAttribute('aria-checked', active ? 'true' : 'false');
        });
        try { localStorage.setItem(STORAGE_KEY, code); } catch (err) {}
      }

      window.__cu_applyLanguage = applyLanguage;
    }

    /* HAMBURGER - ULTRA AGGRESSIVE FIX */
    let hamburger = document.getElementById('hamburger');
    let navLinks  = document.getElementById('navLinks');

    if (hamburger && navLinks) {
      const clone = hamburger.cloneNode(true);
      hamburger.parentNode.replaceChild(clone, hamburger);
      hamburger = clone;
      navLinks = document.getElementById('navLinks');

      hamburger.style.position = 'relative';
      hamburger.style.zIndex   = '9999';

      let navOpen = false;

      function setNavState(open) {
        navOpen = !!open;
        
        if (navOpen) {
          hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
          hamburger.classList.add('active');
          navLinks.style.cssText = 'display:flex !important; flex-direction:column; position:absolute; top:100%; left:0; right:0; background:#211B16; border-top:1px solid rgba(255,198,51,.15); border-bottom:1px solid rgba(255,198,51,.15); padding:12px 24px 20px; max-height:400px !important; opacity:1 !important; visibility:visible !important; pointer-events:auto !important; overflow:hidden; z-index:1100; gap:0;';
        } else {
          hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
          hamburger.classList.remove('active');
          navLinks.style.cssText = 'display:none !important; max-height:0 !important; opacity:0 !important; visibility:hidden !important; pointer-events:none !important; padding:0 !important; border:none; overflow:hidden;';
        }
        
        hamburger.setAttribute('aria-expanded', navOpen ? 'true' : 'false');
        navLinks.classList.toggle('open', navOpen);
      }

      hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setNavState(!navOpen);
      }, true);

      navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setNavState(false); });
      });

      function handleResize() {
        if (window.innerWidth > 768) {
          navOpen = false;
          navLinks.style.cssText = '';
          hamburger.classList.remove('active');
          hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else if (!navOpen) {
          setNavState(false);
        }
      }
      
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    /* RESTORE SAVED LANGUAGE */
    let initial = null;
    try { initial = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!initial && navigator.language) initial = navigator.language.slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(initial) === -1) initial = DEFAULT;
    if (typeof window.__cu_applyLanguage === 'function') {
      window.__cu_applyLanguage(initial);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();