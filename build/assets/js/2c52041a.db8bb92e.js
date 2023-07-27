"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4838],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5003:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Twitter",l={unversionedId:"Toolkit/SuperAGI Toolkits/twitter",id:"Toolkit/SuperAGI Toolkits/twitter",title:"Twitter",description:"Introducing Twitter Toolkit for SuperAGI. With Twitter Integrated into SuperAGI, you can now deploy agents to",source:"@site/docs/Toolkit/SuperAGI Toolkits/twitter.md",sourceDirName:"Toolkit/SuperAGI Toolkits",slug:"/Toolkit/SuperAGI Toolkits/twitter",permalink:"/docs/Toolkit/SuperAGI Toolkits/twitter",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/SuperAGI Toolkits/twitter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/docs/Toolkit/SuperAGI Toolkits/slack"},next:{title:"Web Scraper",permalink:"/docs/Toolkit/SuperAGI Toolkits/webscraper"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"\ud83d\udd10 Obtaining API Key and Secret from Twitter Developer Portal",id:"-obtaining-api-key-and-secret-from-twitter-developer-portal",level:3},{value:"\ud83d\udeaa Configuring OAuth",id:"-configuring-oauth",level:3}],c={toc:s},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"twitter"},"Twitter"),(0,a.kt)("p",null,"Introducing Twitter Toolkit for SuperAGI. With Twitter Integrated into SuperAGI, you can now deploy agents to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Send Tweets"),(0,a.kt)("li",{parentName:"ol"},"Send Tweets with Images")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"-obtaining-api-key-and-secret-from-twitter-developer-portal"},"\ud83d\udd10 Obtaining API Key and Secret from Twitter Developer Portal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to your Twitter Developer Portal Account and select your project under the \u201cProjects & Apps\u201d section.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/7ee7be42-2e20-4b44-beee-92b754031967",alt:"TW1"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Proceed with creating a new app. Once you have created the app by adding a name, you will get an API Key and an API Secret, copy that and keep it in a separate text file.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/4d0d91ec-d22c-4027-b472-d1bc1c692ac7",alt:"TW2"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/caf265e7-60ac-4a5e-be8b-4b2b9d0fdd15",alt:"TW3"})),(0,a.kt)("h3",{id:"-configuring-oauth"},"\ud83d\udeaa Configuring OAuth"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Once you have saved the key and the secret, click on \u201cApp Settings\u201d"),(0,a.kt)("li",{parentName:"ol"},"Once you are on the App Settings Page, start setting up the User Authentication Settings. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/5db07a1e-3104-4a83-8de8-2394d41268ca",alt:"TW4"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},'Fill in the details as shown in the below image. Give \u201cRead and Write Permissions\u201d and make it a \u201cWeb Application"')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/08d322f3-b248-49e6-8e5c-85f8d84b9a5f",alt:"TW5"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Add the Callback URI and the Website URL as shown in the image below")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/7e779e30-1331-403f-a532-224cc2c4c602",alt:"TW6"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the settings. you have now configured OAuth Authentication for Twitter."),(0,a.kt)("h3",{parentName:"li",id:"-configuring-keys-and-authenticating-in-superagi"},"\u2705 Configuring Keys and Authenticating in SuperAGI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the SuperAGI\u2019s Dashboard, navigate to the Twitter Toolkit Page, add the API Key and API Secret you\u2019ve saved, and click on \u2018Update Changes\u2019"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/cab23842-e515-495a-b697-14587d832abc",alt:"TW7"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After you\u2019ve updated the changes, click on Authenticate. This will take you to the OAuth Flow. Authorize the app through the flow. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/62f877ac-dc1f-475d-9c5c-52040a197762",alt:"TW8"})),(0,a.kt)("p",null,"Once you have followed the above steps, you have successfully integrated Twitter with SuperAGI."))}m.isMDXComponent=!0}}]);