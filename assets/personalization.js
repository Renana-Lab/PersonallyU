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
            "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_introverted_a6d5d139-e0de-41f9-aae2-dd23f01f7dbc.png?v=1789030911",
            "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_extraverted_25a6f03a-e6cf-43c7-a05f-6a7206e00ba8.png?v=1789030916",
            "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_sympathetic_1f492b84-b79f-4d2f-b942-a3ca9d028930.png?v=1789030920",
            "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_critical_3fef3739-847c-4f7d-a6ff-ff3a585ca409.png?v=1789030924",
            "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_mentally_stable_6114d516-d9d6-4306-9427-c717c712761d.png?v=1789030928",
            "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_anxious_1616823a-ed1d-4441-96b4-9163bb4d9790.png?v=1789030933",
            "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_self_discipline_d3832c5f-a3db-41c8-bd03-222bbcb4bc55.png?v=1789030938",
            "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_careless_0b633bcd-e977-4492-a65a-7221cf9c84f5.png?v=1789030942",
            "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_closed_minded_e6585d18-be04-41bc-b804-27d3a7da3894.png?v=1789030946",
            "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_open_minded_db0e5892-6737-4669-adc0-55235b4861e5.png?v=1789030951",
            "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_ambivert_0813497d-8a2c-4f7c-8179-33eec8a1dd7e.png?v=1789030955"
        },
        "bear": {
            "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_introverted_08cb07ac-7bc7-4002-b503-93b532b3b87a.png?v=1789030959",
            "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_extraverted_6b7f252a-3518-464b-8593-bd1e3c447c16.png?v=1789030963",
            "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_sympathetic_b01c6a80-3e80-44c5-8354-d67d41f88505.png?v=1789030968",
            "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_critical_4c755174-27a1-42cc-961f-46e9251b1233.png?v=1789030973",
            "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_mentally_stable_aa41803c-ff6b-46e5-80d1-5c9790cc56ca.png?v=1789030976",
            "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_anxious_9927045e-d779-4c01-b3e7-02e490940ce2.png?v=1789030980",
            "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_self_discipline_b603e369-2241-491f-b50e-298c75eb6cdb.png?v=1789030985",
            "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_careless_b7aa60cc-a9d1-4c69-957c-bced5fd45d3f.png?v=1789030989",
            "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_closed_minded_39805760-0227-43bf-a7ad-4f4281df0235.png?v=1789030993",
            "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_open_minded_819b1fca-e351-4b0f-abce-f72e621c2292.png?v=1789030998",
            "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_ambivert_9dfb1caf-c23d-4d4d-98ca-48369ccf907e.png?v=1789031002"
        },
        "badger": {
            "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_introverted_3819bf4c-6ae3-41e0-bf73-99b2d614c434.png?v=1789031007",
            "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_extraverted_6bdaa68c-e682-4663-b237-b4cace536be5.png?v=1789031011",
            "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_sympathetic_49cec0a2-ee52-4a7c-ab8f-884038bcc452.png?v=1789031015",
            "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_critical_d5f0fe62-1206-48b9-bda4-1d21967223aa.png?v=1789031019",
            "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_mentally_stable_9781fea1-8e69-4677-b40d-afd2339d7a5e.png?v=1789031024",
            "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_anxious_c9058028-3594-44c4-aaa6-a563a23bb9cf.png?v=1789031029",
            "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_self_discipline_c43a7686-c25a-46b7-9492-9510c73f78e9.png?v=1789031033",
            "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_careless_d1a0efc7-546b-4925-93a1-2c388246f1e3.png?v=1789031037",
            "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_closed_minded_9f549943-c8f0-42e4-821a-4a4add25cdc3.png?v=1789031041",
            "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_open_minded_75e6848a-64c6-4659-8737-5565a4987361.png?v=1789031045",
            "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_ambivert_91278469-a374-4f4c-840a-66185dd35456.png?v=1789031050"
        },
        "hedgehog": {
            "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_introverted_9e33a212-08a8-4701-94f7-b50591d5521a.png?v=1789031055",
            "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_extraverted_619b6a3e-9c37-47fe-8b9b-eca96a85fe88.png?v=1789031059",
            "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_sympathetic_ee1a6ab4-e792-4f05-9693-a4723dc684ec.png?v=1789031063",
            "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_critical_df608903-8e82-42db-ba97-6f47e4fe0198.png?v=1789031067",
            "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_mentally_stable_233d17b7-37d0-4e62-bcb3-4ef85a506d69.png?v=1789031071",
            "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_anxious_83cb84d4-bc2c-4493-952e-dab3c53098c7.png?v=1789031075",
            "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_self_discipline_43a943d2-d248-4be7-8bd8-55510cee45fc.png?v=1789031080",
            "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_careless_2f3eb140-db3a-4ba0-b3e8-cf2eedfcf3e5.png?v=1789031083",
            "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_closed_minded_8d060f67-6633-4b42-8d66-05905ce6ce81.png?v=1789031087",
            "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_open_minded_c3f99f9e-cdc4-46c8-9694-0240182deb82.png?v=1789031091",
            "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_ambivert_2965db94-5671-46f4-986a-37e69118987e.png?v=1789031096"
        },
        "capybara": {
            "IN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_introverted_b783f2fb-3e78-41be-89d4-0cf35d7b4982.png?v=1789031099",
            "EX": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_extraverted_1f1bfb6a-69dc-4109-be6f-9bcbad40b2e5.png?v=1789031103",
            "SY": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_sympathetic_4a8596bd-84b8-4b1b-8aca-8be3852e02d5.png?v=1789031108",
            "CR": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_critical_999b3a4a-a913-495c-b55b-c0d9eb9c5cc4.png?v=1789031113",
            "MS": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_mentally_stable_9df5bf13-8410-4c82-9430-d6ef0fcbe738.png?v=1789031119",
            "AN": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_anxious_e9359318-8557-43c7-be2d-c981001e080c.png?v=1789031123",
            "SD": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_self_discipline_73d169ef-f71b-4e11-963d-6bfc8435246e.png?v=1789031127",
            "CL": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_careless_831c517e-1a4b-4274-b0cd-6d6114988848.png?v=1789031131",
            "CM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_closed_minded_e5602152-7026-4dfb-8701-9eaf2806049a.png?v=1789031134",
            "OM": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_open_minded_f60ca50d-38e8-4115-9403-37a3e7595409.png?v=1789031138",
            "AMB": "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_ambivert_7071adc8-1383-462b-af16-a4484563c781.png?v=1789031142"
        }
    };


// PERSONALITY FROM A PHOTO (REVERSE MAP OF DESIGNEDPRODUCTSIMAGEURL)
const designedProductsURLsToPersonality = {
  // Armadillo
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_introverted_a6d5d139-e0de-41f9-aae2-dd23f01f7dbc.png?v=1789030911": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_extraverted_25a6f03a-e6cf-43c7-a05f-6a7206e00ba8.png?v=1789030916": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_sympathetic_1f492b84-b79f-4d2f-b942-a3ca9d028930.png?v=1789030920": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_critical_3fef3739-847c-4f7d-a6ff-ff3a585ca409.png?v=1789030924": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_mentally_stable_6114d516-d9d6-4306-9427-c717c712761d.png?v=1789030928": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_anxious_1616823a-ed1d-4441-96b4-9163bb4d9790.png?v=1789030933": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_self_discipline_d3832c5f-a3db-41c8-bd03-222bbcb4bc55.png?v=1789030938": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_careless_0b633bcd-e977-4492-a65a-7221cf9c84f5.png?v=1789030942": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_closed_minded_e6585d18-be04-41bc-b804-27d3a7da3894.png?v=1789030946": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_open_minded_db0e5892-6737-4669-adc0-55235b4861e5.png?v=1789030951": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/armadillo_ambivert_0813497d-8a2c-4f7c-8179-33eec8a1dd7e.png?v=1789030955": "AMB",
  // Bear
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_introverted_08cb07ac-7bc7-4002-b503-93b532b3b87a.png?v=1789030959": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_extraverted_6b7f252a-3518-464b-8593-bd1e3c447c16.png?v=1789030963": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_sympathetic_b01c6a80-3e80-44c5-8354-d67d41f88505.png?v=1789030968": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_critical_4c755174-27a1-42cc-961f-46e9251b1233.png?v=1789030973": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_mentally_stable_aa41803c-ff6b-46e5-80d1-5c9790cc56ca.png?v=1789030976": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_anxious_9927045e-d779-4c01-b3e7-02e490940ce2.png?v=1789030980": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_self_discipline_b603e369-2241-491f-b50e-298c75eb6cdb.png?v=1789030985": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_careless_b7aa60cc-a9d1-4c69-957c-bced5fd45d3f.png?v=1789030989": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_closed_minded_39805760-0227-43bf-a7ad-4f4281df0235.png?v=1789030993": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_open_minded_819b1fca-e351-4b0f-abce-f72e621c2292.png?v=1789030998": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/bear_ambivert_9dfb1caf-c23d-4d4d-98ca-48369ccf907e.png?v=1789031002": "AMB",
  // Badger
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_introverted_3819bf4c-6ae3-41e0-bf73-99b2d614c434.png?v=1789031007": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_extraverted_6bdaa68c-e682-4663-b237-b4cace536be5.png?v=1789031011": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_sympathetic_49cec0a2-ee52-4a7c-ab8f-884038bcc452.png?v=1789031015": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_critical_d5f0fe62-1206-48b9-bda4-1d21967223aa.png?v=1789031019": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_mentally_stable_9781fea1-8e69-4677-b40d-afd2339d7a5e.png?v=1789031024": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_anxious_c9058028-3594-44c4-aaa6-a563a23bb9cf.png?v=1789031029": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_self_discipline_c43a7686-c25a-46b7-9492-9510c73f78e9.png?v=1789031033": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_careless_d1a0efc7-546b-4925-93a1-2c388246f1e3.png?v=1789031037": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_closed_minded_9f549943-c8f0-42e4-821a-4a4add25cdc3.png?v=1789031041": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_open_minded_75e6848a-64c6-4659-8737-5565a4987361.png?v=1789031045": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/badger_ambivert_91278469-a374-4f4c-840a-66185dd35456.png?v=1789031050": "AMB",
  // Hedgehog
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_introverted_9e33a212-08a8-4701-94f7-b50591d5521a.png?v=1789031055": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_extraverted_619b6a3e-9c37-47fe-8b9b-eca96a85fe88.png?v=1789031059": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_sympathetic_ee1a6ab4-e792-4f05-9693-a4723dc684ec.png?v=1789031063": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_critical_df608903-8e82-42db-ba97-6f47e4fe0198.png?v=1789031067": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_mentally_stable_233d17b7-37d0-4e62-bcb3-4ef85a506d69.png?v=1789031071": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_anxious_83cb84d4-bc2c-4493-952e-dab3c53098c7.png?v=1789031075": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_self_discipline_43a943d2-d248-4be7-8bd8-55510cee45fc.png?v=1789031080": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_careless_2f3eb140-db3a-4ba0-b3e8-cf2eedfcf3e5.png?v=1789031083": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_closed_minded_8d060f67-6633-4b42-8d66-05905ce6ce81.png?v=1789031087": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_open_minded_c3f99f9e-cdc4-46c8-9694-0240182deb82.png?v=1789031091": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/hedgehog_ambivert_2965db94-5671-46f4-986a-37e69118987e.png?v=1789031096": "AMB",
  // Capybara
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_introverted_b783f2fb-3e78-41be-89d4-0cf35d7b4982.png?v=1789031099": "IN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_extraverted_1f1bfb6a-69dc-4109-be6f-9bcbad40b2e5.png?v=1789031103": "EX",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_sympathetic_4a8596bd-84b8-4b1b-8aca-8be3852e02d5.png?v=1789031108": "SY",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_critical_999b3a4a-a913-495c-b55b-c0d9eb9c5cc4.png?v=1789031113": "CR",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_mentally_stable_9df5bf13-8410-4c82-9430-d6ef0fcbe738.png?v=1789031119": "MS",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_anxious_e9359318-8557-43c7-be2d-c981001e080c.png?v=1789031123": "AN",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_self_discipline_73d169ef-f71b-4e11-963d-6bfc8435246e.png?v=1789031127": "SD",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_careless_831c517e-1a4b-4274-b0cd-6d6114988848.png?v=1789031131": "CL",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_closed_minded_e5602152-7026-4dfb-8701-9eaf2806049a.png?v=1789031134": "CM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_open_minded_f60ca50d-38e8-4115-9403-37a3e7595409.png?v=1789031138": "OM",
  "https://cdn.shopify.com/s/files/1/0679/4585/7206/files/capybara_ambivert_7071adc8-1383-462b-af16-a4484563c781.png?v=1789031142": "AMB"
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


