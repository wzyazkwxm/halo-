"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[415],{59563:function(t,e,N){N.d(e,{Z:function(){return s}});var n=function(){var t=this,e=t.$createElement,N=t._self._c||e;return N("div",[N("a-form",t._l(t.presetMetas,(function(e,n){return N("a-form-item",{key:n},[N("a-row",{attrs:{gutter:5}},[N("a-col",{attrs:{span:12}},[N("a-input",{attrs:{disabled:!0},scopedSlots:t._u([{key:"addonBefore",fn:function(){return[N("i",[t._v("K")])]},proxy:!0}],null,!0),model:{value:e.key,callback:function(N){t.$set(e,"key",N)},expression:"meta.key"}})],1),N("a-col",{attrs:{span:12}},[N("a-input",{scopedSlots:t._u([{key:"addonBefore",fn:function(){return[N("i",[t._v("V")])]},proxy:!0}],null,!0),model:{value:e.value,callback:function(N){t.$set(e,"value",N)},expression:"meta.value"}})],1)],1)],1)})),1),N("a-form",[t._l(t.customMetas,(function(e,n){return N("a-form-item",{key:n},[N("a-row",{attrs:{gutter:5}},[N("a-col",{attrs:{span:12}},[N("a-input",{scopedSlots:t._u([{key:"addonBefore",fn:function(){return[N("i",[t._v("K")])]},proxy:!0}],null,!0),model:{value:e.key,callback:function(N){t.$set(e,"key",N)},expression:"meta.key"}})],1),N("a-col",{attrs:{span:12}},[N("a-input",{scopedSlots:t._u([{key:"addonBefore",fn:function(){return[N("i",[t._v("V")])]},proxy:!0},{key:"addonAfter",fn:function(){return[N("a-button",{staticClass:"!p-0 !h-auto",attrs:{type:"link"},on:{click:function(e){return e.preventDefault(),t.handleRemove(n)}}},[N("a-icon",{attrs:{type:"close"}})],1)]},proxy:!0}],null,!0),model:{value:e.value,callback:function(N){t.$set(e,"value",N)},expression:"meta.value"}})],1)],1)],1)})),N("a-form-item",[N("a-button",{attrs:{type:"dashed"},on:{click:t.handleAdd}},[t._v("新增")])],1)],2)],1)},a=[],A=N(1540),r={name:"MetaEditor",props:{target:{type:String,default:"post",validator:function(t){return-1!==["post","sheet"].indexOf(t)}},targetId:{type:Number,default:null},metas:{type:Array,default:()=>[]}},data(){return{presetFields:[],presetMetas:[],customMetas:[]}},watch:{presetMetas:{handler(){this.handleChange()},deep:!0},customMetas:{handler(){this.handleChange()},deep:!0},targetId(){this.handleGenerateMetas()}},created(){this.handleListPresetMetasField()},methods:{async handleListPresetMetasField(){try{const t=await A.Z.theme.getActivatedTheme();this.presetFields=t.data[`${this.target}MetaField`]||[],this.handleGenerateMetas()}catch(t){this.$log.error(t)}},handleGenerateMetas(){this.presetMetas=this.presetFields.map((t=>{const e=this.metas.find((e=>e.key===t));return e?{key:t,value:e.value}:{key:t,value:""}})),this.customMetas=this.metas.filter((t=>-1===this.presetFields.indexOf(t.key))).map((t=>({key:t.key,value:t.value})))},handleAdd(){this.customMetas.push({key:"",value:""})},handleRemove(t){this.customMetas.splice(t,1)},handleChange(){this.$emit("update:metas",this.presetMetas.concat(this.customMetas))}}},I=r,o=N(18156),U=(0,o.Z)(I,n,a,!1,null,null,null),s=U.exports},21434:function(t,e,N){var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=N(15087),A="阿",r="鿿",I=1,o=2,U=3,s=null,u=void 0;function l(t){t&&("function"===typeof t&&(t=[t]),t.forEach&&t.forEach((function(t){"function"===typeof t&&t(a)})))}function i(t){return t||null===s?("object"===("undefined"===typeof Intl?"undefined":n(Intl))&&Intl.Collator?(u=new Intl.Collator(["zh-Hans-CN","zh-CN"]),s=1===Intl.Collator.supportedLocalesOf(["zh-CN"]).length):s=!1,s):s}function G(t){var e=a.UNIHANS,N=a.PINYINS,n=a.EXCEPTIONS,s={source:t};if(t in n)return s.type=o,s.target=n[t],s;var l=-1,i=void 0;if(t.charCodeAt(0)<256)return s.type=I,s.target=t,s;if(i=u.compare(t,A),i<0)return s.type=U,s.target=t,s;if(0===i)s.type=o,l=0;else{if(i=u.compare(t,r),i>0)return s.type=U,s.target=t,s;0===i&&(s.type=o,l=e.length-1)}if(s.type=o,l<0){var G=0,O=e.length-1;while(G<=O){l=~~((G+O)/2);var H=e[l];if(i=u.compare(t,H),0===i)break;i>0?G=l+1:O=l-1}}return i<0&&l--,s.target=N[l],s.target||(s.type=U,s.target=s.source),s}function O(t){if("string"!==typeof t)throw new Error("argument should be string.");if(!i())throw new Error("not support Intl or zh-CN language.");return t.split("").map((function(t){return G(t)}))}t.exports={isSupported:i,parse:O,patchDict:l,genToken:G,convertToPinyin:function(t,e,N){return O(t).map((function(t){return N&&t.type===o?t.target.toLowerCase():t.target})).join(e||"")}}},15087:function(t){var e=["阿","哎","安","肮","凹","八","挀","扳","邦","勹","陂","奔","伻","屄","边","灬","憋","汃","冫","癶","峬","嚓","偲","参","仓","撡","冊","嵾","曽","叉","芆","辿","伥","抄","车","抻","阷","吃","充","抽","出","欻","揣","巛","刅","吹","旾","逴","呲","匆","凑","粗","汆","崔","邨","搓","咑","呆","丹","当","刀","嘚","扥","灯","氐","甸","刁","爹","丁","丟","东","吺","厾","耑","垖","吨","多","妸","诶","奀","鞥","儿","发","帆","匚","飞","分","丰","覅","仏","紑","夫","旮","侅","甘","冈","皋","戈","给","根","刯","工","勾","估","瓜","乖","关","光","归","丨","呙","哈","咍","佄","夯","茠","诃","黒","拫","亨","噷","叿","齁","乎","花","怀","欢","巟","灰","昏","吙","丌","加","戋","江","艽","阶","巾","坕","冂","丩","凥","姢","噘","军","咔","开","刊","忼","尻","匼","肎","劥","空","抠","扝","夸","蒯","宽","匡","亏","坤","扩","垃","来","兰","啷","捞","肋","勒","崚","哩","俩","奁","良","撩","毟","拎","伶","溜","囖","龙","瞜","噜","驴","娈","掠","抡","罗","呣","妈","埋","嫚","牤","猫","么","呅","门","甿","咪","宀","喵","乜","民","名","谬","摸","哞","毪","嗯","拏","腉","囡","囔","孬","疒","娞","恁","能","妮","拈","娘","鸟","捏","囜","宁","妞","农","羺","奴","女","奻","疟","黁","挪","喔","讴","妑","拍","眅","乓","抛","呸","喷","匉","丕","囨","剽","氕","姘","乒","钋","剖","仆","七","掐","千","呛","悄","癿","亲","靑","卭","丘","区","峑","缺","夋","呥","穣","娆","惹","人","扔","日","茸","厹","邚","挼","堧","婑","瞤","捼","仨","毢","三","桒","掻","閪","森","僧","杀","筛","山","伤","弰","奢","申","升","尸","収","书","刷","衰","闩","双","脽","吮","说","厶","忪","捜","苏","狻","夊","孙","唆","他","囼","坍","汤","夲","忑","熥","剔","天","旫","帖","厅","囲","偷","凸","湍","推","吞","乇","穵","歪","弯","尣","危","昷","翁","挝","乌","夕","虲","仙","乡","灱","些","心","星","凶","休","吁","吅","削","坃","丫","恹","央","幺","倻","一","囙","应","哟","佣","优","扜","囦","曰","晕","帀","災","兂","匨","傮","则","贼","怎","増","扎","捚","沾","张","佋","蜇","贞","争","之","中","州","朱","抓","拽","专","妆","隹","宒","卓","乲","宗","邹","租","钻","厜","尊","昨","兙"],N=["A","AI","AN","ANG","AO","BA","BAI","BAN","BANG","BAO","BEI","BEN","BENG","BI","BIAN","BIAO","BIE","BIN","BING","BO","BU","CA","CAI","CAN","CANG","CAO","CE","CEN","CENG","CHA","CHAI","CHAN","CHANG","CHAO","CHE","CHEN","CHENG","CHI","CHONG","CHOU","CHU","CHUA","CHUAI","CHUAN","CHUANG","CHUI","CHUN","CHUO","CI","CONG","COU","CU","CUAN","CUI","CUN","CUO","DA","DAI","DAN","DANG","DAO","DE","DEN","DENG","DI","DIAN","DIAO","DIE","DING","DIU","DONG","DOU","DU","DUAN","DUI","DUN","DUO","E","EI","EN","ENG","ER","FA","FAN","FANG","FEI","FEN","FENG","FIAO","FO","FOU","FU","GA","GAI","GAN","GANG","GAO","GE","GEI","GEN","GENG","GONG","GOU","GU","GUA","GUAI","GUAN","GUANG","GUI","GUN","GUO","HA","HAI","HAN","HANG","HAO","HE","HEI","HEN","HENG","HM","HONG","HOU","HU","HUA","HUAI","HUAN","HUANG","HUI","HUN","HUO","JI","JIA","JIAN","JIANG","JIAO","JIE","JIN","JING","JIONG","JIU","JU","JUAN","JUE","JUN","KA","KAI","KAN","KANG","KAO","KE","KEN","KENG","KONG","KOU","KU","KUA","KUAI","KUAN","KUANG","KUI","KUN","KUO","LA","LAI","LAN","LANG","LAO","LE","LEI","LENG","LI","LIA","LIAN","LIANG","LIAO","LIE","LIN","LING","LIU","LO","LONG","LOU","LU","LV","LUAN","LVE","LUN","LUO","M","MA","MAI","MAN","MANG","MAO","ME","MEI","MEN","MENG","MI","MIAN","MIAO","MIE","MIN","MING","MIU","MO","MOU","MU","N","NA","NAI","NAN","NANG","NAO","NE","NEI","NEN","NENG","NI","NIAN","NIANG","NIAO","NIE","NIN","NING","NIU","NONG","NOU","NU","NV","NUAN","NVE","NUN","NUO","O","OU","PA","PAI","PAN","PANG","PAO","PEI","PEN","PENG","PI","PIAN","PIAO","PIE","PIN","PING","PO","POU","PU","QI","QIA","QIAN","QIANG","QIAO","QIE","QIN","QING","QIONG","QIU","QU","QUAN","QUE","QUN","RAN","RANG","RAO","RE","REN","RENG","RI","RONG","ROU","RU","RUA","RUAN","RUI","RUN","RUO","SA","SAI","SAN","SANG","SAO","SE","SEN","SENG","SHA","SHAI","SHAN","SHANG","SHAO","SHE","SHEN","SHENG","SHI","SHOU","SHU","SHUA","SHUAI","SHUAN","SHUANG","SHUI","SHUN","SHUO","SI","SONG","SOU","SU","SUAN","SUI","SUN","SUO","TA","TAI","TAN","TANG","TAO","TE","TENG","TI","TIAN","TIAO","TIE","TING","TONG","TOU","TU","TUAN","TUI","TUN","TUO","WA","WAI","WAN","WANG","WEI","WEN","WENG","WO","WU","XI","XIA","XIAN","XIANG","XIAO","XIE","XIN","XING","XIONG","XIU","XU","XUAN","XUE","XUN","YA","YAN","YANG","YAO","YE","YI","YIN","YING","YO","YONG","YOU","YU","YUAN","YUE","YUN","ZA","ZAI","ZAN","ZANG","ZAO","ZE","ZEI","ZEN","ZENG","ZHA","ZHAI","ZHAN","ZHANG","ZHAO","ZHE","ZHEN","ZHENG","ZHI","ZHONG","ZHOU","ZHU","ZHUA","ZHUAI","ZHUAN","ZHUANG","ZHUI","ZHUN","ZHUO","ZI","ZONG","ZOU","ZU","ZUAN","ZUI","ZUN","ZUO",""],n={"曾":"ZENG","沈":"SHEN","嗲":"DIA","碡":"ZHOU","聒":"GUO","炔":"QUE","蚵":"KE","砉":"HUA","嬤":"MO","嬷":"MO","蹒":"PAN","蹊":"XI","丬":"PAN","霰":"XIAN","莘":"XIN","豉":"CHI","饧":"XING","筠":"JUN","长":"CHANG","帧":"ZHEN","峙":"SHI","郍":"NA","芎":"XIONG","谁":"SHUI"};t.exports={PINYINS:N,UNIHANS:e,EXCEPTIONS:n}},73511:function(t,e,N){var n=N(21434),a=N(59729);n.isSupported()&&a.shouldPatch(n.genToken)&&n.patchDict(a),t.exports=n},59729:function(t,e){e=t.exports=function(t){t.EXCEPTIONS={"嗲":"DIA","碡":"ZHOU","聒":"GUO","炔":"QUE","蚵":"KE","砉":"HUA","嬷":"MO","蹊":"XI","丬":"PAN","霰":"XIAN","豉":"CHI","饧":"XING","帧":"ZHEN","芎":"XIONG","谁":"SHUI","钶":"KE"},t.UNIHANS[91]="伕",t.UNIHANS[347]="仚",t.UNIHANS[393]="诌",t.UNIHANS[39]="婤",t.UNIHANS[50]="腠",t.UNIHANS[369]="攸",t.UNIHANS[123]="乯",t.UNIHANS[171]="刕",t.UNIHANS[102]="佝",t.UNIHANS[126]="犿",t.UNIHANS[176]="列",t.UNIHANS[178]="刢",t.UNIHANS[252]="娝",t.UNIHANS[330]="偸"},e.shouldPatch=function(t){return"function"===typeof t&&("FOU"===t("伕").target&&"XIA"===t("仚").target&&"ZHONG"===t("诌").target&&"CHONG"===t("婤").target&&"CONG"===t("腠").target&&"YONG"===t("攸").target&&"HOU"===t("乯").target&&"LENG"===t("刕").target&&"GONG"===t("佝").target&&"HUAI"===t("犿").target&&"LIAO"===t("列").target&&"LIN"===t("刢").target&&"E"===t("钶").target)}}}]);