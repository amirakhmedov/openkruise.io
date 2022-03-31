"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1133],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(k,l(l({ref:a},c),{},{components:t})):n.createElement(k,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6040:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],o={slug:"sidecarset",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",authors:["zmberg"],tags:["workload","sidecar"]},s="\u524d\u8a00",d={permalink:"/zh/blog/sidecarset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2021-03-15-sidecarSet-0.8.0.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-03-15-sidecarSet-0.8.0.md",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",description:"OpenKruise \u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684Sandbox\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8eKubernetes\u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002",date:"2021-03-15T00:00:00.000Z",formattedDate:"2021\u5e743\u670815\u65e5",tags:[{label:"workload",permalink:"/zh/blog/tags/workload"},{label:"sidecar",permalink:"/zh/blog/tags/sidecar"}],readingTime:16.305,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"sidecarset",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",authors:["zmberg"],tags:["workload","sidecar"]},prevItem:{title:"OpenKruise 0.9.0\uff1a\u65b0\u589ePod\u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u5220\u9664\u9632\u62a4\u7b49\u529f\u80fd",permalink:"/zh/blog/openkruise-0.9.0"},nextItem:{title:"UnitedDeploymemt - Supporting Multi-domain Workload Management",permalink:"/zh/blog/uniteddeployment"}},c={authorsImageUrls:[void 0]},p=[{value:"Sidecar logging architectures",id:"sidecar-logging-architectures",level:2},{value:"\u81ea\u52a8\u6ce8\u5165",id:"\u81ea\u52a8\u6ce8\u5165",level:2},{value:"\u539f\u5730\u5347\u7ea7",id:"\u539f\u5730\u5347\u7ea7",level:2},{value:"\u7070\u5ea6\u53d1\u5e03",id:"\u7070\u5ea6\u53d1\u5e03",level:2},{value:"\u91d1\u4e1d\u96c0\u53d1\u5e03",id:"\u91d1\u4e1d\u96c0\u53d1\u5e03",level:2},{value:"\u6253\u6563\u53d1\u5e03",id:"\u6253\u6563\u53d1\u5e03",level:2}],u={toc:p};function m(e){var a=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenKruise \u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684Sandbox\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8eKubernetes\u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("p",null,"OpenKruise\u57282021.3.4\u53d1\u5e03\u4e86\u6700\u65b0\u7684v0.8.0\u7248\u672c\uff0c\u5176\u4e2d\u589e\u5f3a\u4e86SidecarSet\u7684\u80fd\u529b\uff0c\u7279\u522b\u662f\u5bf9\u65e5\u5fd7\u7ba1\u7406\u7c7bSidecar\u6709\u4e86\u66f4\u52a0\u5b8c\u5584\u7684\u652f\u6301\u3002"),(0,i.kt)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.kt)("p",null,"Sidecar\u662f\u4e91\u539f\u751f\u4e2d\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5bb9\u5668\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u5c06\u8f85\u52a9\u80fd\u529b\u4ece\u4e3b\u5bb9\u5668\u4e2d\u5265\u79bb\u51fa\u6765\u6210\u4e3a\u5355\u72ec\u7684sidecar\u5bb9\u5668\u3002\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u901a\u5e38\u4e5f\u4f7f\u7528sidecar\u6a21\u5f0f\u5c06\u5fae\u670d\u52a1\u4e2d\u7684\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u53d1\u73b0\u3001\u8def\u7531\u3001\u7194\u65ad\u7b49\u901a\u7528\u80fd\u529b\u4ece\u4e3b\u7a0b\u5e8f\u4e2d\u5265\u79bb\u51fa\u6765\uff0c\u4ece\u800c\u6781\u5927\u964d\u4f4e\u4e86\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u590d\u6742\u6027\u3002\u968f\u7740Service Mesh\u7684\u9010\u6b65\u98ce\u9761\uff0csidecar\u6a21\u5f0f\u4e5f\u65e5\u76ca\u6df1\u5165\u4eba\u5fc3\uff0c\u5728\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u90e8\u4e5f\u5927\u91cf\u4f7f\u7528sidecar\u6a21\u5f0f\u6765\u7ba1\u7406\u8bf8\u5982\u8fd0\u7ef4\u3001\u5b89\u5168\u3001\u6d88\u606f\u4e2d\u95f4\u4ef6\u7b49\u901a\u7528\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u5728Kubernetes\u96c6\u7fa4\u4e2d\uff0cPod\u4e0d\u4ec5\u53ef\u4ee5\u5b9e\u73b0\u4e3b\u5bb9\u5668\u4e0esidecar\u5bb9\u5668\u7684\u6784\u5efa\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u8bb8\u591a\u529f\u80fd\u5f3a\u5927\u7684workload\uff08\u4f8b\u5982\uff1adeployment\u3001statefulset\uff09\u6765\u5bf9Pod\u8fdb\u884c\u7ba1\u7406\u3001\u5347\u7ea7\u3002\u4f46\u662f\u968f\u7740kubernetes\u96c6\u7fa4\u4e0a\u7684\u4e1a\u52a1\u65e5\u76ca\u589e\u591a\uff0csidecar\u5bb9\u5668\u7684\u79cd\u7c7b\u4e0e\u89c4\u6a21\u4e5f\u968f\u4e4b\u65e5\u76ca\u5e9e\u5927\uff0c\u5bf9\u7ebf\u4e0asidecar\u5bb9\u5668\u7684\u7ba1\u7406\u548c\u5347\u7ea7\u6210\u4e3a\u4e86\u6108\u53d1\u7e41\u6742\u7684\u5de5\u4f5c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e1a\u52a1Pod\u91cc\u9762\u5305\u542b\u4e86\u8fd0\u7ef4\u3001\u5b89\u5168\u3001\u4ee3\u7406\u7b49\u591a\u4e2asidecar\u5bb9\u5668\uff0c\u4e1a\u52a1\u7ebf\u540c\u5b66\u4e0d\u4ec5\u8981\u5b8c\u6210\u81ea\u8eab\u4e3b\u5bb9\u5668\u7684\u914d\u7f6e\uff0c\u800c\u4e14\u8fd8\u9700\u8981\u719f\u6089\u8fd9\u4e9bsidecar\u5bb9\u5668\u7684\u914d\u7f6e\uff0c\u8fd9\u4e0d\u4ec5\u589e\u52a0\u4e86\u4e1a\u52a1\u540c\u5b66\u7684\u5de5\u4f5c\u91cf\uff0c\u540c\u65f6\u4e5f\u65e0\u5f62\u589e\u52a0\u4e86sidecar\u5bb9\u5668\u914d\u7f6e\u7684\u98ce\u9669\u3002"),(0,i.kt)("li",{parentName:"ol"},"sidecar\u5bb9\u5668\u7684\u5347\u7ea7\u9700\u8981\u8fde\u540c\u4e1a\u52a1\u4e3b\u5bb9\u5668\u4e00\u8d77\u91cd\u542f\uff08deployment\u3001statefulset\u7b49workload\u57fa\u4e8ePod\u9500\u6bc1\u3001\u91cd\u5efa\u7684\u6a21\u5f0f\uff0c\u6765\u5b9e\u73b0Pod\u7684\u6eda\u52a8\u5347\u7ea7\uff09\uff0c\u63a8\u52a8\u548c\u5347\u7ea7\u652f\u6491\u7740\u7ebf\u4e0a\u6570\u767e\u6b3e\u4e1a\u52a1\u7684sidecar\u5bb9\u5668\uff0c\u5fc5\u7136\u5b58\u5728\u7740\u6781\u5927\u7684\u4e1a\u52a1\u963b\u529b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f5c\u4e3asidecar\u5bb9\u5668\u7684\u63d0\u4f9b\u8005\u5bf9\u7ebf\u4e0a\u8bf8\u591a\u5404\u79cd\u914d\u7f6e\u4ee5\u53ca\u7248\u672c\u7684sidecar\u5bb9\u5668\u6ca1\u6709\u76f4\u63a5\u6709\u6548\u7684\u5347\u7ea7\u624b\u6bb5\uff0c\u8fd9\u5bf9sidecar\u5bb9\u5668\u7684\u7ba1\u7406\u610f\u5473\u7740\u6781\u5927\u7684\u6f5c\u5728\u98ce\u9669\u3002")),(0,i.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u90e8\u62e5\u6709\u7740\u767e\u4e07\u7ea7\u7684\u5bb9\u5668\u6570\u91cf\u8fde\u540c\u4e0a\u9762\u627f\u8f7d\u7684\u4e0a\u5343\u4e2a\u4e1a\u52a1\uff0c\u56e0\u6b64\uff0csidecar\u5bb9\u5668\u7684\u7ba1\u7406\u4e0e\u5347\u7ea7\u4e5f\u5c31\u6210\u4e3a\u4e86\u4e9f\u5f85\u5b8c\u5584\u7684\u4e3b\u9898\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u603b\u7ed3\u4e86\u5185\u90e8\u8bb8\u591asidecar\u5bb9\u5668\u7684\u901a\u7528\u5316\u9700\u6c42\uff0c\u5e76\u5c06\u5176\u6c89\u6dc0\u5230OpenKruise\u4e0a\u9762\uff0c\u6700\u7ec8\u62bd\u8c61\u4e3aSidecarSet\u4f5c\u4e3a\u7ba1\u7406\u548c\u5347\u7ea7\u79cd\u7c7b\u7e41\u591asidecar\u5bb9\u5668\u7684\u5229\u5668\u3002"),(0,i.kt)("h1",{id:"openkruise-sidecarset"},"OpenKruise SidecarSet"),(0,i.kt)("p",null,"SidecarSet\u662fOpenKruise\u4e2d\u9488\u5bf9sidecar\u62bd\u8c61\u51fa\u6765\u7684\u6982\u5ff5\uff0c\u8d1f\u8d23\u6ce8\u5165\u548c\u5347\u7ea7kubernetes\u96c6\u7fa4\u4e2d\u7684sidecar\u5bb9\u5668\uff0c\u662fOpenKruise\u7684\u6838\u5fc3workload\u4e4b\u4e00\u3002\u5b83\u63d0\u4f9b\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u7528\u6237\u4f7f\u7528SidecarSet\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5b9e\u73b0sidecar\u5bb9\u5668\u7684\u7ba1\u7406\u3002\u4e3b\u8981\u7279\u6027\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5355\u72ec\u7ba1\u7406\uff1a\u4e3a\u6bcf\u4e00\u4e2asidecar\u5bb9\u5668\u914d\u7f6e\u5355\u72ec\u7684SidecarSet\u914d\u7f6e\uff0c\u65b9\u4fbf\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u6ce8\u5165\uff1a\u5728\u65b0\u5efa\u3001\u6269\u5bb9\u3001\u91cd\u5efapod\u7684\u573a\u666f\u4e2d\uff0c\u5b9e\u73b0sidecar\u5bb9\u5668\u7684\u81ea\u52a8\u6ce8\u5165"),(0,i.kt)("li",{parentName:"ol"},"\u539f\u5730\u5347\u7ea7\uff1a\u652f\u6301\u4e0d\u91cd\u5efapod\u7684\u65b9\u5f0f\u5b8c\u6210sidecar\u5bb9\u5668\u7684\u539f\u5730\u5347\u7ea7\uff0c\u4e0d\u5f71\u54cd\u4e1a\u52a1\u4e3b\u5bb9\u5668\uff0c\u5e76\u5305\u542b\u4e30\u5bcc\u7684\u7070\u5ea6\u53d1\u5e03\u7b56\u7565")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u9488\u5bf9Pod\u4e2d\u5305\u542b\u591a\u4e2a\u5bb9\u5668\u7684\u6a21\u5f0f\uff0c\u5176\u4e2d\u5bf9\u5916\u63d0\u4f9b\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91\u80fd\u529b\u7684\u5bb9\u5668\u79f0\u4e4b\u4e3a \u4e3b\u5bb9\u5668\uff0c\u5176\u5b83\u4e00\u4e9b\u5982\u65e5\u5fd7\u91c7\u96c6\u3001\u5b89\u5168\u3001\u4ee3\u7406\u7b49\u8f85\u52a9\u80fd\u529b\u7684\u5bb9\u5668\u79f0\u4e4b\u4e3a Sidecar\u5bb9\u5668\u3002\u4f8b\u5982\uff1a\u4e00\u4e2a\u5bf9\u5916\u63d0\u4f9bweb\u80fd\u529b\u7684pod\uff0cnginx\u5bb9\u5668\u63d0\u4f9b\u4e3b\u8981\u7684web server\u80fd\u529b\u5373\u4e3a \u4e3b\u5bb9\u5668\uff0clogtail\u5bb9\u5668\u8d1f\u8d23\u91c7\u96c6\u3001\u4e0a\u62a5nginx\u65e5\u5fd7\u5373\u4e3a Sidecar\u5bb9\u5668\u3002\u672c\u6587\u4e2d\u7684SidecarSet\u8d44\u6e90\u62bd\u8c61\u4e5f\u662f\u4e3a\u89e3\u51b3 Sidecar\u5bb9\u5668 \u7684\u4e00\u4e9b\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"sidecar-logging-architectures"},"Sidecar logging architectures"),(0,i.kt)("p",null,"\u5e94\u7528\u65e5\u5fd7\u53ef\u4ee5\u8ba9\u4f60\u4e86\u89e3\u5e94\u7528\u5185\u90e8\u7684\u8fd0\u884c\u72b6\u51b5\uff0c\u65e5\u5fd7\u5bf9\u8c03\u8bd5\u95ee\u9898\u548c\u76d1\u63a7\u96c6\u7fa4\u6d3b\u52a8\u975e\u5e38\u6709\u7528\u3002\u5e94\u7528\u5bb9\u5668\u5316\u540e\uff0c\u6700\u7b80\u5355\u4e14\u6700\u5e7f\u6cdb\u91c7\u7528\u7684\u65e5\u5fd7\u8bb0\u5f55\u65b9\u5f0f\u5c31\u662f\u5199\u5165\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u5728\u5f53\u524d\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001\u5927\u89c4\u6a21\u96c6\u7fa4\u7684\u65f6\u4ee3\u4e0b\uff0c\u4e0a\u8ff0\u65b9\u6848\u8fd8\u4e0d\u8db3\u4ee5\u8fbe\u5230\u751f\u4ea7\u73af\u5883\u7684\u6807\u51c6\u3002\u9996\u5148\uff0c\u5bf9\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u800c\u8a00\uff0c\u65e5\u5fd7\u90fd\u662f\u5206\u6563\u5728\u5355\u4e2a\u5bb9\u5668\u91cc\u9762\uff0c\u6ca1\u6709\u4e00\u4e2a\u7edf\u4e00\u6c47\u603b\u7684\u5730\u65b9\u3002\u5176\u6b21\uff0c\u5982\u679c\u53d1\u751f\u5bb9\u5668\u5d29\u6e83\u3001Pod\u88ab\u9a71\u9010\u7b49\u573a\u666f\uff0c\u4f1a\u51fa\u73b0\u65e5\u5fd7\u4e22\u5931\u7684\u60c5\u51b5\u3002\u56e0\u6b64\uff0c\u9700\u8981\u4e00\u79cd\u66f4\u52a0\u53ef\u9760\uff0c\u72ec\u7acb\u4e8e\u5bb9\u5668\u751f\u547d\u5468\u671f\u7684\u65e5\u5fd7\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("p",null,"Sidecar logging architectures \u662f\u5c06logging agent\u653e\u5230\u4e00\u4e2a\u72ec\u7acb\u7684sidecar\u5bb9\u5668\u4e2d\uff0c\u901a\u8fc7\u5171\u4eab\u65e5\u5fd7\u76ee\u5f55\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u5bb9\u5668\u65e5\u5fd7\u7684\u91c7\u96c6\uff0c\u7136\u540e\u5b58\u50a8\u5230\u65e5\u5fd7\u5e73\u53f0\u7684\u540e\u7aef\u5b58\u50a8\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"logsidecar",src:t(8534).Z,width:"500",height:"250"})),(0,i.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u4ee5\u53ca\u8682\u8681\u96c6\u56e2\u5185\u90e8\u540c\u6837\u4e5f\u662f\u57fa\u4e8e\u8fd9\u79cd\u67b6\u6784\u5b9e\u73b0\u4e86\u5bb9\u5668\u7684\u65e5\u5fd7\u91c7\u96c6\uff0c\u4e0b\u9762\u6211\u5c06\u4ecb\u7ecdOpenKruise SidecarSet\u5982\u4f55\u52a9\u529b Sidecar\u65e5\u5fd7\u67b6\u6784\u5728kubernetes\u96c6\u7fa4\u4e2d\u7684\u5927\u89c4\u6a21\u843d\u5730\u5b9e\u8df5\u3002"),(0,i.kt)("h2",{id:"\u81ea\u52a8\u6ce8\u5165"},"\u81ea\u52a8\u6ce8\u5165"),(0,i.kt)("p",null,"OpenKruise SidecarSet\u57fa\u4e8ekubernetes AdmissionWebhook\u673a\u5236\u5b9e\u73b0\u4e86sidecar\u5bb9\u5668\u7684\u81ea\u52a8\u6ce8\u5165\uff0c\u56e0\u6b64\u53ea\u8981\u5c06sidecar\u914d\u7f6e\u5230SidecarSet\u4e2d\uff0c\u4e0d\u7ba1\u7528\u6237\u7528 CloneSet\u3001Deployment\u3001StatefulSet \u7b49\u4efb\u4f55\u65b9\u5f0f\u90e8\u7f72\uff0c\u6269\u51fa\u6765\u7684 Pod \u4e2d\u90fd\u4f1a\u6ce8\u5165\u5b9a\u4e49\u597d\u7684 sidecar \u5bb9\u5668\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"inject sidecar",src:t(4802).Z,width:"726",height:"448"})),(0,i.kt)("p",null,"Sidecar\u5bb9\u5668\u7684\u6240\u6709\u8005\u53ea\u9700\u8981\u914d\u7f6e\u81ea\u8eab\u7684SidecarSet\uff0c\u5c31\u53ef\u4ee5\u5728\u4e1a\u52a1\u65e0\u611f\u77e5\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210sidecar\u5bb9\u5668\u7684\u6ce8\u5165\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6781\u5927\u7684\u964d\u4f4e\u4e86sidecar\u5bb9\u5668\u4f7f\u7528\u7684\u95e8\u69db\uff0c\u4e5f\u65b9\u4fbf\u4e86sidecar\u6240\u6709\u8005\u7684\u7ba1\u7406\u5de5\u4f5c\u3002\u4e3a\u4e86\u6ee1\u8db3sidecar\u6ce8\u5165\u7684\u591a\u79cd\u573a\u666f\uff0cSidecarSet\u9664containers\u4e4b\u5916\u8fd8\u6269\u5c55\u4e86\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  # \u901a\u8fc7selector\u9009\u62e9pod\n  selector:\n    matchLabels:\n      app: web-server\n  # \u6307\u5b9a namespace \u751f\u6548\n  namespace: ns-1\n  # container definition\n  containers:\n  - name: logtail\n    image: logtail:1.0.0\n    # \u5171\u4eab\u6307\u5b9a\u5377\n    volumeMounts:\n    - name: web-log\n      mountPath: /var/log/web\n    # \u5171\u4eab\u6240\u6709\u5377\n    shareVolumePolicy: disabled\n    # \u73af\u5883\u53d8\u91cf\u5171\u4eab\n    transferEnv:\n    - sourceContainerName: web-server\n    # TZ\u4ee3\u8868\u65f6\u533a\uff0c\u4f8b\u5982\uff1aweb-server\u5bb9\u5668\u4e2d\u5b58\u5728\u73af\u5883\u53d8\u91cf TZ=Asia/Shanghai\n    envName: TZ\n    volumes:\n    - name: web-log\n      emptyDir: {}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pod\u9009\u62e9\u5668",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301selector\u6765\u9009\u62e9\u8981\u6ce8\u5165\u7684Pod\uff0c\u5982\u793a\u4f8b\u4e2d\u5c06\u9009\u62e9labels","[app]"," = web-server\u7684pod\uff0c\u5c06logtail\u5bb9\u5668\u6ce8\u5165\u8fdb\u53bb\uff0c\u4e5f\u53ef\u4ee5\u5728\u6240\u6709\u7684pod\u4e2d\u6dfb\u52a0\u4e00\u4e2alabels","[inject/logtail]"," = true\u7684\u65b9\u5f0f\uff0c\u6765\u5b9e\u73b0\u5168\u5c40\u6027\u7684sidecar\u6ce8\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},"namespace\uff1asidecarSet\u9ed8\u8ba4\u662f\u5168\u5c40\u751f\u6548\u7684\uff0c\u5982\u679c\u53ea\u60f3\u5bf9\u67d0\u4e00\u4e2anamespace\u751f\u6548\uff0c\u5219\u914d\u7f6e\u8be5\u53c2\u6570"))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5377\u5171\u4eab\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6307\u5b9a\u5377\uff1a\u901a\u8fc7volumeMounts\u548cvolumes\u53ef\u4ee5\u5b8c\u6210\u4e0e\u4e3b\u5bb9\u5668\u7684\u7279\u5b9a\u5377\u7684\u5171\u4eab\uff0c\u5982\u793a\u4f8b\u4e2d\u901a\u8fc7\u5171\u4eabweb-log volume\u6765\u8fbe\u5230\u65e5\u5fd7\u91c7\u96c6\u7684\u6548\u679c"),(0,i.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6240\u6709\u5377\uff1a\u901a\u8fc7 shareVolumePolicy = enabled | disabled \u6765\u63a7\u5236\u662f\u5426\u6302\u8f7dpod\u4e3b\u5bb9\u5668\u7684\u6240\u6709\u5377\u5377\uff0c\u5e38\u7528\u4e8e\u65e5\u5fd7\u6536\u96c6\u7b49 sidecar\uff0c\u914d\u7f6e\u4e3a enabled \u540e\u4f1a\u628a\u5e94\u7528\u5bb9\u5668\u4e2d\u6240\u6709\u6302\u8f7d\u70b9\u6ce8\u5165 sidecar \u540c\u4e00\u8def\u7ecf\u4e0b(sidecar\u4e2d\u672c\u8eab\u5c31\u6709\u58f0\u660e\u7684\u6570\u636e\u5377\u548c\u6302\u8f7d\u70b9\u9664\u5916\uff09"))),(0,i.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u5171\u4eab \u53ef\u4ee5\u901a\u8fc7 transferEnv \u4ece\u5176\u5b83\u5bb9\u5668\u4e2d\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u628a\u540d\u4e3a sourceContainerName \u5bb9\u5668\u4e2d\u540d\u4e3a envName \u7684\u73af\u5883\u53d8\u91cf\u62f7\u8d1d\u5230\u672csidecar\u5bb9\u5668\uff0c\u5982\u793a\u4f8b\u4e2d \u65e5\u5fd7sidecar\u5bb9\u5668\u5171\u4eab\u4e86\u4e3b\u5bb9\u5668\u7684\u65f6\u533aTZ\uff0c\u8fd9\u5728\u6d77\u5916\u73af\u5883\u4e2d\u5c24\u5176\u5e38\u89c1")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1akubernetes\u793e\u533a\u5bf9\u4e8e\u5df2\u7ecf\u521b\u5efa\u7684Pod\u4e0d\u5141\u8bb8\u4fee\u6539container\u6570\u91cf\uff0c\u6240\u4ee5\u4e0a\u8ff0\u6ce8\u5165\u80fd\u529b\u53ea\u80fd\u53d1\u751f\u5728Pod\u521b\u5efa\u9636\u6bb5\uff0c\u5bf9\u4e8e\u5df2\u7ecf\u521b\u5efa\u7684Pod\u9700\u8981\u901a\u8fc7\u91cd\u5efa\u7684\u65b9\u5f0f\u6765\u6ce8\u5165\u3002"),(0,i.kt)("h2",{id:"\u539f\u5730\u5347\u7ea7"},"\u539f\u5730\u5347\u7ea7"),(0,i.kt)("p",null,"SidecarSet\u4e0d\u4ec5\u5b9e\u73b0sidecar\u5bb9\u5668\u7684\u6ce8\u5165\uff0c\u800c\u4e14\u590d\u7528\u4e86OpenKruise\u4e2d\u539f\u5730\u5347\u7ea7\u7684\u7279\u6027\uff0c\u5b9e\u73b0\u4e86\u5728\u4e0d\u91cd\u542fPod\u548c\u4e3b\u5bb9\u5668\u7684\u524d\u63d0\u4e0b\u5355\u72ec\u5347\u7ea7sidecar\u5bb9\u5668\u7684\u80fd\u529b\u3002\u7531\u4e8e\u8fd9\u79cd\u5347\u7ea7\u65b9\u5f0f\u57fa\u672c\u4e0a\u80fd\u505a\u5230\u4e1a\u52a1\u65b9\u65e0\u611f\u77e5\u7684\u7a0b\u5ea6\uff0c\u6240\u4ee5sidecar\u5bb9\u5668\u7684\u5347\u7ea7\u5df2\u4e0d\u518d\u662f\u4e0a\u4e0b\u4ea4\u56f0\u7684\u96be\u9898\uff0c\u4ece\u800c\u6781\u5927\u89e3\u653e\u4e86sidecar\u7684\u6240\u6709\u8005\uff0c\u63d0\u5347\u4e86sidecar\u7248\u672c\u8fed\u4ee3\u7684\u901f\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"inplace sidecar",src:t(1262).Z,width:"597",height:"448"})),(0,i.kt)("p",null,"\u6ce8\u610f\uff1akubernetes\u793e\u533a\u5bf9\u4e8e\u5df2\u7ecf\u521b\u5efa\u7684Pod\u53ea\u5141\u8bb8\u4fee\u6539 container.image \u5b57\u6bb5\uff0c\u56e0\u6b64\u5bf9\u4e8esidecar\u5bb9\u5668\u7684\u4fee\u6539\u5305\u542b\u9664 container.image \u7684\u5176\u5b83\u5b57\u6bb5\uff0c\u5219\u9700\u8981\u901a\u8fc7Pod\u91cd\u5efa\u7684\u65b9\u5f0f\uff0c\u4e0d\u80fd\u76f4\u63a5\u539f\u5730\u5347\u7ea7\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u4e00\u4e9b\u590d\u6742\u7684sidecar\u5347\u7ea7\u573a\u666f\uff0cSidecarSet\u9664\u4e86\u539f\u5730\u5347\u7ea7\u4ee5\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u7070\u5ea6\u53d1\u5e03\u7b56\u7565\u3002"),(0,i.kt)("h2",{id:"\u7070\u5ea6\u53d1\u5e03"},"\u7070\u5ea6\u53d1\u5e03"),(0,i.kt)("p",null,"\u7070\u5ea6\u53d1\u5e03\u5e94\u8be5\u7b97\u662f\u65e5\u5e38\u53d1\u5e03\u4e2d\u6700\u5e38\u89c1\u7684\u4e00\u79cd\u624b\u6bb5\uff0c\u5b83\u80fd\u591f\u6bd4\u8f83\u5e73\u6ed1\u7684\u5b8c\u6210sidecar\u5bb9\u5668\u7684\u53d1\u5e03\uff0c\u5c24\u5176\u662f\u5728\u5927\u89c4\u6a21\u96c6\u7fa4\u7684\u573a\u666f\u4e0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002\u4e0b\u9762\u662f \u9996\u6279\u6682\u505c\uff0c\u540e\u7eed\u57fa\u4e8e \u6700\u5927\u4e0d\u53ef\u7528 \u6eda\u52a8\u53d1\u5e03 \u7684\u4f8b\u5b50\uff0c\u5047\u8bbe\u4e00\u4e2a\u67091000\u4e2apod\u9700\u8981\u53d1\u5e03\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    partition: 980\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9996\u5148\u53d1\u5e03\uff081000 - 980\uff09= 20 \u4e2apod\u4e4b\u540e\u5c31\u4f1a\u6682\u505c\u53d1\u5e03\uff0c\u4e1a\u52a1\u53ef\u4ee5\u89c2\u5bdf\u4e00\u6bb5\u65f6\u95f4\u53d1\u73b0 sidecar \u5bb9\u5668\u6b63\u5e38\u540e\uff0c\u8c03\u6574\u91cd\u65b0 update SidecarSet \u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u8c03\u6574\u540e\uff0c\u5bf9\u4e8e\u4f59\u4e0b\u7684 980 \u4e2apod\uff0c\u5c06\u4f1a\u6309\u7167\u6700\u5927\u4e0d\u53ef\u7528\u7684\u6570\u91cf\uff0810% * 1000 = 100\uff09\u7684\u987a\u5e8f\u8fdb\u884c\u53d1\u5e03\uff0c\u76f4\u5230\u6240\u6709\u7684pod\u90fd\u53d1\u5e03\u5b8c\u6210\u3002"),(0,i.kt)("p",null,"Partition \u7684\u8bed\u4e49\u662f \u4fdd\u7559\u65e7\u7248\u672c Pod \u7684\u6570\u91cf\u6216\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4\u4e3a 0\u3002\u8fd9\u91cc\u7684 partition \u4e0d\u8868\u793a\u4efb\u4f55 order \u5e8f\u53f7\u3002\u5982\u679c\u5728\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u8bbe\u7f6e\u4e86 partition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u6570\u5b57\uff0c\u63a7\u5236\u5668\u4f1a\u5c06 (replicas - partition) \u6570\u91cf\u7684 Pod \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u767e\u5206\u6bd4\uff0c\u63a7\u5236\u5668\u4f1a\u5c06 (replicas * (100% - partition)) \u6570\u91cf\u7684 Pod \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002")),(0,i.kt)("p",null,"MaxUnavailable \u662f\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u4fdd\u8bc1\u7684\uff0c\u540c\u4e00\u65f6\u95f4\u4e0b\u6700\u5927\u4e0d\u53ef\u7528\u7684 Pod \u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002\u7528\u6237\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u503c\u6216\u767e\u5206\u6bd4\uff08\u767e\u5206\u6bd4\u4f1a\u88ab\u63a7\u5236\u5668\u6309\u7167selected pod\u505a\u57fa\u6570\u6765\u8ba1\u7b97\u51fa\u4e00\u4e2a\u80cc\u540e\u7684\u7edd\u5bf9\u503c\uff09\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1amaxUnavailable \u548c partition \u4e24\u4e2a\u503c\u662f\u6ca1\u6709\u5fc5\u7136\u5173\u8054\u3002\u4e3e\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 {matched pod}=100,partition=50,maxUnavailable=10\uff0c\u63a7\u5236\u5668\u4f1a\u53d1\u5e03 50 \u4e2a Pod \u5230\u65b0\u7248\u672c\uff0c\u4f46\u662f\u53d1\u5e03\u7a97\u53e3\u4e3a 10\uff0c\u5373\u540c\u4e00\u65f6\u95f4\u53ea\u4f1a\u53d1\u5e03 10 \u4e2a Pod\uff0c\u6bcf\u53d1\u5e03\u597d\u4e00\u4e2a Pod \u624d\u4f1a\u518d\u627e\u4e00\u4e2a\u53d1\u5e03\uff0c\u76f4\u5230 50 \u4e2a\u53d1\u5e03\u5b8c\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53 {matched pod}=100,partition=80,maxUnavailable=30\uff0c\u63a7\u5236\u5668\u4f1a\u53d1\u5e03 20 \u4e2a Pod \u5230\u65b0\u7248\u672c\uff0c\u56e0\u4e3a\u6ee1\u8db3 maxUnavailable \u6570\u91cf\uff0c\u6240\u4ee5\u8fd9 20 \u4e2a Pod \u4f1a\u540c\u65f6\u53d1\u5e03\u3002")),(0,i.kt)("h2",{id:"\u91d1\u4e1d\u96c0\u53d1\u5e03"},"\u91d1\u4e1d\u96c0\u53d1\u5e03"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6709\u91d1\u4e1d\u96c0\u53d1\u5e03\u9700\u6c42\u7684\u4e1a\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7strategy.selector\u6765\u5b9e\u73b0\u3002\u65b9\u5f0f\uff1a\u5bf9\u4e8e\u9700\u8981\u7387\u5148\u91d1\u4e1d\u96c0\u7070\u5ea6\u7684pod\u6253\u4e0a\u56fa\u5b9a\u7684labels","[canary.release]"," = true\uff0c\u518d\u901a\u8fc7strategy.selector.matchLabels\u6765\u9009\u4e2d\u8be5pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    selector:\n      matchLabels:\n      - canary.release: true\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u53ea\u4f1a\u53d1\u5e03\u6253\u4e0a\u91d1\u4e1d\u96c0labels\u7684\u5bb9\u5668\uff0c\u5728\u5b8c\u6210\u91d1\u4e1d\u96c0\u9a8c\u8bc1\u4e4b\u540e\uff0c\u901a\u8fc7\u5c06 updateStrategy.selector \u914d\u7f6e\u53bb\u6389\uff0c\u5c31\u4f1a\u7ee7\u7eed\u901a\u8fc7 \u6700\u5927\u4e0d\u53ef\u7528 \u6765\u6eda\u52a8\u53d1\u5e03\u3002"),(0,i.kt)("h2",{id:"\u6253\u6563\u53d1\u5e03"},"\u6253\u6563\u53d1\u5e03"),(0,i.kt)("p",null,"SidecarSet\u5bf9\u4e8epod\u7684\u5347\u7ea7\u987a\u5e8f\uff0c\u9ed8\u8ba4\u6309\u7167\u5982\u4e0b\u89c4\u5219\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u5347\u7ea7\u7684pod\u96c6\u5408\uff0c\u4fdd\u8bc1\u591a\u6b21\u5347\u7ea7\u7684\u987a\u5e8f\u4e00\u81f4"),(0,i.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4f18\u5148\u987a\u5e8f\u662f\uff08\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff09\uff1a unscheduled < scheduled, pending < unknown < running, not-ready < ready, newer pods < older pods")),(0,i.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u9ed8\u8ba4\u53d1\u5e03\u987a\u5e8f\u4e4b\u5916\uff0cscatter\u6253\u6563\u7b56\u7565\u5141\u8bb8\u7528\u6237 \u81ea\u5b9a\u4e49\u5c06\u7b26\u5408\u67d0\u4e9b\u6807\u7b7e\u7684 Pod \u6253\u6563 \u5230\u6574\u4e2a\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u3002\u6bd4\u5982\uff0c\u5bf9\u4e8e\u50cf logtail \u8fd9\u79cd\u5168\u5c40\u6027\u7684 sidecar container\uff0c\u4e00\u4e2a\u96c6\u7fa4\u5f53\u4e2d\u5f88\u53ef\u80fd\u6ce8\u5165\u4e86\u51e0\u5341\u4e2a\u4e1a\u52a1pod\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u57fa\u4e8e \u5e94\u7528\u540d \u7684\u65b9\u5f0f\u6765\u6253\u6563logtail\u7684\u65b9\u5f0f\u8fdb\u884c\u53d1\u5e03\uff0c\u5b9e\u73b0 \u4e0d\u540c\u5e94\u7528\u95f4\u6253\u6563\u7070\u5ea6\u53d1\u5e03 \u7684\u6548\u679c\uff0c\u5e76\u4e14\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u540c \u6700\u5927\u4e0d\u53ef\u7528 \u4e00\u8d77\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n# ...\n  updateStrategy:\n    type: RollingUpdate\n    # \u914d\u7f6epod labels\uff0c\u5047\u8bbe\u6240\u6709\u7684pod\u90fd\u5305\u542blabels[app_name]\n    scatterStrategy:\n    - key: app_name\n      value: nginx\n    - key: app_name\n      value: web-server\n    - key: app_name\n      value: api-gateway\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53\u524d\u7248\u672c\u5fc5\u987b\u8981\u5217\u4e3e\u6240\u6709\u7684\u5e94\u7528\u540d\u79f0\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e2a\u7248\u672c\u652f\u6301 \u53ea\u914d\u7f6elabel key \u7684\u667a\u80fd\u6253\u6563\u65b9\u5f0f\u3002"),(0,i.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u672c\u6b21 OpenKruise v0.8.0 \u7248\u672c\u7684\u5347\u7ea7\uff0cSidecarSet\u7279\u6027\u4e3b\u8981\u662f\u5b8c\u5584\u4e86 \u65e5\u5fd7\u7ba1\u7406\u7c7bSidecar \u573a\u666f\u7684\u80fd\u529b\uff0c\u540e\u7eed\u6211\u4eec\u5728\u6301\u7eed\u6df1\u8015SidecarSet\u7a33\u5b9a\u6027\u3001\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e5f\u5c06\u8986\u76d6\u66f4\u591a\u7684\u573a\u666f\uff0c\u6bd4\u5982\u4e0b\u4e00\u4e2a\u7248\u672c\u5c06\u4f1a\u589e\u52a0\u9488\u5bf9 Service Mesh\u573a\u666f \u7684\u652f\u6301\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u6b22\u8fce\u66f4\u591a\u7684\u540c\u5b66\u53c2\u4e0e\u5230 OpenKruise \u793e\u533a\u6765\uff0c\u5171\u540c\u5efa\u8bbe\u4e00\u4e2a\u573a\u666f\u66f4\u52a0\u4e30\u5bcc\u3001\u5b8c\u5584\u7684 K8s \u5e94\u7528\u7ba1\u7406\u3001\u4ea4\u4ed8\u6269\u5c55\u80fd\u529b\uff0c\u80fd\u591f\u9762\u5411\u66f4\u52a0\u89c4\u6a21\u5316\u3001\u590d\u6742\u5316\u3001\u6781\u81f4\u6027\u80fd\u7684\u573a\u666f\u3002"))}m.isMDXComponent=!0},4802:function(e,a,t){a.Z=t.p+"assets/images/inject_sidecar-d17db953d6c3b59583124c7c272549b0.png"},1262:function(e,a,t){a.Z=t.p+"assets/images/inplace_sidecar-f00ef87888dab2a820b7401f01ced12c.png"},8534:function(e,a,t){a.Z=t.p+"assets/images/logsidecar-e3784d7378b906f91df3393e6d716490.png"}}]);