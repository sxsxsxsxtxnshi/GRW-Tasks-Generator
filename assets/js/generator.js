let hud = document.querySelector('.generator__col1__param.hud');
hud.textContent = 'generating hud: off'
let hudContent = hud.textContent;
let guns = document.querySelector('.generator__col1__param.guns');
guns.textContent = 'generating guns: off';
let gunsContent = guns.textContent;
let modules = document.querySelector('.generator__col1__param.modules');
modules.textContent = 'generating modules: off';
let modulesContent = modules.textContent;

hud.onclick = () => {
    hud.classList.toggle('active');
    hud.textContent = hudContent;
    if (hud.classList.contains('active')) {
        hud.textContent = 'generating HUD: on';    
    };
};
        
guns.onclick = () => {
    guns.classList.toggle('active');
    modules.classList.remove('active');
    guns.textContent = gunsContent;
    if (guns.classList.contains('active')) {
        guns.textContent = 'generating guns: on';    
    };
};

modules.onclick = () => {
    modules.classList.toggle('active');
    guns.classList.add('active');
    guns.textContent = 'generating guns: on';
    modules.textContent = modulesContent; 
    if (modules.classList.contains('active')) {
        modules.textContent = 'generating modules: on';    
    };
};

//i know that upper code is bad, but for now i leave it like this

let locationParent = document.querySelector('.generator__col2-info__sup__info.location');
let taskParent = document.querySelector('.generator__col2-info__sup__info.task');
let coordinatesParent = document.querySelector('.generator__col2-info__sub__list__item.coordinates');
let timeParent = document.querySelector('.generator__col2-info__sub__list__item.time');
let transportParent = document.querySelector('.generator__col2-info__sub__list__item.transport');
let clothingParent = document.querySelector('.generator__col2-info__sub__list__item.clothing');
let bodyTopParent = document.querySelector('.generator__col2-info__sub__list__item.bodyTop');
let bodyDownParent = document.querySelector('.generator__col2-info__sub__list__item.bodyDown');
let armorParent = document.querySelector('.generator__col2-info__sub__list__item.armor');
let headwearParent = document.querySelector('.generator__col2-info__sub__list__item.headwear');
let facemaskParent = document.querySelector('.generator__col2-info__sub__list__item.facemask');
let headphonesParent = document.querySelector('.generator__col2-info__sub__list__item.headphones');
let nightVisionParent = document.querySelector('.generator__col2-info__sub__list__item.nightvision');
let hudParent = document.querySelector('.generator__col2-info__sub__list__item.hud');

let primaryGunParent = document.querySelector('.generator__col2-info__sub__list.primary.weapon');
let primaryGunName = document.querySelector('.generator__col2-info__sub__list__item.primary.weapon');
let primaryGunScope = document.querySelector('.generator__col2-info__sub__list__item.primary.scope');
let primaryGunGrip = document.querySelector('.generator__col2-info__sub__list__item.primary.grip');
let primaryGunLaser = document.querySelector('.generator__col2-info__sub__list__item.primary.laser');
let primaryGunMagazine = document.querySelector('.generator__col2-info__sub__list__item.primary.magazine');
let primaryGunBarrel = document.querySelector('.generator__col2-info__sub__list__item.primary.barrel');
let primaryGunMuzzle = document.querySelector('.generator__col2-info__sub__list__item.primary.muzzle');
let primaryGunButtstock = document.querySelector('.generator__col2-info__sub__list__item.primary.buttstock');
// /\primaryGun settings

let secondGunParent = document.querySelector('.generator__col2-info__sub__list.second.weapon');
let secondGunName = document.querySelector('.generator__col2-info__sub__list__item.second.weapon');
let secondGunScope = document.querySelector('.generator__col2-info__sub__list__item.second.scope');
let secondGunGrip = document.querySelector('.generator__col2-info__sub__list__item.second.grip');
let secondGunMagazine = document.querySelector('.generator__col2-info__sub__list__item.second.magazine');
let secondGunLaser = document.querySelector('.generator__col2-info__sub__list__item.second.laser');
let secondGunBarrel = document.querySelector('.generator__col2-info__sub__list__item.second.barrel');
let secondGunMuzzle = document.querySelector('.generator__col2-info__sub__list__item.second.muzzle');
let secondGunButtstock = document.querySelector('.generator__col2-info__sub__list__item.second.buttstock');
// /\secondGun settings

let helpGunParent = document.querySelector('.generator__col2-info__sub__list.help.weapon');
let helpGunName = document.querySelector('.generator__col2-info__sub__list__item.pistol');
// /\helpGun settings


//arrays
let generatingGuns = document.querySelector('.generator__col2-info__sub__list__guns');
let generatingModules = document.querySelectorAll('.generator__col2-info__sub__list__item.modules');
var regions = ['Koani', 'Tabakal', 'Monte Puncu', 'Villa Verde','Caimanes','Montuyoc','Inca Camina','Remanzo','Barvechos','Itacua','Ocoro','Flor de Oro','P.N. De Agua Verde','Pukara','Libertad','Mojocoyo','Espiritu Santo','Media Luna','San Mateo',];
var timeOfDay = ['Morning','Day','Evening','Night',];
var transport = ['Four-wheel','Two-wheel','Air','Water',];
var typeOfTask = [/**/'Capturing the outpost', 'Capturing the commander', 'Capturing the column', 'Diversion (C4)','Capturing the outpost, Capturing the commander','Diversion (C4), Capturing the commander','Liqudation the commander','Liqudation the commander, Diversion (С4)','Boss Capturing/Liquidation','Recon (city)',];
var taskIn = ['Center', 'North','South','West','East','Northern-West','Northern-East','Southern-West','Southern-East',];
var typeOfClothes = ['Civillian', 'PMC', 'Special Forces', 'Hidden',];
var bodyTop = ['Hoodie',];
var bodyDown = [];
var headProtection = ['None','FAST MT','Team Wendy EXFIL','Baseball Cap','Baseball Cap Backwards','Recruit Hat 5.11','Multicam 5.11 Cap','Santa Blanca Cap',];
var faceProtection = ['None','Two-Hole Balaclava','One-Hole Balaclava',];
var headphones = ['Earpice','Headset A','Headset B','Headset C',];
var bodyProtection = ['Molle Harness','Molle','5.11 VTAC LBE','Tactical Vest','5.11 Tactec Plate Carrier','JPC','Mayflower APC',];
var nightvision = [true, false,];
var hudOnOff = [true, false,];  
var primaryWeapons = [/**/'MK-17','R5-RGP','Kriss Vector .45 ACP', 'ACR', '9x19 VSN','MDR','805 Bren A2','M4A1','SR-635','AK-47','6P41','G2','L85A2','AK-12','556xi','Stoner LMG A1','MK-48','UMP-45','PSG','SR-3M','Mk249', 'P416', 'MP7',];
var sniperWeapons = ['Dragunov (SVD)','G28','SR25','MSR','HTI','M40A5','SR-1','SRSA1','L115A3','MK14',];
var helpGuns = ['Beretta M9', 'P45T', 'M1911', 'P12','5.7 USG',];
var rifleScopes = ['Polymer Iron Sight', 'Polymer BUIS', 'Russian Red Dot', 'EXPS3', 'PK-AS', 'Panoramic Sight', 'Micro T-1', 'CompM4', 'Digital Scope',];
var rifleScopesBefore = rifleScopes;
var rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG', 'Std Grenade Launcher', 'Grenade Launcher М203',];
var rifleGripsBefore = rifleGrips;
var rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot','Range Finder',];
var rifleLasersBefore = rifleLasers;
var rifleMagazines = ['Standard (20)', 'Extended (30)', 'Large (50)',];
var rifleMagazinesBefore = rifleMagazines;
var rifleBarrels = ['Standard barrel',];
var rifleBarrelsBefore = rifleBarrels;
var rifleMuzzles = ['Stock Muzzle', 'Supressor',];
var rifleMuzzlesBefore = rifleMuzzles;
var rifleButtstocks = ['Stock Buttstock',];
var rifleButtstocksBefore = rifleButtstocks;

var sniperScopes = ['TA31H', 'TARS101', 'T5Xi Tactical', 'Digital Scope', 'POSP', 'PKS-07', 'G28',];
var sniperGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG',];
var sniperLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot','Range Finder',];
var sniperMagazines = ['Standard (10)','Extended (20)',];
var sniperMagazinesBefore = sniperMagazines;
var sniperBarrels = ['Standard barrel',];
var sniperBarrelsBefore = sniperBarrels;
var sniperMuzzles = ['Stock Muzzle', 'Supressor',];
var sniperMuzzlesBefore = sniperMuzzles;
var sniperButtstocks = ['Stock Buttstock',];
var sniperButtstocksBefore = sniperButtstocks;

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

bodyTop = [];
bodyDown = [];
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
};

var getPrimaryWeapon = function(max) {
    var result = Math.round(Math.random() * max);
    return primaryWeapons[result]
};
var gettedPrimary = getPrimaryWeapon(primaryWeapons.length - 1);
//generated assault rifle

var getSniperRifle = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperWeapons[result]
};
var gettedSecond = getSniperRifle(sniperWeapons.length - 1);
//generated sniper rifle

var getHelpGun = function(max) {
    var result = Math.round(Math.random() * max);
    return helpGuns[result]
};
//generated pistol

rifleScopes = rifleScopesBefore;
if (gettedPrimary === 'MK-17' || gettedPrimary === 'ACR' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'SR-3M' || gettedPrimary === 'P416' || gettedPrimary === 'R5-RGP') {
    rifleScopes = ['Russian Red Dot & G33','EXPS & G33', 'Micro T-1 & G33','TA31H',];
};

if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'Mk249' || gettedPrimary === 'MK-48' || gettedPrimary === '6P41') {
    rifleScopes = ['Polymer Iron Sight', 'Russian Red Dot', 'EXPS3', 'Panoramic Sight', 'Micro T-1',];
};
//scopes

rifleGrips = rifleGripsBefore;
if (gettedPrimary === 'AK-47') {
    rifleGrips = ['Rail Cover', 'GP25 GL'];
};

if (gettedPrimary === 'SR-3M') {
    rifleGrips = ['GP25 GL', 'Foregrip',];
};

if (gettedPrimary === 'Kriss Vector .45 ACP' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45' || gettedPrimary === 'PSG' || gettedPrimary === 'SR-635' || gettedPrimary === '6P41' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249') {
    rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG',];
};

if (gettedPrimary === 'Kriss Vector .45 ACP') {
    rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3',];
};

if (gettedPrimary === 'MDR') {
    rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'Std Grenade Launcher',];
};
//rifle grips

secondGunGrip.classList.add('hidden');
if (gettedSecond === 'SR25' || gettedSecond === 'G28' || gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'MK14') {
    secondGunGrip.classList.remove('hidden');
};
//sniper grips
//grips 

rifleLasers = rifleLasersBefore; 
if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === '6P41' || gettedPrimary === 'SR-635' || gettedPrimary === 'MP7' || gettedPrimary === 'PSG' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45') {
    rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot',];
};
//primary lasers

secondGunLaser.classList.remove('hidden');
if (gettedSecond === 'L115A3' || gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'SR-1' || gettedSecond === 'M40A5') {
    //sniperLasers = sniperLasersBefore;
    secondGunLaser.classList.add('hidden');
};
//sniper lasers
//lasers

rifleMagazines = rifleMagazinesBefore;
if (gettedPrimary === 'MK-17' || gettedPrimary === 'SR-3M' || gettedPrimary === 'SR-635' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'PSG' || gettedPrimary === 'MP7') {
    rifleMagazines = ['Standard (20)', 'Extended (30)',];
};

if (gettedPrimary === 'UMP-45') {
    rifleMagazines = ['Standard (25)',];
};

if (gettedPrimary === 'Kriss Vector .45 ACP') {
    rifleMagazines = ['Standard (15)','Extended (25)',];
};

if (gettedPrimary === 'Stoner LMG A1') {
    rifleMagazines = ['Standard (100)',];
};

if (gettedPrimary === 'MK-48') {
    rifleMagazines = ['Standard (100)', 'Extended (200)',];
};

if (gettedPrimary === 'Mk249') {
    rifleMagazines = ['Standard (150)',];
};

primaryGunGrip.classList.remove('hidden');
if (gettedPrimary === '6P41') {
    primaryGunGrip.classList.add('hidden');
    //grip
    rifleMagazines = ['Standard (175)',];
};
//rifle magazines

sniperMagazines = sniperMagazinesBefore;
if (gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SR-1' || gettedSecond === 'SRSA1') {
    sniperMagazines = ['Standard (5)', 'Extended (10)',];
};
//sniper magazines

//rifle/sniper magazines

rifleBarrels = rifleBarrelsBefore;

if (gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'M4A1' || gettedPrimary === 'MDR' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === '6P41' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === 'PSG' || gettedPrimary === 'Kriss Vector .45 ACP') {
    rifleBarrels = ['Long Barrel',];
};

if (gettedPrimary === 'P416' || gettedPrimary === 'G2' || gettedPrimary === 'SR-635' || gettedPrimary === 'L85A2' ) {
    rifleBarrels = ['Short Barrel',];
};

if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'AK-47' || gettedPrimary === 'MK-17' || gettedPrimary === 'ACR') {
    rifleBarrels = ['Short Barrel','Long Barrel',];
};
//rifle barrels
sniperBarrels = sniperBarrelsBefore;

if (gettedSecond === 'G28' || gettedSecond === 'SR-1' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'L115A3' || gettedSecond === 'MK14') {
    sniperBarrels = ['Long Barrel',];
};

if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'SR25') {
    sniperBarrels = ['Short Barrel',];
};

if (gettedSecond === 'M40A5' || gettedSecond === 'MSR') {
    sniperBarrels = ['Short Barrel','Long Barrel',];
};
//sniper barrels

//rifle/sniper barrels

rifleMuzzles = rifleMuzzlesBefore;
if (gettedPrimary === 'MK-17' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'ACR' || gettedPrimary === 'MDR' || gettedPrimary === 'P416' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'SR-3M') {
    rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
};

if (gettedPrimary === 'MP7' || gettedPrimary === 'SR-635' || gettedPrimary === 'Kriss Vector .45 ACP') {
    rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator',];
};

if (gettedPrimary === '6P41' || gettedPrimary === 'Mk249') {
    rifleMuzzles = ['Stock Muzzle', 'Compensator', 'Compensator V2',];
};

if (gettedPrimary === 'MK-48') {
    rifleMuzzles = ['Stock Muzzle', 'Compensator V2',];
};
//rifle muzzles

sniperMuzzles = sniperMuzzlesBefore;
if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'G28' || gettedSecond === 'MK14') {
    sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
};

if (gettedSecond === 'M40A5' || gettedSecond === 'SR25') {
    sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator V2',];
};
//sniper muzzles

//muzzles

rifleButtstocks = rifleButtstocksBefore;
primaryGunButtstock.classList.remove('hidden');

if (gettedPrimary === 'UMP-45' || gettedPrimary === 'MP7' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'SR-635' || gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'Stoner LMG A1') {
    rifleButtstocks = ['Extended Buttstock', 'Folded Buttstock',];
};

if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2') {
    rifleButtstocks = ['Stock Buttstock', 'Short Stock',];
};

if (gettedPrimary === 'AK-47' || gettedPrimary === 'ACR' || gettedPrimary === 'Kriss Vector .45 ACP') {
    rifleButtstocks = ['Stock Buttstock', 'Extended Buttstock','Folded Buttstock',];
};

if (gettedPrimary === 'MK-17') {
    rifleButtstocks = ['Extended Buttstock','Folded Buttstock','Compensated Buttstock',];
};

if (gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'MDR') {
    primaryGunButtstock.classList.add('hidden');
};
//primaryButtstocks

secondGunButtstock.classList.remove('hidden');
if (gettedSecond === 'M14') {
    sniperButtstocks = sniperButtstocksBefore;
    sniperButtstocks = ['Extended Buttstock','Folded Buttstock',];
};

if (gettedSecond === 'SR25' || gettedSecond === 'Dragunov (SVD)') {
    sniperButtstocks = sniperButtstocksBefore;
    sniperButtstocks = ['Compensated Buttstock',];
};

if (gettedSecond === 'M40A5' || gettedSecond === 'SRSA1' || gettedSecond === 'HTI') {
    sniperButtstocks = sniperButtstocksBefore;
    secondGunButtstock.classList.add('hidden');
};
//secondButtstocks

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

var getSniperGrip = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperGrips[result]
};

var getSniperLaser = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperLasers[result]
};

var getSniperMagazine = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperMagazines[result]
};

var getSniperBarrel = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperBarrels[result]
};

var getSniperMuzzle = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperMuzzles[result]
};

var getSniperButtstock = function(max) {
    var result = Math.round(Math.random() * max);
    return sniperButtstocks[result]
};

//generating sniper rifle modules
locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
taskParent.textContent = `Task: ${task}`;

hudParent.classList.add('hidden');
if (hud.classList.contains('active')) {
    hudParent.classList.remove('hidden');
    hudParent.textContent = `HUD: ${getHud(hudOnOff.length - 1)}`;    
}/*if hud checkbox contains "active" TRUE*/

armorParent.classList.remove('hidden');
headwearParent.classList.remove('hidden');
facemaskParent.classList.remove('hidden');
headphonesParent.classList.remove('hidden');
primaryGunParent.classList.remove('hidden');
secondGunParent.classList.remove('hidden');

nightVisionParent.classList.add('hidden');

if (gettedTime === 'Evening' || gettedTime === 'Night') {
    nightVisionParent.classList.remove('hidden');
    nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
};/*if gettedTime === Evening || Night TRUE*/

if (taskParent.textContent === 'Task: Recon (city)') {
    armorParent.classList.add('hidden');
    headwearParent.classList.add('hidden');
    facemaskParent.classList.add('hidden');
    headphonesParent.classList.add('hidden');
    nightVisionParent.classList.add('hidden');
    primaryGunParent.classList.add('hidden');
    secondGunParent.classList.add('hidden');

    helpGunParent.classList.add('hidden');
    helpGunName.classList.add('hidden');
    if (guns.classList.contains('active')) {
        helpGunParent.classList.remove('hidden');
        helpGunName.classList.remove('hidden');
        helpGunName.textContent = `Pistol: ${getHelpGun(helpGuns.length - 1)}`;    
    };/*if guns checkbox contains class "active" TRUE*/
};/*if task === Recon (City) TRUE*/

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

generatingGuns.classList.add('hidden');
if (guns.classList.contains('active')) {
    generatingGuns.classList.remove('hidden');
    primaryGunName.textContent = `Primary Weapon: ${gettedPrimary}`;
    secondGunName.textContent = `Second Weapon: ${gettedSecond}`;

    helpGunParent.classList.add('hidden');
    helpGunName.classList.add('hidden');   
    if (taskParent.textContent === 'Task: Recon (city)') {
        helpGunParent.classList.remove('hidden');
        helpGunName.classList.remove('hidden');  
    };

    //guns 
    for (let e of generatingModules) {
        e.classList.add('hidden');
    }; 

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
        secondGunGrip.textContent = `Grip: ${getSniperGrip(sniperGrips.length - 1)}`;
        secondGunMagazine.textContent = `Magazine: ${getSniperMagazine(sniperMagazines.length - 1)}`;
        secondGunLaser.textContent = `Laser: ${getSniperLaser(sniperLasers.length - 1)}`;
        secondGunBarrel.textContent = `Barrel: ${getSniperBarrel(sniperBarrels.length - 1)}`;
        secondGunMuzzle.textContent = `Muzzle: ${getSniperMuzzle(sniperMuzzles.length - 1)}`;
        secondGunButtstock.textContent = `Buttstock: ${getSniperButtstock(sniperButtstocks.length - 1)}`;  
        //secondGun  
    };
}
if (gettedPrimary === 'MP7') {
    primaryGunGrip.classList.add('hidden');
};

if (gettedPrimary === 'MP7') {
    primaryGunGrip.classList.add('hidden');
};

let genBtn = document.querySelector('.generator__col1__btn');

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

    bodyTop = [];
    bodyDown = [];
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
    };
    
    var getPrimaryWeapon = function(max) {
        var result = Math.round(Math.random() * max);
        return primaryWeapons[result]
    };
    var gettedPrimary = getPrimaryWeapon(primaryWeapons.length - 1);
    //generated assault rifle
    
    var getSniperRifle = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperWeapons[result]
    };
    var gettedSecond = getSniperRifle(sniperWeapons.length - 1);
    //generated sniper rifle

    var getHelpGun = function(max) {
        var result = Math.round(Math.random() * max);
        return helpGuns[result]
    };
    //generated pistol
    
    rifleScopes = rifleScopesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'ACR' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'SR-3M' || gettedPrimary === 'P416' || gettedPrimary === 'R5-RGP') {
        rifleScopes = ['Russian Red Dot & G33','EXPS & G33', 'Micro T-1 & G33','TA31H',];
    };
    
    if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'Mk249' || gettedPrimary === 'MK-48' || gettedPrimary === '6P41') {
        rifleScopes = ['Polymer Iron Sight', 'Russian Red Dot', 'EXPS3', 'Panoramic Sight', 'Micro T-1',];
    };
    //scopes

    rifleGrips = rifleGripsBefore;
    if (gettedPrimary === 'AK-47') {
        rifleGrips = ['Rail Cover', 'GP25 GL'];
    };

    if (gettedPrimary === 'SR-3M') {
        rifleGrips = ['GP25 GL', 'Foregrip',];
    };
    
    if (gettedPrimary === 'Kriss Vector .45 ACP' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45' || gettedPrimary === 'PSG' || gettedPrimary === 'SR-635' || gettedPrimary === '6P41' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG',];
    };

    if (gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3',];
    };
    
    if (gettedPrimary === 'MDR') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'Std Grenade Launcher',];
    };
    //rifle grips

    secondGunGrip.classList.add('hidden');
    if (gettedSecond === 'SR25' || gettedSecond === 'G28' || gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'MK14') {
        secondGunGrip.classList.remove('hidden');
    };
    //sniper grips
    //grips 

    rifleLasers = rifleLasersBefore; 
    if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === '6P41' || gettedPrimary === 'SR-635' || gettedPrimary === 'MP7' || gettedPrimary === 'PSG' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45') {
        rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot',];
    };
    //primary lasers

    secondGunLaser.classList.remove('hidden');
    if (gettedSecond === 'L115A3' || gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'SR-1' || gettedSecond === 'M40A5') {
        //sniperLasers = sniperLasersBefore;
        secondGunLaser.classList.add('hidden');
    };
    //sniper lasers
    //lasers

    rifleMagazines = rifleMagazinesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'SR-3M' || gettedPrimary === 'SR-635' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'PSG' || gettedPrimary === 'MP7') {
        rifleMagazines = ['Standard (20)', 'Extended (30)',];
    };

    if (gettedPrimary === 'UMP-45') {
        rifleMagazines = ['Standard (25)',];
    };

    if (gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleMagazines = ['Standard (15)','Extended (25)',];
    };

    if (gettedPrimary === 'Stoner LMG A1') {
        rifleMagazines = ['Standard (100)',];
    };

    if (gettedPrimary === 'MK-48') {
        rifleMagazines = ['Standard (100)', 'Extended (200)',];
    };

    if (gettedPrimary === 'Mk249') {
        rifleMagazines = ['Standard (150)',];
    };

    primaryGunGrip.classList.remove('hidden');
    if (gettedPrimary === '6P41') {
        primaryGunGrip.classList.add('hidden');
        //grip
        rifleMagazines = ['Standard (175)',];
    };
    //rifle magazines

    sniperMagazines = sniperMagazinesBefore;
    if (gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SR-1' || gettedSecond === 'SRSA1') {
        sniperMagazines = ['Standard (5)', 'Extended (10)',];
    };
    //sniper magazines

    //rifle/sniper magazines

    rifleBarrels = rifleBarrelsBefore;

    if (gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'M4A1' || gettedPrimary === 'MDR' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === '6P41' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === 'PSG' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleBarrels = ['Long Barrel',];
    };

    if (gettedPrimary === 'P416' || gettedPrimary === 'G2' || gettedPrimary === 'SR-635' || gettedPrimary === 'L85A2' ) {
        rifleBarrels = ['Short Barrel',];
    };

    if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'AK-47' || gettedPrimary === 'MK-17' || gettedPrimary === 'ACR') {
        rifleBarrels = ['Short Barrel','Long Barrel',];
    };
    //rifle barrels
    sniperBarrels = sniperBarrelsBefore;

    if (gettedSecond === 'G28' || gettedSecond === 'SR-1' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'L115A3' || gettedSecond === 'MK14') {
        sniperBarrels = ['Long Barrel',];
    };

    if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'SR25') {
        sniperBarrels = ['Short Barrel',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'MSR') {
        sniperBarrels = ['Short Barrel','Long Barrel',];
    };
    //sniper barrels

    //rifle/sniper barrels
    
    rifleMuzzles = rifleMuzzlesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'ACR' || gettedPrimary === 'MDR' || gettedPrimary === 'P416' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'SR-3M') {
        rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
    };

    if (gettedPrimary === 'MP7' || gettedPrimary === 'SR-635' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator',];
    };

    if (gettedPrimary === '6P41' || gettedPrimary === 'Mk249') {
        rifleMuzzles = ['Stock Muzzle', 'Compensator', 'Compensator V2',];
    };

    if (gettedPrimary === 'MK-48') {
        rifleMuzzles = ['Stock Muzzle', 'Compensator V2',];
    };
    //rifle muzzles
    
    sniperMuzzles = sniperMuzzlesBefore;
    if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'G28' || gettedSecond === 'MK14') {
        sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'SR25') {
        sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator V2',];
    };
    //sniper muzzles
    
    //muzzles

    rifleButtstocks = rifleButtstocksBefore;
    primaryGunButtstock.classList.remove('hidden');

    if (gettedPrimary === 'UMP-45' || gettedPrimary === 'MP7' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'SR-635' || gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'Stoner LMG A1') {
        rifleButtstocks = ['Extended Buttstock', 'Folded Buttstock',];
    };

    if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2') {
        rifleButtstocks = ['Stock Buttstock', 'Short Stock',];
    };

    if (gettedPrimary === 'AK-47' || gettedPrimary === 'ACR' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleButtstocks = ['Stock Buttstock', 'Extended Buttstock','Folded Buttstock',];
    };

    if (gettedPrimary === 'MK-17') {
        rifleButtstocks = ['Extended Buttstock','Folded Buttstock','Compensated Buttstock',];
    };

    if (gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'MDR') {
        primaryGunButtstock.classList.add('hidden');
    };
    //primaryButtstocks

    secondGunButtstock.classList.remove('hidden');
    if (gettedSecond === 'M14') {
        sniperButtstocks = sniperButtstocksBefore;
        sniperButtstocks = ['Extended Buttstock','Folded Buttstock',];
    };

    if (gettedSecond === 'SR25' || gettedSecond === 'Dragunov (SVD)') {
        sniperButtstocks = sniperButtstocksBefore;
        sniperButtstocks = ['Compensated Buttstock',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'SRSA1' || gettedSecond === 'HTI') {
        sniperButtstocks = sniperButtstocksBefore;
        secondGunButtstock.classList.add('hidden');
    };
    //secondButtstocks

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

    var getSniperGrip = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperGrips[result]
    };

    var getSniperLaser = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperLasers[result]
    };
    
    var getSniperMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperMagazines[result]
    };

    var getSniperBarrel = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperBarrels[result]
    };

    var getSniperMuzzle = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperMuzzles[result]
    };
    
    var getSniperButtstock = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperButtstocks[result]
    };
    
    //generating sniper rifle modules
    locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
    taskParent.textContent = `Task: ${task}`;

    hudParent.classList.add('hidden');
    if (hud.classList.contains('active')) {
        hudParent.classList.remove('hidden');
        hudParent.textContent = `HUD: ${getHud(hudOnOff.length - 1)}`;    
    }/*if hud checkbox contains "active" TRUE*/

    armorParent.classList.remove('hidden');
    headwearParent.classList.remove('hidden');
    facemaskParent.classList.remove('hidden');
    headphonesParent.classList.remove('hidden');
    primaryGunParent.classList.remove('hidden');
    secondGunParent.classList.remove('hidden');

    nightVisionParent.classList.add('hidden');

    if (gettedTime === 'Evening' || gettedTime === 'Night') {
        nightVisionParent.classList.remove('hidden');
        nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
    };/*if gettedTime === Evening || Night TRUE*/

    if (taskParent.textContent === 'Task: Recon (city)') {
        armorParent.classList.add('hidden');
        headwearParent.classList.add('hidden');
        facemaskParent.classList.add('hidden');
        headphonesParent.classList.add('hidden');
        nightVisionParent.classList.add('hidden');
        primaryGunParent.classList.add('hidden');
        secondGunParent.classList.add('hidden');

        helpGunParent.classList.add('hidden');
        helpGunName.classList.add('hidden');
        if (guns.classList.contains('active')) {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');
            helpGunName.textContent = `Pistol: ${getHelpGun(helpGuns.length - 1)}`;    
        };/*if guns checkbox contains class "active" TRUE*/
    };/*if task === Recon (City) TRUE*/

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

    generatingGuns.classList.add('hidden');
    if (guns.classList.contains('active')) {
        generatingGuns.classList.remove('hidden');
        primaryGunName.textContent = `Primary Weapon: ${gettedPrimary}`;
        secondGunName.textContent = `Second Weapon: ${gettedSecond}`;

        helpGunParent.classList.add('hidden');
        helpGunName.classList.add('hidden');   
        if (taskParent.textContent === 'Task: Recon (city)') {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');  
        };

        //guns 
        for (let e of generatingModules) {
            e.classList.add('hidden');
        }; 

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
            secondGunGrip.textContent = `Grip: ${getSniperGrip(sniperGrips.length - 1)}`;
            secondGunMagazine.textContent = `Magazine: ${getSniperMagazine(sniperMagazines.length - 1)}`;
            secondGunLaser.textContent = `Laser: ${getSniperLaser(sniperLasers.length - 1)}`;
            secondGunBarrel.textContent = `Barrel: ${getSniperBarrel(sniperBarrels.length - 1)}`;
            secondGunMuzzle.textContent = `Muzzle: ${getSniperMuzzle(sniperMuzzles.length - 1)}`;
            secondGunButtstock.textContent = `Buttstock: ${getSniperButtstock(sniperButtstocks.length - 1)}`;  
            //secondGun  
        };
    }
    if (gettedPrimary === 'MP7') {
        primaryGunGrip.classList.add('hidden');
    };
};

//commit#5