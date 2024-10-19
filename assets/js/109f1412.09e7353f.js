"use strict";(self.webpackChunkdotslash_website=self.webpackChunkdotslash_website||[]).push([[559],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>h,withMDXComponents:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){return function(t){var a=h(t.components);return n.createElement(e,i({},t,{components:a}))}},h=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=o,m=c["".concat(r,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},86585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:4},r="Motivation",s={unversionedId:"motivation",id:"motivation",title:"Motivation",description:"DotSlash is primarily used as an ad-hoc distribution mechanism for tools,",source:"@site/docs/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/docs/motivation",draft:!1,editUrl:"https://github.com/facebook/dotslash/tree/main/website/docs/motivation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Installing DotSlash",permalink:"/docs/installation"}},l={},d=[{value:"More DotSlash, Less Docker",id:"more-dotslash-less-docker",level:2},{value:"Generating DotSlash Files at Meta",id:"generating-dotslash-files-at-meta",level:2}],c=(h="Mermaid",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var h;const u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,o.mdx)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"motivation"},"Motivation"),(0,o.mdx)("p",null,"DotSlash is primarily used as an ad-hoc distribution mechanism for tools,\nparticularly tools that need to be updated atomically with code. At Meta,\nDotSlash files are meant to live in source control, often to make the underlying\nexecutables available to developers working within the repository. Though for\nCLIs that are designed to be globally available within the company, we also\npublish DotSlash files to a repository with a\n",(0,o.mdx)("a",{parentName:"p",href:"https://docs.chef.io/recipes/"},"Chef recipe")," that will sync the vendored\nDotSlash files with every developer's ",(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/local/bin/")," folder."),(0,o.mdx)("p",null,"Whereas the executables launched by DotSlash are often on the order of megabytes\nor even gigabytes, the accompanying DotSlash file is often only a kilobyte or\ntwo. For use cases such as a large monorepo or a heavily populated\n",(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/local/bin/")," where the number of executables used by the developer is a\nfraction of what is available, the lazy fetching employed by DotSlash\nsignificantly reduces the amount of data being downloaded. This helps ensure\nthat source control checkouts and Chef runs stay fast with high reliability."),(0,o.mdx)("h2",{id:"more-dotslash-less-docker"},"More DotSlash, Less Docker"),(0,o.mdx)("p",null,"At Meta, we use ",(0,o.mdx)("a",{parentName:"p",href:"https://buck2.build/"},"Buck2")," as our build system, and one of\nits key design principles is being\n",(0,o.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/why/"},"remote execution first"),". That is, Buck2 expects\nthe computation defined by a build rule to be performed on a remote host,\nideally in some sort of hermetic container. This is done to ensure build\nreproducibility as well as to facilitate parallelizing build operations across\nyour available hardware."),(0,o.mdx)("p",null,'Because Buck2 and its complementary remote execution cluster is used to build\nfor all sorts of environments (Web, Mobile, VR, Desktop), there is a wide array\nof tools to draw from for an individual remote execution invocation. Trying to\ncreate a custom Docker container with "just the right set of tools" and ensuring\neach is paired with the proper build job would be extremely difficult to manage.'),(0,o.mdx)("p",null,'By comparison, DotSlash makes it possible for developers to "self-serve," as\nthey can introduce a new tool simply by committing an appropriate DotSlash file\nto the repo. Because DotSlash will lazily fetch the corresponding artifact "on\ndemand" when executed in a remote execution container, there is no need to build\nand release a custom container for the remote execution cluster with the new\ntool.'),(0,o.mdx)("p",null,'That said, you do not want your "hermetic" build container to be able to make\narbitrary HTTP GET requests. Admittedly, this is at odds with how DotSlash\nfetches artifacts. At Meta, we address this by writing DotSlash artifacts\ndirectly into the content-addressable storage (CAS) used by our remote execution\ncluster and writing special identifiers into the DotSlash file that our internal\nfork of DotSlash can use to read from the CAS.'),(0,o.mdx)("h2",{id:"generating-dotslash-files-at-meta"},"Generating DotSlash Files at Meta"),(0,o.mdx)("p",null,'Because executing a DotSlash file could "run anything," the provenance of a\nDotSlash file is paramount. At Meta, the overwhelming majority of our DotSlash\nfiles are created by our Continuous Integration (CI) system. As part of the\npublic release of DotSlash, we provide a set of ',(0,o.mdx)("a",{parentName:"p",href:"../github/"},"GitHub Actions"),"\nthat you can use to create a comparable release process. The general workflow is\nas follows:"),(0,o.mdx)(c,{chart:'\nflowchart TD\n    TRIGGER[DotSlash job is triggered<br>in response to an event] --\x3eLINUX_BUILD\n    TRIGGER --\x3eMACOS_BUILD\n    TRIGGER --\x3eWINDOWS_BUILD\n    LINUX_BUILD(Linux build) --\x3e LINUX_ARTIFACTS\n    LINUX_ARTIFACTS(Linux<br>artifacts uploaded)\n    MACOS_BUILD(macOS build) --\x3e MACOS_ARTIFACTS\n    MACOS_ARTIFACTS(macOS<br>artifacts uploaded)\n    WINDOWS_BUILD(Windows build) --\x3e WINDOWS_ARTIFACTS\n    WINDOWS_ARTIFACTS(Windows<br>artifacts uploaded)\n    LINUX_ARTIFACTS --\x3eDOTSLASH\n    MACOS_ARTIFACTS --\x3eDOTSLASH\n    WINDOWS_ARTIFACTS --\x3eDOTSLASH\n    DOTSLASH("DotSlash file(s) generated<br>as specified by DotSlash job")\n    DOTSLASH --\x3eDOTSLASH_COMMIT\n    DOTSLASH_COMMIT{{"proposed change with DotSlash file&lpar;s&rpar;<br>is put up for review"}}\n    DOTSLASH_COMMIT .->COMMIT_VERIFIED\n    COMMIT_VERIFIED(If the checks come back clean,<br>the commit is merged automatically.)\n    DOTSLASH_COMMIT .->COMMIT_REJECTED\n    COMMIT_REJECTED(If the checks find an error,<br>the commit is rejected.)\n',mdxType:"Mermaid"}),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Every DotSlash file in the repository has a policy that determines when it\nshould be regenerated. Available criteria include:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"periodic rebuilds based on a schedule (i.e., ",(0,o.mdx)("inlineCode",{parentName:"li"},"cron"),")"),(0,o.mdx)("li",{parentName:"ul"},"file changes within a prescribed set of folders"),(0,o.mdx)("li",{parentName:"ul"},"manual trigger"))),(0,o.mdx)("li",{parentName:"ul"},"When the criteria is satisfied, a script ","[that also lives in source control]","\nspecified by the policy is run, the output of which defines the one or more\nbuild jobs required to produce the artifacts that will be delivered by\nDotSlash.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Each build job is associated with one or more keys in the ",(0,o.mdx)("inlineCode",{parentName:"li"},'"platforms"'),"\nsection of the ultimate ",(0,o.mdx)("a",{parentName:"li",href:"../dotslash-file/"},"DotSlash file"),"."),(0,o.mdx)("li",{parentName:"ul"},"Note that while the script that generates the jobs could be dynamic, in\npractice, it likely outputs a static configuration defined in the script."))),(0,o.mdx)("li",{parentName:"ul"},"For each build job:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The host does a repository checkout using the same commit that was used to\nrun the script that generated the build jobs."),(0,o.mdx)("li",{parentName:"ul"},'The build execution logic is run and whatever file is written to the path\ndesignated as the "final output" of the build job is compressed using\n',(0,o.mdx)("a",{parentName:"li",href:"https://facebook.github.io/zstd/"},(0,o.mdx)("inlineCode",{parentName:"a"},"zstd"))," and then uploaded to a blobstore.\nThe URL to the blobstore entry, as well as the\n",(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE3"},"BLAKE3 hash"),"\nand file size of the compressed artifact, are retained."))),(0,o.mdx)("li",{parentName:"ul"},"Once all of the build jobs are complete, the metadata across the build jobs is\naggregated to produce a single DotSlash file with all of the ",(0,o.mdx)("inlineCode",{parentName:"li"},'"platforms"'),"\nentries. Because DotSlash will ignore any fields that are not part of its\n",(0,o.mdx)("a",{parentName:"li",href:"../dotslash-file/"},"recognized schema"),", our system at Meta also includes a\nstructured ",(0,o.mdx)("inlineCode",{parentName:"li"},'"build_info"')," property in the DotSlash JSON, which includes fields\nsuch as ",(0,o.mdx)("inlineCode",{parentName:"li"},'"commit_hash"')," and ",(0,o.mdx)("inlineCode",{parentName:"li"},'"commit_date"'),". This is primarily for convenience\nwhen auditing a DotSlash file."),(0,o.mdx)("li",{parentName:"ul"},"A new commit is created that contains only the DotSlash file (or possibly\nmultiple DotSlash files, if it is a more advanced configuration). This commit\nis put up for review, which has the side-effect of triggering any CI jobs that\nare affected by this change."),(0,o.mdx)("li",{parentName:"ul"},"If all of the CI jobs succeed, the commit is automatically pushed to the\nrepository. By default, it is pushed to the main branch, though this is\nconfigurable.")),(0,o.mdx)("p",null,"This system ensures that DotSlash files are regenerated regularly without human\nintervention and that the build artifacts delivered by DotSlash were produced in\na proper build environment that should be free from human tampering."))}p.isMDXComponent=!0}}]);