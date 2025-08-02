document.addEventListener('DOMContentLoaded', () => {

    // --- Selectores de Elementos del DOM ---
    const casasContainer = document.getElementById('casas-container');
    const perfumesContainer = document.getElementById('perfumes-container');
    const backButton = document.getElementById('back-button');
    const mainTitle = document.getElementById('main-title');

    let allPerfumes = [];

    // --- NUEVO: Variable para guardar la posición del scroll ---
    let lastScrollPosition = 0;

    // --- Mapeo de Nombres de Casa a Imágenes ---
    // (Aquí va tu lista completa de casas y sus imágenes)
    const casaImageMap = {
        "ABERCROMBIE & FITCH": "img/abercrombie-and-fitch.png",
    "AFNAN (ORIENTAL)": "img/afnan.webp",
    "AGUA DESTI": "img/agua-destilada.webp",
    "AHLÍ (NICHO)": "img/ahli.svg",
    "AL HARAMAIN (ORIENTAL)": "img/al-haramain.webp",
    "ALC": "img/alcohol.webp",
    "ANIMALE": "img/animale.webp",
    "ANTONIO BANDERAS": "img/antonio-banderas.webp",
    "ARIANA GRANDE": "img/ariana-grande.webp",
    "ARMAF (ORIENTAL)": "img/armaf.webp",
    "AZZARO": "img/azzaro.png",
    "BATH AND BODY": "img/bath-and-body.png",
    "BENETTON": "img/benetton.png",
    "BHARARA (ORIENTAL)": "img/bharara.webp",
    "BILLIE EILISH": "img/billie-eilish.png",
    "BOND N° 9 (NICHO)": "img/bond-no9.png",
    "BRITNEY SPEARS": "img/britney-spears.png",
    "BULGARI": "img/bulgari.png",
    "BURBERRY": "img/burberry.png",
    "CACHAREL": "img/cacharel.png",
    "CALVIN KLEIN": "img/calvin-klein.png",
    "CAROLINA HERRERA": "img/carolina-herrera.jpg",
    "CARTIER": "img/cartier.png",
    "CHANEL": "img/chanel.png",
    "CHRISTIAN DIOR": "img/christian-dior.jpg",
    "CLINIQUE": "img/clinique.svg",
    "COACH": "img/coach.png",
    "CREED": "img/creed.webp",
    "CRISTIANO RONALDO": "img/cristiano-ronaldo.jpg",
    "DIESEL": "img/diesel.jpg",
    "DOLCE & GABBANA": "img/dolce-gabbana.png",
    "DONNA KARAN": "img/donna-karan.svg",
    "ELIZABETH ARDEN": "img/elizabeth-arden.svg",
    "EMPORIO ARMANI": "img/emporio-armani.jpg",
    "ESCADA": "img/escada.jpg",
    "ESIKA": "img/esika.jpg",
    "FACONNABLE": "img/faconnable.jpg",
    "FERRARI": "img/ferrari.jpg",
    "FRANCK OLIVIER": "img/franck-olivier.webp",
    "FRED HAYMAN": "img/fred-hayman.png",
    "GIARDINI DI TOSCANA (NICHO)": "img/giardini-di-toscana.webp",
    "GILLES CANTUEL": "img/gilles-cantuel.png",
    "GIORGIO ARMANI": "img/giorgio-armani.jpg",
    "GIVENCHY": "img/givenchy.png",
    "GUCCI": "img/gucci.jpg",
    "GUESS": "img/guess.jpg",
    "HALLOWEEN": "img/halloween.jpg",
    "HUGO BOSS": "img/hugo-boss.jpg",
    "ILMIN (NICHO)": "img/ilmin.webp",
    "INITIO (NICHO)": "img/initio.png",
    "ISSEY MIYAKE": "img/issey-miyake.svg",
    "JEAN PASCAL": "img/jean-pascal.png",
    "JEAN PAUL GAULTIER": "img/jean-paul-gaultier.svg",
    "JENNIFER LOPEZ": "img/jennifer-lopez.png",
    "JESUS DEL POZO": "img/jesus-del-pozo.png",
    "JO MILANO": "img/jomilano.jpg",
    "JOOP!": "img/joop.svg",
    "JUICY COUTURE": "img/juicy-couture.png",
    "KAJAL (ORIENTAL)": "img/kajal.png",
    "KATY PERRY": "img/katy-perry.png",
    "KAYALI": "img/kayali.png",
    "KENZO": "img/kenzo.png",
    "KILIAN": "img/kilian.webp",
    "KIM KARDASHIAN": "img/kim-kardashian.jpg",
    "LACOSTE": "img/lacoste.png",
    "LANCOME": "img/lancome.png",
    "LATTAFA (ORIENTAL)": "img/lattafa.webp",
    "LE LABO (NICHO)": "img/le-labo.png",
    "LIZ CLAIBORNE": "img/liz-claiborne.svg",
    "LOLITA LEMPICKA": "img/lolita-lempicka.png",
    "LORENZO PAZZAGLIA (NICHO)": "img/lorenzo-pazzaglia.webp",
    "LOUIS VUITTON (NICHO)": "img/louis-vuitton.png",
    "MAISON ALHAMBRA (ORIENTAL)": "img/maison-alhambra.png",
    "MAISON FRANCIS KURKDJIAN (NICHO)": "img/maison-francis-kurkdjian.png",
    "MAISON MARGIELA (NICHO)": "img/maison-margiela.webp",
    "MANCERA (NICHO)": "img/mancera.jpg",
    "MARC JACOBS": "img/marc-jacobs.png",
    "MATIERE PREMIERE (NICHO)": "img/matiere-premiere.png",
    "MONTALE (NICHO)": "img/montale.jpg",
    "MONTBLANC": "img/montblanc.png",
    "MOSCHINO": "img/moschino.png",
    "MUSK": "img/musk.jpg",
    "NARCISO RODRÍGUEZ": "img/narciso-rodriguez.png",
    "NATURA": "img/natura.jpg",
    "NAUTICA": "img/nautica.svg",
    "NEW NOTES (NICHO)": "img/new-notes.png",
    "NISHANE (NICHO) TURKIA": "img/nishane.webp",
    "NINA RICCI": "img/nina-ricci.svg",
    "ORIENTICA (ORIENTAL)": "img/orientica.webp",
    "ORTO PARISI": "img/orto-parisi.webp",
    "OSCAR DE LA RENTA": "img/oscar-de-la-renta.jpg",
    "PACO RABANNE": "img/paco-rabanne.svg",
    "PARFUMS DE MARLY (NICHO)": "img/parfums-de-marly.webp",
    "PARIS HILTON": "img/paris-hilton.jpg",
    "PERRY ELLIS": "img/perry-ellis.svg",
    "PHILIPP PLEIN": "img/philipp-plein.png",
    "PINO SILVESTRE": "img/pino-silvestre.png",
    "PRADA": "img/prada.jpg",
    "RALPH LAUREN": "img/ralph-lauren.png",
    "RASASI ORIENTAL": "img/rasasi.png",
    "REVLON": "img/revlon.svg",
    "REYANE TRADITION": "img/reyane-tradition.jpg",
    "ROGER & GALLET": "img/roger-gallet.jpeg",
    "SELENA GOMEZ": "img/selena-gomez.png",
    "SHAKIRA": "img/shakira.jpg",
    "SOFIA VERGARA": "img/sofia-vergara.jpg",
    "SOL DE JANEIRO": "img/sol-de-janeiro.png",
    "STEPHANE HUMBERT LUCAS 77 (NICHO)": "img/stephane-humbert-lucas.webp",
    "TED LAPIDUS": "img/ted-lapidus.png",
    "THIERRY MUGLER": "img/thierry-mugler.png",
    "TOM FORD (NICHO)": "img/tom-ford.webp",
    "TOMMY HILFIGER": "img/tommy-hilfiger.png",
    "TOUS": "img/tous.png",
    "VALENTINO": "img/valentino.png",
    "VERSACE": "img/versace.jpg",
    "VICTORIA'S SECRET": "img/victoria's-secret.png",
    "VICTORINOX SWISS ARMY": "img/victorinox.svg",
    "VIKTOR & ROLF": "img/viktor-rolf.png",
    "XERJOFF (NICHO)": "img/xerjoff.png",
    "YANBAL": "img/yanbal.png",
    "YVES SAINT LAURENT": "img/saint-laurent.png"

    };

    // Función principal para obtener y procesar los datos
    async function CargarCatalogo() {
        try {
            const response = await fetch('perfumes.json');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            allPerfumes = await response.json();
            mostrarCasas();
        } catch (error) {
            console.error("No se pudo cargar el archivo perfumes.json:", error);
            casasContainer.innerHTML = "<p>Error al cargar el catálogo. Por favor, intente más tarde.</p>";
        }
    }

    // Función para mostrar la lista de todas las casas
    function mostrarCasas() {
        perfumesContainer.classList.add('hidden');
        backButton.classList.add('hidden');
        mainTitle.textContent = "Catálogo de Perfumes";
        perfumesContainer.innerHTML = '';

        const casasUnicas = [...new Set(allPerfumes.map(p => p.casa))].sort();

        casasContainer.innerHTML = '';
        casasUnicas.forEach(casa => {
            const card = document.createElement('div');
            card.className = 'casa-card';
            
            const imageUrl = casaImageMap[casa] || `https://placehold.co/400x300/c09f80/FFFFFF/png?text=${encodeURIComponent(casa)}`;
            
            card.innerHTML = `
                <img src="${imageUrl}" alt="Logo de ${casa}">
                <h3 class="casa-card-title">${casa}</h3>
            `;
            
            card.addEventListener('click', () => {
                // --- NUEVO: Guardamos la posición actual del scroll antes de irnos ---
                lastScrollPosition = window.scrollY;
                mostrarPerfumesPorCasa(casa);
            });
            casasContainer.appendChild(card);
        });

        casasContainer.classList.remove('hidden');

        // --- NUEVO: Hacemos que la ventana vuelva a la posición guardada ---
        // Usamos requestAnimationFrame para asegurar que el navegador haya renderizado el contenido antes de hacer scroll
        requestAnimationFrame(() => {
            window.scrollTo(0, lastScrollPosition);
        });
    }

    // Función para mostrar los perfumes de una casa específica
    function mostrarPerfumesPorCasa(casa) {
        casasContainer.classList.add('hidden');
        mainTitle.textContent = casa;

        const perfumesDeLaCasa = allPerfumes.filter(perfume => perfume.casa === casa);
        
        perfumesContainer.innerHTML = '';
        
        if (perfumesDeLaCasa.length > 0) {
            perfumesDeLaCasa.forEach(perfume => {
                const item = document.createElement('div');
                item.className = 'perfume-item';

                const imageUrl = perfume.imagen && perfume.imagen !== "URL_DE_LA_IMAGEN_AQUI" 
                    ? perfume.imagen 
                    : `https://placehold.co/100x100/e8e8e8/999999/png?text=Imagen`;

                item.innerHTML = `
                    <img src="${imageUrl}" alt="${perfume.nombre}" class="perfume-imagen">
                    <div class="perfume-info">
                        <p class="nombre">${perfume.nombre}</p>
                        <p class="familia">Familia Olfativa: ${perfume.familia_olfativa}</p>
                        <p class="genero">Género: ${perfume.genero}</p>
                    </div>
                    <div class="precio">
                        ${perfume.precio}
                    </div>
                `;
                perfumesContainer.appendChild(item);
            });
        } else {
            perfumesContainer.innerHTML = "<p>No hay perfumes disponibles para esta casa.</p>";
        }
        
        perfumesContainer.classList.remove('hidden');
        backButton.classList.remove('hidden');

        // Al mostrar los perfumes, nos aseguramos de que la vista comience desde arriba.
        window.scrollTo(0, 0);
    }

    // El evento del botón de volver ahora funcionará como esperas
    backButton.addEventListener('click', mostrarCasas);

    // Iniciar la aplicación
    CargarCatalogo();
});