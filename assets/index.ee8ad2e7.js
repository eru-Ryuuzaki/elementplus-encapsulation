import{d as E,r as v,a as p,o as A,c as C,b as r,w as u,u as l,i as _,e as s,g as y,E as n}from"./index.6b6dfc35.js";const B=s("open"),f=s("\u53D6\u6D88"),k=s("\u786E\u8BA4"),x=s("Click to upload"),w=y("div",{style:{color:"#ccc","font-size":"12px"}},"jpg/png files with a size less than 500kb",-1),N=E({setup(q){let o=v(!1),c=()=>{o.value=!0},d=[{type:"input",value:"",label:"\u7528\u6237\u540D",prop:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:2,max:6,message:"\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"\u5BC6\u7801",prop:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:15,message:"\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:"1"},{type:"option",label:"\u4E3B\u7BA1",value:"2"},{type:"option",label:"\u5458\u5DE5",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:"1"},{type:"checkbox",label:"\u7BEE\u7403",value:"2"},{type:"checkbox",label:"\u6392\u7403",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u4FDD\u5BC6",value:"not"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",rules:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}],g=e=>{e.validate()(t=>{t?(console.log(e.getFormData),n.success("\u9A8C\u8BC1\u6210\u529F")):n.error("\u8868\u5355\u586B\u5199\u6709\u8BEF,\u8BF7\u68C0\u67E5")})},m=e=>{},F=e=>{console.log("success"),console.log(e)},b=e=>{console.log("change"),console.log(e)};return(e,i)=>{const t=p("el-button"),h=p("m-modal-form");return A(),C("div",null,[r(t,{type:"primary",onClick:l(c)},{default:u(()=>[B]),_:1},8,["onClick"]),r(h,{isScroll:"",options:l(d),title:"\u7F16\u8F91\u7528\u6237",width:"50%",visible:l(o),"onUpdate:visible":i[0]||(i[0]=a=>_(o)?o.value=a:o=a),"on-change":l(b),"on-success":l(F)},{footer:u(a=>[r(t,{onClick:D=>l(m)(a.form)},{default:u(()=>[f]),_:2},1032,["onClick"]),r(t,{type:"primary",onClick:D=>l(g)(a.form)},{default:u(()=>[k]),_:2},1032,["onClick"])]),uploadArea:u(()=>[r(t,{size:"small",type:"primary"},{default:u(()=>[x]),_:1})]),uploadTip:u(()=>[w]),_:1},8,["options","visible","on-change","on-success"])])}}});export{N as default};
