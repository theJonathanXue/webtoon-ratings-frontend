const allWebtoonData = [
  {
    url: 'https://www.webtoons.com/en/romance/the-makeup-remover/list?title_no=2186',
    title: 'The Makeup Remover',
    genre: 'Romance',
    views_count: '102.2M',
    subscribed_count: '1.2M',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200916_203/1600222659267dFCck_JPEG/504_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/66666-years-advent-of-the-dark-mage/list?title_no=3441',
    title: '66,666 Years:Advent of the Dark Mage',
    genre: 'Fantasy',
    views_count: '15.3M',
    subscribed_count: '428,970',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211005_197/1633371549200X6lt7_JPEG/866666Years_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/hectopascal/list?title_no=5033',
    title: 'Hectopascal',
    genre: 'Action',
    views_count: '927,548',
    subscribed_count: '153,709',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230106_13/1672983784367P9Opc_JPEG/3Hectopascal_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/survival-diary/list?title_no=4676',
    title: 'Survival Diary',
    genre: 'Thriller',
    views_count: '1.2M',
    subscribed_count: '99,316',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221029_248/1666974750484xSfz1_JPEG/1Survival_Diary_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/my-name-is-benny/list?title_no=1279',
    title: 'My Name is Benny',
    genre: 'Slice of life',
    views_count: '37.5M',
    subscribed_count: '258,982',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180110_232/1515530629377aJ3ie_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/half-ghost/list?title_no=2765',
    title: 'Half-Ghost',
    genre: 'Romance',
    views_count: '15.3M',
    subscribed_count: '308,207',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210505_42/1620178183003pPRKn_JPEG/5Half-Ghost_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-princesss-jewels/list?title_no=2966',
    title: "The Princess's Jewels",
    genre: 'Fantasy',
    views_count: '20.8M',
    subscribed_count: '467,367',
    rating: '8.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210708_247/1625709600547AoyLx_JPEG/1ThePrincess27sJewels_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/samadhi/list?title_no=3049',
    title: 'SAMADHI',
    genre: 'Superhero',
    views_count: '5M',
    subscribed_count: '200,605',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210701_168/1625094302870igkz3_JPEG/6Samadhi_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/seed/list?title_no=1480',
    title: 'Seed',
    genre: 'Sci-fi',
    views_count: '28.5M',
    subscribed_count: '544,492',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181116_98/1542312210452NojOw_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/lunarbaboon/list?title_no=523',
    title: 'Lunarbaboon',
    genre: 'Slice of life',
    views_count: '66M',
    subscribed_count: '189,371',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150812_300/1439367086651ttkf0_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/daily-jojo/list?title_no=3335',
    title: 'Daily JoJo',
    genre: 'Romance',
    views_count: '7.8M',
    subscribed_count: '153,763',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210901_106/1630451968207eVqtV_JPEG/8Daily+JoJo_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/murim-rpg-simulation/list?title_no=3779',
    title: 'Murim RPG Simulation',
    genre: 'Action',
    views_count: '8.5M',
    subscribed_count: '215,853',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_82/1642558258257EQ71N_JPEG/7MurimRPGSim_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/love-falls-like-rain/list?title_no=2856',
    title: 'Love Falls Like Rain',
    genre: 'Romance',
    views_count: '4M',
    subscribed_count: '167,334',
    rating: '9.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220324_212/1648060395209Lhk61_JPEG/3CANVASDay_CollectionTitle_400x209_TagImage.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/romance/cierra/list?title_no=3670',
    title: 'Cierra',
    genre: 'Romance',
    views_count: '7.5M',
    subscribed_count: '327,994',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211202_30/1638390225043yhjKC_JPEG/1Cierra_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/our-paradise/list?title_no=4740',
    title: 'Our Paradise',
    genre: 'Drama',
    views_count: '1.3M',
    subscribed_count: '61,942',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221227_162/16720851896486fD09_JPEG/4OurParadise_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/so-i-married-the-antifan/list?title_no=2739',
    title: 'So I Married the Anti-Fan',
    genre: 'Romance',
    views_count: '32.9M',
    subscribed_count: '706,304',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_242/1620087733861jXhAG_JPEG/5SoIMarriedtheAntifan_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/warning-label/list?title_no=1051',
    title: 'Warning Label',
    genre: 'Romance',
    views_count: '7M',
    subscribed_count: '135,053',
    rating: '8.95',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170530_121/1496138317181bCAmY_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/his-majestys-proposal/list?title_no=2674',
    title: "His Majesty's Proposal",
    genre: 'Fantasy',
    views_count: '46.4M',
    subscribed_count: '828,575',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210430_65/1619743096045hMo4T_JPEG/8HisMajesty27sProposal_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/historical/madame-outlaw/list?title_no=2716',
    title: 'Madame Outlaw',
    genre: 'Historical',
    views_count: '8.3M',
    subscribed_count: '276,150',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210528_41/1622137292146FmngM_JPEG/8MadameOutlaw_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-producers-second-life/list?title_no=5046',
    title: "The Producer'sSecond Life",
    genre: 'Drama',
    views_count: '754,773',
    subscribed_count: '56,828',
    rating: '8.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230113_129/1673576258702iNsKO_JPEG/8TPSL_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/newman/list?title_no=405',
    title: 'Newman',
    genre: 'Fantasy',
    views_count: '44.2M',
    subscribed_count: '197,172',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_207/1611711415209AAeTY_JPEG/8Newman-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/blue-matter/list?title_no=2923',
    title: 'Blue Matter',
    genre: 'Fantasy',
    views_count: '4.6M',
    subscribed_count: '161,355',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211210_125/1639076816509fQluN_JPEG/5BlueMatter_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/the-sound-of-your-heart/list?title_no=269',
    title: 'The Sound of Your Heart',
    genre: 'Comedy',
    views_count: '31.4M',
    subscribed_count: '147,837',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140807_149/1407389251481p2TKV_JPEG/06_EBA788EC9D8CEC9D98EC868CEBA6ACA.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/taming-the-marquess/list?title_no=4345',
    title: 'Taming the Marquess',
    genre: 'Romance',
    views_count: '5.3M',
    subscribed_count: '209,889',
    rating: '9.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220609_227/16547505104847Fq4K_JPEG/5TamingtheMarquess_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/vibe-check/list?title_no=2724',
    title: 'Vibe Check!',
    genre: 'Comedy',
    views_count: '3.3M',
    subscribed_count: '70,869',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_292/1642559496685UTLMu_JPEG/4VibeCheck_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/lone/list?title_no=1929',
    title: 'Lone',
    genre: 'Fantasy',
    views_count: '16.5M',
    subscribed_count: '323,633',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200226_101/15826552369535vwKJ_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/where-tangents-meet/list?title_no=421',
    title: 'Where Tangents Meet',
    genre: 'Romance',
    views_count: '93.3M',
    subscribed_count: '1.2M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150409_168/1428572974451T11Ou_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/see-you-in-my-19th-life/list?title_no=1266',
    title: 'See You in My 19th Life',
    genre: 'Romance',
    views_count: '80.8M',
    subscribed_count: '1.2M',
    rating: '9.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201210_43/1607541786169W2bx3_JPEG/4See+You+in+My+19th+Life_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/death-of-a-pop-star/list?title_no=2273',
    title: 'Death of a Pop Star',
    genre: 'Romance',
    views_count: '23.5M',
    subscribed_count: '585,872',
    rating: '9.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201014_61/16026138508586g5jE_JPEG/104_EC97E1.JPG?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/neon-revenge/list?title_no=2510',
    title: 'Neon Revenge',
    genre: 'Action',
    views_count: '14.9M',
    subscribed_count: '382,569',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210309_278/1615271420887u0ONb_JPEG/1NeonRevenge_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-warrior-returns/list?title_no=3265',
    title: 'The Warrior Returns',
    genre: 'Action',
    views_count: '12.2M',
    subscribed_count: '366,388',
    rating: '8.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210910_86/1631225962604x18bb_JPEG/2TheWarriorReturns_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/sarimin/list?title_no=3247',
    title: 'Tales of Sarimin the Jinn',
    genre: 'Action',
    views_count: '1.3M',
    subscribed_count: '80,801',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210821_215/162948357543947gqU_JPEG/2Tales+of+Sarimin+the+Jinn_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/unlucky-is-as-lucky-does/list?title_no=1554',
    title: 'Unlucky is as Lucky does',
    genre: 'Comedy',
    views_count: '25.4M',
    subscribed_count: '248,323',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191217_15/1576529729991GcU1z_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/gepetto/list?title_no=81',
    title: 'Gepetto',
    genre: 'Sci-fi',
    views_count: '14.8M',
    subscribed_count: '169,323',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_136/1404270255746qgLg6_JPEG/30_ECA09CED8E98ED86A0.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/complicated-cohabitation/list?title_no=4739',
    title: 'ComplicatedCohabitation',
    genre: 'Romance',
    views_count: '1M',
    subscribed_count: '64,379',
    rating: '8.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221227_220/16721201424789GxJV_JPEG/0Complicated-Cohabitation_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/devilish-romance/list?title_no=2529',
    title: 'Devilish Romance',
    genre: 'Supernatural',
    views_count: '20M',
    subscribed_count: '478,008',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210310_209/1615346454240JU57A_PNG/0DevilishRomance_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/night-of-shadows/list?title_no=5044',
    title: 'Night of Shadows',
    genre: 'Fantasy',
    views_count: '917,795',
    subscribed_count: '104,282',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230117_291/167390097470047LoB_JPEG/4NoS_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/here-there-be-dragons/list?title_no=2726',
    title: 'Here There Be Dragons',
    genre: 'Fantasy',
    views_count: '2.7M',
    subscribed_count: '145,558',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220201_215/1643674014808aMeX4_JPEG/8HereThereBeDragons_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/hooky/list?title_no=425',
    title: 'Hooky',
    genre: 'Fantasy',
    views_count: '103.5M',
    subscribed_count: '920,452',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180719_267/1531962800774J0Hrr_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/a-bittersweet-life/list?title_no=294',
    title: 'A Bittersweet Life',
    genre: 'Slice of life',
    views_count: '6.7M',
    subscribed_count: '93,717',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140922_101/1411355175657A67ul_JPEG/mobile_bg.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/fictional-skin/list?title_no=3272',
    title: 'Fictional Skin',
    genre: 'Drama',
    views_count: '5.4M',
    subscribed_count: '202,195',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220429_201/16511841888103QtDx_JPEG/0FictionalSkin_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/scroll-if-you-dare/list?title_no=4784',
    title: 'Scroll if You Dare',
    genre: 'Horror',
    views_count: '7.2M',
    subscribed_count: '263,188',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220924_282/1663954196525Nb762_JPEG/7ScrollIfYouDare_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/extraordinary-attorney-woo/list?title_no=4867',
    title: 'Extraordinary Attorney Woo',
    genre: 'Drama',
    views_count: '1.5M',
    subscribed_count: '217,933',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221215_120/1671049412754XyFHO_JPEG/9Extraordinary_Attorney_Woo_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/vampire-husband/list?title_no=4841',
    title: 'Vampire Husband',
    genre: 'Slice of life',
    views_count: '6.5M',
    subscribed_count: '239,452',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220227_219/1645920327212jrqfK_PNG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-ember-knight/list?title_no=2886',
    title: 'The Ember Knight',
    genre: 'Fantasy',
    views_count: '11.3M',
    subscribed_count: '231,632',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210611_186/1623376620731RqYOa_JPEG/5TheEmberKnight_MobileLandingPage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-sound-of-magic-annarasumanara/list?title_no=77',
    title: 'The Sound of Magic: Annarasumanara',
    genre: 'Drama',
    views_count: '13.4M',
    subscribed_count: '377,165',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220506_41/1651845868412ohlyr_JPEG/328720x123029Annarasumanara_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/killmax/list?title_no=1894',
    title: 'KILLMAX',
    genre: 'Supernatural',
    views_count: '13.6M',
    subscribed_count: '592,820',
    rating: '8.94',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201106_103/16046291788233Deuu_JPEG/504_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/killstagram/list?title_no=1971',
    title: '#Killstagram',
    genre: 'Thriller',
    views_count: '42.3M',
    subscribed_count: '914,123',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200404_10/1585955845003JDElv_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/kind-of-love/list?title_no=1850',
    title: 'Kind of Love',
    genre: 'Romance',
    views_count: '30.8M',
    subscribed_count: '646,609',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210410_212/1618013549387BiLPC_JPEG/7Yum+Cha_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/supercasting-bts/list?title_no=3788',
    title: 'WEBTOON x BTS',
    genre: 'Fantasy',
    views_count: '10.6M',
    subscribed_count: '814,653',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211224_201/1640294559838VAXYg_PNG/5In+app+banner_M_details.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/rewriting-our-love-story/list?title_no=4491',
    title: 'Rewriting Our Love Story',
    genre: 'Romance',
    views_count: '2.3M',
    subscribed_count: '140,121',
    rating: '8.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220707_131/1657201725066pdOYQ_JPEG/5RewritingOurLoveStory_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/late-bloomer/list?title_no=988',
    title: 'Late Bloomer',
    genre: 'Romance',
    views_count: '15.8M',
    subscribed_count: '326,256',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170407_230/1491539777387Ko6hU_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/roach/list?title_no=4084',
    title: 'Roach',
    genre: 'Horror',
    views_count: '1.4M',
    subscribed_count: '61,144',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220326_62/1648256132715HRhps_JPEG/0Roach_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/infinity/list?title_no=3451',
    title: 'Infinity',
    genre: 'Sports',
    views_count: '3.2M',
    subscribed_count: '99,234',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220302_80/1646158785655dMpsg_JPEG/3Infinity_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/go-away-romeo/list?title_no=5066',
    title: 'Go Away Romeo',
    genre: 'Romance',
    views_count: '3.1M',
    subscribed_count: '406,153',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230110_243/1673303103137raEyq_JPEG/2GAR_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/under-the-aegis/list?title_no=436',
    title: 'Under the Aegis',
    genre: 'Fantasy',
    views_count: '11.1M',
    subscribed_count: '90,270',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151204_249/1449206983902Njkcc_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-dukes-cursed-charm/list?title_no=4678',
    title: "The Duke's Cursed Charm",
    genre: 'Romance',
    views_count: '10.3M',
    subscribed_count: '357,019',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221008_231/1665190983379KlC0a_JPEG/4TheDukesCursedCharm_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/the-red-book/list?title_no=467',
    title: 'The Red Book',
    genre: 'Horror',
    views_count: '17.2M',
    subscribed_count: '263,513',
    rating: '8.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150507_282/1430991291924Eb9kx_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/pound/list?title_no=1496',
    title: 'Pound',
    genre: 'Action',
    views_count: '3.7M',
    subscribed_count: '96,729',
    rating: '9.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181208_163/1544240024137CAnBM_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/deor/list?title_no=1663',
    title: 'Deor',
    genre: 'Fantasy',
    views_count: '36.2M',
    subscribed_count: '1M',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190709_273/1562625562939hjpas_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/city-of-blank/list?title_no=1895',
    title: 'City of Blank',
    genre: 'Sci-fi',
    views_count: '36.2M',
    subscribed_count: '636,425',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211021_22/1634753980436hFHFk_JPEG/2CityofBlank_Season3Return_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/tales-of-greed/list?title_no=2772',
    title: 'Tales of Greed',
    genre: 'Thriller',
    views_count: '6.5M',
    subscribed_count: '221,693',
    rating: '9.45',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210505_278/1620170201117Sk3WL_JPEG/3Tales+of+Greed_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-lazy-lord-masters-the-sword/list?title_no=3349',
    title: 'The Lazy LordMasters the Sword',
    genre: 'Fantasy',
    views_count: '19.6M',
    subscribed_count: '383,964',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210821_189/1629507852928GG9vm_JPEG/9The-Lazy-Lord-Masters-the-SwordLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/secretary-out-of-order/list?title_no=3790',
    title: 'Secretary Out-of-Order',
    genre: 'Romance',
    views_count: '24M',
    subscribed_count: '569,071',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_118/1642559106743XCYq5_JPEG/2Secretary+Out-of-Order_Launch_mobile_landingpage+copy.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-tax-reaper/list?title_no=4115',
    title: 'The Tax Reaper',
    genre: 'Drama',
    views_count: '4.8M',
    subscribed_count: '203,057',
    rating: '9.21',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220419_211/1650308414127x8u2Y_JPEG/6TheTaxReaper_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/acception/list?title_no=1513',
    title: 'Acception',
    genre: 'Drama',
    views_count: '153M',
    subscribed_count: '861,730',
    rating: '8.99',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190110_282/1547089402932h2jET_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-final-raid-boss/list?title_no=3921',
    title: 'The Final Raid Boss',
    genre: 'Fantasy',
    views_count: '4.7M',
    subscribed_count: '165,486',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220209_152/1644359413421SBBKn_JPEG/5TheFinalRaidBoss_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/witchs-workshop/list?title_no=4887',
    title: "Witch's Workshop",
    genre: 'Drama',
    views_count: '209,091',
    subscribed_count: '21,849',
    rating: '8.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221122_254/1669110519075xCpdO_JPEG/6WitchsWorkshop_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/lets-get-divorced/list?title_no=5035',
    title: "Let's Get Divorced!",
    genre: 'Drama',
    views_count: '803,931',
    subscribed_count: '180,559',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230112_43/1673470661295rljOr_JPEG/7LetsGetDivorced_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/dating-with-a-tail/list?title_no=1263',
    title: 'Dating With a Tail',
    genre: 'Romance',
    views_count: '23.5M',
    subscribed_count: '549,162',
    rating: '9.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_221/1611697667361CWzNd_JPEG/004_EC9E91ED9288EC8381EC84B8_mobile+28329.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/not-so-shoujo-love-story/list?title_no=2189',
    title: 'Not So Shoujo Love Story',
    genre: 'Comedy',
    views_count: '35.4M',
    subscribed_count: '742,952',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200903_218/1599092998634ALfFy_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/nothing-special/list?title_no=1188',
    title: 'Nothing Special',
    genre: 'Fantasy',
    views_count: '29.3M',
    subscribed_count: '412,988',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190308_176/1551995137566gkhRP_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/heartwarming/when-the-day-comes/list?title_no=2620',
    title: 'When the Day Comes',
    genre: 'Heartwarming',
    views_count: '8.6M',
    subscribed_count: '247,346',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210413_261/1618294381039U3BV5_JPEG/5WhenTheDayComes_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/crimson-heart/list?title_no=4898',
    title: 'Crimson Heart',
    genre: 'Fantasy',
    views_count: '854,051',
    subscribed_count: '144,738',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221125_54/1669352832408midEz_JPEG/1download.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/honey-lemon/list?title_no=2762',
    title: 'Honey Lemon',
    genre: 'Romance',
    views_count: '2.5M',
    subscribed_count: '269,836',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221115_171/1668451923891bLQVC_JPEG/6Honey_Lemon_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/realta/list?title_no=3271',
    title: 'Realta',
    genre: 'Fantasy',
    views_count: '3.2M',
    subscribed_count: '173,156',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220629_111/1656457815911IwbGd_JPEG/0Realta_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/dr-frost/list?title_no=371',
    title: 'Dr. Frost',
    genre: 'Mystery',
    views_count: '40.4M',
    subscribed_count: '406,151',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141226_128/14195864452322voUK_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-reason-to-die/list?title_no=3993',
    title: 'My Reason to Die',
    genre: 'Romance',
    views_count: '16.7M',
    subscribed_count: '521,819',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220428_251/1651120074151Y1L9x_JPEG/4My+Reason+to+Die_Launch__landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/sweethome/list?title_no=1285',
    title: 'Sweet Home',
    genre: 'Thriller',
    views_count: '252.8M',
    subscribed_count: '3.2M',
    rating: '9.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210201_167/1612176808194aVmHr_JPEG/79M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/im-the-queen-in-this-life/list?title_no=4886',
    title: "I'm the Queen in This Life",
    genre: 'Fantasy',
    views_count: '8.9M',
    subscribed_count: '508,857',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221111_164/166810633191538JV4_JPEG/6ImtheQueeninThisLife_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/defects/list?title_no=2731',
    title: 'Defects',
    genre: 'Fantasy',
    views_count: '4.3M',
    subscribed_count: '226,867',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220215_176/1644894025428W6sWt_JPEG/4Defects_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/brothersbond/list?title_no=1458',
    title: 'Brothers Bond',
    genre: 'Action',
    views_count: '2.3M',
    subscribed_count: '131,588',
    rating: '9.02',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181002_178/1538438505053HciSr_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/fantasy-sketch/list?title_no=1020',
    title: 'Fantasy Sketch - The Game',
    genre: 'Sci-fi',
    views_count: '1.6M',
    subscribed_count: '52,909',
    rating: '8.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170426_239/1493183045567axXpl_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/love-and-leashes/list?title_no=3919',
    title: 'Love and Leashes',
    genre: 'Romance',
    views_count: '15.4M',
    subscribed_count: '266,467',
    rating: '9.13',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220204_232/164394334624841zsD_JPEG/0LoveAndLeashes_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/secret-playlist/list?title_no=2395',
    title: 'Secret Playlist',
    genre: 'Romance',
    views_count: '33.8M',
    subscribed_count: '639,114',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201212_217/1607741544935YlCty_JPEG/8SecretPlaylisth_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/cat-got-your-tongue/list?title_no=3362',
    title: 'Cat Got Your Tongue',
    genre: 'Comedy',
    views_count: '1.3M',
    subscribed_count: '68,546',
    rating: '8.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220407_114/1649285706386YOXp4_JPEG/3CatGotYourTongue_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/im-the-max-level-newbie/list?title_no=3915',
    title: "I'm the Max-Level Newbie",
    genre: 'Action',
    views_count: '20.3M',
    subscribed_count: '534,210',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220607_240/16545450210242lyoY_JPEG/6IE28099mtheMaxLevelNewbie_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/smile-brush/list?title_no=94',
    title: 'Smile Brush',
    genre: 'Slice of life',
    views_count: '8.3M',
    subscribed_count: '120,037',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_243/1404270006683YoIqB_JPEG/23_EC8AA4EBA788EC9DBCEBB88CEB9FACEC8B9C.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/whale-star-the-gyeongseong-mermaid/list?title_no=3237',
    title: 'Whale Star: The Gyeongseong Mermaid',
    genre: 'Drama',
    views_count: '10.5M',
    subscribed_count: '282,910',
    rating: '9.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220203_227/1643858074835ogFj9_JPEG/3WWTGM_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/roar-street-journal/list?title_no=397',
    title: 'Roar Street Journal',
    genre: 'Slice of life',
    views_count: '10.8M',
    subscribed_count: '58,910',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150904_188/1441342429206CdX1O_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/just-pancakes/list?title_no=1651',
    title: 'Just Pancakes',
    genre: 'Comedy',
    views_count: '21.7M',
    subscribed_count: '223,183',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190614_279/15604748391486uGyO_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/vampire-magicka/list?title_no=2963',
    title: 'Vampire Magicka',
    genre: 'Fantasy',
    views_count: '896,974',
    subscribed_count: '69,416',
    rating: '8.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220429_3/1651185941043o2WIW_JPEG/7VampireMagicka_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/davinchibi/list?title_no=1190',
    title: 'Davinchibi',
    genre: 'Fantasy',
    views_count: '1.2M',
    subscribed_count: '72,931',
    rating: '8.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171004_36/1507079786184odb3P_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/skate-fire-100/list?title_no=1674',
    title: 'Skate!!! Fire 100',
    genre: 'Sports',
    views_count: '2.1M',
    subscribed_count: '80,940',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190716_21/1563232898850B9xxM_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/descended-from-divinity/list?title_no=3450',
    title: 'Descended from Divinity',
    genre: 'Fantasy',
    views_count: '3.9M',
    subscribed_count: '118,700',
    rating: '9.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220603_241/16542016189360yR6i_JPEG/9Descended+from+Divinity_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/never-ending-darling/list?title_no=4212',
    title: 'Never-Ending Darling',
    genre: 'Thriller',
    views_count: '3.8M',
    subscribed_count: '153,191',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220520_209/1653010889588dCaEd_JPEG/3NeverEndingDarling_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/covenant/list?title_no=2011',
    title: 'Covenant',
    genre: 'Action',
    views_count: '18.9M',
    subscribed_count: '606,635',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220723_32/16585387186502A6LP_JPEG/2Covenant_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/night-fishing/list?title_no=4290',
    title: 'Night Fishing',
    genre: 'Thriller',
    views_count: '417,005',
    subscribed_count: '33,097',
    rating: '9.27',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221025_161/1666653594119ckuPV_JPEG/0NightFishing_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/time-and-reason/list?title_no=4210',
    title: 'Time and Reason',
    genre: 'Romance',
    views_count: '1.8M',
    subscribed_count: '111,114',
    rating: '8.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220608_14/1654639664896vC1AC_JPEG/7TimeandReason_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/messenger/list?title_no=1382',
    title: 'Messenger',
    genre: 'Fantasy',
    views_count: '5.7M',
    subscribed_count: '98,136',
    rating: '9.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190724_300/1563924651612ojshD_JPEG/Mobile-Home-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/random-chat/list?title_no=1669',
    title: 'Random Chat',
    genre: 'Drama',
    views_count: '30M',
    subscribed_count: '358,211',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190711_157/1562806650500HtftK_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-lone-spellcaster/list?title_no=3478',
    title: 'The Lone Spellcaster',
    genre: 'Fantasy',
    views_count: '16.8M',
    subscribed_count: '401,969',
    rating: '8.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211109_169/1636397650956kwPOK_JPEG/4TheLoneSpellcaster_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/taekwondo-kid/list?title_no=3310',
    title: 'Taekwondo Kid',
    genre: 'Sports',
    views_count: '3M',
    subscribed_count: '80,559',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210827_249/1630010679153nT96o_JPEG/8Taekwondokid_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/dr-hound/list?title_no=3266',
    title: 'Dr. Hound',
    genre: 'Thriller',
    views_count: '1.9M',
    subscribed_count: '56,321',
    rating: '9.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211209_282/1639017920429KOMTA_JPEG/6DrHound_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/rebirth/list?title_no=1412',
    title: 'Rebirth',
    genre: 'Sci-fi',
    views_count: '107.9M',
    subscribed_count: '1.3M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210701_199/16250977196469jNWw_JPEG/9Rebirth_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/brimstone-and-roses/list?title_no=1758',
    title: 'Brimstone and Roses',
    genre: 'Romance',
    views_count: '38.4M',
    subscribed_count: '556,365',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210507_186/1620347732056eE0tr_JPEG/4BrimstoneAndRoses_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/midnight-rain/list?title_no=1797',
    title: 'Midnight Rain',
    genre: 'Drama',
    views_count: '17.2M',
    subscribed_count: '379,668',
    rating: '9.06',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210717_231/1626504586309Ydf2t_JPEG/3MidnightRainRevamp_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/code-adam/list?title_no=1657',
    title: 'Code Adam',
    genre: 'Action',
    views_count: '42.4M',
    subscribed_count: '813,542',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_4/1611706751514hlgL1_JPEG/8Code-Adam-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/a-mans-man/list?title_no=2876',
    title: "A Man's Man",
    genre: 'Drama',
    views_count: '4M',
    subscribed_count: '107,113',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210617_155/1623914080545PIjGY_JPEG/4AMansMan_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/seven-years-later/list?title_no=3647',
    title: 'Seven Years Later',
    genre: 'Drama',
    views_count: '3.7M',
    subscribed_count: '200,138',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220426_4/1650933321995TpQ1C_JPEG/2Seven+Years+Later_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/deadlove/list?title_no=2460',
    title: 'Deadlove',
    genre: 'Slice of life',
    views_count: '2.2M',
    subscribed_count: '84,541',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210202_24/1612206965281Wm3vh_JPEG/3Deadlove_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-four-of-them/list?title_no=1524',
    title: 'The Four of Them',
    genre: 'Drama',
    views_count: '97.2M',
    subscribed_count: '1.1M',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211026_232/1635205329410UWO0X_JPEG/6thefourofthem_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/cat-loaf-adventures/list?title_no=1381',
    title: 'Cat Loaf Adventures',
    genre: 'Slice of life',
    views_count: '24M',
    subscribed_count: '316,624',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180513_216/1526170865592V0rTX_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/little-rain/list?title_no=2612',
    title: 'Little Rain',
    genre: 'Romance',
    views_count: '5.7M',
    subscribed_count: '375,120',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210413_39/1618277303236rnCAW_JPEG/1LittleRain_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/deaths-game/list?title_no=1265',
    title: "Death's Game",
    genre: 'Drama',
    views_count: '14.1M',
    subscribed_count: '339,107',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201215_295/1607977776625KVJCp_JPEG/5Deaths+Game_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/bitten-contract/list?title_no=3689',
    title: 'Bitten Contract',
    genre: 'Romance',
    views_count: '21.1M',
    subscribed_count: '527,324',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211210_137/1639086824957e514o_JPEG/3BittenContract_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/elena/list?title_no=484',
    title: 'Elena',
    genre: 'Horror',
    views_count: '5.8M',
    subscribed_count: '114,165',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150605_58/1433496096615C0hyW_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/prince-maker/list?title_no=3263',
    title: 'Prince Maker',
    genre: 'Fantasy',
    views_count: '4M',
    subscribed_count: '140,692',
    rating: '9.45',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210916_138/1631726599463M7dOI_JPEG/9PrinceMaker_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/your-adventure/list?title_no=506',
    title: 'Your Adventure',
    genre: 'Comedy',
    views_count: '3.6M',
    subscribed_count: '50,584',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150708_22/1436338796093MUjhQ_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/toaster-dude/list?title_no=1983',
    title: 'Toaster Dude',
    genre: 'Comedy',
    views_count: '28.2M',
    subscribed_count: '484,798',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200502_270/1588357938861xBtb9_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/hundred/list?title_no=3766',
    title: '100',
    genre: 'Action',
    views_count: '2.3M',
    subscribed_count: '118,524',
    rating: '9.23',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_198/1642557720451iPguX_JPEG/2100_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-runway/list?title_no=3691',
    title: 'The RUNWAY',
    genre: 'Romance',
    views_count: '37.4M',
    subscribed_count: '778,818',
    rating: '9.23',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211210_52/1639120392724zmlq1_JPEG/7TheRunway_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-roommate-is-a-gumiho/list?title_no=2611',
    title: 'My Roommate is a Gumiho',
    genre: 'Romance',
    views_count: '16.5M',
    subscribed_count: '303,948',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210409_235/1617935666354xu7Ei_JPEG/8MyRoommateIsAGumiho_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/operation-true-love/list?title_no=4465',
    title: 'Operation: True Love',
    genre: 'Romance',
    views_count: '42.9M',
    subscribed_count: '1.2M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220707_236/165714993807663THN_JPEG/9OperationTrueLove_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/love-me-to-death/list?title_no=3203',
    title: 'Love Me to Death',
    genre: 'Fantasy',
    views_count: '11.9M',
    subscribed_count: '447,885',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220629_127/1656459394182hMKbQ_JPEG/2Love+Me+to+Death_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/aphroditeix/list?title_no=1451',
    title: 'Aphrodite IX',
    genre: 'Sci-fi',
    views_count: '2.4M',
    subscribed_count: '121,200',
    rating: '8.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180913_150/1536805563498Ahl6f_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/after-school-lessons-for-unripe-apples/list?title_no=3093',
    title: 'After School Lessonsfor Unripe Apples',
    genre: 'Drama',
    views_count: '20.7M',
    subscribed_count: '351,702',
    rating: '9.94',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_49/16262094425114mCso_JPEG/5AfterSchoolLessonsForUnripeApples_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/mage-and-demon-queen/list?title_no=1438',
    title: 'Mage & Demon Queen',
    genre: 'Comedy',
    views_count: '341.5M',
    subscribed_count: '2.7M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211001_111/1633052644268H45Hi_JPEG/9MageAgain_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/principals-livestream/list?title_no=4261',
    title: "Principal's Livestream",
    genre: 'Comedy',
    views_count: '601,837',
    subscribed_count: '37,705',
    rating: '9.45',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220614_276/1655189005190jmTde_JPEG/4PrincipalsLivestream_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/everywhere-and-nowhere/list?title_no=1598',
    title: 'Everywhere & Nowhere',
    genre: 'Comedy',
    views_count: '99.5M',
    subscribed_count: '794,433',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190409_47/1554772525779xGR2G_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/island/list?title_no=3923',
    title: 'Island',
    genre: 'Action',
    views_count: '862,097',
    subscribed_count: '56,048',
    rating: '9.00',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220210_86/1644500152947M84CN_JPEG/8Island_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/heirs-game/list?title_no=1445',
    title: "Heir's Game",
    genre: 'Drama',
    views_count: '33.6M',
    subscribed_count: '302,471',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190729_291/1564349398412S2TDm_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/miss-abbott-and-the-doctor/list?title_no=707',
    title: 'Miss Abbott and the Doctor',
    genre: 'Romance',
    views_count: '95.9M',
    subscribed_count: '736,603',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160708_288/14679185996474E6v7_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/no-marriage-is-perfect/list?title_no=4470',
    title: 'No Marriage is Perfect',
    genre: 'Romance',
    views_count: '16M',
    subscribed_count: '458,901',
    rating: '9.20',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220810_247/1660071648386VVb0O_JPEG/2Nomarriageisperfect_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/down-to-earth/list?title_no=1817',
    title: 'Down To Earth',
    genre: 'Romance',
    views_count: '337.7M',
    subscribed_count: '3M',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200109_250/1578531665085w3ihW_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/super-awkward-man/list?title_no=2972',
    title: 'Super Awkward Man',
    genre: 'Comedy',
    views_count: '2M',
    subscribed_count: '100,905',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211124_298/1637721520046BEh9K_JPEG/8SuperAwkwardMan_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/shadow/list?title_no=281',
    title: 'SHADOW',
    genre: 'Superhero',
    views_count: '3.8M',
    subscribed_count: '189,334',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140826_37/1409020158503jANJ1_JPEG/mobile_bg.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/american-road-trip/list?title_no=2209',
    title: 'American Road Trip',
    genre: 'Drama',
    views_count: '1.9M',
    subscribed_count: '100,299',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201222_178/1608584124129vyejE_JPEG/5americanroadtrip_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/devil-no-4/list?title_no=1695',
    title: 'Devil Number 4',
    genre: 'Supernatural',
    views_count: '140.7M',
    subscribed_count: '1.8M',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190808_18/1565218668496xDPNg_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/tales-of-the-unusual/list?title_no=68',
    title: 'Tales of the Unusual',
    genre: 'Horror',
    views_count: '158.9M',
    subscribed_count: '830,654',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220129_136/1643395977409041Jq_JPEG/4talesoftheunusal_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/heartwired/list?title_no=1539',
    title: 'Heartwired',
    genre: 'Sci-fi',
    views_count: '2.1M',
    subscribed_count: '121,214',
    rating: '9.17',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190207_172/1549495009522josqW_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/a-chance-at-last/list?title_no=3909',
    title: 'A Chance At Last',
    genre: 'Romance',
    views_count: '8.5M',
    subscribed_count: '228,219',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220203_212/1643857780630KbBEe_JPEG/6A+Chance+At+Last_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/its-a-budgies-life/list?title_no=985',
    title: "A Budgie's Life",
    genre: 'Slice of life',
    views_count: '68.1M',
    subscribed_count: '346,181',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180313_190/1520875863810KPvQp_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/boyfriend-of-the-dead/list?title_no=1102',
    title: 'Boyfriend of the Dead',
    genre: 'Comedy',
    views_count: '420.4M',
    subscribed_count: '2.1M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200512_221/1589235918197Mfohk_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/flawless/list?title_no=3264',
    title: 'Flawless',
    genre: 'Romance',
    views_count: '11M',
    subscribed_count: '312,302',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210909_276/16311248916778Ngga_JPEG/9Flawless_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/daybreak/list?title_no=4089',
    title: 'Daybreak',
    genre: 'Slice of life',
    views_count: '22.2M',
    subscribed_count: '479,072',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220903_19/1662153614534bedmR_JPEG/5Daybreak_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/simon-sues/list?title_no=1619',
    title: 'Simon Sues',
    genre: 'Supernatural',
    views_count: '4.9M',
    subscribed_count: '156,153',
    rating: '9.13',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190517_171/1558048361239Ourrs_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-last-golden-child/list?title_no=3353',
    title: 'The Last Golden Child',
    genre: 'Action',
    views_count: '4M',
    subscribed_count: '146,026',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210924_292/16324232811519e1ni_JPEG/5TheLastGoldenChild_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/finding-wonderland/list?title_no=2704',
    title: 'Finding Wonderland',
    genre: 'Fantasy',
    views_count: '5.9M',
    subscribed_count: '281,389',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210529_121/1622226148318LuCMf_JPEG/9FindingWonderland_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/3-second-strip/list?title_no=380',
    title: '3-Second Strip',
    genre: 'Comedy',
    views_count: '16.3M',
    subscribed_count: '62,830',
    rating: '8.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150121_103/1421803338535HnNwk_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/nano-list/list?title_no=700',
    title: 'Nano List',
    genre: 'Sci-fi',
    views_count: '57.1M',
    subscribed_count: '617,540',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160628_55/1467096833592MGp3b_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-monsters-bride/list?title_no=3336',
    title: "The Monster's Bride",
    genre: 'Fantasy',
    views_count: '5M',
    subscribed_count: '182,152',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210908_211/1631065031591HMngs_JPEG/0TheMonstersBride_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/small-world/list?title_no=1159',
    title: 'Small World',
    genre: 'Slice of life',
    views_count: '267M',
    subscribed_count: '875,209',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170220_115/1487547010295WTJnh_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/noise-from-upstairs/list?title_no=4216',
    title: 'Noise From Upstairs',
    genre: 'Thriller',
    views_count: '1.3M',
    subscribed_count: '47,959',
    rating: '8.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220701_269/1656612761050npLq6_JPEG/1NoiseFromUpstairs_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/nomads/list?title_no=2732',
    title: 'Nomads',
    genre: 'Fantasy',
    views_count: '3.9M',
    subscribed_count: '133,018',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230127_79/1674783926910VT2Er_JPEG/8Nomads_landingpage_mobile_230112.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/10th-dimension-boys/list?title_no=71',
    title: '10th Dimension Boys',
    genre: 'Comedy',
    views_count: '29.2M',
    subscribed_count: '97,171',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_134/1404270702544aR7ty_JPEG/24_EC868CEB8584EB93A4EC9D80EBACB4EC9787EC9D84ED9598EAB.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/children-of-mirra/list?title_no=4080',
    title: 'Children of Mirra',
    genre: 'Fantasy',
    views_count: '1M',
    subscribed_count: '81,882',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221118_103/1668733124893WugvI_JPEG/0Children_of_Mirra_Adventurer_s_Party_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-masked-fables/list?title_no=2384',
    title: 'The Masked Fables',
    genre: 'Fantasy',
    views_count: '3.1M',
    subscribed_count: '145,243',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211102_284/1635807450639cxVsx_JPEG/2TheMaskedFables_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/anti-monster-force/list?title_no=2970',
    title: 'Anti-Monster Force',
    genre: 'Fantasy',
    views_count: '4M',
    subscribed_count: '147,877',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_294/1626210219966AmU9z_JPEG/8AntiMonsterForceLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/empyrea/list?title_no=1407',
    title: 'EMPYREA',
    genre: 'Fantasy',
    views_count: '27.6M',
    subscribed_count: '631,873',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200825_49/1598317776048YxJ92_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/skullgirls/list?title_no=2734',
    title: 'Skullgirls',
    genre: 'Action',
    views_count: '1.4M',
    subscribed_count: '137,630',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221116_83/1668565557519fsDxz_JPEG/0Skullgirls_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/jupiter-men/list?title_no=3757',
    title: 'Jupiter-Men',
    genre: 'Action',
    views_count: '1.2M',
    subscribed_count: '74,928',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220802_47/1659392683108Fuo4b_JPEG/2Jupiter-Men+Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/pacific-rim-amara/list?title_no=1327',
    title: 'Pacific Rim: Amara',
    genre: 'Sci-fi',
    views_count: '1.7M',
    subscribed_count: '112,731',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180309_111/1520567136885oCrif_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/annie-green-hates-girls/list?title_no=3764',
    title: 'Annie Green Hates Girls',
    genre: 'Romance',
    views_count: '2M',
    subscribed_count: '158,436',
    rating: '7.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220930_150/1664484630228utaMS_JPEG/1AnnieGreenHatesGirls_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/i-get-stronger-the-more-i-eat/list?title_no=3199',
    title: 'I Get Stronger the More I Eat',
    genre: 'Action',
    views_count: '21.1M',
    subscribed_count: '405,953',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220603_219/1654233709384NsIDz_JPEG/5IGSTMIE_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/trapped/list?title_no=4635',
    title: 'Trapped',
    genre: 'Thriller',
    views_count: '6.9M',
    subscribed_count: '240,823',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220910_270/1662755370252fIbrG_JPEG/0Trapped_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/grasp/list?title_no=2854',
    title: 'Grasp',
    genre: 'Thriller',
    views_count: '2.3M',
    subscribed_count: '101,452',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210715_16/1626300028201Sstcm_JPEG/9GraspLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/survive-romance/list?title_no=2607',
    title: 'Surviving Romance',
    genre: 'Horror',
    views_count: '30.5M',
    subscribed_count: '645,332',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210414_211/1618358451100hzApq_JPEG/6SurvivingRomance_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/my-deepest-secret/list?title_no=1580',
    title: 'My Deepest Secret',
    genre: 'Thriller',
    views_count: '193.3M',
    subscribed_count: '2.6M',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190422_30/1555914048077Pb3bz_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-lone-necromancer/list?title_no=3690',
    title: 'The Lone Necromancer',
    genre: 'Fantasy',
    views_count: '19.8M',
    subscribed_count: '495,017',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211209_80/1639018264654Iv35G_JPEG/5The+Lone+Necromancer_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/betwixt/list?title_no=2962',
    title: 'Betwixt',
    genre: 'Mystery',
    views_count: '1.2M',
    subscribed_count: '84,094',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220604_264/1654308242195TupIM_JPEG/9Betwixt_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/charming-the-duke-of-the-north/list?title_no=4637',
    title: 'Charming theDuke of the North',
    genre: 'Fantasy',
    views_count: '8.1M',
    subscribed_count: '380,897',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220903_101/16621329586586vBAA_PNG/7CharmingtheDukeoftheNorth_desktopbanner_launch_220826.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/regina-lena-to-the-unforgiven/list?title_no=3920',
    title: 'Regina Rena:To the Unforgiven',
    genre: 'Fantasy',
    views_count: '13.3M',
    subscribed_count: '477,575',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220212_294/1644624983559xWNAA_JPEG/6ReginaRenaTo+theUnforgiven_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/the-red-king/list?title_no=1687',
    title: 'The Red King',
    genre: 'Supernatural',
    views_count: '27M',
    subscribed_count: '818,806',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190725_100/1564005257797LxMxC_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/luggage/list?title_no=1642',
    title: 'Luggage',
    genre: 'Fantasy',
    views_count: '2.4M',
    subscribed_count: '80,787',
    rating: '8.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190606_91/1559769182290P4oLJ_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/the-world-where-i-belong/list?title_no=1318',
    title: 'The World Where I Belong',
    genre: 'Supernatural',
    views_count: '9.2M',
    subscribed_count: '329,191',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_60/1611710005266VYHFy_JPEG/8The-World-Where-I-Belong-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/cupids-arrows/list?title_no=1538',
    title: "Cupid's Arrows",
    genre: 'Romance',
    views_count: '3.9M',
    subscribed_count: '93,810',
    rating: '9.27',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190207_297/15494861638937g4tJ_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/kill-the-dragon/list?title_no=4583',
    title: 'Kill the Dragon',
    genre: 'Action',
    views_count: '4.2M',
    subscribed_count: '199,890',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220730_20/16591430933536Xwon_JPEG/0KilltheDragon_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/gates-of-hell/list?title_no=2760',
    title: 'Gates of Hell',
    genre: 'Thriller',
    views_count: '1M',
    subscribed_count: '83,666',
    rating: '9.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220928_264/16643278018709t5OU_JPEG/8Gates+of+Hell_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/pyramid-game/list?title_no=2277',
    title: 'Pyramid Game',
    genre: 'Drama',
    views_count: '12.7M',
    subscribed_count: '240,540',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210217_5/1613520877710KUQHl_JPEG/1PyramidGame_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/sid/list?title_no=497',
    title: 'S.I.D.',
    genre: 'Supernatural',
    views_count: '27.5M',
    subscribed_count: '293,075',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150616_157/1434447531978G9bLR_JPEG/1+28529.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/the-hip-guy/list?title_no=2577',
    title: 'The Hip Guy',
    genre: 'Comedy',
    views_count: '9.8M',
    subscribed_count: '238,966',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210402_273/1617323604293f5ROF_JPEG/6TheHipGuy_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/swimming-lessons-for-a-mermaid/list?title_no=1912',
    title: 'Swimming Lessons for a Mermaid',
    genre: 'Romance',
    views_count: '56.2M',
    subscribed_count: '786,808',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210217_145/1613499900454HnY7X_JPEG/3SLFAM_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/not-even-bones/list?title_no=1756',
    title: 'Not Even Bones',
    genre: 'Thriller',
    views_count: '120.7M',
    subscribed_count: '1.8M',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210626_62/1624641312439ABewh_JPEG/1NEB_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/winter-woods/list?title_no=344',
    title: 'Winter Woods',
    genre: 'Drama',
    views_count: '70.4M',
    subscribed_count: '748,322',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160108_292/1452239327586VDcSf_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/til-debt-do-us-part/list?title_no=3115',
    title: "'Til Debt Do Us Part",
    genre: 'Romance',
    views_count: '20.5M',
    subscribed_count: '449,454',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220224_190/164564771621500shG_JPEG/4TDDUP_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/da-yomanville-gang/list?title_no=1578',
    title: 'Da Yomanville Gang',
    genre: 'Drama',
    views_count: '20.2M',
    subscribed_count: '236,644',
    rating: '9.17',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190629_175/1561749583514qKRks_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/her-mannequin/list?title_no=2875',
    title: 'Her Mannequin',
    genre: 'Romance',
    views_count: '4M',
    subscribed_count: '251,449',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210610_249/1623281254715tiYTD_JPEG/0HerMannequin_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/shadow-bride/list?title_no=2618',
    title: 'Shadow Bride',
    genre: 'Romance',
    views_count: '19.5M',
    subscribed_count: '427,406',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210407_62/1617747435309cdYFO_JPEG/7ShadowBride_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/matchmaker-hero/list?title_no=1569',
    title: 'Matchmaker Hero',
    genre: 'Sci-fi',
    views_count: '10.8M',
    subscribed_count: '351,232',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190326_251/1553540265585WHJhA_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-bad-guys/list?title_no=701',
    title: 'The Badguys',
    genre: 'Superhero',
    views_count: '5.8M',
    subscribed_count: '104,260',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160628_189/1467104827487IC4PR_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-prince-of-southland/list?title_no=2522',
    title: 'The Prince of Southland',
    genre: 'Romance',
    views_count: '21.9M',
    subscribed_count: '401,089',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220622_152/1655831544256Uxlwn_JPEG/1ThePrinceOfSouthland_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/hellbound/list?title_no=3598',
    title: 'Hellbound',
    genre: 'Thriller',
    views_count: '2.5M',
    subscribed_count: '202,214',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211116_164/1636995762689Vw7QJ_JPEG/2Hellbound_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/our-resident-exorcist/list?title_no=4673',
    title: 'Our Resident Exorcist',
    genre: 'Action',
    views_count: '636,629',
    subscribed_count: '81,058',
    rating: '8.98',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221027_83/16668132173426EMpo_JPEG/8OurResidentExorcist_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-academys-undercover-professor/list?title_no=4636',
    title: "The Academy's Undercover Professor",
    genre: 'Fantasy',
    views_count: '3.3M',
    subscribed_count: '263,652',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220915_219/1663201799763PwT4D_JPEG/0TAUP_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/hand-jumper/list?title_no=2702',
    title: 'Hand Jumper',
    genre: 'Thriller',
    views_count: '10.3M',
    subscribed_count: '381,829',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220316_146/1647411390556b4pPA_JPEG/2HandJumper_landingpage_mobileV2.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/ghost-theater/list?title_no=1911',
    title: 'Ghost Theater',
    genre: 'Drama',
    views_count: '16M',
    subscribed_count: '406,494',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200220_210/15821664224741kcEQ_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/soul-cartel/list?title_no=72',
    title: 'SOUL CARTEL',
    genre: 'Fantasy',
    views_count: '31.3M',
    subscribed_count: '234,463',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_283/1404270725266fQYKW_JPEG/27_EC868CEC9AB8ECB9B4EBA5B4ED8594.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/shotgun-boy/list?title_no=2534',
    title: 'Shotgun Boy',
    genre: 'Thriller',
    views_count: '40.7M',
    subscribed_count: '916,368',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210311_253/16154323881036jfOL_JPEG/3ShotgunBoy_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/gremoryland/list?title_no=1893',
    title: 'GremoryLand',
    genre: 'Horror',
    views_count: '22.6M',
    subscribed_count: '413,772',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200206_103/1580930607999JGQr6_JPEG/mail.navercorp.com.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/plum/list?title_no=1605',
    title: 'Plum',
    genre: 'Sports',
    views_count: '6.6M',
    subscribed_count: '126,826',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190613_226/1560362896319XKtVf_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/like-wind-on-a-dry-branch/list?title_no=2405',
    title: 'Like Wind on a Dry Branch',
    genre: 'Fantasy',
    views_count: '81.5M',
    subscribed_count: '1.4M',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_269/1611696215501kcdiH_JPEG/3LikeWindonaDryBranch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/xinker/list?title_no=541',
    title: 'XINK3R',
    genre: 'Superhero',
    views_count: '13.1M',
    subscribed_count: '122,681',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_227/1611710217905Pat8k_JPEG/6Xinker-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-witch-and-the-bull/list?title_no=1892',
    title: 'The Witch and The Bull',
    genre: 'Fantasy',
    views_count: '57.3M',
    subscribed_count: '897,750',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220721_69/1658353782631m7f8L_JPEG/1Thewitchandthebull_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/inarime/list?title_no=675',
    title: 'Inarime',
    genre: 'Superhero',
    views_count: '2.8M',
    subscribed_count: '103,294',
    rating: '8.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160926_266/1474854719631ue4sn_JPEG/details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/killer-bang-the-first-kill/list?title_no=4174',
    title: 'Killer Bang: The First Kill',
    genre: 'Action',
    views_count: '740,314',
    subscribed_count: '32,112',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_150/16512801680561URaf_JPEG/7KillerBangTheFirstKill_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/andy-bass/list?title_no=2284',
    title: 'Andy Bass',
    genre: 'Comedy',
    views_count: '12.2M',
    subscribed_count: '168,978',
    rating: '9.32',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210507_96/1620324713425loeap_JPEG/2AndyBass_update_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/chasing-tails/list?title_no=3440',
    title: 'Chasing Tails',
    genre: 'Mystery',
    views_count: '7.9M',
    subscribed_count: '234,153',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211020_3/1634661602266rUwyo_JPEG/5Chasing+Tails_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/the-secrets-of-the-willson-family/list?title_no=4696',
    title: 'The Secrets ofthe Willson Family',
    genre: 'Mystery',
    views_count: '931,468',
    subscribed_count: '86,527',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221029_193/1666995085794lMClf_JPEG/0The_Secrets_of_the_Willson_Family_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/marionetta/list?title_no=4425',
    title: 'Marionetta',
    genre: 'Fantasy',
    views_count: '1.9M',
    subscribed_count: '246,471',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221221_257/16715911124069ygIW_JPEG/7Marionetta_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/psychic-studies/list?title_no=3907',
    title: 'Psychic Studies',
    genre: 'Action',
    views_count: '2.8M',
    subscribed_count: '124,512',
    rating: '8.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220208_193/16442628235069dooP_JPEG/6PsychicStudies_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/wolfsbane/list?title_no=1826',
    title: 'Wolfsbane',
    genre: 'Horror',
    views_count: '1.3M',
    subscribed_count: '71,649',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191203_73/1575324601884y7lXd_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/protect-the-knight/list?title_no=3384',
    title: 'Protect the Knight',
    genre: 'Fantasy',
    views_count: '3.8M',
    subscribed_count: '148,925',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210908_74/16310762563816BfhB_JPEG/7ProtectTheKnight_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/teenage-dragon/list?title_no=4188',
    title: 'Teenage Dragon',
    genre: 'Comedy',
    views_count: '1.7M',
    subscribed_count: '61,089',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220604_76/1654307080156FllK0_JPEG/2TeenageDragon_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/hero-killer/list?title_no=2745',
    title: 'Hero Killer',
    genre: 'Action',
    views_count: '37.1M',
    subscribed_count: '737,394',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210430_31/1619742184853MleU1_JPEG/0HeroKiller_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/as-per-usual/list?title_no=599',
    title: 'As Per Usual',
    genre: 'Slice of life',
    views_count: '116M',
    subscribed_count: '490,117',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160115_244/145285020649054cy4_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/hanlim-gym/list?title_no=2850',
    title: 'Hanlim Gym',
    genre: 'Sports',
    views_count: '11M',
    subscribed_count: '216,059',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210611_144/1623377022386uLOuS_JPEG/1HanlimGym_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/delusion/list?title_no=2470',
    title: 'Delusion',
    genre: 'Thriller',
    views_count: '9M',
    subscribed_count: '256,331',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210324_42/1616547679872gm9GO_JPEG/5Delusion_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/dearx/list?title_no=2503',
    title: 'Dear X',
    genre: 'Thriller',
    views_count: '7.6M',
    subscribed_count: '258,879',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210408_66/1617833225027MDc5b_JPEG/2DearX_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=3596',
    title: 'The Greatest Estate Developer',
    genre: 'Fantasy',
    views_count: '17.6M',
    subscribed_count: '320,621',
    rating: '9.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211116_1/1637004313334y7KiF_JPEG/8The+Greatest+Estate+Developer_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/undeaded/list?title_no=468',
    title: 'UndeadEd',
    genre: 'Supernatural',
    views_count: '27.7M',
    subscribed_count: '133,014',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150508_208/1431074945093NQmoq_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/beetle-hands/list?title_no=2247',
    title: 'Beetle Hands',
    genre: 'Horror',
    views_count: '2.8M',
    subscribed_count: '134,643',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201222_147/160858392400243WCB_JPEG/4beetlehands_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/ordeal/list?title_no=2729',
    title: 'Ordeal',
    genre: 'Action',
    views_count: '14.7M',
    subscribed_count: '336,170',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210729_269/1627495360518RcMcP_JPEG/3OrdealLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/x-and-ash/list?title_no=3992',
    title: 'X & Ash',
    genre: 'Action',
    views_count: '3.7M',
    subscribed_count: '193,943',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221004_120/1664821422754V2Y6j_JPEG/8c2e91cd-711d-4323-8d17-60b04d38e3921986179422889974621.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/sf/in-the-bleak-midwinter/list?title_no=1946',
    title: 'In the Bleak Midwinter;',
    genre: 'Sci-fi',
    views_count: '26.3M',
    subscribed_count: '636,663',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220727_233/1658864511328umTF3_JPEG/5IBM_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/a-summer-nights-dream/list?title_no=2956',
    title: "A Summer Night's Dream",
    genre: 'Romance',
    views_count: '14.5M',
    subscribed_count: '420,889',
    rating: '8.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210708_145/16256851148770Da6D_JPEG/6A+Summer+Night27s+Dream_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/soul-gear/list?title_no=4473',
    title: 'Soul Gear',
    genre: 'Action',
    views_count: '420,802',
    subscribed_count: '49,499',
    rating: '8.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221210_184/1670632599402NgCAM_JPEG/6Soul_Gear_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/phantom-paradise/list?title_no=1250',
    title: 'Phantom Paradise',
    genre: 'Fantasy',
    views_count: '44.1M',
    subscribed_count: '633,779',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171214_175/1513231225076vVs2R_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/senorita-cometa/list?title_no=3387',
    title: 'Se\u00f1orita Cometa',
    genre: 'Mystery',
    views_count: '4.2M',
    subscribed_count: '191,582',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220322_80/16478998100411NyQs_JPEG/5SenCC83orita+Cometa_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/locker-opener/list?title_no=2515',
    title: 'Locker & Opener',
    genre: 'Mystery',
    views_count: '3.9M',
    subscribed_count: '164,714',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210306_200/1614968706083w8N6B_JPEG/7LockersandOpener_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/to-my-first-love/list?title_no=5064',
    title: 'To My First Love',
    genre: 'Romance',
    views_count: '1M',
    subscribed_count: '177,405',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221227_169/1672083157376JaDCx_JPEG/6To_My_First_Love_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/caster/list?title_no=1461',
    title: 'Caster',
    genre: 'Action',
    views_count: '858,777',
    subscribed_count: '49,894',
    rating: '9.04',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181019_45/153989568127021upu_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/blood-of-the-butterfly/list?title_no=3162',
    title: 'The Blood of the Butterfly',
    genre: 'Fantasy',
    views_count: '14.7M',
    subscribed_count: '455,064',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210729_71/1627507562259pjLyf_JPEG/4TheBloodoftheButterflyLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-prenup/list?title_no=4006',
    title: 'The Prenup',
    genre: 'Romance',
    views_count: '7.4M',
    subscribed_count: '253,155',
    rating: '8.11',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220303_17/1646300421652MXyxC_JPEG/9ThePrenup_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/a-heart-for-the-emperor/list?title_no=4269',
    title: 'A Heart for the Emperor',
    genre: 'Romance',
    views_count: '4.8M',
    subscribed_count: '189,007',
    rating: '6.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220504_150/1651617343826pLQMd_JPEG/3HeartforEmperor_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/noblesse-spin-off/list?title_no=608',
    title: "Noblesse: Rai's Adventure",
    genre: 'Action',
    views_count: '8M',
    subscribed_count: '409,246',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160129_17/1454061504525rYpSN_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/hapi-buni/list?title_no=362',
    title: 'HAPI BUNI',
    genre: 'Comedy',
    views_count: '47.3M',
    subscribed_count: '181,144',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141205_19/1417774487884H5L77_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/school-bus-graveyard/list?title_no=2705',
    title: 'School Bus Graveyard',
    genre: 'Thriller',
    views_count: '47.7M',
    subscribed_count: '1M',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210709_280/1625772588431xNuCK_JPEG/4SchoolBusGraveyardLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/melvinas-therapy/list?title_no=1021',
    title: "Melvina's Therapy",
    genre: 'Horror',
    views_count: '27.9M',
    subscribed_count: '441,554',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170427_235/1493273292964HdNsf_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/designated-bully/list?title_no=4866',
    title: 'Designated Bully',
    genre: 'Action',
    views_count: '8.4M',
    subscribed_count: '380,974',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221117_152/1668642154827HRqTn_JPEG/3Designated_Bully_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/wished-you-were-dead/list?title_no=3591',
    title: 'Wished You Were Dead',
    genre: 'Drama',
    views_count: '36.2M',
    subscribed_count: '797,959',
    rating: '9.11',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211111_151/1636569492591udFgH_JPEG/6WishedYouWereDead_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/scorching-romance/list?title_no=1662',
    title: 'Scorching Romance',
    genre: 'Romance',
    views_count: '45.9M',
    subscribed_count: '612,453',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190629_50/1561742483808YXvI0_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/r-x-rayer-hunter/list?title_no=3480',
    title: 'R-X: RAYER HUNTER',
    genre: 'Sci-fi',
    views_count: '1M',
    subscribed_count: '88,836',
    rating: '8.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211013_154/1634073182381qqKzH_JPEG/6R-X_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/jungle-juice/list?title_no=2480',
    title: 'Jungle Juice',
    genre: 'Action',
    views_count: '62.4M',
    subscribed_count: '1.1M',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210219_146/1613672095474tUhJq_JPEG/0JungleJuice_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/nice-to-meet-you/list?title_no=2066',
    title: 'Nice To Meet You',
    genre: 'Romance',
    views_count: '90.7M',
    subscribed_count: '1.5M',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_162/16116965772887aRNQ_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/cluster-fudge/list?title_no=355',
    title: 'Cluster Fudge',
    genre: 'Slice of life',
    views_count: '5.1M',
    subscribed_count: '27,956',
    rating: '8.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150429_225/1430311006465kU0rj_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/cyberbunk/list?title_no=466',
    title: 'Cyberbunk',
    genre: 'Sci-fi',
    views_count: '3.1M',
    subscribed_count: '47,342',
    rating: '8.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150505_114/1430837643631RIagD_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/parallelcity/list?title_no=2053',
    title: 'Parallel City',
    genre: 'Mystery',
    views_count: '20.2M',
    subscribed_count: '419,493',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200619_269/1592540348562R6dIE_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/leveling-up-my-husband-to-the-max/list?title_no=3311',
    title: 'Leveling UpMy Husband to the Max',
    genre: 'Romance',
    views_count: '43.1M',
    subscribed_count: '841,169',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211013_19/1634093909893EI4oM_JPEG/8Leveling+Up+My+Husband+to+the+Max_launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/shes-hopeless/list?title_no=2767',
    title: "She's Hopeless",
    genre: 'Drama',
    views_count: '46.1M',
    subscribed_count: '1M',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210509_132/1620542173414N4DHB_JPEG/9ShesHopeless_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/our-secret-alliance/list?title_no=4178',
    title: 'Our Secret Alliance',
    genre: 'Romance',
    views_count: '4.7M',
    subscribed_count: '207,161',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220503_100/1651561746892fpbrb_JPEG/5OurSecretAlliance_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/knight-run/list?title_no=67',
    title: 'Knight Run',
    genre: 'Sci-fi',
    views_count: '4.7M',
    subscribed_count: '93,410',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_12/1404270776400nU1U9_JPEG/07_EB8298EC9DB4ED8AB8EB9FB0.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/four-leaf/list?title_no=1454',
    title: 'Four Leaf',
    genre: 'Fantasy',
    views_count: '14.3M',
    subscribed_count: '235,395',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190726_273/1564083441776KTYpz_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/serena/list?title_no=5037',
    title: 'Serena',
    genre: 'Drama',
    views_count: '3.2M',
    subscribed_count: '368,732',
    rating: '8.29',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230104_128/1672792912905RgbjV_JPEG/7Serena_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/microhunter/list?title_no=2320',
    title: 'microHUNTER',
    genre: 'Action',
    views_count: '20.9M',
    subscribed_count: '337,530',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210126_194/16116108448949qas4_JPEG/004_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/mom-im-sorry/list?title_no=2049',
    title: "Mom, I'm Sorry",
    genre: 'Drama',
    views_count: '43.4M',
    subscribed_count: '823,269',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200609_134/1591658939685tFUDh_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-second-lead-syndrome/list?title_no=2757',
    title: 'The Second Lead Syndrome',
    genre: 'Drama',
    views_count: '2.5M',
    subscribed_count: '169,380',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190207_93/1549475738983oCW81_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/romance/freaking-romance/list?title_no=1467',
    title: 'Freaking Romance',
    genre: 'Romance',
    views_count: '281.9M',
    subscribed_count: '3.4M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181021_205/1540083365479ETvSn_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/harmonia/list?title_no=3253',
    title: 'Harmonia',
    genre: 'Sci-fi',
    views_count: '1.3M',
    subscribed_count: '72,112',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211028_273/1635376700912MSdtC_JPEG/3Harmonia_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/hwarang/list?title_no=3911',
    title: 'Hwarang: Flower Knights of the Underworld',
    genre: 'Action',
    views_count: '837,019',
    subscribed_count: '81,742',
    rating: '9.29',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220209_106/1644347936679bvnL2_JPEG/4Hwarang_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/legends-of-silica/list?title_no=4316',
    title: 'Legends of Silica',
    genre: 'Fantasy',
    views_count: '846,488',
    subscribed_count: '57,547',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221008_298/16651610735420dAV8_JPEG/2MicrosoftTeams-image+28229.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/back-to-you/list?title_no=2113',
    title: 'Back to You',
    genre: 'Drama',
    views_count: '39.2M',
    subscribed_count: '731,250',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200721_131/1595294885925Um6eK_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/flowar/list?title_no=2403',
    title: 'FLOWAR',
    genre: 'Sci-fi',
    views_count: '2M',
    subscribed_count: '85,386',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210122_77/1611267032475jUUr8_JPEG/3flowar_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-brooklynite/list?title_no=813',
    title: 'The Brooklynite',
    genre: 'Superhero',
    views_count: '660,651',
    subscribed_count: '21,181',
    rating: '8.97',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161110_206/1478766922483qmH3F_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/before-we-knew-it/list?title_no=1972',
    title: 'Before We Knew It',
    genre: 'Romance',
    views_count: '46.2M',
    subscribed_count: '687,424',
    rating: '8.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200410_168/1586509709460EVS1B_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/mythical-errand/list?title_no=4014',
    title: 'Mythical Errand',
    genre: 'Fantasy',
    views_count: '4.9M',
    subscribed_count: '126,082',
    rating: '8.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220302_65/1646160733870z9mOF_JPEG/5MythicalErrand_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/branching-out/list?title_no=3204',
    title: 'Branching Out',
    genre: 'Fantasy',
    views_count: '797,832',
    subscribed_count: '50,933',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220907_244/1662484452840SBydB_JPEG/9Branching+Out_Launch_landingpage_mobile+copy.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/spirit-hunter/list?title_no=3185',
    title: 'Spirit Hunter',
    genre: 'Supernatural',
    views_count: '3.9M',
    subscribed_count: '155,767',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210728_199/1627436621434hhAng_JPEG/2SpiritHunter_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/lookism/list?title_no=1049',
    title: 'Lookism',
    genre: 'Drama',
    views_count: '699M',
    subscribed_count: '2.9M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221105_240/1667583143202tfffw_JPEG/4_720x1230_Lookism_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-retreats/list?title_no=3792',
    title: 'The Retreats',
    genre: 'Action',
    views_count: '567,728',
    subscribed_count: '41,403',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220129_246/1643399938503aHOEI_JPEG/6TheRetreats_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/waffles-and-pancakes/list?title_no=1310',
    title: 'Waffles & Pancakes',
    genre: 'Slice of life',
    views_count: '71.2M',
    subscribed_count: '206,898',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211024_237/1635075265930F48Fh_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/magic-soda-pop/list?title_no=1947',
    title: 'Magic Soda Pop',
    genre: 'Supernatural',
    views_count: '4.9M',
    subscribed_count: '148,342',
    rating: '8.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200403_278/1585868646712wkMBO_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/ingrid-the-plague-doctor/list?title_no=3415',
    title: 'Ingrid the Plague Doctor',
    genre: 'Slice of life',
    views_count: '5.2M',
    subscribed_count: '98,261',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211103_210/1635890019296zrsDA_PNG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/sithrah/list?title_no=524',
    title: 'Sithrah',
    genre: 'Fantasy',
    views_count: '3.1M',
    subscribed_count: '51,049',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161121_175/1479694749212jCEjg_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/sisters-at-war/list?title_no=4940',
    title: 'Sisters at War',
    genre: 'Drama',
    views_count: '2.1M',
    subscribed_count: '198,992',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221214_27/16709639743735kBKC_JPEG/7SistersAtWar_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/its-on/list?title_no=2958',
    title: "It's On",
    genre: 'Slice of life',
    views_count: '2.6M',
    subscribed_count: '110,621',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220330_168/1648605503948tIJCr_JPEG/0It27sOn_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/magical-12th-graders/list?title_no=90',
    title: 'Magical 12th Graders',
    genre: 'Superhero',
    views_count: '11.8M',
    subscribed_count: '157,659',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150528_175/1432776549090NOKUA_JPEG/1120_EFBE81EFBE9FEFBE88EFBDADEFBDB1EFBE87_EFBDB8EFBE85E+28329.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/untouchable/list?title_no=79',
    title: 'unTouchable',
    genre: 'Romance',
    views_count: '172.2M',
    subscribed_count: '1.3M',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_229/1404270285885reovX_JPEG/19_EC96B8ED84B0ECB298EBB894.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/athena-complex/list?title_no=867',
    title: 'Athena Complex',
    genre: 'Fantasy',
    views_count: '42.7M',
    subscribed_count: '548,827',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210128_161/16117981059785cV9P_JPEG/3Athena+Complex_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/urban-animal/list?title_no=1483',
    title: 'Urban Animal',
    genre: 'Superhero',
    views_count: '34.4M',
    subscribed_count: '528,234',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220831_8/1661900951790emtSt_JPEG/5UrbanAnimal_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/duty-after-school/list?title_no=370',
    title: 'Duty After School',
    genre: 'Sci-fi',
    views_count: '6.2M',
    subscribed_count: '131,467',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141226_289/1419561499212vvRpO_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/brain-anthology/list?title_no=2207',
    title: 'BRAIN Anthology',
    genre: 'Horror',
    views_count: '6.4M',
    subscribed_count: '142,591',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201028_121/1603827411427b1YQs_JPEG/604_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/questism/list?title_no=3767',
    title: 'QUESTISM',
    genre: 'Fantasy',
    views_count: '7.7M',
    subscribed_count: '187,076',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_276/16425590434416Ph4o_JPEG/6QUESTISM_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/new-normal-class-8/list?title_no=100',
    title: 'New Normal: Class 8',
    genre: 'Drama',
    views_count: '41.2M',
    subscribed_count: '233,565',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_291/1404270040614eCdS3_JPEG/35_ED8F89EBB294ED959C8EBB098.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/flow/list?title_no=101',
    title: 'Flow',
    genre: 'Fantasy',
    views_count: '65.3M',
    subscribed_count: '716,526',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150116_282/1421399916499fOdtx_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/the-last-dimension/list?title_no=3174',
    title: 'The Last Dimension',
    genre: 'Sci-fi',
    views_count: '3.7M',
    subscribed_count: '133,773',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220308_203/1646676937319r3Ebl_JPEG/0TheLastDimension_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-first-hunter/list?title_no=3040',
    title: 'The First Hunter',
    genre: 'Action',
    views_count: '8.1M',
    subscribed_count: '218,873',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210707_53/1625620448619OB5Vm_JPEG/9SeriesLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/dents/list?title_no=671',
    title: 'Dents',
    genre: 'Sci-fi',
    views_count: '12.5M',
    subscribed_count: '255,423',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180930_59/1538271762915xmAYf_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/a-mark-against-thee/list?title_no=4119',
    title: 'A Mark Against Thee',
    genre: 'Drama',
    views_count: '2.8M',
    subscribed_count: '54,731',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220329_287/1648513029002ATfeN_JPEG/2AMarkAgainstThee_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/double-binded-by-love/list?title_no=3438',
    title: 'Double-Binded By Love',
    genre: 'Romance',
    views_count: '2.5M',
    subscribed_count: '149,011',
    rating: '6.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220406_6/1649181538306nL0dz_JPEG/0DoubleBindedByLove_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/the-danemen/list?title_no=395',
    title: 'The DaneMen',
    genre: 'Comedy',
    views_count: '8.6M',
    subscribed_count: '40,963',
    rating: '9.07',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150302_84/1425295856451Nx4Ce_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/monochrome/list?title_no=2884',
    title: 'MONOCHROME',
    genre: 'Action',
    views_count: '3.2M',
    subscribed_count: '172,524',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211203_94/1638485470470bovx2_JPEG/4Monochrome_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/trash-belongs-in-the-trash-can/list?title_no=4314',
    title: 'Trash Belongs in the Trash Can!',
    genre: 'Romance',
    views_count: '11.6M',
    subscribed_count: '450,803',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220607_116/1654566473105vdUNE_JPEG/0TBITTC_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/dont-hate/list?title_no=1574',
    title: "DON'T HATE",
    genre: 'Comedy',
    views_count: '37.1M',
    subscribed_count: '267,248',
    rating: '9.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190329_15/1553805341233HQI5W_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/i-dont-want-this-kind-of-hero/list?title_no=98',
    title: "I Don't Want This Kind of Hero",
    genre: 'Superhero',
    views_count: '40.1M',
    subscribed_count: '371,593',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_28/1404270028382bG3TM_JPEG/26_EC9DB4EB9FB0EC9881EC9B85EC9D80EC8BABEC96B4.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/live-forever/list?title_no=1312',
    title: 'Live Forever',
    genre: 'Thriller',
    views_count: '9.3M',
    subscribed_count: '261,262',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180215_53/1518651131993LrCwE_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/bite-me/list?title_no=1019',
    title: 'Bite Me',
    genre: 'Thriller',
    views_count: '36M',
    subscribed_count: '433,702',
    rating: '8.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170426_168/1493182678753l9rT0_JPEG/M_details_preview.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/zombie-ship/list?title_no=3350',
    title: 'Zombie Ship',
    genre: 'Horror',
    views_count: '3M',
    subscribed_count: '138,220',
    rating: '6.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220311_56/1646969234376Mbw38_JPEG/7ZombieShip_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/neolithic-girl/list?title_no=2851',
    title: 'Neolithic Girl',
    genre: 'Fantasy',
    views_count: '6.8M',
    subscribed_count: '277,203',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210612_232/1623448124593kNTFO_JPEG/8NeolithicGirlLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-dear-cold-blooded-king/list?title_no=961',
    title: 'My Dear Cold-Blooded King',
    genre: 'Romance',
    views_count: '293.7M',
    subscribed_count: '2M',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170303_204/1488518926242n3tks_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/tacit/list?title_no=3178',
    title: 'TACIT',
    genre: 'Action',
    views_count: '5.5M',
    subscribed_count: '240,169',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210729_61/1627507765945Os70V_JPEG/3TACIT_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/safely-endangered/list?title_no=352',
    title: 'Safely Endangered',
    genre: 'Comedy',
    views_count: '401.9M',
    subscribed_count: '1.1M',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201208_177/1607363674045k7PUn_JPEG/6M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/keys/list?title_no=2742',
    title: 'Keys',
    genre: 'Action',
    views_count: '1.2M',
    subscribed_count: '131,299',
    rating: '8.94',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220805_235/16596636199118Q0iK_JPEG/3Keys_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/polidiocy/list?title_no=676',
    title: 'Polidiocy',
    genre: 'Comedy',
    views_count: '1.7M',
    subscribed_count: '32,323',
    rating: '7.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160518_275/14635586492841P5mY_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/unlovable-replacement/list?title_no=1762',
    title: 'Unlovable Replacement',
    genre: 'Romance',
    views_count: '94.2M',
    subscribed_count: '1.7M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191029_241/1572308375828yJsD4_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-god-of-high-school/list?title_no=66',
    title: 'The God of High School',
    genre: 'Action',
    views_count: '774.8M',
    subscribed_count: '2.8M',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210213_298/1613180340066687Al_JPEG/1theGodofHighSchool__mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/from-morning-to-night/list?title_no=3207',
    title: 'From Morning to Night',
    genre: 'Fantasy',
    views_count: '1.7M',
    subscribed_count: '132,849',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210806_31/1628209957218iH9OU_JPEG/1FromMorningtoNight_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/muted/list?title_no=1566',
    title: 'Muted',
    genre: 'Supernatural',
    views_count: '60.9M',
    subscribed_count: '783,544',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200508_226/1588896989775Igrew_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/pigpen/list?title_no=2275',
    title: 'PIGPEN',
    genre: 'Thriller',
    views_count: '16M',
    subscribed_count: '376,669',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201020_210/1603158620511WbJn4_JPEG/404_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/snailogy/list?title_no=387',
    title: 'Snailogy',
    genre: 'Slice of life',
    views_count: '34.6M',
    subscribed_count: '354,416',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200115_263/1579050630897B0Eym_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/its-mine/list?title_no=2010',
    title: "It's Mine",
    genre: 'Thriller',
    views_count: '95.8M',
    subscribed_count: '1.2M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_267/1611706477751xp4W9_JPEG/3Its-Mine-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/spirit-fingers/list?title_no=1577',
    title: 'Spirit Fingers',
    genre: 'Drama',
    views_count: '34M',
    subscribed_count: '340,997',
    rating: '9.91',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190504_198/1556933756694LU9U3_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95',
    title: 'Tower of God',
    genre: 'Fantasy',
    views_count: '1B',
    subscribed_count: '3.3M',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_106/1611705089085OYcUB_JPEG/1Tower-of-God-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/castle-swimmer/list?title_no=1499',
    title: 'Castle Swimmer',
    genre: 'Fantasy',
    views_count: '264.5M',
    subscribed_count: '2.7M',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220925_224/1664072882476IuGaf_JPEG/8CastleSwimmer_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/my-boo/list?title_no=1185',
    title: 'My Boo',
    genre: 'Supernatural',
    views_count: '48.1M',
    subscribed_count: '923,085',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171001_229/1506831504188C7omx_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/hellper/list?title_no=185',
    title: 'Hellper',
    genre: 'Fantasy',
    views_count: '24.2M',
    subscribed_count: '186,780',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140710_250/14049786846824UO2a_JPEG/14_ED97ACED8DBC.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/wind-breaker/list?title_no=372',
    title: 'Wind Breaker',
    genre: 'Sports',
    views_count: '360.1M',
    subscribed_count: '1.7M',
    rating: '9.91',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200330_145/1585526479145tTKa2_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/nexus-point/list?title_no=2965',
    title: 'Nexus Point',
    genre: 'Sci-fi',
    views_count: '468,222',
    subscribed_count: '34,309',
    rating: '8.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220625_183/1656122405447rNYsn_JPEG/6NexusPoint_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/stagtown/list?title_no=2532',
    title: 'Stagtown',
    genre: 'Horror',
    views_count: '13.3M',
    subscribed_count: '297,772',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210307_47/1615105314492Ds8JN_JPEG/3Stagertown_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/room-of-swords/list?title_no=1261',
    title: 'Room of Swords',
    genre: 'Sci-fi',
    views_count: '71.6M',
    subscribed_count: '766,711',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181214_183/1544745788672VY5EA_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/rotten/list?title_no=2134',
    title: 'Rotten',
    genre: 'Thriller',
    views_count: '13M',
    subscribed_count: '428,320',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200818_136/1597690421738neomF_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/console-her/list?title_no=3054',
    title: 'Console Her',
    genre: 'Romance',
    views_count: '1.6M',
    subscribed_count: '80,188',
    rating: '8.96',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220629_126/1656458465868beKpG_JPEG/7ConsoleHer_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/get-schooled/list?title_no=2684',
    title: 'Get Schooled',
    genre: 'Drama',
    views_count: '69.9M',
    subscribed_count: '1.2M',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_141/1620085451198JaQAz_JPEG/8GetSchooled_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/night-owls-and-summer-skies/list?title_no=4747',
    title: 'Night Owls & Summer Skies',
    genre: 'Romance',
    views_count: '8.8M',
    subscribed_count: '374,806',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220920_118/1663614015341mmiVL_JPEG/1NightOwls26SummerSkies_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/haxor/list?title_no=1325',
    title: 'Haxor',
    genre: 'Sci-fi',
    views_count: '1.9M',
    subscribed_count: '93,613',
    rating: '9.11',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180306_219/1520304159969M7EbN_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/rewriting-the-villainess/list?title_no=4093',
    title: 'Rewriting the Villainess',
    genre: 'Fantasy',
    views_count: '8.7M',
    subscribed_count: '346,060',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220405_143/16491077390946qNHM_JPEG/5Rewriting+the+Villainess_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/jacksons-diary/list?title_no=2446',
    title: "Jackson's Diary",
    genre: 'Supernatural',
    views_count: '62.8M',
    subscribed_count: '881,772',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220625_291/1656112117810GANWB_JPEG/1Jackson27sDiary_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/bts-save-me/list?title_no=1514',
    title: 'SAVE ME',
    genre: 'Drama',
    views_count: '56.5M',
    subscribed_count: '2.4M',
    rating: '9.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190116_25/1547609292175fIUzy_JPEG/04_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/webtoon-now/list?title_no=2025',
    title: 'WEBTOON Now',
    genre: 'Informative',
    views_count: '45.2M',
    subscribed_count: '538,354',
    rating: '9.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200727_155/1595820398611Jfvl6_JPEG/WEBTOON+Now_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/crown-of-feathers/list?title_no=2126',
    title: 'Crown of Feathers',
    genre: 'Fantasy',
    views_count: '10.1M',
    subscribed_count: '301,539',
    rating: '9.13',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200918_70/16003889521144COvj_JPEG/704_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-younger-brothers-friend/list?title_no=3163',
    title: "My Younger Brother's Friend",
    genre: 'Romance',
    views_count: '16.7M',
    subscribed_count: '378,894',
    rating: '9.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220708_160/1657216881937eftcI_JPEG/8MyYoungerBrothersFriend_landingpage_mobile_Season2.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/lost-in-translation/list?title_no=1882',
    title: 'Lost in Translation',
    genre: 'Drama',
    views_count: '47.6M',
    subscribed_count: '661,072',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211208_105/16389178574567WJ3G_JPEG/3LostInTranslation_mobile_landingpage_ver2.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/catharsis/list?title_no=396',
    title: 'Catharsis',
    genre: 'Fantasy',
    views_count: '61.4M',
    subscribed_count: '638,753',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150303_116/1425369224408pODIL_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/so-youre-raising-a-warrior/list?title_no=3175',
    title: "So You're Raising a Warrior",
    genre: 'Fantasy',
    views_count: '9.1M',
    subscribed_count: '253,277',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210820_156/1629415864914URHAl_JPEG/7SoYou27reRaisingaWarrior_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/teenage-mercenary/list?title_no=2677',
    title: 'Teenage Mercenary',
    genre: 'Action',
    views_count: '89M',
    subscribed_count: '1.3M',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210430_255/1619747419130UoN40_JPEG/5TeenageMercenary_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/westwood-vibrato/list?title_no=537',
    title: 'Westwood Vibrato',
    genre: 'Drama',
    views_count: '2.8M',
    subscribed_count: '62,035',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150908_253/144170120618826rv5_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/reincarnated-as-an-unruly-heir/list?title_no=3597',
    title: 'Reincarnated as anUnruly Heir',
    genre: 'Action',
    views_count: '8.5M',
    subscribed_count: '237,079',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220610_97/1654799561470IfwOC_JPEG/8RAAUH_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/the-cliff/list?title_no=80',
    title: 'The Cliff',
    genre: 'Thriller',
    views_count: '2.3M',
    subscribed_count: '78,400',
    rating: '9.32',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_52/1404270273146xPr8J_JPEG/40_ECA088EBB2BDEAB780.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/perfect-marriage-revenge/list?title_no=3484',
    title: 'Perfect Marriage Revenge',
    genre: 'Romance',
    views_count: '39.9M',
    subscribed_count: '799,128',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211012_168/16339782860274Hjd2_JPEG/4PerfectMarriageRevenge_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/money-game/list?title_no=3254',
    title: 'Money Game',
    genre: 'Thriller',
    views_count: '2.6M',
    subscribed_count: '82,731',
    rating: '9.02',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220319_185/16476330499755BYiT_JPEG/3MoneyGameLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-horizon/list?title_no=3141',
    title: 'The Horizon',
    genre: 'Drama',
    views_count: '3.3M',
    subscribed_count: '241,602',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210731_89/16276820757379dkiQ_JPEG/6TheHorizon_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/apocalyptic-horseplay/list?title_no=635',
    title: 'Apocalyptic Horseplay',
    genre: 'Supernatural',
    views_count: '16.3M',
    subscribed_count: '146,093',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170306_165/1488792490232oC3Ct_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/red-compass/list?title_no=3761',
    title: 'Red Compass',
    genre: 'Action',
    views_count: '295,073',
    subscribed_count: '34,290',
    rating: '8.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221006_200/16649980943476tSr1_JPEG/9RedCompass_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/all-of-us-are-dead/list?title_no=2810',
    title: 'All of Us Are Dead',
    genre: 'Thriller',
    views_count: '17.7M',
    subscribed_count: '485,319',
    rating: '9.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220130_125/1643488945583tsonb_PNG/0AllofUsAreDead_Banners_JDAllofUsAreDead_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-kiss-bet/list?title_no=1617',
    title: 'The Kiss Bet',
    genre: 'Romance',
    views_count: '125M',
    subscribed_count: '1.5M',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200606_156/1591401761245XVlsC_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-fox-club/list?title_no=4079',
    title: 'The Fox Club',
    genre: 'Romance',
    views_count: '5.2M',
    subscribed_count: '144,670',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220323_110/1647989380917ySs4R_JPEG/3TheFoxClub_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/when-jasy-whistles/list?title_no=2721',
    title: 'When Jasy Whistles',
    genre: 'Fantasy',
    views_count: '27.9M',
    subscribed_count: '647,621',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210721_218/1626812540060fgeCY_JPEG/8WhenJasyWhistlesLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/elf-and-warrior/list?title_no=908',
    title: 'Elf & Warrior',
    genre: 'Fantasy',
    views_count: '28.2M',
    subscribed_count: '234,618',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161219_92/1482141448253Gwutc_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/loser-coin/list?title_no=4177',
    title: 'Loser Coin',
    genre: 'Drama',
    views_count: '2M',
    subscribed_count: '85,576',
    rating: '8.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220504_181/1651639865972trIzD_JPEG/4Loser+Coin_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-nuna-at-our-office/list?title_no=3089',
    title: 'The Nuna at Our Office',
    genre: 'Drama',
    views_count: '6.5M',
    subscribed_count: '240,304',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210720_9/1626712572801TDx0O_PNG/7TheNunaAtOurOffice_mobile_landingpage+28129.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-wicked-heroines-stepmother/list?title_no=3039',
    title: "Tricked into Becoming the Heroine's Stepmother",
    genre: 'Fantasy',
    views_count: '46.8M',
    subscribed_count: '1M',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_34/1626210931267CfVAx_JPEG/4Tricked+into+Becoming+the+Heroine27s+StepmotherLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/tickle-town/list?title_no=428',
    title: 'Tickle Town',
    genre: 'Comedy',
    views_count: '2.7M',
    subscribed_count: '16,185',
    rating: '6.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150416_42/1429111096024h2cGf_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/saving-a-mercenary-unit-from-bankruptcy/list?title_no=4686',
    title: 'Saving a Mercenary Unitfrom Bankruptcy',
    genre: 'Fantasy',
    views_count: '1.2M',
    subscribed_count: '127,899',
    rating: '9.02',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221130_120/1669780606623lVuqA_JPEG/8SMUBankruptcy_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-wendybird/list?title_no=2546',
    title: 'The Wendybird',
    genre: 'Fantasy',
    views_count: '4.5M',
    subscribed_count: '165,807',
    rating: '8.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210318_223/1616052200339fKqG0_JPEG/0WendyBird_mobile_landingpage_1.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/to-the-stars-and-back/list?title_no=4047',
    title: 'To The Stars and Back',
    genre: 'Slice of life',
    views_count: '36.5M',
    subscribed_count: '496,211',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230124_112/1674516732536j0oLG_JPEG/2TtSaB_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/jumping-over/list?title_no=3238',
    title: 'Jumping Over',
    genre: 'Romance',
    views_count: '3.6M',
    subscribed_count: '70,220',
    rating: '8.99',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220610_248/1654802340870mYcpm_JPEG/1JumpingOver_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/space-boy/list?title_no=400',
    title: 'Space Boy',
    genre: 'Sci-fi',
    views_count: '79.8M',
    subscribed_count: '450,755',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_268/1611703245054oIsKk_JPEG/7Space-Boy-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dark-moon-the-blood-altar/list?title_no=3785',
    title: 'DARK MOON:THE BLOOD ALTAR',
    genre: 'Fantasy',
    views_count: '34M',
    subscribed_count: '1.5M',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220828_272/1661622147590rWCGz_JPEG/828720x123029M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/amid-the-changing-seasons/list?title_no=5021',
    title: 'Amid the Changing Seasons',
    genre: 'Romance',
    views_count: '427,733',
    subscribed_count: '81,952',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221223_124/1671759315173rFtWu_JPEG/5AmidTheChangingSeasons_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/reawaken-man/list?title_no=3173',
    title: 'REAWAKENED MAN',
    genre: 'Action',
    views_count: '5.8M',
    subscribed_count: '195,692',
    rating: '9.45',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211026_221/1635183573401cQqDL_JPEG/1ReawakenedMan_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/the-dummys-dummy/list?title_no=2874',
    title: "The Dummy's Dummy",
    genre: 'Horror',
    views_count: '4.5M',
    subscribed_count: '160,234',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_289/1642559353933l73Ns_JPEG/8TheDummysDummy_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/savior/list?title_no=3413',
    title: 'Savior',
    genre: 'Fantasy',
    views_count: '3.9M',
    subscribed_count: '190,395',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210909_257/1631125849064YgtWO_JPEG/1Savior_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/blood-ink/list?title_no=1490',
    title: 'Blood-Ink',
    genre: 'Action',
    views_count: '52.9M',
    subscribed_count: '663,151',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200702_22/1593668134909hY8AJ_JPEG/Mobile-Header.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/my-inlaws-are-obsessed-with-me/list?title_no=3918',
    title: 'My In-Laws areObsessed with Me',
    genre: 'Fantasy',
    views_count: '32.4M',
    subscribed_count: '748,390',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220215_106/1644892581654FjWfR_PNG/0MyInlawsAreObsessedWithMe_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/rob/list?title_no=2479',
    title: 'ROB',
    genre: 'Fantasy',
    views_count: '509,899',
    subscribed_count: '55,863',
    rating: '8.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210325_2/1616608562986uvr6Q_JPEG/1ROB_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/mercworks/list?title_no=426',
    title: 'MercWorks',
    genre: 'Slice of life',
    views_count: '9.1M',
    subscribed_count: '55,702',
    rating: '9.12',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170607_17/1496799627024ycWkC_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/subtle-disaster/list?title_no=350',
    title: 'Subtle Disaster',
    genre: 'Drama',
    views_count: '3.5M',
    subscribed_count: '49,633',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141125_62/1416897693090GRh9F_JPEG/EC9EACEC9599EC9D80EBAFB8EBAC98ED9598EAB28C_EC9E91ED92.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/1111-animals/list?title_no=437',
    title: '1111 Animals',
    genre: 'Comedy',
    views_count: '7M',
    subscribed_count: '49,236',
    rating: '8.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160829_207/1472422018105gqq7a_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/to-do-list/list?title_no=4568',
    title: 'To-Do List',
    genre: 'Romance',
    views_count: '327,277',
    subscribed_count: '33,396',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221223_119/1671743130073dLhs4_JPEG/2ToDoList_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/age-matters/list?title_no=1364',
    title: 'Age Matters',
    genre: 'Romance',
    views_count: '390.1M',
    subscribed_count: '3.6M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200701_210/1593554985327AMJjG_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/act-like-you-love-me/list?title_no=2521',
    title: 'Act Like You Love Me!',
    genre: 'Romance',
    views_count: '65.8M',
    subscribed_count: '1.1M',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210310_145/1615340273207eHc1L_JPEG/9ALYLM_mobile_landingpage_1.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/unstable/list?title_no=4092',
    title: 'Unstable',
    genre: 'Supernatural',
    views_count: '561,842',
    subscribed_count: '67,407',
    rating: '8.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220908_106/16625872207108hb5e_JPEG/3Unstable_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/if/list?title_no=1925',
    title: 'IF',
    genre: 'Action',
    views_count: '4.4M',
    subscribed_count: '147,200',
    rating: '9.05',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200304_255/158328049726052cg1_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/to-be-ordinary/list?title_no=3246',
    title: 'To Be Ordinary!',
    genre: 'Drama',
    views_count: '2M',
    subscribed_count: '58,919',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210917_156/1631878822220DTGYP_JPEG/6ToBeOrdinaryLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/heavenly-eats/list?title_no=4356',
    title: 'Heavenly Eats',
    genre: 'Comedy',
    views_count: '925,018',
    subscribed_count: '76,533',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220627_180/1656324257640rIkah_JPEG/8HeavenlyEats_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/divine-circumstances/list?title_no=4320',
    title: 'Divine Circumstances',
    genre: 'Romance',
    views_count: '1.9M',
    subscribed_count: '110,900',
    rating: '7.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220920_285/1663635789604U4bO6_JPEG/6DivineCircumstances_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/a-deadbeats-meal/list?title_no=3910',
    title: "A DeadbEAT's Meal",
    genre: 'Slice of life',
    views_count: '2.6M',
    subscribed_count: '111,536',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220208_200/1644267824261vzCAg_JPEG/8ADeadbEATsMeal_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/manager-kim/list?title_no=3917',
    title: 'Manager Kim',
    genre: 'Action',
    views_count: '9.7M',
    subscribed_count: '275,764',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220210_64/16444341299488NHde_JPEG/5ManagerKim_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/everfallen/list?title_no=3762',
    title: 'Everfallen',
    genre: 'Fantasy',
    views_count: '1M',
    subscribed_count: '113,627',
    rating: '9.13',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220728_136/1658973429342AbLik_JPEG/0Everfallen_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/firebrand/list?title_no=877',
    title: 'Firebrand',
    genre: 'Supernatural',
    views_count: '4.9M',
    subscribed_count: '166,938',
    rating: '8.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161129_210/1480396704049e9cJm_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/counting-sheep/list?title_no=3795',
    title: 'Counting Sheep',
    genre: 'Horror',
    views_count: '1.6M',
    subscribed_count: '72,027',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220602_243/16541271138540eb3U_JPEG/2CountingSheep_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/blue/list?title_no=3477',
    title: 'Blue',
    genre: 'Drama',
    views_count: '1.1M',
    subscribed_count: '124,672',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220426_265/1650933464241MLrcs_JPEG/828720x123029Blue_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/ghost-teller/list?title_no=1307',
    title: 'Ghost Teller',
    genre: 'Horror',
    views_count: '53.7M',
    subscribed_count: '1M',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180209_260/1518136656996FmwcK_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/la-tenebrosa-evelyne/list?title_no=3182',
    title: 'Evelyne and the Occult',
    genre: 'Supernatural',
    views_count: '11.4M',
    subscribed_count: '363,854',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_284/16262207964353B0RT_JPEG/3LatenebrosaEvelyne_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/lumine/list?title_no=1022',
    title: 'LUMINE',
    genre: 'Fantasy',
    views_count: '354.9M',
    subscribed_count: '3.2M',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170426_120/1493184406940dBR0K_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/monster-dukes-daughter/list?title_no=4469',
    title: "\bMonster Duke's Daughter",
    genre: 'Fantasy',
    views_count: '9.6M',
    subscribed_count: '361,237',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220809_57/1659991663881BXnqA_JPEG/1MonsterDukesDaughter_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/shiloh/list?title_no=1649',
    title: 'Shiloh',
    genre: 'Thriller',
    views_count: '14.5M',
    subscribed_count: '401,369',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200912_25/15998694025873UcmY_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/blade-of-the-phantom-master/list?title_no=3481',
    title: 'Blade of thePhantom Master',
    genre: 'Action',
    views_count: '1.2M',
    subscribed_count: '42,741',
    rating: '8.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220608_90/1654675212115mVxiW_JPEG/0Blade+of+the+Phantom+Master_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/girls-of-the-wilds/list?title_no=93',
    title: "Girls of the Wild's",
    genre: 'Action',
    views_count: '173.8M',
    subscribed_count: '878,225',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151006_251/1444125110863yQWop_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/muerte-no-escrita/list?title_no=3201',
    title: 'Unwritten Death',
    genre: 'Romance',
    views_count: '8.1M',
    subscribed_count: '232,210',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210728_202/1627433022560Cnakp_JPEG/3UnwrittenDeathLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/romance-101/list?title_no=2406',
    title: 'Romance 101',
    genre: 'Romance',
    views_count: '60.8M',
    subscribed_count: '711,782',
    rating: '9.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201216_199/1608070679758TdeVq_JPEG/9A+Guide+to+Proper+Dating_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/code-helix/list?title_no=3267',
    title: 'CODE HELIX',
    genre: 'Drama',
    views_count: '1.1M',
    subscribed_count: '39,819',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210902_25/1630529973379LzQnC_JPEG/6CodeHelix_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/seasonsofblossom/list?title_no=2509',
    title: 'Seasons of Blossom',
    genre: 'Romance',
    views_count: '64.4M',
    subscribed_count: '1M',
    rating: '9.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220707_266/1657152603537txd9S_JPEG/0SeasonsofBlossom_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/a-good-day-tobe-a-dog/list?title_no=1390',
    title: 'A Good Day to be a Dog',
    genre: 'Romance',
    views_count: '105.4M',
    subscribed_count: '1.3M',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180516_201/1526443735950lqCRB_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/stray-souls/list?title_no=2018',
    title: 'Stray Souls',
    genre: 'Fantasy',
    views_count: '15.4M',
    subscribed_count: '394,992',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210622_200/1624301089970hbz1W_JPEG/1StraySouls_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/high-class-homos/list?title_no=2723',
    title: 'High Class Homos',
    genre: 'Comedy',
    views_count: '87.6M',
    subscribed_count: '1M',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210908_184/1631065913325Bdi6m_JPEG/0High+Class+Homos_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/super-secret/list?title_no=666',
    title: 'Super Secret',
    genre: 'Romance',
    views_count: '212M',
    subscribed_count: '1.8M',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160429_294/1461910598972jqvWr_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/dead-days/list?title_no=293',
    title: 'DEAD DAYS',
    genre: 'Horror',
    views_count: '15.6M',
    subscribed_count: '223,880',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140922_148/1411354302818fxB1J_JPEG/EB8DB0EB939CEB8DB0EC9DB4ECA688_mobileEC9E91ED9288EC8381.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/a-whirlwind-campus-affair/list?title_no=4094',
    title: 'A Whirlwind Campus Affair',
    genre: 'Drama',
    views_count: '6.3M',
    subscribed_count: '219,342',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220331_163/1648664629753kNipT_JPEG/3AWhirlwindCampusAffair_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/god-please-make-me-a-demon/list?title_no=3198',
    title: 'God, Please Make Me a Demon!',
    genre: 'Comedy',
    views_count: '12.6M',
    subscribed_count: '378,523',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210731_129/1627682473184ImVaD_JPEG/4Godpleasemakemeademon_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-newlywed-diary-of-a-witch-and-a-dragon/list?title_no=2448',
    title: 'The Newlywed Diaryof a Witch and a Dragon',
    genre: 'Romance',
    views_count: '44M',
    subscribed_count: '842,200',
    rating: '9.22',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210129_131/1611868137766nbmIC_JPEG/4TheNewlywedDiary_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/twilight-poem/list?title_no=4209',
    title: 'Twilight Poem',
    genre: 'Fantasy',
    views_count: '7.3M',
    subscribed_count: '267,936',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220609_108/16547273175287JzrB_JPEG/6TwilightPoem_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-stories-of-those-around-me/list?title_no=96',
    title: 'The Stories of Those Around Me',
    genre: 'Romance',
    views_count: '17.2M',
    subscribed_count: '256,466',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_270/1404269971405lzuml_JPEG/32_EC9584EB8A94EC82ACEB9E8CEC9DB4EC95BCEAB8B0.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/saphie-one-eyed-cat/list?title_no=670',
    title: 'Saphie: The One-Eyed Cat',
    genre: 'Slice of life',
    views_count: '148.6M',
    subscribed_count: '652,038',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151126_245/1448513509634TxYQx_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/drama/spring-once-again/list?title_no=4262',
    title: 'Spring Once Again',
    genre: 'Drama',
    views_count: '736,359',
    subscribed_count: '55,567',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220614_155/16551590543729xX2l_JPEG/8SpringOnceAgain_landingpage_mobile_ver2.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-doctors-are-out/list?title_no=1910',
    title: 'The Doctors are Out',
    genre: 'Romance',
    views_count: '42.7M',
    subscribed_count: '563,879',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_96/1611697047873kqBco_JPEG/504_EC9E91ED9288EC8381EC84B8_mobile+28229.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/survival-log/list?title_no=4175',
    title: 'Survival Log',
    genre: 'Action',
    views_count: '1.3M',
    subscribed_count: '49,816',
    rating: '8.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_27/16512713978677Y0ms_JPEG/6SurvivalLog_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/city-of-wall/list?title_no=505',
    title: 'City of Walls',
    genre: 'Drama',
    views_count: '463,360',
    subscribed_count: '19,699',
    rating: '7.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150712_21/1436680908099xwFp5_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/fingers/list?title_no=4674',
    title: 'Fingers',
    genre: 'Thriller',
    views_count: '680,265',
    subscribed_count: '57,323',
    rating: '9.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221029_196/16669865261003PwOj_JPEG/8Fingers_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-star-seekers/list?title_no=3786',
    title: 'THE STAR SEEKERS',
    genre: 'Fantasy',
    views_count: '6.7M',
    subscribed_count: '812,938',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220903_76/1662154163473jwKUm_PNG/028720x123029Mobile+Detail+Banner_preview.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/aura-from-another-planet/list?title_no=369',
    title: 'Aura from Another Planet',
    genre: 'Comedy',
    views_count: '4.8M',
    subscribed_count: '51,919',
    rating: '9.24',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141223_68/1419325897465e888D_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-child-of-a-star/list?title_no=4736',
    title: 'The Child of a Star',
    genre: 'Fantasy',
    views_count: '489,211',
    subscribed_count: '64,849',
    rating: '6.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221217_25/1671227000976F9CpJ_JPEG/7TheChildofaStar_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/to-love-your-enemy/list?title_no=2114',
    title: 'To Love Your Enemy',
    genre: 'Romance',
    views_count: '140.5M',
    subscribed_count: '2M',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_70/16116958545724QewP_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile+28229.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/darbi/list?title_no=1098',
    title: 'Darbi',
    genre: 'Action',
    views_count: '37M',
    subscribed_count: '350,710',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180310_8/1520639024994RviLE_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/arma/list?title_no=1640',
    title: 'Arma',
    genre: 'Superhero',
    views_count: '12.3M',
    subscribed_count: '261,842',
    rating: '9.37',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190605_176/1559687654381r1TLO_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/kubera/list?title_no=83',
    title: 'Kubera',
    genre: 'Fantasy',
    views_count: '52.5M',
    subscribed_count: '242,913',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220129_86/1643394999566xFlBc_JPEG/0Kubera_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/murrz/list?title_no=1281',
    title: 'Murrz',
    genre: 'Slice of life',
    views_count: '232.6M',
    subscribed_count: '785,378',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180111_5/1515611555931aYhJG_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/let-me-stay-over-tonight/list?title_no=2683',
    title: 'Let Me Stay Over Tonight!',
    genre: 'Romance',
    views_count: '13.1M',
    subscribed_count: '298,250',
    rating: '9.07',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210430_61/1619743929099WWh4t_JPEG/2Let+me+Stay+Over+Tonight_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/cherry-blossoms/list?title_no=1005',
    title: 'Cherry Blossoms',
    genre: 'Romance',
    views_count: '2.5M',
    subscribed_count: '172,642',
    rating: '9.23',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170413_98/1492084951841LQRdY_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/beyond-virtual/list?title_no=2504',
    title: 'Beyond Virtual',
    genre: 'Drama',
    views_count: '3.6M',
    subscribed_count: '180,735',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210409_56/1617931851352jxg9s_JPEG/0BeyondVirtual_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/be-my-villain/list?title_no=2728',
    title: 'Be My Villain',
    genre: 'Romance',
    views_count: '25.3M',
    subscribed_count: '548,962',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220628_225/1656371219512vvpoh_JPEG/9BeMyVillain_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/happiness/list?title_no=4120',
    title: 'Happiness',
    genre: 'Action',
    views_count: '2.6M',
    subscribed_count: '99,476',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220331_72/1648680440132iQQ00_JPEG/2Happiness_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/yuna-and-kawachan/list?title_no=1840',
    title: 'Yuna & Kawachan',
    genre: 'Drama',
    views_count: '10.2M',
    subscribed_count: '220,569',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201113_99/1605211270645XFaIy_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/1hp-club/list?title_no=2960',
    title: '1HP Club',
    genre: 'Fantasy',
    views_count: '38.4M',
    subscribed_count: '555,303',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_39/1642559213893mBETF_JPEG/31HpClub_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/odd-girl-out/list?title_no=1420',
    title: 'Odd Girl Out',
    genre: 'Drama',
    views_count: '172.3M',
    subscribed_count: '913,172',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180712_67/153133316191043VT1_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/spirits-re/list?title_no=1348',
    title: 'Spirits',
    genre: 'Fantasy',
    views_count: '1.6M',
    subscribed_count: '58,057',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190703_105/1562119345784e1Cre_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/outrage/list?title_no=1450',
    title: 'Outrage',
    genre: 'Superhero',
    views_count: '6.5M',
    subscribed_count: '231,108',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180912_162/1536719985845hPxC3_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/shoot-around/list?title_no=399',
    title: 'ShootAround',
    genre: 'Drama',
    views_count: '26.3M',
    subscribed_count: '169,313',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150601_176/1433153102047GhcgG_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/fluidum/list?title_no=2283',
    title: 'Fluidum',
    genre: 'Drama',
    views_count: '11.3M',
    subscribed_count: '201,871',
    rating: '8.92',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210126_224/1611621639520kbs60_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/to-you-who-doesnt-love-me/list?title_no=4688',
    title: "To You Who Doesn'tLove Me",
    genre: 'Fantasy',
    views_count: '1.4M',
    subscribed_count: '121,964',
    rating: '7.06',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221122_4/1669107146914BxOLV_JPEG/4ToYouWhoDoesn_tLoveMe_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/superstar-associate-manager/list?title_no=4357',
    title: 'Superstar AssociateManager',
    genre: 'Drama',
    views_count: '578,732',
    subscribed_count: '50,162',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220615_290/1655237421837WPMTq_JPEG/1Superstar+Associate+Manager_Launch__landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/rise-from-ashes/list?title_no=959',
    title: 'Rise from Ashes',
    genre: 'Supernatural',
    views_count: '51.7M',
    subscribed_count: '757,904',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170303_203/1488519301926kMwBa_JPEG/M_details_preview.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/alice-elise/list?title_no=1481',
    title: 'Alice Elise',
    genre: 'Fantasy',
    views_count: '1.3M',
    subscribed_count: '60,633',
    rating: '8.95',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181116_125/1542313452884uIzS6_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/up-and-out/list?title_no=488',
    title: 'Up and Out ',
    genre: 'Slice of life',
    views_count: '10.7M',
    subscribed_count: '65,488',
    rating: '8.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150615_107/1434362786689NfDfs_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/assassin-roommate/list?title_no=1050',
    title: 'Assassin Roommate',
    genre: 'Romance',
    views_count: '71.8M',
    subscribed_count: '870,527',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170606_213/1496713366754qcNqp_JPEG/M_details_preview.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/mage-again/list?title_no=3476',
    title: 'Mage Again',
    genre: 'Fantasy',
    views_count: '2.9M',
    subscribed_count: '120,453',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211001_111/1633052644268H45Hi_JPEG/9MageAgain_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/midnight-poppy-land/list?title_no=1798',
    title: 'Midnight Poppy Land',
    genre: 'Romance',
    views_count: '222.9M',
    subscribed_count: '2.5M',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191119_291/1574134804668p06yD_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/surviving-as-a-fish/list?title_no=4634',
    title: 'Surviving as a Fish',
    genre: 'Fantasy',
    views_count: '2.7M',
    subscribed_count: '131,454',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220909_41/16626866479682wn0t_JPEG/1SurvivingAsAFish_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/days-of-hana/list?title_no=1246',
    title: 'Days of Hana',
    genre: 'Drama',
    views_count: '105.3M',
    subscribed_count: '1.1M',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171204_207/1512362408142cmoJh_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/lorna/list?title_no=1284',
    title: 'Lorna',
    genre: 'Slice of life',
    views_count: '4.2M',
    subscribed_count: '52,976',
    rating: '8.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180113_140/1515787184650fn1Fv_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/disconnected-from-reality/list?title_no=4182',
    title: 'Disconnected from Reality',
    genre: 'Thriller',
    views_count: '2.7M',
    subscribed_count: '119,378',
    rating: '9.03',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220505_66/1651690940637uIiQm_JPEG/5DisconnectedfromReality_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/good-luck-hero/list?title_no=3346',
    title: 'Good Luck, Hero!',
    genre: 'Fantasy',
    views_count: '2.3M',
    subscribed_count: '100,833',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210908_51/1631075953508CIDuV_JPEG/2GoodLuckHero21_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/fluffy-boyfriend/list?title_no=1164',
    title: 'Fluffy Boyfriend',
    genre: 'Supernatural',
    views_count: '94M',
    subscribed_count: '1.4M',
    rating: '9.09',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170902_222/1504294550705pvE6P_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile2.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-red-hook-blackout/list?title_no=2282',
    title: 'The Red Hook: Blackout & PTSD',
    genre: 'Superhero',
    views_count: '213,361',
    subscribed_count: '19,587',
    rating: '7.20',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201013_10/16025872489453g0dG_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/mystical/list?title_no=2128',
    title: 'Mystical',
    genre: 'Supernatural',
    views_count: '28.7M',
    subscribed_count: '669,364',
    rating: '9.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_215/1611695936209964D5_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/woven/list?title_no=2744',
    title: 'Woven',
    genre: 'Fantasy',
    views_count: '2.8M',
    subscribed_count: '147,261',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220309_45/164676398639290daX_JPEG/0Woven_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/salty-studio/list?title_no=74',
    title: 'Salty Studio',
    genre: 'Romance',
    views_count: '21.6M',
    subscribed_count: '330,951',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_33/1404270383673V4JFs_JPEG/37_EC8AA4ED8A9CEB9494EC98A4ECA7ADECA1B0EBA684.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-legendary-fossil/list?title_no=3212',
    title: 'The Legendary Fossil',
    genre: 'Drama',
    views_count: '2.7M',
    subscribed_count: '132,864',
    rating: '8.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220309_166/1646754252896yroLz_JPEG/7TheLegendaryFossil_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/version-day-and-night/list?title_no=1796',
    title: 'Version Day and Night',
    genre: 'Drama',
    views_count: '10.6M',
    subscribed_count: '478,247',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_246/16117103503842KYVu_JPEG/1Version-Day-and-Night-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/philia-rose-the-prophecy-of-the-crown-of-thorns/list?title_no=3900',
    title: 'Philia Ros\u00e9: The Prophecy of the Crown of Thorns',
    genre: 'Fantasy',
    views_count: '5.8M',
    subscribed_count: '183,235',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220428_77/1651080099701VUVbh_JPEG/9PhiliaRose_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/my-dictator-boyfriend/list?title_no=1391',
    title: 'My Dictator Boyfriend',
    genre: 'Comedy',
    views_count: '46.3M',
    subscribed_count: '273,648',
    rating: '8.99',
    img_url:
      'https://static.wikia.nocookie.net/webtoon/images/3/3a/My_Dictator_Boyfriend.png/revision/latest?cb=20210102053634',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/7fates-chakho/list?title_no=3784',
    title: '7FATES: CHAKHO',
    genre: 'Fantasy',
    views_count: '30.6M',
    subscribed_count: '1.6M',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220820_87/16609360345492rWdj_JPEG/628720x123029CHAKHO_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/dustinteractive/list?title_no=907',
    title: 'dustinteractive',
    genre: 'Comedy',
    views_count: '104M',
    subscribed_count: '325,701',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170614_85/1497406820842DVHRE_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/nicholalala/list?title_no=418',
    title: 'Nicholalala',
    genre: 'Slice of life',
    views_count: '3M',
    subscribed_count: '19,295',
    rating: '8.99',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160930_115/1475205502511RNH6n_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-breaker-eternal-force/list?title_no=4501',
    title: 'The Breaker: Eternal Force',
    genre: 'Action',
    views_count: '3.8M',
    subscribed_count: '230,320',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220708_269/1657239003497nx6sC_JPEG/9TheBreakerEF_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/land-of-the-crimson-moon/list?title_no=4466',
    title: 'Land of the Crimson Moon',
    genre: 'Action',
    views_count: '1.2M',
    subscribed_count: '73,448',
    rating: '9.21',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220630_192/16565354396513T3L5_JPEG/7LOTCM_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/loaf-app/list?title_no=4213',
    title: 'Loaf App',
    genre: 'Drama',
    views_count: '1.7M',
    subscribed_count: '122,898',
    rating: '8.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220910_11/1662751128911OTGrb_JPEG/1Loaf+App_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-remarried-empress/list?title_no=2135',
    title: 'The Remarried Empress',
    genre: 'Fantasy',
    views_count: '291.6M',
    subscribed_count: '2.9M',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200904_219/1599178295061Idt1l_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/sarah-im-sorry-welcome-to-our-galaxy/list?title_no=3665',
    title: "Sarah, I'm Sorry:Welcome to Our Galaxy",
    genre: 'Informative',
    views_count: '1.4M',
    subscribed_count: '152,206',
    rating: '8.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_268/1642529251996G5xCX_JPEG/1Sarah+I27m+Sorry_Launch_mobile_landingpage_INDO.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/soul-on-hold/list?title_no=1701',
    title: 'Soul on Hold',
    genre: 'Supernatural',
    views_count: '10.5M',
    subscribed_count: '266,175',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_3/1611703204413OdMkA_JPEG/1SoH-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/99-reinforced-wooden-stick/list?title_no=4286',
    title: '+99 ReinforcedWooden Stick',
    genre: 'Comedy',
    views_count: '14.4M',
    subscribed_count: '416,072',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220608_170/1654640078980huLYR_JPEG/199ReinforcedWoodenStick_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/steam-dragon-express/list?title_no=1270',
    title: 'The Steam Dragon Express',
    genre: 'Fantasy',
    views_count: '32.4M',
    subscribed_count: '337,250',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171220_177/1513740380987nqYf5_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/royale/list?title_no=2748',
    title: 'Royale',
    genre: 'Mystery',
    views_count: '545,890',
    subscribed_count: '38,102',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220426_225/1650932415922nhnah_JPEG/9Royale_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/no-longer-a-heroine/list?title_no=1264',
    title: 'No Longer A Heroine!',
    genre: 'Drama',
    views_count: '26.4M',
    subscribed_count: '427,419',
    rating: '9.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201208_141/1607406642660mYSTt_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/she-bites/list?title_no=3236',
    title: 'She Bites!',
    genre: 'Slice of life',
    views_count: '1.4M',
    subscribed_count: '59,319',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210916_142/16317267602739LNdf_JPEG/5She+Bites21_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/re-possessed/list?title_no=3760',
    title: 'Re-Possessed',
    genre: 'Action',
    views_count: '605,181',
    subscribed_count: '67,813',
    rating: '9.01',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220803_241/1659490869208BAyWD_JPEG/4Re-Possessed_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/girls-have-a-blog/list?title_no=1052',
    title: 'Girls Have a Blog',
    genre: 'Slice of life',
    views_count: '6.4M',
    subscribed_count: '139,619',
    rating: '9.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170607_126/1496827609883xH4Mi_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/hive/list?title_no=65',
    title: 'HIVE',
    genre: 'Thriller',
    views_count: '66.9M',
    subscribed_count: '465,993',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151006_8/14441249564481tmgx_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/brutally-honest/list?title_no=799',
    title: 'Brutally Honest',
    genre: 'Comedy',
    views_count: '24M',
    subscribed_count: '229,128',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200529_35/1590710661942mMzAR_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/romance/for-my-derelict-favorite/list?title_no=4571',
    title: 'For My Derelict Favorite',
    genre: 'Romance',
    views_count: '8.6M',
    subscribed_count: '416,758',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220727_82/1658884834165KsOcW_JPEG/3ForMyDerelictFavorite_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/her-bucket-list/list?title_no=2564',
    title: 'Her Bucket List',
    genre: 'Romance',
    views_count: '10M',
    subscribed_count: '327,066',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210612_120/1623447247388JAcMi_JPEG/3HerBucketList_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/how-to-love/list?title_no=472',
    title: 'How to Love',
    genre: 'Slice of life',
    views_count: '11.3M',
    subscribed_count: '120,801',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150514_176/1431604296914q2VKW_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/nevermore/list?title_no=2740',
    title: 'Nevermore',
    genre: 'Supernatural',
    views_count: '12.3M',
    subscribed_count: '438,363',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220301_181/1646087538706JsFXu_JPEG/8Nevermore_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/soulwinder/list?title_no=2880',
    title: 'SOULWINDER',
    genre: 'Thriller',
    views_count: '2.3M',
    subscribed_count: '216,883',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220714_31/1657797040358LA0KO_JPEG/0Soulwinder_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/purple-hyacinth/list?title_no=1621',
    title: 'Purple Hyacinth',
    genre: 'Mystery',
    views_count: '121.4M',
    subscribed_count: '1.7M',
    rating: '9.91',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220222_275/1645494592231vzfkq_JPEG/4PurpleHyacinth_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-druid-of-seoul-station/list?title_no=3453',
    title: 'The Druid of Seoul Station',
    genre: 'Action',
    views_count: '25.3M',
    subscribed_count: '494,733',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211002_249/1633129406371DDuvc_JPEG/5The+Druid+of+Seoul+Station_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/cyberforce/list?title_no=531',
    title: 'Cyberforce',
    genre: 'Superhero',
    views_count: '1.7M',
    subscribed_count: '39,524',
    rating: '7.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151210_76/1449726583624EJIe3_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/raven-saga/list?title_no=2527',
    title: 'Raven Saga',
    genre: 'Fantasy',
    views_count: '10.4M',
    subscribed_count: '246,280',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210305_184/1614891992713ykA2j_JPEG/2RavenSaga_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/cursed-princess-club/list?title_no=1537',
    title: 'Cursed Princess Club',
    genre: 'Comedy',
    views_count: '248.4M',
    subscribed_count: '2.2M',
    rating: '9.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210816_191/1629073083242ysC58_JPEG/8CursedPrincessClub_mobile_landingpage_081321.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/morgana-and-oz/list?title_no=2964',
    title: 'Morgana and Oz',
    genre: 'Fantasy',
    views_count: '41.6M',
    subscribed_count: '1.1M',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211201_152/1638300932662FFPHF_JPEG/5Morgana26Oz_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/heartwarming/heart-anthology/list?title_no=2191',
    title: 'HEART Anthology',
    genre: 'Heartwarming',
    views_count: '12.2M',
    subscribed_count: '233,533',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210126_47/1611620701311b1ATJ_JPEG/3HeartAnthology_mobilelanding+page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/lore-olympus/list?title_no=1320',
    title: 'Lore Olympus',
    genre: 'Romance',
    views_count: '1.2B',
    subscribed_count: '6.2M',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200802_207/1596323527203ga6Fa_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/witch-creek-road/list?title_no=1453',
    title: 'Witch Creek Road',
    genre: 'Horror',
    views_count: '22M',
    subscribed_count: '480,218',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180920_21/1537406720542igmKF_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/epic-v/list?title_no=353',
    title: 'Epic V',
    genre: 'Comedy',
    views_count: '560,269',
    subscribed_count: '6,093',
    rating: '5.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141201_123/1417397785941nkXFw_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/it-was-all-you/list?title_no=2675',
    title: 'It Was All You',
    genre: 'Sci-fi',
    views_count: '9.1M',
    subscribed_count: '285,717',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_295/1620068447384jAXzQ_JPEG/4It+Was+All+You_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/historical/the-weight-of-our-sky/list?title_no=1739',
    title: 'The Weight of Our Sky',
    genre: 'Historical',
    views_count: '8.4M',
    subscribed_count: '254,211',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191005_113/1570232846279vfuy3_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-empress-lipstick/list?title_no=4698',
    title: "The Empress' Lipstick",
    genre: 'Fantasy',
    views_count: '1.1M',
    subscribed_count: '76,677',
    rating: '9.04',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221130_53/1669773282076XR86x_JPEG/0The_Empress__Lipstick__Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/flawed-almighty/list?title_no=3577',
    title: 'Flawed Almighty',
    genre: 'Supernatural',
    views_count: '10.1M',
    subscribed_count: '223,769',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211030_287/1635528615836MTnjy_JPEG/1FlawedAlmighty_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/doom-breaker/list?title_no=3197',
    title: 'Doom Breaker',
    genre: 'Action',
    views_count: '39.4M',
    subscribed_count: '819,311',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210727_96/1627340998243veUSy_PNG/1DoomBreaker_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-purple-heart/list?title_no=723',
    title: 'The Purple Heart',
    genre: 'Superhero',
    views_count: '933,441',
    subscribed_count: '35,867',
    rating: '9.03',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160726_30/1469487095916WtBQE_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/this-magical-moment/list?title_no=2563',
    title: 'This Magical Moment',
    genre: 'Supernatural',
    views_count: '4.3M',
    subscribed_count: '155,100',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210521_272/16215341221150b71P_JPEG/5ThisMagicalMoment_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/always-human/list?title_no=557',
    title: 'Always Human',
    genre: 'Romance',
    views_count: '50.6M',
    subscribed_count: '680,604',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160805_156/1470383210495RhR2G_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/another-love/list?title_no=3964',
    title: 'Another Love',
    genre: 'Romance',
    views_count: '12.3M',
    subscribed_count: '356,164',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220604_258/1654308153964DqEHu_JPEG/0AnotherLove_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/to-tame-a-fire/list?title_no=3763',
    title: 'To Tame a Fire',
    genre: 'Supernatural',
    views_count: '4.9M',
    subscribed_count: '264,326',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220608_248/1654626331321YrR1t_JPEG/2ToTameAFire_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/the-wolfman-of-wulvershire/list?title_no=1784',
    title: 'The Wolfman of Wulvershire',
    genre: 'Mystery',
    views_count: '15.9M',
    subscribed_count: '360,974',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_38/1611706093913ScdxO_JPEG/7Wolfman-of-Wulvershire-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/a-useless-villain/list?title_no=2969',
    title: 'A Useless Villain',
    genre: 'Action',
    views_count: '10.5M',
    subscribed_count: '416,373',
    rating: '7.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210702_276/1625168819017WrywL_JPEG/0AUselessVillain_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/lullaby/list?title_no=4154',
    title: 'Lullaby',
    genre: 'Fantasy',
    views_count: '3.6M',
    subscribed_count: '159,032',
    rating: '8.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220422_20/16505822388580Wln2_JPEG/9Lullaby_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/doodle-for-food/list?title_no=487',
    title: 'Doodle for Food',
    genre: 'Slice of life',
    views_count: '53.5M',
    subscribed_count: '184,778',
    rating: '9.44',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150611_22/1434012287197ySltg_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/the-life-of-the-three-bears/list?title_no=390',
    title: 'The Life of the Three Bears',
    genre: 'Slice of life',
    views_count: '858,473',
    subscribed_count: '18,325',
    rating: '8.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150223_261/1424658923662fd5Yf_JPEG/_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-world-after-the-fall/list?title_no=4011',
    title: 'The World After the Fall',
    genre: 'Action',
    views_count: '17.8M',
    subscribed_count: '652,502',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220419_243/1650306588210IQooB_JPEG/6TheWorldAftertheFall_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/historical/the-snake-and-the-flower/list?title_no=2619',
    title: 'The Snake and the Flower',
    genre: 'Historical',
    views_count: '6.7M',
    subscribed_count: '233,736',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210408_94/1617824859348QPDi6_JPEG/2TheSnakeAndTheFlower_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/11-of-me/list?title_no=3235',
    title: '11 of Me',
    genre: 'Supernatural',
    views_count: '1.5M',
    subscribed_count: '102,986',
    rating: '8.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210916_47/1631754801073uLhkd_JPEG/611+of+Me_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/brass-and-sass/list?title_no=1652',
    title: 'Brass & Sass',
    genre: 'Romance',
    views_count: '67.9M',
    subscribed_count: '752,594',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211124_256/16377157188763YbrC_JPEG/5Brass26Sass_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/mystic-prince/list?title_no=4737',
    title: 'Mystic Prince',
    genre: 'Drama',
    views_count: '3.8M',
    subscribed_count: '208,013',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221207_76/1670359427730SzjwH_JPEG/5MysticPrince_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/return-to-player/list?title_no=2574',
    title: 'Return to Player',
    genre: 'Action',
    views_count: '35.8M',
    subscribed_count: '647,382',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210401_243/16172532927339h68F_JPEG/7ReturntoPlayer_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/jingle-jungle/list?title_no=282',
    title: 'Jingle Jungle',
    genre: 'Slice of life',
    views_count: '938,858',
    subscribed_count: '13,727',
    rating: '8.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140827_42/14091159865085Fsle_JPEG/mobile_bg.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/cydonia-shattering/list?title_no=2881',
    title: 'Cydonia Shattering',
    genre: 'Fantasy',
    views_count: '1.3M',
    subscribed_count: '92,929',
    rating: '8.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220205_287/1644020016801pdkSy_JPEG/9CydoniaShattering_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/kids-are-all-right/list?title_no=283',
    title: 'Kids Are All Right',
    genre: 'Drama',
    views_count: '6.3M',
    subscribed_count: '102,889',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140829_211/1409291630916KtIH2_JPEG/mobile_bg.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/suitor-armor/list?title_no=2159',
    title: 'Suitor Armor',
    genre: 'Fantasy',
    views_count: '98.8M',
    subscribed_count: '1.5M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220121_40/1642722562552PDpK8_JPEG/4SuitorArmor_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/from-a-knight-to-a-lady/list?title_no=3164',
    title: 'From a Knight to a Lady',
    genre: 'Fantasy',
    views_count: '27.9M',
    subscribed_count: '566,604',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210729_80/1627519669080P65od_JPEG/2FromKnighttoLady_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/time-and-time-again/list?title_no=3758',
    title: 'Time and Time Again',
    genre: 'Supernatural',
    views_count: '1.9M',
    subscribed_count: '81,669',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220603_295/1654196769967EMzvS_JPEG/9TimeandTimeAgain_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/illuminated/list?title_no=2813',
    title: 'Illuminated',
    genre: 'Informative',
    views_count: '928,143',
    subscribed_count: '107,995',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210625_64/1624566949518UcSDs_JPEG/5Illuminated_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/viral-hit/list?title_no=2268',
    title: 'Viral Hit',
    genre: 'Action',
    views_count: '73.8M',
    subscribed_count: '814,082',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201009_49/1602189932687SKITi_JPEG/904_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436',
    title: 'True Beauty',
    genre: 'Romance',
    views_count: '965.6M',
    subscribed_count: '7.3M',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210129_254/1611875610116c2Tub_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/ant/list?title_no=3482',
    title: 'ANT',
    genre: 'Thriller',
    views_count: '1.8M',
    subscribed_count: '79,218',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220406_277/1649202970062QjBKg_JPEG/1Ant_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/to-not-die/list?title_no=3787',
    title: 'To Not Die',
    genre: 'Drama',
    views_count: '8.1M',
    subscribed_count: '237,556',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_100/1642559443582VqGWG_JPEG/5ToNotDie_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-dark-lords-confession/list?title_no=4464',
    title: "The Dark Lord's Confession",
    genre: 'Fantasy',
    views_count: '6.2M',
    subscribed_count: '290,786',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220706_81/165704950963308hqH_JPEG/028720x123029TheDarkLordsConfession_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/heavenly-roommates/list?title_no=3208',
    title: 'Heavenly Roommates',
    genre: 'Fantasy',
    views_count: '5.3M',
    subscribed_count: '222,918',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_38/1642558112339OwolP_JPEG/6HeavenlyRoommates_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/villain-to-kill/list?title_no=2857',
    title: 'Villain to Kill',
    genre: 'Action',
    views_count: '49M',
    subscribed_count: '1.1M',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210612_298/1623447598834mhoa1_JPEG/0VillaintoKillLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-uncommons/list?title_no=4520',
    title: 'The UnCommons',
    genre: 'Action',
    views_count: '232,089',
    subscribed_count: '56,147',
    rating: '9.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230119_163/16740671167591bdkp_JPEG/8TheUnCommons_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dragnarok-descendants/list?title_no=1433',
    title: 'Dragnarok: Descendants',
    genre: 'Fantasy',
    views_count: '5.7M',
    subscribed_count: '220,760',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180812_213/1534046960290J3pIU_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/of-what-remains/list?title_no=2720',
    title: 'Of What Remains',
    genre: 'Thriller',
    views_count: '1.5M',
    subscribed_count: '88,603',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211001_165/1633051207451vUN6p_JPEG/9OfWhatRemains_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/how-to-become-a-dragon/list?title_no=1973',
    title: 'How to Become a Dragon',
    genre: 'Fantasy',
    views_count: '23M',
    subscribed_count: '464,792',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200411_37/15865459321258AnIC_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/axed/list?title_no=1558',
    title: 'AXED',
    genre: 'Comedy',
    views_count: '37.2M',
    subscribed_count: '484,877',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190306_213/15518380100080YjMG_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/shingi-the-spirits-playbook/list?title_no=4569',
    title: "Shingi: The Spirit's Playbook",
    genre: 'Action',
    views_count: '1M',
    subscribed_count: '70,625',
    rating: '8.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220806_38/1659727330634GqdSK_JPEG/9Shingi_TheSpiritsPlaybook_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/varsity-noir/list?title_no=1613',
    title: 'Varsity Noir',
    genre: 'Mystery',
    views_count: '1.3M',
    subscribed_count: '52,874',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190427_192/1556303222766cntP9_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/your-letter/list?title_no=1540',
    title: 'Your Letter',
    genre: 'Drama',
    views_count: '11M',
    subscribed_count: '553,417',
    rating: '9.93',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190208_229/1549585940763bch7O_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-universe/list?title_no=3113',
    title: 'My Universe',
    genre: 'Romance',
    views_count: '8.3M',
    subscribed_count: '288,228',
    rating: '9.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211103_261/1635888793976v1dQm_JPEG/7MyUniverse_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/refundhighschool/list?title_no=1360',
    title: 'Refund High School',
    genre: 'Fantasy',
    views_count: '134.1M',
    subscribed_count: '1.3M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190611_48/15602526491997S5Yw_JPEG/5_EBAAA8EBB094EC9DBC_720x1230.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/auto-hunting-with-my-clones/list?title_no=5034',
    title: 'Auto HuntingWith My Clones',
    genre: 'Action',
    views_count: '322,580',
    subscribed_count: '72,022',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230128_187/1674862917955NMJX5_JPEG/0AutoHuntingWithMyClones_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/little-matcha-girl/list?title_no=1665',
    title: 'Little Matcha Girl',
    genre: 'Fantasy',
    views_count: '15.5M',
    subscribed_count: '379,242',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190709_280/156261259983223aF6_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/straylight-tiger/list?title_no=2807',
    title: 'Straylight Tiger',
    genre: 'Sci-fi',
    views_count: '3.9M',
    subscribed_count: '197,297',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220111_167/1641854327511Gwi75_JPEG/4StraylightTiger_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-red-hook/list?title_no=643',
    title: 'The Red Hook',
    genre: 'Superhero',
    views_count: '1.1M',
    subscribed_count: '33,882',
    rating: '8.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160406_140/1459906186891fHOtw_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/metro-hunter/list?title_no=3347',
    title: 'Metro Hunter',
    genre: 'Action',
    views_count: '4M',
    subscribed_count: '106,196',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210918_60/1631927898826NiyfU_JPEG/0MetroHunter_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/ganda-night-defender/list?title_no=4116',
    title: 'GANDA: Night Defender',
    genre: 'Action',
    views_count: '342,758',
    subscribed_count: '42,808',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220404_187/1649055215480OGAqk_JPEG/3GANDA_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-spark-in-your-eyes/list?title_no=3210',
    title: 'The Spark in Your Eyes',
    genre: 'Fantasy',
    views_count: '7.2M',
    subscribed_count: '248,443',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210818_83/1629229124243F6Qki_JPEG/9TheSparkInYourEyes_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/cheese-in-the-trap/list?title_no=99',
    title: 'Cheese in the Trap',
    genre: 'Drama',
    views_count: '154.6M',
    subscribed_count: '1.1M',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151006_202/1444124835599FF7a5_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/oh-holy/list?title_no=809',
    title: 'Oh! Holy',
    genre: 'Romance',
    views_count: '140.8M',
    subscribed_count: '1.6M',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161011_141/1476178213442AqdcI_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/noblesse/list?title_no=87',
    title: 'Noblesse',
    genre: 'Action',
    views_count: '431.3M',
    subscribed_count: '1.9M',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151006_151/1444125008557ISRAC_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/my-life-as-a-loser/list?title_no=3114',
    title: 'My Life as a Loser',
    genre: 'Drama',
    views_count: '7M',
    subscribed_count: '204,921',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210731_34/1627681801942I5DRY_JPEG/9MyLifeasaLoser_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/dear-nemesis/list?title_no=4467',
    title: 'Dear Nemesis',
    genre: 'Drama',
    views_count: '5.7M',
    subscribed_count: '285,073',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220701_10/1656612201599Xjdvt_JPEG/3DearNemesis_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/finality/list?title_no=1457',
    title: 'FINALITY',
    genre: 'Mystery',
    views_count: '335,710',
    subscribed_count: '32,434',
    rating: '8.12',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181002_268/1538426976326iHeYV_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/a-dance-of-swords-in-the-night/list?title_no=4596',
    title: 'A Dance of Swords in the Night',
    genre: 'Action',
    views_count: '1.5M',
    subscribed_count: '97,423',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220811_229/16602016655298iM95_JPEG/8ADOSITN_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/long-after-the-ending/list?title_no=4179',
    title: 'Long After the Ending',
    genre: 'Romance',
    views_count: '5.8M',
    subscribed_count: '223,055',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_212/1651261676653ljG1J_JPEG/5LongAftertheEnding_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/fast-forward/list?title_no=2764',
    title: 'Fast Forward',
    genre: 'Thriller',
    views_count: '6.8M',
    subscribed_count: '235,085',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210505_207/1620177636064sawS9_JPEG/3FastForward_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/be-still-my-heart/list?title_no=4012',
    title: 'Be Still My Heart',
    genre: 'Sports',
    views_count: '616,460',
    subscribed_count: '29,556',
    rating: '9.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220218_262/1645140711420YVBH8_JPEG/6BeStillMyHeart_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-aftermath/list?title_no=3344',
    title: 'The Aftermath',
    genre: 'Drama',
    views_count: '1.2M',
    subscribed_count: '68,004',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210910_244/1631244354763UbHE2_JPEG/4TheAftermath_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-earths-chosen-savior/list?title_no=3593',
    title: "The Earth's Chosen Savior",
    genre: 'Action',
    views_count: '5.2M',
    subscribed_count: '187,450',
    rating: '9.12',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211111_174/1636568478506iEfBr_JPEG/8TECS_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/dark-mortal/list?title_no=2505',
    title: 'Dark Mortal',
    genre: 'Drama',
    views_count: '10.6M',
    subscribed_count: '229,474',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_48/1620083055189tL8co_JPEG/9DarkMortal_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/behind-the-curtain/list?title_no=2858',
    title: 'Behind the Curtain',
    genre: 'Romance',
    views_count: '1.6M',
    subscribed_count: '115,053',
    rating: '8.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_115/16262106926342qcwm_JPEG/6BehindtheCurtain_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/welfare-center/list?title_no=4675',
    title: 'Welfare Center',
    genre: 'Thriller',
    views_count: '1.4M',
    subscribed_count: '108,928',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221025_42/1666631926379jfOQ2_JPEG/7WelfareCenter_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/rooftops-and-roommates/list?title_no=2576',
    title: 'Rooftops & Roommates',
    genre: 'Comedy',
    views_count: '36.9M',
    subscribed_count: '461,143',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220922_77/1663796181818O98mW_JPEG/8RooftopsnRoommates_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/yumi-cell/list?title_no=478',
    title: "Yumi's Cells",
    genre: 'Slice of life',
    views_count: '194.2M',
    subscribed_count: '701,327',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190412_103/1555028192225MhYsI_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/publishing-love/list?title_no=4218',
    title: 'Publishing Love',
    genre: 'Romance',
    views_count: '3.2M',
    subscribed_count: '145,488',
    rating: '7.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220706_3/1657059455959jKHN4_JPEG/4PublishingLove_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/just-ask-yuli/list?title_no=402',
    title: 'Just Ask Yuli',
    genre: 'Slice of life',
    views_count: '576,969',
    subscribed_count: '15,052',
    rating: '7.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150309_232/1425895143670KsYTJ_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/she-would-never-know/list?title_no=2508',
    title: 'She Would Never Know',
    genre: 'Romance',
    views_count: '13.8M',
    subscribed_count: '433,489',
    rating: '9.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210218_100/1613617133300a18CO_JPEG/3SheWouldNeverKnow_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/family-man/list?title_no=85',
    title: 'FAMILY MAN',
    genre: 'Drama',
    views_count: '2.6M',
    subscribed_count: '39,784',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_173/1404270117379IqSLI_JPEG/34_ED8CA8EBB080EBA6ACEBA7A8.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/cape-of-spirits/list?title_no=1559',
    title: 'Cape of Spirits',
    genre: 'Action',
    views_count: '22.4M',
    subscribed_count: '528,294',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_11/16117026025761kpzF_JPEG/9Cape-of-Spirits-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/revenge-love/list?title_no=4795',
    title: 'Revenge Love',
    genre: 'Romance',
    views_count: '588,684',
    subscribed_count: '84,038',
    rating: '8.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221223_164/1671733130132Ha3hP_JPEG/7Revenge_Love_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/aisopos/list?title_no=76',
    title: 'Aisopos',
    genre: 'Drama',
    views_count: '5.6M',
    subscribed_count: '59,297',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_64/1404270340316EetSV_JPEG/22_EC9584EC9DB4EC868CED8FACEC8AA4.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/magician/list?title_no=70',
    title: 'Magician',
    genre: 'Fantasy',
    views_count: '40M',
    subscribed_count: '191,823',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_82/1404270738145UymV4_JPEG/08_EBA788EC88A0EC82AC.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/escape-from-oz/list?title_no=2761',
    title: 'Escape from Oz',
    genre: 'Comedy',
    views_count: '340,051',
    subscribed_count: '34,611',
    rating: '8.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221115_135/1668478277077478iH_JPEG/0EscapeFromOz_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/unholy-blood/list?title_no=1262',
    title: 'Unholy Blood',
    genre: 'Supernatural',
    views_count: '123.4M',
    subscribed_count: '1.8M',
    rating: '9.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201013_124/1602541609936RDvJT_JPEG/604_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/lozolz/list?title_no=1268',
    title: '\u3134\u3147\u3139\u3147\u3134\u3139',
    genre: 'Informative',
    views_count: '6.5M',
    subscribed_count: '106,866',
    rating: '8.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171219_147/1513659597206YkSYg_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/smile-brush-my-old-pictures/list?title_no=302',
    title: 'Smile Brush: My Old Pictures',
    genre: 'Slice of life',
    views_count: '5.7M',
    subscribed_count: '80,761',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141031_43/1414753921707BYuhR_JPEG/EBAAA8EBB094EC9DBC_EC9E91ED9288EC8381EC84B8_EC8AA4EBA7.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/floating-in-my-mind/list?title_no=3485',
    title: 'Floating in My Mind',
    genre: 'Supernatural',
    views_count: '3.3M',
    subscribed_count: '146,163',
    rating: '9.03',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211012_230/1633973499584A0e1G_JPEG/9Floating+in+My+Mind_Launch__mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/reality-quest/list?title_no=4697',
    title: 'Reality Quest',
    genre: 'Action',
    views_count: '3.2M',
    subscribed_count: '167,689',
    rating: '8.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221118_77/1668763224499pmmy3_JPEG/8RealityQuest_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/dungeons-and-artifacts/list?title_no=2575',
    title: 'Dungeons & Artifacts',
    genre: 'Action',
    views_count: '29.2M',
    subscribed_count: '512,118',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210402_188/1617299289365yQN6V_JPEG/6Dungeons26Artifacts_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/hyperfocus/list?title_no=3340',
    title: 'Hyperfocus',
    genre: 'Slice of life',
    views_count: '19.3M',
    subscribed_count: '219,251',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_91/16425582265995wTj4_JPEG/7Hyperfocus_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-matchmaking-baby-princess/list?title_no=3066',
    title: 'The MatchmakingBaby Princess',
    genre: 'Fantasy',
    views_count: '11.2M',
    subscribed_count: '248,862',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210722_249/1626916396752v9Uxz_JPEG/6BabyEmpress_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/sixth-sense-kiss/list?title_no=2921',
    title: 'Sixth Sense Kiss',
    genre: 'Romance',
    views_count: '66.2M',
    subscribed_count: '1M',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210611_226/1623376322314BO1no_JPEG/6SixthSenseKiss_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/reborn-rich/list?title_no=4956',
    title: 'Reborn Rich',
    genre: 'Drama',
    views_count: '1.8M',
    subscribed_count: '191,595',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221205_154/16702175460925mwMJ_JPEG/9RebornRich_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/our-house/list?title_no=3789',
    title: 'Our House',
    genre: 'Slice of life',
    views_count: '1.6M',
    subscribed_count: '84,509',
    rating: '9.17',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_120/1642558296146P6rRP_JPEG/0OurHouse_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-advanced-player-of-the-tutorial-tower/list?title_no=2409',
    title: 'The Advanced Player ofthe Tutorial Tower',
    genre: 'Action',
    views_count: '100.5M',
    subscribed_count: '1.4M',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201229_131/16092073386817TVm8_JPEG/4TheAdvancedPlayeroftheTutorialTower_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/cyko-ko/list?title_no=560',
    title: 'Cyko-KO',
    genre: 'Superhero',
    views_count: '248,648',
    subscribed_count: '7,947',
    rating: '7.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151020_253/1445330388777ddhHk_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/acursian/list?title_no=1452',
    title: 'Acursian',
    genre: 'Supernatural',
    views_count: '558,520',
    subscribed_count: '56,803',
    rating: '7.22',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180914_189/15368916307514F1nK_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/knife-in-her-heart/list?title_no=5043',
    title: 'Knife in Her Heart',
    genre: 'Drama',
    views_count: '624,128',
    subscribed_count: '89,478',
    rating: '9.07',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230120_144/1674194184855tf4O6_JPEG/4KnifeInHerHeart_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/write-to-your-heart/list?title_no=4161',
    title: 'Write to Your Heart!',
    genre: 'Drama',
    views_count: '1.4M',
    subscribed_count: '70,198',
    rating: '9.05',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_86/1651261084337lM23i_JPEG/2WTYH_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/bloodhounds/list?title_no=4000',
    title: 'Bloodhounds',
    genre: 'Action',
    views_count: '1.5M',
    subscribed_count: '67,152',
    rating: '9.21',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220308_71/1646707892496AHCIM_JPEG/4Bloodhounds_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/little-lady-mint/list?title_no=4441',
    title: 'Little Lady Mint',
    genre: 'Fantasy',
    views_count: '5.1M',
    subscribed_count: '175,067',
    rating: '8.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221116_157/1668561661272eRfkv_JPEG/4LittleLadyMint_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/horang-horror/list?title_no=2185',
    title: "Horang's Nightmare",
    genre: 'Horror',
    views_count: '22.6M',
    subscribed_count: '701,145',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200825_216/159833943363992747_JPEG/horang_M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/chiller/list?title_no=536',
    title: 'Chiller',
    genre: 'Thriller',
    views_count: '26.7M',
    subscribed_count: '409,689',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150910_186/1441873367224oFXib_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/just-a-goblin/list?title_no=3514',
    title: 'Just a Goblin',
    genre: 'Fantasy',
    views_count: '2.7M',
    subscribed_count: '160,318',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220910_199/1662759972264tRMQM_JPEG/1JustaGoblin_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-girl-who-sees-smells/list?title_no=2559',
    title: 'The Girl Who Sees Smells',
    genre: 'Fantasy',
    views_count: '5.7M',
    subscribed_count: '153,945',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210909_290/1631143338720UJ9RG_JPEG/9The+Girl+Who+Sees+Smells_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/our-time/list?title_no=3600',
    title: 'Our Time',
    genre: 'Drama',
    views_count: '2.9M',
    subscribed_count: '120,245',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211111_35/16365609363649tJXT_JPEG/5OurTime_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/bluechair/list?title_no=199',
    title: 'Bluechair',
    genre: 'Slice of life',
    views_count: '539.7M',
    subscribed_count: '1.4M',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180704_274/1530671424149pCCxu_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/how-to-survive-a-romance-fantasy/list?title_no=2855',
    title: 'How to Survive a Romance Fantasy',
    genre: 'Fantasy',
    views_count: '10.1M',
    subscribed_count: '425,932',
    rating: '9.24',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210610_101/1623290354418UFPwV_JPEG/3HTSRF_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/fake-humans/list?title_no=3452',
    title: 'Fake Humans',
    genre: 'Thriller',
    views_count: '2.1M',
    subscribed_count: '123,810',
    rating: '7.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211011_3/1633957748686EuuaL_JPEG/6FakeHumans_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/the-last-bloodline/list?title_no=2722',
    title: 'The Last Bloodline',
    genre: 'Supernatural',
    views_count: '2.9M',
    subscribed_count: '322,193',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221220_259/1671479585889nCQBp_JPEG/6TLB_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/time-roulette/list?title_no=4313',
    title: 'Time Roulette',
    genre: 'Fantasy',
    views_count: '1.2M',
    subscribed_count: '96,479',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220520_243/1653011150482GgE7C_JPEG/4Time+Roulette_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/happily-ever-afterwards/list?title_no=2737',
    title: 'Happily Ever Afterwards',
    genre: 'Fantasy',
    views_count: '42M',
    subscribed_count: '640,270',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210514_160/1620936325467knN9o_JPEG/4HappilyEverAfterwards_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/your-smile-is-a-trap/list?title_no=2052',
    title: 'Your Smile is a Trap',
    genre: 'Romance',
    views_count: '57.1M',
    subscribed_count: '1M',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210128_247/161177526160483XQK_JPEG/804_EC9E91ED9288EC8381EC84B8_mobile+28229.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dice/list?title_no=64',
    title: 'DICE',
    genre: 'Fantasy',
    views_count: '199.8M',
    subscribed_count: '1.3M',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_167/1404270826178OWyrQ_JPEG/11_EB8BA4EC9DB4EC8AA4.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-strongest-florist/list?title_no=2507',
    title: 'The Strongest Florist',
    genre: 'Action',
    views_count: '30M',
    subscribed_count: '515,805',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210310_147/1615338742109vFiwz_JPEG/9The+Strongest+Florist_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/trump/list?title_no=84',
    title: 'Trump',
    genre: 'Fantasy',
    views_count: '27M',
    subscribed_count: '353,139',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_84/1404270137155niD9i_JPEG/33_ED8AB8EB9FBCED9484.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/my-daughter-is-a-zombie/list?title_no=2190',
    title: 'My Daughter is a Zombie',
    genre: 'Comedy',
    views_count: '22M',
    subscribed_count: '356,089',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200923_44/1600815135588Jiyy3_JPEG/504_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/mythic-item-obtained/list?title_no=4582',
    title: 'Mythic Item Obtained',
    genre: 'Fantasy',
    views_count: '6.1M',
    subscribed_count: '305,605',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220815_166/1660559691948Jh6WJ_JPEG/2MythicItemObtained_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/promise-of-an-orchid/list?title_no=4015',
    title: 'Promise of an Orchid',
    genre: 'Fantasy',
    views_count: '5.1M',
    subscribed_count: '170,362',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220309_276/1646791787417zhkJd_JPEG/6PromiseofanOrchid_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/strawberry-seafoam/list?title_no=1248',
    title: 'Strawberry Seafoam',
    genre: 'Fantasy',
    views_count: '26.6M',
    subscribed_count: '383,845',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171212_142/1513037076442AWSLd_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile+28429.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/nonesuch/list?title_no=3606',
    title: 'Nonesuch',
    genre: 'Mystery',
    views_count: '1M',
    subscribed_count: '37,008',
    rating: '9.12',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210608_5/1623080584292rEH2N_JPEG/16a9f460-539b-49a3-a4e4-466cf100b52c.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/tenants-from-another-world/list?title_no=3042',
    title: 'Tenants from Another World',
    genre: 'Fantasy',
    views_count: '3.6M',
    subscribed_count: '212,874',
    rating: '8.81',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210709_111/1625794971278yaUhT_JPEG/1Tenants+from+Another+World_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/buzzfeed-comics/list?title_no=585',
    title: 'BuzzFeed Comics',
    genre: 'Comedy',
    views_count: '19.7M',
    subscribed_count: '81,015',
    rating: '5.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151123_166/1448250774411O9IVG_JPEG/list_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/vixen-nyc/list?title_no=4169',
    title: 'Vixen: NYC',
    genre: 'Superhero',
    views_count: '2.2M',
    subscribed_count: '118,322',
    rating: '9.37',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220527_185/1653596662256MgfiH_JPEG/8Vixen_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/whos-mr-president/list?title_no=4117',
    title: "Who's Mr. President?",
    genre: 'Drama',
    views_count: '3.3M',
    subscribed_count: '152,299',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220423_255/1650651959034NgqoE_JPEG/3WhosMrPresident_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/a-heartfelt-andante/list?title_no=5047',
    title: 'A Heartfelt Andante',
    genre: 'Drama',
    views_count: '252,504',
    subscribed_count: '83,067',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230112_38/1673483220041FHfQt_JPEG/0A_Heartfelt_Andante_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/metaphorical-her/list?title_no=1475',
    title: 'Metaphorical HER',
    genre: 'Drama',
    views_count: '1.3M',
    subscribed_count: '59,053',
    rating: '8.97',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181110_262/1541793855245MqEiy_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/21st-century-knights/list?title_no=2718',
    title: '21st Century Knights',
    genre: 'Fantasy',
    views_count: '5.2M',
    subscribed_count: '208,454',
    rating: '9.37',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220308_262/1646684429126Hcxla_PNG/421stCentKt_mobile_landingpage_ALT.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/my-id-is-gangnam-beauty/list?title_no=3064',
    title: 'My ID is Gangnam Beauty!',
    genre: 'Drama',
    views_count: '12.4M',
    subscribed_count: '324,734',
    rating: '9.43',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210901_66/1630452434924mWyh3_JPEG/2My+ID+is+Gangnam+Beauty_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/new-life-project/list?title_no=279',
    title: 'New Life Project',
    genre: 'Comedy',
    views_count: '1.8M',
    subscribed_count: '16,095',
    rating: '8.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140818_298/14083274874507ybjT_JPEG/03_cherng_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/death-rescheduled/list?title_no=3515',
    title: 'Death: Rescheduled',
    genre: 'Thriller',
    views_count: '20M',
    subscribed_count: '702,425',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211202_198/1638410235919kNA0o_JPEG/3DeathRescheduled_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/the-guy-upstairs/list?title_no=4087',
    title: 'The Guy Upstairs',
    genre: 'Thriller',
    views_count: '17.3M',
    subscribed_count: '1M',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221007_13/1665103661910myXYM_JPEG/6The+Guy+Upstairs_launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/gourmet-hound/list?title_no=1245',
    title: 'Gourmet Hound',
    genre: 'Drama',
    views_count: '109.8M',
    subscribed_count: '868,218',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171203_50/1512269094945FnjpK_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/forest-of-humans/list?title_no=2922',
    title: 'Forest of Humans',
    genre: 'Thriller',
    views_count: '2.9M',
    subscribed_count: '120,520',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210612_76/1623447796888JQzx7_PNG/4ForestOfHumans_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/threads-of-love/list?title_no=3337',
    title: 'Threads of Love',
    genre: 'Romance',
    views_count: '8.1M',
    subscribed_count: '260,935',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210824_164/1629743878526AzCEH_JPEG/7ThreadsofLove_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-guardian-demon/list?title_no=4321',
    title: 'My Guardian Demon',
    genre: 'Romance',
    views_count: '1M',
    subscribed_count: '54,102',
    rating: '5.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221130_121/1669785783950iRWvw_JPEG/4MyGuardianDemon_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/skye/list?title_no=2234',
    title: 'Skye',
    genre: 'Fantasy',
    views_count: '4M',
    subscribed_count: '185,870',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211113_6/1636740768704UM1Oq_JPEG/6Skye_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/deep/list?title_no=364',
    title: 'DEEP',
    genre: 'Thriller',
    views_count: '5.2M',
    subscribed_count: '133,925',
    rating: '9.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141212_183/1418373133972jxMC5_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/finding-fiends/list?title_no=2756',
    title: 'Finding Fiends',
    genre: 'Comedy',
    views_count: '7.9M',
    subscribed_count: '124,244',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_162/1642558023386W0DRg_JPEG/0FindingFiends_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-shadow-prophet/list?title_no=1881',
    title: 'The Shadow Prophet',
    genre: 'Drama',
    views_count: '1.8M',
    subscribed_count: '90,534',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200123_187/1579737875776vsxk6_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/fray/list?title_no=4351',
    title: 'Fray',
    genre: 'Action',
    views_count: '1.7M',
    subscribed_count: '93,034',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220604_252/1654303768834IjVIQ_JPEG/7Fray_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/see-no-evil/list?title_no=2738',
    title: 'See No Evil',
    genre: 'Thriller',
    views_count: '3.5M',
    subscribed_count: '159,874',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_155/16200872456078XP0J_JPEG/5SeeNoEvil_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dragon-savior/list?title_no=4687',
    title: 'Dragon Savior',
    genre: 'Fantasy',
    views_count: '257,502',
    subscribed_count: '25,276',
    rating: '9.32',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221129_46/1669690523588ceJjo_JPEG/3Dragon_Savior_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/there-must-be-happy-endings/list?title_no=3065',
    title: 'There Must Be Happy Endings',
    genre: 'Romance',
    views_count: '37M',
    subscribed_count: '642,386',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210709_199/1625782966794LhSGD_JPEG/0ThereMustBeHappyEndings_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/soleil/list?title_no=1823',
    title: 'SOLEIL',
    genre: 'Fantasy',
    views_count: '7.9M',
    subscribed_count: '243,547',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210804_161/1628041986363O4If5_JPEG/0SOLEIL+Return_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/zero-game/list?title_no=1704',
    title: 'Zero Game',
    genre: 'Fantasy',
    views_count: '25.3M',
    subscribed_count: '528,893',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210209_122/1612838209086stc6U_JPEG/5ZeroGame_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/ultra-alternate-character/list?title_no=3581',
    title: 'Ultra-Alternate Character',
    genre: 'Action',
    views_count: '6.5M',
    subscribed_count: '208,171',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211111_60/16365697454599Hwma_JPEG/2UltraAlternateCharacter_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/karsearin-adventures-of-a-red-dragon/list?title_no=4447',
    title: '\bKarsearin: Adventures of aRed Dragon',
    genre: 'Fantasy',
    views_count: '2.9M',
    subscribed_count: '155,441',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220707_205/1657145782859RKeIp_JPEG/7Karsearin_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/ninas-magic-chest/list?title_no=4077',
    title: "Nina's Magic Chest",
    genre: 'Fantasy',
    views_count: '2M',
    subscribed_count: '49,931',
    rating: '9.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220405_173/1649095746529JxkXm_JPEG/5Nina27s+Magic+Chest_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/taste-of-illness/list?title_no=2506',
    title: 'Taste of Illness',
    genre: 'Drama',
    views_count: '3.4M',
    subscribed_count: '164,066',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210311_112/1615440182386RfotW_JPEG/3Taste+of+Illness_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/lessa-2/list?title_no=507',
    title: 'LESSA 2 - The Crimson Knight',
    genre: 'Action',
    views_count: '15.7M',
    subscribed_count: '172,746',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150708_184/1436335785882vAVcn_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/charming-you/list?title_no=4156',
    title: 'Charming You',
    genre: 'Romance',
    views_count: '4.8M',
    subscribed_count: '181,399',
    rating: '7.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220504_22/1651617550021hxVma_JPEG/9CharmingYou_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/friday/list?title_no=388',
    title: 'Friday: Forbidden Tales',
    genre: 'Thriller',
    views_count: '13.3M',
    subscribed_count: '184,004',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150213_169/1423819368163KlsBH_JPEG/EC9E91ED9288EC8381EC84B8_MOBILE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/gul/list?title_no=2617',
    title: 'Gul',
    genre: 'Action',
    views_count: '9.5M',
    subscribed_count: '219,867',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210416_144/16185151466523ud3K_JPEG/4Gul_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/hello-world/list?title_no=827',
    title: 'Hello World!',
    genre: 'Slice of life',
    views_count: '1.7M',
    subscribed_count: '30,869',
    rating: '9.11',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161027_4/1477550472998mayUn_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/exchange-student/list?title_no=4288',
    title: 'Exchange Student',
    genre: 'Drama',
    views_count: '1.8M',
    subscribed_count: '106,186',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220614_131/16551600454796wFfx_JPEG/6ExchangeStudent_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/blessed/list?title_no=1193',
    title: '#Blessed',
    genre: 'Drama',
    views_count: '21.6M',
    subscribed_count: '438,864',
    rating: '9.17',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180928_187/1538101336155CCcoT_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/escape-room/list?title_no=1815',
    title: 'Escape Room',
    genre: 'Thriller',
    views_count: '28.4M',
    subscribed_count: '462,926',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210211_268/1612983724061bQqWM_JPEG/4Escape+Room_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/corpse-knight-gunther/list?title_no=5032',
    title: 'Corpse Knight Gunther',
    genre: 'Fantasy',
    views_count: '465,019',
    subscribed_count: '92,317',
    rating: '9.57',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230118_224/1673985362013hsILq_JPEG/3CorpseKnightGunther_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/war-cry/list?title_no=1247',
    title: 'The Red Hook: War Cry',
    genre: 'Superhero',
    views_count: '735,885',
    subscribed_count: '26,681',
    rating: '7.13',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171206_10/1512530369090mBuvb_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/dreaming-freedom/list?title_no=4180',
    title: 'Dreaming Freedom',
    genre: 'Drama',
    views_count: '10.5M',
    subscribed_count: '433,000',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220503_121/1651532227458vlQ3Y_JPEG/5Dreaming+Freedom_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/trailer-park-warlock/list?title_no=1512',
    title: 'Trailer Park Warlock',
    genre: 'Comedy',
    views_count: '6.4M',
    subscribed_count: '103,570',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210507_80/1620350339027l5zpB_JPEG/1TrailerParkWarlock_mobile_landingpage+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/the-dog-diaries/list?title_no=3041',
    title: 'The Dog Diaries',
    genre: 'Slice of life',
    views_count: '3.1M',
    subscribed_count: '85,744',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210708_62/1625700651539PA4Q7_JPEG/2TheDogDiariesLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/trash-bird/list?title_no=473',
    title: 'Trash Bird',
    genre: 'Comedy',
    views_count: '13.3M',
    subscribed_count: '97,886',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150511_9/1431327953299NXGRt_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/historical/the-double-agent/list?title_no=3209',
    title: 'The Double Agent',
    genre: 'Historical',
    views_count: '10.9M',
    subscribed_count: '302,051',
    rating: '8.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210803_227/1627933634627udgIY_JPEG/6TheDoubleAgent_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-gently-raised-beast/list?title_no=2606',
    title: 'My Gently Raised Beast',
    genre: 'Romance',
    views_count: '97.2M',
    subscribed_count: '1.6M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210928_108/1632773645813jAhSY_JPEG/1MyGentlyRaisedBeast_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/eyes/list?title_no=3386',
    title: 'Eyes',
    genre: 'Fantasy',
    views_count: '1.1M',
    subscribed_count: '40,457',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210917_208/1631804579776ne1j7_JPEG/5Eyes_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/maybe-meant-to-be/list?title_no=4208',
    title: 'Maybe Meant to Be',
    genre: 'Romance',
    views_count: '50.5M',
    subscribed_count: '1.3M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220526_160/1653517945580YvJVR_PNG/4MaybeMeantToBe_landingpage_mobile.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/ghost-wife/list?title_no=1471',
    title: 'Ghost Wife',
    genre: 'Romance',
    views_count: '139.9M',
    subscribed_count: '1.4M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181026_191/1540517124785paWeq_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/third-shift-society/list?title_no=1703',
    title: 'Third Shift Society',
    genre: 'Supernatural',
    views_count: '11.8M',
    subscribed_count: '424,755',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190821_112/1566322163930Cp6iT_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/average-adventures-of-an-average-girl/list?title_no=401',
    title: 'Average Adventures of an Average Girl',
    genre: 'Slice of life',
    views_count: '9.6M',
    subscribed_count: '73,429',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220426_192/1650982254504TDcgA_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/drama/about-death/list?title_no=82',
    title: 'About Death',
    genre: 'Drama',
    views_count: '6.3M',
    subscribed_count: '138,642',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_200/1404270243545UVhDF_JPEG/15_ECA3BDEC9D8CEC9790EAB480ED9598EC97AC.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/illustrated-internet/list?title_no=750',
    title: 'Illustrated Internet',
    genre: 'Comedy',
    views_count: '13M',
    subscribed_count: '147,292',
    rating: '9.06',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160906_137/1473130503869qvF5Q_JPEG/Detail_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/faust/list?title_no=522',
    title: 'Faust',
    genre: 'Supernatural',
    views_count: '9M',
    subscribed_count: '84,911',
    rating: '8.00',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150807_147/1438932465366IwJL0_JPEG/_EB9AA1EB80AB_E293A4EABCB9__EB84BD_EB90A3EB80AB_EC86BDE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/staying-healthy-together/list?title_no=1963',
    title: 'Staying Healthy Together',
    genre: 'Informative',
    views_count: '15.7M',
    subscribed_count: '202,674',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200320_239/1584654974501gMJSx_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/shadow-pirates/list?title_no=1455',
    title: 'Shadow Pirates',
    genre: 'Fantasy',
    views_count: '630,652',
    subscribed_count: '47,177',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181001_97/1538366401064TvKK0_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-dungeon-cleaning-life-of-a-once-genius-hunter/list?title_no=4677',
    title: 'The Dungeon Cleaning Lifeof a Once Genius Hunter',
    genre: 'Action',
    views_count: '5.5M',
    subscribed_count: '302,193',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221004_269/1664871030278EJjFd_JPEG/1DCLoaOGH_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/pigminted/list?title_no=482',
    title: 'Pigminted',
    genre: 'Slice of life',
    views_count: '4M',
    subscribed_count: '23,604',
    rating: '8.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150602_146/1433240628756bkM1s_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/eat-fighter/list?title_no=1460',
    title: 'Eat Fighter',
    genre: 'Sports',
    views_count: '1M',
    subscribed_count: '27,683',
    rating: '5.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181003_15/1538506087137XB52W_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/rot-and-ruin/list?title_no=1878',
    title: 'Rot & Ruin',
    genre: 'Horror',
    views_count: '13.6M',
    subscribed_count: '362,460',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200110_66/15786142490772QIET_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile+28629.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/eleceed/list?title_no=1571',
    title: 'Eleceed',
    genre: 'Action',
    views_count: '214.9M',
    subscribed_count: '1.6M',
    rating: '9.94',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210410_276/1618006860453g7PCa_JPEG/804_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/watermelon/list?title_no=1435',
    title: 'Watermelon',
    genre: 'Fantasy',
    views_count: '66.2M',
    subscribed_count: '749,448',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180814_274/1534212511507tK5A6_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/larashati/list?title_no=3483',
    title: "Laras's Heart",
    genre: 'Drama',
    views_count: '1.5M',
    subscribed_count: '89,681',
    rating: '9.04',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211030_28/1635544063294PAnvN_JPEG/7Lara27sHeart_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/blacksmith/list?title_no=3341',
    title: 'BlackSmith',
    genre: 'Supernatural',
    views_count: '1.9M',
    subscribed_count: '79,243',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211104_106/1635961846473QNNNF_JPEG/9Blacksmith_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/traveler/list?title_no=3205',
    title: 'Traveler',
    genre: 'Superhero',
    views_count: '234,619',
    subscribed_count: '21,510',
    rating: '7.91',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220407_118/1649281235098Kgb1w_JPEG/6Traveler_landingpage_mobile_040522.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/lessa/list?title_no=89',
    title: 'LESSA',
    genre: 'Action',
    views_count: '11.8M',
    subscribed_count: '218,683',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_32/1404269779893WFvdb_JPEG/10_EBA088EC82AC.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/shriek/list?title_no=772',
    title: 'Shriek',
    genre: 'Thriller',
    views_count: '28.5M',
    subscribed_count: '373,416',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160920_267/1474357244754OY87J_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/drawing-on-heritage/list?title_no=4315',
    title: 'Drawing on Heritage',
    genre: 'Informative',
    views_count: '568,168',
    subscribed_count: '29,957',
    rating: '8.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_160/1651284639859R2vnD_JPEG/9Drawing+on+Heritage_Launch_landingpage_mobile+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/the-sound-of-another/list?title_no=2955',
    title: 'The Sound of Another',
    genre: 'Sci-fi',
    views_count: '3.5M',
    subscribed_count: '198,808',
    rating: '8.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210708_219/1625695999003lVsm3_JPEG/5TheSoundofAnother_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-male-leads-girl-friend/list?title_no=3412',
    title: "The Male Lead's Girl Friend",
    genre: 'Romance',
    views_count: '15.5M',
    subscribed_count: '356,343',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210911_142/16313051714484Bbtx_JPEG/0TheMaleLeadsGirlfriend_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/theres-love-hidden-in-lies/list?title_no=2467',
    title: "There's Love Hidden in Lies",
    genre: 'Romance',
    views_count: '12.5M',
    subscribed_count: '286,444',
    rating: '7.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210212_47/1613068659277nfShp_JPEG/1TheresLove_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/moonrise/list?title_no=4429',
    title: 'MoonRise',
    genre: 'Action',
    views_count: '192,301',
    subscribed_count: '38,292',
    rating: '8.09',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230120_148/1674177148084ODYsw_JPEG/7MoonRise_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/knight-under-my-heart/list?title_no=4215',
    title: 'Knight Under My Heart',
    genre: 'Action',
    views_count: '3M',
    subscribed_count: '158,479',
    rating: '8.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220707_135/1657142968432cLspk_JPEG/3KUHM_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/moonyou/list?title_no=1340',
    title: 'Moon You',
    genre: 'Sci-fi',
    views_count: '7.2M',
    subscribed_count: '157,888',
    rating: '9.71',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180321_62/1521596380823aBhmg_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/agatha/list?title_no=3525',
    title: 'Agatha',
    genre: 'Drama',
    views_count: '3.3M',
    subscribed_count: '149,635',
    rating: '9.06',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211012_83/1633976292035dMdiI_JPEG/3Agatha_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/discovering-love-a-harlequin-romance-collection/list?title_no=3791',
    title: 'Discovering Love: A Harlequin Romance Collection',
    genre: 'Romance',
    views_count: '1.4M',
    subscribed_count: '61,161',
    rating: '8.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_73/1642557960814I2UR5_JPEG/1DiscoveringLove_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/ctrlz/list?title_no=2141',
    title: 'Ctrl+Z',
    genre: 'Thriller',
    views_count: '9.6M',
    subscribed_count: '196,549',
    rating: '7.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200723_167/1595472069435u56j1_JPEG/11.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/historical/return-of-the-mad-demon/list?title_no=3671',
    title: 'Return of the Mad Demon',
    genre: 'Historical',
    views_count: '16.5M',
    subscribed_count: '397,160',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211203_288/1638480056954VpfbH_JPEG/5Return+of+the+Mad+Demon_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/everything-is-fine/list?title_no=2578',
    title: 'Everything is Fine',
    genre: 'Horror',
    views_count: '84.5M',
    subscribed_count: '1.4M',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210926_97/1632592684598uTWm3_PNG/0MicrosoftTeams-image+283229.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/divorcing-my-tyrant-husband/list?title_no=4942',
    title: 'Divorcing MyTyrant Husband',
    genre: 'Romance',
    views_count: '3.7M',
    subscribed_count: '279,561',
    rating: '8.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221216_243/1671155780269CFnHk_JPEG/3Divorcing_My_Tyrant_Husband_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/bastard/list?title_no=485',
    title: 'Bastard',
    genre: 'Thriller',
    views_count: '145.1M',
    subscribed_count: '1.7M',
    rating: '9.87',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150608_96/1433732722146JfafB_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/witch-hunt/list?title_no=363',
    title: 'Witch Hunt',
    genre: 'Supernatural',
    views_count: '21.2M',
    subscribed_count: '299,272',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141210_204/14182165232143i7wD_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/guardians-of-the-video-game/list?title_no=368',
    title: 'Guardians of the Video Game',
    genre: 'Sci-fi',
    views_count: '6.5M',
    subscribed_count: '59,540',
    rating: '9.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141219_83/1418979734249zHq9w_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/mistake/list?title_no=4118',
    title: 'Mistake',
    genre: 'Drama',
    views_count: '3.5M',
    subscribed_count: '158,650',
    rating: '8.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220408_192/1649356900388xhyp9_JPEG/7Mistake_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/antistalker/list?title_no=2087',
    title: 'AntiSTALKER',
    genre: 'Romance',
    views_count: '45M',
    subscribed_count: '653,810',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200618_294/1592410937999T5UQX_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-croaking/list?title_no=1494',
    title: 'The Croaking',
    genre: 'Fantasy',
    views_count: '55.3M',
    subscribed_count: '625,303',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181208_145/1544234895388T0VgV_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/take-me-im-yours/list?title_no=2833',
    title: "Take Me, I'm Yours",
    genre: 'Drama',
    views_count: '8.4M',
    subscribed_count: '272,266',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210611_183/1623375356811ywLvw_JPEG/6Take+Me2CI27m+Yours_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/tomorrow/list?title_no=3913',
    title: 'Tomorrow',
    genre: 'Drama',
    views_count: '2.2M',
    subscribed_count: '144,012',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220210_217/1644423340123WuVat_JPEG/0Tomorrow_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/return-of-the-blossoming-blade/list?title_no=2849',
    title: 'Return of the Blossoming Blade',
    genre: 'Action',
    views_count: '21.8M',
    subscribed_count: '470,752',
    rating: '9.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210611_271/1623376122313xeKYz_JPEG/1ReturnoftheBlossomingBlade_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/eaternal-nocturnal/list?title_no=2832',
    title: 'Eaternal Nocturnal',
    genre: 'Romance',
    views_count: '49.6M',
    subscribed_count: '1.1M',
    rating: '9.83',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211113_182/1636751709545TOEdR_JPEG/3Eaternal+Nocturnal_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/immortal-weakling/list?title_no=2733',
    title: 'Immortal Weakling',
    genre: 'Superhero',
    views_count: '3.3M',
    subscribed_count: '224,017',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220712_292/1657561749318jpk7z_JPEG/6Immortal+Weakling_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/can-i-take-it-back/list?title_no=4355',
    title: 'Can I Take It Back?',
    genre: 'Romance',
    views_count: '9M',
    subscribed_count: '314,057',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220610_41/1654802653575P3aaw_JPEG/4CanITakeItBack_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/big-jo/list?title_no=854',
    title: 'Big Jo',
    genre: 'Romance',
    views_count: '74.4M',
    subscribed_count: '550,515',
    rating: '9.17',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_121/161170088714467bHY_JPEG/3Big-Jo-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/it-rains-on-precious-days/list?title_no=4442',
    title: 'It Rains on Precious Days',
    genre: 'Romance',
    views_count: '1.8M',
    subscribed_count: '105,172',
    rating: '8.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220701_39/1656609160462xtHIf_JPEG/4ItRainsOnPreciousDays_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/kidults/list?title_no=2968',
    title: 'Kidults',
    genre: 'Slice of life',
    views_count: '3.5M',
    subscribed_count: '158,334',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210630_193/1625008900009tIo3p_JPEG/0KidultsLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/unordinary/list?title_no=679',
    title: 'unOrdinary',
    genre: 'Superhero',
    views_count: '1.1B',
    subscribed_count: '5.7M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211209_142/1639004918412lnBE6_JPEG/9unOrdinary_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/heroine-chic/list?title_no=561',
    title: 'Heroine Chic',
    genre: 'Superhero',
    views_count: '24.7M',
    subscribed_count: '274,529',
    rating: '8.92',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151016_244/1444982580826TTQHb_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/a-fake-affiar/list?title_no=2276',
    title: 'A Fake Affair',
    genre: 'Romance',
    views_count: '1.4M',
    subscribed_count: '44,860',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211210_62/16391262053357cBMD_JPEG/9A+Fake+Affair_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/the-vault-of-horror-a-collection-of-nightmares/list?title_no=295',
    title: 'The Vault of Horror: A Collection of Nightmares',
    genre: 'Horror',
    views_count: '9M',
    subscribed_count: '234,827',
    rating: '8.93',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140922_280/1411355570271SHTm1_JPEG/EBAFB8EC8AA4ED858CEBA6ACEB8BA8ED8EB8EC84A0_mobileEC9E91.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/distant-sky/list?title_no=75',
    title: 'Distant Sky',
    genre: 'Horror',
    views_count: '25.2M',
    subscribed_count: '451,101',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210226_191/1614278258514hbpqj_JPEG/2DistantSky__mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/spellward-bound/list?title_no=3055',
    title: 'Spellward Bound',
    genre: 'Fantasy',
    views_count: '835,565',
    subscribed_count: '102,989',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200703_259/1593785216509aNJEv_PNG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/underprin/list?title_no=78',
    title: 'UnderPrin',
    genre: 'Supernatural',
    views_count: '63M',
    subscribed_count: '602,245',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_163/1404270298566VuEXE_JPEG/12_EC96B8EB8D94ED9484EBA6B0.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/all-that-we-hope-to-be/list?title_no=470',
    title: 'All That We Hope to Be',
    genre: 'Slice of life',
    views_count: '2.3M',
    subscribed_count: '62,699',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150508_171/1431075425785zu90d_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/eternals-500-year-war/list?title_no=3916',
    title: 'Eternals: The 500 Year War',
    genre: 'Superhero',
    views_count: '1M',
    subscribed_count: '170,036',
    rating: '7.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220121_168/1642723999289HgP7w_JPEG/0MarvelEternals_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/our-beloved-summer/list?title_no=3666',
    title: 'Our Beloved Summer',
    genre: 'Romance',
    views_count: '5.6M',
    subscribed_count: '380,817',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211126_62/1637890835983t50Kx_JPEG/8M_details+28129.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/not-an-angel/list?title_no=4263',
    title: 'Not an Angel',
    genre: 'Comedy',
    views_count: '1.3M',
    subscribed_count: '89,664',
    rating: '8.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220809_212/1660003265855sDldX_JPEG/8ShesNoAngel_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/ghost-king/list?title_no=4005',
    title: 'Ghost King',
    genre: 'Action',
    views_count: '2.7M',
    subscribed_count: '144,945',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220226_15/1645827652014fVcDl_JPEG/7Ghost+King_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/lavender-jack/list?title_no=1410',
    title: 'Lavender Jack',
    genre: 'Superhero',
    views_count: '5.5M',
    subscribed_count: '118,247',
    rating: '9.56',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191029_271/1572303542094Ij5sw_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/im-the-grim-reaper/list?title_no=1697',
    title: "I'm the Grim Reaper",
    genre: 'Supernatural',
    views_count: '128.8M',
    subscribed_count: '1.8M',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190813_258/1565642961856QI2Jm_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/adventures-of-god/list?title_no=853',
    title: 'Adventures of God',
    genre: 'Comedy',
    views_count: '454.7M',
    subscribed_count: '1.6M',
    rating: '9.42',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170502_190/1493715290629JX90E_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/my-dud-to-stud-boyfriend/list?title_no=4353',
    title: 'My Dud to Stud Boyfriend',
    genre: 'Drama',
    views_count: '6M',
    subscribed_count: '169,618',
    rating: '8.14',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220608_211/16546552777234wv4v_JPEG/1MDTSBF_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/hardcore-leveling-warrior/list?title_no=1221',
    title: 'Hardcore Leveling Warrior',
    genre: 'Action',
    views_count: '228.8M',
    subscribed_count: '1.3M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210410_283/16180090739402pbhe_JPEG/404_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/jackie-rose/list?title_no=613',
    title: 'Jackie Rose',
    genre: 'Supernatural',
    views_count: '3.9M',
    subscribed_count: '59,713',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160203_284/14544748035167y5wi_JPEG/mobile_EC9E91ED9288EC8381EC84B8.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/homesick/list?title_no=2759',
    title: 'Homesick',
    genre: 'Thriller',
    views_count: '73.2M',
    subscribed_count: '1.3M',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210608_280/1623106223810Jjdjd_JPEG/1Homesick_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/lovely-hell/list?title_no=3181',
    title: 'Lovely Hell',
    genre: 'Fantasy',
    views_count: '5M',
    subscribed_count: '151,616',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_214/1626219741137veS73_JPEG/4LovelyHell_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/edith/list?title_no=1536',
    title: 'Edith',
    genre: 'Romance',
    views_count: '119.3M',
    subscribed_count: '1.3M',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210128_146/1611774385799iij8M_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/mosquito-wars/list?title_no=2404',
    title: 'Mosquito Wars',
    genre: 'Sci-fi',
    views_count: '5.5M',
    subscribed_count: '140,925',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210214_102/16132583313101YhSK_JPEG/6MosquitoWars_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/coffin-jackson/list?title_no=4449',
    title: 'Coffin Jackson',
    genre: 'Drama',
    views_count: '772,314',
    subscribed_count: '52,001',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220701_115/1656621784277u7Pzh_JPEG/2CoffinJackson_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/house-of-stars/list?title_no=1620',
    title: 'House of Stars',
    genre: 'Fantasy',
    views_count: '5.7M',
    subscribed_count: '238,109',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190517_23/1558050105022mspHy_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/live-with-yourself/list?title_no=919',
    title: 'Live with Yourself!',
    genre: 'Comedy',
    views_count: '122.7M',
    subscribed_count: '646,710',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190126_276/1548461567000rLYeF_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/do-you-remember/list?title_no=2882',
    title: 'Do You Remember',
    genre: 'Mystery',
    views_count: '808,627',
    subscribed_count: '41,734',
    rating: '9.06',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220526_265/1653514213249uOudo_JPEG/8DoYouRemember_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/helios-femina/list?title_no=638',
    title: 'Helios:Femina',
    genre: 'Fantasy',
    views_count: '9.7M',
    subscribed_count: '208,489',
    rating: '8.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170602_161/1496393782643nd5Vg_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/housekeeper/list?title_no=3479',
    title: 'Housekeeper',
    genre: 'Sci-fi',
    views_count: '3.1M',
    subscribed_count: '132,149',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220429_245/1651193017193ALh1f_JPEG/2HouseKeeper_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/wolf-and-red-riding-hood/list?title_no=2142',
    title: 'The Wolf & Red Riding Hood',
    genre: 'Comedy',
    views_count: '34.8M',
    subscribed_count: '637,275',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210601_84/1622481416073PdFRc_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/once-a-hero/list?title_no=3211',
    title: 'Once a Hero',
    genre: 'Fantasy',
    views_count: '4.8M',
    subscribed_count: '225,467',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210803_16/1627948927063OakMj_JPEG/7OnceAHero_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/opposite-of-always/list?title_no=2743',
    title: 'Opposite of Always',
    genre: 'Romance',
    views_count: '1.9M',
    subscribed_count: '104,054',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220322_43/1647901016812nVIsA_JPEG/4OppositeOfAlways_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/the-predator/list?title_no=3454',
    title: 'The Predator',
    genre: 'Thriller',
    views_count: '4.7M',
    subscribed_count: '177,670',
    rating: '9.22',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211014_195/16341623559137bJMl_JPEG/0ThePredator_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-distance-between-us/list?title_no=4738',
    title: 'The Distance Between Us',
    genre: 'Romance',
    views_count: '1.6M',
    subscribed_count: '129,177',
    rating: '8.02',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221223_35/16717481190448IhT8_JPEG/7TheDistanceBetweenUs_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/only-hope/list?title_no=5036',
    title: 'Only Hope',
    genre: 'Romance',
    views_count: '598,150',
    subscribed_count: '184,104',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230124_288/16745289100290N8ed_JPEG/8OnlyHope_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/my-kitty-and-old-dog/list?title_no=184',
    title: 'My Kitty and Old Dog',
    genre: 'Slice of life',
    views_count: '16.2M',
    subscribed_count: '110,633',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_293/1404269912917mXSnS_JPEG/02_EB82B4EC96B4EBA6B0EAB3A0EC9691EC9DB4EC9980EB8A99EC9.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/gecko-chan/list?title_no=2717',
    title: 'Gecko Chan',
    genre: 'Comedy',
    views_count: '3.5M',
    subscribed_count: '85,643',
    rating: '9.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210604_20/1622763660708Bp96N_JPEG/5GeckoChan_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/sable-curse/list?title_no=2735',
    title: 'Sable Curse',
    genre: 'Fantasy',
    views_count: '2.8M',
    subscribed_count: '145,742',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220429_206/1651187713533SOpqv_JPEG/6SableCurse_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/love-me-knot/list?title_no=2224',
    title: 'Love Me Knot',
    genre: 'Romance',
    views_count: '44.2M',
    subscribed_count: '916,028',
    rating: '9.34',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210203_300/16122987094673kuMr_JPEG/104_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/rumor-has-it/list?title_no=2967',
    title: 'Rumor Has It',
    genre: 'Romance',
    views_count: '8.1M',
    subscribed_count: '202,082',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220504_56/1651618307594ObjjF_JPEG/3RumorHasIt_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/epilogue/list?title_no=2610',
    title: 'Epilogue',
    genre: 'Thriller',
    views_count: '1.4M',
    subscribed_count: '75,211',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210413_275/16182795064387ymq9_JPEG/9Epilogue_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/phase/list?title_no=2117',
    title: 'Phase',
    genre: 'Romance',
    views_count: '66.3M',
    subscribed_count: '1.1M',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220915_160/1663190037848CQxQc_JPEG/6Phase_landingpage_mobile_720x1230.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/god-of-bath/list?title_no=91',
    title: 'God of Bath',
    genre: 'Comedy',
    views_count: '5.6M',
    subscribed_count: '124,108',
    rating: '9.51',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_204/1404270070900tNeIc_JPEG/17_EBAAA9EC9A95EC9D98EC8BA0.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/master-of-villains/list?title_no=4468',
    title: 'Master of Villains',
    genre: 'Action',
    views_count: '3.6M',
    subscribed_count: '156,647',
    rating: '4.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220802_255/165939505791047qe0_JPEG/7MasterofVillains_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/going-up/list?title_no=3364',
    title: 'Going Up',
    genre: 'Romance',
    views_count: '1.5M',
    subscribed_count: '117,666',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221013_266/1665613988809Ykclg_JPEG/3GoingUp_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/all-that-you-are/list?title_no=403',
    title: 'All That You Are',
    genre: 'Drama',
    views_count: '1.6M',
    subscribed_count: '47,033',
    rating: '9.23',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150311_137/1426040766284XRVMf_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/king-of-the-east/list?title_no=4081',
    title: 'King of the East',
    genre: 'Action',
    views_count: '1.6M',
    subscribed_count: '61,540',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220319_263/1647633059275KcAj0_JPEG/2KingoftheEast_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/this-life-to-the-next/list?title_no=4217',
    title: 'This Life to the Next',
    genre: 'Drama',
    views_count: '2.7M',
    subscribed_count: '134,703',
    rating: '9.24',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220706_166/1657119304509ciUBE_JPEG/6ThisLifetotheNext_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/aza/list?title_no=3994',
    title: 'Aza',
    genre: 'Fantasy',
    views_count: '5M',
    subscribed_count: '257,654',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220309_288/1646789801252ioFDe_JPEG/5Aza_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/answer-me-my-prince/list?title_no=4672',
    title: 'Answer Me, My Prince',
    genre: 'Romance',
    views_count: '1.8M',
    subscribed_count: '106,218',
    rating: '9.19',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221123_289/1669181507856iqfLq_JPEG/0AnswerMeMyPrince_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/lalins-curse/list?title_no=1601',
    title: "Lalin's Curse",
    genre: 'Supernatural',
    views_count: '31.2M',
    subscribed_count: '829,493',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190411_34/1554940936512EcP2y_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/national-dog-day/list?title_no=747',
    title: 'National Dog Day 2016',
    genre: 'Slice of life',
    views_count: '2.9M',
    subscribed_count: '38,058',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160825_266/1472114400141iYAI7_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/blacksun/list?title_no=4082',
    title: 'BlackSun',
    genre: 'Action',
    views_count: '1.5M',
    subscribed_count: '167,589',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221108_118/1667866911949akdFl_JPEG/2BlackSun_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/ode-to-our-youth/list?title_no=3898',
    title: 'Ode to Our Youth',
    genre: 'Comedy',
    views_count: '738,558',
    subscribed_count: '37,010',
    rating: '9.36',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220307_16/1646635163447SC5jJ_JPEG/7OdeToOurYouth_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/red-hood-outlaws/list?title_no=4603',
    title: 'Red Hood: Outlaws',
    genre: 'Action',
    views_count: '3.9M',
    subscribed_count: '273,853',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220813_142/1660345713490WBO0O_JPEG/3RedHood_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/forever-after/list?title_no=2699',
    title: 'Forever After',
    genre: 'Fantasy',
    views_count: '18.2M',
    subscribed_count: '401,107',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210520_102/1621462090919axVTG_JPEG/8ForeverAfter_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/randomphilia/list?title_no=386',
    title: 'RANDOMPHILIA',
    genre: 'Comedy',
    views_count: '18.2M',
    subscribed_count: '81,845',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150216_243/1424066992425xmuC3_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-eagle-and-the-snake/list?title_no=2819',
    title: 'The Eagle and the Snake',
    genre: 'Action',
    views_count: '2.8M',
    subscribed_count: '133,568',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210902_76/1630536205562jEFUi_JPEG/1SeriesLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/no-outtakes/list?title_no=4013',
    title: 'No Outtakes',
    genre: 'Romance',
    views_count: '6.3M',
    subscribed_count: '191,317',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220301_212/1646103325299eGybg_JPEG/5NoOuttakes_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/shard/list?title_no=960',
    title: 'Shard',
    genre: 'Supernatural',
    views_count: '13.1M',
    subscribed_count: '207,324',
    rating: '9.32',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170303_109/1488511174562tc5B0_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/kind-of-confidential/list?title_no=663',
    title: 'Kind of Confidential',
    genre: 'Romance',
    views_count: '64M',
    subscribed_count: '929,054',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200115_165/1579041926641LbVw4_JPEG/Kind-of-Confidential-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/thornstone/list?title_no=1612',
    title: 'Thornstone',
    genre: 'Fantasy',
    views_count: '4.3M',
    subscribed_count: '75,857',
    rating: '9.08',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190424_3/15560663072825GUfh_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/marry-me/list?title_no=1951',
    title: 'Marry Me!',
    genre: 'Romance',
    views_count: '21.3M',
    subscribed_count: '274,652',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200317_293/15843819790484EYFt_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/library-ghost/list?title_no=220',
    title: 'Library Ghost',
    genre: 'Comedy',
    views_count: '7.8M',
    subscribed_count: '73,601',
    rating: '8.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140715_280/14054045226841Izv3_JPEG/05_mobile_libruaryghost.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/match-made-in-hell/list?title_no=2741',
    title: 'Match Made in Hell',
    genre: 'Romance',
    views_count: '9.4M',
    subscribed_count: '262,200',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221220_122/1671494512828LUzk1_JPEG/7Match_Made_in_Hell_Return_Week_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/orange-marmalade/list?title_no=97',
    title: 'ORANGE MARMALADE',
    genre: 'Romance',
    views_count: '127.5M',
    subscribed_count: '1M',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_275/1404269957814dhxdT_JPEG/25_EC98A4EBA08CECA780EBA788EBA790EBA088EC9DB4EB939C.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/boyfriends/list?title_no=2616',
    title: 'Boyfriends.',
    genre: 'Slice of life',
    views_count: '373M',
    subscribed_count: '2.2M',
    rating: '8.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200508_168/1588864233262Ii2O1_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/drama/i-love-yoo/list?title_no=986',
    title: 'I Love Yoo',
    genre: 'Drama',
    views_count: '581M',
    subscribed_count: '4.6M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170331_262/1490952144415HSV9x_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-girl-from-class/list?title_no=73',
    title: 'THE GIRL FROM CLASS',
    genre: 'Drama',
    views_count: '6.9M',
    subscribed_count: '120,457',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140616_209/1402907429203WzveJ_JPEG/07_EC8898EC9785EC8B9CEAB084EAB7B8EB8580.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/illusions-of-adulting/list?title_no=922',
    title: 'Illusions of Adulting',
    genre: 'Slice of life',
    views_count: '4.8M',
    subscribed_count: '71,940',
    rating: '5.93',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170106_167/1483683822391cX0YB_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/ghost-bats/list?title_no=2348',
    title: 'Ghost Bats',
    genre: 'Sci-fi',
    views_count: '785,065',
    subscribed_count: '59,403',
    rating: '9.16',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201119_286/1605730610643uiT3S_JPEG/404_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-devil-is-a-handsome-man/list?title_no=1311',
    title: 'The Devil is a Handsome Man',
    genre: 'Drama',
    views_count: '31.8M',
    subscribed_count: '784,050',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180214_167/15185459216807xeHk_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/ar-toon/list?title_no=775',
    title: 'Unknown Caller',
    genre: 'Thriller',
    views_count: '9M',
    subscribed_count: '528,979',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20161012_119/1476248330834uhJNc_JPEG/Details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/of-dark-lords-and-cabbages/list?title_no=2750',
    title: 'Of Dark Lords and Cabbages',
    genre: 'Romance',
    views_count: '13.6M',
    subscribed_count: '413,719',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211105_99/1636065657106w6UF3_JPEG/1ODLAC_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/bloodless-wars/list?title_no=1622',
    title: 'Bloodless Wars',
    genre: 'Sci-fi',
    views_count: '4.4M',
    subscribed_count: '140,748',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190521_241/1558396776650oQF6B_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/no-scope/list?title_no=1572',
    title: 'No Scope',
    genre: 'Sports',
    views_count: '64.9M',
    subscribed_count: '684,111',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210219_67/1613688921443eBqOe_JPEG/0No+Scope_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/midnight-rhapsody/list?title_no=116',
    title: 'Midnight Rhapsody',
    genre: 'Slice of life',
    views_count: '2.8M',
    subscribed_count: '28,323',
    rating: '9.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_43/1404269924736lQcP7_JPEG/01_EAB3A8EBB0A9ED9998EC8381EAB3A1.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/power-ballad/list?title_no=987',
    title: 'Power Ballad',
    genre: 'Superhero',
    views_count: '1.2M',
    subscribed_count: '38,296',
    rating: '9.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170406_116/1491440344491fNY2v_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/meow-rangers/list?title_no=3273',
    title: 'Meow Rangers',
    genre: 'Comedy',
    views_count: '1.2M',
    subscribed_count: '80,078',
    rating: '9.33',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210827_182/1630026997565fSTOP_JPEG/6Meow+Rangers_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/deadlife/list?title_no=3922',
    title: 'Deadlife',
    genre: 'Action',
    views_count: '4.4M',
    subscribed_count: '119,084',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220217_267/1645041431735Iuuu3_JPEG/8DeadLife_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/blood-reverie/list?title_no=2806',
    title: 'Blood Reverie',
    genre: 'Romance',
    views_count: '15.3M',
    subscribed_count: '470,272',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220518_288/1652823465584hpH2i_JPEG/7BloodReverie_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/judge-and-executioner/list?title_no=4941',
    title: 'Judge and Executioner',
    genre: 'Thriller',
    views_count: '619,469',
    subscribed_count: '105,134',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221214_41/16709838208557NM91_JPEG/7JudgeAndExecutioner_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/love-advice/list?title_no=1498',
    title: 'Love Advice from the Great Duke of Hell',
    genre: 'Comedy',
    views_count: '126M',
    subscribed_count: '1.3M',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_227/1611701885983dab5R_JPEG/3Love-Advice-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/atelier-on-the-sunflower-hill/list?title_no=2883',
    title: 'Atelier on the Sunflower Hill',
    genre: 'Fantasy',
    views_count: '2.4M',
    subscribed_count: '158,697',
    rating: '9.28',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211106_94/1636147658381FuEpB_JPEG/9Atelier+on+the+Sunflower+Hill_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/boo-its-sex/list?title_no=1413',
    title: "BOO! It's Sex",
    genre: 'Slice of life',
    views_count: '90.2M',
    subscribed_count: '604,231',
    rating: '8.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180628_36/1530154882302f1xnu_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/penguin-loves-mev/list?title_no=86',
    title: 'Penguin Loves Mev',
    genre: 'Slice of life',
    views_count: '5.4M',
    subscribed_count: '33,061',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140710_208/1404978826026o5nnu_JPEG/43_ED8EADEAB784EB9FACEBB88CEC8AA4EBA994EBB88C.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-wrath-and-the-dawn/list?title_no=1772',
    title: 'The Wrath & the Dawn',
    genre: 'Fantasy',
    views_count: '72.3M',
    subscribed_count: '1M',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191105_74/1572891833404iVkrf_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/eggnoid/list?title_no=1229',
    title: 'Eggnoid',
    genre: 'Sci-fi',
    views_count: '206.9M',
    subscribed_count: '1.4M',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171114_287/1510603282999xKSAk_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile+28329.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/if-ai-ruled-the-world/list?title_no=2605',
    title: 'If AI Ruled the World',
    genre: 'Sci-fi',
    views_count: '4.5M',
    subscribed_count: '171,079',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210414_162/1618357203653mfeI7_JPEG/9IfAIRuledtheWorld_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/daytime-star/list?title_no=3908',
    title: 'Daytime Star',
    genre: 'Drama',
    views_count: '21.8M',
    subscribed_count: '470,885',
    rating: '9.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220207_259/1644211022980waShL_JPEG/2DaytimeStar_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/just-for-kicks/list?title_no=1152',
    title: 'Just for Kicks',
    genre: 'Slice of life',
    views_count: '27.3M',
    subscribed_count: '256,145',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170831_134/1504115707127zHzA3_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/smity-and-majesty/list?title_no=2706',
    title: 'Smity and Majesty',
    genre: 'Comedy',
    views_count: '7.6M',
    subscribed_count: '145,464',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210609_231/1623203225694SQ9m2_JPEG/1SmityandMajesty_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/webtoon-greenlight/list?title_no=1988',
    title: 'WEBTOON GREENLiGHT',
    genre: 'Fantasy',
    views_count: '16.3M',
    subscribed_count: '740,664',
    rating: '9.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200626_107/1593111138089n3Gzr_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/double-click/list?title_no=3669',
    title: 'Double Click',
    genre: 'Sports',
    views_count: '7.5M',
    subscribed_count: '227,915',
    rating: '9.66',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211203_296/1638481055307OXgV2_JPEG/7DoubleClick_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/aerial-magic/list?title_no=1358',
    title: 'Aerial Magic',
    genre: 'Fantasy',
    views_count: '17.1M',
    subscribed_count: '555,111',
    rating: '9.68',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190220_31/1550607204637mukXl_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/bad-signs/list?title_no=1623',
    title: 'Bad Signs',
    genre: 'Comedy',
    views_count: '15.8M',
    subscribed_count: '280,046',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190521_268/1558395616161fUb8H_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/hell-is-other-people/list?title_no=3176',
    title: 'Hell is Other People',
    genre: 'Thriller',
    views_count: '6.5M',
    subscribed_count: '174,841',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220209_132/1644397944103GiSV1_JPEG/6HellisOtherPeople_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/hooves-of-death/list?title_no=1535',
    title: 'Hooves of Death',
    genre: 'Fantasy',
    views_count: '24.9M',
    subscribed_count: '325,504',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190131_226/15488963495255X2Me_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/lmly/list?title_no=2700',
    title: 'LMLY',
    genre: 'Romance',
    views_count: '8.7M',
    subscribed_count: '472,471',
    rating: '9.50',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211016_284/1634320871056mAEnB_JPEG/4LMLY_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/subzero/list?title_no=1468',
    title: 'SubZero',
    genre: 'Romance',
    views_count: '336M',
    subscribed_count: '2.9M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181022_143/1540172646889wKMqQ_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/star-cross/list?title_no=1599',
    title: 'The Red Hook: STARCROSS',
    genre: 'Superhero',
    views_count: '271,786',
    subscribed_count: '18,392',
    rating: '7.11',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190410_144/15548449876925JJVu_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/meow-man/list?title_no=1677',
    title: 'Meow Man',
    genre: 'Comedy',
    views_count: '30.3M',
    subscribed_count: '312,768',
    rating: '9.69',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190717_80/1563316908471NNCNx_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/lovebot/list?title_no=2324',
    title: 'LoveBot',
    genre: 'Sci-fi',
    views_count: '20.2M',
    subscribed_count: '370,769',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201027_279/1603744837600mg8LE_JPEG/504_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/sirens-lament/list?title_no=632',
    title: "Siren's Lament",
    genre: 'Romance',
    views_count: '439.3M',
    subscribed_count: '3.1M',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160303_50/1456999790371cxSbX_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-girl-downstairs/list?title_no=1809',
    title: 'The Girl Downstairs',
    genre: 'Romance',
    views_count: '39.8M',
    subscribed_count: '577,879',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191113_170/1573605584851zblKy_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/life-outside-the-circle/list?title_no=1260',
    title: 'Life Outside the Circle',
    genre: 'Drama',
    views_count: '12.8M',
    subscribed_count: '213,891',
    rating: '9.40',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171216_138/1513394299433jQsM0_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/eros-conquers-all/list?title_no=3312',
    title: 'Eros Conquers All',
    genre: 'Supernatural',
    views_count: '2.2M',
    subscribed_count: '170,144',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220210_14/1644423726927kRqIE_JPEG/9ErosConquersAll_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/batman-wayne-family-adventures/list?title_no=3180',
    title: 'Batman: Wayne FamilyAdventures',
    genre: 'Slice of life',
    views_count: '71.1M',
    subscribed_count: '1.2M',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220526_207/1653500104970mcEID_JPEG/3BatmanFamilyAdven_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/night-of-silence/list?title_no=3765',
    title: 'Night of Silence',
    genre: 'Thriller',
    views_count: '915,560',
    subscribed_count: '72,571',
    rating: '9.20',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_264/16425589707798b9gl_JPEG/6NightofSilence_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-gamer/list?title_no=88',
    title: 'The Gamer',
    genre: 'Action',
    views_count: '451.2M',
    subscribed_count: '2.1M',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_282/14042700947059xYVv_JPEG/29_EB8D94EAB28CEC9DB4EBA8B8.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-fabled-warrior/list?title_no=3179',
    title: 'The Fabled Warrior',
    genre: 'Fantasy',
    views_count: '3.6M',
    subscribed_count: '171,184',
    rating: '9.21',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210729_239/16275192187079gR2V_JPEG/4TheFabledWarrior_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/men-of-the-harem/list?title_no=2443',
    title: 'Men of the Harem',
    genre: 'Fantasy',
    views_count: '72M',
    subscribed_count: '1.3M',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210204_220/1612407334294vy0Np_JPEG/9MenOfTheHarem_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/sidekicks/list?title_no=92',
    title: 'SIDEKICKS',
    genre: 'Superhero',
    views_count: '18.6M',
    subscribed_count: '210,372',
    rating: '9.38',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20140702_251/1404270062631jz0Tb_JPEG/31_EC82ACEC9DB4EB939CED82A5.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/your-throne/list?title_no=2009',
    title: 'Your Throne',
    genre: 'Fantasy',
    views_count: '129.4M',
    subscribed_count: '1.6M',
    rating: '9.82',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200513_169/1589334371783aBm6j_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-strange-tales-of-oscar-zahn/list?title_no=685',
    title: 'The Strange Tales of Oscar Zahn',
    genre: 'Fantasy',
    views_count: '15.8M',
    subscribed_count: '357,119',
    rating: '9.79',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160609_289/1465437543245Yrtrl_JPEG/Detail_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/archie-comics-big-ethel-energy/list?title_no=3363',
    title: 'Archie Comics:Big Ethel Energy',
    genre: 'Drama',
    views_count: '22.1M',
    subscribed_count: '386,584',
    rating: '8.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210910_66/1631216076370t4B4d_JPEG/0ArchieComics_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/the-gentlemans-armchair/list?title_no=469',
    title: 'The Gentleman\u2019s Armchair',
    genre: 'Comedy',
    views_count: '6.3M',
    subscribed_count: '58,038',
    rating: '8.91',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150513_208/1431524798471IWGRa_JPEG/details_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/zatanna-and-the-ripper/list?title_no=4518',
    title: 'Zatanna & the Ripper',
    genre: 'Fantasy',
    views_count: '2.9M',
    subscribed_count: '202,097',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220804_152/1659558342523zY9eS_JPEG/7Zatanna_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/rewriting-extinction/list?title_no=3648',
    title: 'Rewriting Extinction',
    genre: 'Comedy',
    views_count: '1.8M',
    subscribed_count: '102,660',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211215_167/1639531733981suhJa_JPEG/0RewritingExtinction_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/phone-addict/list?title_no=4187',
    title: 'Phone Addict',
    genre: 'Romance',
    views_count: '5.3M',
    subscribed_count: '202,303',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220603_66/1654213773115QPSnp_JPEG/9Phone+Addict_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/clinic-of-horrors/list?title_no=3414',
    title: 'Clinic of Horrors',
    genre: 'Supernatural',
    views_count: '68.9M',
    subscribed_count: '851,157',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211026_63/1635205909903n5gff_JPEG/2ClinicofHorrors_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/moon-beard/list?title_no=471',
    title: 'MOONBEARD',
    genre: 'Comedy',
    views_count: '8M',
    subscribed_count: '60,636',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150519_165/1432039108737ebhBX_JPEG/EC9E91ED9288EC8381EC84B8_MOBILE.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/the-golden-spoon/list?title_no=2565',
    title: 'The Golden Spoon',
    genre: 'Drama',
    views_count: '2.9M',
    subscribed_count: '66,020',
    rating: '9.15',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210714_171/1626228126088edPO9_JPEG/9The+Golden+Spoon_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/best-teacher-baek/list?title_no=4153',
    title: 'Best Teacher Baek',
    genre: 'Action',
    views_count: '4.2M',
    subscribed_count: '141,624',
    rating: '9.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220427_112/1651008750333hYP9F_JPEG/1BestTeacherBaek_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/warrior-of-the-wild/list?title_no=2701',
    title: 'Warrior of the Wild',
    genre: 'Action',
    views_count: '3.9M',
    subscribed_count: '130,922',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210605_292/1622851491249c06mu_JPEG/7WarrioroftheWild_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/weakhero/list?title_no=1726',
    title: 'Weak Hero',
    genre: 'Action',
    views_count: '200.1M',
    subscribed_count: '1.4M',
    rating: '9.84',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210331_138/1617152372024Dq7Wb_JPEG/4WeakHero_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/moonlight-beauty-parlor/list?title_no=3092',
    title: 'Moonlight Beauty Parlor',
    genre: 'Drama',
    views_count: '4.4M',
    subscribed_count: '167,155',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210710_209/1625880029231KDnjm_JPEG/7Moonlight+Beauty+ParlorLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/to-you-who-swallowed-a-star/list?title_no=2533',
    title: 'To You Who Swallowed a Star',
    genre: 'Romance',
    views_count: '35.1M',
    subscribed_count: '590,072',
    rating: '9.47',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210922_63/1632243998999gByKb_JPEG/2ToYouWhoSwallowedaStar_Refresh_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/ghost-on-the-roof/list?title_no=2872',
    title: 'Ghost on the Roof',
    genre: 'Drama',
    views_count: '1.6M',
    subscribed_count: '93,751',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220730_75/1659135955141M1fSb_JPEG/4GhostontheRoof_landingpage_mobile_.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-wildlands/list?title_no=2831',
    title: 'The Wildlands',
    genre: 'Fantasy',
    views_count: '1M',
    subscribed_count: '72,339',
    rating: '9.41',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220405_131/16491004930356ux2t_JPEG/8TheWildlands_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/date-first-love-later/list?title_no=3345',
    title: 'Date First, Love Later',
    genre: 'Romance',
    views_count: '16.7M',
    subscribed_count: '389,752',
    rating: '9.53',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210921_93/1632189901540wJN4T_JPEG/1Date+First2C+Love+Later_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/mystery/garden-club-detective-squad/list?title_no=2410',
    title: 'Garden Club Detective Squad',
    genre: 'Mystery',
    views_count: '5.7M',
    subscribed_count: '196,495',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210126_294/16116217776976O82D_JPEG/3GardenClubDetectiveSquad_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/nano-machine/list?title_no=4344',
    title: 'Nano Machine',
    genre: 'Action',
    views_count: '4.9M',
    subscribed_count: '119,654',
    rating: '9.59',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220607_148/1654582004927lztmY_JPEG/7NanoMachine_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/ghosts-over-wild-flowers/list?title_no=718',
    title: 'Ghosts Among the Wild Flowers',
    genre: 'Fantasy',
    views_count: '6.7M',
    subscribed_count: '122,419',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160902_272/1472782158788u0y5n_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-most-ordinary-girl/list?title_no=4173',
    title: 'The Most Ordinary Girl',
    genre: 'Romance',
    views_count: '3M',
    subscribed_count: '135,545',
    rating: '9.31',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220503_287/1651517692700ND10x_JPEG/4OrdinaryGirl_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/behind-the-gifs/list?title_no=658',
    title: 'Behind the GIFs',
    genre: 'Comedy',
    views_count: '116.2M',
    subscribed_count: '329,911',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160419_105/1461030159755GVgNr_JPEG/EC9E91ED9288EC8381EC84B8_mobile_img.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/crumbs/list?title_no=1648',
    title: 'Crumbs',
    genre: 'Romance',
    views_count: '12.8M',
    subscribed_count: '317,218',
    rating: '9.70',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190611_292/1560198583239HFoca_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/cinnamonroll/list?title_no=2226',
    title: 'CinnamonRoll',
    genre: 'Romance',
    views_count: '8M',
    subscribed_count: '290,059',
    rating: '8.77',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200911_180/1599761243731nqrU5_JPEG/804_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/lars/list?title_no=358',
    title: 'Lars',
    genre: 'Slice of life',
    views_count: '8.5M',
    subscribed_count: '46,473',
    rating: '8.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211022_99/16349144430402Es34_JPEG/thumbnail.jpg',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dragnarok/list?title_no=1018',
    title: 'Dragnarok',
    genre: 'Fantasy',
    views_count: '10.5M',
    subscribed_count: '363,087',
    rating: '9.48',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170426_137/1493175331175zkhVw_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/my-giant-nerd-boyfriend/list?title_no=958',
    title: 'My Giant Nerd Boyfriend',
    genre: 'Slice of life',
    views_count: '750.1M',
    subscribed_count: '2.3M',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170306_193/14887668544984lhuh_JPEG/M_details.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/backchannel/list?title_no=1456',
    title: 'Backchannel',
    genre: 'Superhero',
    views_count: '2.1M',
    subscribed_count: '149,841',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20181002_240/1538419715562GiSfH_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/lilac-200/list?title_no=3116',
    title: 'Lilac 200%',
    genre: 'Drama',
    views_count: '2.4M',
    subscribed_count: '70,808',
    rating: '9.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210916_111/1631757082957G8Vxs_JPEG/4Lilac20025_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/mayas-world/list?title_no=3200',
    title: "Maya's World",
    genre: 'Drama',
    views_count: '2.3M',
    subscribed_count: '105,198',
    rating: '9.18',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210727_141/1627339676436zJ9SB_PNG/7Maya27SWorld_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/my-s-class-hunters/list?title_no=3963',
    title: 'My S-Class Hunters',
    genre: 'Action',
    views_count: '10.3M',
    subscribed_count: '355,882',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220312_36/16470315648352eVfT_JPEG/7MySClassHunter_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/religiously-gay/list?title_no=2746',
    title: 'Religiously Gay',
    genre: 'Romance',
    views_count: '2.3M',
    subscribed_count: '90,218',
    rating: '6.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220201_112/1643669355082gwXxH_JPEG/2ReligiouslyGay_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/blades-of-furry/list?title_no=2383',
    title: 'Blades of Furry',
    genre: 'Romance',
    views_count: '32.1M',
    subscribed_count: '469,940',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211204_151/1638583195242I4x8Y_JPEG/2BladesofFurry_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/letsplay/list?title_no=1218',
    title: "Let's Play",
    genre: 'Romance',
    views_count: '667.1M',
    subscribed_count: '4.8M',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210629_204/1624917440082pN0q6_PNG/3Let27sPlay_mobile_landingpage.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/spells-from-hell/list?title_no=2431',
    title: 'Spells From Hell',
    genre: 'Fantasy',
    views_count: '17.4M',
    subscribed_count: '430,034',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210128_28/1611784248402v7iP6_JPEG/3Spells+From+Hell_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/for-the-sake-of-sita/list?title_no=349',
    title: 'For the Sake of Sita',
    genre: 'Romance',
    views_count: '9M',
    subscribed_count: '257,667',
    rating: '9.52',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20141124_8/1416791872459z6Uj9_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/the-boxer/list?title_no=2027',
    title: 'The Boxer',
    genre: 'Sports',
    views_count: '164.9M',
    subscribed_count: '1.5M',
    rating: '9.86',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210410_35/16180079370625ksUI_JPEG/004_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/dark-moon-the-grey-city/list?title_no=4168',
    title: 'DARK MOON: THE GREY CITY',
    genre: 'Fantasy',
    views_count: '1M',
    subscribed_count: '161,040',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221203_159/1670027318889m05uh_PNG/0_720x1230_M_details.png?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/midnight-rhapsody-season2/list?title_no=365',
    title: 'Midnight Rhapsody : Season 2',
    genre: 'Slice of life',
    views_count: '2.1M',
    subscribed_count: '20,054',
    rating: '8.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150309_79/14259058130126Oct9_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/the-build-up/list?title_no=2712',
    title: 'The Build Up',
    genre: 'Sports',
    views_count: '12.3M',
    subscribed_count: '214,691',
    rating: '9.78',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_162/16200814438380c2p8_JPEG/6TheBuildUp_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/falling-in-the-blue/list?title_no=2291',
    title: 'Falling in the Blue',
    genre: 'Sci-fi',
    views_count: '1M',
    subscribed_count: '85,897',
    rating: '9.29',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_172/1611695894885w7sQB_JPEG/804_EC9E91ED9288EC8381EC84B8_mobile+28429.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/denma/list?title_no=921',
    title: 'Denma',
    genre: 'Sci-fi',
    views_count: '25.3M',
    subscribed_count: '83,009',
    rating: '8.95',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170106_68/1483691370410fPj3J_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/warrior-executioner/list?title_no=3966',
    title: 'Warrior Executioner',
    genre: 'Fantasy',
    views_count: '1.3M',
    subscribed_count: '42,470',
    rating: '9.30',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220430_106/1651260641357ETtaQ_JPEG/9Warrior+Executioner_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/uriah/list?title_no=1607',
    title: 'Uriah',
    genre: 'Horror',
    views_count: '24.7M',
    subscribed_count: '425,306',
    rating: '9.80',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190713_241/1562973956224v3OXc_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/the-dukes-teddy-bear/list?title_no=5045',
    title: "The Duke's Teddy Bear",
    genre: 'Romance',
    views_count: '1.1M',
    subscribed_count: '135,348',
    rating: '8.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20230120_106/1674201520247dNWyh_JPEG/4The_Duke_s_Teddy_Bear_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/the-fever-king/list?title_no=1659',
    title: 'The Fever King',
    genre: 'Superhero',
    views_count: '24.3M',
    subscribed_count: '527,021',
    rating: '9.55',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20190628_78/1561654919661NBQGl_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile+28429.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/god-tribe/list?title_no=4352',
    title: 'God Tribe',
    genre: 'Fantasy',
    views_count: '2.7M',
    subscribed_count: '117,825',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220603_113/1654211284859GIcl8_JPEG/8GodTribe_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/one-thousand/list?title_no=1217',
    title: '1000',
    genre: 'Action',
    views_count: '1.5M',
    subscribed_count: '106,117',
    rating: '8.98',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171107_87/1510002525906RIeAl_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/study-group/list?title_no=3595',
    title: 'Study Group',
    genre: 'Action',
    views_count: '16.8M',
    subscribed_count: '530,719',
    rating: '9.74',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211112_273/1636694807986keowM_JPEG/8StudyGroup_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/nevertheless/list?title_no=2647',
    title: 'Nevertheless',
    genre: 'Romance',
    views_count: '15.5M',
    subscribed_count: '551,818',
    rating: '9.27',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210504_108/1620091510738rfDIP_JPEG/7Nevertheless_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/my-irresistible-ex/list?title_no=3348',
    title: 'My Irresistible Ex',
    genre: 'Romance',
    views_count: '7.7M',
    subscribed_count: '265,870',
    rating: '7.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210917_227/1631834024578Mqtsa_JPEG/5My+Irresistible+Ex_Launch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/machine-uprising/list?title_no=4152',
    title: 'Machine Uprising',
    genre: 'Sci-fi',
    views_count: '658,182',
    subscribed_count: '37,144',
    rating: '9.49',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220429_217/1651218210229w1zkk_JPEG/1MachineUprising_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/romance-punch/list?title_no=3360',
    title: 'Romance Punch',
    genre: 'Comedy',
    views_count: '873,050',
    subscribed_count: '66,382',
    rating: '9.32',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220404_281/1649038245742g3AiJ_JPEG/5Romance+Punch_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/marry-my-husband/list?title_no=4572',
    title: 'Marry My Husband',
    genre: 'Romance',
    views_count: '33.2M',
    subscribed_count: '1.2M',
    rating: '9.65',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220827_124/1661543792576nmBry_JPEG/0Marry+My+Husband_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/gosu/list?title_no=1099',
    title: 'GOSU',
    genre: 'Action',
    views_count: '93.7M',
    subscribed_count: '733,164',
    rating: '9.85',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220129_48/1643396384428bS4JM_JPEG/7Gosu_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/april-flowers/list?title_no=1363',
    title: 'April Flowers',
    genre: 'Fantasy',
    views_count: '16M',
    subscribed_count: '384,684',
    rating: '9.46',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180420_88/1524188258624QDkSS_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/thriller/the-saviors-time/list?title_no=2608',
    title: "The Savior's Time",
    genre: 'Thriller',
    views_count: '2.6M',
    subscribed_count: '128,589',
    rating: '9.58',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210403_88/1617383653047mEgTL_JPEG/2TheSaviorsTime_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/the-world-is-money-and-power/list?title_no=2615',
    title: 'The World is Money and Power',
    genre: 'Action',
    views_count: '8.1M',
    subscribed_count: '214,634',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210414_41/1618357918050GXOFI_JPEG/5TheWorldisMoneyandPower_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/comedy/cat-vs-dog/list?title_no=2961',
    title: 'Cat vs. Dog',
    genre: 'Comedy',
    views_count: '7.9M',
    subscribed_count: '120,708',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211202_159/163839919114313MG1_JPEG/7CATvsDog_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/cloud-walker/list?title_no=2730',
    title: 'Cloud Walker',
    genre: 'Action',
    views_count: '5.9M',
    subscribed_count: '245,644',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220119_21/16425579122013mnnd_JPEG/8CloudWalker_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/limit-breaker/list?title_no=4176',
    title: 'Limit Breaker',
    genre: 'Action',
    views_count: '6.9M',
    subscribed_count: '239,739',
    rating: '9.25',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220503_245/1651535791050NG7lk_JPEG/5LimitBreaker_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/2015-space-series/list?title_no=391',
    title: '2015: Space Series',
    genre: 'Sci-fi',
    views_count: '1.1M',
    subscribed_count: '59,007',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20150225_188/1424846617757aaTky_JPEG/EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/carl/list?title_no=1216',
    title: 'CARL',
    genre: 'Slice of life',
    views_count: '52M',
    subscribed_count: '405,771',
    rating: '9.76',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210707_215/1625603663180f3xn6_JPEG/6CARL_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/lily-crown/list?title_no=2751',
    title: 'Lily Crown',
    genre: 'Action',
    views_count: '1.9M',
    subscribed_count: '87,109',
    rating: '9.54',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220405_117/1649099398514atfrz_JPEG/0LilyCrown_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/the-first-night-with-the-duke/list?title_no=1267',
    title: 'The First Night With the Duke',
    genre: 'Fantasy',
    views_count: '104.3M',
    subscribed_count: '1.3M',
    rating: '9.67',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20201111_184/1605035764532InFYg_JPEG/304_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/luff/list?title_no=1489',
    title: 'LUFF',
    genre: 'Romance',
    views_count: '93M',
    subscribed_count: '1.2M',
    rating: '9.26',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20191105_141/1572898115411xGw5H_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/reunion/list?title_no=3416',
    title: 'Reunion',
    genre: 'Romance',
    views_count: '30M',
    subscribed_count: '921,254',
    rating: '9.72',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220311_21/1646942392162KQtFc_JPEG/8Reunion_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sports/ecstasy-hearts/list?title_no=604',
    title: 'Ecstasy Hearts',
    genre: 'Sports',
    views_count: '146.7M',
    subscribed_count: '1.4M',
    rating: '9.02',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160128_172/1453949970877i4X9K_JPEG/And_EC9E91ED9288EC8381EC84B8.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/horror/have-you-any-fear/list?title_no=1197',
    title: 'Have You Any Fear?',
    genre: 'Horror',
    views_count: '4.7M',
    subscribed_count: '221,223',
    rating: '8.61',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20171013_191/1507836840981I2wx2_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154',
    title: 'Omniscient Reader',
    genre: 'Action',
    views_count: '200.8M',
    subscribed_count: '2.5M',
    rating: '9.90',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20200813_68/1597264242338akqa2_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/super-hero/supersonic-girl/list?title_no=633',
    title: 'Supersonic Girl',
    genre: 'Superhero',
    views_count: '12.6M',
    subscribed_count: '215,794',
    rating: '9.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20180418_255/1523993811829Wwflz_JPEG/04_EC9E91ED9288EC8381EC84B8_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/tiptoon/cooking-comically/list?title_no=622',
    title: 'Cooking Comically',
    genre: 'Informative',
    views_count: '5.7M',
    subscribed_count: '146,294',
    rating: '9.64',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20160218_206/1455774323529j8L6O_JPEG/EC9E91ED9288EC8381EC84B8_mobile_img.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/drama/asterion/list?title_no=2471',
    title: 'Asterion',
    genre: 'Drama',
    views_count: '2M',
    subscribed_count: '98,854',
    rating: '9.10',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_286/1611698377192jE7HR_JPEG/0Asterion_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/romance/maid-for-hire/list?title_no=2725',
    title: 'Maid for Hire',
    genre: 'Romance',
    views_count: '19M',
    subscribed_count: '488,446',
    rating: '9.35',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20211005_236/1633396627776xwwAk_JPEG/4MaidForHire_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/slice-of-life/immortal-nerd/list?title_no=579',
    title: 'Immortal Nerd',
    genre: 'Slice of life',
    views_count: '3M',
    subscribed_count: '30,428',
    rating: '7.88',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20151112_279/1447322446183hLrvH_JPEG/And_EC9E91ED9288EC8381EC84B8_1.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/sword-interval/list?title_no=486',
    title: 'Sword Interval',
    genre: 'Supernatural',
    views_count: '23.6M',
    subscribed_count: '146,877',
    rating: '9.63',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210127_21/1611707972131oEvj2_JPEG/5Sword-Internal-Mobile-Landing-Page.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/zomgan/list?title_no=4785',
    title: 'ZOMGAN',
    genre: 'Action',
    views_count: '3.6M',
    subscribed_count: '319,946',
    rating: '9.60',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221014_109/16657283490939w4HH_JPEG/2Zomgan_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/lady-knight/list?title_no=2727',
    title: 'Lady Knight',
    genre: 'Fantasy',
    views_count: '6.8M',
    subscribed_count: '262,416',
    rating: '9.73',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210701_44/1625073914854mmtgU_JPEG/1LadyKnightLaunch_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/sf/miez/list?title_no=2719',
    title: 'Miez',
    genre: 'Sci-fi',
    views_count: '1.1M',
    subscribed_count: '97,087',
    rating: '9.29',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20220208_52/1644288517252td8TW_JPEG/5Miez_Launch_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/action/infinite-leveling-murim/list?title_no=2676',
    title: 'Infinite Leveling: Murim',
    genre: 'Action',
    views_count: '16M',
    subscribed_count: '266,764',
    rating: '9.62',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20210518_69/1621294881704jILNb_JPEG/9InfiniteLevelingMurim_mobile_landingpage.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/supernatural/of-swamp-and-sea/list?title_no=2736',
    title: 'Of Swamp & Sea',
    genre: 'Supernatural',
    views_count: '6.9M',
    subscribed_count: '215,196',
    rating: '9.75',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20221123_142/1669164461083Q8qQ0_JPEG/7ofswampandsea_landingpage_mobile.jpg?type=crop540_540',
  },
  {
    url: 'https://www.webtoons.com/en/fantasy/winter-moon/list?title_no=1093',
    title: 'Winter Moon',
    genre: 'Fantasy',
    views_count: '464.3M',
    subscribed_count: '1.8M',
    rating: '9.39',
    img_url:
      'https://swebtoon-phinf.pstatic.net/20170116_300/1484538473038H7xLW_JPEG/thumbnail.jpg',
  },
]

export default allWebtoonData
