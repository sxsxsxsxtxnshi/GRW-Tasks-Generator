let hud = document.querySelector('.hud');
let guns = document.querySelector('.guns');
let modules = document.querySelector('.modules');

let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

hud.onclick = () => {

    hud.classList.toggle('active');
    span1.textContent = 'Off';
    if (hud.classList.contains('active')) {
        span1.textContent = 'On';    
    }
};
        
guns.onclick = () => {
    guns.classList.toggle('active');
    modules.classList.remove('active');
    span2.textContent = 'Off';
    span3.textContent = 'Off';
    if (guns.classList.contains('active')) {
        span2.textContent = 'On'; 
    }
};

modules.onclick = () => {
    modules.classList.toggle('active');
    span3.textContent = 'Off';
    if (modules.classList.contains('active')) {
        guns.classList.add('active');
        span2.textContent = 'On';  
        span3.textContent = 'On';    
    }
};

//я понимаю, что это пиздец, а не код, но пока оставлю так

let locationParent = document.querySelector('.header-col2-info__sup__location.location');
let taskParent = document.querySelector('.header-col2-info__sup__task.task');
let coordinatesParent = document.querySelector('.header-col2-info__sub__list__item.coordinates');
let timeParent = document.querySelector('.header-col2-info__sub__list__item.time');
let transportParent = document.querySelector('.header-col2-info__sub__list__item.transport');
let clothingParent = document.querySelector('.header-col2-info__sub__list__item.clothing');
let bodyTopParent = document.querySelector('.header-col2-info__sub__list__item.bodyTop');
let bodyDownParent = document.querySelector('.header-col2-info__sub__list__item.bodyDown');
let armorParent = document.querySelector('.header-col2-info__sub__list__item.armor');
let armorParentDisplay = getComputedStyle(armorParent).display;
let headwearParent = document.querySelector('.header-col2-info__sub__list__item.headwear');
let headwearParentDisplay = getComputedStyle(headwearParent).display;
let facemaskParent = document.querySelector('.header-col2-info__sub__list__item.facemask');
let facemaskParentDisplay = getComputedStyle(facemaskParent).display;
let headphonesParent = document.querySelector('.header-col2-info__sub__list__item.headphones');
let headphonesParentDisplay = getComputedStyle(headphonesParent).display;
let nightVisionParent = document.querySelector('.header-col2-info__sub__list__item.nightvision');
let nightVisionParentDisplay = getComputedStyle(nightVisionParent).display;
nightVisionParent.style.display = 'none';
let hudParent = document.querySelector('.header-col2-info__sub__list__item.hud');
// /\parents tags of clothing

//span \/
let locationName = document.querySelector('.header-col2.name');
let taskType = document.querySelector('.header-col2.type');
let coordinates = document.querySelector('.header-col2-info__sub__list__span.coordinates');
let time = document.querySelector('.header-col2-info__sub__list__span.time');
let typeOfTransport = document.querySelector('.header-col2-info__sub__list__span.transport');
let typeOfClotHING = document.querySelector('.header-col2-info__sub__list__span.typeOfClothes');
let typeOfBodyTop = document.querySelector('.header-col2-info__sub__list__span.bodyTop');
let typeOfBodyDown = document.querySelector('.header-col2-info__sub__list__span.bodyDown');
let typeOfArmor = document.querySelector('.header-col2-info__sub__list__span.armor');
let typeOfArmorDisplay = getComputedStyle(typeOfArmor).display;
let typeOfHeadwear = document.querySelector('.header-col2-info__sub__list__span.headwear');
let typeOfHeadwearDisplay = getComputedStyle(typeOfHeadwear).display;
let typeOfFacemask = document.querySelector('.header-col2-info__sub__list__span.facemask');
let typeOfFacemaskDisplay = getComputedStyle(typeOfFacemask).display;
let typeOfHeadphones = document.querySelector('.header-col2-info__sub__list__span.headphones');
let typeOfHeadphonesDisplay = getComputedStyle(typeOfHeadphones).display;
let typeOfNightvision = document.querySelector('.header-col2-info__sub__list__span.nightvision');
let typeOfNightvisionDisplay = getComputedStyle(typeOfNightvision).display;
typeOfNightvision.style.display = 'none';
let typeOfHud = document.querySelector('.header-col2-info__sub__list__span.hud');
let hudDisplay = getComputedStyle(typeOfHud).display;
let hudParentDisplay = getComputedStyle(hudParent).display;
hudParent.style.display = 'none';
typeOfHud.style.display = 'none';
let primaryGunsParents = document.querySelectorAll('.header-col2-info__sub__list__item.weapon');
let helpGunParent = document.querySelector('.header-col2-info__sub__list.pistol');
let helpGunParentDisplay = getComputedStyle(helpGunParent).display;
helpGunParent.style.display = 'none';
// /\gear settings tags (span)
let primaryGunsList = document.querySelectorAll('.header-col2-info__sub__list.weapon');
let gunDisplay;
for (let gun of primaryGunsList) {
    gunDisplay = getComputedStyle(gun).display;
    gun.style.display = 'none';
};
let gunsModulesList = document.querySelectorAll('.header-col2-info__sub__list__item.modules');
let gunModulesDisplay;
for (let gunModules of gunsModulesList) {
    gunModulesDisplay = getComputedStyle(gunModules).display;
    gunModules.style.display = 'none';
};

//span \/
let primaryGunName = document.querySelector('.header-col2-primaryGun__name');
let primaryGunScope = document.querySelector('.header-col2-primaryGun__scope');
let primaryGunGrip = document.querySelector('.header-col2-primaryGun__grip');
let primaryGunLaser = document.querySelector('.header-col2-primaryGun__laser');
let primaryGunMagazine = document.querySelector('.header-col2-primaryGun__magazine');
let primaryGunBarrel = document.querySelector('.header-col2-primaryGun__barrel');
let primaryGunMuffle = document.querySelector('.header-col2-primaryGun__muffle');
let primaryGunButtstock = document.querySelector('.header-col2-primaryGun__buttstock');
// /\primaryGun settings

let secondGunName = document.querySelector('.header-col2-secondGun__name');
let secondGunScope = document.querySelector('.header-col2-secondGun__scope');
let secondGunMagazine = document.querySelector('.header-col2-secondGun__magazine');
let secondGunLaser = document.querySelector('.header-col2-secondGun__laser');
let secondGunBarrel = document.querySelector('.header-col2-secondGun__barrel');
let secondGunMuffle = document.querySelector('.header-col2-secondGun__muffle');
let secondGunButtstock = document.querySelector('.header-col2-secondGun__buttstock');
// /\secondGun settings

let helpGunName = document.querySelector('.header-col2-helpGun__name');
let helpGunNameDISPLAY = getComputedStyle(helpGunName).display;
helpGunName.style.display = 'none';

// /\helpGun settings

let genBtn = document.querySelector('.header-main__col1__btn');
let taskBanner = document.querySelector('.header-main__col2__image');

//generateBtn
    locationName.textContent = 'N/A';
    taskType.textContent = 'N/A';
    coordinates.textContent = 'N/A';
    time.textContent = 'N/A';
    typeOfTransport.textContent = 'N/A';
    typeOfClotHING.textContent = 'N/A';
    typeOfBodyTop.textContent = 'N/A';
    typeOfBodyDown.textContent = 'N/A';
    typeOfArmor.textContent = 'N/A';
    typeOfHeadwear.textContent = 'N/A';
    typeOfFacemask.textContent = 'N/A';
    typeOfHeadphones.textContent = 'N/A';
    typeOfNightvision.textContent = 'N/A'
    typeOfHud.textContent = 'N/A';
    primaryGunName.textContent = 'N/A';
    primaryGunScope.textContent = 'N/A';
    primaryGunGrip.textContent = 'N/A';
    primaryGunLaser.textContent = 'N/A';
    primaryGunMagazine.textContent = 'N/A';
    primaryGunBarrel.textContent = 'N/A';
    primaryGunMuffle.textContent = 'N/A';
    primaryGunButtstock.textContent = 'N/A';
    secondGunName.textContent = 'N/A';
    secondGunScope.textContent = 'N/A';
    secondGunMagazine.textContent = 'N/A';
    secondGunLaser.textContent = 'N/A';
    secondGunBarrel.textContent = 'N/A';
    secondGunMuffle.textContent = 'N/A';
    secondGunButtstock.textContent = 'N/A';
    helpGunName.textContent = 'N/A';

genBtn.onclick = function createMission() {
    taskBanner.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
    if (hud.classList.contains('active')) {
        typeOfHud.style.display = hudDisplay;
        hudParent.style.display = hudParentDisplay;
    }
    if (guns.classList.contains('active')) {
        for (let gun of primaryGunsList) {
            gun.style.display = gunDisplay;
            if (modules.classList.contains('active')) {
                for (let gunModules of gunsModulesList) {
                    gunModules.style.display = gunModulesDisplay;
                };
            } else {
                for (let gunModules of gunsModulesList) {
                    gunModules.style.display = 'none';
                };
            }    
        };
    } else {
        for (let gun of primaryGunsList) {
            gun.style.display = 'none';    
        };
    }

    for (var i = 1; i <= 2; i++) {
    //console.log(`Операция №${i}`);
    var regions = ['Коани', 'Табакаль', 'Монте-Пунку', 'Вилья-Верде','Кайманес','Монтуйок','Инка-Камина','Ремансо','Барвечос','Итакуа','Окоро','Флор-де-Оро','Н.П. Агуа-Верде','Пукара','Либертад','Мохокойо','Эспириту-Санто','Медиа-Луна','Сан-Матео',];
    var timeOfDay = ['Утро','День','Вечер','Ночь',];
    var transport = ['Четырёхколесный','Двухколесный','Воздушный','Водный','Нет',];
    var typeOfTask = ['Захват аванпоста', 'Захват командира', 'Захват колонны', 'Диверсия (C4)','Захват аванпоста, захват командира','Диверсия (C4), захват командира','Разведка (город)','Ликвидация командира','Ликвидация командира, диверсия (С4)','Захват/Ликвидация босса'];
    var taskIn = ['Центральная часть провинции', 'Север провинции','Юг провинции','Запад провинции','Восток провинции','Северо-западная часть провинции','Северо-восточная часть провинции','Юго-западная часть провинции','Юго-восточная часть провинции',];
    var typeOfClothes = ['Гражданская', 'ЧВК', 'ССО', 'Скрытная'];
    var bodyTop = ['Толстовка'];
    var bodyDown = [];
    var headProtection = ['Ops-Core','Team Wendy EXFIL','Ulach','Кепка','Кепка козырьком назад', 'Вязаная шапка','Флисовая шапка','Нет'];
    var faceProtection = ['Балаклава','Балаклава с прорезями для глаз','Маска','Нет'];
    var headphones = ['Нет','MSA Sordin','Peltor Tactical Sport','Peltor Comtac3',];
    var bodyProtection = ['MMAC','JPC','5.11 Tactec','Лёгкая разгрузка'];
    var nightvision = ['Да', 'Нет',];
    var hudOnOff = ['ON','OFF'];  
    

    var getRegion = function(max) {
        var result = Math.round(Math.random() * max);
        return regions[result]
    }

    var getTimeOfDay = function(max) {
        var result = Math.round(Math.random() * max);
        return timeOfDay[result]
    }
    var gettedTime = getTimeOfDay(timeOfDay.length - 1);

    var getTransport = function(max) {
        var result = Math.round(Math.random() * max);
        return transport[result]
    }
    
    var getTask = function(max) {
        var result = Math.round(Math.random() * max);
        return typeOfTask[result]
    }
    var task = getTask(typeOfTask.length - 1);
    
    var getPlaceOfTask = function(max) {
        var result = Math.round(Math.random() * max);
        return taskIn[result]
    }

    var getClothes = function(max) {
        var result = Math.round(Math.random() * max);
        if (task === 'Разведка (город)') {
            return typeOfClothes[0]
        }
        return typeOfClothes[result]
    }
    var gettedClothing = getClothes(typeOfClothes.length - 1);

    switch (gettedClothing) {
        case 'Гражданская':
        bodyTop.push('Футболка','Майка','Рубашка с закатанными рукавами','Рубашка с раскатанными рукавами','Офисная рубашка','Рубашка-поло',);
        bodyDown.push('Джинсы без наколенников','Штаны Карго',);
        break;
        case 'ССО':
        bodyTop.push('Флисовая куртка','Боевая рубашка Crye G3',);
        bodyDown.push('Боевые штаны','Штаны Карго','Боевые штаны Crye G3', '5.11 Apex',);
        break;
        case 'ЧВК':
        bodyTop.push('Футболка','Майка','Рубашка с закатанными рукавами','Рубашка с раскатанными рукавами','Офисная рубашка','Рубашка-поло','Флисовая куртка','Боевая рубашка Crye G3',);
        bodyDown.push('Джинсы без наколенников','Джинсы с наколенниками','Боевые штаны','Боевые штаны с наколенниками','Штаны Карго','Штаны Карго с наколенниками','Боевые штаны Crye G3', '5.11 Apex','5.11 Apex с наколенниками',);
        break;
        case 'Скрытная':
        bodyTop.shift();
        bodyTop.push('Маскхалат');
        bodyDown.push('Маскхалат');
        break;
    }
    var getBodyTop = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyTop[result]
    }

    var getBodyDown = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyDown[result]
    }

    var getCarrier = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyProtection[result]
    }

    var getHelmet = function(max) {
        var result = Math.round(Math.random() * max);
        return headProtection[result]
    }

    var getMask = function(max) {
        var result = Math.round(Math.random() * max);
        return faceProtection[result]
    }

    var getHeadphones = function(max) {
        var result = Math.round(Math.random() * max);
        return headphones[result]
    }

    var getNightvision = function(max) {
        var result = Math.round(Math.random() * max);
        return nightvision[result]
    }
    
    var getHud = function(max) {
        var result = Math.round(Math.random() * max);
        return hudOnOff[result]
    }

    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear
    //generating gear

        var rifle = ['SCAR-H','R5-RGP','Kriss Vector 45ACP', 'ACR', 'HK MP7A2','PP19-01 "Vityaz"','MDR 5.56','805 Брен А2','M4A1','SR-635','AK-47',];
        var sniperWeapons = ['SVD-S','HK G-28','SR-25','MSR','Desert Tech HTI','M40A5',];
        var helpGuns = ['Beretta M9', 'P45T', 'Colt M45A1', 'P-12'];
        
        //generating assault rifle
        var getPrimaryWeapon = function(max) {
            var result = Math.round(Math.random() * max);
            return rifle[result]
        }

        //generating sniper rifle
        var getSniperRifle = function(max) {
            var result = Math.round(Math.random() * max);
            return sniperWeapons[result]
        }

        var getHelpGun = function(max) {
            var result = Math.round(Math.random() * max);
            return helpGuns[result]
        }

        //generating assault rifle modules
        //generating assault rifle modules
        //generating assault rifle modules
        //generating assault rifle modules

        var rifleScopes = ['Полим. мех. прицел', 'Полим. запас. прицел', 'Рус. коллим. прицел', 'EXPS3', 'Коллим. прицел и G33', 'ПК-АС', 'Панорамный прицел', 'Micro T-1', 'CompM4', 'TA31H', 'Цифровой прицел', 'EXPS и G33', 'Micro T-1 и G33',];
        var rifleGrips = ['Нет', 'Гранатомет М203', 'Скош. пер. рукоятка', 'Кор. пер. рукоять с перем. хват.','Верт. пер. рукоятка', 'Пер. рукоятка 2', 'Пер. рукоятка 4', 'Стандартный Гранатомет'];
        var rifleLasers = ['Нет', 'Лаз. прицел ATIPAL', 'Лазерный прицел 3Dot',];
        var rifleMagazines = ['Стандартный', 'Средний', 'Большой'];
        var rifleBarrels = ['Стандартный ствол','Короткий ствол', 'Длинный ствол',]
        var rifleMuffles = ['Станд. дул. насдака', 'Глушитель', 'Компенсатор', 'Компенсатор V2',];
        var rifleButtstocks = ['Стандартный приклад', 'Складной приклад'];

        var getRifleScope = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleScopes[result]
        }

        var getRifleGrip = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleGrips[result]
        }

        var getRifleLaser = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleLasers[result]
        }

        var getRifleMagazine = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleMagazines[result]
        }

        var getRifleBarrel = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleBarrels[result]
        }

        var getRifleMuffle = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleMuffles[result]
        }

        var getRifleButtstock = function(max) {
            var result = Math.round(Math.random() * max);
            return rifleButtstocks[result]
        }

        //generating sniper rifle modules
        //generating sniper rifle modules
        //generating sniper rifle modules
        //generating sniper rifle modules
        //generating sniper rifle modules

        var sniperScopes = ['TA31H', 'TARS101', 'T5Xi Tactical', 'Цифровой прицел', 'ПОСП', 'ПКС-07', 'G28'];
        var sniperMagazines = ['Стандартный', 'Увеличенный',];
        var sniperLasers = ['Лаз. прицел ATIPAL','Лаз. прицел 3Dot', 'Дальномер',];
        var sniperButtstocks = ['Стандартный приклад', 'Компенсир. приклад',];
        

        var getSniperScope = function(max) {
            var result = Math.round(Math.random() * max);
            return sniperScopes[result]
        }

        var getSniperMagazine = function(max) {
            var result = Math.round(Math.random() * max);
            return sniperMagazines[result]
        }

        var getSniperLaser = function(max) {
            var result = Math.round(Math.random() * max);
            return sniperLasers[result]
        }

        var getSniperButtstock = function(max) {
            var result = Math.round(Math.random() * max);
            return sniperButtstocks[result]
        }
    
    };//for cycle

    locationName.textContent = getRegion(regions.length - 1);
    taskType.textContent = task;
    coordinates.textContent = getPlaceOfTask(taskIn.length - 1);
    time.textContent = gettedTime;
    typeOfTransport.textContent = getTransport(transport.length - 1);
    typeOfClotHING.textContent = gettedClothing;
    typeOfBodyTop.textContent = getBodyTop(bodyTop.length - 1);
    typeOfBodyDown.textContent = getBodyDown(bodyDown.length - 1);
    typeOfArmor.textContent = getCarrier(bodyProtection.length - 1);
    typeOfHeadwear.textContent = getHelmet(headProtection.length - 1);
    typeOfFacemask.textContent = getMask(faceProtection.length - 1);
    typeOfHeadphones.textContent = getHeadphones(headphones.length - 1);
    hudParent.style.display = 'none';
    typeOfHud.style.display = 'none';
    nightVisionParent.style.display = 'none';
    typeOfNightvision.style.display = 'none';
    primaryGunName.style.display = gunDisplay;
    secondGunName.style.display = gunDisplay;
    primaryGunName.textContent = getPrimaryWeapon(rifle.length - 1);
    primaryGunScope.textContent = getRifleScope(rifleScopes.length - 1);
    primaryGunGrip.textContent = getRifleGrip(rifleGrips.length - 1);
    primaryGunLaser.textContent = getRifleLaser(rifleLasers.length - 1);
    primaryGunMagazine.textContent = getRifleMagazine(rifleMagazines.length - 1);
    primaryGunBarrel.textContent = getRifleBarrel(rifleBarrels.length - 1);
    primaryGunMuffle.textContent = getRifleMuffle(rifleMuffles.length - 1);
    primaryGunButtstock.textContent = getRifleButtstock(rifleButtstocks.length - 1);
    secondGunName.textContent = getSniperRifle(sniperWeapons.length - 1);
    secondGunScope.textContent = getSniperScope(sniperScopes.length - 1);
    secondGunMagazine.textContent = getSniperMagazine(sniperMagazines.length - 1);
    secondGunLaser.textContent = getSniperLaser(sniperLasers.length - 1);
    secondGunBarrel.textContent = getRifleBarrel(rifleBarrels.length - 1);
    secondGunMuffle.textContent = getRifleMuffle(rifleMuffles.length - 1);
    secondGunButtstock.textContent = getSniperButtstock(sniperButtstocks.length - 1);   
    helpGunName.style.display = 'none';
    helpGunParent.style.display = 'none';
    if (time.textContent === 'Ночь' || time.textContent === 'Вечер' ) {
        nightVisionParent.style.display = nightVisionParentDisplay;
        typeOfNightvision.style.display = typeOfNightvisionDisplay;
        typeOfNightvision.textContent = getNightvision(nightvision.length - 1);
    }
    if (taskType.textContent === 'Разведка (город)') {
        armorParent.style.display = 'none';
        typeOfArmor.style.display = 'none';
        headwearParent.style.display = 'none';
        typeOfHeadwear.style.display = 'none';
        facemaskParent.style.display = 'none';
        typeOfFacemask.style.display = 'none';
        headphonesParent.style.display = 'none';
        typeOfHeadphones.style.display = 'none';
        nightVisionParent.style.display = 'none';
        typeOfNightvision.style.display = 'none';

        for (let gun of primaryGunsList) {
            gun.style.display = 'none';
        }
        primaryGunName.style.display = 'none';
        secondGunName.style.display = 'none';

        if (guns.classList.contains('active')) {
            helpGunParent.style.display = helpGunParentDisplay;
            helpGunName.style.display = helpGunNameDISPLAY;    
        }
        helpGunName.textContent = getHelpGun(helpGuns.length - 1);
    } else {
        armorParent.style.display = armorParentDisplay;
        typeOfArmor.style.display = typeOfArmorDisplay;
        headwearParent.style.display = headwearParentDisplay;
        typeOfHeadwear.style.display = typeOfHeadwearDisplay;
        facemaskParent.style.display = facemaskParentDisplay;
        typeOfFacemask.style.display = typeOfFacemaskDisplay;
        headphonesParent.style.display = headphonesParentDisplay;
        typeOfHeadphones.style.display = typeOfHeadphonesDisplay;
    }

    if (hud.classList.contains('active')) {
        hudParent.style.display = hudParentDisplay;
        typeOfHud.style.display = hudDisplay;
        typeOfHud.textContent = getHud(hudOnOff.length - 1);
    }
};