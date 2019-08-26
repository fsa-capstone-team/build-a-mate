'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jayz@email.com',
      password: '123',
      firstName: 'Shawn',
      lastName: 'Carter',
      age: 49,
      summary:
        'Hi, my name is Shawn, but I go by Jay-Z. I am looking for Beyonce.',
      gender: 'male',
      genderPreference: 'female',
      photos: [],
      bwFaceDesc:
        '[-0.09169824421405792,0.1342904418706894,0.09197903424501419,-0.02322578988969326,-0.0824228897690773,-0.05226777866482735,-0.0024356739595532417,-0.06059049442410469,0.1405920684337616,-0.057538196444511414,0.215708926320076,-0.04338629171252251,-0.19315408170223236,-0.08686245232820511,-0.022316807880997658,0.1642191857099533,-0.16567496955394745,-0.10568832606077194,-0.1126694604754448,-0.09661419689655304,-0.01788153313100338,0.05151759833097458,-0.048632148653268814,0.05204658582806587,-0.06245778501033783,-0.27420613169670105,-0.05079498887062073,-0.09111151099205017,0.03481326997280121,-0.13352783024311066,0.01862211525440216,0.07771501690149307,-0.20160868763923645,-0.05217180401086807,-0.022833917289972305,0.039416760206222534,0.008891521021723747,-0.028018217533826828,0.08385956287384033,-0.032454878091812134,-0.16970926523208618,-0.007365526631474495,0.026442525908350945,0.2593335211277008,0.15247979760169983,0.03567882627248764,-0.02890407294034958,-0.05460595339536667,0.0372060164809227,-0.20204003155231476,0.012840669602155685,0.12404776364564896,0.06902085989713669,0.10745468735694885,-0.006392086856067181,-0.1953820437192917,0.017992353066802025,0.044314879924058914,-0.1599797010421753,-0.00811799243092537,0.0311074610799551,-0.09303312003612518,-0.06660148501396179,-0.05740921199321747,0.288725346326828,0.07125560939311981,-0.13022735714912415,-0.15830408036708832,0.15305578708648682,-0.14840921759605408,-0.03577692061662674,0.0812682956457138,-0.08020476251840591,-0.11226461082696915,-0.29294201731681824,0.12648558616638184,0.38713622093200684,0.10900858789682388,-0.1968761682510376,0.04680032655596733,-0.14915020763874054,0.007524946704506874,-0.00946085900068283,0.10827074199914932,-0.07378963381052017,0.03916759788990021,-0.06490036845207214,0.011423271149396896,0.11012117564678192,-0.016898714005947113,-0.015358923003077507,0.22568419575691223,-0.006979736499488354,0.0024863509461283684,-0.006695372052490711,-0.0076058972626924515,-0.047315798699855804,0.016287963837385178,-0.04664802551269531,-0.008755350485444069,0.0871056541800499,-0.08505898714065552,-0.010507609695196152,0.13374531269073486,-0.17215362191200256,0.1785794198513031,0.02276753820478916,0.029884975403547287,0.04821624234318733,0.07516005635261536,-0.03983038291335106,-0.09776119142770767,0.16263441741466522,-0.29042190313339233,0.22406364977359772,0.16762420535087585,0.033993881195783615,0.1533375382423401,0.04226699471473694,0.16340301930904388,-0.03049393929541111,-0.03019086830317974,-0.12813584506511688,-0.03264879435300827,0.08876848965883255,-0.08340518921613693,-0.0016106516122817993,0.060122765600681305]',
      createdFaceDesc:
        '[-0.10979459434747696,0.11729476600885391,0.07223783433437347,-0.035210154950618744,-0.034908097237348557,-0.07700686156749725,-0.019528541713953018,-0.07362622767686844,0.14941871166229248,-0.0358862467110157,0.24139806628227234,0.014766266569495201,-0.1581655740737915,-0.06723571568727493,0.021987590938806534,0.1189129501581192,-0.1612200289964676,-0.06715770065784454,-0.0777772068977356,-0.11046570539474487,-0.017073282971978188,0.059494372457265854,-0.007021118421107531,0.07408062368631363,-0.06664101034402847,-0.2002510130405426,-0.061323411762714386,-0.14196482300758362,0.055913787335157394,-0.09662541002035141,-0.0049635134637355804,0.05952564626932144,-0.1710117608308792,-0.03127261996269226,0.02213679440319538,0.04871298372745514,0.05803311616182327,0.01161362137645483,0.12851229310035706,-0.006772044580429792,-0.11921674758195877,-0.036149121820926666,0.06398104876279831,0.23309439420700073,0.15325556695461273,0.00015597976744174957,-0.0034705940634012222,-0.04565455764532089,0.05582316219806671,-0.1527448147535324,0.004835253581404686,0.09980299323797226,0.1205606758594513,0.06852469593286514,0.041896335780620575,-0.268022745847702,-0.010633296333253384,0.050271403044462204,-0.13640989363193512,0.06163682043552399,0.011897127144038677,-0.05951548367738724,-0.09344902634620667,-0.04662676900625229,0.27533674240112305,0.07096847146749496,-0.16714899241924286,-0.14698489010334015,0.1187376156449318,-0.11930864304304123,-0.04371313005685806,0.10893385857343674,-0.10782597213983536,-0.1220775619149208,-0.26668351888656616,0.06200769171118736,0.3463032841682434,0.08514407277107239,-0.2270287722349167,0.06775721907615662,-0.14739710092544556,-0.04093658924102783,-0.04659678414463997,0.09803904592990875,-0.09473344683647156,0.09639224410057068,-0.06704962253570557,-0.013295426964759827,0.1072683334350586,0.020341893658041954,0.026041002944111824,0.21248039603233337,-0.05351170897483826,0.04628836363554001,-0.028495043516159058,-0.0021935775876045227,-0.07267694175243378,-0.047733526676893234,-0.08058278262615204,-0.05869153141975403,0.0017159080598503351,-0.13531291484832764,-0.018644563853740692,0.09566956013441086,-0.25079745054244995,0.1356952041387558,0.03540480136871338,0.004636920057237148,-0.039040058851242065,0.0813799500465393,-0.03434228152036667,-0.015144594945013523,0.18138718605041504,-0.2834528088569641,0.2144467830657959,0.1715688705444336,0.043734848499298096,0.15787486732006073,0.05068144574761391,0.1143861636519432,-0.03479531779885292,-0.014122972264885902,-0.10125645995140076,-0.03008456900715828,0.012336436659097672,-0.11412401497364044,0.015412256121635437,0.056990280747413635]'
    }),
    User.create({
      email: 'beyonce@email.com',
      password: '123',
      firstName: 'Beyonce',
      lastName: 'Knowles-Carter',
      age: 37,
      summary: 'Hi, my name is Beyonce. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://www.wellandgood.com/wp-content/uploads/2018/09/Beyonce-Birthday-Collage-2.png',
        'https://www.billboard.com/files/styles/article_main_image/public/media/beyonce-live-smile-2018-otr-billboard-1548.jpg'
      ],
      bwFaceDesc:
        '[-0.10979459434747696,0.11729476600885391,0.07223783433437347,-0.035210154950618744,-0.034908097237348557,-0.07700686156749725,-0.019528541713953018,-0.07362622767686844,0.14941871166229248,-0.0358862467110157,0.24139806628227234,0.014766266569495201,-0.1581655740737915,-0.06723571568727493,0.021987590938806534,0.1189129501581192,-0.1612200289964676,-0.06715770065784454,-0.0777772068977356,-0.11046570539474487,-0.017073282971978188,0.059494372457265854,-0.007021118421107531,0.07408062368631363,-0.06664101034402847,-0.2002510130405426,-0.061323411762714386,-0.14196482300758362,0.055913787335157394,-0.09662541002035141,-0.0049635134637355804,0.05952564626932144,-0.1710117608308792,-0.03127261996269226,0.02213679440319538,0.04871298372745514,0.05803311616182327,0.01161362137645483,0.12851229310035706,-0.006772044580429792,-0.11921674758195877,-0.036149121820926666,0.06398104876279831,0.23309439420700073,0.15325556695461273,0.00015597976744174957,-0.0034705940634012222,-0.04565455764532089,0.05582316219806671,-0.1527448147535324,0.004835253581404686,0.09980299323797226,0.1205606758594513,0.06852469593286514,0.041896335780620575,-0.268022745847702,-0.010633296333253384,0.050271403044462204,-0.13640989363193512,0.06163682043552399,0.011897127144038677,-0.05951548367738724,-0.09344902634620667,-0.04662676900625229,0.27533674240112305,0.07096847146749496,-0.16714899241924286,-0.14698489010334015,0.1187376156449318,-0.11930864304304123,-0.04371313005685806,0.10893385857343674,-0.10782597213983536,-0.1220775619149208,-0.26668351888656616,0.06200769171118736,0.3463032841682434,0.08514407277107239,-0.2270287722349167,0.06775721907615662,-0.14739710092544556,-0.04093658924102783,-0.04659678414463997,0.09803904592990875,-0.09473344683647156,0.09639224410057068,-0.06704962253570557,-0.013295426964759827,0.1072683334350586,0.020341893658041954,0.026041002944111824,0.21248039603233337,-0.05351170897483826,0.04628836363554001,-0.028495043516159058,-0.0021935775876045227,-0.07267694175243378,-0.047733526676893234,-0.08058278262615204,-0.05869153141975403,0.0017159080598503351,-0.13531291484832764,-0.018644563853740692,0.09566956013441086,-0.25079745054244995,0.1356952041387558,0.03540480136871338,0.004636920057237148,-0.039040058851242065,0.0813799500465393,-0.03434228152036667,-0.015144594945013523,0.18138718605041504,-0.2834528088569641,0.2144467830657959,0.1715688705444336,0.043734848499298096,0.15787486732006073,0.05068144574761391,0.1143861636519432,-0.03479531779885292,-0.014122972264885902,-0.10125645995140076,-0.03008456900715828,0.012336436659097672,-0.11412401497364044,0.015412256121635437,0.056990280747413635]',
      createdFaceDesc:
        '[-0.09169824421405792,0.1342904418706894,0.09197903424501419,-0.02322578988969326,-0.0824228897690773,-0.05226777866482735,-0.0024356739595532417,-0.06059049442410469,0.1405920684337616,-0.057538196444511414,0.215708926320076,-0.04338629171252251,-0.19315408170223236,-0.08686245232820511,-0.022316807880997658,0.1642191857099533,-0.16567496955394745,-0.10568832606077194,-0.1126694604754448,-0.09661419689655304,-0.01788153313100338,0.05151759833097458,-0.048632148653268814,0.05204658582806587,-0.06245778501033783,-0.27420613169670105,-0.05079498887062073,-0.09111151099205017,0.03481326997280121,-0.13352783024311066,0.01862211525440216,0.07771501690149307,-0.20160868763923645,-0.05217180401086807,-0.022833917289972305,0.039416760206222534,0.008891521021723747,-0.028018217533826828,0.08385956287384033,-0.032454878091812134,-0.16970926523208618,-0.007365526631474495,0.026442525908350945,0.2593335211277008,0.15247979760169983,0.03567882627248764,-0.02890407294034958,-0.05460595339536667,0.0372060164809227,-0.20204003155231476,0.012840669602155685,0.12404776364564896,0.06902085989713669,0.10745468735694885,-0.006392086856067181,-0.1953820437192917,0.017992353066802025,0.044314879924058914,-0.1599797010421753,-0.00811799243092537,0.0311074610799551,-0.09303312003612518,-0.06660148501396179,-0.05740921199321747,0.288725346326828,0.07125560939311981,-0.13022735714912415,-0.15830408036708832,0.15305578708648682,-0.14840921759605408,-0.03577692061662674,0.0812682956457138,-0.08020476251840591,-0.11226461082696915,-0.29294201731681824,0.12648558616638184,0.38713622093200684,0.10900858789682388,-0.1968761682510376,0.04680032655596733,-0.14915020763874054,0.007524946704506874,-0.00946085900068283,0.10827074199914932,-0.07378963381052017,0.03916759788990021,-0.06490036845207214,0.011423271149396896,0.11012117564678192,-0.016898714005947113,-0.015358923003077507,0.22568419575691223,-0.006979736499488354,0.0024863509461283684,-0.006695372052490711,-0.0076058972626924515,-0.047315798699855804,0.016287963837385178,-0.04664802551269531,-0.008755350485444069,0.0871056541800499,-0.08505898714065552,-0.010507609695196152,0.13374531269073486,-0.17215362191200256,0.1785794198513031,0.02276753820478916,0.029884975403547287,0.04821624234318733,0.07516005635261536,-0.03983038291335106,-0.09776119142770767,0.16263441741466522,-0.29042190313339233,0.22406364977359772,0.16762420535087585,0.033993881195783615,0.1533375382423401,0.04226699471473694,0.16340301930904388,-0.03049393929541111,-0.03019086830317974,-0.12813584506511688,-0.03264879435300827,0.08876848965883255,-0.08340518921613693,-0.0016106516122817993,0.060122765600681305]'
    }),
    User.create({
      email: 'jennifer@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://www.wonderslist.com/wp-content/uploads/2015/11/Cara-Delevingne-Highest-Paid-Models-Of-2015.jpg',
        'http://www.runwaylive.com/wp-content/uploads/2016/06/6983226-beauty-barbara-palvin-hungarian-fashion-model.jpg'
      ],
      bwFaceDesc:
        '[-0.09198661893606186,0.1130014955997467,0.14629560708999634,0.048553742468357086,-0.2343771755695343,-0.025603611022233963,-0.02825675532221794,-0.09099366515874863,0.1238408237695694,-0.04578734561800957,0.15628670156002045,-0.04810451716184616,-0.21947193145751953,0.14680910110473633,-0.04766736552119255,0.22263376414775848,-0.06218858063220978,-0.10890170931816101,-0.1981467753648758,-0.07924286276102066,-0.016219187527894974,0.01986922137439251,0.044565241783857346,0.12336226552724838,-0.12806500494480133,-0.2950904071331024,0.011025249026715755,-0.03000045008957386,0.10899289697408676,-0.0077066924422979355,-0.11466231942176819,0.07109206914901733,-0.1999635547399521,-0.08814115077257156,0.08521191775798798,0.11609136313199997,-0.06772904098033905,-0.09425438195466995,0.22335244715213776,-0.007262079976499081,-0.2617693245410919,0.06822923570871353,0.09107942134141922,0.2140178084373474,0.16566382348537445,0.07341085374355316,0.14810262620449066,-0.10898275673389435,0.10284446179866791,-0.32900935411453247,0.02052805945277214,0.11692460626363754,0.07500094920396805,0.0876355767250061,0.05348867550492287,-0.2698206305503845,-0.0008588992059230804,0.08917143195867538,-0.1727379560470581,0.07673781365156174,0.07746394723653793,0.02179335430264473,-0.05522754043340683,-0.13408370316028595,0.24647971987724304,0.14042136073112488,-0.11012048274278641,-0.16624915599822998,0.16421380639076233,-0.2084256410598755,-0.0038441158831119537,0.1700916290283203,-0.08113149553537369,-0.16576483845710754,-0.2754530608654022,0.014872103929519653,0.4813135862350464,0.16200271248817444,-0.19463713467121124,-0.048502083867788315,-0.0327502116560936,-0.0027258945629000664,0.002291097305715084,0.08919157087802887,-0.03647281602025032,0.01931779272854328,-0.055441755801439285,0.021537967026233673,0.2523399889469147,-0.058398857712745667,0.033973656594753265,0.26028454303741455,0.15399792790412903,-0.025187060236930847,-0.038367219269275665,0.1410205215215683,-0.15444359183311462,-0.03860148414969444,-0.1506522297859192,-0.01252979226410389,0.0034059511963278055,0.034396495670080185,0.057136476039886475,0.06088787317276001,-0.22384370863437653,0.17765875160694122,-0.11827243864536285,-0.04103841632604599,-0.04926903918385506,0.03962892293930054,-0.10177600383758545,-0.04027044400572777,0.18221311271190643,-0.24857684969902039,0.12463030964136124,0.23157136142253876,-0.02532297931611538,0.07228110730648041,0.042148035019636154,0.06243831664323807,0.07244490087032318,0.04366239160299301,-0.10845514386892319,-0.1262318193912506,0.059723250567913055,-0.18766310811042786,-0.031273551285266876,0.06045382469892502]',
      createdFaceDesc:
        '[-0.09169824421405792,0.1342904418706894,0.09197903424501419,-0.02322578988969326,-0.0824228897690773,-0.05226777866482735,-0.0024356739595532417,-0.06059049442410469,0.1405920684337616,-0.057538196444511414,0.215708926320076,-0.04338629171252251,-0.19315408170223236,-0.08686245232820511,-0.022316807880997658,0.1642191857099533,-0.16567496955394745,-0.10568832606077194,-0.1126694604754448,-0.09661419689655304,-0.01788153313100338,0.05151759833097458,-0.048632148653268814,0.05204658582806587,-0.06245778501033783,-0.27420613169670105,-0.05079498887062073,-0.09111151099205017,0.03481326997280121,-0.13352783024311066,0.01862211525440216,0.07771501690149307,-0.20160868763923645,-0.05217180401086807,-0.022833917289972305,0.039416760206222534,0.008891521021723747,-0.028018217533826828,0.08385956287384033,-0.032454878091812134,-0.16970926523208618,-0.007365526631474495,0.026442525908350945,0.2593335211277008,0.15247979760169983,0.03567882627248764,-0.02890407294034958,-0.05460595339536667,0.0372060164809227,-0.20204003155231476,0.012840669602155685,0.12404776364564896,0.06902085989713669,0.10745468735694885,-0.006392086856067181,-0.1953820437192917,0.017992353066802025,0.044314879924058914,-0.1599797010421753,-0.00811799243092537,0.0311074610799551,-0.09303312003612518,-0.06660148501396179,-0.05740921199321747,0.288725346326828,0.07125560939311981,-0.13022735714912415,-0.15830408036708832,0.15305578708648682,-0.14840921759605408,-0.03577692061662674,0.0812682956457138,-0.08020476251840591,-0.11226461082696915,-0.29294201731681824,0.12648558616638184,0.38713622093200684,0.10900858789682388,-0.1968761682510376,0.04680032655596733,-0.14915020763874054,0.007524946704506874,-0.00946085900068283,0.10827074199914932,-0.07378963381052017,0.03916759788990021,-0.06490036845207214,0.011423271149396896,0.11012117564678192,-0.016898714005947113,-0.015358923003077507,0.22568419575691223,-0.006979736499488354,0.0024863509461283684,-0.006695372052490711,-0.0076058972626924515,-0.047315798699855804,0.016287963837385178,-0.04664802551269531,-0.008755350485444069,0.0871056541800499,-0.08505898714065552,-0.010507609695196152,0.13374531269073486,-0.17215362191200256,0.1785794198513031,0.02276753820478916,0.029884975403547287,0.04821624234318733,0.07516005635261536,-0.03983038291335106,-0.09776119142770767,0.16263441741466522,-0.29042190313339233,0.22406364977359772,0.16762420535087585,0.033993881195783615,0.1533375382423401,0.04226699471473694,0.16340301930904388,-0.03049393929541111,-0.03019086830317974,-0.12813584506511688,-0.03264879435300827,0.08876848965883255,-0.08340518921613693,-0.0016106516122817993,0.060122765600681305]'
    }),
    User.create({
      email: 'ashley@email.com',
      password: '123',
      firstName: 'Ashley',
      lastName: 'Brown',
      age: 26,
      summary: 'Hi, my name is Ashley. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://img.freepik.com/free-photo/one-adult-spring-background-outdoors_1139-823.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?size=626&ext=jpg'
      ],
      bwFaceDesc:
        '[-0.03638757765293121,0.08215244114398956,0.032999515533447266,-0.1264365166425705,-0.1771131306886673,0.027171747758984566,0.003952465020120144,-0.04975438863039017,0.21470218896865845,-0.17797896265983582,0.11039645224809647,-0.08086079359054565,-0.233258917927742,0.07955741882324219,-0.07334557175636292,0.22826233506202698,-0.13776683807373047,-0.20499975979328156,-0.1797342300415039,-0.1137232631444931,-0.05218437686562538,0.15335126221179962,-0.034477319568395615,0.08628848195075989,-0.1483832150697708,-0.24493758380413055,-0.06951359659433365,-0.10736147314310074,-0.008606971241533756,-0.13510404527187347,0.016287323087453842,0.1355655938386917,-0.03869253024458885,0.08975326269865036,0.09711330384016037,0.06212523952126503,-0.08171927183866501,-0.14737944304943085,0.2013569325208664,0.04131286218762398,-0.1883287876844406,-0.01839493215084076,0.027574731037020683,0.28243204951286316,0.25830110907554626,0.004950962029397488,0.007830023765563965,-0.13164637982845306,0.13610245287418365,-0.3227735757827759,0.06565255671739578,0.13132356107234955,-0.047572746872901917,0.11126437038183212,0.08365383744239807,-0.2245476394891739,-0.015467502176761627,0.20676486194133759,-0.17384076118469238,0.054162245243787766,0.04734690487384796,-0.179811030626297,-0.07547736912965775,-0.10010270029306412,0.20375293493270874,0.11136892437934875,-0.1603492945432663,-0.20522744953632355,0.2273073047399521,-0.2108650803565979,-0.06171106547117233,0.05161222815513611,-0.11982661485671997,-0.1564188003540039,-0.18757225573062897,0.07143762707710266,0.3323132395744324,0.21022425591945648,-0.11249879002571106,0.02147948369383812,0.01294923946261406,0.028889618813991547,-0.013798750936985016,0.12620025873184204,-0.08198747038841248,-0.18044975399971008,-0.09273701906204224,0.007186900824308395,0.19175927340984344,-0.08063080906867981,0.02607846073806286,0.2609734833240509,-0.058140650391578674,-0.075376495718956,-0.055003680288791656,0.021688133478164673,-0.1975824385881424,0.04903135448694229,-0.057714734226465225,-0.030784619972109795,0.06928467750549316,-0.025875888764858246,0.012298212386667728,0.17875553667545319,-0.11270467936992645,0.18858078122138977,-0.149162158370018,-0.03586842119693756,-0.03364351764321327,-0.07900786399841309,-0.06755385547876358,-0.020960524678230286,0.2308855503797531,-0.16643790900707245,0.1283961534500122,0.13486389815807343,0.08494363725185394,0.17681807279586792,0.09957022964954376,0.1248357817530632,0.0464579202234745,-0.02567479759454727,-0.25223854184150696,-0.011998956091701984,0.10324911028146744,-0.004570255987346172,-0.046459440141916275,0.05260562151670456]',
      createdFaceDesc:
        '[-0.09169824421405792,0.1342904418706894,0.09197903424501419,-0.02322578988969326,-0.0824228897690773,-0.05226777866482735,-0.0024356739595532417,-0.06059049442410469,0.1405920684337616,-0.057538196444511414,0.215708926320076,-0.04338629171252251,-0.19315408170223236,-0.08686245232820511,-0.022316807880997658,0.1642191857099533,-0.16567496955394745,-0.10568832606077194,-0.1126694604754448,-0.09661419689655304,-0.01788153313100338,0.05151759833097458,-0.048632148653268814,0.05204658582806587,-0.06245778501033783,-0.27420613169670105,-0.05079498887062073,-0.09111151099205017,0.03481326997280121,-0.13352783024311066,0.01862211525440216,0.07771501690149307,-0.20160868763923645,-0.05217180401086807,-0.022833917289972305,0.039416760206222534,0.008891521021723747,-0.028018217533826828,0.08385956287384033,-0.032454878091812134,-0.16970926523208618,-0.007365526631474495,0.026442525908350945,0.2593335211277008,0.15247979760169983,0.03567882627248764,-0.02890407294034958,-0.05460595339536667,0.0372060164809227,-0.20204003155231476,0.012840669602155685,0.12404776364564896,0.06902085989713669,0.10745468735694885,-0.006392086856067181,-0.1953820437192917,0.017992353066802025,0.044314879924058914,-0.1599797010421753,-0.00811799243092537,0.0311074610799551,-0.09303312003612518,-0.06660148501396179,-0.05740921199321747,0.288725346326828,0.07125560939311981,-0.13022735714912415,-0.15830408036708832,0.15305578708648682,-0.14840921759605408,-0.03577692061662674,0.0812682956457138,-0.08020476251840591,-0.11226461082696915,-0.29294201731681824,0.12648558616638184,0.38713622093200684,0.10900858789682388,-0.1968761682510376,0.04680032655596733,-0.14915020763874054,0.007524946704506874,-0.00946085900068283,0.10827074199914932,-0.07378963381052017,0.03916759788990021,-0.06490036845207214,0.011423271149396896,0.11012117564678192,-0.016898714005947113,-0.015358923003077507,0.22568419575691223,-0.006979736499488354,0.0024863509461283684,-0.006695372052490711,-0.0076058972626924515,-0.047315798699855804,0.016287963837385178,-0.04664802551269531,-0.008755350485444069,0.0871056541800499,-0.08505898714065552,-0.010507609695196152,0.13374531269073486,-0.17215362191200256,0.1785794198513031,0.02276753820478916,0.029884975403547287,0.04821624234318733,0.07516005635261536,-0.03983038291335106,-0.09776119142770767,0.16263441741466522,-0.29042190313339233,0.22406364977359772,0.16762420535087585,0.033993881195783615,0.1533375382423401,0.04226699471473694,0.16340301930904388,-0.03049393929541111,-0.03019086830317974,-0.12813584506511688,-0.03264879435300827,0.08876848965883255,-0.08340518921613693,-0.0016106516122817993,0.060122765600681305]'
    }),
    User.create({
      email: 'rachel@email.com',
      password: '123',
      firstName: 'Rachel',
      lastName: 'Holmes',
      age: 24,
      summary: 'Hi, my name is Rachel. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkq0VimKIP0QafXa4fEh8mgwQRs7LklVn1V8_0uIWzZTordmD',
        'http://sf.co.ua/13/01/wallpaper-2572392.jpg',
        'http://sf.co.ua/13/05/wallpaper-2819229.jpg'
      ],
      bwFaceDesc:
        '[0.00872926227748394,0.1439478099346161,0.05398714542388916,-0.05849449336528778,-0.12609124183654785,0.00843497272580862,-0.01082717627286911,-0.16699761152267456,0.17014960944652557,-0.0261447224766016,0.13839593529701233,-0.11819057911634445,-0.28885459899902344,0.05328186973929405,-0.004008198156952858,0.16340626776218414,-0.054668277502059937,-0.2224385291337967,-0.1812835931777954,-0.08434043824672699,-0.014838701114058495,0.022862473502755165,0.07205028831958771,0.1393543928861618,-0.18971098959445953,-0.2502230703830719,-0.06440971046686172,-0.09059076011180878,-0.004473768174648285,-0.15845082700252533,-0.012996349483728409,0.0866413563489914,-0.20235179364681244,-0.06113085523247719,0.11183761805295944,0.08361989259719849,-0.06042863428592682,-0.15907497704029083,0.21329490840435028,0.04094596579670906,-0.17700941860675812,-0.05214376747608185,0.09797808527946472,0.29073166847229004,0.19266532361507416,0.03639059513807297,0.104090616106987,-0.09659793972969055,0.04336359724402428,-0.2853012979030609,0.06208623945713043,0.17449957132339478,-0.017793962731957436,0.11006179451942444,0.05465056002140045,-0.2072422206401825,-0.009075816720724106,0.18463951349258423,-0.16460508108139038,0.14202462136745453,0.11949878931045532,-0.09154627472162247,-0.1033877581357956,-0.13125671446323395,0.3263916075229645,0.16204461455345154,-0.17766039073467255,-0.1700199693441391,0.12504872679710388,-0.14852634072303772,-0.13348619639873505,0.051139939576387405,-0.2016434669494629,-0.11252816021442413,-0.3436105251312256,-0.0215078704059124,0.46271347999572754,0.11642218381166458,-0.1837797909975052,0.024311205372214317,-0.10351081192493439,0.0994628444314003,-0.029096044600009918,0.15476708114147186,-0.023330163210630417,-0.0061641838401556015,-0.039091791957616806,0.05018123611807823,0.21483555436134338,-0.049499306827783585,-0.06767524778842926,0.19294938445091248,-0.05815219134092331,-0.049898210912942886,-0.043628159910440445,0.059049226343631744,-0.14933077991008759,-0.06843110173940659,-0.11727412790060043,-0.0688861683011055,-0.034390803426504135,0.06178286671638489,0.04767625406384468,0.18509158492088318,-0.1752672642469406,0.10498277842998505,-0.03316616266965866,-0.04224726930260658,-0.013467079028487206,0.034503400325775146,-0.0890222042798996,-0.10103677958250046,0.15467678010463715,-0.3271404504776001,0.15087354183197021,0.20027212798595428,0.023852869868278503,0.046731799840927124,0.03677868843078613,0.13209852576255798,0.08403715491294861,0.0969400703907013,-0.12069618701934814,-0.06242493540048599,0.04450732097029686,0.030183233320713043,0.000239495187997818,0.03069625049829483]',
      createdFaceDesc:
        '[-0.09169824421405792,0.1342904418706894,0.09197903424501419,-0.02322578988969326,-0.0824228897690773,-0.05226777866482735,-0.0024356739595532417,-0.06059049442410469,0.1405920684337616,-0.057538196444511414,0.215708926320076,-0.04338629171252251,-0.19315408170223236,-0.08686245232820511,-0.022316807880997658,0.1642191857099533,-0.16567496955394745,-0.10568832606077194,-0.1126694604754448,-0.09661419689655304,-0.01788153313100338,0.05151759833097458,-0.048632148653268814,0.05204658582806587,-0.06245778501033783,-0.27420613169670105,-0.05079498887062073,-0.09111151099205017,0.03481326997280121,-0.13352783024311066,0.01862211525440216,0.07771501690149307,-0.20160868763923645,-0.05217180401086807,-0.022833917289972305,0.039416760206222534,0.008891521021723747,-0.028018217533826828,0.08385956287384033,-0.032454878091812134,-0.16970926523208618,-0.007365526631474495,0.026442525908350945,0.2593335211277008,0.15247979760169983,0.03567882627248764,-0.02890407294034958,-0.05460595339536667,0.0372060164809227,-0.20204003155231476,0.012840669602155685,0.12404776364564896,0.06902085989713669,0.10745468735694885,-0.006392086856067181,-0.1953820437192917,0.017992353066802025,0.044314879924058914,-0.1599797010421753,-0.00811799243092537,0.0311074610799551,-0.09303312003612518,-0.06660148501396179,-0.05740921199321747,0.288725346326828,0.07125560939311981,-0.13022735714912415,-0.15830408036708832,0.15305578708648682,-0.14840921759605408,-0.03577692061662674,0.0812682956457138,-0.08020476251840591,-0.11226461082696915,-0.29294201731681824,0.12648558616638184,0.38713622093200684,0.10900858789682388,-0.1968761682510376,0.04680032655596733,-0.14915020763874054,0.007524946704506874,-0.00946085900068283,0.10827074199914932,-0.07378963381052017,0.03916759788990021,-0.06490036845207214,0.011423271149396896,0.11012117564678192,-0.016898714005947113,-0.015358923003077507,0.22568419575691223,-0.006979736499488354,0.0024863509461283684,-0.006695372052490711,-0.0076058972626924515,-0.047315798699855804,0.016287963837385178,-0.04664802551269531,-0.008755350485444069,0.0871056541800499,-0.08505898714065552,-0.010507609695196152,0.13374531269073486,-0.17215362191200256,0.1785794198513031,0.02276753820478916,0.029884975403547287,0.04821624234318733,0.07516005635261536,-0.03983038291335106,-0.09776119142770767,0.16263441741466522,-0.29042190313339233,0.22406364977359772,0.16762420535087585,0.033993881195783615,0.1533375382423401,0.04226699471473694,0.16340301930904388,-0.03049393929541111,-0.03019086830317974,-0.12813584506511688,-0.03264879435300827,0.08876848965883255,-0.08340518921613693,-0.0016106516122817993,0.060122765600681305]'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
