"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8502],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2106:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],s={slug:"sidecarset",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",authors:["zmberg"],tags:["workload","sidecar"]},l="Preface",c={permalink:"/blog/sidecarset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2021-03-15-sidecarSet-0.8.0.md",source:"@site/blog/2021-03-15-sidecarSet-0.8.0.md",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",description:"OpenKruise is an open source management suite developed by Alibaba Cloud for cloud native application automation. It is currently a Sandbox project hosted under the Cloud Native Computing Foundation (CNCF). Based on years of Alibaba's experience in container and cloud native technologies, OpenKruise is a Kubernetes-based standard extension component that has been widely used in the Alibaba internal production environment, together with technical concepts and best practices for large-scale Internet scenarios.",date:"2021-03-15T00:00:00.000Z",formattedDate:"March 15, 2021",tags:[{label:"workload",permalink:"/blog/tags/workload"},{label:"sidecar",permalink:"/blog/tags/sidecar"}],readingTime:10.885,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"sidecarset",title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",authors:["zmberg"],tags:["workload","sidecar"]},prevItem:{title:"OpenKruise 0.9.0, Supports Pod Restart and Deletion Protection",permalink:"/blog/openkruise-0.9.0"},nextItem:{title:"UnitedDeploymemt - Supporting Multi-domain Workload Management",permalink:"/blog/uniteddeployment"}},d={authorsImageUrls:[void 0]},u=[{value:"Sidecar logging architectures",id:"sidecar-logging-architectures",level:2},{value:"Automatic Injection",id:"automatic-injection",level:2},{value:"Pod selector",id:"pod-selector",level:3},{value:"Data volume sharing",id:"data-volume-sharing",level:3},{value:"Share environment variables",id:"share-environment-variables",level:3},{value:"In-place Upgrade",id:"in-place-upgrade",level:2},{value:"Gray Release",id:"gray-release",level:2},{value:"Canary Release",id:"canary-release",level:2},{value:"Scatter Release",id:"scatter-release",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenKruise is an open source management suite developed by Alibaba Cloud for cloud native application automation. It is currently a Sandbox project hosted under the Cloud Native Computing Foundation (CNCF). Based on years of Alibaba's experience in container and cloud native technologies, OpenKruise is a Kubernetes-based standard extension component that has been widely used in the Alibaba internal production environment, together with technical concepts and best practices for large-scale Internet scenarios."),(0,i.kt)("p",null,"OpenKruise released v0.8.0 on March 4, 2021, with enhanced SidecarSet capabilities, especially for log management of Sidecar."),(0,i.kt)("h1",{id:"background"},"Background"),(0,i.kt)("p",null,"Sidecar is a very important cloud native container design mode. It can create an independent Sidecar container by separating the auxiliary capabilities from the main container. In microservice architectures, the Sidecar mode is also used to separate general capabilities such as configuration management, service discovery, routing, and circuit breaking from main programs, thus making the microservice architectures less complicated. Since the popularity of Service Mesh has led to the prevalence of the Sidecar mode, the Sidecar mode has also been widely used within Alibaba Group to implement common capabilities such as O&M, security, and message-oriented middleware."),(0,i.kt)("p",null,"In Kubernetes clusters, pods can not only support the construction of main containers and Sidecar containers, but also many powerful workloads, such as deployment and statefulset to manage and upgrade the main containers and Sidecar containers. However, with the ever-growing businesses in Kubernetes clusters day by day, there have also been various Sidecar containers with a larger scale. Therefore, management and upgrades of online Sidecar containers are more complex:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A business pod contains multiple Sidecar containers, such as O&M, security, and proxy containers. The business team should not only configure the main containers, but also learn to configure these Sidecar containers. This increases the workloads of the business team and the risks in Sidecar container configuration."),(0,i.kt)("li",{parentName:"ol"},"The Sidecar container needs to be restarted together with the main business container after the upgrade. The Sidecar container supports hundreds of online businesses, so it is extremely difficult to coordinate and promote the upgrades of a large number of online Sidecar containers."),(0,i.kt)("li",{parentName:"ol"},"If there are no effective updates for Sidecar containers with different online configurations and versions, it will pose great potential risks to the management of Sidecar containers.")),(0,i.kt)("p",null,"Alibaba Group has millions of containers with thousands of businesses. Therefore, the management and upgrades of Sidecar containers have become a major target for improvement. To this end, many internal requirements for the Sidecar containers have been summarized and integrated into OpenKruise. Finally, these requirements were abstracted as SidecarSet, a powerful tool to manage and upgrade a wide range of Sidecar containers."),(0,i.kt)("h1",{id:"openkruise-sidecarset"},"OpenKruise SidecarSet"),(0,i.kt)("p",null,"SidecarSet is an abstracted concept for Sidecar from OpenKruise. As one of the core workloads of OpenKruise, it is used to inject and upgrade the Sidecar containers in Kubernetes clusters. SidecarSet provides a variety of features so that users can easily manage Sidecar containers. The main features are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Separate configuration management:")," Each Sidecar container is configured with separate SidecarSet configuration to facilitate management."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Automatic injection:")," Automatic Sidecar container injection is implemented in scenarios of Pod creation, Pod scale-out and Pod reconstruction."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"In-place upgrade:")," Sidecar containers can be upgraded in-place without the reconstruction of any pods, so that the main business container is not affected. In addition, a wide range of gray release policies are included.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," For a Pod that contains multiple container modes, the container that provides the main business logic to the external is the main container. Other containers provide auxiliary capabilities such as log collection, security, and proxy are Sidecar containers. For example, if a pod provides web capabilities outward, the nginx container that provides major web server capabilities is the main container. The logtail container is the Sidecar container that is responsible for collecting and reporting nginx logs. The SidecarSet resource abstraction in this article also solves some problems of the Sidecar containers."),(0,i.kt)("h2",{id:"sidecar-logging-architectures"},"Sidecar logging architectures"),(0,i.kt)("p",null,"Application logs allow you to see the internal running status of your application. Logs are useful for debugging problems and monitoring cluster activities. After the application is containerized, the simplest and most widely used logging is to write standard output and errors."),(0,i.kt)("p",null,"However, in the current distributed systems and large-scale clusters, the above solution is not enough to meet the production environment standards. First, for distributed systems, logs are scattered in every single container, without a unified place for congregation. Logs may be lost in scenarios such as container crashes and Pod eviction. Therefore, there is a need for a more reliable log solution that is independent of the container lifecycle."),(0,i.kt)("p",null,"Sidecar logging architectures places the logging agent in an independent Sidecar container to collect container logs by sharing the log directory. Then, the logs are stored in the back-end storage of the log platform.\n",(0,i.kt)("img",{alt:"logsidecar",src:a(8534).Z,width:"500",height:"250"})),(0,i.kt)("p",null,"This architecture is also used by Alibaba and Ant Group to realize the log collection of containers. Next, this article will explain how OpenKruise SidecarSet helps a large-scale implementation of the Sidecar log architecture in Kubernetes clusters."),(0,i.kt)("h2",{id:"automatic-injection"},"Automatic Injection"),(0,i.kt)("p",null,"OpenKruise SidecarSet has implemented automatic Sidecar container injection based on Kubernetes AdmissionWebhook mechanism. Therefore, as long as the Sidecar is configured in SidecarSet, the defined Sidecar container will be injected into the scaled pods with any deployment patterns, such as CloneSet, Deployment, or StatefulSet.\n",(0,i.kt)("img",{alt:"inject sidecar",src:a(4802).Z,width:"726",height:"448"})),(0,i.kt)("p",null,"The owner of Sidecar containers only needs to configure SidecarSet to inject the Sidecar containers without affecting the business. This greatly reduces the threshold for using the Sidecar containers, and facilitates the management of Sidecar owners. In addition to containers, SidecarSet also extends the following fields to meet various scenarios of Sidecar injection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  # Select Pods through the selector\n  selector:\n    matchLabels:\n      app: web-server\n  # Specify a namespace to take effect\n  namespace: ns-1\n  # container definition\n  containers:\n  - name: logtail\n    image: logtail:1.0.0\n    # Share the specified volume\n    volumeMounts:\n    - name: web-log\n      mountPath: /var/log/web\n    # Share all volumes\n    shareVolumePolicy: disabled\n    # Share environment variables\n    transferEnv:\n    - sourceContainerName: web-server\n      envName: TZ\n    volumes:\n    - name: web-log\n      emptyDir: {}\n")),(0,i.kt)("h3",{id:"pod-selector"},"Pod selector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The selector is supported to select the pods to be injected.")," In the above example, the pod of labels","[app]"," = web-server is selected to inject the logtail container. Alternatively, labels","[inject/logtail]"," = true can be added in all pods to inject a global Sidecar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"namespace:")," SidecarSet is globally valid by default. This parameter can be configured to make it valid to a specific namespace.")),(0,i.kt)("h3",{id:"data-volume-sharing"},"Data volume sharing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Share the specified volume:")," Use volumeMounts and volumes to share a specified volume with the main container. In the above example, a web-log volume is shared to achieve log collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Share all volumes:")," Use shareVolumePolicy = enabled | disabled to specify whether to mount all volumes in the Pod's main container, which is often used for Sidecar containers such as log collection. If the configuration is enabled, all mount points in the application container are injected into the same Sidecar path, unless there are data volumes and mount points declared by Sidecar.\uff09")),(0,i.kt)("h3",{id:"share-environment-variables"},"Share environment variables"),(0,i.kt)("p",null,"Use transferEnv to obtain environment variables from other containers, which copies the environment variable named envName in the sourceContainerName container to the current Sidecar container. In the above example, the Sidecar container of logs shares the time zone of the main container, which is especially common in overseas environments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The number of containers for the created Pods cannot be changed in the Kubernetes community. Therefore, the injection capability described above can only occur during the Pod creation phase. For the created Pods, Pod reconstruction is required for injection."),(0,i.kt)("h2",{id:"in-place-upgrade"},"In-place Upgrade"),(0,i.kt)("p",null,"SidecarSet not only allows to inject the Sidecar containers, but also reuses the in-place update feature of OpenKruise. This realizes the upgrade of the Sidecar containers without restarting the Pod and the main container. Since this upgrade method does not affect the business, upgrading the Sidecar containers is no longer a pain point. Thus, it brings a lot of conveniences to Sidecar owners and speeds up the Sidecar version iteration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"inplace sidecar",src:a(1262).Z,width:"597",height:"448"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Only the modification on the container.image fields for the created Pods is allowed by the Kubernetes community. Therefore, the modification on other fields of Sidecar containers requires the reconstruction of Pod, and the in-place upgrade is not supported."),(0,i.kt)("p",null,"To meet the requirements in some complex Sidecar upgrade scenarios, SidecarSet provides the in-place upgrade and a wide range of gray release strategies."),(0,i.kt)("h2",{id:"gray-release"},"Gray Release"),(0,i.kt)("p",null,"Gray release is a common method that allows a Sidecar container to be released smoothly. It is highly recommended that this method is used in large-scale clusters. Here is an example of Pod's rolling release based on the maximum unavailability after the first batch of Pod release is suspended. Suppose that there are 1,000 Pods to be released:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    partition: 980\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"The configuration above is suspended after the former release of 20 pods (1000 \u2013 980 = 20). After the Sidecar container has been normal for a period of time in business, adjust the update SidecarSet configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"As such, the remaining 980 Pods will be released in the order of the maximum unavailable numbers (10% * 1000=100) until all Pods are released."),(0,i.kt)("p",null,"Partition indicates that the number or percentage of Pods of the old version is retained, with the default value of 0. Here, the partition does not represent any order number. If the partition is set up during the release process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it is a number, the controller will update the pods with (replicas \u2013 partition) to the latest version."),(0,i.kt)("li",{parentName:"ul"},"If it is a percentage, the controller will update the pods with (replicas * (100% - partition)) to the latest version.")),(0,i.kt)("p",null,"MaxUnavailable indicates the maximum unavailable number of pods at the same time during the release, with the default value of 1. Users can set the MaxUnavailable value as absolute value or percentage. The percentage is used by the controller to calculate the absolute value based on the number of selected pods."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The values of maxUnavailable and partition are not necessarily associated. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under {matched pod} = 100, partition = 50, and maxUnavailable = 10, the controller will release 50 pods to the new version, but the release is limited to 10. That is, only 10 pods are released at the same time. A pod is released one after another until 50 pods are all released."),(0,i.kt)("li",{parentName:"ul"},"Under {matched pod} = 100, partition = 80, and maxUnavailable = 30, the controller will release 20 Pods to the new version. The controller releases all 20 pods at the same time because the number of maxUnavailable is met.")),(0,i.kt)("h2",{id:"canary-release"},"Canary Release"),(0,i.kt)("p",null,"For businesses that require canary release, strategy.selector can be considered as a choice. The solution is to mark the labels","[canary.release]"," = true into the Pods that require canary release, and then use strategy.selector.matchLabels to select the pods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    selector:\n      matchLabels:\n      - canary.release: true\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"The above configuration only releases the containers marked with canary labels. After the canary verification is completed, rolling release is performed based on the maximum unavailability by removing the configuration of updateStrategy.selector."),(0,i.kt)("h2",{id:"scatter-release"},"Scatter Release"),(0,i.kt)("p",null,"The upgrade sequence of pods in SidecarSet is subject to the following rules by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the pod set upgrade, multiple upgrades with the same order are guaranteed."),(0,i.kt)("li",{parentName:"ul"},"The selection priority is (the smaller, the more prioritized): unscheduled < scheduled, pending < unknown < running, not-ready < ready, newer pods < older pods.")),(0,i.kt)("p",null,"In addition to the above default release order, the scatter release policy allows users to scatter the pods that match certain labels to the entire release process. For example, for a global sidecar container like logtail, dozens of business pods may be injected into a cluster. Thus, the logtail can be released after being scattered based on the application name, realizing scattered and gray release among applications. And it can be performed together with the maximum unavailability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n# ...\n  updateStrategy:\n    type: RollingUpdate\n    scatterStrategy:\n    - key: app_name\n      value: nginx\n    - key: app_name\n      value: web-server\n    - key: app_name\n      value: api-gateway\n    maxUnavailable: 10%\n")),(0,i.kt)("p",null,"Note: In the current version, all application names must be listed. In the next version, an intelligent scattered release will be supported with only the label key configured."),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In the OpenKruise v0.8.0, the SidecarSet has been improved in terms of log management in Sidecar scenarios. In the later exploration of the stability and performance of SidecarSet, more scenarios will be covered at the same time. For example, Service Mesh scenario will be supported in the next version. Moreover, more people are welcomed to participate OpenKruise community to improve the application management and delivery extensibility of Kubernetes for scenarios featuring large scale, complexity and extreme performance."))}h.isMDXComponent=!0},4802:function(e,t,a){t.Z=a.p+"assets/images/inject_sidecar-d17db953d6c3b59583124c7c272549b0.png"},1262:function(e,t,a){t.Z=a.p+"assets/images/inplace_sidecar-f00ef87888dab2a820b7401f01ced12c.png"},8534:function(e,t,a){t.Z=a.p+"assets/images/logsidecar-e3784d7378b906f91df3393e6d716490.png"}}]);