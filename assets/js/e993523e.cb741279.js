"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1604],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6926:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"openkruise-0.10.0",title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",authors:["FillZpp"],tags:["release"]},s=void 0,p={permalink:"/blog/openkruise-0.10.0",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2021-09-06-release-0.10.0.md",source:"@site/blog/2021-09-06-release-0.10.0.md",title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",description:"On Sep 6th, 2021, OpenKruise released the latest version v0.10.0, with new features, such as WorkloadSpread and PodUnavailableBudget. This article provides an overview of this new version.",date:"2021-09-06T00:00:00.000Z",formattedDate:"September 6, 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:4.67,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],frontMatter:{slug:"openkruise-0.10.0",title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",authors:["FillZpp"],tags:["release"]},prevItem:{title:"WorkloadSpread - Interpretation for OpenKruise v0.10.0 new feature",permalink:"/blog/workloadspread"},nextItem:{title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",permalink:"/blog/sidecarset-hotupdate"}},d={authorsImageUrls:[void 0]},u=[{value:"WorkloadSpread",id:"workloadspread",level:2},{value:"PodUnavailableBudget",id:"podunavailablebudget",level:2},{value:"CloneSet supports scaledown priority by Spread Constraints",id:"cloneset-supports-scaledown-priority-by-spread-constraints",level:2},{value:"Advanced StatefulSet supports scaleup with rate limit",id:"advanced-statefulset-supports-scaleup-with-rate-limit",level:2},{value:"More",id:"more",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On Sep 6th, 2021, OpenKruise released the latest version v0.10.0, with new features, such as WorkloadSpread and PodUnavailableBudget. This article provides an overview of this new version."),(0,o.kt)("h2",{id:"workloadspread"},"WorkloadSpread"),(0,o.kt)("p",null,"WorkloadSpread can distribute Pods of workload to different types of Node according to some polices, which empowers single workload the abilities for\nmulti-domain deployment and elastic deployment."),(0,o.kt)("p",null,"Some common policies include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fault toleration spread (for example, spread evenly among hosts, az, etc)"),(0,o.kt)("li",{parentName:"ul"},"spread according to the specified ratio (for example, deploy Pod to several specified az according to the proportion)"),(0,o.kt)("li",{parentName:"ul"},"subset management with priority, such as",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"deploy Pods to ecs first, and then deploy to eci when its resources are insufficient."),(0,o.kt)("li",{parentName:"ul"},"deploy a fixed number of Pods to ecs first, and the rest Pods are deployed to eci."))),(0,o.kt)("li",{parentName:"ul"},"subset management with customization, such as",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"control how many pods in a workload are deployed in different cpu arch"),(0,o.kt)("li",{parentName:"ul"},"enable pods in different cpu arch to have different resource requirements")))),(0,o.kt)("p",null,"The feature of WorkloadSpread is similar with ",(0,o.kt)("strong",{parentName:"p"},"UnitedDeployment")," in OpenKruise community. Each WorkloadSpread defines multi-domain\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"subset"),". Each domain may provide the limit to run the replicas number of pods called ",(0,o.kt)("inlineCode",{parentName:"p"},"maxReplicas"),".\nWorkloadSpread injects the domain configuration into the Pod by Webhook, and it also controls the order of scale in and scale out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadata:\n  name: workloadspread-demo\nspec:\n  targetRef:\n    apiVersion: apps/v1 | apps.kruise.io/v1alpha1\n    kind: Deployment | CloneSet\n    name: workload-xxx\n  subsets:\n  - name: subset-a\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-a\n    maxReplicas: 10 | 30%\n  - name: subset-b\n    requiredNodeSelectorTerm:\n      matchExpressions:\n      - key: topology.kubernetes.io/zone\n        operator: In\n        values:\n        - zone-b\n")),(0,o.kt)("p",null,"The WorkloadSpread is related to a Workload via ",(0,o.kt)("inlineCode",{parentName:"p"},"targetRef"),". When a Pod is created by the Workload, it will be injected topology policies by Kruise according to the rules in WorkloadSpread."),(0,o.kt)("p",null,"Note that WorkloadSpread uses ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/labels-annotations-taints/#pod-deletion-cost"},"Pod Deletion Cost")," to control the priority of scale down. So:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the Workload type is CloneSet, it already supports the feature."),(0,o.kt)("li",{parentName:"ul"},"If the Workload type is Deployment or ReplicaSet, it requires your Kubernetes version >= 1.22.")),(0,o.kt)("p",null,"Also you have to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkloadSpread")," feature-gate when you install or upgrade Kruise."),(0,o.kt)("h2",{id:"podunavailablebudget"},"PodUnavailableBudget"),(0,o.kt)("p",null,"Kubernetes offers ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"Pod Disruption Budget")," to help you run highly available applications even when you introduce frequent ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"},"voluntary disruptions"),".\nPDB limits the number of Pods of a replicated application that are down simultaneously from voluntary disruptions. However, it can only constrain the voluntary disruption triggered by the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/#eviction-api"},"Eviction API"),".\nFor example, when you run kubectl drain, the tool tries to evict all of the Pods on the Node you're taking out of service."),(0,o.kt)("p",null,"In the following voluntary disruption scenarios, there are still business disruption or SLA degradation situations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The application owner update deployment's pod template for general upgrading, while cluster administrator drain nodes to scale the cluster down(learn about ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/autoscaler/#readme"},"Cluster Autoscaling"),")."),(0,o.kt)("li",{parentName:"ol"},"The middleware team is using SidecarSet to rolling upgrade the sidecar containers of the cluster, e.g. ServiceMesh envoy, while HPA triggers the scale-down of business applications."),(0,o.kt)("li",{parentName:"ol"},"The application owner and middleware team release the same Pods at the same time based on OpenKruise cloneSet, sidecarSet in-place upgrades")),(0,o.kt)("p",null,"In voluntary disruption scenarios, PodUnavailableBudget can achieve the effect of preventing application disruption or SLA degradation, which greatly improves the high availability of application services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodUnavailableBudget\nmetadata:\n  name: web-server-pub\n  namespace: web\nspec:\n  targetRef:\n    apiVersion: apps/v1 | apps.kruise.io/v1alpha1\n    kind: Deployment | CloneSet | StatefulSet | ...\n    name: web-server\n  # selector label query over pods managed by the budget\n  # selector and TargetReference are mutually exclusive, targetRef is priority to take effect.\n  # selector is commonly used in scenarios where applications are deployed using multiple workloads,\n  # and targetRef is used for protection against a single workload.\n# selector:\n#   matchLabels:\n#     app: web-server\n  # maximum number of Pods unavailable for the current cloneset, the example is cloneset.replicas(5) * 60% = 3\n  # maxUnavailable and minAvailable are mutually exclusive, maxUnavailable is priority to take effect\n  maxUnavailable: 60%\n  # Minimum number of Pods available for the current cloneset, the example is cloneset.replicas(5) * 40% = 2\n# minAvailable: 40%\n")),(0,o.kt)("p",null,"You have to enable the feature-gates when install or upgrade Kruise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PodUnavailableBudgetDeleteGate: protect Pod deletion or eviction."),(0,o.kt)("li",{parentName:"ul"},"PodUnavailableBudgetUpdateGate: protect Pod update operations, such as in-place update.")),(0,o.kt)("h2",{id:"cloneset-supports-scaledown-priority-by-spread-constraints"},"CloneSet supports scaledown priority by Spread Constraints"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," of a CloneSet decreased, it has the arithmetic to choose Pods and delete them."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Node unassigned < assigned"),(0,o.kt)("li",{parentName:"ol"},"PodPending < PodUnknown < PodRunning"),(0,o.kt)("li",{parentName:"ol"},"Not ready < ready"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Lower pod-deletion cost < higher pod-deletion-cost")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Higher spread rank < lower spread rank")),(0,o.kt)("li",{parentName:"ol"},"Been ready for empty time < less time < more time"),(0,o.kt)("li",{parentName:"ol"},"Pods with containers with higher restart counts < lower restart counts"),(0,o.kt)("li",{parentName:"ol"},"Empty creation time pods < newer pods < older pods")),(0,o.kt)("p",null,'"4" has provided in Kruise v0.9.0 and it is also used by WorkloadSpread to control the Pod deletion. ',(0,o.kt)("strong",{parentName:"p"},'"5" is added in Kruise v0.10.0 to sort Pods by their Topology Spread Constraints during scaledown.')),(0,o.kt)("h2",{id:"advanced-statefulset-supports-scaleup-with-rate-limit"},"Advanced StatefulSet supports scaleup with rate limit"),(0,o.kt)("p",null,"To avoid a large amount of failed Pods after user created an incorrect Advanced StatefulSet, Kruise add a ",(0,o.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," field into its ",(0,o.kt)("inlineCode",{parentName:"p"},"scaleStrategy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 100\n  scaleStrategy:\n    maxUnavailable: 10% # percentage or absolute number\n")),(0,o.kt)("p",null,"When the field is set, Advanced StatefulSet will guarantee that the number of unavailable Pods should not bigger than the strategy number during Pod creation."),(0,o.kt)("p",null,"Note that the feature can only be used in StatefulSet with ",(0,o.kt)("inlineCode",{parentName:"p"},"podManagementPolicy=Parallel"),"."),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"For more changes, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"release page")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"ChangeLog"),"."))}m.isMDXComponent=!0}}]);