
/* --------------------------------1. 탈리스만 목록-------------------------------------------------------------*/
const talisman = {
    td1: { name : "붉은 호박 메달리온", url: 'https://heumu.blogspot.com/2022/03/crimson-amber-medallion.html' },
    td2: { name : "붉은 호박 메달리온+1", url: 'https://heumu.blogspot.com/2022/03/crimson-amber-medallion.html' },
    td3: { name : "붉은 호박 메달리온+2", url: 'https://heumu.blogspot.com/2022/03/crimson-amber-medallion.html' },
    td4: { name : "붉은 종자의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/crimson-seed-talisman.html' },
    td5: { name : "은혜의 물방울의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/blessed-dew-talisman.html' },
    td6: { name : "푸른 호박 메달리온", url: 'https://heumu.blogspot.com/2022/03/cerulean-amber-medallion.html' },
    td7: { name : "푸른 호박 메달리온+1", url: 'https://heumu.blogspot.com/2022/03/cerulean-amber-medallion.html' },
    td8: { name : "푸른 호박 메달리온+2", url: 'https://heumu.blogspot.com/2022/03/cerulean-amber-medallion.html' },
    td9: { name : "푸른 종자의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/cerulean-seed-talisman.html' },
    td10: { name : "녹색 호박 메달리온", url: 'https://heumu.blogspot.com/2022/04/viridian-amber-medallion.html' },
    
    td11: { name : "녹색 호박 메달리온+1", url: 'https://heumu.blogspot.com/2022/04/viridian-amber-medallion.html' },
    td12: { name : "녹색 호박 메달리온+2", url: 'https://heumu.blogspot.com/2022/04/viridian-amber-medallion.html' },
    td13: { name : "녹색 거북 탈리스만", url: 'https://heumu.blogspot.com/2022/04/green-turtle-talisman.html' },
    td14: { name : "무구 덩어리 부적", url: 'https://heumu.blogspot.com/2022/03/arsenal-charm.html' },
    td15: { name : "무구 덩어리 부적+1", url: 'https://heumu.blogspot.com/2022/03/arsenal-charm.html' },
    td16: { name : "큰 항아리의 무구 덩어리", url: 'https://heumu.blogspot.com/2022/04/great-jars-arsenal.html' },
    td17: { name : "황금나무의 은총", url: 'https://heumu.blogspot.com/2022/03/erdtrees-favor.html' },
    td18: { name : "황금나무의 은총+1", url: 'https://heumu.blogspot.com/2022/03/erdtrees-favor.html' },
    td19: { name : "황금나무의 은총+2", url: 'https://heumu.blogspot.com/2022/03/erdtrees-favor.html' },
    td20: { name : "라다곤의 각인", url: 'https://heumu.blogspot.com/2022/03/radagons-scarseal.html' },

    td21: { name : "라다곤의 문드러진 각인", url: 'https://heumu.blogspot.com/2022/03/radagons-soreseal.html' },
    td22: { name : "마리카의 각인", url: 'https://heumu.blogspot.com/2022/04/marikas-scarseal.html' },
    td23: { name : "마리카의 문드러진 각인", url: 'https://heumu.blogspot.com/2022/04/marikas-soreseal.html' },
    td24: { name : "별 부수기의 전승", url: 'https://heumu.blogspot.com/2022/03/starscourge-heirloom.html' },
    td25: { name : "의수 검사의 전승", url: 'https://heumu.blogspot.com/2022/03/prosthesis-wearer-heirloom.html' },
    td26: { name : "별 보는 소녀의 전승", url: 'https://heumu.blogspot.com/2022/03/stargazer-heirloom.html' },
    td27: { name : "두 손가락의 전승", url: 'https://heumu.blogspot.com/2022/03/two-fingers-heirloom.html' },
    td28: { name : "용 표식 방패의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/dragoncrest-shield-talisman.html' },
    td29: { name : "용 표식 방패의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/dragoncrest-shield-talisman.html' },
    td30: { name : "용 표식 방패의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/dragoncrest-shield-talisman.html' },

    td31: { name : "용 표식 대형 방패의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/dragoncrest-greatshield-talisman.html' },
    td32: { name : "마력 용 표식의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/spelldrake-talisman.html' },
    td33: { name : "마력 용 표식의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/spelldrake-talisman.html' },
    td34: { name : "마력 용 표식의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/spelldrake-talisman.html' },
    td35: { name : "염룡 표식의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/flamedrake-talisman.html' },
    td36: { name : "염룡 표식의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/flamedrake-talisman.html' },
    td37: { name : "염룡 표식의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/flamedrake-talisman.html' },
    td38: { name : "뇌룡 표식의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/boltdrake-talisman.html' },
    td39: { name : "뇌룡 표식의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/boltdrake-talisman.html' },
    td40: { name : "뇌룡 표식의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/boltdrake-talisman.html' },

    td41: { name : "성룡 표식의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/haligdrake-talisman.html' },
    td42: { name : "성룡 표식의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/haligdrake-talisman.html' },
    td43: { name : "성룡 표식의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/haligdrake-talisman.html' },
    td44: { name : "진주룡 표식의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/pearldrake-talisman.html' },
    td45: { name : "진주룡 표식의 탈리스만+1", url: 'https://heumu.blogspot.com/2022/03/pearldrake-talisman.html' },
    td46: { name : "진주룡 표식의 탈리스만+2", url: 'https://heumu.blogspot.com/2022/03/pearldrake-talisman.html' },
    td47: { name : "면역의 뿔 장식", url: 'https://heumu.blogspot.com/2022/03/immunizing-horn-charm.html' },
    td48: { name : "면역의 뿔 장식+1", url: 'https://heumu.blogspot.com/2022/03/immunizing-horn-charm.html' },
    td49: { name : "강건의 뿔 장식", url: 'https://heumu.blogspot.com/2022/04/stalwart-horn-charm.html#google_vignette' },
    td50: { name : "강건의 뿔 장식+1", url: 'https://heumu.blogspot.com/2022/04/stalwart-horn-charm.html#google_vignette' },

    td51: { name : "이성의 뿔 장식", url: 'https://heumu.blogspot.com/2022/03/clarifying-horn-charm.html' },
    td52: { name : "이성의 뿔 장식+1", url: 'https://heumu.blogspot.com/2022/03/clarifying-horn-charm.html' },
    td53: { name : "얼룩색 목걸이", url: 'https://heumu.blogspot.com/2022/03/mottled-necklace.html' },
    td54: { name : "얼룩색 목걸이+1", url: 'https://heumu.blogspot.com/2022/03/mottled-necklace.html' },
    td55: { name : "죽음 왕자의 부스럼", url: 'https://heumu.blogspot.com/2022/03/prince-of-deaths-pustule.html' },
    td56: { name : "죽음 왕자의 업창", url: 'https://heumu.blogspot.com/2022/04/prince-of-deaths-cyst.html' },
    td57: { name : "단검의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/dagger-talisman.html' },
    td58: { name : "곡검의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/curved-sword-talisman.html' },
    td59: { name : "쌍날검의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/twinblade-talisman.html' },
    td60: { name : "도끼의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/axe-talisman.html' },

    td61: { name : "망치의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/hammer-talisman.html' },
    td62: { name : "창의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/spear-talisman.html' },
    td63: { name : "랜스의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/lance-talisman.html' },
    td64: { name : "손톱의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/claw-talisman.html' },
    td65: { name : "대형 방패의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/greatshield-talisman.html' },
    td66: { name : "튼튼한 화살의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/arrows-sting-talisman.html' },
    td67: { name : "먼 화살의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/arrows-reach-talisman.html' },
    td68: { name : "마술사 구 탈리스만", url: 'https://heumu.blogspot.com/2022/04/graven-school-talisman.html' },
    td69: { name : "마술사 덩어리 탈리스만", url: 'https://heumu.blogspot.com/2022/03/graven-mass-talisman.html' },
    td70: { name : "신도의 서포", url: 'https://heumu.blogspot.com/2022/03/faithfuls-canvas-talisman.html' },

    td71: { name : "모인 신도의 서포", url: 'https://heumu.blogspot.com/2022/03/flocks-canvas-talisman.html' },
    td72: { name : "원휘석 칼날", url: 'https://heumu.blogspot.com/2022/04/primal-glintstone-blade.html' },
    td73: { name : "녹스텔라의 달", url: 'https://heumu.blogspot.com/2022/03/moon-of-nokstella.html' },
    td74: { name : "옛 왕의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/old-lords-talisman.html' },
    td75: { name : "라다곤의 초상", url: 'https://heumu.blogspot.com/2022/04/radagon-icon.html' },
    td76: { name : "포효의 메달리온", url: 'https://heumu.blogspot.com/2022/03/roar-medallion.html' },
    td77: { name : "벗 항아리", url: 'https://heumu.blogspot.com/2022/04/companion-jar.html' },
    td78: { name : "조향사의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/perfumers-talisman.html' },
    td79: { name : "카리아의 휘장", url: 'https://heumu.blogspot.com/2022/03/carian-filigreed-crest.html' },
    td80: { name : "전사 항아리의 파편", url: '알렉산더 죽이기' },

    td81: { name : "알렉산더의 파편", url: 'https://heumu.blogspot.com/2022/04/shard-of-alexander.html' },
    td82: { name : "고드프리의 초상", url: 'https://heumu.blogspot.com/2022/04/godfrey-icon.html' },
    td83: { name : "큰 산양 탈리스만", url: 'https://heumu.blogspot.com/2022/04/bull-goats-talisman.html' },
    td84: { name : "푸른 무희", url: 'https://heumu.blogspot.com/2022/04/blue-dancer-charm.html' },
    td85: { name : "마력 전갈", url: 'https://heumu.blogspot.com/2022/03/magic-scorpion-charm.html' },
    td86: { name : "화염 전갈", url: 'https://heumu.blogspot.com/2022/03/fire-scorpion-charm.html' },
    td87: { name : "벼락 전갈", url: 'https://heumu.blogspot.com/2022/03/lightning-scorpion-charm.html' },
    td88: { name : "신성한 전갈", url: 'https://heumu.blogspot.com/2022/04/sacred-scorpion-charm.html' },
    td89: { name : "도가니 비늘의 탈리스만", url: 'https://heumu.blogspot.com/2022/04/crucible-scale-talisman.html' },
    td90: { name : "도가니 날개의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/crucible-feather-talisman.html' },

    td91: { name : "도가니 혹의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/crucible-knot-talisman.html' },
    td92: { name : "붉은 날개 칠지인", url: 'https://heumu.blogspot.com/2022/03/red-feathered-branchsword.html' },
    td93: { name : "푸른 날개 칠지인", url: 'https://heumu.blogspot.com/2022/04/blue-feathered-branchsword.html' },
    td94: { name : "봉투검의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/ritual-sword-talisman.html' },
    td95: { name : "봉투 방패의 탈리스만", url: 'https://heumu.blogspot.com/2022/03/ritual-shield-talisman.html' },
    td96: { name : "붉은 흉악한 칼날", url: 'https://heumu.blogspot.com/2022/03/assassins-crimson-dagger.html' },
    td97: { name : "푸른 흉악한 칼날", url: 'https://heumu.blogspot.com/2022/03/assassins-cerulean-dagger.html' },
    td98: { name : "유익검의 휘장", url: 'https://heumu.blogspot.com/2022/04/winged-sword-insignia.html' },
    td99: { name : "부패 익검의 휘장", url: 'https://heumu.blogspot.com/2022/03/rotten-winged-sword-insignia.html' },
    td100: { name : "밀리센트의 의수", url: 'https://heumu.blogspot.com/2022/03/millicents-prosthesis.html' },

    td101: { name : "신의 살갗의 강보", url: 'https://heumu.blogspot.com/2022/04/godskin-swaddling-cloth.html' },
    td102: { name : "부패 권속의 환희", url: 'https://heumu.blogspot.com/2022/04/kindred-of-rots-exultation.html' },
    td103: { name : "피의 군주의 환희", url: 'https://heumu.blogspot.com/2022/04/lord-of-bloods-exultation.html' },
    td104: { name : "약탈의 카메오", url: 'https://heumu.blogspot.com/2022/03/takers-cameo.html' },
    td105: { name : "선조령의 뿔", url: 'https://heumu.blogspot.com/2022/03/ancestral-spirits-horn.html' },
    td106: { name : "금 스카라베", url: 'https://heumu.blogspot.com/2022/03/golden-scarab.html' },
    td107: { name : "은 스카라베", url: 'https://heumu.blogspot.com/2022/03/silver-scarab.html' },
    td108: { name : "크레푸스의 작은 병", url: 'https://heumu.blogspot.com/2022/03/crepuss-vial.html' },
    td109: { name : "몸을 가리는 베일", url: 'https://heumu.blogspot.com/2022/04/concealing-veil.html' },
    td110: { name : "긴 꼬리 고양이 탈리스만", url: 'https://heumu.blogspot.com/2022/05/longtail-cat-talisman.html' },

    td111: { name : "갈고리 손가락의 위장 거울", url: 'https://heumu.blogspot.com/2022/03/furled-fingers-trick-mirror.html' },
    td112: { name : "주인의 위장 거울", url: 'https://heumu.blogspot.com/2022/03/hosts-trick-mirror.html' },
    td113: { name : "샤브리리의 화", url: 'https://heumu.blogspot.com/2022/03/shabriris-woe.html' },
    td114: { name : "디디카의 화", url: 'https://heumu.blogspot.com/2022/03/daedicars-woe.html' },
    td115: { name : "희생의 가는 가지", url: '드랍템' },
    td116: { name : "얽히는 탯줄", url: '더미데이터' },
   
}


/* ---------------------------------2. 선언 및 실행-----------------------------------------------------------*/
const resultsection = document.querySelector(".resultsection");

const formsection = document.querySelector(".formsection");
const ownTalismanForm = document.querySelector("form");

let ownTalismanArray = [];
let registedTalismanArray = localStorage.getItem('registedTalismanArray');

if(registedTalismanArray !== null){
ownTalismanArray = JSON.parse(registedTalismanArray);
makeResult();
}
ownTalismanForm.addEventListener("submit", currentOwned);

/*----------------------------------3. 목록 만들기-----------------------------------------------------------------*/
for(let i=1; i<=116; i++){

    const cell = document.querySelector(`#td${i}`);

    const newLabel = document.createElement("label");
    newLabel.setAttribute('for',`ex${i}`)
    newLabel.textContent = talisman[`td${i}`].name;

    const newInput = document.createElement("input");
    newInput.type = 'checkbox';//
    newInput.id = `ex${i}`;//

    cell.appendChild(newInput);
    cell.appendChild(newLabel);
    
}


/* ----------------------------------4.함수 모음-----------------------------------------------------------------------*/


function currentOwned(e){
    e.preventDefault();
    for(let i =1; i<=116; i++){
       if(!document.getElementById(`td${i}`).firstChild.checked){ //!하나 추가하면 체크한 항목을 제외한 목록을 볼 수 있음
        ownTalismanArray.push(`td${i}`);
       }

    }
    
    
    saveTalismanArray();
    makeResult();
  
}


function makeResult(){

    formsection.classList.add("none");
    resultsection.classList.remove("none");
    
    ownTalismanArray.forEach((v)=> 
    {
      const result = document.createElement("p");
      result.setAttribute("class",`${v}`);
      result.textContent = `${talisman[v].name} : `; 
    
      resultsection.appendChild(result);

      const newAchor = document.createElement("a")
        newAchor.href=`${talisman[v].url}`;
        newAchor.target='_blank'
        newAchor.textContent =`${talisman[v].url}`;

      const newBtn = document.createElement("button");
      
      newBtn.textContent= "❌";


      
      result.appendChild(newAchor);
      result.appendChild(newBtn);  

      newBtn.addEventListener("click",deleteList);//
    }
    )
}

function saveTalismanArray(){
    localStorage.setItem('registedTalismanArray', JSON.stringify(ownTalismanArray))
}


function deleteList(e){
    const removeThing = e.target.parentElement;
    resultsection.removeChild(removeThing);
   
    
    ownTalismanArray = JSON.parse(localStorage.getItem("registedTalismanArray")).filter(v=> `${v}` !== `${removeThing.className}`);
    
    saveTalismanArray();
}


/* --------------------------------------------------------------------------------------------------------------------*/

/*
1. 탈리스만 보유 여부 확인 위해 목록표 만들기  v
2. 목록표에 체크해서 보유한 탈리스만 값 저장하기   v
3. => 로컬스토리지에 저장해서 매번 새롭게 클릭하기x  v

4. form섹션 숨기고 result섹션으로 넘어가서 보유하지 않은 탈리스만 목록 보여주기 v


5. 획특한 탈리스만은 목록에서 지울 수 있도록 x버튼 만들기v

*/

