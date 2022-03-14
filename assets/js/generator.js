let hud = document.querySelector('.generator__col1__param.hud');
let hudContent = hud.textContent;
let guns = document.querySelector('.generator__col1__param.guns');
let gunsContent = guns.textContent;
let modules = document.querySelector('.generator__col1__param.modules');
let modulesContent = modules.textContent;

hud.onclick = () => {

    hud.classList.toggle('active');
     
    if (hud.classList.contains('active')) {
        hud.textContent = 'HUD: on';    
    } else {
        hud.textContent = hudContent;
    };
};
        
guns.onclick = () => {
    guns.classList.toggle('active');
    modules.classList.remove('active');
    if (guns.classList.contains('active')) {
        guns.textContent = 'generate guns: on';    
    } else {
        guns.textContent = gunsContent;
    };
};

modules.onclick = () => {
    modules.classList.toggle('active');
    guns.classList.add('active');
    guns.textContent = 'generate guns: on';  
    if (modules.classList.contains('active')) {
        modules.textContent = 'generate modules: on';    
    } else {
        modules.textContent = modulesContent;
    }
};;

//я понимаю, что это пиздец, а не код, но пока оставлю так

let locationParent = document.querySelector('.generator-col2-info__sup__location.location');
let taskParent = document.querySelector('.generator-col2-info__sup__task.task');
let coordinatesParent = document.querySelector('.generator-col2-info__sub__list__item.coordinates');
let timeParent = document.querySelector('.generator-col2-info__sub__list__item.time');
let transportParent = document.querySelector('.generator-col2-info__sub__list__item.transport');
let clothingParent = document.querySelector('.generator-col2-info__sub__list__item.clothing');
let bodyTopParent = document.querySelector('.generator-col2-info__sub__list__item.bodyTop');
let bodyDownParent = document.querySelector('.generator-col2-info__sub__list__item.bodyDown');
let armorParent = document.querySelector('.generator-col2-info__sub__list__item.armor');
let headwearParent = document.querySelector('.generator-col2-info__sub__list__item.headwear');
let facemaskParent = document.querySelector('.generator-col2-info__sub__list__item.facemask');
let headphonesParent = document.querySelector('.generator-col2-info__sub__list__item.headphones');
let nightVisionParent = document.querySelector('.generator-col2-info__sub__list__item.nightvision');
let hudParent = document.querySelector('.generator-col2-info__sub__list__item.hud');

let primaryGunParent = document.querySelector('.generator-col2-info__sub__list.primary.weapon');
let primaryGunName = document.querySelector('.generator-col2-info__sub__list__item.primary.weapon');
let primaryGunScope = document.querySelector('.generator-col2-info__sub__list__item.primary.scope');
let primaryGunGrip = document.querySelector('.generator-col2-info__sub__list__item.primary.grip');
let primaryGunLaser = document.querySelector('.generator-col2-info__sub__list__item.primary.laser');
let primaryGunMagazine = document.querySelector('.generator-col2-info__sub__list__item.primary.magazine');
let primaryGunBarrel = document.querySelector('.generator-col2-info__sub__list__item.primary.barrel');
let primaryGunMuzzle = document.querySelector('.generator-col2-info__sub__list__item.primary.muzzle');
let primaryGunButtstock = document.querySelector('.generator-col2-info__sub__list__item.primary.buttstock');
// /\primaryGun settings

let secondGunParent = document.querySelector('.generator-col2-info__sub__list.second.weapon');
let secondGunName = document.querySelector('.generator-col2-info__sub__list__item.second.weapon');
let secondGunScope = document.querySelector('.generator-col2-info__sub__list__item.second.scope');
let secondGunMagazine = document.querySelector('.generator-col2-info__sub__list__item.second.magazine');
let secondGunLaser = document.querySelector('.generator-col2-info__sub__list__item.second.laser');
let secondGunBarrel = document.querySelector('.generator-col2-info__sub__list__item.second.barrel');
let secondGunMuzzle = document.querySelector('.generator-col2-info__sub__list__item.second.muzzle');
let secondGunButtstock = document.querySelector('.generator-col2-info__sub__list__item.second.buttstock');
// /\secondGun settings

let helpGunParent = document.querySelector('.generator-col2-info__sub__list.help.weapon');
let helpGunName = document.querySelector('.generator-col2-info__sub__list__item.pistol');
// /\helpGun settings


//arrays
let generatingGuns = document.querySelector('.generator-col2-info__sub__list__guns');
let generatingModules = document.querySelectorAll('.generator-col2-info__sub__list__item.modules');
var regions = ['Koani', 'Tabakal', 'Monte Puncu', 'Villa Verde','Caimanes','Montuyoc','Inca Camina','Remanzo','Barvechos','Itacua','Ocoro','Flor de Oro','P.N. De Agua Verde','Pukara','Libertad','Mojocoyo','Espiritu Santo','Media Luna','San Mateo',];
var timeOfDay = ['Morning','Day','Evening','Night',];
var transport = ['Four-wheel','Two-wheel','Air','Water',];
var typeOfTask = ['Capturing outpost', 'Capturing the commander', 'Capturing column', 'Diversion (C4)','Capturing outpost, Capturing the commander','Diversion (C4), Capturing the commander','Liqudation the commander','Liqudation the commander, Diversion (С4)','Capturing/Boss Liquidation','Recon (city)',];
var taskIn = ['Center', 'North','South','West','East','Northern-West','Northern-East','Southern-West','Southern-East',];
var typeOfClothes = ['Civillian', 'PMC', 'Special Forces', 'Hidden'];
var bodyTop = ['Hoodie',];
var bodyDown = [];
var headProtection = ['None','FAST MT','Team Wendy EXFIL','Baseball Cap','Baseball Cap Backwards','Recruit Hat 5.11','Multicam 5.11 Cap','Santa Blanca Cap',];
var faceProtection = ['None','Two-Hole Balaclava','One-Hole Balaclava',];
var headphones = ['Earpice','Headset A','Headset B','Headset C',];
var bodyProtection = ['Molle Harness','Molle','5.11 VTAC LBE','Tactical Vest','5.11 Tactec Plate Carrier','JPC','Mayflower APC',];
var nightvision = [true, false,];
var hudOnOff = [true, false,];  
var primaryWeapons = ['MK-17','R5-RGP','Kriss Vector .45 ACP', 'ACR', 'HK MP7A2','9x19VSN','MDR','805 Bren А2','M4A1','SR-635','AK-47','6P41','G2','L85A2','AK-12','556xi','Stoner LMG A1','MK-48','UMP-45','PSG',];
var sniperWeapons = ['SVD-S','HK G-28','SR-25','MSR','Desert Tech HTI','M40A5',];
var helpGuns = ['Beretta M9', 'P45T', 'M1911', 'P12','5.7 USG',];
var rifleScopes = ['Polymer Iron Sight', 'Polymer BUIS', 'Russian Red Dot', 'EXPS3', 'Russian Red Dot & G33', 'PK-AS', 'Panoramic Sight', 'Micro T-1', 'CompM4', 'TA31H', 'Digital Scope', 'EXPS & G33', 'Micro T-1 & G33',];
var rifleGrips = ['Rail Cover', 'Grenade Launcher М203', 'Shift Short Angled Grip','Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Std Grenade Launcher','AFG',];
var rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot','Range Finder',];
var rifleMagazines = ['Standard', 'Extended', 'Large',];
var rifleBarrels = ['Standard barrel','Short barrel', 'Long barrel',]
var rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
var rifleButtstocks = ['Standard Buttstock', 'Folded Buttstock'];
var sniperScopes = ['TA31H', 'TARS101', 'T5Xi Tactical', 'Digital Scope', 'POSP', 'PKS-07', 'G28',];
var sniperMagazines = ['Standard', 'Extended',];
var sniperButtstocks = ['Standard Buttstock', 'Extended. Buttstock',];

var getRegion = function(max) {
    var result = Math.round(Math.random() * max);
    return regions[result]
};

var getTimeOfDay = function(max) {
    var result = Math.round(Math.random() * max);
    return timeOfDay[result]
};
var gettedTime = getTimeOfDay(timeOfDay.length - 1);

var getTransport = function(max) {
    var result = Math.round(Math.random() * max);
    return transport[result]
};
    
var getTask = function(max) {
    var result = Math.round(Math.random() * max);
    return typeOfTask[result]
};
var task = getTask(typeOfTask.length - 1);
    
var getPlaceOfTask = function(max) {
    var result = Math.round(Math.random() * max);
    return taskIn[result]
};

var getClothes = function(max) {
    var result = Math.round(Math.random() * max);
    if (task === 'Recon (city)') {
        return typeOfClothes[0]
    }
    return typeOfClothes[result]
};
var gettedClothing = getClothes(typeOfClothes.length - 1);

switch (gettedClothing) {
    case 'Civillian':
    bodyTop.push('T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Stripped Hoodie',);
    bodyDown.push('Jeans A (No Knee Pads)','Cargo A',);
    break;
    case 'Special Forces':
    bodyTop.push('Fleece','Crye Combat Shirt',);
    bodyDown.push('5.11 Tactical B','5.11 Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11 Apex B','5.11 Apex C',);
    break;
    case 'PMC':
    bodyTop.push('T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Stripped Hoodie','Fleece','Crye Combat Shirt',);
    bodyDown.push('Jeans A (No Knee Pads)','Cargo A','5.11 Tactical B','5.11 Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11 Apex B','5.11 Apex C',);
    break;
    case 'Hidden':
    bodyTop.shift();
    bodyTop.push('Ghillie');
    bodyDown.push('Crye Precision Combat Olive','Ghillie');
    break;
};

var getBodyTop = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyTop[result]
};

var getBodyDown = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyDown[result]
};

var getCarrier = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyProtection[result]
};

var getHelmet = function(max) {
    var result = Math.round(Math.random() * max);
    return headProtection[result]
};

var getMask = function(max) {
    var result = Math.round(Math.random() * max);
    return faceProtection[result]
};

var getHeadphones = function(max) {
    var result = Math.round(Math.random() * max);
    return headphones[result]
};

var getNightvision = function(max) {
    var result = Math.round(Math.random() * max);
    return nightvision[result]
};
    
var getHud = function(max) {
    var result = Math.round(Math.random() * max);
    return hudOnOff[result]
}  ;

//generating assault rifle
var getPrimaryWeapon = function(max) {
    var result = Math.round(Math.random() * max);
    return primaryWeapons[result]
};

//generating sniper rifle
var getSniperRifle = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperWeapons[result]
};

var getHelpGun = function(max) {
    var result = Math.round(Math.random() * max);
    return helpGuns[result]
};

var getRifleScope = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleScopes[result]
};

var getRifleGrip = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleGrips[result]
};

var getRifleLaser = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleLasers[result]
};

var getRifleMagazine = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleMagazines[result]
};

var getRifleBarrel = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleBarrels[result]
};

var getRifleMuzzle = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleMuzzles[result]
};

var getRifleButtstock = function(max) {
    var result = Math.round(Math.random() * max);
    return rifleButtstocks[result]
};

//generating primary rifle modules

var getSniperScope = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperScopes[result]
};

var getSniperMagazine = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperMagazines[result]
};

var getSniperButtstock = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperButtstocks[result]
};

//generating sniper rifle modules

locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
taskParent.textContent = `Task: ${task}`;
if (hud.classList.contains('active')) {
    hudParent.classList.remove('hidden');
    hudParent.textContent = `HUD: ${getHud(hudOnOff.length - 1)}`;    
}/*if hud checkbox contains "active" TRUE*/ else {
    hudParent.classList.add('hidden');
};/*if hud checkbox contains "active" FALSE*/
if (gettedTime === 'Evening' || gettedTime === 'Night') {
    nightVisionParent.classList.remove('hidden');
    nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
}/*if gettedTime === Evening || Night TRUE*/ else {
    nightVisionParent.classList.add('hidden');
}; /*if gettedTime === Evening || Night FALSE*/
if (taskParent.textContent === 'Task: Recon (city)') {
    nightVisionParent.classList.add('hidden');
    armorParent.classList.add('hidden');
    headwearParent.classList.add('hidden');
    facemaskParent.classList.add('hidden');
    headphonesParent.classList.add('hidden');
    primaryGunParent.classList.add('hidden');
    secondGunParent.classList.add('hidden');
    if (guns.classList.contains('active')) {
        helpGunParent.classList.remove('hidden');
        helpGunName.classList.remove('hidden');
        helpGunName.textContent = `Pistol: ${getHelpGun(helpGuns.length - 1)}`;    
    }/*if guns checkbox contains class "active" TRUE*/ else {
        helpGunParent.classList.add('hidden');
        helpGunName.classList.add('hidden');
    };/*if guns checkbox contains class "active" FALSE*/
}/*if task === Recon (City) TRUE*/ else {
    nightVisionParent.classList.remove('hidden');
    armorParent.classList.remove('hidden');
    headwearParent.classList.remove('hidden');
    facemaskParent.classList.remove('hidden');
    headphonesParent.classList.remove('hidden');
    primaryGunParent.classList.remove('hidden');
    secondGunParent.classList.remove('hidden');
};/*if task === Recon (City) FALSE*/
coordinatesParent.textContent = `Coordinates: ${getPlaceOfTask(taskIn.length - 1)}`;
timeParent.textContent = `Time: ${gettedTime}`;
transportParent.textContent = `Allowed Transport: ${getTransport(transport.length - 1)}`;
clothingParent.textContent = `Type of clothes: ${gettedClothing}`;
bodyTopParent.textContent = `Body Top: ${getBodyTop(bodyTop.length - 1)}`;
bodyDownParent.textContent = `Body Down: ${getBodyDown(bodyDown.length - 1)}`;
armorParent.textContent = `Armor: ${getCarrier(bodyProtection.length - 1)}`;
headwearParent.textContent = `Headwear: ${getHelmet(headProtection.length - 1)}`;
facemaskParent.textContent = `Facemask: ${getMask(faceProtection.length - 1)}`;
headphonesParent.textContent = `Headphones: ${getHeadphones(headphones.length - 1)}`;
//gear
if (guns.classList.contains('active')) {
    generatingGuns.classList.remove('hidden');
    primaryGunName.textContent = `Primary Weapon: ${getPrimaryWeapon(primaryWeapons.length - 1)}`;
    secondGunName.textContent = `Second Weapon: ${getSniperRifle(sniperWeapons.length - 1)}`;
    if (taskParent.textContent === 'Task: Recon (city)') {
        helpGunParent.classList.remove('hidden');
        helpGunName.classList.remove('hidden');  
    } else {
        helpGunParent.classList.add('hidden');
        helpGunName.classList.add('hidden');    
    };
    //guns  
    if (modules.classList.contains('active')) {
        for (let e of generatingModules) {
            e.classList.remove('hidden');
        };
        primaryGunScope.textContent = `Scope: ${getRifleScope(rifleScopes.length - 1)}`;
        primaryGunGrip.textContent = `Grip: ${getRifleGrip(rifleGrips.length - 1)}`;
        primaryGunLaser.textContent = `Laser: ${getRifleLaser(rifleLasers.length - 1)}`;
        primaryGunMagazine.textContent = `Magazine: ${getRifleMagazine(rifleMagazines.length - 1)}`;
        primaryGunBarrel.textContent = `Barrel: ${getRifleBarrel(rifleBarrels.length - 1)}`;
        primaryGunMuzzle.textContent = `Muzzle: ${getRifleMuzzle(rifleMuzzles.length - 1)}`;
        primaryGunButtstock.textContent = `Buttstock: ${getRifleButtstock(rifleButtstocks.length - 1)}`;
        //primaryGun
        secondGunScope.textContent = `Scope: ${getSniperScope(sniperScopes.length - 1)}`;
        secondGunMagazine.textContent = `Magazine: ${sniperMagazines.length - 1}`;
        secondGunLaser.textContent = `Laser: ${getRifleLaser(rifleLasers.length - 1)}`;
        secondGunBarrel.textContent = `Barrel: ${getRifleBarrel(rifleBarrels.length - 1)}`;
        secondGunMuzzle.textContent = `Muzzle: ${getRifleMuzzle(rifleMuzzles.length - 1)}`;
        secondGunButtstock.textContent = `Buttstock: ${getSniperButtstock(sniperButtstocks.length - 1)}`;  
        //secondGun  
        
        //helpGun
    }/*if modules checkbox contains "active"*/ else {
        for (let e of generatingModules) {
            e.classList.add('hidden');
        };
    };
}/*if guns checkbox contains "active"*/ else {
    generatingGuns.classList.add('hidden');
};

let genBtn = document.querySelector('.generator__col1__btn');
let taskBanner = document.querySelector('.generator__col2__image');

genBtn.onclick = function createMission() {
    body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
    taskBanner.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;

    var getRegion = function(max) {
        var result = Math.round(Math.random() * max);
        return regions[result]
    };
    
    var getTimeOfDay = function(max) {
        var result = Math.round(Math.random() * max);
        return timeOfDay[result]
    };
    var gettedTime = getTimeOfDay(timeOfDay.length - 1);
    
    var getTransport = function(max) {
        var result = Math.round(Math.random() * max);
        return transport[result]
    };
        
    var getTask = function(max) {
        var result = Math.round(Math.random() * max);
        return typeOfTask[result]
    };
    var task = getTask(typeOfTask.length - 1);
        
    var getPlaceOfTask = function(max) {
        var result = Math.round(Math.random() * max);
        return taskIn[result]
    };
    
    var getClothes = function(max) {
        var result = Math.round(Math.random() * max);
        if (task === 'Recon (city)') {
            return typeOfClothes[0]
        }
        return typeOfClothes[result]
    };
    var gettedClothing = getClothes(typeOfClothes.length - 1);
    switch (gettedClothing) {
        case 'Civillian':
        bodyTop = [];
        bodyDown = [];
        bodyTop.push('T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Stripped Hoodie',);
        bodyDown.push('Jeans A (No Knee Pads)','Cargo A',);
        break;
        case 'Special Forces':
        bodyTop = [];
        bodyDown = [];
        bodyTop.push('Fleece','Crye Combat Shirt',);
        bodyDown.push('5.11 Tactical B','5.11 Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11 Apex B','5.11 Apex C',);
        break;
        case 'PMC':
        bodyTop = [];
        bodyDown = [];
        bodyTop.push('T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Stripped Hoodie','Fleece','Crye Combat Shirt',);
        bodyDown.push('Jeans A (No Knee Pads)','Cargo A','5.11 Tactical B','5.11 Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11 Apex B','5.11 Apex C',);
        break;
        case 'Hidden':
        bodyTop = [];
        bodyDown = [];
        bodyTop.push('Ghillie');
        bodyDown.push('Crye Precision Combat Olive','Ghillie');
        break;
    };
    var getBodyTop = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyTop[result]
    };
    
    var getBodyDown = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyDown[result]
    };
    
    var getCarrier = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyProtection[result]
    };
    
    var getHelmet = function(max) {
        var result = Math.round(Math.random() * max);
        return headProtection[result]
    };
    
    var getMask = function(max) {
        var result = Math.round(Math.random() * max);
        return faceProtection[result]
    };
    
    var getHeadphones = function(max) {
        var result = Math.round(Math.random() * max);
        return headphones[result]
    };
    
    var getNightvision = function(max) {
        var result = Math.round(Math.random() * max);
        return nightvision[result]
    };
        
    var getHud = function(max) {
        var result = Math.round(Math.random() * max);
        return hudOnOff[result]
    }  ;
    
    //generating assault rifle
    var getPrimaryWeapon = function(max) {
        var result = Math.round(Math.random() * max);
        return primaryWeapons[result]
    };
    
    //generating sniper rifle
    var getSniperRifle = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperWeapons[result]
    };
    
    var getHelpGun = function(max) {
        var result = Math.round(Math.random() * max);
        return helpGuns[result]
    };
    
    var getRifleScope = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleScopes[result]
    };
    
    var getRifleGrip = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleGrips[result]
    };
    
    var getRifleLaser = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleLasers[result]
    };
    
    var getRifleMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleMagazines[result]
    };
    
    var getRifleBarrel = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleBarrels[result]
    };
    
    var getRifleMuzzle = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleMuzzles[result]
    };
    
    var getRifleButtstock = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleButtstocks[result]
    };
    
    //generating primary rifle modules
    
    var getSniperScope = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperScopes[result]
    };
    
    var getSniperMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperMagazines[result]
    };
    
    var getSniperButtstock = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperButtstocks[result]
    };
    
    //generating sniper rifle modules
    locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
    taskParent.textContent = `Task: ${task}`;
    if (hud.classList.contains('active')) {
        hudParent.classList.remove('hidden');
        hudParent.textContent = `HUD: ${getHud(hudOnOff.length - 1)}`;    
    }/*if hud checkbox contains "active" TRUE*/ else {
        hudParent.classList.add('hidden');
    };/*if hud checkbox contains "active" FALSE*/

    if (taskParent.textContent === 'Task: Recon (city)') {
        armorParent.classList.add('hidden');
        headwearParent.classList.add('hidden');
        facemaskParent.classList.add('hidden');
        headphonesParent.classList.add('hidden');
        nightVisionParent.classList.add('hidden');
        primaryGunParent.classList.add('hidden');
        secondGunParent.classList.add('hidden');
        if (guns.classList.contains('active')) {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');
            helpGunName.textContent = `Pistol: ${getHelpGun(helpGuns.length - 1)}`;    
        }/*if guns checkbox contains class "active" TRUE*/ else {
            helpGunParent.classList.add('hidden');
            helpGunName.classList.add('hidden');
        };/*if guns checkbox contains class "active" FALSE*/

        if (gettedTime) {
            nightVisionParent.classList.add('hidden');
        };
    }/*if task === Recon (City) TRUE*/ else {
        armorParent.classList.remove('hidden');
        headwearParent.classList.remove('hidden');
        facemaskParent.classList.remove('hidden');
        headphonesParent.classList.remove('hidden');
        nightVisionParent.classList.remove('hidden');
        primaryGunParent.classList.remove('hidden');
        secondGunParent.classList.remove('hidden');

        if (gettedTime === 'Evening' || gettedTime === 'Night') {
            nightVisionParent.classList.remove('hidden');
            nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
        }/*if gettedTime === Evening || Night TRUE*/ else {
            nightVisionParent.classList.add('hidden');
        }; /*if gettedTime === Evening || Night FALSE*/
    };/*if task === Recon (City) FALSE*/
    
    coordinatesParent.textContent = `Coordinates: ${getPlaceOfTask(taskIn.length - 1)}`;
    timeParent.textContent = `Time: ${gettedTime}`;
    transportParent.textContent = `Allowed Transport: ${getTransport(transport.length - 1)}`;
    clothingParent.textContent = `Type of clothes: ${gettedClothing}`;
    bodyTopParent.textContent = `Body Top: ${getBodyTop(bodyTop.length - 1)}`;
    bodyDownParent.textContent = `Body Down: ${getBodyDown(bodyDown.length - 1)}`;
    armorParent.textContent = `Armor: ${getCarrier(bodyProtection.length - 1)}`;
    headwearParent.textContent = `Headwear: ${getHelmet(headProtection.length - 1)}`;
    facemaskParent.textContent = `Facemask: ${getMask(faceProtection.length - 1)}`;
    headphonesParent.textContent = `Headphones: ${getHeadphones(headphones.length - 1)}`;
    //gear
    if (guns.classList.contains('active')) {
        generatingGuns.classList.remove('hidden');
        primaryGunName.textContent = `Primary Weapon: ${getPrimaryWeapon(primaryWeapons.length - 1)}`;
        secondGunName.textContent = `Second Weapon: ${getSniperRifle(sniperWeapons.length - 1)}`;
        if (taskParent.textContent === 'Task: Recon (city)') {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');  
        } else {
            helpGunParent.classList.add('hidden');
            helpGunName.classList.add('hidden');    
        };
        //guns  
        if (modules.classList.contains('active')) {
            for (let e of generatingModules) {
                e.classList.remove('hidden');
            };
            primaryGunScope.textContent = `Scope: ${getRifleScope(rifleScopes.length - 1)}`;
            primaryGunGrip.textContent = `Grip: ${getRifleGrip(rifleGrips.length - 1)}`;
            primaryGunLaser.textContent = `Laser: ${getRifleLaser(rifleLasers.length - 1)}`;
            primaryGunMagazine.textContent = `Magazine: ${getRifleMagazine(rifleMagazines.length - 1)}`;
            primaryGunBarrel.textContent = `Barrel: ${getRifleBarrel(rifleBarrels.length - 1)}`;
            primaryGunMuzzle.textContent = `Muzzle: ${getRifleMuzzle(rifleMuzzles.length - 1)}`;
            primaryGunButtstock.textContent = `Buttstock: ${getRifleButtstock(rifleButtstocks.length - 1)}`;
            //primaryGun
            secondGunScope.textContent = `Scope: ${getSniperScope(sniperScopes.length - 1)}`;
            secondGunMagazine.textContent = `Magazine: ${getSniperMagazine(sniperMagazines.length - 1)}`;
            secondGunLaser.textContent = `Laser: ${getRifleLaser(rifleLasers.length - 1)}`;
            secondGunBarrel.textContent = `Barrel: ${getRifleBarrel(rifleBarrels.length - 1)}`;
            secondGunMuzzle.textContent = `Muzzle: ${getRifleMuzzle(rifleMuzzles.length - 1)}`;
            secondGunButtstock.textContent = `Buttstock: ${getSniperButtstock(sniperButtstocks.length - 1)}`;  
            //secondGun  
            
        }/*if modules checkbox contains "active"*/ else {
            for (let e of generatingModules) {
                e.classList.add('hidden');
            };
        };
    }/*if guns checkbox contains "active"*/ else {
        generatingGuns.classList.add('hidden');
    };
};