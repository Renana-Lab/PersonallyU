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
    export const designedProductsImageURLs = {
        "armadillo": {
            "AMB": "https://www.dropbox.com/scl/fi/m6ey3nvmz5en2y5cp9b5p/armadillo_ambivert.png?rlkey=odelwegnotcrw53iz8jq6y5va&dl=0",
            "AN": "https://www.dropbox.com/scl/fi/wv1e9r012y5ih67x5wmlm/armadillo_anxious.png?rlkey=smto3357u0zn7zl2x8u7xfqyh&dl=0",
            "CL": "https://www.dropbox.com/scl/fi/kxbhb6sq3f96rsxjdwjwf/armadillo_careless.png?rlkey=6gvxxfa53fzpaqdjeok9kc122&dl=0",
            "CM": "https://www.dropbox.com/scl/fi/795hrosm7k8bnunlcikx8/armadillo_closed_minded.png?rlkey=evqwen7i9r8gz2i7d42gjmxw5&dl=0",
            "CR": "https://www.dropbox.com/scl/fi/om9xvhgqls3r2ahtutwhc/armadillo_critical.png?rlkey=zhxq8v6b6jtxggu1613fkdfq9&dl=0",
            "EX": "https://www.dropbox.com/scl/fi/qbzt4d2znjs2espnjnjas/armadillo_extraverted.png?rlkey=m3o495hmr7y6micqfiorb28ve&dl=0",
            "IN": "https://www.dropbox.com/scl/fi/iz04ha064phh9vwujvnrg/armadillo_introverted.png?rlkey=2lhhdxqmy6r80i8vvhfmk64su&dl=0",
            "MS": "https://www.dropbox.com/scl/fi/bjjpqw5dyser8667z1qfm/armadillo_mentally_stable.png?rlkey=lc06db562of3o0z01js454mkk&dl=0",
            "OM": "https://www.dropbox.com/scl/fi/i62ap6ob3y417cw1bhgwg/armadillo_open_minded.png?rlkey=wdqv1zf5j0p7rspmt2ahkahbf&dl=0",
            "SD": "https://www.dropbox.com/scl/fi/d1nm5qw8nphwdzzkoaud0/armadillo_self_discipline.png?rlkey=udoqll706fjjrpjsnc4sc68ju&dl=0",
            "SY": "https://www.dropbox.com/scl/fi/m9y14iruletu9l3ta1nol/armadillo_sympathetic.png?rlkey=dg3wd09k7wf7k7vlx8yro7hxc&dl=0"
        },
        "bear": {
            "AMB": "https://www.dropbox.com/scl/fi/c2bew22q7e0mzmhazq7jz/bear_ambivert.png?rlkey=y4qrum28icb1563dyjifx26mq&dl=0",
            "AN": "https://www.dropbox.com/scl/fi/wv6dmcdnxvcngy52yyq59/bear_anxious.png?rlkey=ptde7ng6tx56rhalk7i4zfzuf&dl=0",
            "CL": "https://www.dropbox.com/scl/fi/nbbawazbt4mfk371ubwgu/bear_careless.png?rlkey=ei2uw8k1v8s9jrnzw0egqg7bn&dl=0",
            "CM": "https://www.dropbox.com/scl/fi/syfudhvgzl3diidctrk3o/bear_closed_minded.png?rlkey=bktqzs27m8qu6grhb7ebvd526&dl=0",
            "CR": "https://www.dropbox.com/scl/fi/kji47i6ayoyagurln1rkh/bear_critical.png?rlkey=p8hyxi8x8asn1v9lyw4ygexpd&dl=0",
            "EX": "https://www.dropbox.com/scl/fi/p62rkhdwap4w9jmhsuo07/bear_extraverted.png?rlkey=s2o8kb9513rxovtm9nej56ysz&dl=0",
            "IN": "https://www.dropbox.com/scl/fi/yayxf5bm9fi4nk6rlrdt7/bear_introverted.png?rlkey=f8i1tiggsfuz3r7k4xecvz14r&dl=0",
            "MS": "https://www.dropbox.com/scl/fi/wkiu2cyotpcr4btbod4i1/bear_mentally_stable.png?rlkey=qeh6jfrag6pdzohdtddetws5n&dl=0",
            "OM": "https://www.dropbox.com/scl/fi/mp75812m22m6pzmc3axor/bear_open_minded.png?rlkey=wc0mfwzdcy2zxlqluprducw7f&dl=0",
            "SD": "https://www.dropbox.com/scl/fi/84448jzslecn7wp6b5be2/bear_self_discipline.png?rlkey=0pp6vse0yalkw2bz6gitgfilv&dl=0",
            "SY": "https://www.dropbox.com/scl/fi/39q06b49jp90x066i3rcg/bear_sympathetic.png?rlkey=omyuaqtzk1yeyisqbldjrumb8&dl=0"
        },
        "badger": {
            "AMB": "https://www.dropbox.com/scl/fi/ydygn47cl3sykor3xd7bv/badger_ambivert.png?rlkey=jmahj41uua3d6vfp5qvssy8xj&dl=0",
            "AN": "https://www.dropbox.com/scl/fi/1zqep6ierc8nyuddgcjes/badger_anxious.png?rlkey=pxzf3ccisgcmfdela6xkezkq7&dl=0",
            "CL": "https://www.dropbox.com/scl/fi/1284ocwnrlmn923ftfygd/badger_careless.png?rlkey=d3nqn3p9xbmqrwu5owkttelxk&dl=0",
            "CM": "https://www.dropbox.com/scl/fi/tm8iv8w56vm9aw0numvmi/badger_closed_minded.png?rlkey=4dcwpbb8wqfs9ko3ifnyhg3p3&dl=0",
            "CR": "https://www.dropbox.com/scl/fi/tb2hn1yuazvsx9p98gn4e/badger_critical.png?rlkey=2a15syxdhhzp7dswylzuxc5lp&dl=0",
            "EX": "https://www.dropbox.com/scl/fi/hnl9qcrobh7skx5a77chl/badger_extraverted.png?rlkey=s3m4a55sr55i5seubku4tos66&dl=0",
            "IN": "https://www.dropbox.com/scl/fi/jobtyglmsdth5gaq25zg7/badger_introverted.png?rlkey=40ct8c5iqtnizg01j1kefh598&dl=0",
            "MS": "https://www.dropbox.com/scl/fi/aivkdk2ezw2mcmrovzgfd/badger_mentally_stable.png?rlkey=7px6pablpq5xazf5parqj87x2&dl=0",
            "OM": "https://www.dropbox.com/scl/fi/il3l0gsenf12u2dl4f833/badger_open_minded.png?rlkey=big1p67xhtdztqkix6m8ms24u&dl=0",
            "SD": "https://www.dropbox.com/scl/fi/ks9v6gs5rnykmoaj8qyd4/badger_self_discipline.png?rlkey=kmwtxc2g2o2yd01ozhgwp51yk&dl=0",
            "SY": "https://www.dropbox.com/scl/fi/h4czhoucp614wfi4lr254/badger_sympathetic.png?rlkey=ldar5vvjh7fot3vujvpzg7xbf&dl=0"
        },
        "hedgehog": {
            "AMB": "https://www.dropbox.com/scl/fi/d05ticijq69konp7omfms/hedgehog_ambivert.png?rlkey=0w08fkl1117aepg6sj6gny9bj&dl=0",
            "AN": "https://www.dropbox.com/scl/fi/8ij2i1ay7ktfxb1ehzh42/hedgehog_anxious.png?rlkey=q8hwl30vsdfflefckbr38bqmh&dl=0",
            "CL": "https://www.dropbox.com/scl/fi/cpv3gum1c46f3pa2wpcsy/hedgehog_careless.png?rlkey=30wronvwtw4zq0luxr3a8ig46&dl=0",
            "CM": "https://www.dropbox.com/scl/fi/xxwn4geggizqduowvavkf/hedgehog_closed_minded.png?rlkey=kref175otwqo1weiouvyjmt5r&dl=0",
            "CR": "https://www.dropbox.com/scl/fi/yf01nlco6tpago95s6mt9/hedgehog_critical.png?rlkey=0dr0as59ob0xpskb4rnnw3mfo&dl=0",
            "EX": "https://www.dropbox.com/scl/fi/dh58cdogasaa2d45xvsw9/hedgehog_extraverted.png?rlkey=rv8yu9ztkwe78cwg2uq64dhoq&dl=0",
            "IN": "https://www.dropbox.com/scl/fi/w2cb2ty19eb2nkkowwwrw/hedgehog_introverted.png?rlkey=sbg7i4fh6af4x04ziqv1z0g9e&dl=0",
            "MS": "https://www.dropbox.com/scl/fi/zrzzq6p256ba05ay1b7up/hedgehog_mentally_stable.png?rlkey=djlvmveclln6qsjewo9cyhhb6&dl=0",
            "OM": "https://www.dropbox.com/scl/fi/6ytbvespms29vjd9v1g97/hedgehog_open_minded.png?rlkey=uy72okt19alhr97ixwfqmplvl&dl=0",
            "SD": "https://www.dropbox.com/scl/fi/okyegrsjcaqfm2p8o5krz/hedgehog_self_discipline.png?rlkey=jxdp3e42zikec0h9l88qtf3ex&dl=0",
            "SY": "https://www.dropbox.com/scl/fi/v0u4vi3m3u6slrf1y8ee0/hedgehog_sympathetic.png?rlkey=by8yermb51ridcmclr9n0gjn6&dl=0"
        },
        "capybara": {
            "AMB": "https://www.dropbox.com/scl/fi/ptcq51db32umxrw21f4zs/capybara_ambivert.png?rlkey=ltlhr2h82fpptfkanrnb43di6&dl=0",
            "AN": "https://www.dropbox.com/scl/fi/eudhe5l26qqz7zfhowgc3/capybara_anxious.png?rlkey=witudyq7ywzoz04os1olyvhhj&dl=0",
            "CL": "https://www.dropbox.com/scl/fi/4i6xr4k35y7hn1cli1blf/capybara_careless.png?rlkey=pa9ol5nqseugl0nashxjx2fo0&dl=0",
            "CM": "https://www.dropbox.com/scl/fi/xx4f7lf74ehwwav4ob9k6/capybara_closed_minded.png?rlkey=euqsghihyrhnqmrbqjkdhbkd7&dl=0",
            "CR": "https://www.dropbox.com/scl/fi/6txj5og3v5qb3hlnx86qq/capybara_critical.png?rlkey=hkrx9gwt24l4v09ds32u8j1fk&dl=0",
            "EX": "https://www.dropbox.com/scl/fi/bqrkxv9i59dxwb82a43bq/capybara_extraverted.png?rlkey=w189hn5xsajmdlqpy7r1xq4lj&dl=0",
            "IN": "https://www.dropbox.com/scl/fi/kdadl1p85zsjojwgc2n7m/capybara_introverted.png?rlkey=znyyo346k7u1kwhoytz07fjfs&dl=0",
            "MS": "https://www.dropbox.com/scl/fi/og0q4lgzvd8gng88q1fqa/capybara_mentally_stable.png?rlkey=if7bbmuauoh9bukoqfbr0qa87&dl=0",
            "OM": "https://www.dropbox.com/scl/fi/6y5315abpt8cwc8gqxewj/capybara_open_minded.png?rlkey=qiyq6pdtj5l1dtpulo6mut05m&dl=0",
            "SD": "https://www.dropbox.com/scl/fi/ehv8bfr3ak9efr7ouojbe/capybara_self_discipline.png?rlkey=6pm9njx9l8g34jlwotdm97qd5&dl=0",
            "SY": "https://www.dropbox.com/scl/fi/7xwwjwgsr3pr8vlzap82i/capybara_sympathetic.png?rlkey=96woblgysym9vjs68qb47ua1c&dl=0"
        }
    };

// PERSONALITY FROM A PHOTO (OPPOSITE OF PREVIOUS MAP)
const designedProductsURLsToPersonality = {
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/IN.png?v=1744208187": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/MS.png?v=1744208187": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/EX.png?v=1744208187": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/SY.png?v=1744208173": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/CR.png?v=1744208185": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/AN.png?v=1744208254": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/SD.png?v=1744208186": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/CL.png?v=1744208187": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/CM.png?v=1744208185": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/OM.png?v=1744208186": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/AMB.png?v=1744216274": "AMB"
};

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

function getImageURLs() {
  
  const storedData = JSON.parse(localStorage.getItem("userQuizData") || "{}");
  
  const personality = storedData.personality || "NO";
  const designKeys = personalityToDesignImages[personality];

  // const animals = Object.keys(designedProductsImageURLs);


  if (!Array.isArray(designKeys)) {
    return Array(NUMBER_OF_VARIANTS).fill(null);
  }

  const designArmadiloURLs = designKeys.map(
    key => designedProductsImageURLs["armadilo"][key] || null
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
    const designs = urls.map((url, i) => ({
      for: `template--18147309650102__main-1-${i}`,
      url
    }));


    designs.forEach(({ for: id, url }) => {
      const label = document.querySelector(`label[for="${id}"]`);
      // label.style.color = "#1B1818";
      if (label && !label.querySelector(`img[data-design="${id}"]`)) {
          label.style.color = "#1B1818";
          label.style.backgroundColor = "#F1EEE6";
          label.style.border = "1px solid rgba(27, 24, 24, 0.55)";
          label.childNodes[0].textContent = '';
          label.style.padding = "3px";
          label.style.borderRadius = "25px";

        const img = document.createElement("img");
        
        img.src = url;
        const imgPersonality = designedProductsURLsToPersonality[url] ?? "noPersonality";
        img.about = imgPersonality;
        img.height = 118
        img.width = 118;
        img.alt = imgPersonality !== "noPersonality" ? imgPersonality + " personality design" : "Product design";
        img.dataset.design = id;
        img.style.borderRadius = "25px";
        img.classList.add("label-image");

        label.appendChild(img);
        // console.log("🔄 Updated label with image:", img);
      }
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


