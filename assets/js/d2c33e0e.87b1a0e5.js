"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5391],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={slug:"openkruise-1.4",title:"OpenKruise V1.4 Release, New Job Sidecar Terminator Capability",authors:["zmberg"],tags:["release"]},s=void 0,c={permalink:"/blog/openkruise-1.4",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2023-04-18-release-1.4.md",source:"@site/blog/2023-04-18-release-1.4.md",title:"OpenKruise V1.4 Release, New Job Sidecar Terminator Capability",description:"OpenKruise (https://github.com/openkruise/kruise) is an open-source cloud-native application automation management suite. It is also a current incubating project hosted by the Cloud Native Computing Foundation (CNCF). It is a standard extension component based on Kubernetes that is widely used in production of internet scale company. It also closely follows upstream community standards and adapts to the technical improvement and best practices for internet-scale scenarios.",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:7,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"openkruise-1.4",title:"OpenKruise V1.4 Release, New Job Sidecar Terminator Capability",authors:["zmberg"],tags:["release"]},nextItem:{title:"OpenKruise v1.3, New Custom Pod Probe Capabilities and Significant Performance Improvements for Large-Scale Clusters",permalink:"/blog/openkruise-1.3"}},u={authorsImageUrls:[void 0]},d=[{value:"Upgrade Notice",id:"upgrade-notice",level:2},{value:"2. New Job Sidecar Terminator Capability",id:"2-new-job-sidecar-terminator-capability",level:2},{value:"Pods on real nodes",id:"pods-on-real-nodes",level:3},{value:"Pods on virtual nodes",id:"pods-on-virtual-nodes",level:3},{value:"Step 1: Prepare a fast exit image",id:"step-1-prepare-a-fast-exit-image",level:4},{value:"Step 2: Configure the special image in the Sidecar environment variable",id:"step-2-configure-the-special-image-in-the-sidecar-environment-variable",level:4},{value:"Notice",id:"notice",level:2},{value:"Advanced Workload Improvement",id:"advanced-workload-improvement",level:2},{value:"CloneSet Optimization Performance: New FeatureGate CloneSetEventHandlerOptimization",id:"cloneset-optimization-performance-new-featuregate-cloneseteventhandleroptimization",level:3},{value:"CloneSet New disablePVCReuse Field",id:"cloneset-new-disablepvcreuse-field",level:3},{value:"CloneSet New PreNormal Lifecycle",id:"cloneset-new-prenormal-lifecycle",level:3},{value:"4. Enhanced Operations Improvement",id:"4-enhanced-operations-improvement",level:2},{value:"ContainerRestart New forceRecreate Field",id:"containerrestart-new-forcerecreate-field",level:3},{value:"ImagePullJob Support Attach metadata into cri interface",id:"imagepulljob-support-attach-metadata-into-cri-interface",level:3},{value:"Get Involved",id:"get-involved",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenKruise (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"https://github.com/openkruise/kruise"),") is an open-source cloud-native application automation management suite. It is also a current incubating project hosted by the Cloud Native Computing Foundation (CNCF). It is a standard extension component based on Kubernetes that is widely used in production of internet scale company. It also closely follows upstream community standards and adapts to the technical improvement and best practices for internet-scale scenarios."),(0,o.kt)("p",null,"OpenKruise has released the latest version v1.4 on March 31, 2023 (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"ChangeLog"),"), with the addition of the Job Sidecar Terminator feature. This article provides a comprehensive overview of the new version."),(0,o.kt)("h2",{id:"upgrade-notice"},"Upgrade Notice"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To facilitate the use of Kruise's enhanced capabilities, some stable capabilities have been enabled by default, including ResourcesDeletionProtection, WorkloadSpread, PodUnavailableBudgetDeleteGate, InPlaceUpdateEnvFromMetadata, StatefulSetAutoDeletePVC, and PodProbeMarkerGate. Most of these capabilities require special configuration to take effect, so enabling them by default generally has no impact on existing clusters. If you do not want to use some of these features, you can turn them off during the upgrade process."),(0,o.kt)("li",{parentName:"ul"},"The leader election method for Kruise-Manager has been migrated from configmaps to configmapsleases to prepare for future migration to the leases method. In addition, this is an officially provided smooth upgrade method that will not affect existing clusters.")),(0,o.kt)("h2",{id:"2-new-job-sidecar-terminator-capability"},"2. New Job Sidecar Terminator Capability"),(0,o.kt)("p",null,"In Kubernetes, for Job workloads, it is commonly desired that when the main container completes its task and terminates, the Pod should enter a completed state. However, when these Pods have Long-Running Sidecar containers, the Sidecar container cannot terminate itself after the main container has exited, causing the Pod to remain in an incomplete state. The community's common solution to this problem usually involves modifying both the Main and Sidecar containers to use Volume sharing to achieve the effect of the Sidecar container exiting after the Main container has completed."),(0,o.kt)("p",null,"While the community's solution can solve this problem, it requires modification of the containers, especially for commonly used Sidecar containers, which incurs high costs for modification and maintenance."),(0,o.kt)("p",null,"To address this, we have added a controller called SidecarTerminator to Kruise. This controller is specifically designed to listen for completion status of the main container in this scenario and select an appropriate time to terminate the Sidecar container in the Pod, without requiring intrusive modification of the Main and Sidecar containers."),(0,o.kt)("h3",{id:"pods-on-real-nodes"},"Pods on real nodes"),(0,o.kt)("p",null,"For pods running on regular nodes, it is very easy to use this feature since Kruise daemon can  be installed. Users just need to add a special env to identify the target sidecar container in the pod, and the controller will use the ContainerRecreateRequest(CRR) capability provided by Kruise Daemon to terminate these sidecar containers at the appropriate time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT\n          value: "true"\n      - name: main\n      ...\n')),(0,o.kt)("h3",{id:"pods-on-virtual-nodes"},"Pods on virtual nodes"),(0,o.kt)("p",null,"For some platforms that provide Serverless containers, such as ECI or Fargate, their pods can only run on virtual nodes such as Virtual-Kubelet. However, Kruise Daemon cannot be deployed and work on these virtual nodes, which makes it impossible to use the CRR capability to terminate containers."),(0,o.kt)("p",null,"Fortunately, we can use the Pod in-place upgrade mechanism provided by native Kubernetes to achieve the same goal: just construct a special image whose only purpose is to make the container exit quickly once started. In this way, when exiting the sidecar, just replace the original sidecar image with the fast exit image to achieve the purpose of exiting the sidecar."),(0,o.kt)("h4",{id:"step-1-prepare-a-fast-exit-image"},"Step 1: Prepare a fast exit image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The image only needs to have a very simple logic: when the container of this image starts, it exits directly with an exit code of 0."),(0,o.kt)("li",{parentName:"ul"},"The image needs to be compatible with the commands and args of the original sidecar image to prevent errors when the container starts.")),(0,o.kt)("h4",{id:"step-2-configure-the-special-image-in-the-sidecar-environment-variable"},"Step 2: Configure the special image in the Sidecar environment variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE\n          value: "example/quick-exit:v1.0.0"\n      - name: main\n      ...\n')),(0,o.kt)("p",null,'Replace "example/quick-exit:v1.0.0" with the fast exit image that you have prepared in step 1.'),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The sidecar container must be able to respond to the SIGTERM signal, and when it receives this signal, the entrypoint process needs to exit (that is, the sidecar container needs to exit), and the exit code should be 0."),(0,o.kt)("li",{parentName:"ul"},"This feature applies to any Pod managed by a Job type Workload, as long as their RestartPolicy is Never/OnFailure."),(0,o.kt)("li",{parentName:"ul"},"Containers with the environment variable KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT will be treated as sidecar containers, while other containers will be treated as main containers. The sidecar container will only be terminated after all main containers have completed:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Under the Never restart policy, once the main container exits, it will be considered "completed".'),(0,o.kt)("li",{parentName:"ul"},'Under the OnFailure restart policy, the exit code of the main container must be 0 to be considered "completed".'))),(0,o.kt)("li",{parentName:"ul"},"In Pods on real nodes mode, ",(0,o.kt)("inlineCode",{parentName:"li"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT")," has a higher priority than ",(0,o.kt)("inlineCode",{parentName:"li"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE"))),(0,o.kt)("h2",{id:"advanced-workload-improvement"},"Advanced Workload Improvement"),(0,o.kt)("h3",{id:"cloneset-optimization-performance-new-featuregate-cloneseteventhandleroptimization"},"CloneSet Optimization Performance: New FeatureGate CloneSetEventHandlerOptimization"),(0,o.kt)("p",null,"Currently, whether it's a change in the state or metadata of a Pod,, the Pod Update event will trigger the CloneSet reconcile logic. CloneSet Reconcile is configured with three workers by default, which is not a problem for smaller cluster scenarios."),(0,o.kt)("p",null,"However, for larger or busy clusters, these unneccesary reconciles will block the true CloneSet reconcile and delay changes such as rolling updates of CloneSet. To solve this problem, you can turn on the feature-gate CloneSetEventHandlerOptimization to reduce some unnecessary enqueueing of reconciles."),(0,o.kt)("h3",{id:"cloneset-new-disablepvcreuse-field"},"CloneSet New disablePVCReuse Field"),(0,o.kt)("p",null,"If a Pod is directly deleted or evicted by other controller or user, the PVCs associated with the Pod still remain. When the CloneSet controller creates new Pods, it will reuse existing PVCs."),(0,o.kt)("p",null,"However, if the Node where the Pod is located experiences a failure, reusing existing PVCs may cause the new Pod to fail to start. For details, please refer to  issue 1099. To solve this problem, you can set the ",(0,o.kt)("strong",{parentName:"p"},"disablePVCReuse=true")," field. After the Pod is evicted or deleted, the PVCs associated with the Pod will be automatically deleted and will no longer be reused."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  ...\n  replicas: 4\n  scaleStrategy:\n    disablePVCReuse: true\n")),(0,o.kt)("h3",{id:"cloneset-new-prenormal-lifecycle"},"CloneSet New PreNormal Lifecycle"),(0,o.kt)("p",null,"CloneSet currently supports two lifecycle hooks, PreparingUpdate and PreparingDelete, which are used for graceful application termination. For details, please refer to the Community Documentation. In order to support graceful application deployment, a new state called PreNormal has been added, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # define with finalizer\n  lifecycle:\n    preNormal:\n      finalizersHandler:\n      - example.io/unready-blocker\n\n  # or define with label\n  # lifecycle:\n  #   preNormal:\n  #     labelsHandler:\n  #       example.io/block-unready: "true"\n')),(0,o.kt)("p",null,"When CloneSet creates a Pod (including normal scaling and upgrades):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The Pod will only be considered "Available" and enter the "Normal" state if it meets the definition of the PreNormal hook.')),(0,o.kt)("p",null,"This is useful for some post-checks when creating Pods, such as checking if the Pod has been mounted to the SLB backend, so as to avoid traffic loss caused by new instance mounting failure after the old instance is destroyed during rolling upgrade."),(0,o.kt)("h2",{id:"4-enhanced-operations-improvement"},"4. Enhanced Operations Improvement"),(0,o.kt)("h3",{id:"containerrestart-new-forcerecreate-field"},"ContainerRestart New forceRecreate Field"),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/containerrecreaterequest"},"CRR")," resource, if the container is in the process of starting up, the CRR will not restart the container again. If you want to force a container restart, you can enable the following field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ContainerRecreateRequest\nspec:\n  ...\n  strategy:\n    forceRecreate: true\n")),(0,o.kt)("h3",{id:"imagepulljob-support-attach-metadata-into-cri-interface"},"ImagePullJob Support Attach metadata into cri interface"),(0,o.kt)("p",null,"When Kubelet creates a Pod, Kubelet will attach metadata to the container runtime using CRI interface. The image repository can use this metadata information to identify the business related to the starting container. Some container actions of low business value can be degraded to protect the overloaded repository."),(0,o.kt)("p",null,"OpenKruise's imagePullJob also supports similar capabilities, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  sandboxConfig:\n    annotations:\n      io.kubernetes.image.metrics.tags: "cluster=cn-shanghai"\n    labels:\n      io.kubernetes.image.app: "foo"\n')),(0,o.kt)("h2",{id:"get-involved"},"Get Involved"),(0,o.kt)("p",null,"Welcome to get involved with OpenKruise by joining us in Github/Slack/DingTalk/WeChat.\nHave something you\u2019d like to broadcast to our community?\nShare your voice at our ",(0,o.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"Bi-weekly community meeting (Chinese)"),", or through the channels below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the community on ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack")," (English)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on DingTalk: Search GroupID ",(0,o.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on WeChat (new): Search User ",(0,o.kt)("inlineCode",{parentName:"li"},"openkruise")," and let the robot invite you (Chinese).")))}m.isMDXComponent=!0}}]);