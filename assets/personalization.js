(function () {
  // ------------------ Constants ------------------
  // const CATALOG_BASE = "https://personallyu.com/collections/products/";
  // const QUIZ_URL = "https://huji.questionpro.eu/a/TakeSurvey?tt=P/VDme5CUhAD5ltxMh/wHg%3D%3D";
  const NUMBER_OF_VARIANTS = 9;




  // URLs TO PERSONALITY PAGE 
  const personalityUrls = {
    hat: {
      EX: "https://personallyu.com/products/ex-your-personalised-snapback-hat",
      IN: "https://personallyu.com/products/in-your-personalised-snapback-hat",
      MS: "https://personallyu.com/products/ms-your-personalised-snapback-hat",
      SY : "https://personallyu.com/products/sy-your-personalised-snapback-hat",
      CR : "https://personallyu.com/products/cr-your-personalised-snapback-hat",
      AN : "https://personallyu.com/products/an-your-personalised-snapback-hat",
      SD : "https://personallyu.com/products/sd-your-personalised-snapback-hat",
      CL : "https://personallyu.com/products/cl-your-personalised-snapback-hat",
      CM : "https://personallyu.com/products/cm-your-personalised-snapback-hat",
      OM : "https://personallyu.com/products/om-your-personalised-snapback-hat",
      AMB : "https://personallyu.com/products/amb-your-personalised-snapback-hat",
      NO : "https://personallyu.com/products/no-your-personalised-snapback-hat"
    },
    
    shirt: {
      EX: "https://personallyu.com/products/ex-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      IN: "https://personallyu.com/products/in-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      MS: "https://personallyu.com/products/ms-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      SY : "https://personallyu.com/products/sy-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      CR : "https://personallyu.com/products/cr-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      AN : "https://personallyu.com/products/an-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      SD : "https://personallyu.com/products/sd-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      CL : "https://personallyu.com/products/cl-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      CM : "https://personallyu.com/products/cm-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      OM : "https://personallyu.com/products/om-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      AMB : "https://personallyu.com/products/amb-heavyweight-unisex-crewneck-t-shirt-gildan®-5000",
      NO : "https://personallyu.com/products/no-heavyweight-unisex-crewneck-t-shirt-gildan-5000"
    },

      bottle: {
      EX: "https://personallyu.com/products/ex-your-personalized-water-bottle",
      IN: "https://personallyu.com/products/in-your-personalized-water-bottle",
      MS: "https://personallyu.com/products/ms-your-personalized-water-bottle",
      SY : "https://personallyu.com/products/sy-your-personalized-water-bottle",
      CR : "https://personallyu.com/products/cr-your-personalized-water-bottle",
      AN : "https://personallyu.com/products/an-your-personalized-water-bottle",
      SD : "https://personallyu.com/products/sd-your-personalized-water-bottle",
      CL : "https://personallyu.com/products/cl-your-personalized-water-bottle",
      CM : "https://personallyu.com/products/cm-your-personalized-water-bottle",
      OM : "https://personallyu.com/products/om-your-personalized-water-bottle",
      AMB : "https://personallyu.com/products/amb-your-personalized-water-bottle",
      NO : "https://personallyu.com/products/no-your-personalized-water-bottle"
    },

      mug: {
      EX: "https://personallyu.com/products/ex-your-personalized-mug",
      IN: "https://personallyu.com/products/in-your-personalized-mug",
      MS: "https://personallyu.com/products/ms-your-personalised-mug",
      SY : "https://personallyu.com/products/sy-your-personalised-mug",
      CR : "https://personallyu.com/products/cr-your-personalised-mug",
      AN : "https://personallyu.com/products/an-your-personalised-mug",
      SD : "https://personallyu.com/products/sd-your-personalised-mug",
      CL : "https://personallyu.com/products/cl-your-personalised-mug",
      CM : "https://personallyu.com/products/cm-your-personalised-mug",
      OM : "https://personallyu.com/products/om-your-personalised-mug",
      AMB : "https://personallyu.com/products/amb-your-personalised-mug",
      NO : "https://personallyu.com/products/no-your-personalised-mug"
    },
    
     Card: {
      EX: "https://personallyu.com/products/ex-your-personalized-greeting-card",
      IN: "https://personallyu.com/products/in-your-personalized-greeting-card",
      MS: "https://personallyu.com/products/ms-your-personalized-greeting-card",
      SY : "https://personallyu.com/products/sy-your-personalized-greeting-card",
      CR : "https://personallyu.com/products/cr-your-personalized-greeting-card",
      AN : "https://personallyu.com/products/an-your-personalized-greeting-card",
      SD : "https://personallyu.com/products/sd-your-personalized-greeting-card",
      CL : "https://personallyu.com/products/cl-your-personalized-greeting-card",
      CM : "https://personallyu.com/products/cm-your-personalized-greeting-card",
      OM : "https://personallyu.com/products/om-your-personalized-greeting-card",
      AMB : "https://personallyu.com/products/amb-your-personalized-greeting-card",
      NO : "https://personallyu.com/products/no-your-personalized-greeting-card"
    },

     Sticker: {
      EX: "https://personallyu.com/products/ex-your-personalized-sticker",
      IN: "https://personallyu.com/products/in-your-personalized-sticker",
      MS: "https://personallyu.com/products/ms-your-personalized-sticker",
      SY : "https://personallyu.com/products/sy-your-personalized-sticker",
      CR : "https://personallyu.com/products/cr-your-personalized-sticker",
      AN : "https://personallyu.com/products/an-your-personalized-sticker",
      SD : "https://personallyu.com/products/sd-your-personalized-sticker",
      CL : "https://personallyu.com/products/cl-your-personalized-sticker",
      CM : "https://personallyu.com/products/cm-your-personalized-sticker",
      OM : "https://personallyu.com/products/om-your-personalized-sticker",
      AMB : "https://personallyu.com/products/amb-your-personalized-sticker",
      NO : "https://personallyu.com/products/no-your-personalized-sticker"
    }
  };
 // PHOTOS OF ARMADILOS
const designedProductsImageURLs = {
  "armadillo": {
    "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_introverted.png",
    "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_extraverted.png",
    "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_sympathetic.png",
    "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_critical.png",
    "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_mentally_stable.png",
    "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_anxious.png",
    "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_self_discipline.png",
    "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_careless.png",
    "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_closed_minded.png",
    "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_open_minded.png",
    "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_armadillo_ambivert.png"
  },
  "bear": {
    "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_introverted.png",
    "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_extraverted.png",
    "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_sympathetic.png",
    "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_critical.png",
    "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_mentally_stable.png",
    "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_anxious.png",
    "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_self_discipline.png",
    "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_careless.png",
    "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_closed_minded.png",
    "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_open_minded.png",
    "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_bear_ambivert.png"
  },
  "badger": {
    "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_introverted.png",
    "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_extraverted.png",
    "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_sympathetic.png",
    "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_critical.png",
    "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_mentally_stable.png",
    "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_anxious.png",
    "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_self_discipline.png",
    "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_careless.png",
    "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_closed_minded.png",
    "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_open_minded.png",
    "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_badger_ambivert.png"
  },
  "hedgehog": {
    "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_introverted.png",
    "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_extraverted.png",
    "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_sympathetic.png",
    "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_critical.png",
    "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_mentally_stable.png",
    "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_anxious.png",
    "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_self_discipline.png",
    "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_careless.png",
    "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_closed_minded.png",
    "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_open_minded.png",
    "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_hedgehog_ambivert.png"
  },
  "capybara": {
    "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_introverted.png",
    "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_extraverted.png",
    "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_sympathetic.png",
    "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_critical.png",
    "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_mentally_stable.png",
    "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_anxious.png",
    "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_self_discipline.png",
    "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_careless.png",
    "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_closed_minded.png",
    "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_open_minded.png",
    "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/v2_capybara_ambivert.png"
  }
};


// Build reverse map (URL → personality) dynamically from designedProductsImageURLs
const designedProductsURLsToPersonality = Object.values(designedProductsImageURLs).reduce((acc, animal) => {
  Object.entries(animal).forEach(([personality, url]) => {
    acc[url] = personality;
  });
  return acc;
}, {});

// PHOTOS OF PRODUCTS WITHOUT DESIGN
  // const genericProductsImageURLs = {
  // shirt: "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/3b367884-fc1f-4618-a420-561a6b5ed358.webp?v=1745171738"
  // };



  // PERSONALITY AND ITS ANTI PERSONALITY
  const AntiPersonality = {
    IN : "EX", // introverted -> extraverted
    EX : "IN", // extraverted -> introverted
    SY : "CR", // sympathetic -> critical
    CR : "SY", // critical -> sympathetic
    MS : "AN", // mentally_stable -> anxious
    AN : "MS", // anxious -> mentally_stable
    SD : "CL", // self_discipline -> careless
    CL : "SD", // careless -> self_discipline
    CM : "OM",  // closed_minded -> open_minded
    OM : "CM" // open_minded -> closed_minded
  };
  // LIST OF PERSONALITY DESIGNS TO SHOW FOR EACH PERSONALITY
  const personalityToDesignImages = { // own personality, anti personality, mentally stable
    IN:  ["IN", AntiPersonality["IN"], "AMB"],
    EX:  ["EX", AntiPersonality["EX"], "AMB"],
    MS:  ["MS", AntiPersonality["MS"], "AMB"],
    SY : ["SY", AntiPersonality["SY"], "AMB"],
    CR : ["CR", AntiPersonality["CR"], "AMB"],
    AN : ["AN", AntiPersonality["AN"], "AMB"],
    SD : ["SD", AntiPersonality["SD"], "AMB"],
    CL : ["CL", AntiPersonality["CL"], "AMB"],
    CM : ["CM", AntiPersonality["CM"], "AMB"],
    OM : ["OM", AntiPersonality["OM"], "AMB"],
    AMB : ["AMB", AntiPersonality["IN"], AntiPersonality["EX"]],
    NO: ["IN", "AMB", "CR"]
  };

  
  // ------------------ Helpers ------------------
function initSearchTagInjection() {
  document.addEventListener(
  "submit",
  function (e) {
    const form = e.target;

    if (!form.matches('form[action="/search"]')) return;

    const input = form.querySelector('input[name="q"]');
    if (!input) return;

    let query = input.value || "";

    const dataStr = localStorage.getItem("userQuizData");
    if (!dataStr) return;

    let data;
    try {
      data = JSON.parse(dataStr);
    } catch {
      return;
    }

    const personality = data?.personality;
    if (!personality) return;

    // 👇 IMPORTANT: do NOT modify visible input
    const cleanQuery = query.split(/tag:/i)[0].trim();

    // 👇 build hidden query
    const finalQuery = `${cleanQuery} tag:${personality}`;

    console.log("[Search Debug] Final query (hidden):", finalQuery);

    // 👇 temporarily override WITHOUT showing it
    input.value = finalQuery;

    // 👇 immediately restore clean UI (prevents flicker)
    requestAnimationFrame(() => {
      input.value = cleanQuery;
    });

  },
  true
);
}

function observeAndRemovePredictiveGroups() {
  const observer = new MutationObserver(() => {
    const groups = document.querySelectorAll(".predictive-search__result-group");

    groups.forEach(group => {
      console.log("[Search Debug] Removing predictive group");
      group.remove();
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function observeAndRemoveProductCount() {
  const observer = new MutationObserver(() => {
    const el = document.getElementById("ProductCountDesktop");

    if (el) {
      console.log("[Observer] Removing ProductCountDesktop");
      el.remove();

      observer.disconnect(); // 👈 stop after removing once
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  }); 
}

function cleanInput(input) {
  if (!input.value) return;

  const original = input.value;

  // Remove everything from "tag:" onward
  const cleaned = original.split(/tag:/i)[0].trim();

  if (original !== cleaned) {
    console.log("[Search Clean] Before:", original);
    console.log("[Search Clean] After:", cleaned);

    input.value = cleaned;
  }
}

function observeAndCleanSearchInput() {
  const observer = new MutationObserver(() => {
    const input = document.querySelector(
      ".template-search__search input.search__input.field__input"
    );

    if (!input) return;

    cleanInput(input);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}



    function initVariantMockupGallery()  {
        // =====================================================
        // 1. CLEANUP PREVIOUS TEST
        // =====================================================

        window.cleanupMockupTest?.();

        document.getElementById(
            'mockup-preview-layout-fix'
        )?.remove();

        // =====================================================
        // 2. SHOPIFY GALLERY & DESIGN INPUTS
        // =====================================================

        const gallery = document.querySelector('media-gallery');

        if (!gallery) {
            console.error('Gallery not found');
            return;
        }

        const radioSelector =
            'fieldset.product-form__input--pill input[type="radio"]';

        const getDesignInputs = () =>
            [...document.querySelectorAll(radioSelector)]
                .filter(input =>
                    input.name.trim().startsWith('Design')
                );

        const getSelectedDesign = () =>
            getDesignInputs().find(input => input.checked)?.value;

        // =====================================================
        // 3. READ ORIGINAL SHOPIFY GALLERY
        // =====================================================

        const slides = [...gallery.querySelectorAll(
            '.product__media-list > .product__media-item'
        )];

        const thumbnails = [...gallery.querySelectorAll(
            '.thumbnail-list > .thumbnail-list__item'
        )];

        // Preserve original gallery order.
        const media = thumbnails.map(thumb => {
            const slide = slides.find(
                s => s.dataset.mediaId === thumb.dataset.target
            );

            const img = slide?.querySelector('img');
            const thumbImg = thumb.querySelector('img');

            return {
                id: thumb.dataset.target,
                url:
                    img?.getAttribute('src') ||
                    img?.getAttribute('data-src') ||
                    thumbImg?.getAttribute('src') ||
                    thumbImg?.currentSrc ||
                    ''
            };
        }).filter(item => item.url);

        const designInputs = getDesignInputs();

        // =====================================================
        // 4. VALIDATE GALLERY STRUCTURE
        // =====================================================

        const EXPECTED_DESIGNS = 15;
        const EXPECTED_IMAGES = 46;
        const MOCKUPS_PER_DESIGN = 3;

        if (
            media.length !== EXPECTED_IMAGES ||
            designInputs.length !== EXPECTED_DESIGNS
        ) {
            console.error(
                'Invalid gallery structure:',
                `Expected ${EXPECTED_IMAGES} images and ` +
                `${EXPECTED_DESIGNS} designs, ` +
                `found ${media.length} images and ` +
                `${designInputs.length} designs.`
            );
            return;
        }

        // =====================================================
        // 5. MAP DESIGNS TO GALLERY IMAGES
        // =====================================================

        // Gallery structure:
        //
        // Image 1       -> General product image
        // Images 2-4    -> Design 2
        // Images 5-7    -> Design 3
        // Images 8-10   -> Design 4
        // ...
        // Images 44-46  -> Design 16
        //
        // No overlap between groups.

        const groups = {};

        designInputs.forEach(input => {
            const match = input.value.match(/^design\s+(\d+)$/i);

            if (!match) {
                console.warn('Unrecognized Design:', input.value);
                return;
            }

            const designNumber = Number(match[1]);

            if (designNumber < 2 || designNumber > 16) {
                console.warn('Design out of range:', input.value);
                return;
            }

            // Zero-based indexing:
            // Design 2  -> media[1..3]
            // Design 3  -> media[4..6]
            // Design 16 -> media[43..45]

            const startIndex =
                1 + (designNumber - 2) * MOCKUPS_PER_DESIGN;

            const mockups = media.slice(
                startIndex,
                startIndex + MOCKUPS_PER_DESIGN
            );

            if (mockups.length !== MOCKUPS_PER_DESIGN) {
                console.warn(`Missing mockups for ${input.value}`);
                return;
            }

            groups[input.value] = mockups;
        });

        if (Object.keys(groups).length !== EXPECTED_DESIGNS) {
            console.error(
                'Could not map all 15 designs:',
                Object.keys(groups)
            );
            return;
        }

        // =====================================================
        // 6. CREATE CUSTOM MOCKUP GALLERY
        // =====================================================

        const preview = document.createElement('div');
        preview.id = 'mockup-preview-test';

        preview.innerHTML = `
    <div class="mockup-main">
      <img alt="Selected mockup">
    </div>
    <div class="mockup-thumbnails"></div>
  `;

        // =====================================================
        // 7. GALLERY CSS
        // =====================================================

        const style = document.createElement('style');
        style.id = 'mockup-preview-test-style';

        style.textContent = `
    #mockup-preview-test {
      width: 100%;
    }

    #mockup-preview-test .mockup-main {
      width: 100%;
      aspect-ratio: 1;
      background: white;
      border-radius: 5px;
      overflow: hidden;
    }

    #mockup-preview-test .mockup-main img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    #mockup-preview-test .mockup-thumbnails {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      flex-wrap: wrap !important;
      gap: 12px !important;
      margin-top: 16px !important;
      width: 100% !important;
    }

    #mockup-preview-test .mockup-thumbnails button {
      width: 180px !important;
      height: 180px !important;
      flex: 0 0 180px !important;
      padding: 4px !important;
      background: white;
      border: 1px solid #aaa;
      border-radius: 6px !important;
      box-sizing: border-box !important;
      cursor: pointer;
    }

    #mockup-preview-test .mockup-thumbnails button.active {
      border: 2px solid #111;
    }

    #mockup-preview-test .mockup-thumbnails button img {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
    }
  `;

        document.head.appendChild(style);
        gallery.insertAdjacentElement('afterend', preview);

        // =====================================================
        // 8. HIDE ORIGINAL GALLERY
        // =====================================================

        const originalDisplay = gallery.style.display;
        gallery.style.display = 'none';

        const mainImg =
            preview.querySelector('.mockup-main img');

        const thumbContainer =
            preview.querySelector('.mockup-thumbnails');

        let activeDesign = null;
        let activeMockupIndex = 0;

        // =====================================================
        // 9. RENDER SELECTED DESIGN
        // =====================================================

        function renderGallery(design, force = false) {
            const group = groups[design];

            if (!group) {
                preview.style.display = 'none';
                gallery.style.display = originalDisplay;
                activeDesign = null;
                return;
            }

            gallery.style.display = 'none';
            preview.style.display = 'block';

            // Reset mockup only when Design changes.
            if (design !== activeDesign) {
                activeDesign = design;
                activeMockupIndex = 0;
                force = true;
            }

            if (!force) return;

            thumbContainer.replaceChildren();

            group.forEach((item, index) => {
                const button = document.createElement('button');
                button.type = 'button';

                const img = document.createElement('img');
                img.src = item.url;
                img.alt = `${design} - Mockup ${index + 1}`;

                button.appendChild(img);

                button.addEventListener('click', () => {
                    activeMockupIndex = index;
                    updateActiveMockup();
                });

                thumbContainer.appendChild(button);
            });

            updateActiveMockup();

            console.log(
                'Gallery switched to:',
                design,
                group.map(item => item.id)
            );
        }

        // =====================================================
        // 10. UPDATE ACTIVE MOCKUP
        // =====================================================

        function updateActiveMockup() {
            const group = groups[activeDesign];

            if (!group) return;

            mainImg.src = group[activeMockupIndex].url;

            [...thumbContainer.children].forEach(
                (button, index) => {
                    button.classList.toggle(
                        'active',
                        index === activeMockupIndex
                    );
                }
            );
        }

        // =====================================================
        // 11. SYNC SHOPIFY VARIANT SELECTION
        // =====================================================

        function syncSelectedDesign() {
            const selected = getSelectedDesign();

            if (selected !== activeDesign) {
                renderGallery(selected);
            }
        }

        function onChange(event) {
            if (!event.target.matches(radioSelector)) return;

            requestAnimationFrame(syncSelectedDesign);
        }

        document.addEventListener('change', onChange);

        // Some Shopify themes update asynchronously.
        function onClick(event) {
            if (!event.target.closest(
                'fieldset.product-form__input--pill label'
            )) return;

            requestAnimationFrame(() => {
                requestAnimationFrame(syncSelectedDesign);
            });
        }

        document.addEventListener('click', onClick);

        // Observe programmatic checked attribute changes.
        const observer = new MutationObserver(() => {
            syncSelectedDesign();
        });

        getDesignInputs().forEach(input => {
            observer.observe(input, {
                attributes: true,
                attributeFilter: ['checked']
            });
        });

        // =====================================================
        // 12. CLEANUP FUNCTION
        // =====================================================

        window.cleanupMockupTest = () => {
            document.removeEventListener('change', onChange);
            document.removeEventListener('click', onClick);

            observer.disconnect();

            gallery.style.display = originalDisplay;

            preview.remove();
            style.remove();

            document.getElementById(
                'mockup-preview-layout-fix'
            )?.remove();

            delete window.cleanupMockupTest;

            console.log('Mockup test removed');
        };

        // =====================================================
        // 13. INITIALIZE
        // =====================================================

        renderGallery(getSelectedDesign(), true);

        console.log(
            'Variant gallery initialized successfully:',
            Object.keys(groups).length,
            'designs,',
            media.length,
            'images'
        );

        console.table(
            Object.entries(groups).map(([design, mockups]) => ({
                Design: design,
                Images: mockups.map(
                    item => media.indexOf(item) + 1
                ).join(', ')
            }))
        );
    };



function getImageURLs() {
  
  const storedData = JSON.parse(localStorage.getItem("userQuizData") || "{}");
  
  const personality = storedData.personality || "NO";
  const designKeys = personalityToDesignImages[personality];

  // const animals = Object.keys(designedProductsImageURLs);


  if (!Array.isArray(designKeys)) {
    return Array(NUMBER_OF_VARIANTS).fill(null);
  }

  const designArmadiloURLs = designKeys.map(
    key => designedProductsImageURLs["armadillo"][key] || null
  );

  const designBearURLs = designKeys.map(
    key => designedProductsImageURLs["bear"][key] || null
  );
  const designBadgerURLs = designKeys.map(
    key => designedProductsImageURLs["badger"][key] || null
  );
  const designHedgehogURLs = designKeys.map(
        key => designedProductsImageURLs["hedgehog"][key] || null
  );
  const designCapybaraURLs = designKeys.map(
        key => designedProductsImageURLs["capybara"][key] || null
    );

  return [
      ...designArmadiloURLs,
      ...designBearURLs,
      ...designBadgerURLs,
      ...designHedgehogURLs,
      ...designCapybaraURLs,
  ];
}

  function updateLabels() {
    const urls = getImageURLs();
    for (let i = 0; i < urls.length; i++) {
        if (!urls[i]) return;
    }

    const labels = document.querySelectorAll('label[for^="template--"][for*="__main-1-"]');
    if (labels.length === 0) {
      console.warn("updateLabels: No variant labels found");
      return;
    }

    labels.forEach((label, i) => {
      if (!urls[i]) return;

      const labelId = label.getAttribute('for');
      if (label.querySelector(`img[data-design="${labelId}"]`)) {
        return;
      }

      label.style.color = "#1B1818";
      label.style.backgroundColor = "#F1EEE6";
      label.style.border = "1px solid rgba(27, 24, 24, 0.55)";
      label.childNodes[0].textContent = '';
      label.style.padding = "3px";
      label.style.borderRadius = "25px";

      const img = document.createElement("img");
      img.src = urls[i];
      const imgPersonality = designedProductsURLsToPersonality[urls[i]] ?? "noPersonality";
      img.about = imgPersonality;
      img.height = 118;
      img.width = 118;
      img.alt = imgPersonality !== "noPersonality" ? imgPersonality + " personality design" : "Product design";
      img.dataset.design = labelId;
      img.style.borderRadius = "25px";
      img.classList.add("label-image");

      label.appendChild(img);
    });
  }  


// function randomizeFieldset() {
//   console.log("randomizeFieldset...");
//   const fieldset = document.querySelector(".product-form__input--pill");
//   if (!fieldset || fieldset.dataset.randomized === "true") return;

//   const allElements = Array.from(fieldset.querySelectorAll("input[type='radio'], label"));
//   if (allElements.length < 6) return;

//   const fixedPair = allElements.slice(0, 2);
//   const pairs = [];

//   for (let i = 2; i < allElements.length; i += 2) {
//     pairs.push([allElements[i], allElements[i + 1]]);
//   }

//   // Shuffle
//   for (let i = pairs.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
//   }

//   const cloneElements = [...fixedPair, ...pairs.flat()].map(el => el.cloneNode(true));
//   fieldset.innerHTML = "";
//   cloneElements.forEach(el => fieldset.appendChild(el));
//   fieldset.dataset.randomized = "true";
// }

// ✅ Watch only the variant wrapper for Shopify re-render
function observeVariants() {
  const variantWrapper = document.querySelector("#variant-selects-template--17814043295926__main");
  if (!variantWrapper) return;

  const observer = new MutationObserver(() => {
    const fieldset = document.querySelector(".product-form__input--pill");
    if (fieldset && !fieldset.dataset.randomized) {
      updateLabels();
    }
  });

  observer.observe(variantWrapper, {
    childList: true,
    subtree: true,
  });
}

document.addEventListener("DOMContentLoaded", ()   => {
  updateLabels(); 
  observeVariants();    
  initSearchTagInjection();
  observeAndRemovePredictiveGroups();
  observeAndRemoveProductCount();
  observeAndCleanSearchInput();
  // New: Design-specific mockup gallery - STILL NEED BACKEND
  // initVariantMockupGallery();


});


  function getPersonalityType(chosenPersonality) {
    const storedData = JSON.parse(localStorage.getItem("userQuizData")) || {};
    const personality = storedData.personality || "NO";
  
    if (chosenPersonality === "noPersonality") return chosenPersonality;
    if (chosenPersonality === personality) return "ownPersonality";
    if (chosenPersonality === AntiPersonality[personality]) return "antiPersonality";
  
    return "neutral";
  }

  function startCartObserver() {
    const observer = new MutationObserver(() => {
      const btn = document.querySelector('a[href="/collections/all"].button');
      if (btn) btn.remove();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Safe to call on each page load
  document.addEventListener("DOMContentLoaded", startCartObserver);


$(document).on("click", "a", function (event) {
  const $link = $(this);
  const href = $link.attr("href");
  // console.log("🔍 Clicked link href:", href);

  if (!href.includes("personallyu.com") && !href.includes("/collections/customer")) return;

  // console.log("✅ Match found, running redirect override");

    event.preventDefault();
    event.stopImmediatePropagation();



  try {

    const dataStr = localStorage.getItem("userQuizData");
    // console.log("📦 userQuizData from localStorage:", dataStr);
    const data = JSON.parse(dataStr);
    console.log("✅ Parsed data:", data);

    const personality = data.personality;

    console.log("if reached here, problem in if");

    if (personality && data?.responseId) {


      const targetUrl = `/collections/products/${data.personality}?response_id=${data.responseId}&set=${data.personality}`;

      console.log("🚀 Redirecting to:", targetUrl);

      window.location.href = targetUrl;
    } else {

      console.warn("⚠️ Missing personality or responseId, redirecting to fallback");

      window.location.href = "https://personallyu.com/collections/customer";
    }
  } catch (e) {

    console.error("Failed to parse userQuizData:", e);
    const storedData = { responseId: null, personality: "NO" };
    if (!localStorage.getItem("userQuizData")) {
      localStorage.setItem("userQuizData", JSON.stringify(storedData));
    }
    window.location.href = "https://personallyu.com/collections/customer";
  }
});



  // ------------------ Main Execution ------------------

//   document.querySelectorAll('input[type="radio"][name^="Design"]').forEach(input => {
//   input.addEventListener('change', event => {
//     event.preventDefault();              // Stops default browser behavior
//     event.stopImmediatePropagation();    // Prevents Shopify's script from running

//     const selectedValue = event.target.value;
//     const variantId = document.querySelector('input[name="id"]')?.value;

//     console.log("🛑 Intercepted! Variant:", selectedValue, "ID:", variantId);

//     // Optionally: run your custom behavior here
//   });
// });

  $(function () {
if (window.location.href.includes("personallyu.com/collections/products")) {
    const style = document.createElement("style");
    style.textContent = `.disclosure { display: none !important; }`;
    document.head.appendChild(style);

}





  const $fieldset = $(".product-form__input--pill");

  if ($fieldset.length) {
  }

  updateLabels();

  const $targetNode = $("#variant-selects-template--17814043295926__main");
  if ($targetNode) {
    const observer = new MutationObserver(throttle(updateLabels, 200));
    observer.observe(document.body, { childList: true, subtree: true });
  }
    


    // ---------------DO NOT TOUCH!!!!!!----START----------
    // Retrieve URL parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlResponseId = urlParams.get("response_id");
    const urlPersonality = urlParams.get("set") || "AMB";
      console.log("urlResponseId:", urlResponseId);
      console.log("urlPersonality:", urlPersonality);
      console.log("about to save userQuizData");
    window.personalityCartCounter = window.personalityCartCounter || {};
  
    // Retrieve stored data from localStorage, if any
    let storedData = JSON.parse(localStorage.getItem("userQuizData")) || {};
  
    // If URL parameters exist, update localStorage and use them

    if (urlResponseId && urlPersonality) {
      storedData = { responseId: urlResponseId, personality: urlPersonality };
      localStorage.setItem("userQuizData", JSON.stringify(storedData));
    }
  
    // If URL parameters are missing but stored data exists, use the stored data
    let responseId = urlResponseId || storedData.responseId;
    // let personality = urlPersonality || storedData.personality;
  
    // console.log("Response ID:", responseId);
    // console.log("Personality:", personality);
  
    // Define catalog URLs
    const catalogUrl = "https://personallyu.com/collections/products/";
    // const catalogUrl2 = "https://personallyu.com/collections/products";
  
    // Redirect if the user has already completed the quiz
    const currentURL = window.location.href;
    if (currentURL === catalogUrl && storedData) {
      window.location.href = `${catalogUrl}${storedData.personality}?response_id=${storedData.responseId}&personality=${storedData.personality}`;
      return;
    }
  
    if (currentURL.startsWith(catalogUrl) && !responseId && storedData) {
      if (storedData.personality )
      window.location.href = `${catalogUrl}?response_id=${storedData.responseId}&personality=${storedData.personality}`;
      return;
    }
    // ---------------DO NOT TOUCH!!!!!!----END----------

    const detectedProductType = Object.keys(personalityUrls).find(type => window.location.href.includes(type));
      if (detectedProductType) {
        localStorage.setItem("productType", detectedProductType);
      }
    
  const $submitBtn = $("#ProductSubmitButton-template--17814043295926__main");
  localStorage.setItem("currentClickedPersonality", "");
  
  if ($submitBtn.length) {
    $submitBtn.on("click", function () {
      const currentPersonality = localStorage.getItem("currentClickedPersonality");
      localStorage.setItem("AddtoCartPersonality", currentPersonality);
    });
  }



  if (window.location.href.startsWith("https://personallyu.com/checkouts")) {
  document.addEventListener("DOMContentLoaded", function() {
    // Make sure variantMap is global
    window.variantMap = {};

    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        cart.items.forEach(item => {
          const productTitle = item.product_title;
          const variantTitle = item.variant_title;
          const qty = item.quantity;

          if (!window.variantMap[productTitle]) window.variantMap[productTitle] = {};
          window.variantMap[productTitle][variantTitle] = (window.variantMap[productTitle][variantTitle] || 0) + qty;
        });

        // Save variantMap to localStorage after building it
        localStorage.setItem("variantMap", JSON.stringify(window.variantMap));
        // console.log("✅ variantMap saved to localStorage on checkout:", window.variantMap);
      });
  });
}



  // Update labels when label is clicked
  document.addEventListener("click", function (event) {
    const label = event.target.closest('label[for^="template--"]');
    if (label) {
      // event.stopPropagation();
      // updateLabels();
      const img = label.querySelector('img');
      if (img) {
        const personalityType = getPersonalityType(img.about);
        localStorage.setItem("currentClickedPersonality", personalityType);
      } 
    }
  });
});
  

  })();


  function handleRedirectClick() {
    // event.preventDefault();
    // event.stopImmediatePropagation(); // 🛑 Prevent Shopify’s handler too!
  const dataStr = localStorage.getItem("userQuizData");
  console.log("userQuizData from localStorage:", dataStr);

  try {
    const data = JSON.parse(dataStr);
    console.log("Parsed userQuizData:", data);

    if (data?.personality && data?.responseId) {
      console.log("Redirecting to personalized URL...");
      // event.preventDefault(); // stop default link behavior
      const targetUrl = `https://personallyu.com/collections/products/${data.personality}?response_id=${data.responseId}&set=${data.personality}`;
      console.log("Redirect URL:", targetUrl);
      window.location.href = targetUrl;
    } else {
      // console.log("Missing personality or responseId in userQuizData.");
    }
  } catch (e) {
    console.error("Failed to parse userQuizData:", e);
    // Do nothing and allow default link behavior
  }
  }




  document.addEventListener("DOMContentLoaded", function () {



  $("#checkoutNow").text("Checkout Now 💳");
  // $("#ProductSubmitButton-template--17814043295926__main").text("Add to cart 🛒");
  const $link = $('a[href="/collections/customer"]');

  if ($link.length) {
    const $button = $('<button>', {
      id: 'continueShoppingProductPage',
      class: 'button button--primary',
      type: 'button',
      text: 'Continue Shopping 🛍️',
      css: { width: '100%' },
      click: handleRedirectClick
    });
    $link.replaceWith($button);
  }
});

  $("#checkoutNow").on("click", function () {
  $(this).slideDown("fast");
});

const buttons = document.querySelectorAll('.disclosure__button');
buttons.forEach(button => {
  console.log("Adding click event listener to button:", button);
  button.addEventListener('click', handleRedirectClick);
});




document.addEventListener("DOMContentLoaded", function () {
  const bannerBox = document.querySelector(".banner__box.content-container--full-width-mobile");

  if (bannerBox) {
    bannerBox.style.maxWidth = "20%";
    bannerBox.style.maxHeight = "100%";
    bannerBox.style.position = "absolute";
    bannerBox.style.top = "55%";
    // bannerBox.style.padding = "40px"; // Add internal spacing
    // const parent = bannerBox.parentElement;
    // parent.style.display = "flex";
    bannerBox.style.transform = "translate(0%, -60%)";
    bannerBox.style.zIndex = "10"; // ensure it appears above the image
    bannerBox.style.textAlign = "center";
    const subtitleParagraph = bannerBox?.querySelector(".banner__text.rte.subtitle p");
    if (subtitleParagraph) {
      subtitleParagraph.style.textAlign = "center";        // Center the text inside the <p>
      subtitleParagraph.style.marginLeft = "auto";         // Auto side margins
      subtitleParagraph.style.marginRight = "auto";        // Auto side margins
      subtitleParagraph.style.display = "block";           // Ensure it behaves as a block
      subtitleParagraph.style.width = "fit-content";       // Shrinks to fit the content (optional)
}
  }

if (window.innerWidth < 600) {

  const countryCurrencyButtonClass = document.getElementsByClassName("disclosure__button");
  const mobileMenuListClass = document.getElementsByClassName("menu-drawer__menu");

  if (countryCurrencyButtonClass.length > 0 && mobileMenuListClass.length > 0) {
    const countryCurrency = countryCurrencyButtonClass[0];
    const mobileMenu = mobileMenuListClass[0];

    const li = document.createElement("li");
    li.appendChild(countryCurrency);

    // Adjust the position to move it slightly to the right (20px)
    li.style.transform = "translateX(10px)";

    // Append as the first li in the menu
    mobileMenu.prepend(li);
  }

  const container = document.querySelector(".banner__box.content-container");

  if (!container) {
    // console.error("Banner container not found.");
    return;
  }


  container.style.maxWidth = "400px";
  // container.style.transform = "translate(-0%, -600%)"

  const wrapper = document.createElement("div");



  Object.assign(wrapper.style, {
    position: "fixed",                      // יישאר במקומו גם בגלילה
    top: "-250px",                             // הנמכה מהחלק העליון
    left: "50%",
    transform: "translateX(-50%)",         // ממרכז את הקופסה אופקית
    backgroundColor: "white",
    padding: "24px 20px",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    width: "85%",                          // מותאם למובייל
    maxWidth: "500px",                     // מגבלה לדסקטופ
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    zIndex: "1000"
  });

  const heading = container.querySelector("h2.banner__heading");
  const paragraph = container.querySelector("p");
  const buttons = container.querySelector(".banner__buttons");

  if (!heading || !paragraph || !buttons) {
    console.error("Required elements not found in the banner container.");
    return;
  }


  wrapper.appendChild(heading);
  wrapper.appendChild(paragraph);
  wrapper.appendChild(buttons);

  container.appendChild(wrapper);


  heading.style.fontSize = "28px";
  heading.style.lineHeight = "1.2";
  heading.style.marginBottom = "16px";

  paragraph.style.fontSize = "16px";
  paragraph.style.lineHeight = "1.4";
  paragraph.style.marginBottom = "20px";

  buttons.style.gap = "12px";
  buttons.style.flexWrap = "wrap";

  const popup = document.getElementById("popupBox");

  if (!popup) {
    console.error("Popup element not found.");
    return;
  }
    popupBox.style.width = "100%";
    popupBox.style.top = "-120px";
    popupBox.style.padding = "25px";

}


});






const observer = new MutationObserver(() => {
  $(".product-option dt").each(function () {
    if ($(this).text().trim() === "Design:" && $(this).parent().length) {
      $(this).parent().hide(); // hide entire row
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});


