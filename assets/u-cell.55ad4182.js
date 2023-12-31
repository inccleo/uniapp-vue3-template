import{_ as e,a as t}from"./u-icon.e0d5fa70.js";import{N as A,O as l,P as a,o as i,c as n,w as r,b as s,t as o,j as c,h as u,f as d,R as y,I as p,J as f,n as m,k as g,a as h,g as S,T as b,K as x,q as v,F as k,i as B}from"./index-9b6922d7.js";const I=e({name:"u-link",mixins:[l,a,{props:{color:{type:String,default:A.link.color},fontSize:{type:[String,Number],default:A.link.fontSize},underLine:{type:Boolean,default:A.link.underLine},href:{type:String,default:A.link.href},mpTips:{type:String,default:A.link.mpTips},lineColor:{type:String,default:A.link.lineColor},text:{type:String,default:A.link.text}}}],computed:{linkStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},emits:["click"],methods:{openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(e,t,A,l,a,y){const p=d;return i(),n(p,{class:"u-link",onClick:c(y.openLink,["stop"]),style:u([y.linkStyle,e.$u.addStyle(e.customStyle)])},{default:r((()=>[s(o(e.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-5c1060a1"]]);const N=e({name:"u--text",mixins:[l,a,{computed:{value(){const{text:e,mode:t,format:A,href:l}=this;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||uni.$u.error("金额模式下，text参数需要为金额格式"),uni.$u.test.func(A)?A(e):uni.$u.priceFormat(e,2)):"date"===t?(!uni.$u.test.date(e)&&uni.$u.error("日期模式下，text参数需要为日期或时间戳格式"),uni.$u.test.func(A)?A(e):A?uni.$u.timeFormat(e,A):uni.$u.timeFormat(e,"yyyy-mm-dd")):"phone"===t?uni.$u.test.func(A)?A(e):"encrypt"===A?`${e.substr(0,3)}****${e.substr(7)}`:e:"name"===t?("string"!=typeof e&&uni.$u.error("姓名模式下，text参数需要为字符串格式"),uni.$u.test.func(A)?A(e):"encrypt"===A?this.formatName(e):e):"link"===t?(!uni.$u.test.url(l)&&uni.$u.error("超链接模式下，href参数需要为URL格式"),e):e}},methods:{formatName(e){let t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){let A="";for(let t=0,l=e.length-2;t<l;t++)A+="*";t=e.substr(0,1)+A+e.substr(-1,1)}else t=e;return t}}},{props:{type:{type:String,default:A.text.type},show:{type:Boolean,default:A.text.show},text:{type:[String,Number],default:A.text.text},prefixIcon:{type:String,default:A.text.prefixIcon},suffixIcon:{type:String,default:A.text.suffixIcon},mode:{type:String,default:A.text.mode},href:{type:String,default:A.text.href},format:{type:[String,Function],default:A.text.format},call:{type:Boolean,default:A.text.call},openType:{type:String,default:A.text.openType},bold:{type:Boolean,default:A.text.bold},block:{type:Boolean,default:A.text.block},lines:{type:[String,Number],default:A.text.lines},color:{type:String,default:A.text.color},size:{type:[String,Number],default:A.text.size},iconStyle:{type:[Object,String],default:A.text.iconStyle},decoration:{tepe:String,default:A.text.decoration},margin:{type:[Object,String,Number],default:A.text.margin},lineHeight:{type:[String,Number],default:A.text.lineHeight},align:{type:String,default:A.text.align},wordWrap:{type:String,default:A.text.wordWrap}}}],emits:["click"],computed:{valueStyle(){const e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:uni.$u.addUnit(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=uni.$u.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},isNvue:()=>!1,isMp:()=>!1},data:()=>({}),methods:{clickHandler(){this.call&&"phone"===this.mode&&y({phoneNumber:this.text}),this.$emit("click")}}},[["render",function(e,A,l,a,c,y){const x=d,v=p(f("u-icon"),t),k=S,B=p(f("u-link"),I),N=b;return e.show?(i(),n(k,{key:0,class:m(["u-text",[]]),style:u({margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"}),onClick:y.clickHandler},{default:r((()=>["price"===e.mode?(i(),n(x,{key:0,class:m(["u-text__price",e.type&&`u-text__value--${e.type}`]),style:u([y.valueStyle])},{default:r((()=>[s("￥")])),_:1},8,["class","style"])):g("",!0),e.prefixIcon?(i(),n(k,{key:1,class:"u-text__prefix-icon"},{default:r((()=>[h(v,{name:e.prefixIcon,customStyle:e.$u.addStyle(e.iconStyle)},null,8,["name","customStyle"])])),_:1})):g("",!0),"link"===e.mode?(i(),n(B,{key:2,text:e.value,href:e.href,underLine:""},null,8,["text","href"])):e.openType&&y.isMp?(i(),n(N,{key:3,class:"u-reset-button u-text__value",style:u([y.valueStyle]),"data-index":e.index,openType:e.openType,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},{default:r((()=>[s(o(e.value),1)])),_:1},8,["style","data-index","openType","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter"])):(i(),n(x,{key:4,class:m(["u-text__value",[e.type&&`u-text__value--${e.type}`,e.lines&&`u-line-${e.lines}`]]),style:u([y.valueStyle])},{default:r((()=>[s(o(e.value),1)])),_:1},8,["style","class"])),e.suffixIcon?(i(),n(k,{key:5,class:"u-text__suffix-icon"},{default:r((()=>[h(v,{name:e.suffixIcon,customStyle:e.$u.addStyle(e.iconStyle)},null,8,["name","customStyle"])])),_:1})):g("",!0)])),_:1},8,["style","onClick"])):g("",!0)}],["__scopeId","data-v-830744a0"]]),_={props:{src:{type:String,default:A.avatar.src},shape:{type:String,default:A.avatar.shape},size:{type:[String,Number],default:A.avatar.size},mode:{type:String,default:A.avatar.mode},text:{type:String,default:A.avatar.text},bgColor:{type:String,default:A.avatar.bgColor},color:{type:String,default:A.avatar.color},fontSize:{type:[String,Number],default:A.avatar.fontSize},icon:{type:String,default:A.avatar.icon},mpAvatar:{type:Boolean,default:A.avatar.mpAvatar},randomBgColor:{type:Boolean,default:A.avatar.randomBgColor},defaultUrl:{type:String,default:A.avatar.defaultUrl},colorIndex:{type:[String,Number],validator:e=>uni.$u.test.range(e,[0,19])||""===e,default:A.avatar.colorIndex},name:{type:String,default:A.avatar.name}}};const R=e({name:"u-avatar",mixins:[l,a,_],data(){return{colors:["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],avatarUrl:this.src,allowMp:!1}},watch:{src:{immediate:!0,handler(e){this.avatarUrl=e,e||this.errorHandler()}}},computed:{imageStyle:()=>({})},created(){this.init()},emits:["click"],methods:{init(){},isImg(){return-1!==this.src.indexOf("/")},errorHandler(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJVi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUulaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAAD0m2R8ODaXU33tsDSAAAAAAAAAlb9HyWZcnJd9PcBHAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NR8MH80tEBRs7HYivyzlN8lovaBPzduvY0m6eK10TXtAyAarO55lpJK54orolr+4GqO/Xaea1FvqbXvA+Z77kNeW3GPbV+4DJfzcm/pcm3H6Vou5AdAFLC2ed2Pjv1txa8sV8T6wOL+yZEKu1JXFy4MDBOE4ScZxcZLinoB8gAAAAAAAAAAAB242LeyJ+C3GvN9C7QLmJtePYpKS+5c+p8F2IDYAANJqj1T4oCfk7Nj3G5Wn9qXJax7gJ93Z82D8sVNc4v30A6Xg5i42Z+iLfqARwcyT0sz9MWvWBps7LlTf5Grce9/oBTxdtxseklHxT+uWr9AGoAB138ezfj4bsFJdD6V2MCPm7RdtJzs1uW1xXzL3gTgAAAAAAAAADRhYc8q74I6RWs5ckB6GxYtWLat21SK731sDsAAAAAAAAAAAAAAAASt021NO/YjrxuQXT1oCOAAAAAAABzGLlJRSq26JAelwsWONYjbXxcZvmwO8AAAAAAAAAAAAAAAAAAef3TEWPkVivx3NY9T6UBiAAAAAABo2+VmGXblddIJ8eivRUD0oAAAAAAAAAAAAAAAAAAAYt4tKeFKVNYNSXfRgefAAAAAAAAr7VuSSWPedKaW5v1MCsAAAAAAAAAAAAAAAAAAIe6bj96Ts2n+JPzSXzP3ATgAAAAAAAAFbbt1UUrOQ9FpC4/UwK6aaqtU+DAAAAAAAAAAAAAAA4lKMIuUmoxWrb4ARNx3R3q2rLpa4Sl0y/YCcAAAAAAAAAAANmFud7G8r89r6X0dgFvGzLGRGtuWvTF6NAdwAAAAAAAAAAAy5W442PVN+K59EePp5ARMvOv5MvO6QXCC4AZwAAAAAAAAAAAAAcxlKLUotprg1owN+PvORborq+7Hnwl3gUbO74VzRydt8pKn68ANcJwmqwkpLmnUDkAAAAfNy9atqtyagut0AxXt5xIV8Fbj6lRd7Am5G65V6qUvtwfyx94GMAAAAAAAAAAAAAAAAAAAOU2nVOj5gdsc3LiqRvTpyqwOxbnnrhdfpSfrQB7pnv/AGvuS9gHXPMy5/Fem1yq0v0A6W29XqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"},clickHandler(){this.$emit("click",this.name)}}},[["render",function(e,A,l,a,s,o){const c=p(f("u-icon"),t),d=p(f("u--text"),N),y=B,g=S;return i(),n(g,{class:m(["u-avatar",[`u-avatar--${e.shape}`]]),style:u([{backgroundColor:e.text||e.icon?e.randomBgColor?s.colors[""!==e.colorIndex?e.colorIndex:e.$u.random(0,19)]:e.bgColor:"transparent",width:e.$u.addUnit(e.size),height:e.$u.addUnit(e.size)},e.$u.addStyle(e.customStyle)]),onClick:o.clickHandler},{default:r((()=>[x(e.$slots,"default",{},(()=>[e.mpAvatar&&s.allowMp?(i(),v(k,{key:0},[],64)):e.icon?(i(),n(c,{key:1,name:e.icon,size:e.fontSize,color:e.color},null,8,["name","size","color"])):e.text?(i(),n(d,{key:2,text:e.text,size:e.fontSize,color:e.color,align:"center",customStyle:"justify-content: center"},null,8,["text","size","color"])):(i(),n(y,{key:3,class:m(["u-avatar__image",[`u-avatar__image--${e.shape}`]]),src:s.avatarUrl||e.defaultUrl,mode:e.mode,onError:o.errorHandler,style:u([{width:e.$u.addUnit(e.size),height:e.$u.addUnit(e.size)}])},null,8,["class","src","mode","onError","style"]))]),!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-77f81c87"]]);const w=e({name:"u-line",mixins:[l,a,{props:{color:{type:String,default:A.line.color},length:{type:[String,Number],default:A.line.length},direction:{type:String,default:A.line.direction},hairline:{type:Boolean,default:A.line.hairline},margin:{type:[String,Number],default:A.line.margin},dashed:{type:Boolean,default:A.line.dashed}}}],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}},[["render",function(e,t,A,l,a,r){const s=S;return i(),n(s,{class:"u-line",style:u([r.lineStyle])},null,8,["style"])}],["__scopeId","data-v-1dcd88e8"]]);const z=e({name:"u-cell",data:()=>({}),mixins:[l,a,{props:{title:{type:[String,Number],default:A.cell.title},label:{type:[String,Number],default:A.cell.label},value:{type:[String,Number],default:A.cell.value},icon:{type:String,default:A.cell.icon},disabled:{type:Boolean,default:A.cell.disabled},border:{type:Boolean,default:A.cell.border},center:{type:Boolean,default:A.cell.center},url:{type:String,default:A.cell.url},linkType:{type:String,default:A.cell.linkType},clickable:{type:Boolean,default:A.cell.clickable},isLink:{type:Boolean,default:A.cell.isLink},required:{type:Boolean,default:A.cell.required},rightIcon:{type:String,default:A.cell.rightIcon},arrowDirection:{type:String,default:A.cell.arrowDirection},iconStyle:{type:[Object,String],default:()=>uni.$u.props.cell.iconStyle},rightIconStyle:{type:[Object,String],default:()=>uni.$u.props.cell.rightIconStyle},titleStyle:{type:[Object,String],default:()=>uni.$u.props.cell.titleStyle},size:{type:String,default:A.cell.size},stop:{type:Boolean,default:A.cell.stop},name:{type:[Number,String],default:A.cell.name}}}],computed:{titleTextStyle(){return uni.$u.addStyle(this.titleStyle)}},emits:["click"],methods:{clickHandler(e){this.disabled||(this.$emit("click",{name:this.name}),this.openPage(),this.stop&&this.preventEvent(e))}}},[["render",function(e,A,l,a,c,y){const b=p(f("u-icon"),t),v=S,k=d,B=p(f("u-line"),w);return i(),n(v,{class:m(["u-cell",[e.customClass]]),style:u([e.$u.addStyle(e.customStyle)]),"hover-class":e.disabled||!e.clickable&&!e.isLink?"":"u-cell--clickable","hover-stay-time":250,onClick:y.clickHandler},{default:r((()=>[h(v,{class:m(["u-cell__body",[e.center&&"u-cell--center","large"===e.size&&"u-cell__body--large"]])},{default:r((()=>[h(v,{class:"u-cell__body__content"},{default:r((()=>[e.$slots.icon||e.icon?(i(),n(v,{key:0,class:"u-cell__left-icon-wrap"},{default:r((()=>[e.$slots.icon?x(e.$slots,"icon",{key:0},void 0,!0):(i(),n(b,{key:1,name:e.icon,"custom-style":e.iconStyle,size:"large"===e.size?22:18},null,8,["name","custom-style","size"]))])),_:3})):g("",!0),h(v,{class:"u-cell__title"},{default:r((()=>[x(e.$slots,"title",{},(()=>[e.title?(i(),n(k,{key:0,class:m(["u-cell__title-text",[e.disabled&&"u-cell--disabled","large"===e.size&&"u-cell__title-text--large"]]),style:u([y.titleTextStyle])},{default:r((()=>[s(o(e.title),1)])),_:1},8,["style","class"])):g("",!0)]),!0),x(e.$slots,"label",{},(()=>[e.label?(i(),n(k,{key:0,class:m(["u-cell__label",[e.disabled&&"u-cell--disabled","large"===e.size&&"u-cell__label--large"]])},{default:r((()=>[s(o(e.label),1)])),_:1},8,["class"])):g("",!0)]),!0)])),_:3})])),_:3}),x(e.$slots,"value",{},(()=>[e.$u.test.empty(e.value)?g("",!0):(i(),n(k,{key:0,class:m(["u-cell__value",[e.disabled&&"u-cell--disabled","large"===e.size&&"u-cell__value--large"]])},{default:r((()=>[s(o(e.value),1)])),_:1},8,["class"]))]),!0),e.$slots["right-icon"]||e.isLink?(i(),n(v,{key:0,class:m(["u-cell__right-icon-wrap",[`u-cell__right-icon-wrap--${e.arrowDirection}`]])},{default:r((()=>[e.$slots["right-icon"]?x(e.$slots,"right-icon",{key:0},void 0,!0):(i(),n(b,{key:1,name:e.rightIcon,"custom-style":e.rightIconStyle,color:e.disabled?"#c8c9cc":"info",size:"large"===e.size?18:16},null,8,["name","custom-style","color","size"]))])),_:3},8,["class"])):g("",!0)])),_:3},8,["class"]),e.border?(i(),n(B,{key:0})):g("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-0084fde2"]]);export{R as _,z as a,w as b};
